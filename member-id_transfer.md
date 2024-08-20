# 会员身份信息上传

> 注意，需要使用 multipart/form-data 的 Content-Type

**请求方式：** POST <br>
**请求地址：** `/api/platform/member/id_transfer`<br>


**请求参数说明：**

| 参数 <div style="width: 60pt"></div> | 必须 <div style="width: 30pt"></div> | 类型 <div style="width: 40pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| tx_seq_no | 是 | 字符串 | 调用方序列号 |
| partner_user_id	 | 是 | 字符串 | 调用方用户ID |
| face_md5 | 是 | 字符串 | 身份证正面照片的md5，全小写 |
| back_md5 | 是 | 字符串 | 身份证背面照片的md5，全小写 |
| contract_md5 | 是 | 字符串 | 合同文件的md5，全小写 |
| face | 是 | 文件 file | 身份证正面照片,<3M,不参与签名 |
| back | 是 | 文件 file | 身份证背面照片,<3M,不参与签名 |
| contract | 是 | 文件 file | 合同文件,<3M,不参与签名 |


**返回结果示例：**

``` json
{
  "code": "0000",
  "message": "success",
  "data":null,
}
```


