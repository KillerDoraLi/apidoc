# 转账到支付宝

> 将处理后的json数据发送到以下接口，创建支付请求。支付结果会通过POST方式异步通知到配置的 notify_url。

**请求方式：** POST <br>
**请求地址：** `/api/platform/alipay/payments`<br>

<!-- **请求参数：**
``` json
{
  "account_name": "张三",
  "alipay_account": "15017898739",
  "amount": "1223.56",
  "app_id": "2019071516330002",
  "identity_card_number": "441283195508011086",
  "nonce_str": "3T0ZGV56BO9BKGXC",
  "order_info": "代付服务费",
  "out_order_no": "20190918384748802",
  "phone": "15698238449",
  "time_stamp": "1565070579",
  "sign": "b59eaecfa9848fc3cd040ebd38000ca343726129"
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
| alipay_account | 是 | 字符串 | 收款人支付宝账号，支付宝登录号，支持邮箱和手机号格式 |
| account_name | 是 | 字符串 | 收款人真实姓名,如果本参数不为空，则会校验该账户在支付宝登记的实名是否与收款方真实姓名一致。 |
| identity_card_number | 是 | 字符串 | 收款人身份证号码 |
| phone | 否 | 字符串 | 收款人手机号码 |
| amount | 是 | 字符串 | 金额，只支持2位小数，小数点前最大支持13位，金额必须大于等于0.1元。 |
| order_info | 是 | 字符串 | 转账信息 (最长支持100个英文/50个汉字)，显示在收款方的账单详情页 |
| remark | 否 | 字符串 | 转账备注（支持200个英文/100个汉字，金额达到（大于等于）50000元，remark不能为空。收款方可见，会展示在收款用户的收支详情中。|

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

- 方式一：
使用相同的 out_order_no 再次发起调用，如果返回:
```
{
  "code": "4220012",
  "message": "重复订单，OutOrderNo 已经存在"
}
```
则表示之前的调用已成功，不需要再次发起调用

- 方式二：
使用【交易结果查询】接口使用 out_order_no 查询之前的调用结果，如果已经存在，不需要重新发起调用。


### 交易异步通知
详见 3.5 交易异步通知