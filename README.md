# 人工智能与数据分析 · 四次作业手册

Azyrains 的课程主页。静态网页介绍四次作业的正式要求、选题、完成方法和交付材料。

- 作业 1：公开代码仓库与公网网页，GitHub + Vercel。
- 作业 2：定期采集番茄小说榜单及公开简介，结合自己的数据与技能地图分析，自动邮件发送给自己。
- 作业 3：选择知识库路线，建设 10 家以上游戏业务相关上市公司的财报知识库，向量检索 + BM25，带页码引用与 10 问评测。
- 作业 4：用课程判决全文清洗标注，规划 Qwen 本地 QLoRA 微调及 FastAPI 判案接口。

**本仓库是作业说明网站，不包含实际榜单采集器、财报问答服务、训练完成的模型或判案 API。** 网页区分正式要求和实施建议；不展示未经运行的实验指标。

## 文件

- `index.html`：四次作业内容、协议和提交模板。
- `styles.css`：桌面及手机样式，无外部字体或资源依赖。
- `app.js`：作业切换、链接定位、复制提交文本。
- `vercel.json`：静态项目部署配置。

## 本地预览

可直接打开 `index.html`。为了测试剪贴板功能和实际 HTTP 访问，可在本目录运行：

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

打开 `http://127.0.0.1:8080/`。页面支持 `#assignment-1` 到 `#assignment-4` 的直接链接。无 JavaScript 时四份指南全部可读。

## Vercel 部署

1. 用 GitHub 登录 Vercel，Add New → Project，导入 `Azyrains/homepage-demo`。
2. Framework Preset：Other；Root Directory：仓库根目录；不运行构建，静态输出为 `.`。仓库中的 `vercel.json` 已声明该配置。
3. 点击 Deploy，用手机确认生产地址可访问。
4. 作业 1 提交公开仓库地址及实际生产网址。GitHub 仓库需设为 Public；分享前检查网站的部署保护设置。

作业 4 的本地 GPU 模型服务要单独实现并通过公网 API 暴露，静态网页部署不会运行该模型。

## 内容依据

- 作业 1：老师正式作业说明。
- 作业 2：第二课第 122 张。
- 作业 3：第三课第 163 张，选项 A。
- 作业 4：第四课第 208—214 张。
- [番茄小说官方排行榜](https://fanqienovel.com/rank)：阅读榜、新书榜及公开榜单规则。
- [Qwen2.5-7B-Instruct](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)、[3B 备选](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct)、[PEFT 量化训练](https://huggingface.co/docs/peft/developer_guides/quantization)。

采集时间、样本量、公司清单和训练参数是可调整的计划，并非老师新增要求或最佳配置保证。不要提交原始判决数据、私有研究资料、模型权重、邮箱口令或 API Key 到公开仓库。
