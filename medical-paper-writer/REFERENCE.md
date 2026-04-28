# Reference — Section Templates & Checklists

## 1. Results 结构化撰写规范

### 逻辑分组模板

```
Baseline Characteristics
├── [Table 1] 人口学基线
├── 组间可比性声明 (SMD <0.1 或 p>0.05)
└── 一句话总结: "Baseline characteristics were balanced between groups (Table 1)."

Primary Outcome
├── 主要效应量 + 95% CI + p值
├── 引用对应的 Figure/Table
└── 一句话: 方向 + 量级 + 统计显著性

Secondary Outcomes
├── 按重要性/预设顺序逐项报告
├── 多重比较校正说明（如有）
└── 每个结局: 效应量 + 95% CI + p值

Sensitivity / Subgroup Analyses
├── 核心分析（如 ITT vs PP, 多变量调整）
├── 亚组交互 p 值
└── 森林图引用（如有）

Safety / Adverse Events
├── SAE 列表（如适用）
└── [Table X] 不良事件发生率
```

### 表注/图注模板

```
表注:
"Values are presented as mean ± SD, median (IQR), or n (%). 
Abbreviations: BMI, body mass index; SBP, systolic blood pressure.
P values were calculated using [Student's t-test / Mann-Whitney U test / χ² test]."

图注:
"Figure X. [Title describing what is shown]. 
Data are expressed as [mean ± SEM / median with IQR]. 
*P < 0.05, **P < 0.01 vs [reference group]."
```

---

## 2. Discussion 段落模板

### Per-Finding 段落结构

```
Paragraph for each major finding:

1. 主题句 — 重申发现 (一句话):
   "In this study, [intervention/exposure] was associated with a [XX%] reduction in [primary outcome]."

2. 与文献对比 — 引用 2-3 篇:
   "This finding is consistent with [Author, Year], who reported... In contrast, [Author, Year] found..."

3. 机制解释 (1-2句, 谨慎):
   "A potential mechanism may involve [pathway], as suggested by [preclinical / biomarker evidence]."

4. 临床/科学意义 (1-2句):
   "These results suggest that [clinical recommendation / future research direction]."

5. 过渡句 (可选):
   "The secondary analysis further revealed that..."
```

### Limitation 段落模板

```
"Several limitations of this study should be noted. 
First, [selection / measurement / confounding limitation 1]. 
Second, [limitation 2]. 
Third, [limitation 3]. 
Furthermore, [generalizability issue]. 
[Optional: Despite these limitations, ... / Future studies should...]"
```

---

## 3. Methods 框架模板

```markdown
## Methods

### Study Design
- [Type: RCT / prospective cohort / case-control / cross-sectional / meta-analysis]
- [Setting: single-center / multicenter, hospital-based / population-based]
- [Dates: enrollment from YYYY-MM to YYYY-MM]

### Participants
- Inclusion criteria: [user fills]
- Exclusion criteria: [user fills]
- [Sample size justification / power calculation if applicable]

### Intervention / Exposure
- [Intervention group details — user fills]
- [Control / comparison group details — user fills]

### Outcomes
- Primary outcome: [user fills — definition + timing]
- Secondary outcomes: [user fills]

### Statistical Analysis
- [Methods selected per data type — see §统计方法匹配表 below]
- [Software: e.g., R version 4.3, SPSS 28, SAS 9.4, Stata 17]

### Ethics
- [IRB approval number placeholder]
- [Informed consent / waiver statement]
```

---

## 4. 统计方法匹配表

提供数据特征 → 推荐方法 → 报告要素:

