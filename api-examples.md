# 开发前必读



## 测试环境API网关

BASE_URL: http://stag.tsingpay.cn

## 接口使用 AppID + APP Secret 通过 HMAC SHA1 加密鉴权
- App ID：渠道唯一性标示符，由系统分配。
- App Secret: 接口秘钥，系统分配。
- HMAC：是基于散列的消息认证码（Hash-based MessageAuthentication Code）。

## 签名原串生成规则：
::: details 样例代码 `api.php`
```php
<?php
require "helper.php";

error_reporting(0);

function buildRequestPara($para_temp, $app_id, $app_secret) {
  //除去待签名参数数组中的空值和签名参数
  $para_filter = paraFilter($para_temp);
  //对待签名参数数组排序
  $para_sort = argSort($para_filter);
  //生成签名结果
  $mysign = buildRequestSign($para_sort, $app_id, $app_secret);
  //签名结果与签名方式加入请求提交参数组中
  $para_sort['sign'] = $mysign;
  foreach ($para_sort as $key => $value) {
      $para_sort[$key] = $value;
  }
  return $para_sort;
}

/**
 * 生成签名结果
 * @param $para_sort 已排序要签名的数组
 * return 签名结果字符串
 */
function buildRequestSign($para_sort, $app_id, $app_secret) {
  $prestr = createLinkstring($para_sort);
  // echo $prestr . "\n";
  return hash_hmac("sha1", $prestr, $app_secret, false);
}

function buildRequestJSON($request_data,$url) {
  $sResult = '';
  //远程获取数据
  $sResult = getHttpResponseJSON($url, $request_data);
  return $sResult;
}

$app_id = "****";

$app_secret = "****";

$bank_data = array(
  'app_id' => $app_id,
  'nonce_str' => genLetterDigitRandom(16),
  'time_stamp' => time() . "",
  'card_number' => '6216261000000000018',
  'account_name' => '张三',
  'phone' => '15698238449',
  'branch_bank_name' => '中国银行',
  'identity_card_number' => '441283195508011086',
  'amount' => '0.1',
  'out_order_no' => "20190918384748" . rand(100, 999)
);

$alipay_data = array(
  'app_id' => $app_id,
  'nonce_str' => genLetterDigitRandom(16),
  'time_stamp' => time() . "",
  'alipay_account' => '15017898739',
  'account_name' => '张三',
  'phone' => '15698238449',
  'identity_card_number' => '441283195508011086',
  'amount' => '0.1',
  'order_info' => '代付服务费',
  'remark' => '代付服务费',
  'out_order_no' => "20190918384748" . rand(100, 999) 
);

$query_data = array(
  'app_id' => $app_id,
  'nonce_str' => genLetterDigitRandom(16),
  'time_stamp' => time() . "",
  'order_no' => "9adbb6ab58774f078266a43617b11271"
);


$sortPara = buildRequestPara($query_data, $app_id, $app_secret);
// echo json_encode($sortPara);
$html_text = buildRequestJSON($sortPara, 'http://stag.tsing-pay.com/api/platform/payment_results');

echo $html_text;
```
:::

