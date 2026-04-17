---
name: dotnet8-best-practices
description: Use when the user wants a concise prompt for .NET 8 or ASP.NET Core code with clean structure, pragmatic layering, maintainability, testability, and extensibility.
---

# .NET 8 Prompt Template

Use this skill when the goal is to ask an AI to build or refactor a .NET 8 project without falling into mechanical over-engineering.

## Output Goal

Produce code that is:
- clear in layer responsibilities
- pragmatic in abstraction
- idiomatic for .NET 8
- easy to test and maintain
- ready for future extension

## Prompt Template

```text
你现在扮演资深 .NET 8 / C# 工程师。请基于 .NET 8 最佳实践，为我的项目设计并实现结构清晰、职责明确、可维护、可测试、可扩展的代码。

目标：
- 实现：<需求>
- 保持现有行为尽量不回退
- 优先写清晰、稳定、务实的代码

要求：
- Program.cs 只负责启动、依赖注入、配置和生命周期管理
- Controller/Endpoint 只做协议层处理，不承载业务逻辑
- 应用服务负责用例编排，基础设施访问单独隔离
- 优先使用 .NET 8 内置能力：DI、Logging、Options、Middleware、ProblemDetails
- 使用 async/await 处理 I/O，合理传递 CancellationToken
- 只在有明确替换点或测试价值时抽象 interface
- 不要机械套 Repository、UnitOfWork、CQRS、DDD
- 配置读取、校验、错误处理要清晰
- 核心逻辑可测试，并补充必要测试

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

- Prefer built-in framework features before third-party libraries.
- Do not create empty interfaces or meaningless layers.
- Keep Web, Application, Domain, Infrastructure boundaries understandable.
- Optimize for team maintainability, not architecture theater.
