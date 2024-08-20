import{_ as t,c as d,o,a3 as r}from"./chunks/framework.8cvu3CMh.js";const m=JSON.parse('{"title":"支付凭证下载","description":"","frontmatter":{},"headers":[],"relativePath":"vouchers-download.md","filePath":"vouchers-download.md"}'),e={name:"vouchers-download.md"},a=r('<h1 id="支付凭证下载" tabindex="-1">支付凭证下载 <a class="header-anchor" href="#支付凭证下载" aria-label="Permalink to &quot;支付凭证下载&quot;">​</a></h1><blockquote><p>将处理后的 json 数据发送到以下接口，创建支付凭证下载请求</p></blockquote><p><strong>请求方式：</strong> POST <br><strong>请求地址：</strong> <code>/api/platform/vouchers/download</code><br></p><p><strong>请求参数：</strong></p><table tabindex="0"><thead><tr><th>参数 <div style="width:60pt;"></div></th><th>必须 <div style="width:30pt;"></div></th><th>类型 <div style="width:40pt;"></div></th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>是</td><td>字符串</td><td>系统分配的App ID</td></tr><tr><td>nonce_str</td><td>是</td><td>字符串</td><td>随机字符串</td></tr><tr><td>time_stamp</td><td>是</td><td>字符串</td><td>请求时间戳</td></tr><tr><td>sign</td><td>是</td><td>字符串</td><td>签名</td></tr><tr><td>out_order_no</td><td>是</td><td>字符串</td><td>接入方系统唯一订单号</td></tr><tr><td>order_no</td><td>否</td><td>字符串</td><td>税筹系统唯一订单号</td></tr></tbody></table><p><strong>响应结果：</strong> 成功后返回相应的 PDF 格式订单支付凭证文件</p>',6),s=[a];function n(_,c,i,h,p,l){return o(),d("div",null,s)}const v=t(e,[["render",n]]);export{m as __pageData,v as default};