| 你的数据 | 推荐方法 | 报告要素 |
|----------|----------|----------|
| 连续变量, 两组, 正态 | Independent t-test | mean ± SD / mean difference (95% CI) |
| 连续变量, 两组, 非正态 | Mann-Whitney U / Wilcoxon | median (IQR), Hodges-Lehmann estimate |
| 连续变量, ≥3组, 正态 | One-way ANOVA + post-hoc | F(df1,df2), η², post-hoc adjusted p |
| 分类变量, 两组 | χ² / Fisher exact | n (%), OR (95% CI) |
| 二分类结局, 单因素 | Logistic regression | OR (95% CI), per-unit or per-SD |
| 二分类结局, 多因素 | Multivariable logistic | adjusted OR (aOR), 95% CI, model R²/C-statistic |
| 时间-to-event | Cox proportional hazards | HR (95% CI), Schoenfeld residuals test |
| 重复测量 | Mixed-effects / GEE | β (SE), intraclass correlation |
| 连续结局, 多因素 | Linear regression | β (95% CI), adjusted R² |
| 诊断准确性 | ROC / AUC | AUC (95% CI), sensitivity, specificity, cutoff |
| Meta-analysis | Random-effects (DerSimonian-Laird) | pooled estimate, I², Q-statistic, forest plot |
| 倾向性评分 | PSM / IPTW | SMD before/after matching, balance table |

### 通用报告规范

- 精确报告 p 值 (如 p=0.032 而非 p<0.05)，除非 p<0.001
- 所有效应量附 95% CI
- 说明缺失数据处理方法 (complete case / MI / LOCF)
- 明确双侧检验

---

## 5. 研究报告规范 (Guideline Checklists)

### CONSORT 2010 (RCT) — 核心条目

- Title/Abstract: 标出 "randomized"
- Sample size: 如何确定 (power calculation)
- Randomization: 序列生成方法 + 分配隐藏机制
- Blinding: 谁被盲 (participants, providers, outcome assessors)
- Flow diagram: 筛选 → 随机 → 分配 → 随访 → 分析
- Outcomes: 完全定义预设主要/次要结局
- Harms: 各组不良事件

### STROBE (Observational Studies)

- Study design stated in title/abstract
- Setting, locations, dates
- Eligibility criteria clearly stated
- All outcomes, exposures, predictors, confounders defined
- Handle bias: selection, information, confounding

### PRISMA (Systematic Review / Meta-Analysis)

- PRISMA flow diagram: identification → screening → eligibility → included
- Search strategy: full for at least one database
- Risk of bias assessment (e.g., ROB-2, NOS, QUADAS-2)
- Synthesis methods: heterogeneity (I²), publication bias (funnel plot / Egger's test)

---

## 6. 投稿模板

### Cover Letter 模板

```
Dear Editor,

We submit our manuscript entitled "[Title]" for consideration in [Journal Name].

[2-3 sentences: background, what is known, what gap this study fills.]

In this [study design], we [briefly state what was done and the main finding]. 
We believe these findings [clinical/scientific significance].

Key points:
- [Bullet 1: novelty / main contribution]
- [Bullet 2: rigor / methodology]
- [Bullet 3: relevance to journal scope]

This manuscript has not been published elsewhere and is not under consideration by another journal. 
All authors have approved the manuscript and agree with its submission to [Journal Name]. 
No conflicts of interest to declare.

Sincerely,
[Corresponding author]
```

### Reviewer Response 模板

```
Dear Editor,

We thank the reviewers for their thoughtful comments. We have revised the manuscript accordingly. 
Below, we address each point. Revised text is indicated in [red / tracked changes].

---

Reviewer 1

Comment 1: "[Original comment]"

Response: We appreciate this observation. [Direct answer — agree and change, or explain politely why not]. 
[Change made at page X, lines Y-Z.]

---

Comment 2: ...

---
```

---

## 7. 学术英语常见问题

| 不当表达 | 推荐替换 |
|----------|----------|
| "It has been proved that..." | "Evidence suggests that..." / "Studies have shown..." |
| "There is no report about..." | "To our knowledge, this has not been previously reported." |
| "plays an important role in" | "contributes to" / "is involved in" / be specific |
| "very important" | "critical" / "essential" / or omit |
| "significant" (ambiguous) | "statistically significant" vs "clinically meaningful" |
| "obviously" / "clearly" | Omit; let data speak |
| "according to the data" | "the data indicate" / "the results show" |
| "in recent years" without citation | Add reference or remove |
| "it is well known that" without citation | Add reference or remove |
| Dangling modifier: "After adjusting for confounders, the association..." | "After adjustment for confounders, the association remained..." or "In the adjusted model, the association..." |
| 连续使用 "However" 开始多句 | Vary with "Nevertheless", "In contrast", "Conversely" |
