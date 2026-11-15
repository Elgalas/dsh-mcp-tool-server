# dsh-mcp-tool-server

`@flg1217/dsh-mcp-tool-server` 是 DeepSeek Harness 的 MCP 服务端插件。它把 dsh 会话可见的工具提供给 CodeBuddy 等外部客户端，工具调用由 dsh 的执行管线处理。

## 安装

在 dsh `0.2.2-rc.3` 上验证。将此包与使用它的客户端插件安装到同一个带 `webServer` 的 profile。

```bash
dsh plugin --profile web add github:Elgalas/dsh-mcp-tool-server#master
```

桌面版可在插件页面添加同一个 GitHub 来源。安装完工具服务器后，再安装使用它的 [CodeBuddy 插件](https://github.com/Elgalas/dsh-subagent-codebuddy)。

如果该 profile 装有旧包 `@flg1217/dsh-mcp`，请更新所有依赖旧包的插件后再移除它。来源仓库为 [flg1217/dsh-mcp](https://github.com/flg1217/dsh-mcp)。

## 工具面来源（0.1.3）

`tools/list` 的工具清单按**调用方给出的工具面**生成，而不是按 dsh 的注册表：

- `subagent` 后端（PTC 会话）里，模型唯一能直接调用的工具是执行器传输工具 `run_code`——它不在注册表里，旧版按注册表生成会把工具面做成空集（表现为 CLI 侧 `unknown tool "read"`）。
- 现在 `registerMcpLoopDispatcher(sessionId, dispatch, surface?)` 接受可选 `surface`：`{ name, description?, parameters? }[]`（按面原样投影）或 `ReadonlySet<string>`（旧形态）。
- `tools/call` 的准入闸门用同一份面判断：面内即放行，面外返回 `unknown dsh tool`。
- 导出 `DshSurfaceTool`、`TRANSPORT_TOOL_NAMES`、`isSurfaceCallable`、`isSurfaceList`。

