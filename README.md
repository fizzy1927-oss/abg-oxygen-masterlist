# Pocket Pulmo

*For quick lookups or long study sessions.*

A sage-green study site for respiratory therapy students preparing for the NBRC TMC / CSE exams. It's built for quick lookups on a phone or laptop: no logins, no installs, and it follows your device's light/dark setting.

It opens on a **landing page** that explains what's here and helps you pick where to start. After that, every page shares the same simple navigation bar:

- **Look up** menu: ABG values · Medications · O₂ devices · Formulas · Gas cylinders · Mnemonics
- **Practice** menu: O₂ device cases · Med cases · O₂ math quiz · ABG practice · Assessment sim lab · Vent practice lab · Medication quiz · Med flashcards · Review my mistakes
- **Search:** search the whole site from any page. Press `/` on a keyboard, or tap the magnifying glass.

---

## What's on the site

### Home — `index.html`
The landing page, made so the site isn't overwhelming the first time:
- **Badges under the tagline:** **Works offline** (it changes to "saved on this device ✓" once your phone has saved the site) and **Add to Home Screen** (tap it for iPhone and Android steps, plus a one-tap Install button on Android/Chrome).
- **A big search box.** Type a drug, device, gas, formula, lab value, symptom or mnemonic (e.g. "albuterol", "Venturi", "E cylinder", "thrush", "can't see"), and it jumps you to the right spot. Drug results open the med chart already filtered to that drug. "Try:" buttons show example searches.
- **Two paths:** **Look something up** (the 5 reference pages) and **Practice** (the 7 quizzes, flashcards and your mistakes deck), each with a one-line description. The **Review my mistakes** card shows a red count when you have questions waiting.
- **Quick numbers:** a tabbed card (ABG · O₂ devices · Formulas · Meds) with the most-looked-up values: ABG normals, ROME and the 60/90 rule, every device's flow and FiO₂, entrainment ratios, cylinder factors and CaO₂, and key med doses (albuterol, ipratropium, DuoNeb, the 20-beat rule, theophylline level, caffeine loading, racemic epi, PFT reversibility). It remembers the last tab you opened, and each tab links to its full chart.
- **What's new:** a small pill at the top of the home page with the latest headline. Tap it to see the list of updates. A red dot shows until a visitor has opened it, and the footer has a "What's new" link too.
- **Case of the day:** one patient case from the O₂ and med case sets, the same for everyone on a given day. It works through all of them in a shuffled order before any case repeats. Answer it right on the home page to see the explanation. It remembers today's answer, keeps a streak for days in a row, and links to more cases like it.

### 1. ABG Values — `abg-o2.html#abg`
Normal adult arterial blood gas values (room air, sea level), each with what a high or low value means:

