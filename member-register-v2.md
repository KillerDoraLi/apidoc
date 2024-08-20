# 用户注册

**从注册到转账流程：**
1. 调用用户注册，登记基本信息
2. 调用用户资料上传，上传身份证照片、银行卡信息等，核验通过即可转账

**请求方式：** POST <br>
**请求地址：** `/api/platform/member/register/v2`<br>

**请求参数方式：**

| 参数 <div style="width: 120pt"></div> | 必须 <div style="width: 50pt"></div> | 类型 <div style="width: 60pt"></div> | 说明 <div style="width: 120pt"></div> |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| user_id | 是 | 字符串 | 调用方唯一的用户 ID |
| tx_seq_no | 是 | 字符串 | 订单流水号 |
| cert_number | 是 | 字符串 | 用户身份证号 |
| name | 是 | 字符串 | 用户真实姓名 |

**响应状态说明：**

| 状态 | 说明 |
| --- | --- |
| 0000	 | 注册成功 |
| 40001	 | 开户请求错误:流水号重复 |