import Client from './client'
import { ApiHeader } from './api-header'
import * as errors from '../error-types'
import axios from 'axios'

/**
 * 模拟 API 调用，直接从目标 url 位置获得 JSON 数据。 仅开发过程未实现的接口使用。
 * @param url
 * @return {*|Promise} - JSON 数据
 */
function fakeCall (url) {
  return axios.get(url)
    .then((response) => response.data)
}

class ZStackAPI {
  constructor ({ entrypoint, timeout }) {
    const client = new Client({ entrypoint, timeout })
    this._client = client

    // Auth 模块
    this.auth = {
      /**
       * 以 Account 登录
       * @param payload - 消息体参考 APILogInByAccountMsg
       * @return {*|Promise} - 消息体参考 APILogInReply
       */
      logInByAccount (payload) {
        return client.syncApi(ApiHeader.APILogInByAccountMsg, payload)
      },

      /**
       * TODO: 实现接口，调用API
       * 以 Username 登录
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      logInByUsername (payload) {
        throw new errors.NotImplementedError('logInByUsername')
      },

      /**
       * TODO: 实现接口，调用API
       * 以 LDAP UID 登录
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      logInByLDAP (payload) {
        throw new errors.NotImplementedError('logInByLDAP')
      },

      /**
       * 获取当前 session 对应的 Account 信息
       * @param payload - 消息体参考 APIQueryAccountMsg
       * @return {*|Promise} - 消息体参考 APIQueryAccountReply
       */
      getCurrentAccount (session, payload) {
        let queryPayload = {
          'count': false,
          'start': 0,
          'replyWithCount': true,
          'conditions': []
        }
        queryPayload = Object.assign(queryPayload, payload)

        return client.syncQueryApi(ApiHeader.APIQueryAccountMsg, queryPayload, session)
          .then((inventories) => inventories[0])  // First element
      },

      /**
       * TODO: 实现接口
       * 获取 User 信息
       * @param session - 当前会话的 SessionInventory
       * @param payload - 消息体参考 APIGetUserMsg
       * @return {*|Promise} - 消息体参考 APIGetUserReply
       */
      getCurrentUser (session, payload) {
        // TODO: 调用 API
        throw new errors.NotImplementedError('getCurrentUser')
      }
    }

    // Zone 模块
    this.zone = {
      /**
       * 获取当前 session 对应的所有 Zone 列表
       * @param session - 当前会话的 SessionInventory
       * @param payload - 消息体参考 APIQueryZoneMsg
       * @return {*|Promise} - 消息体参考 APIQueryZoneReply
       */
      getZones (session, payload) {
        let queryPayload = {
          'count': false,
          'start': 0,
          'replyWithCount': true,
          'conditions': []
        }
        queryPayload = Object.assign(queryPayload, payload)

        return client.syncQueryApi(ApiHeader.APIQueryZoneMsg, queryPayload, session)
      }
    }

    // Host 模块
    this.host = {
      /**
       * TODO: 实现接口，调用API
       * 获取当前 session 对应的所有 Host 列表
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      queryHosts (session, payload) {
        throw new errors.NotImplementedError('queryHosts')
      },

      /**
       * TODO: 实现接口，调用API
       * 根据 UUID 返回 Host
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      getHostByUuid (session, payload) {
        throw new errors.NotImplementedError('getHostByUuid')
      },

      /**
       * TODO: 实现接口，调用API
       * 添加 Host
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      addHost (session, payload) {
        throw new errors.NotImplementedError('addHost')
      },

      /**
       * TODO: 实现接口，调用API
       * 更新 Host
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      updateHost (session, payload) {
        throw new errors.NotImplementedError('updateHost')
      },

      /**
       * TODO: 实现接口，调用API
       * 更新 Host
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      deleteHost (session, payload) {
        throw new errors.NotImplementedError('deleteHost')
      }
    }

    // Instance 模块 （即 Virtual Machine）
    this.instance = {
      /**
       * TODO: 实现接口，调用API
       * 获取当前 session 对应的所有 VM 列表
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      queryInstances (session, payload) {
        throw new errors.NotImplementedError('queryInstances')
      },

      /**
       * TODO: 实现接口，调用API
       * 根据 UUID 返回 VM
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      getInstanceByUuid (session, payload) {
        throw new errors.NotImplementedError('getInstanceByUuid')
      },

      /**
       * TODO: 实现接口，调用API
       * 添加 VM
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      addInstance (session, payload) {
        throw new errors.NotImplementedError('addInstance')
      },

      /**
       * TODO: 实现接口，调用API
       * 更新 VM
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      updateInstance (session, payload) {
        throw new errors.NotImplementedError('updateInstance')
      },

      /**
       * TODO: 实现接口，调用API
       * 删除 VM
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      deleteInstance (session, payload) {
        throw new errors.NotImplementedError('deleteInstance')
      }
    }

    // Cluster 模块
    this.cluster = {
      /**
       * TODO: 实现接口，调用API
       * 获取当前 session 对应的所有 Cluster 列表
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      queryClusters (session, payload) {
        throw new errors.NotImplementedError('queryClusters')
      },

      /**
       * TODO: 实现接口，调用API
       * 根据 UUID 返回 Cluster
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      getClusterByUuid (session, payload) {
        throw new errors.NotImplementedError('getClusterByUuid')
      },

      /**
       * TODO: 实现接口，调用API
       * 添加 Cluster
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      addCluster (session, payload) {
        throw new errors.NotImplementedError('addCluster')
      },

      /**
       * TODO: 实现接口，调用API
       * 更新 Cluster
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      updateCluster (session, payload) {
        throw new errors.NotImplementedError('updateCluster')
      },

      /**
       * TODO: 实现接口，调用API
       * 删除 Cluster
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      deleteCluster (session, payload) {
        throw new errors.NotImplementedError('deleteCluster')
      }
    }

    // Image 模块
    this.image = {
      /**
       * TODO: 实现接口，调用API
       * 获取当前 session 对应的所有 Image 列表
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      queryImages (session, payload) {
        return fakeCall('/assets/data/images.json')
      },

      /**
       * TODO: 实现接口，调用API
       * 根据 UUID 返回 Image
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      getImageByUuid (session, payload) {
        throw new errors.NotImplementedError('getImageByUuid')
      },

      /**
       * TODO: 实现接口，调用API
       * 添加 Image
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      addImage (session, payload) {
        throw new errors.NotImplementedError('addImage')
      },

      /**
       * TODO: 实现接口，调用API
       * 更新 Image
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      updateImage (session, payload) {
        throw new errors.NotImplementedError('updateImage')
      },

      /**
       * TODO: 实现接口，调用API
       * 删除 Image
       * @param session - 当前会话的 SessionInventory
       * @param payload - TODO: 说明消息体参考（数据结构说明）
       * @return {*|Promise} - TODO: 说明消息体参考（数据结构说明）
       */
      deleteImage (session, payload) {
        throw new errors.NotImplementedError('deleteImage')
      }
    }
  }

  get client () {
    return this._client
  }
}

export default ZStackAPI
