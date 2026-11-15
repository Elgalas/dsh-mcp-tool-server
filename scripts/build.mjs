#!/usr/bin/env node
/**
 * Build @elgalas/dsh-mcp-tool-server:tsc 编译 src/*.ts → lib/*.js + lib/types/*.d.ts。
 * 纯服务端插件(无客户端 bundle)。
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const pkg = join(root, '..')
const outDir = join(pkg, 'lib')

console.log('build: cleaning lib/')
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

console.log('build: tsc (src/*.ts → lib/)')
// 用本地 tsc,不走 npx:npx 会去 registry 取包(离线/沙箱下直接 EPERM),
// 而且版本随 registry 漂移——构建必须固定在 package.json 声明的那份。
const tsc = join(pkg, 'node_modules', 'typescript', 'bin', 'tsc')
execFileSync(process.execPath, [tsc, '-p', join(pkg, 'tsconfig.json')], { stdio: 'inherit' })
