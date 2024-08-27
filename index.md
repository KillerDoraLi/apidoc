---
layout: doc
---

# 开发前必读

## 测试环境API网关

BASE_URL: http://stag.tsingpay.cn

## 接口使用 AppID + APP Secret 通过 HMAC SHA1 加密鉴权
- App ID：渠道唯一性标示符，由系统分配。
- App Secret: 接口秘钥，系统分配
- HMAC：是基于散列的消息认证码（Hash-based MessageAuthentication Code）。

## 签名原串生成规则：
将已有json数组中的参数按照 `key_1 = value_1 & key_2 = value2` 的形式进行排列；<br>
参数的排放顺序按照首字母 ASCII 码进行升序排列，<br>
值不为空的参数均需参与签名
url 地址需要进行 urlencode 编码后传入接口

```
得到加密原串 s：
account_name=张胜男&amount=1223.56&app_id=2019071516330002&branch_bank_name=中国银行&card_number=6216261000000000018&identity_card_number=441283195508011086&nonce_str=MI7X1BMGJJNCOJQS&out_order_no=20190918384748&phone=15698238449&time_stamp=1563852246
```


生成16进制 sign

```php
// php 样例代码

hash_hmac("sha1", $s, $secret_key, false);

```

```go
// golang 样例代码

func Hmac5Sign(secretKey, s string) []byte {
  m := hmac.New(sha1.New, []byte(secretKey))
  m.Write([]byte(s))
  return m.Sum(nil)
}
```


## 返回码
| 返回码 <div style="width: 50pt"></div> | 说明 <div style="width: 350pt"></div> |
| --- | --- |
| 0000 | 交易成功 |
| 42207 | 数据解析失败 |
| 42208 | 请求数据已过期 |
| 42209 | 签名验证失败 |
| 42210 | AppID 不存在，或应用状态异常 |