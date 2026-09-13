# 月面承载边界计算库

服务依据离散材料曲线计算地基方案的允许载荷，并完整返回换算证据。

## 技术约定

服务采用 Node.js 22、TypeScript 与 Fastify。HTTP 健康检查固定为 `GET /healthz`，业务错误使用结构化 JSON 返回。领域词汇和数据边界记录在 `docs/domain.md`，数据库结构位于 `db/`。

## 本地运行

```bash
docker build -t q003-lunar-material .
docker run --rm -p 8080:8080 q003-lunar-material
```

镜像构建阶段会执行现有自动化测试。也可以运行 `scripts/verify.sh`，该脚本会先校验容器配置，再完成一次干净构建。

## 目录

- `src/`、`app/` 或 `cmd/`：服务入口与领域代码。
- `db/`：数据库迁移和约束。
- `fixtures/`：可公开的领域样例。
- `tests/`：可执行验证代码。
