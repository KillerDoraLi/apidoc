import{_ as t,c as d,o as s,a3 as a}from"./chunks/framework.8cvu3CMh.js";const E=JSON.parse('{"title":"会员身份信息上传","description":"","frontmatter":{},"headers":[],"relativePath":"member-id_transfer.md","filePath":"member-id_transfer.md"}'),i={name:"member-id_transfer.md"},e=a(`<h1 id="会员身份信息上传" tabindex="-1">会员身份信息上传 <a class="header-anchor" href="#会员身份信息上传" aria-label="Permalink to &quot;会员身份信息上传&quot;">​</a></h1><blockquote><p>注意，需要使用 multipart/form-data 的 Content-Type</p></blockquote><p><strong>请求方式：</strong> POST <br><strong>请求地址：</strong> <code>/api/platform/member/id_transfer</code><br></p><p><strong>请求参数说明：</strong></p><table tabindex="0"><thead><tr><th>参数 <div style="width:60pt;"></div></th><th>必须 <div style="width:30pt;"></div></th><th>类型 <div style="width:40pt;"></div></th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>是</td><td>字符串</td><td>系统分配的App ID</td></tr><tr><td>nonce_str</td><td>是</td><td>字符串</td><td>随机字符串</td></tr><tr><td>time_stamp</td><td>是</td><td>字符串</td><td>请求时间戳</td></tr><tr><td>sign</td><td>是</td><td>字符串</td><td>签名</td></tr><tr><td>tx_seq_no</td><td>是</td><td>字符串</td><td>调用方序列号</td></tr><tr><td>partner_user_id</td><td>是</td><td>字符串</td><td>调用方用户ID</td></tr><tr><td>face_md5</td><td>是</td><td>字符串</td><td>身份证正面照片的md5，全小写</td></tr><tr><td>back_md5</td><td>是</td><td>字符串</td><td>身份证背面照片的md5，全小写</td></tr><tr><td>contract_md5</td><td>是</td><td>字符串</td><td>合同文件的md5，全小写</td></tr><tr><td>face</td><td>是</td><td>文件 file</td><td>身份证正面照片,&lt;3M,不参与签名</td></tr><tr><td>back</td><td>是</td><td>文件 file</td><td>身份证背面照片,&lt;3M,不参与签名</td></tr><tr><td>contract</td><td>是</td><td>文件 file</td><td>合同文件,&lt;3M,不参与签名</td></tr></tbody></table><p><strong>返回结果示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7),n=[e];function r(p,l,h,o,k,c){return s(),d("div",null,n)}const m=t(i,[["render",r]]);export{E as __pageData,m as default};
