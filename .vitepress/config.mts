import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "接口文档",
  description: "青云端接口文档",
  base: "/apidoc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/api-examples' }
    ],
    sidebar: [
      { text: '开发前必读', link: '/api-examples' },
      {
        text: '2 用户信息',
        items: [
          { text: '2.1 用户信息认证（H5）', link: '/member-register' },
          { text: '2.2 用户信息认证状态查询', link: '/member-status' },
          { text: '2.3 撤销用户认证', link: '/member-unregister' },
          { text: '2.4 会员身份信息上传', link: '/member-id_transfer' },
          { text: '2.5 用户注册', link: '/member-register-v2' },
          { text: '2.6 用户资料上传', link: '/member-res_upload' },
        ]
      }, {
        text: '3 交易信息',
        items: [
          { text: '3.1 转账到银行卡', link: '/bank-payments' },
          { text: '3.2 转账到银行卡(增强版)', link: '/member-pay-bankcard' },
          { text: '3.3 转账到支付宝', link: '/alipay-payments' },
          { text: '3.4 转账到微信', link: '/wechat-payments' },
          { text: '3.5 交易异步通知', link: '/trade-notify' },
          { text: '3.6 交易结果查询', link: '/payment-results' },
          { text: '3.7 支付凭证下载', link: '/vouchers-download' },
          { text: '3.8 日对账文件下载', link: '/fund_bills-download' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
