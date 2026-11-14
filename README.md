# dsh-mcp-tool-server

`@flg1217/dsh-mcp-tool-server` 是 DeepSeek Harness 的 MCP 服务端插件。它把 dsh 会话可见的工具提供给 CodeBuddy 等外部客户端，工具调用由 dsh 的执行管线处理。

## 安装

在 dsh `0.2.2-rc.3` 上验证。将此包与使用它的客户端插件安装到同一个带 `webServer` 的 profile。

```bash
dsh plugin --profile web add github:Elgalas/dsh-mcp-tool-server#master
```

桌面版可在插件页面添加同一个 GitHub 来源。安装完工具服务器后，再安装使用它的 [CodeBuddy 插件](https://github.com/Elgalas/dsh-subagent-codebuddy)。

如果该 profile 装有旧包 `@flg1217/dsh-mcp`，请更新所有依赖旧包的插件后再移除它。来源仓库为 [flg1217/dsh-mcp](https://github.com/flg1217/dsh-mcp)。
