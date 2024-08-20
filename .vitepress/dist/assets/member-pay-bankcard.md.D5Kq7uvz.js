import{_ as t,c as a,o as s,a3 as d}from"./chunks/framework.8cvu3CMh.js";const _=JSON.parse('{"title":"转账到银行卡（增强版）","description":"","frontmatter":{},"headers":[],"relativePath":"member-pay-bankcard.md","filePath":"member-pay-bankcard.md"}'),n={name:"member-pay-bankcard.md"},i=d(`<h1 id="转账到银行卡-增强版" tabindex="-1">转账到银行卡（增强版） <a class="header-anchor" href="#转账到银行卡-增强版" aria-label="Permalink to &quot;转账到银行卡（增强版）&quot;">​</a></h1><blockquote><p><strong>增强版，支持使用合作方用户ID转账</strong><br> 将处理后的 json 数据发送到以下接口，创建支付请求。支付结果会通过POST方式异步通知到配置的 notify_url</p></blockquote><p><strong>请求方式：</strong> POST <br><strong>请求地址：</strong> <code>/api/platform/member/pay/bankcard</code><br></p><p><strong>请求参数：</strong></p><table tabindex="0"><thead><tr><th>参数 <div style="width:80pt;"></div></th><th>必须 <div style="width:30pt;"></div></th><th>类型 <div style="width:40pt;"></div></th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>是</td><td>字符串</td><td>系统分配的App ID</td></tr><tr><td>nonce_str</td><td>是</td><td>字符串</td><td>随机字符串</td></tr><tr><td>time_stamp</td><td>是</td><td>字符串</td><td>请求时间戳</td></tr><tr><td>sign</td><td>是</td><td>字符串</td><td>签名</td></tr><tr><td>out_order_no</td><td>是</td><td>字符串</td><td>接入方系统唯一订单号</td></tr><tr><td>user_id</td><td>否</td><td>字符串</td><td>user_id和下面的(card_number,account_name,bank_name,branch_bank_name,identity_card_number,phone)二选一，只有在user_id为空的情况下，才使用银行卡信息</td></tr><tr><td>card_number</td><td>否</td><td>字符串</td><td>收款人卡号</td></tr><tr><td>account_name</td><td>否</td><td>字符串</td><td>金额</td></tr><tr><td>bank_name</td><td>否</td><td>字符串</td><td>收款银行名称简称，例如， 招商银行</td></tr><tr><td>branch_bank_name</td><td>否</td><td>字符串</td><td>收款银行名称，精确到支行</td></tr><tr><td>identity_card_number</td><td>否</td><td>字符串</td><td>收款人身份证号码</td></tr><tr><td>phone</td><td>否</td><td>字符串</td><td>收款人手机号码</td></tr><tr><td>amount</td><td>是</td><td>字符串</td><td>金额</td></tr><tr><td>remark</td><td>否</td><td>字符串</td><td>收款备注， 传递至银行， 一般作为订单摘要展示</td></tr></tbody></table><p><strong>响应结果示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;order_no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c346206bcc4d4af7b1f2dfbfbcf0e052&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;out_order_no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2019091834877&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="网络通讯异常或者服务没有反馈的处理" tabindex="-1">网络通讯异常或者服务没有反馈的处理： <a class="header-anchor" href="#网络通讯异常或者服务没有反馈的处理" aria-label="Permalink to &quot;网络通讯异常或者服务没有反馈的处理：&quot;">​</a></h3><ul><li>方式一：<br> 使用相同的 out_order_no 再次发起调用，如果返回:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;4220012&quot;,</span></span>
<span class="line"><span>    &quot;message&quot;: &quot;重复订单，OutOrderNo 已经存在&quot;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>则表示之前的调用已成功,不需要再次发起调用</p><ul><li>方式二：<br> 使用【交易结果查询】接口使用 out_order_no 查询之前的调用结果，如果已经存在，不需要重新发起调用。</li></ul><h3 id="交易异步通知" tabindex="-1">交易异步通知 <a class="header-anchor" href="#交易异步通知" aria-label="Permalink to &quot;交易异步通知&quot;">​</a></h3><p>详见 3.5 交易异步通知</p>`,14),e=[i];function r(o,p,l,h,c,k){return s(),a("div",null,e)}const b=t(n,[["render",r]]);export{_ as __pageData,b as default};