| Value | Normal | Tells you about |
| --- | --- | --- |
| pH | 7.35 – 7.45 | Acid–base balance overall |
| PaCO₂ | 35 – 45 mmHg (40) | Ventilation (the lungs' side) |
| PaO₂ | 80 – 100 mmHg | Oxygenation |
| HCO₃⁻ | 22 – 24 mEq/L | The kidneys' (metabolic) side |
| Base excess (BE) | ±2 | The kidneys' (metabolic) side |
| SaO₂ | 98 – 100% | O₂ saturation in arterial blood (SpO₂ by pulse ox: 95 – 100%) |

Plus the **ROME** rule (Respiratory Opposite, Metabolic Equal), and a link to ABG practice.

**Compensation** (`abg-o2.html#comp`): a short, plain-language version. One sentence on what compensation is, 3 steps (check the pH, find the cause, check the other value), then one respiratory acidosis gas at each stage (uncompensated 7.25/60/23, partially 7.32/60/30, fully 7.37/60/34) with abnormal values in red. Two tips: which side of 7.40 the pH sits on, and "both high or both low = compensation, one high and one low = mixed."

**Oxyhemoglobin dissociation curve** (`abg-o2.html#curve`):
- **The curve itself:** a real S-shaped curve drawn from the Severinghaus equation.
- **Shifts:** dashed left- and right-shift curves that you can show or hide.
- **Steep vs. flat:** the steep part (below a PaO₂ of 60) is shaded.
- **Key points:** P50 27 → 50%, venous 40 → 75%, 60 → 90% and 100 → 97–98%.
- **Slider:** slide along the curve, or tap or hover on it, to read the SaO₂ at any PaO₂.
- **The 60 / 90 rule:** PaO₂ 60 ≈ SaO₂ 90%, explained.
- **What shifts the curve:** right-shift causes ("CADET, face Right": CO₂, Acid, 2,3-DPG, Exercise, Temperature) and left-shift causes (alkalosis, cold, CO, methemoglobin, fetal Hb).

### 1b. ABG Practice — `abg-practice.html`
Unlimited random blood gases to interpret.

- **Options:** all patterns, respiratory only, or metabolic only; acid–base only or with PaO₂; and 5, 10 or 20 gases.
- **Patterns:** normal; uncompensated, partially compensated and fully compensated respiratory or metabolic acidosis or alkalosis; and combined (mixed) acidosis or alkalosis. Every generated gas follows Henderson–Hasselbalch, so the numbers are realistic.
- **Oxygenation (when PaO₂ is on):** 80–100 normal, 60–79 mild, 40–59 moderate, below 40 severe hypoxemia.
- **Every answer explains itself:**
  - a **tic-tac-toe grid** that puts each value in its Acid / Normal / Base column;
  - numbered steps (pH → PaCO₂ → HCO₃⁻ → primary problem → compensation → oxygenation);
  - common causes.
- **Also on the page:** a "How to read an ABG" refresher and a "Retry the missed" button.

### 1e. Assessment Sim Lab — `assess.html`
Three tabs:
- **Patient assessment (21 patients):** normal post-op, asthma, emphysema, chronic bronchitis with cor pulmonale, RLL pneumonia, pleural effusion, pneumothorax, atelectasis, CHF, pulmonary fibrosis, croup, epiglottitis, bronchiolitis, DKA (Kussmaul), opioid overdose, PE, anxiety hyperventilation, sepsis, stroke with Cheyne-Stokes breathing, CF and Guillain-Barré.
  - **Vital signs:** take them yourself or just reveal them. Respirations are counted for 15 s × 4 while watching a front view and a side view of the patient in bed. The pulse is counted for 15 s × 4. For the BP you control the valve: hold the button (or space bar) to let air out at about 3 mmHg/s, let go to pause the needle, and tap Mark systolic / Mark diastolic at the first and last Korotkoff sounds (or watch the beat light). "Start over" re-pumps the cuff.
  - **Exam:** inspect, palpate, then listen, percuss and check fremitus on a tappable chest map. Listening plays that patient's breath sound for the spot you tapped. A findings chart fills in and flags abnormal values for the patient's age.
  - **Decide:** pick which vitals are abnormal, what's going on and what to do first. Then see the key findings and which ones you didn't check. "Surprise me" hides the patient's name.
- **Vital signs skills:** drills to count respirations and a pulse (regular or irregular, both 15 s × 4), take a blood pressure with the valve, name the breathing pattern from a 40-second trace, judge normal or not by age, and do MAP / pulse pressure / temperature math.
- **Name that breath sound:** an ear-training drill. Hear a sound, pick it from four choices, and compare it with the one you picked if you're wrong.
- **Normal values:** adult and pediatric vital signs, chest exam findings by condition (breath sounds, percussion, fremitus, trachea), breath sounds (each with a play button) and breathing patterns.

Missed decision questions go into Review my mistakes.

**Breath sounds:** the site generates every sound in the browser (filtered noise, tones and clicks), so they work offline and there are no recordings to license. The sounds are vesicular, bronchial, diminished, absent (heart sounds only), wheezes, rhonchi, fine and coarse crackles, stridor, gurgling and pleural friction rub. In a patient case, the sound is picked from the written finding (for example "Fine late-inspiratory crackles" plays fine crackles late in each breath in), so new patients get sounds automatically. They're teaching approximations of timing and pitch. The sound code is in `assess.html`: search for `Pocket Pulmo breath sounds`.

**Game layer:** each patient is scored out of 3 stars (100 points per question right, 20 per key finding found, 30 per vital measured yourself accurately). Patient tiles show your best stars or "New". The vital-sign drills keep a streak and your best streak. Points turn into XP; see "Stars, XP and badges" below.

### 1d. Vent Practice Lab — `vent.html`
A bedside ventilator simulator, restyled in the Pocket Pulmo look (light and dark).
- **30 patients in 7 groups**, each with a history, goals and IBW-based tidal volume range:
  - **Normal lungs:** post-op, opioid overdose, traumatic brain injury.
  - **Obstructive:** status asthmaticus, intubated COPD.
  - **Stiff lungs:** ARDS, severe viral ARDS, mild ARDS (pancreatitis), flail chest/contusion, lobar pneumonia, aspiration, morbid obesity, pulmonary fibrosis, pregnancy with flu ARDS, bronchopleural fistula, a 9-year-old with pneumonia.
  - **Shock & special situations:** post-cardiac arrest, hemorrhagic shock, massive PE, DKA, smoke inhalation.
  - **Nerve & muscle:** Guillain-Barré, C3 spinal cord injury.
  - **Weaning:** an SBT that passes and one that fails.
  - **Noninvasive (mask):** COPD on BiPAP, CHF on CPAP, myasthenic crisis, obesity hypoventilation, ALS.
- **Each new patient teaches something specific:** match the pre-intubation minute ventilation in DKA, set Vt by IBW and raise PEEP in obesity, wean FiO₂ after cardiac arrest, avoid high PEEP in shock and PE, and target a PaCO₂ of 30–32 in pregnancy.
- **To add or edit patients:** in `vent.html`, search for `More Vent Practice Lab patients`. The comment there explains each setting, and you can copy a patient to make a new one.
- **Patient monitor:** live ECG, pleth and capnography with HR, SpO₂, arterial BP, EtCO₂, RR and temperature.
- **Ventilator:**
  - modes: VC-AC, PC-AC, SIMV, CPAP/PS, noninvasive CPAP and BiPAP S/T;
  - live pressure, flow and volume waveforms and measured values (PIP, Pplat, Vte, Ve, I:E, Cstat, driving pressure, auto-PEEP);
  - adjustable settings and alarm limits;
  - inspiratory and expiratory holds.
- **Troubleshoot (DOPE):** pick a problem or get a hidden one. Problems include disconnect, secretions, a bitten or kinked tube, bronchospasm, right mainstem intubation, tension pneumothorax, cuff leak, circuit water, unplanned extubation, flow starvation, O₂ supply failure and NIV mask problems. Assess, intervene, and get a teaching point at the end.
- **Also:** a circuit change (put the steps in order while the patient is bagged), ABG draws with interpretation, and an event log.
- **Mission tab:** every patient has goals to hit (for example SpO₂ 88–95%, pH 7.25–7.45, Vt 4–6.5 mL/kg and Pplat ≤ 30 in ARDS). A checklist updates live. pH and PaCO₂ only count from an ABG drawn at least 30 s after your last change, and Pplat needs an inspiratory hold. Submit for 1–3 stars; your best shows next to the patient's name in the picker. Goals are in `vent.html`: search for `Mission goals`.
- **Night shift:** 5 hidden problems in a row. Each fix is scored on time, lowest SpO₂, whether you used the clue and any risky actions you didn't need (like calling for reintubation). Your best shift total is saved.

### Stars, XP and badges (both sim labs)
- XP ranks: RT student → Clinical student (300) → New grad RT (1,000) → Staff RT (2,500) → Senior RT (5,000) → Charge RT (9,000) → RT legend (15,000).
- 9 badges in the Assessment lab and 8 in the Vent lab, shown under the 🏅 button at the top of each lab.
- Everything is saved on the device only (browser storage), so nothing is shared and there are no accounts. "Reset my progress" in the badge panel clears it.

### 1c. Review My Mistakes — `review.html`
Every question you miss anywhere on the site goes into one personal deck. That includes O₂ device cases, med cases, the medication quiz, the O₂ math quiz, ABG practice and the case of the day.

- **Leaving the deck:** answer a question right (here or in its original quiz) and it leaves the deck. Miss it again and it stays, marked "missed 2×" and so on. The most-missed questions come up first.
- **Filters:** review everything or one source at a time, and choose 5, 10, 20 or all.
- **Math questions:** keep their typed-answer box and the calculator.
- **Browse the deck:** see every question and answer in a list, remove single questions, or clear the deck (it asks you to confirm first).
- **Storage:** the deck is saved on your device only (up to 300 questions) and works offline.

### 2. O₂ Devices — `abg-o2.html#o2`
Six oxygen delivery devices, each with liter flow, FiO₂ range, low vs. high flow, humidification, and whether FiO₂ changes with the patient's rate / tidal volume:

| Device | Liter flow | FiO₂ | Flow | Humidification | FiO₂ changes with RR / VT? |
| --- | --- | --- | --- | --- | --- |
| Nasal cannula | 1 – 6 L/min | 24 – 45% | Low | Yes, at 4 L/min and above (bubble humidifier) | Yes |
| Simple face mask | 5 – 10 L/min | 40 – 60% | Low | No | Yes |
| Partial rebreather | 10 – 15 L/min (keep bag inflated) | 40 – 60% | High | No | Yes |
| Non-rebreather | 10 – 15 L/min | 70 – 100% | High | No | Yes |
| Venturi mask | 2 – 12 L/min | 24 – 50% | High | No | No |
| High-flow nasal cannula (HFNC) | Up to 60 L/min | 21 – 100% | High | Yes, heated (required) | No |

Values follow the program's Oxygen Delivery Devices worksheet (RSP-119); HFNC was added. Includes a short explanation of which devices are low vs. high flow and why FiO₂ changes with breathing on some of them, and a link to the O₂ Device Cases quiz. On a phone the table becomes one card per device.

### 3. O₂ Device Cases — `o2-cases.html`
A case-study quiz on oxygen devices. Each case gives you a patient (history, SpO₂, vitals, sometimes an ABG) and asks what you'd do. Every answer explains why it's right and why the other choices aren't.

- **51 cases in 5 types:**
  - **Pick the device (12):** e.g., the COPD CO₂ retainer already at target, cluster headache, carbon monoxide poisoning, pneumonia failing a non-rebreather, an infant with bronchiolitis, nasal packing, a claustrophobic patient.
  - **Troubleshoot (15):** e.g., a cannula hooked to the air flowmeter, a whistling humidifier, a Venturi set below its flow, HFNC prong size, a bad pulse-ox signal, a low cylinder before transport, a collapsing reservoir bag, a simple mask below 5 L/min, a dry nose on a cannula, raising a Venturi's FiO₂, blocked entrainment ports, the aerosol mist disappearing, HFNC humidity, mouth breathing, the non-rebreather's safety port.
  - **Next step (8):** HFNC failure, weaning FiO₂ in a preemie, stepping up a Venturi, opioid hypoventilation, hypercapnic failure needing BiPAP, CHF pulmonary edema needing CPAP/BiPAP, weaning off a non-rebreather, O₂-induced hypercapnia.
  - **Concepts (5):** why a cannula above 6 L/min barely helps, estimating cannula FiO₂, how breathing pattern changes low-flow FiO₂, partial rebreather vs. non-rebreather, which devices are high flow.
- **Multi-part cases (11):** each one unfolds in 2–3 steps. Answer part 1, then an update tells you what happened ("the bag still collapses", "the tank is at 400 psig"), and you decide what to do next. They cover troubleshooting, escalation (Venturi → NRB → HFNC, BiPAP) and O₂ math at the bedside.
- **Calculator:** a pop-up calculator for the math cases.
- **Quiz options:** filter by case type, choose 5, 10, 20 or all, and open the built-in device cheat sheet.
- **Results:** a score broken down by case type, with a review of your misses and a "Retry the missed" button.

### 3b. Med Cases — `med-cases.html`
A clinical-scenario quiz on respiratory medications, in the same format as the O₂ Device Cases. Every answer explains why, and links straight to that drug in the med chart.

- **178 application-based cases in 5 types:**
  - **Pick the drug (32):** add-on tiotropium for asthma, acute asthma, croup and post-extubation stridor, COPD maintenance, choosing a biologic, CF, apnea of prematurity, PCP prophylaxis, cromolyn before an allergen, end-of-life secretions, and more.
  - **Side effects & safety (47):** tobramycin ototoxicity, steroid-induced hyperglycemia, extra montelukast before exercise, tachycardia and tremor during treatment, thrush, theophylline toxicity and interactions, anticholinergic effects (glaucoma, urinary retention), anaphylaxis with biologics, duplicate-drug orders, LABA without an ICS, beta blockers in asthma, MAO inhibitors and epinephrine, colistin and gentamicin hazards, and more.
  - **Dosing & delivery (55):** dose calculations (caffeine loading dose, racemic epi and acetylcysteine mg, continuous albuterol volume), catching wrong orders (doses, units, frequency), inhaler technique (MDI, spacer, Diskus, Ellipta, HandiHaler, Respimat, QVAR), priming, ventilator delivery, the CF treatment order, mixing rules, diluents and storage.
  - **Next step (33):** ICS and pneumonia risk in COPD, single-inhaler triple therapy, judging response (peak flow, FEV₁, the silent chest), rescue-inhaler overuse, steroid tapers, when a treatment is needed early, and more.
- **Where they came from:** application-based questions from the course's respiratory pharmacology study set (de-duplicated, with a few corrected), the textbook's review questions, and cases written to fill in the drugs those didn't cover.
- **Multi-part cases (11):** clinical scenarios that unfold in 2–3 steps. Examples: tachycardia halfway through an albuterol treatment, then the drug swap; bronchospasm from acetylcysteine; rebound stridor after racemic epi; theophylline toxicity and the drug interaction behind it; caffeine citrate dose math.
- **Roman-numeral questions** (I, II, III…) show the statements in a list, with the choices kept in their original order.
- **Quiz options:** filter by case type, choose 5, 10, 20 or all, and open the built-in drug-class cheat sheet.
- **Results:** a score by case type, a review of your misses with chart links, and a "Retry the missed" button.

### 4. Formulas — `formulas.html`
Every formula on the site in one place, each with a worked example:
- **Total flow (air-entrainment devices):**
  - formulas for the air : O₂ ratio and total flow, plus a ratio table (24% → 100%);
  - the "total flow ≥ 3 × minute ventilation" rule and fixes for low flow;
  - the FiO₂ of a mixed gas;
  - a **calculator** (FiO₂ + O₂ flow, optional minute ventilation).
- **Cylinder duration:**
  - the formula, the step-by-step method, cylinder factors (D 0.16, E 0.28, M 1.56, G 2.41, H/K 3.14) and full-cylinder volumes;
  - a **calculator**.
- **Oxygen content:**
  - **CaO₂ = (Hb × 1.34 × SaO₂) + (PaO₂ × 0.003)**, normal 16–20 mL/dL;
  - the **arterial–venous O₂ difference**, C(a–v)O₂ = CaO₂ − CvO₂, normal ≈ 5 mL/dL;
  - a **calculator** (Hb, SaO₂, PaO₂, plus optional SvO₂ / PvO₂).
- **Quick estimates:** nasal cannula FiO₂ (21% + 4% per L), the 60 / 90 rule, heliox flow correction (×1.8 / ×1.6).
- **Drug math:** percent solution → mg/mL (% × 10, 1:1000 = 1 mg/mL), dose → volume, weight-based dosing.

Old links to `gas.html#total-flow` and `gas.html#cylinder` forward here automatically.

### 4c. Breath Sounds — `sounds.html`
Every breath sound sorted the way textbooks do it, each with a play button:
- **Normal:** tracheal, bronchial, bronchovesicular, vesicular.
- **Loudness changes:** diminished, absent.
- **Adventitious, continuous** (musical): wheezes, rhonchi, stridor.
- **Adventitious, discontinuous** (pops and creaks): fine crackles, coarse crackles, pleural friction rub.

Each card has an in/out diagram (up = breathing in, line thickness = loudness, red marks = the extra sound and when it happens), plus what it sounds like, where you hear it and what it means. Two "tell them apart" tables compare wheezes, rhonchi and stridor, and fine crackles, coarse crackles and a rub. A link opens the Name that breath sound drill. The sounds are the same generated ones the Assessment lab uses.

### 4b. Gas Cylinders — `gas.html`
- **Medical gas cylinders:** the US color code, what each gas is used for, and its pin index (PISS). Covers oxygen, medical air, heliox, helium, carbon dioxide, CO₂/O₂, nitrous oxide, nitrogen, cyclopropane and ethylene.
- **Also:** PISS vs. ASSS vs. DISS, and cylinder safety.

### 5. O₂ Math Quiz — `math-quiz.html`
A separate quiz for the calculations. You type your answer (or pick one for yes/no-style questions), check it, and see the worked solution.

- **Topics:** total flow, cylinder duration, or both.
- **Practice set:** the 15 worked problems (8 total flow, 7 cylinder duration), in a random order.
- **Random problems:** new numbers every time, for unlimited practice. Problem types:
  - total flow from the ratio table
  - working out an entrainment ratio
  - whether the total flow is adequate for the patient's minute ventilation
  - the FiO₂ of mixed O₂ and air
  - cylinder duration, with and without a safe residual
  - whether a cylinder will last a transport
  - the minimum gauge pressure needed
- **Choose 5–20 questions.** A **Hint** button shows the formulas, and **Show answer** gives you the solution if you're stuck.
- **Calculator:** tap the **Calculator** button (bottom right) for a pop-up calculator with + − × ÷, parentheses and %. **Use in answer** puts the result straight into your answer box. On a phone it opens as a compact panel and scrolls the question into view above it. The Med Cases page has the same calculator for the dose-calculation cases.
- **Flexible answers:** cylinder answers accept minutes or hours and minutes (“2 hr 48 min”, “2:48”). FiO₂ accepts a percent or a decimal. Small rounding differences are counted as correct.
- **Results:** a score at the end, a review of everything you missed with the worked solutions, and a “Retry the missed” button.

### 6. Medications — `meds.html#table`
The NBRC respiratory pharmacology chart: **46 drugs in 11 classes.** Each drug has brand names, category, strength, dosage, onset / peak / duration, mode of action, clinical effects and indications, adverse effects, contraindications, hazards, delivery device, and exam notes.

- **Classes:** sympathomimetics (β agonists), parasympatholytics (anticholinergics), combinations, xanthines, biologics, mast cell stabilizer, leukotriene modifiers, anti-infectives, mucolytics, corticosteroids, and diluents / bland aerosols.
- **Table view:** the full chart, with search, class filters, and "Hide answers" (tap a cell to reveal) for self-testing.
- **Cards view:** one expandable card per drug.
- **Flashcards:** study one field or everything, shuffle, mark cards known, and skip known cards (progress is saved on your device).
- **Quiz:** 83 hand-written NBRC-style questions (including textbook review questions on SABAs vs. LABAs, DPIs, DuoNeb/Combivent and ipratropium vs. atropine) plus auto-generated drug class and brand-name questions; choose 10, 20, 30 or all, then review your misses.

### 7. Mnemonics — `meds.html#mem`
The **Memory aids** tab of the medication chart:
- **The big picture:** sympathetic vs. parasympathetic, "1 heart, 2 lungs," cAMP vs. cGMP, and rescue vs. controller.
- **Read the ending, know the class:** 8 drug-name endings (-terol, -tropium / -clidinium, -sone / -nide / -olone, -lukast, -phylline, -mab, -mycin, -cillin).
- **50 class-by-class mnemonics and rules of thumb.** These include "can't see, can't pee," "Big Happy Dogs Chase After Squirrels" (the CF treatment order), the STEROIDS side-effect acrostic, Mean GNATS for aminoglycosides, and Anoro = "A-NO-roid."

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page: site search, Look up / Practice paths, quick numbers, case of the day |
| `abg-o2.html` | ABG values and O₂ devices |
| `abg-practice.html` | ABG practice: unlimited random gases to interpret |
| `assess.html` | Assessment sim lab: patient assessment and vital signs |
| `vent.html` | Vent practice lab: ventilator simulator |
| `review.html` | Review my mistakes: every missed question from every quiz |
| `formulas.html` | Every formula: total flow, cylinder duration, O₂ content, quick estimates, drug math (with calculators) |
| `gas.html` | Medical gas cylinders: colors, uses, pin index |
| `sounds.html` | Breath sounds: sorted by type, with a sound to play for each |
| `o2-cases.html` | O₂ Device Cases: case-study quiz on choosing and troubleshooting O₂ devices |
| `med-cases.html` | Med Cases: clinical-scenario quiz on respiratory medications |
| `math-quiz.html` | O₂ Math Quiz: graded total flow and cylinder duration problems |
| `meds.html` | Medication chart: table, cards, flashcards, quiz, memory aids |
| `apple-touch-icon.png` | The lung icon people see when they add the site to their phone's home screen |
| `sw.js` | The offline helper (service worker): saves the pages so the site works without internet |
| `manifest.webmanifest` | App info for phones: the name, icon and colors used by "Add to Home Screen" |
| `icon-192.png`, `icon-512.png` | App icons used by the manifest (Android and desktop) |
| `README.md` | This file |

There's no build step and no dependencies. Each page is a single HTML file.

Old links and bookmarks to `index.html#abg` or `index.html#o2` still work: they forward to `abg-o2.html`.

## Put it online with GitHub Pages

1. Create a new repository on GitHub.
2. Click **Add file → Upload files**, drag in all thirteen files, then **Commit changes**. (When updating, upload the new versions to replace the old ones.)
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, then **Save**.
5. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

Tip: on your phone, open the site and use **Add to Home Screen**. It saves as **Pocket Pulmo** with the lung icon and opens like an app.

## Offline use

Pocket Pulmo works without internet after it's been opened once online.

- **How:** on the first visit, the browser installs `sw.js` in the background, and it saves a copy of every page. Online, pages always load fresh from GitHub, so updates show up right away, and the saved copy is refreshed. Offline, or if the connection takes more than about 4 seconds, the saved copy is used. Search, quizzes, calculators and flashcards all keep working.
- **Updates:** just upload new files as usual. `sw.js` is rebuilt with every update, so old saved copies are cleared automatically.
- **iPhone tip:** use **Add to Home Screen**. Home-screen apps keep their offline copy most reliably, and Safari may clear saved data for sites that haven't been opened in a while.
- **Fonts:** saved after the first online visit. If they weren't saved yet, the site uses the phone's built-in fonts.
- Offline mode only works on the live (https) site, not when a page is opened as a file on your computer.

## Editing

- **ABG values and O₂ devices:** edit the text directly in `abg-o2.html`.
- **Formulas:** edit the text directly in `formulas.html`. **Gas cylinders:** edit `gas.html`.
- **Multi-part cases:** they come after the single cases in `CASES` (look for `MULTI-PART CASES`). Each has `parts`: the first part has `q`, `a`, `o`, `x`; later parts also have `u` (the update) and `v` (new findings).
- **Device cases:** in `o2-cases.html`, the cases are the `CASES = [ ... ]` array near the bottom. The comment above it explains each field, and you can add your own case by copying one.
- **Med cases:** in `med-cases.html`, the cases are the `CASES = [ ... ]` array near the bottom (same format as the O₂ cases, plus `d`, the drug names to link to in the chart).
- **Math quiz problems:** in `math-quiz.html`, the practice set is the `FIXED = [ ... ]` array (the comment above it explains each field). The random problem generators are in `GEN`.
- **Medications:** in `meds.html`, the drug list is the `D = [ ... ]` array and the quiz questions are the `QUIZ = [ ... ]` array inside the `<script>` near the bottom. Each entry's fields are explained in the comment above it.
- **Mnemonics:** also in `meds.html` — `MEM_BIG` (big-picture cards), `MEM_SUFFIX` (name endings), and `MEM` (cards for each drug class).

- **ABG practice:** the logic is the `window.ABG` script in `abg-practice.html` (normal ranges in `N`, practice patterns in `PATTERNS`).
- **What's new list:** in `index.html`, search for `WHAT'S NEW`.
  - Copy the `<section class="upd" ...>` block, put it at the top of the list, and edit the date, the bullets and `data-head` (the one-line headline shown on the pill).
  - Give the new block a new `data-id` (e.g. `2026-10-15`) so the red "new" dot shows again for returning visitors.
  - Labels: `<span class="k new">New</span>`, `<span class="k fix">Updated</span>`, or plain `<span class="k">Moved</span>`.
- **Site search:** each page has its own copy of the search list (`window.RTQ_INDEX`). If you add a drug, case or mnemonic by hand, it shows up on its page right away, but it won't appear in search until that list is rebuilt.

Flashcard progress, your mistakes deck, filters, quiz settings and your last-used tab are saved in your browser, per device.

> For exam study. Ranges, doses and ratios vary slightly between textbooks and facilities. Always follow your program's references, your facility's policies, and the current order / package insert in clinical practice.
