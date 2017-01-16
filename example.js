import ZStackAPI from './zstack'
import * as apiErrors from './error-types'

const ops = {
  // API Server Address
  entrypoint: 'http://api.shipos.dev.local:9000/zstack/api',
  // Or lazy load:
  //   get entrypoint () {
  //     return `http://${window.location.hostname}:9000/zstack/api`
  //   },
  // 超时，毫秒ms
  timeout: 1000
}

const zstack = new ZStackAPI(ops)

// 登录
zstack.auth.logInByAccount({
  accountName: 'admin',
  // SHA512('password')
  password: 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86'
})
  .then((result) => {
    console.log('Log-in reply / session:', result)
  })
  .catch(function (err) {
    if (err instanceof apiErrors.APIResultError) {
      // API 调用结果中存在 Error
      console.error('APIResultError', err.resultError)
    } else {
      // 其它 error. 非用户操作预期的
      console.error('Failed to login:', err)
    }
  })
