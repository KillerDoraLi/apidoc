# 用户认证

## 用户信息认证状态查询

> 该接口返回信息认证状态，当返回 json 的 data.status="success" 时为认证完成，data.status="failed" 为失败，其他状态为中间状态

**请求方式：** POST <br>
**请求地址：** `/api/platform/member/status`<br>
<!-- 
**请求参数:**

``` json
{
  "app_id": "1234567890",
  "nonce_str": "WS4CUJC3FXQEHDNA",
  "time_stamp": "1563160034",
  "sign": "b8923de02a03d4391061f084038dc09aec550d25",
  "user_id": "211403198307188237",
  "merber": { "id":1, "phone":"13499002299", "name":"张三", "identity_card_number":"110123198809293928"}
}
``` -->

**请求参数：**

| 参数 <div style="width: 120pt"></div> | 必须 <div style="width: 50pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| user_id | 是 | 字符串 | 调用方唯一的用户id |
| member  | 是 | Object 对象	| 认证信息 "{ "id":1, "phone":"13499002299", "name":"张三", "identity_card_number":"110123198809293928"}" |


**返回结果示例：**

``` json
// 完成认证
{
  "code": 200,
  "data": {
    "created_at": "2021-11-02T07:09:30Z",
    "partner_app_id": "2021081811091302",
    "partner_user_id": "211403198307188237",
    "status": "success",
    "updated_at": "2021-11-02T08:58:01Z",
    "member":{
      "id": 1,
      "phone": "13499002299",
      "name": "张三",
      "identity_card_number": "110123198809293928"
    }
  },
  "message": "success"
}

// 未查询到相关注册记录
{
  "code": 400,
  "data": null,
  "message": "相关注册记录不存在"
}
```

## 用户信息认证结果异步通知
> 通知合作方用户信息认证结果。地址由合作方在调用用户信息认证接口时传入，用户需返回 200，并返回 json {"code":"0000"}
<!-- 
**请求参数：**

```json
{
  "app_id": "2021081811091302",
  "code": "0000",
  "nonce_str": "EvIpLbqhDtWpMwnl",
  "sign": "6cfef4614312f7a1fee226a448a4ed1e5546855e",
  "status": "FAILED",
  "message": "实名认证失败",
  "time_stamp": "1635843481",
  "tx_seq_no": "211403198307188238",
  "user_id": "211403198307188237",
  "id_no": "114031983071882329"
}
```  -->
**请求参数：**

| 参数 <div style="width: 80pt"></div> | 必须 <div style="width: 50pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| user_id | 是 | 字符串 | 调用方唯一的用户id |
| tx_seq_no | 是 | 字符串 | 合作方调用用户信息认证接口时传入的流水号 |
| id_no | 是 | 字符串 | 身份证号 |
| status | 是 | 字符串 | 认证状态 | 
| message | 否 | 字符串 | 认证结果信息 | 