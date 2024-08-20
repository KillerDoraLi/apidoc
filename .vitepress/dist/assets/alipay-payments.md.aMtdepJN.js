import{_ as t,c as s,o as a,a3 as d}from"./chunks/framework.8cvu3CMh.js";const _=JSON.parse('{"title":"转账到支付宝","description":"","frontmatter":{},"headers":[],"relativePath":"alipay-payments.md","filePath":"alipay-payments.md"}'),i={name:"alipay-payments.md"},n=d(`<h1 id="转账到支付宝" tabindex="-1">转账到支付宝 <a class="header-anchor" href="#转账到支付宝" aria-label="Permalink to &quot;转账到支付宝&quot;">​</a></h1><blockquote><p>将处理后的json数据发送到以下接口，创建支付请求。支付结果会通过POST方式异步通知到配置的 notify_url。</p></blockquote><p><strong>请求方式：</strong> POST <br><strong>请求地址：</strong> <code>/api/platform/alipay/payments</code><br></p><p><strong>请求参数：</strong></p><table tabindex="0"><thead><tr><th>参数 <div style="width:80pt;"></div></th><th>必须 <div style="width:30pt;"></div></th><th>类型 <div style="width:40pt;"></div></th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>是</td><td>字符串</td><td>系统分配的App ID</td></tr><tr><td>nonce_str</td><td>是</td><td>字符串</td><td>随机字符串</td></tr><tr><td>time_stamp</td><td>是</td><td>字符串</td><td>请求时间戳</td></tr><tr><td>sign</td><td>是</td><td>字符串</td><td>签名</td></tr><tr><td>out_order_no</td><td>是</td><td>字符串</td><td>接入方系统唯一订单号</td></tr><tr><td>alipay_account</td><td>是</td><td>字符串</td><td>收款人支付宝账号，支付宝登录号，支持邮箱和手机号格式</td></tr><tr><td>account_name</td><td>是</td><td>字符串</td><td>收款人真实姓名,如果本参数不为空，则会校验该账户在支付宝登记的实名是否与收款方真实姓名一致。</td></tr><tr><td>identity_card_number</td><td>是</td><td>字符串</td><td>收款人身份证号码</td></tr><tr><td>phone</td><td>否</td><td>字符串</td><td>收款人手机号码</td></tr><tr><td>amount</td><td>是</td><td>字符串</td><td>金额，只支持2位小数，小数点前最大支持13位，金额必须大于等于0.1元。</td></tr><tr><td>order_info</td><td>是</td><td>字符串</td><td>转账信息 (最长支持100个英文/50个汉字)，显示在收款方的账单详情页</td></tr><tr><td>remark</td><td>否</td><td>字符串</td><td>转账备注（支持200个英文/100个汉字，金额达到（大于等于）50000元，remark不能为空。收款方可见，会展示在收款用户的收支详情中。</td></tr></tbody></table><p><strong>响应结果示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;order_no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c346206bcc4d4af7b1f2dfbfbcf0e052&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;out_order_no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2019091834877&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="网络通讯异常或者服务没有反馈的处理" tabindex="-1">网络通讯异常或者服务没有反馈的处理： <a class="header-anchor" href="#网络通讯异常或者服务没有反馈的处理" aria-label="Permalink to &quot;网络通讯异常或者服务没有反馈的处理：&quot;">​</a></h3><ul><li>方式一： 使用相同的 out_order_no 再次发起调用，如果返回:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: &quot;4220012&quot;,</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;重复订单，OutOrderNo 已经存在&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>则表示之前的调用已成功，不需要再次发起调用</p><ul><li>方式二： 使用【交易结果查询】接口使用 out_order_no 查询之前的调用结果，如果已经存在，不需要重新发起调用。</li></ul><h3 id="交易异步通知" tabindex="-1">交易异步通知 <a class="header-anchor" href="#交易异步通知" aria-label="Permalink to &quot;交易异步通知&quot;">​</a></h3><p>详见 3.5 交易异步通知</p>`,14),e=[n];function p(o,r,l,h,c,k){return a(),s("div",null,e)}const E=t(i,[["render",p]]);export{_ as __pageData,E as default};
