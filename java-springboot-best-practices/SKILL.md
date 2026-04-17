---
name: java-springboot-best-practices
description: Use when the user wants a concise prompt for Java 8+ and Spring Boot code with clear structure, restrained abstraction, maintainability, testability, and extensibility.
---

# Java Spring Boot Prompt Template

Use this skill when the goal is to ask an AI to implement or refactor a Java 8+ Spring Boot project with practical structure and low coupling.

## Output Goal

Produce code that is:
- clear in responsibilities
- practical in layering
- easy to read and maintain
- easy to test
- expandable without rewriting core flow

## Prompt Template

```text
你现在扮演资深 Java 工程师和 Spring Boot 架构师。请基于 Java 8+ 和 Spring Boot 最佳实践，为我的项目设计并实现结构清晰、职责明确、可维护、可测试、可扩展的代码。

目标：
- 实现：<需求>
- 保持现有行为尽量不回退
- 优先追求清晰、稳定、务实，而不是堆模式

要求：
- 启动类只负责启动和基础装配
- Controller 只负责请求接收、参数校验和响应返回，不承载业务逻辑
- Service 负责业务编排和规则，数据访问层负责持久化
- 配置、外部系统调用、通知、定时任务等职责独立
- 不要把大量逻辑堆进 Controller 或超大的 ServiceImpl
- 不要机械地为每个类都定义 interface
- 合理使用 Spring Boot 内置能力，如配置绑定、统一异常处理、日志、校验
- 事务边界清晰，错误处理清晰
- 核心逻辑可测试，并补充必要测试
- 不要为了规范而过度设计

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

- Prefer feature-based packaging when global layer packaging becomes noisy.
- Avoid `controller/service/serviceImpl/dao/util` style sprawl without boundaries.
- Keep third-party integrations isolated.
- Optimize for readability by an ordinary backend team member six months later.
