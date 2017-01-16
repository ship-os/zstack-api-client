/** API Doc
-------------

HTTP Request Body

 a) Login API: 密码使用 sha512 加密
   {
     "org.zstack.header.identity.APILogInByAccountMsg": {
       "accountName": "admin",
       "password": "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86"
     }
   }

 b) 一般API:
   {
     "API 描述符": {
       "session": {
         "uuid": "LogIn 时拿到的 session UUID"
       },
       "API 字段名 1": "",
       "API 字段名 2": ""
     }
   }

 c) Logout API:
   {
     "org.zstack.header.identity.APILogOutMsg": {
       "sessionUuid": "你要 LogOut 的 Session UUID"
     }
   }


HTTP Status Code
 200: HTTP 调用成功。但并不代表 API 执行成功，API 的执行结果由 API 返回中的 success 字段决定， true 表示成功;false 表示失败
 其它: 含义跟标准的 HTTP 返回码相同，例如 500 代表 Internal Server Error;404 代表 No such page



HTTP Response Body

  {
    uuid: null | 'fee83ed8529340cd8528b3b408dc16b0',
    state: 'Done', // or 'Processing'
    createdDate: 'Feb 16, 2016 5:01:11 PM',
    finishedDate: 'Feb 16, 2016 5:01:12 PM',
    result: 'JSON stringified...'
  }

 - uuid: <String> JOB UUID，用户可以用该 UUID 去查询一个 API JOB 当前的执行状态。当 state == Done 时，该字段可能为 NULL。
 - state: <String> JOB 状态。包括两种状态:Processing，该 JOB 还在执行;Done，JOB 已 经完成
 - result: <String> API 结果，JSON 字符串。当 state = Processing 时，该字段为 NULL
 - createdDate: <String> JOB 创建时间
 - finishedDate: <String> JOB 创建时间

 关于result: (一般情况)

     {
       'API Reply 描述符': {
         'inventory': {
           'uuid': '9eba9754f8c2470cbb377088e61c4da2',
           '字段1': '',
           '字段2': ''
         },
         'success': true
       }
     }

   - inventory: 结果内容
   - success: 是否调用成功
   - invenrory.uuid: 当前API调用的 JOB UUID

     {
       'org.zstack.header.identity.APILogInReply': {
         'inventory': {
           'uuid': '9eba9754f8c2470cbb377088e61c4da2',
           'accountUuid': '36c27e8ff05c4780bf6d2fa65700f22e',
           'userUuid': '36c27e8ff05c4780bf6d2fa65700f22e',
           'expiredDate': 'Feb 17, 2016 3:15:01 PM',
           'createDate': 'Feb 16, 2016 7:15:01 PM'
         },
         'success': true
       }
     }

 */
