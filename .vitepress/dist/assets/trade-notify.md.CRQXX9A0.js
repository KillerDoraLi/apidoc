import{_ as t,c as d,o as r,a3 as e}from"./chunks/framework.8cvu3CMh.js";const m=JSON.parse('{"title":"交易异步通知","description":"","frontmatter":{},"headers":[],"relativePath":"trade-notify.md","filePath":"trade-notify.md"}'),o={name:"trade-notify.md"},a=e('<h1 id="交易异步通知" tabindex="-1">交易异步通知 <a class="header-anchor" href="#交易异步通知" aria-label="Permalink to &quot;交易异步通知&quot;">​</a></h1><blockquote><p>异步通知: 付款的结果会以 POST 方式发送到约定的回调 url 中, 请在接到请求后，对 sgin 和金额进行验证，并输出 <code>{ &quot;code&quot;: &quot;0000&quot;, &quot;message&quot;: &quot;SUCCESS&quot; }</code></p></blockquote><p><strong>请求方式：</strong> POST <br><strong>请求地址：</strong> 约定的回调 url<br></p><p><strong>请求参数：</strong></p><table tabindex="0"><thead><tr><th>参数 <div style="width:80pt;"></div></th><th>类型 <div style="width:60pt;"></div></th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>字符串</td><td>系统分配的App ID</td></tr><tr><td>nonce_str</td><td>字符串</td><td>随机字符串</td></tr><tr><td>time_stamp</td><td>字符串</td><td>请求时间戳</td></tr><tr><td>sign</td><td>字符串</td><td>签名</td></tr><tr><td>out_order_no</td><td>字符串</td><td>接入方系统唯一订单号</td></tr><tr><td>order_no</td><td>字符串</td><td>订单号</td></tr><tr><td>pay_result</td><td>字符串</td><td>支付结果: SUCCESS 或者 FAILED</td></tr><tr><td>pay_message</td><td>字符串</td><td>支付结果信息: &quot;成功&quot; 或者 相应失败原因</td></tr><tr><td>amount</td><td>字符串</td><td>金额</td></tr></tbody></table>',5),s=[a];function n(_,i,c,p,u,l){return r(),d("div",null,s)}const q=t(o,[["render",n]]);export{m as __pageData,q as default};
