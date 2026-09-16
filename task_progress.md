# Task Progress: Add "What Is a Good Debt-to-Income Ratio for Buying a House?" blog article

- [x] 创建博客文章组件文件 (DebtToIncomeRatio.tsx)
- [x] 在 App.tsx 中 import 组件
- [x] 在 App.tsx 中添加博客路由 (/blog/debt-to-income-ratio)
- [x] 在首页 Latest Articles 中添加文章链接（最前面）
- [x] 在 BlogStub posts 数组中添加文章（最前面）
- [x] 在 generate-pages.ts 的 spaEntries 中添加路由
- [x] 在 generate-pages.ts 的 sitemap blogs 列表中添加文章
- [x] 在 DebtToIncomeRatio.tsx 正文中添加三个权威外链（CFPB、Fannie Mae、HUD）
- [x] 重新构建项目并验证 (dist/blog/debt-to-income-ratio/index.html 已生成, sitemap.xml 已含链接, 外链已编译进 dist/assets JS)
- [x] 提交并推送到 GitHub (commit d06ef79, origin/main 已更新)

---

# Task Progress: 确保 AdSense 验证脚本出现在每个页面的 <head>

- [x] 定位缺少 AdSense 脚本的 4 个 <head> 模板 (404、affiliate-disclosure、州页、金额页)
- [x] 在 public/404.html 的 <head> 中加入异步脚本 (ca-pub-4050078688462520)
- [x] 在 public/affiliate-disclosure.html 的 <head> 中加入同一脚本
- [x] 在 scripts/generate-pages.ts 的 generateStateHtml() 和 generateAmountHtml() 模板中各加入同一脚本
- [x] npm run build 全量构建通过，dist 下 106/106 HTML 文件均含脚本 (scripts/verify-adsense.cjs 全部 PASS)
- [x] 提交并推送到 GitHub (commit e4620e7, origin/main 已更新)，Vercel 自动重新构建部署，线上 www.mortgagepro.io 首页 /404 /mortgage-payment/utah /mortgage-payment/500000 /disclaimer 均已检出脚本

