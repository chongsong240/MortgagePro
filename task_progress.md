# Task Progress: Add "How Student Loans Affect How Much House You Can Afford" blog article

- [x] 新增文章组件 src/components/blog/StudentLoansHomeAffordability.tsx（含 BlogSchema + FAQ、目录、6 张数据表/卡片、Sources 区块）
- [x] App.tsx：import 组件、添加 /blog/student-loans-home-affordability 路由
- [x] App.tsx：首页 Latest Articles 与 /blog 列表均置于最前（2026-11-12）
- [x] route-meta.ts 新增 title/description；prerender.tsx 的 ROUTES 新增该路径
- [x] generate-pages.ts：spaEntries 兜底元数据 + sitemap blogs 列表
- [x] RelatedPosts.tsx：LABELS、新文章 RELATED，并在 debt-to-income-ratio / how-much-house-can-i-afford / income-needed / credit-score-needed 四篇文章中加入内链
- [x] 外链：站内 Affordability Calculator（正文 + CTA）、AnnualCreditReport.com、SmartCredit（复用 src/data/affiliate-offers.ts 的 SMARTCREDIT.url 与 sponsored nofollow rel）
- [x] 事实核对：Fannie Mae B3-6-05（递延/宽限按余额 1% 或按文件条款全额摊还）、B3-6-02（手工 36%→45%、自动审批上限 50%）、CFPB 的 DTI 定义；$400/月 ≈ $63,000 借款力（6.5%、30 年）
- [x] tsc --noEmit 通过；npm run build 通过（dist 页面已预渲染、sitemap 含新 URL、canonical/OG/结构化数据已写入）

---

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


---

# Task Progress: 季度数据自动刷新脚本 (scripts/refresh-state-data.mjs)

- [x] 新增 scripts/refresh-state-data.mjs：从 Zillow 公共 CDN 直接拉取 median sale price（all homes / raw / 月度州级）CSV，无需 API key
- [x] 自动选取 51 州都有值的最新月份列（Zillow 追加新列后脚本无需改动）；CSV 缓存至 data/zillow/（该目录已被 .gitignore 忽略，仅本地留痕）
- [x] 只改写 state_data.json 的 median_home_price，保持“一州一行”字节格式；匹配行数不等于 51 或其它字段漂移即中止写入
- [x] 系列校验（结构性）：URL 文件名、起始月份（2008-02）、月份列数（>300 即拒绝，销售价文件当前 222 列）任一不符则拒绝写入（--force 可覆盖）
- [x] 数值护栏：单州变动 >25% 或 51 州均值变动 >15% 时拒绝写入
- [x] 打印 diff：每州 旧值→新值 与 ±%、51 州均值/区间 前后对比、涨跌州数、变动最大的州
- [x] diff 同时列出需同步更新的引用标签（generate-pages.ts / App.tsx / CalculatorMethodologyPage.tsx 等），防止文案与数据脱节
- [x] --insurance-file <json> 支持人工录入 NAIC 新 vintage（校验 51 州齐全，并在引用标签不一致时提示）
- [x] package.json 新增 refresh:data / refresh:data:write / refresh:data:check 三个命令
- [x] README 新增 “Maintaining src/data/state_data.json (quarterly)” 章节
- [x] 13 项边界测试全部通过：dry-run=0、--check 一致=0 / 过期=2、错误月份=1、ZHVI 错系列写入被拦=1、保险缺州=1、互斥参数=1、--offline、--file 本地 CSV、--report、--quiet
- [x] 验证：node 干跑 0 差异（与已迁移的 July 2026 数据完全一致，51/51 匹配）、tsc --noEmit 通过

