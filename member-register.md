# 用户信息认证


> 该接口返回信息认证页面地址，调用方需要引导用户跳转至相关页面, 认证结果会通过 POST 方式异步通知到配置的 notify_url，也可以直接通过 “**2.2 用户信息认证状态查询**” 接口查询

**请求方式：** POST <br>
**请求地址：**`/api/platform/member/register`<br>

<!-- **请求参数：**
``` json
{
  "app_id": "1234567890",
  "nonce_str": "WS4CUJC3FXQEHDNA",
  "time_stamp": "1563160034",
  "sign": "b8923de02a03d4391061f084038dc09aec550d25",
  "user_id": "211403198307188237",
  "tx_seq_no": "211403198307188238",
  "channel": "mobile",
  "notify_url": "http://xxxx",
  "return_url": "http://xxxx"
}
``` -->


**请求参数：**

| 参数 <div style="width: 120pt"></div> | 必须 <div style="width: 50pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 <div style="width: 120pt"></div> |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| user_id | 是 | 字符串 | 调用方唯一的用户id |
| tx_seq_no | 是 | 字符串 | 订单流水号 |
| channel | 是 | 字符串 | 页面类型代码，mobile，pc之一 |
| notify_url | 是 | 字符串 | 结果通知地址 |
| return_url | 是 | 字符串 | 返回跳转地址 |


**返回结果示例：**

``` json
// 成功:
{
  "code": 200,
  "data": {
    "Url": "http://stag.demizhongbao.com/jiatui/index.html?token=8c672bc9302e44e0a6914d10ea091407"
  },
  "message": "success"
}
// 相同ID的用户已经成功注册:
{
  "code": 200,
  "data": {
    "message": "已成功注册",
    "status": "success",
    "url": ""
  },
  "message": "success"
}
// 流水号重复:
{
  "code": 400,
  "data": null,
  "message": "开户请求错误:流水号重复"
}
```



