/**
 * 共享 MCP 插件(@elgalas/dsh-mcp-tool-server):为 codebuddy / agy 两个 CLI 桥提供统一的
 * dsh MCP 端点(端点注册、key、工具面、执行、图片回传;实现见 mcp-server.ts)。
 *
 * 将本插件添加到客户端桥所在的 profile。dsh 会根据 `dsh.bundle` 声明装载它，
 * 无需额外配置。
 * @module dsh-mcp-tool-server
 */
import { registerDshMcpServer } from './mcp-server.js';
export { DSH_MCP_ENDPOINT_PATH, DSH_MCP_SERVER_NAME, dshMcpEndpointUrl, McpDispatchAbortedError, McpDispatchTimeoutError, registerDshMcpServer, registerMcpLoopDispatcher } from './mcp-server.js';
export { blocksToMcpContent, blocksToText, BRIDGE_TOOL_PREFIX, bridgeTargetTool, bridgeToolId, CLI_MIRROR_TOOL_PREFIX, isBridgeEligible, isSurfaceCallable, isSurfaceList, listDshBridgeTools, listDshMcpTools, runDshBridgeTool, TRANSPORT_TOOL_NAMES, } from './dsh-tools-bridge.js';
export function apply(ctx) {
    // 挂 MCP 端点(webServer 就绪时注册;卸载/热重载自动释放)。
    ctx.effect(() => registerDshMcpServer(ctx));
}
