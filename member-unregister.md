# 撤销用户认证

> 删除用户认证信息

**请求方式：** POST <br>
**请求地址：** `/api/platform/member/unregister`<br>

<!-- **请求参数:**
``` json
{
  "app_id": "1234567890",
  "nonce_str": "WS4CUJC3FXQEHDNA",
  "time_stamp": "1563160034",
  "sign": "b8923de02a03d4391061f084038dc09aec550d25",
  "user_id": "211403198307188237"
}
``` -->

**请求参数：**

| 参数 <div style="width: 80pt"></div> | 必须 <div style="width: 40pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| user_id | 是 | 字符串 | 调用方唯一的用户id |
| tx_seq_no | 是 | 字符串 | 合作方调用用户信息认证接口时传入的流水号 |


**返回结果示例：**

``` json
// 成功
{
  "code": 200,
  "data": "",
  "message": "success"
}

// 失败
{
  "code": 400,
  "data": null,
  "message": "撤销注册请求错误：xxxx"
}
```