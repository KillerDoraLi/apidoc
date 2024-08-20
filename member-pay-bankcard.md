# 转账到银行卡（增强版）

> **增强版，支持使用合作方用户ID转账**<br>
将处理后的 json 数据发送到以下接口，创建支付请求。支付结果会通过POST方式异步通知到配置的 notify_url

**请求方式：** POST <br>
**请求地址：** `/api/platform/member/pay/bankcard`<br>

<!-- **请求参数：**
``` json
{
  "user_id": "778899",
  "amount": "1223.56",
  "app_id": "1234567890",
  "nonce_str": "WS4CUJC3FXQEHDNA",
  "phone": "15698238449",
  "time_stamp": "1563160034",
  "sign": "b8923de02a03d4391061f084038dc09aec550d25",
  "out_order_no": "2019091834877"
}
``` -->

**请求参数：**

| 参数 <div style="width: 80pt"></div> | 必须 <div style="width: 30pt"></div> | 类型 <div style="width: 40pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| out_order_no | 是 | 字符串 | 接入方系统唯一订单号 |
| user_id | 否 | 字符串 | user_id和下面的(card_number,account_name,bank_name,branch_bank_name,identity_card_number,phone)二选一，只有在user_id为空的情况下，才使用银行卡信息 |
| card_number | 否 | 字符串 | 收款人卡号 |
| account_name | 否 | 字符串 | 金额 |收款人姓名 |
| bank_name | 否 | 字符串 | 收款银行名称简称，例如， 招商银行 |
| branch_bank_name | 否 | 字符串 | 收款银行名称，精确到支行 |
| identity_card_number | 否 | 字符串 | 收款人身份证号码 |
| phone | 否 | 字符串 | 收款人手机号码 |
| amount | 是 | 字符串 | 金额 |
| remark | 否 | 字符串 | 收款备注， 传递至银行， 一般作为订单摘要展示 |


**响应结果示例：**

``` json
{
  "code": "0000",
  "message": "成功",
  "order_no": "c346206bcc4d4af7b1f2dfbfbcf0e052",
  "out_order_no": "2019091834877"
}
```


### 网络通讯异常或者服务没有反馈的处理：

- 方式一：<br>
使用相同的 out_order_no 再次发起调用，如果返回:
```
  {
    "code": "4220012",
    "message": "重复订单，OutOrderNo 已经存在"
  }
```
则表示之前的调用已成功,不需要再次发起调用

- 方式二：<br>
使用【交易结果查询】接口使用 out_order_no 查询之前的调用结果，如果已经存在，不需要重新发起调用。

### 交易异步通知
详见 3.5 交易异步通知