::: details 样例代码 `helper.php`
```php
<?php

/**
 * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
 * @param $para 需要拼接的数组
 * return 拼接完成以后的字符串
 */
function createLinkstring($para) {
	$arg  = "";
	while (list ($key, $val) = each ($para)) {
		$arg.=$key."=".$val."&";
	}
	//去掉最后一个&字符
	$arg = substr($arg,0,count($arg)-2);
	//file_put_contents("log.txt","转义前:".$arg."\n", FILE_APPEND);
	//如果存在转义字符，那么去掉转义
	if(get_magic_quotes_gpc()){$arg = stripslashes($arg);}
	//file_put_contents("log.txt","转义后:".$arg."\n", FILE_APPEND);
	return $arg;
}
/**
 * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串，并对字符串做urlencode编码
 * @param $para 需要拼接的数组
 * return 拼接完成以后的字符串
 */
function createLinkstringUrlencode($para) {
	$arg  = "";
	while (list ($key, $val) = each ($para)) {
		$arg.=$key."=".urlencode($val)."&";
	}
	//去掉最后一个&字符
	$arg = substr($arg,0,count($arg)-2);
	
	//如果存在转义字符，那么去掉转义
	if(get_magic_quotes_gpc()){$arg = stripslashes($arg);}
	return $arg;
}
/**
 * 除去数组中的空值和签名参数
 * @param $para 签名参数组
 * return 去掉空值与签名参数后的新签名参数组
 */
function paraFilter($para) {
	$para_filter = array();
	while (list ($key, $val) = each ($para)) {
		if($key == "sign" || $val == "")continue;
		else	$para_filter[$key] = $para[$key];
	}
	return $para_filter;
}
/**
 * 对数组排序
 * @param $para 排序前的数组
 * return 排序后的数组
 */
function argSort($para) {
	ksort($para);
	reset($para);
	return $para;
}
/**
 * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
 * 注意：服务器需要开通fopen配置
 * @param $word 要写入日志里的文本内容 默认值：空值
 */
function logResult($word='') {
	$fp = fopen("log.txt","a");
	flock($fp, LOCK_EX) ;
	fwrite($fp,"执行日期：".strftime("%Y%m%d%H%M%S",time())."\n".$word."\n");
	flock($fp, LOCK_UN);
	fclose($fp);
}

/**
 * 远程获取数据，POST模式
 * 注意：
 * @param $url 指定URL完整路径地址
 * @param $para 请求的数据
 * return 远程输出的数据
 */
function getHttpResponseJSON($url, $para) {
  $json = json_encode($para);     
  $curl = curl_init($url);
  curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");                          
  curl_setopt($curl, CURLOPT_POSTFIELDS, $json);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);// 显示输出结果

  curl_setopt($curl, CURLOPT_HTTPHEADER, array(                 
      'Content-Type: application/json',
      'Content-Length: ' . strlen($json))
  );
  $responseText = curl_exec($curl);
  file_put_contents("log.txt","返回值:".$responseText."\n", FILE_APPEND);  
  curl_close($curl);
  return $responseText;
}

/**
 * 实现多种字符解码方式
 * @param $input 需要解码的字符串
 * @param $_output_charset 输出的解码格式
 * @param $_input_charset 输入的解码格式
 * return 解码后的字符串
 */
function charsetDecode($input,$_input_charset ,$_output_charset) {
	$output = "";
	if(!isset($_input_charset) )$_input_charset  = $_input_charset ;
	if($_input_charset == $_output_charset || $input ==null ) {
		$output = $input;
	} elseif (function_exists("mb_convert_encoding")) {
		$output = mb_convert_encoding($input,$_output_charset,$_input_charset);
	} elseif(function_exists("iconv")) {
		$output = iconv($_input_charset,$_output_charset,$input);
	} else die("sorry, you have no libs support for charset changes.");
	return $output;
}

//格式化时间戳
function local_date($format, $time = NULL) {
  if ($time === NULL) {
    $time = gmtime();
  } elseif ($time <= 0) {
    return '';
  }
  return date($format, $time);
}

function genLetterDigitRandom($size) {
	$allLetterDigit = array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	$randomSb = "";
	$digitSize = count($allLetterDigit)-1;
	for($i = 0; $i < $size; $i ++){
		$randomSb .= $allLetterDigit[rand(0,$digitSize)];
	}
	return $randomSb;
}
?>
```
:::

将已有json数组中的参数按照`key_1=value_1&key_2=value2`的形式进行排列；<br>
参数的排放顺序按照首字母 ASCII 码进行升序排列，<br>
值不为空的参数均需参与签名，
url 地址需要进行 urlencode 编码后传入接口。

得到加密原串 s：
```
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