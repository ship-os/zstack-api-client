import axios from 'axios' // https://github.com/mzabriskie/axios
import * as errors from '../error-types'

const API_DESCRIPTOR = Symbol('API Descriptor')

const API_RESPONSE_STATE_DONE = 'Done'
// const API_RESPONSE_STATE_PROCESSING = 'Processing'

class Client {
  constructor ({ entrypoint, timeout }) {
    // Create HTTP Client via axios
    this._httpClient = axios.create({
      baseURL: entrypoint,
      timeout: timeout
    })
  }

  get httpClient () {
    return this._httpClient
  }

  /**
   * 构建 HTTP API 消息体
   * @param messageClass - 消息体强类型的类Class
   * @param payload - 消息载荷
   * @param sessionInventory - Session 清单
   * @param timeout - 超时时间，毫秒
   */
  buildMessage (messageClass, payload, sessionInventory, timeout) {
    const msg = Object.create(messageClass.prototype)
    Object.assign(msg, payload)

    if (sessionInventory) {
      msg.session = sessionInventory
    }

    if (timeout) {
      msg.timeout = timeout
    }

    let apiMap = msg.toApiMap()
    // 注入 API 消息描述符 (descriptor)
    apiMap[API_DESCRIPTOR] = messageClass.prototype.constructor.name

    return apiMap
  }

  /**
   * 通过raw消息体，发起同步类型API的调用
   * @param msg
   * @return {Promise<R2|R1>|Promise<R>|Promise.<TResult>} - Resolved 时返回原始 HTTP Response Body 的 "result" 字段的值
   */
  syncCall (msg) {
    let req = this.httpClient.post('', msg)

    return req.then((resp) => {
      // 检查状态码
      if (resp.status === 200) {
        let data = resp.data

        // 同步调用的API，返回数据中的 state 应当为 'Done'
        if (data.state === API_RESPONSE_STATE_DONE) {
          // 将String转换为JSON对象，并返回给当前 Promise
          return JSON.parse(data.result)
        } else {
          // state 不为 'Done'.
          // 本方法是同步调用，需要回包结果的state必须为 Done
          throw new errors.APIWrongSyncCallError(msg[API_DESCRIPTOR], data)
        }
      } else {
        // Not StatusCode 200
        throw new errors.APIHttpError(`Failed to make an API call: ${msg[API_DESCRIPTOR]}, ${resp.status}, ${resp.statusText}`)
      }
    })
  }

  /**
   * 通过载荷等上下文信息，发起同步类型的API的调用
   * @param messageClass
   * @param payload
   * @param sessionInventory
   * @param timeout
   * @return {Promise<R2|R1>|Promise<R>|Promise.<TResult>} - Resolved 时返回内部的`inventory` key 的 value. Reject 时抛出 APIResultError。
   */
  syncApi (messageClass, payload, sessionInventory, timeout) {
    const msg = this.buildMessage(messageClass, payload, sessionInventory, timeout)
    return this.syncCall(msg)
      .then((result) => {
        let resultContent = this.getResultContent(result)
        if (resultContent.success) {
          return resultContent.inventory  // General API Inventory
        } else {
          throw new errors.APIResultError(resultContent.error)
        }
      })
  }

  /**
   * 通过载荷等上下文信息，发起同步类型的API的调用
   * @param messageClass
   * @param payload
   * @param sessionInventory
   * @param timeout
   * @return {Promise<R2|R1>|Promise<R>|Promise.<TResult>} - Resolved 时返回内部的`inventories` key 的 value. Reject 时抛出 APIResultError。
   */
  syncQueryApi (messageClass, payload, sessionInventory, timeout) {
    // http://zstackdoc.readthedocs.io/en/latest/userManual/query.html
    const msg = this.buildMessage(messageClass, payload, sessionInventory, timeout)
    return this.syncCall(msg)
      .then((result) => {
        let resultContent = this.getResultContent(result)
        if (resultContent.success) {
          return resultContent.inventories  // Query API Inventories
        } else {
          throw new errors.APIResultError(resultContent.error)
        }
      })
  }

  /**
   * 1) 若原始消息体为：
   *    {
   *      'API Reply 描述符': {
   *        'inventory': {...}, // Query API 为 'inventories'
   *        'success': true
   *      }
   *    }
   * 则返回 resultContent:
   *    {
   *      'inventory': {...},   // Query API 为 'inventories'
   *      'success': true
   *    }
   *
   * 2) 若原始消息体为：
   *    {
   *      'API Reply 描述符': {
   *        'error': {...},
   *        'success': false
   *      }
   *    }
   * 则返回 resultContent:
   *    {
   *      'error': {...},
   *      'success': true
   *    }
   * @param result
   */
  getResultContent (result) {
    return Object.values(result)[0]
  }
}

export default Client
