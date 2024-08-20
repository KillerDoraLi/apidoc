# 支付凭证下载

> 将处理后的 json 数据发送到以下接口，创建支付凭证下载请求


**请求方式：** POST <br>
**请求地址：** `/api/platform/vouchers/download`<br>
<!-- 
**请求参数：**
``` json
{
  "app_id": "2019071516330002",
  "nonce_str": "QWFHFC5COWUNI6YW",
  "order_no": "b17d7668af654e04bb8bf2dc8faecac4",
  "time_stamp": "1565075652",
  "sign": "a780ed1ca7a8936655df61d34c29e77149b4f852"
}
``` -->

**请求参数：**

| 参数 <div style="width: 60pt"></div> | 必须 <div style="width: 30pt"></div> | 类型 <div style="width: 40pt"></div> | 说明 |
| --- | --- | --- | --- |
| app_id | 是 | 字符串 | 系统分配的App ID |
| nonce_str | 是 | 字符串 | 随机字符串 |
| time_stamp | 是 | 字符串 | 请求时间戳 |
| sign | 是 | 字符串 | 签名 |
| out_order_no | 是 | 字符串 | 接入方系统唯一订单号 |
| order_no | 否 | 字符串 | 税筹系统唯一订单号 |

**响应结果：**
成功后返回相应的 PDF 格式订单支付凭证文件