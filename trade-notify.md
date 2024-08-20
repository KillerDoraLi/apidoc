# 交易异步通知


> 异步通知: 付款的结果会以 POST 方式发送到约定的回调  url 中, 请在接到请求后，对 sgin 和金额进行验证，并输出 `{ "code": "0000", "message": "SUCCESS" }`

**请求方式：** POST <br>
**请求地址：** 约定的回调 url<br>

**请求参数：**

| 参数 <div style="width: 80pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 | 
| --- | --- |  --- |
| app_id | 字符串 |	系统分配的App ID |
| nonce_str |	字符串 |	随机字符串 |
| time_stamp	| 字符串	| 请求时间戳 |
| sign |	字符串 |	签名 |
| out_order_no | 字符串	| 接入方系统唯一订单号 |
| order_no	| 字符串	| 订单号 |
| pay_result	| 字符串	| 支付结果: SUCCESS 或者 FAILED |
| pay_message	| 字符串 | 支付结果信息: "成功" 或者 相应失败原因 |
| amount |字符串 | 金额 |