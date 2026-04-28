# Examples — Worked Through

## Example 1: RCT — Results → Discussion Flow

### User Provides

```
New drug A vs placebo for hypertension
n=300 per arm, 12-week follow-up
Primary: SBP change
- Drug A: -15.2 ± 8.3 mmHg
- Placebo: -3.1 ± 7.9 mmHg
- Difference: -12.1 mmHg, 95% CI -14.3 to -9.9, p<0.001

Secondary: DBP change
- Drug A: -8.4 ± 5.1 mmHg
- Placebo: -1.8 ± 4.9 mmHg
- Difference: -6.6 mmHg, 95% CI -7.8 to -5.4, p<0.001

Safety: drug A 12% dizziness, placebo 4% (p=0.001)
```

### [1] Agent drafts Results

```markdown
## Results

### Baseline Characteristics
A total of 600 participants were randomized (300 per arm). Baseline characteristics, including age, sex, BMI, and baseline blood pressure, were similar between groups (Table 1).

### Primary Outcome
At 12 weeks, the reduction in SBP was significantly greater in the drug A group (-15.2 ± 8.3 mmHg) compared with placebo (-3.1 ± 7.9 mmHg), yielding a between-group difference of -12.1 mmHg (95% CI, -14.3 to -9.9; P < 0.001) (Figure 2).

### Secondary Outcome
Similarly, DBP reduction was greater with drug A (-8.4 ± 5.1 mmHg) versus placebo (-1.8 ± 4.9 mmHg), with a between-group difference of -6.6 mmHg (95% CI, -7.8 to -5.4; P < 0.001).

### Safety
Dizziness was reported in 36 patients (12%) in the drug A group and 12 patients (4%) in the placebo group (P = 0.001). No serious adverse events attributed to the study drug were observed (Table 3).
```

### [2] Agent drafts Discussion

```markdown
## Discussion

In this randomized trial of adults with hypertension, drug A reduced SBP by 12.1 mmHg more than placebo over 12 weeks. This benefit was accompanied by a parallel reduction in DBP.

The magnitude of SBP reduction observed is comparable to that reported for [class/mechanism comparator, Author, Year], in which a 10–14 mmHg reduction was documented over a similar duration. In contrast, [Author, Year] reported a smaller effect for [another drug] in a comparable population; however, differences in dosing regimens may account for this discrepancy.

One plausible mechanism underlying the antihypertensive effect of drug A involves [pathway — e.g., direct vasodilation via NO pathway], as supported by preclinical evidence of [specific target engagement].

Clinically, a 12 mmHg SBP reduction is associated with an estimated 20–25% relative risk reduction in major cardiovascular events in long-term observational data [source]. If confirmed in longer-duration outcome trials, drug A may offer an option for patients with suboptimal responses to first-line agents.

Several limitations should be acknowledged. First, the 12-week duration precludes assessment of long-term efficacy and safety. Second, ambulatory blood pressure monitoring was not performed, which may limit the precision of blood pressure estimates. Third, the trial population comprised predominantly [demographic feature], and generalizability to other populations requires further study.

---

### [3] Agent drafts Methods skeleton

- Study design: Multicenter, randomized, double-blind, placebo-controlled, parallel-group trial
- Enrollment: YYYY-MM to YYYY-MM at X sites
- Participants: [inclusion placeholder] / [exclusion placeholder], n justified by power calculation (α=0.05, β=0.20, expected difference X mmHg, SD Y mmHg → N=xxx)
- Randomization: 1:1 via [method], stratified by [factor]
- Outcomes: Primary = SBP change at week 12; Secondary = DBP change, adverse events
- Statistics: ANCOVA adjusted for baseline BP, with treatment as fixed effect
- Ethics: IRB [approval #], trial registration [number]
```

---

## Example 2: Meta-Analysis — PRISMA Flow + Results

### User Provides

