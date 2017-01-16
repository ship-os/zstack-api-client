import ExtendableError from 'es6-error'

/**
 * 错误的使用同步方式调用了需要通过异步（长轮训）方式调用的API
 */
export class APIWrongSyncCallError extends ExtendableError {
  constructor (descriptor, rawResult = null, message = 'Wrong sync API call. Should issue async call instead.') {
    let msg = `${message} ${descriptor ? ' Descriptor: ' + descriptor : ''}`
    super(msg)
    this.descriptor = descriptor
    this.rawResult = rawResult
  }
}

/**
 * API 调用过程中服务器返回了 HTTP 错误。 HTTP调用成功，但状态码不是预期值。
 */
export class APIHttpError extends ExtendableError {
  constructor (message) {
    super(`HTTP request is failed. ${message}`)
  }
}

/**
 * API 调用中，返回的 result 中表示操作未成功，并返回内部 error 信息。
 */
export class APIResultError extends ExtendableError {
  constructor (err, message = 'API result has error.') {
    super(message)
    this.resultError = err
  }
}

/**
 * 逻辑没有实现
 */
export class NotImplementedError extends ExtendableError {
  constructor (descriptor) {
    let msg = `'${descriptor}' is not implemented.`
    super(msg)
    this.descriptor = descriptor
  }
}
