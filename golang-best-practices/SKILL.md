---
name: golang-best-practices
description: Use when the user wants a concise prompt for Go project design, refactoring, or implementation with clear structure, best practices, maintainability, testability, and extensibility.
---

# Go Prompt Template

Use this skill when the goal is to ask an AI to design, refactor, or implement a Go project with clear boundaries and restrained abstractions.

## Output Goal

Produce code that is:
- clear in package boundaries
- simple in implementation
- easy to test
- easy to extend
- idiomatic for Go

## Prompt Template

```text
你现在扮演资深 Go 工程师。请基于 Go 最佳实践，为我的项目设计并实现结构清晰、职责明确、易测试、可扩展的代码。

目标：
- 实现：<需求>
- 保持现有行为尽量不回退
- 优先追求清晰、稳定、易维护，而不是炫技

要求：
- main 只负责启动、配置加载、依赖组装和生命周期管理
- 配置、业务逻辑、外部 API、存储、通知等职责分离
- 只在真正有替换点或测试价值时定义 interface，避免过度抽象
- 包和命名符合 Go 习惯，依赖方向清晰，避免循环依赖
- 错误处理显式，必要时保留上下文
- 不使用全局可变状态
- 核心逻辑可测试，并补充必要单元测试
- 不要为了模式而模式，不要把简单问题复杂化
- 使用slog输出错误信息
- 使用最新github.com/spf13/cobra来制作cli并且每一个command都单独写一个文件

请按以下顺序输出：
1. 当前问题分析
2. 重构或实现方案
3. 推荐目录结构
4. 关键设计说明
5. 代码实现
6. 测试
7. 设计取舍

如果信息不足，请做最小合理假设，并明确写出假设。

```

## Guardrails

- Prefer `cmd/` + `internal/` style when it helps.
- Keep `main.go` thin.
- Avoid fake abstraction layers with no real payoff.
- Prefer direct, readable flow over pattern-heavy designs.