```
Topic: Vitamin D supplementation and all-cause mortality
Databases: PubMed, Embase, Cochrane
Search hits: 1824
After duplicates removed: 1401
Title/abstract screened: 1401 → 1320 excluded
Full-text assessed: 81 → 65 excluded (reasons available)
Final: 16 RCTs, n=94,128

Pooled: RR 0.94, 95% CI 0.90-0.98
I² = 28%, Egger p = 0.34
```

### Agent output

```markdown
## Results

### Study Selection
The search identified 1,824 records. After removal of duplicates, 1,401 records underwent title and abstract screening, of which 1,320 were excluded. Full-text assessment of 81 articles yielded 16 eligible randomized trials enrolling 94,128 participants (Figure 1, PRISMA flow diagram).

### Study Characteristics
The included trials were published between [YEAR] and [YEAR], with sample sizes ranging from [min] to [max]. Mean follow-up duration ranged from [min] to [max] months. ...

### Primary Analysis
Vitamin D supplementation was associated with reduced all-cause mortality (pooled RR, 0.94; 95% CI, 0.90–0.98; P = 0.006). Between-study heterogeneity was low (I² = 28%; P = 0.14 for heterogeneity). There was no evidence of publication bias (Egger test, P = 0.34) (Figure 2).
```

### Discussion key points agent would note

- Mortality benefit consistent with prior meta-analyses (cite)
- Low heterogeneity supports robustness
- May be driven by specific populations (subgroup exploration needed — prompt user)
- Generalizability limited by trial-level data (not IPD)
- Remind user: does your abstract include PRISMA checklist reference?

---

## Example 3: Reviewer Rebuttal

### Reviewer Comment

```
"The authors did not adjust for important confounders such as smoking status and alcohol consumption in their models."
```

### Agent drafts response

```
Response: We agree that this is an important consideration. In the revised manuscript, we have added smoking status and alcohol consumption as covariates in all multivariable models (Model 2, Table 3). After adjustment, the association between [exposure] and [outcome] remained significant (aOR, X.XX; 95% CI, X.XX–X.XX; P = 0.0XX). This revision is described in the Methods (page X, lines Y–Z) and Results (page X, lines Y–Z).
```

### Reviewer Comment

```
"The sample size is relatively small. The authors should discuss this as a limitation."
```

### Agent drafts response

```
Response: Thank you for this suggestion. We have expanded the limitations paragraph to address sample size concerns, noting that the study may have been underpowered to detect small effect sizes and to perform certain subgroup analyses. We have also added a post-hoc power calculation for the primary endpoint. This discussion is now included in the revised manuscript (page X, lines Y–Z).
```

---

## Example 4: Methods Skeleton — Case-Control Study

### User says

```
Case-control, hospital-based, 200 cases (MI), 200 controls (non-MI)
Exposure: serum biomarker X
```

### Agent output (skeleton only)

```markdown
### Study Design
- Design: Hospital-based case-control study
- Setting: [hospital name / department], [city], from [YYYY-MM] to [YYYY-MM]

### Participants
- Cases: [criteria, e.g., first acute MI, confirmed by troponin + ECG]
- Controls: [matched/unmatched] by [age (±X yrs) / sex / etc.], selected from [source]
- Exclusion criteria for both groups: [placeholder]

### Exposure Assessment
- Serum biomarker X measured by [method — ELISA / LC-MS / etc.], [manufacturer]
- [Timing: at admission / fasting / within X hours]

### Outcomes and Definitions
- Primary outcome: [MI case status as defined above]
- [Any secondary analysis?]

### Statistical Analysis
- Continuous: Student's t-test or Mann-Whitney U per normality check
- Categorical: χ² test
- Multivariable: Conditional logistic regression, stratified by matching factors
- Confounders adjusted: [user fills — e.g., BMI, smoking, hypertension, diabetes]
- OR with 95% CI reported; OR >1 indicates increased odds of MI per unit increase in biomarker X

### Ethics
- [IRB #]
- [Informed consent statement]
```
