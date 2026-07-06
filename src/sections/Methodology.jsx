import { DiscoveryProblem, DiscoveryTranslation, DiscoveryInventory } from '../components/DiscoveryMap';
import errorCloud from '../images/Error_cloud.jpeg';
import variationTableImg from '../images/variation_table_contradiction.png';
import React, { useState } from 'react';
import { CheckIcon, CrossIcon, FlagIcon, PackageIcon, SearchIcon, TargetIcon, ThoughtIcon, WarningIcon } from '../components/PrintIcons';


/* ============================================================
   مكوّن: بطاقة التمرين القابل للطي
   ============================================================ */
const ExerciseCard = ({ number, phase, title, children }) => {
    return (
        <div className="radar-box" style={{
            border: '2px solid #1e3a5f',
            borderRadius: '12px',
            padding: '20px 22px',
            paddingBottom: '6px',
            margin: '10px 0',
            background: '#f0f4ff',
            position: 'relative',
            direction: 'rtl',
            textAlign: 'right',
            unicodeBidi: 'plaintext'
        }}>
            {/* شارة رقم التمرين */}
            <div style={{
                position: 'absolute',
                top: '-14px',
                right: '20px',
                background: '#1e3a5f',
                color: '#fff',
                borderRadius: '20px',
                padding: '3px 16px',
                fontSize: '11pt',
                fontWeight: 700,
                letterSpacing: '0.04em',
                direction: 'rtl'
            }}>
                تمرين {number} — {phase}
            </div>

            <div className="radar-box-title" style={{
                color: '#1e3a5f',
                borderBottom: '2px solid #e2e8f0',
                paddingBottom: '8px',
                marginBottom: '14px',
                marginTop: '6px',
                textAlign: 'right'
            }}>
                {title}
            </div>

            {children}
        </div>
    );
};

/* ============================================================
   مكوّن: سؤال الاختيار المتعدد
   ============================================================ */
const QuizMCQ = ({ id, question, options, correctIndex, explanation }) => {
    const [selected, setSelected] = useState(null);
    const [revealed, setRevealed] = useState(false);

    const handleSelect = (idx) => {
        if (revealed) return;
        setSelected(idx);
    };

    const handleReveal = () => {
        if (selected === null) return;
        setRevealed(true);
    };

    return (
        <div style={{ margin: '14px 0', direction: 'rtl', textAlign: 'right' }}>
            <div style={{ fontWeight: 'bold', color: '#334155', marginBottom: '10px', lineHeight: '1.8' }}>
                {question}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                {options.map((opt, idx) => {
                    let bg = '#f8fafc';
                    let border = '1.5px solid #cbd5e1';
                    let color = '#334155';

                    if (revealed) {
                        if (idx === correctIndex) { bg = '#dcfce7'; border = '1.5px solid #16a34a'; color = '#15803d'; }
                        else if (idx === selected) { bg = '#fee2e2'; border = '1.5px solid #dc2626'; color = '#b91c1c'; }
                    } else if (idx === selected) {
                        bg = '#e0e7ff'; border = '1.5px solid #4338ca'; color = '#3730a3';
                    }

                    return (
                        <div
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            style={{
                                background: bg, border, color,
                                borderRadius: '8px', padding: '10px 14px',
                                cursor: revealed ? 'default' : 'pointer',
                                transition: 'all 0.2s',
                                fontSize: '0.92rem', lineHeight: '1.7',
                                display: 'flex', alignItems: 'flex-start', gap: '8px'
                            }}
                        >
                            <span style={{ fontWeight: 700, minWidth: '20px' }}>
                                {['أ', 'ب', 'ج', 'د'][idx]}.
                            </span>
                            <span>{opt}</span>
                        </div>
                    );
                })}
            </div>

            {!revealed && (
                <button
                    onClick={handleReveal}
                    disabled={selected === null}
                    style={{
                        background: selected !== null ? '#1e3a5f' : '#94a3b8',
                        color: '#fff', border: 'none', borderRadius: '8px',
                        padding: '8px 20px', cursor: selected !== null ? 'pointer' : 'not-allowed',
                        fontSize: '11pt', fontWeight: 600, transition: 'background 0.2s'
                    }}
                >
                    تحقق من إجابتك
                </button>
            )}

            {revealed && (
                <div className="strategy-box" style={{ marginTop: '12px', padding: '12px 16px', textAlign: 'right' }}>
                    <div className="strategy-box-title" style={{ marginBottom: '6px' }}>
                        {selected === correctIndex ? <><CheckIcon /> إجابة صحيحة!</> : <><CrossIcon /> إجابة خاطئة</>}
                    </div>
                    <div style={{ fontSize: '0.92rem', lineHeight: '1.8', color: '#334155' }}>
                        {explanation}
                    </div>
                </div>
            )}
        </div>
    );
};

/* ============================================================
   مكوّن: سؤال التطبيق (ترتيب الخطوات)
   ============================================================ */
const QuizOrder = ({ steps, correctOrder, hint }) => {
    const [userOrder, setUserOrder] = useState([...steps].map((_, i) => i));
    const [checked, setChecked] = useState(false);

    const moveUp = (idx) => {
        if (idx === 0 || checked) return;
        const newOrder = [...userOrder];
        [newOrder[idx - 1], newOrder[idx]] = [newOrder[idx], newOrder[idx - 1]];
        setUserOrder(newOrder);
    };

    const moveDown = (idx) => {
        if (idx === userOrder.length - 1 || checked) return;
        const newOrder = [...userOrder];
        [newOrder[idx + 1], newOrder[idx]] = [newOrder[idx], newOrder[idx + 1]];
        setUserOrder(newOrder);
    };

    const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correctOrder);

    return (
        <div style={{ margin: '14px 0' }}>
            <div style={{ fontWeight: 'bold', color: '#475569', marginBottom: '10px', fontSize: '11pt' }}>
                رتّب الخطوات التالية بالترتيب الصحيح:
            </div>
            {userOrder.map((stepIdx, pos) => (
                <div key={stepIdx} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: checked ? (isCorrect ? '#dcfce7' : (JSON.stringify(userOrder) === JSON.stringify(correctOrder) ? '#dcfce7' : '#fff7ed')) : '#f8fafc',
                    border: `1.5px solid ${checked ? (pos === correctOrder.indexOf(stepIdx) ? '#16a34a' : '#f97316') : '#cbd5e1'}`,
                    borderRadius: '8px', padding: '8px 12px', marginBottom: '6px',
                    transition: 'all 0.2s'
                }}>
                    <span style={{ fontWeight: 700, color: '#94a3b8', minWidth: '24px' }}>{pos + 1}.</span>
                    <span style={{ flex: 1, fontSize: '11pt', color: '#334155', lineHeight: '1.7' }}>
                        {steps[stepIdx]}
                    </span>
                    {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <button onClick={() => moveUp(pos)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '11pt' }}>▲</button>
                        <button onClick={() => moveDown(pos)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '11pt' }}>▼</button>
                    </div> */}
                </div>
            ))}

        </div>
    );
};

/* ============================================================
   مكوّنات المرحلة الثالثة (جرد المعطيات) - قابلة للتجزئة
   ============================================================ */

const TacticalAnalogy = ({ children }) => (
    <div className="tactical-analogy">
        {children}
    </div>
);

const ArsenalSteps = ({ steps }) => (
    <div className="steps-flow">
        {steps.map((step, idx) => (
            <div className="step-card" key={idx}>
                <div className="step-num">{idx + 1}</div>
                <strong>{step.title}</strong>
                <p style={{ fontSize: '11pt', marginTop: '5px', color: '#64748b' }}>{step.description}</p>
            </div>
        ))}
    </div>
);

const DataClassification = ({ items }) => (
    <div className="data-classification-grid">
        {items.map((item, idx) => (
            <div className="data-card" key={idx}>
                <span className={`tag ${item.tagClass}`}>{item.tagName}</span>
                <div className="data-card-content">{item.content}</div>
            </div>
        ))}
    </div>
);

const Methodology = () => {
    return (
        <>
            <div id="toc-methodology" className="exercise-title">
                بروتوكول SMART
            </div>
            <div id="toc-smart" style={{ display: 'none' }}></div>

            {/* ===================== المرحلة الصفرية ===================== */}
            <div id="toc-step1" className="question-header" style={{ backgroundColor: '#2c3e50' }}>المرحلة الأولى: تحليل التمرين (Scan)</div>

            <div className="step-row-two">
                <div className="left-col"><ThoughtIcon /> القاعدة</div>
                <div className="right-col">لا تقرأ أسئلة التمرين بشكل منعزل؛ بل حلل التمرين بشكل مترابط حيث تتصل أفكار الأسئلة مع بعضها البعض.</div>
            </div>

            <div className="exercise-statement">
                <strong>الإجراء:</strong> تمارين الرياضيات في البكالوريا مبنية بتسلسل هرمي، والجزء (II) دائماً ما يعتمد على الجزء (I). قبل البدء في حل السؤال الأول، اقرأ السؤالين أو الثلاثة التي تليه.
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">الهدف المنهجي</div>
                في كثير من الأحيان، يكون المطلوب في السؤال المتأخر هو "تلميح" لنتيجة السؤال الحالي. (مثلاً: إذا طلب منك في السؤال الثالث استنتاج أن الدالة متزايدة، فهذا يؤكد لك مسبقاً أن إشارة المشتقة التي ستحسبها في السؤال الأول يجب أن تخرج موجبة حتماً).
            </div>

            {/* مثال تطبيقي المرحلة الصفرية */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '18px 20px', margin: '5px 0' }}>
                <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>مثال :</div>
                <p style={{ marginBottom: '10px', lineHeight: '1.8' }}>
                    <strong>الوضعية:</strong> لتكن الدالة:
                </p>
                <div style={{ textAlign: 'center', margin: '12px 0 16px' }}>
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr', fontSize: '1.1em' }}>
                        {"\\(f(x) = \\dfrac{x^2 + 1}{x + 1}\\)"}
                    </span>
                </div>
                <ul style={{ paddingRight: '20px', lineHeight: '2.2' }}>
                    <li><strong>السؤال 1:</strong> احسب مشتقة الدالة <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f'(x)\\)"}</span> ثم ادرس إشارتها.</li>
                    <li><strong>السؤال 2:</strong> أنشئ جدول تغيرات الدالة <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f\\)"}</span> .</li>
                    <li><strong>السؤال 3:</strong> بيّن أن المستقيم <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y = x - 1\\)"}</span> مقارب للمنحنى.</li>
                    <li><strong>السؤال 4:</strong> استنتج وضعية المنحنى بالنسبة إلى المستقيم المقارب.</li>
                </ul>
            </div>

            {/* شرح أهمية التحليل الشامل */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '18px 20px', margin: '15px 0' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#1e3a5f', marginBottom: '12px' }}>
                    أين تظهر أهمية "التحليل الشامل"؟
                </div>
                <p style={{ lineHeight: '1.9', marginBottom: '14px' }}>
                    التلميذ الذي يقرأ السؤال 1 فقط سيبدأ مباشرةً بحساب مشتقة طويلة وقد يضيع في الحسابات. أما التلميذ الذي يقرأ التمرين كاملاً فسيلاحظ شيئاً مهماً جداً:
                </p>
                <p style={{ lineHeight: '1.9', marginBottom: '10px' }}>
                    بما أن السؤال 3 يتحدث عن مقارب مائل من الشكل{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y = x - 1\\)"}</span>
                    {' '}، فهذا يعني غالباً أن الدالة يمكن كتابتها على الشكل:
                </p>
                <div style={{ textAlign: 'center', margin: '10px 0 14px', padding: '10px', background: '#f8fafc', borderRadius: '8px' }}>
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr', fontSize: '1.05em' }}>
                        {"\\(f(x) = x - 1 + \\dfrac{k}{x + 1}\\)"}
                    </span>
                </div>
                <p style={{ lineHeight: '1.9', marginBottom: '10px' }}>
                    وهنا يصبح الحل أذكى بكثير، لأنك تقوم مباشرة بالقسمة:
                </p>
                <div style={{ textAlign: 'center', margin: '10px 0 14px', padding: '10px', background: '#f8fafc', borderRadius: '8px' }}>
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr', fontSize: '1.05em' }}>
                        {"\\(f(x) = x - 1 + \\dfrac{2}{x + 1}\\)"}
                    </span>
                </div>
                <p style={{ lineHeight: '1.9', marginBottom: '8px' }}>الآن لاحظ ماذا حدث:</p>
                <ul style={{ paddingRight: '22px', lineHeight: '2.1' }}>
                    <li>أصبح المقارب المائل واضحاً مباشرةً دون تفكير طويل.</li>
                    <li>
                        السؤال 4 أصبح سهلاً جداً لأن:{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(f(x) - (x - 1) = \\dfrac{2}{x + 1}\\)"}
                        </span>
                    </li>
                    <li>
                        وبالتالي وضعية المنحنى تعتمد فقط على إشارة{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x + 1\\)"}</span> .
                    </li>
                    <li>وحتى دراسة المشتقة أصبحت أبسط لأن كتابة الدالة الجديدة أسهل للاشتقاق.</li>
                </ul>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">الفكرة المنهجية</div>
                السؤال المتأخر ليس مجرد "نتيجة نهائية"، بل هو أحياناً دليل خفي يخبرك بالطريقة الذكية التي يجب أن تكتب بها الدالة أو تفكر بها منذ البداية.
            </div>

            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 1 — المرحلة الأولى
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="1" phase="المرحلة الأولى" title="التحليل الشامل للتمرين">

                <div className="exercise-statement">
                    <strong>الوضعية:</strong> اقرأ التمرين كاملاً قبل البدء في الحل، ثم حاول أن تتوقع ما ستحتاج إليه في السؤال الأول.
                </div>

                <div className="radar-box" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', margin: '10px 0' }}>
                    <ul style={{ paddingRight: '18px', lineHeight: '2.2' }}>
                        <li>
                            <strong>السؤال 1:</strong>
                            احسب مشتقة الدالة
                            <span className="math">{"\\(f\\)"}</span>
                            ثم ادرس إشارة
                            <span className="math">{"\\(f'(x)\\)"}</span>.
                        </li>

                        <li>
                            <strong>السؤال 2:</strong>
                            أنشئ جدول تغيرات الدالة
                            <span className="math">{"\\(f\\)"}</span>.
                        </li>

                        <li>
                            <strong>السؤال 3:</strong>
                            استنتج أن للدالة
                            <span className="math">{"\\(f\\)"}</span>
                            قيمة صغرى عند
                            <span className="math">{"\\(x=2\\)"}</span>.
                        </li>
                    </ul>
                </div>

                <div className="step-row-two">
                    <div className="left-col">المطلوب أ</div>
                    <div className="right-col">
                        قبل أن تبدأ بالحساب، ماذا يخبرك السؤال الثالث عن إشارة
                        <span className="math">{"\\(f'(x)\\)"}</span>
                        حول
                        <span className="math">{"\\(x=2\\)"}</span>؟
                    </div>
                </div>

                <div className="step-row-two">
                    <div className="left-col">المطلوب ب</div>
                    <div className="right-col">
                        ماذا تتوقع أن يكون جدول إشارة
                        <span className="math">{"\\(f'(x)\\)"}</span>
                        إذا كانت للدالة قيمة صغرى عند
                        <span className="math">{"\\(x=2\\)"}</span>؟
                    </div>
                </div>

                <div className="step-row-two">
                    <div className="left-col">المطلوب ج</div>
                    <div className="right-col">
                        بعد إنجاز السؤال الأول، قارن النتيجة التي وجدتها بما كنت تتوقعه بعد قراءة السؤال الثالث.
                        هل كان توقعك صحيحاً؟
                    </div>
                </div>

            </ExerciseCard>
            {/* ---- فاصل صفحة A4 ---- */}

            {/* ===================== المرحلة الأولى ===================== */}
            <div id="toc-step2" className="question-header" style={{ backgroundColor: '#922b21' }}>المرحلة الثانية: ترجمة نص التمرين و السؤال (Math Translate)</div>

            <div className="step-row-two">
                <div className="left-col"><ThoughtIcon /> القاعدة</div>
                <div className="right-col">ترجمة اللغة الانسانية الى لغة الرياضيات هي أول خطوة نحو استيعاب المشكل و الانطلاق في الحل.</div>
            </div>
            <div className="exercise-statement">
                <strong>الإجراء:</strong> إقرأ السؤال جيدا وقم بترجمة كل عبارة  إلى  علاقة رياضية واضحة في مسودتك .
            </div>

            <div className="radar-box">
                <div className="radar-box-title">دليل التحويل الرياضي - أنظر ملحق - التحليل الاستراتيجي لأسئلة البكالوريا</div>
                <div className="col-header-row-two">
                    <div className="col-header left-h">العبارة</div>
                    <div className="col-header right-h">الترجمة الرياضية</div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">المماس أفقي</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f'(x_0) = 0\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">مركز تناظر</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(2a-x)+f(x)=2b\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">متزايدة</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_{n+1} - U_n > 0\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">هندسية</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\frac{U_{n+1}}{U_n} = q\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">يقطع التراتيب</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(0)\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">محدودة</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_n \\leq M\\)"}</span></div>
                </div>
                <div className="step-row-two">
                    <div className="left-col">نهاية</div>
                    <div className="right-col"><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to x_0} f(x) = L\\]"}</span></div>
                </div>
            </div>

            {/* مثال تطبيقي المرحلة الأولى */}
            {/* <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '18px 20px', margin: '1px 0' }}>
                <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>مثال: متتاليات</div>
                <div style={{ marginBottom: '12px' }}>
                    <strong>نص السؤال:</strong> "أثبت أن المتتالية <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((U_n)\\)"}</span> متناقصة ومحدودة من الأسفل."
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ borderRight: '3px solid #94a3b8', padding: '12px' }}>
                        <div style={{ fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>قبل الترجمة (خطأ شائع)</div>
                        <p style={{ fontSize: '11pt', margin: 0 }}>يبدأ الطالب في حساب <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_{n+1}\\)"}</span> بشكل عشوائي دون هدف واضح.</p>
                    </div>
                    <div style={{ borderRight: '3px solid #b45309', padding: '12px' }}>
                        <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '6px' }}>بعد الترجمة (الصواب)</div>
                        <p style={{ fontSize: '11pt', margin: 0 }}>
                            <strong>الهدف 1 — التناقص:</strong> <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_{n+1} - U_n < 0\\)"}</span><br />
                            <strong>الهدف 2 — المحدودية:</strong> <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_n \\geq L\\)"}</span> (إيجاد القيمة L)
                        </p>
                    </div>
                </div>
                <strong>النتيجة:</strong> مجرد ترجمة السؤال أعطاك خارطة طريق واضحة بهدفين منفصلين تسعى لإثباتهما.
            </div> */}

            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 2 — المرحلة الأولى
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="2" phase="المرحلة الثانية" title="ترجمة السؤال إلى رياضيات">

                <div className="exercise-statement">
                    ترجم كل عبارة من العبارات التالية إلى علاقة رياضية دقيقة، كما في النموذج.
                </div>

                <div className="radar-box" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '6px', margin: '4px 0' }}>
                    <div className="col-header-row-two">
                        <div className="col-header left-h">العبارة اللفظية</div>
                        <div className="col-header right-h">الترجمة الرياضية المطلوبة</div>
                    </div>
                    {[
                        'المنحنى يمر من النقطة \\((2,\\, 3)\\)',
                        'المتتالية \\((U_n)\\) محدودة من الأعلى بـ \\(5\\)',
                        'الدالة \\(f\\) لها مقارب أفقي \\(y = -2\\) عند \\(+\\infty\\)',
                        'المستقيم \\((T)\\) مماسّ للمنحنى \\((C_f)\\) عند النقطة ذات الفاصلة \\(x_0=1\\)',
                    ].map((expr, i) => (
                        <div className="step-row-two" key={i}>
                            <div className="left-col" style={{ fontSize: '11pt', color: '#334155' }}>{expr}</div>
                            <div className="right-col" style={{ minHeight: '30px', borderBottom: '1px dashed #e2e8f0', padding: '4px 0' }}>
                                <span style={{ textAlign: 'right', width: '100%', marginRight: '20px', fontSize: '11pt', color: '#1e3a5f' }}>................................................</span>
                            </div>
                        </div>
                    ))}
                </div>

            </ExerciseCard>

            {/* ---- فاصل صفحة A4 ---- */}






            {/* ---- فاصل صفحة A4 ---- */}
            <br />
            {/* ===================== المرحلة الثالثة ===================== */}
            <div id="toc-step3" className="question-header" style={{ backgroundColor: '#1a5276' }}>المرحلة الثالثة: تحديد الهدف الحقيقي رياضيا (Aim)</div>
            <div className="step-row-two">
                <div className="left-col"><ThoughtIcon /> القاعدة</div>
                <div className="right-col">لا تبدأ بالحل قبل أن تعرف ما الذي تبحث عنه رياضياً.</div>
            </div>
            <div className="exercise-statement">
                <strong>الإجراء:</strong> عليك ألا تضيع في التفاصيل؛ ركز على المطلوب من السؤال، وقم بـ "ترجمته" إلى علاقة رياضية واضحة في مسودتك.
            </div>
            <div className="sub-question">أمثلة تطبيقية:</div>

            <div className="step-row-two">
                <div className="left-col">مثال متتاليات</div>
                <div className="right-col">
                    لإثبات أن المتتالية متزايدة، أثبت أن:
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(U_{n+1} - U_n > 0\\)"}</span>
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">تنبيه منهجي</div>
                إذا كان الهدف معقداً، قم بتجزئته إلى أهداف فرعية في مسودتك (مثل: توحيد مقامات، استخراج عامل مشترك محدد)
            </div>

            {/* مثال تطبيقي المرحلة الثالثة (تحديد الهدف الحقيقي) */}
            {/* مثال تطبيقي المرحلة الثالثة (تحديد الهدف الحقيقي) */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '18px 20px', margin: '15px 0' }}>

                <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>
                    مثال: تحويل الهدف إلى صيغة رياضية دقيقة
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <strong>نص السؤال:</strong> أثبت أن المستقيم
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\((\\Delta): y = x - 2\\)"}
                    </span>
                    مقارب مائل للمنحنى
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\((C_f)\\)"}
                    </span>
                    حيث:
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\(f(x) = \\frac{x^2 + 1}{x}\\)"}
                    </span>.
                </div>

                <div style={{ borderRight: '2px solid #e2e8f0', paddingRight: '14px', lineHeight: '2' }}>

                    <div><strong>الخطوة 1 — الترجمة (Translate):</strong></div>
                    <div style={{ margin: '6px 0', paddingRight: '12px', color: '#475569' }}>
                        المقارب المائل يعني أن الفرق بين الدالة والمستقيم يجب أن يختفي عند المالانهاية.
                        إذن نحول العبارة إلى هدف رياضي أولي:
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(f(x) - (x - 2)\\)"}
                        </span>.
                    </div>

                    <div><strong>الخطوة 2 — تحديد الهدف الحقيقي (Aim):</strong></div>
                    <div style={{ margin: '6px 0', paddingRight: '12px', color: '#475569' }}>
                        الهدف ليس “المقارب” نفسه، بل إثبات النهاية التالية:
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\[\\lim_{x \\to +\\infty} [f(x) - (x - 2)] = 0\\]"}
                        </span>.
                    </div>

                    <div><strong>الخطوة 3 — تحليل الهدف إلى عملية حسابية (2):</strong></div>
                    <div style={{ margin: '6px 0', paddingRight: '12px', color: '#475569' }}>
                        لا نحسب النهاية مباشرة، بل نحولها إلى تعبير جبري:
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(D(x) = f(x) - (x - 2)\\)"}
                        </span>
                        ثم نبسّطه.
                        ثم نحسب نهايته عند المالانهاية.
                    </div>

                    {/* <div><strong>الخطوة 4 — تنفيذ الحساب (1):</strong></div>
                    <div style={{ margin: '6px 0', paddingRight: '12px', color: '#475569' }}>
                        نحسب:
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(D(x) = \\frac{x^2 + 1}{x} - (x - 2)\\)"}
                        </span>
                        <br />
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(D(x) = \\frac{x^2 + 1 - x^2 + 2x}{x} = \\frac{2x + 1}{x}\\)"}
                        </span>
                    </div> */}

                </div>

                <div style={{ marginTop: '12px', color: '#334155', fontStyle: 'italic', fontWeight: 'bold' }}>
                    الفكرة المنهجية: لا تبدأ بالحساب. أولاً ترجم، ثم حدد الهدف، ثم فكك الهدف إلى تعبير جبري، ثم احسب. هكذا يتحول “المقارب” من فكرة هندسية إلى عملية حسابية بسيطة.
                </div>

            </div>
            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 3 — المرحلة الثانية
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="4" phase="المرحلة الثالثة" title="تحديد الهدف الرياضي وكتابته">

                <div className="exercise-statement">
                    <strong>الوضعية:</strong> لكل سؤال من الأسئلة التالية، حدّد الهدف الرياضي الدقيق الذي ستسعى لإثباته:
                </div>

                <div className="radar-box" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', margin: '10px 0' }}>
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold' }}>السؤال أ</div>
                        <div className="right-col">
                            "أثبت أن المنحنى{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\((C_f)\\)'}</span>{' '}
                            يقبل مركز تناظر من النقطة{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\Omega(1, 2)\\)'}</span>"
                            {/* <br />
                            <span style={{ color: '#1e3a5f', fontSize: '11pt' }}>
                                الهدف الرياضي: إثبات أنّ <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(2 \\cdot 1 - x) + f(x) = 2 \\cdot 2\\)"}</span>
                            </span> */}
                        </div>
                    </div>
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold' }}>السؤال ب</div>
                        <div className="right-col">
                            "أثبت أن المتتالية{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\((V_n)\\)'}</span>{' '}
                            هندسية"
                            {/* <br />
                            <span style={{ color: '#1e3a5f', fontSize: '11pt' }}>
                                الهدف الرياضي: إثبات أنّ <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\dfrac{V_{n+1}}{V_n} = q\\)"}</span> حيث <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(q\\)"}</span> ثابت
                            </span> */}
                        </div>
                    </div>
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold' }}>السؤال ج</div>
                        <div className="right-col">
                            "أثبت أن{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(x^3 - 3x + 2\\)'}</span>{' '}
                            يقبل التحليل إلى جداء ثلاثة عوامل خطية"
                            {/* <br />
                            <span style={{ color: '#1e3a5f', fontSize: '11pt' }}>
                                الهدف المرحلي الأولي: إيجاد جذر واضح (مثلاً <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x=1\\)"}</span>)، ثم تحليل العبارة بواسطته.
                            </span> */}
                        </div>
                    </div>
                </div>

            </ExerciseCard>
            {/* ===================== المرحلة الرابعة ===================== */}
            {/* ===================== المرحلة الرابعة ===================== */}
            <div id="toc-step4" className="question-header" style={{ backgroundColor: '#1e8449' }}>المرحلة الرابعة: تحديد المعطيات و ربطها للوصول للحل (Relate)</div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0369a1',
                backgroundColor: '#f0f9ff',
                padding: '8px 15px',
                borderRadius: '6px',
                borderRight: '4px solid #0284c7',
                marginBottom: '1px',
                marginTop: '10px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <span style={{
                    backgroundColor: '#0284c7',
                    color: '#fff',
                    padding: '1px 8px',
                    borderRadius: '4px',
                    marginLeft: '10px',
                    fontSize: '1rem'
                }}>أ</span>
                جرد المعطيات وتصفيتها
            </div>

            <div className="step-row-two">
                <div className="left-col">القاعدة</div>
                <div className="right-col">استخرج كل ما يلزم من المعطيات التي تصب في مصلحة الهدف.</div>
            </div>

            <TacticalAnalogy>
                إذا كان هدفك الوصول إلى نتيجة محددة، فعليك البحث عن كافة المعطيات التي تدعم هذا الهدف، وتجاهل المعلومات التي لا ترتبط مباشرة بالحل.
            </TacticalAnalogy>

            <ArsenalSteps
                steps={[
                    { title: "النظر إلى الهدف", description: "التعرف عليه جيداً وعلى \"شكله\" الرياضي بدقة." },
                    { title: "استخراج المعطيات", description: "حصر المعلومات التي لها علاقة بالبنية الرياضية للهدف." }
                ]}
            />
            <br />
            <br />
            <br />

            <div className="section-subtitle">تصنيف المعطيات :</div>
            <DataClassification
                items={[
                    {
                        tagClass: "direct",
                        tagName: "معطيات مباشرة",
                        content: <>عبارات المسألة الصريحة مثل: <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = x^2 - \\ln(x)\\)"}</span></>
                    },
                    {
                        tagClass: "inferred",
                        tagName: "نتائج مستنتجة",
                        content: "مخرجات الأسئلة السابقة (جواب السؤال \"أ\" هو مفتاح  \"ب\")."
                    },
                    {
                        tagClass: "stored",
                        tagName: "مكتسبات قبلية",
                        content: "القوانين الراسخة (قواعد الاشتقاق، النشر والتبسيط)."
                    }
                ]}
            />

            <div style={{ margin: '5px 0' }}>
                <strong>نصيحة:</strong> سجل كافة المعطيات المتاحة في المسودة بجانب الهدف لتكتشف الروابط المنطقية بينها.
            </div>

            <div className="strategy-box">
                المعطيات قد لا تظهر بشكل مباشر في نص السؤال؛ عليك باستخراجها وتحويلها إلى علاقات رياضية.
            </div>

            {/* مثال تطبيقي المرحلة الثالثة */}
            {/* مثال تطبيقي المرحلة الرابعة */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '10px 20px', margin: '15px 0' }}>

                <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>
                    مثال: المتتاليات
                </div>

                <div style={{ marginBottom: '5px', lineHeight: '1.9' }}>
                    <strong>نص السؤال:</strong> لتكن المتتالية:
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\(u_{n+1} = \\frac{2u_n + 2}{u_n + 3}\\)"}
                    </span>
                    ونعرف:
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\(v_n = \\frac{u_n - 1}{u_n + 2}\\)"}
                    </span>
                </div>

                {/* Chain questions */}
                <div style={{ marginBottom: '5px', lineHeight: '1.9' }}>
                    <strong>1- أ)</strong> عبّر عن <span className="math">{"\\(v_{n+1}\\)"}</span> بدلالة <span className="math">{"\\(u_n\\)"}</span>.
                    <span style={{ margin: '10px', fontSize: '12pt', fontWeight: 'bold', fontStyle: 'italic', color: '#334155' }}>النتيجة:</span>
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\( v_{n+1} = \\frac{u_{n} - 1}{4(u_{n} + 2)}\\)"}
                    </span>
                </div>

                <div style={{ marginBottom: '5px', lineHeight: '1.9' }}>
                    <strong style={{ marginRight: '12px' }}>  ب)</strong> بيّن أن:
                    <span className="math">{"\\((v_n)\\)"}</span> متتالية هندسية، ثم عبّر عن:
                    <span className="math">{"\\(v_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>

                {/* 3 data types */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '12px' }}>

                    {/* Direct data */}
                    <div style={{ borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#334155', marginBottom: '6px' }}>
                            معطيات مباشرة
                        </div>
                        <div style={{ fontSize: '11pt' }}>
                            <span className="math">{"\\(u_{n+1} = \\frac{2u_n + 2}{u_n + 3}\\)"}</span>
                            <br />
                            <span className="math">{"\\(v_n = \\frac{u_n - 1}{u_n + 2}\\)"}</span>
                            <br />

                        </div>
                    </div>

                    {/* Inferred data */}
                    <div style={{ borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#334155', marginBottom: '6px' }}>
                            نتائج مستنتجة
                        </div>
                        <div style={{ fontSize: '11pt' }}>
                            نتيجة السؤال (أ)
                            <br />
                            <span className='math'>
                                {"\\( v_{n+1} = \\frac{u_{n} - 1}{4(u_{n} + 2)}\\)"}
                            </span>
                            <br />
                        </div>
                    </div>

                    {/* Prior knowledge */}
                    <div style={{ borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#334155', marginBottom: '6px' }}>
                            مكتسب قبلي
                        </div>
                        <div style={{ fontSize: '11pt' }}>
                            متتالية هندسية : <span className="math">{"\\(v_{n+1} = q v_n\\)"}</span>
                            <br />
                            فيكون:
                            <span className="math">{"\\(v_n = v_0 q^n\\)"}</span>
                        </div>
                    </div>

                </div>

                {/* Linking insight */}
                {/* Linking insight */}
                <div style={{ marginTop: '0px', fontSize: '11pt', color: '#334155', lineHeight: '1.9' }}>

                    بعد الترجمة وتحديد الهدف : إثبات أن
                    <span className="math">{"\\(v_{n+1} = q v_n\\)"}</span>،
                    وبالتالي إيجاد الثابت <span className="math">{"\\(q\\)"}</span>، يأتي السؤال مباشرة: <br />

                    <span className="radar-box-title" style={{ color: '#1e3a5f', paddingBottom: '8px', marginBottom: '12px' }}>
                        ماذا أحتاج فعلاً لأصل إلى هذا الهدف؟
                    </span>
                    <br />

                    الهدف النهائي يفرض عليّ أن أحصل على علاقة تربط
                    <span className="math">{"\\(v_{n+1}\\)"}</span> بـ
                    <span className="math">{"\\(v_n\\)"}</span>. <br />

                    إذن أول خطوة منطقية هي أن أبحث عن:
                    <span className="math">{"\\(v_{n+1}\\)"}</span> وكيف يُكتب. <br />

                    لكن الموجود عندي لا يعطي
                    <span className="math">{"\\(v_{n+1}\\)"}</span> مباشرة بدلالة
                    <span className="math">{"\\(v_n\\)"}</span>، بل يعطيه بدلالة
                    <span className="math">{"\\(u_n\\)"}</span> (نتيجة السؤال (أ)). <br />

                    وفي نفس الوقت، عندي تعريف
                    <span className="math">{"\\(v_n\\)"}</span> بدلالة
                    <span className="math">{"\\(u_n\\)"}</span>. <br />

                    إذن المفتاح هنا هو أن <strong>المتغير الوسيط الوحيد المشترك هو \(u_n\)</strong>. <br />

                    لذلك أسأل نفسي:
                    كيف أحذف <span className='math'>{"\\(u_n\\)"}</span> نهائياً؟ <br />

                    {/* الحل المنهجي هو:
                    <br /> */}
                    <CheckIcon /> أعبر عن <span className="math">{"\\(u_n\\)"}</span> بدلالة <span className="math">{"\\(v_n\\)"}</span> من العلاقة المعطاة
                    <span style={{ marginRight: '8px', fontWeight: 'bold', color: '#1e3a5f' }}>
                        ← نحصل على: <span className="math">{"\\(u_n = \\frac{2 + 3v_n}{1 - v_n}\\)"}</span>
                    </span>

                    <br />

                    <CheckIcon /> أعوض هذا التعبير في صيغة <span className="math">{"\\(v_{n+1}\\)"}</span>
                    <span style={{ marginRight: '8px', fontWeight: 'bold', color: '#1e3a5f' }}>
                        ← بعد التعويض : <span className="math">{"\\(v_{n+1} = \\frac{\\frac{2 + 3v_n}{1 - v_n} - 1}{\\frac{2 + 3v_n}{1 - v_n} + 2}\\)"}
                        </span>
                    </span>

                    <br />

                    <CheckIcon /> أبسط التعبير لأحصل على علاقة من الشكل:
                    <span className="math">{"\\(v_{n+1} = q v_n\\)"}</span> فأجد أن
                    <span style={{ marginRight: '8px', fontWeight: 'bold', color: '#1e3a5f' }}>
                        : <span className="math">{"\\(q = \\frac{1}{4}\\)"}</span> و بالتالي <span className="math">{"\\(v_n\\)"}</span> هندسية.
                    </span>


                </div>

            </div>


            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 4 — المرحلة الثالثة
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="3" phase="المرحلة الثانية" title="جرد المعطيات وتصفيتها — متتاليات">

                {/* ── نص الوضعية ── */}
                <div className="exercise-statement">
                    <strong>الوضعية:</strong>{' '}
                    لتكن المتتالية{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\((U_n)\\)'}</span>{' '}
                    معرّفة بالعلاقة التراجعية:{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\displaystyle U_{n+1} = \\dfrac{1}{2}\\,U_n + 1\\)'}</span>{' '}
                    و<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_0 = 4\\)'}</span>.
                    <br />
                    <strong>المطلوب (الجزء 3):</strong>{' '}
                    أثبت أن المتتالية{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\((U_n)\\)'}</span>{' '}
                    <strong>متناقصة تماما</strong>.
                </div>

                {/* ── بنك المعطيات (بيانات صاخبة) ── */}
                <div style={{ margin: '3px 0 10px' }}>
                    <div style={{
                        fontWeight: 'bold', color: '#1e3a5f', marginBottom: '12px',
                        fontSize: '11pt', borderRight: '4px solid #1e3a5f',
                        paddingRight: '12px', lineHeight: '1.6'
                    }}>
                        <PackageIcon /> بنك المعطيات{' '}
                        <span style={{ fontWeight: 400, color: '#64748b', fontSize: '11pt' }}>
                            (بعضها مفيد لهذا الجزء، وبعضها لا علاقة له به)
                        </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {[
                            {
                                id: 'A',
                                label: 'العلاقة التراجعية',
                                content: <><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} = \\dfrac{1}{2}U_n + 1\\)'}</span></>
                            },
                            {
                                id: 'B',
                                label: 'الحد الأول',
                                content: <><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_0 = 4\\)'}</span></>
                            },
                            {
                                id: 'C',
                                label: 'نتيجة الجزء 1',
                                content: <><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_n > 2\\)'}</span>{' '}لكل{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(n \\in \\mathbb{N}\\)'}</span></>
                            },
                            {
                                id: 'D',
                                label: 'نتيجة 2',
                                content: <>المتتالية{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(V_n = U_n - 2\\)'}</span>{' '}هندسية أساسها{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\tfrac{1}{2}\\)'}</span></>
                            },
                            {
                                id: 'E',
                                label: 'قيمة عددية',
                                content: <><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_1 = 3\\)'}</span></>
                            },
                            {
                                id: 'F',
                                label: 'نهاية المتتالية (نتيجة الجزء 4)',
                                content: <><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\[\\lim_{n\\to+\\infty} U_n = 2\\]'}</span></>
                            },
                            {
                                id: 'G',
                                label: 'خاصية الدالة المساعدة',
                                content: <>الدالة{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(f(x)=\\tfrac{1}{2}x+1\\)'}</span>{' '}متزايدة على{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\mathbb{R}\\)'}</span></>
                            },
                            {
                                id: 'H',
                                label: 'معطى تكميلي',
                                content: <>المتتالية محدودة: <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(2 < U_n \\leq 4\\)'}</span>{' '}لكل{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(n\\)'}</span></>
                            },
                        ].map((item) => (
                            <div key={item.id} style={{
                                background: '#f8fafc',
                                border: '1.5px solid #e2e8f0',
                                borderRadius: '8px',
                                padding: '10px 05px',
                                display: 'flex',
                                gap: '5px',
                                alignItems: 'flex-start',
                            }}>
                                {/* مربع الاختيار */}
                                <div style={{
                                    width: '20px', height: '20px', border: '2px solid #94a3b8',
                                    borderRadius: '4px', flexShrink: 0, marginTop: '3px',
                                    background: '#fff'
                                }} />
                                <div style={{ fontSize: '11pt', color: '#334155', lineHeight: '1.8' }}>
                                    <span style={{
                                        display: 'inline-block', background: '#1e3a5f', color: '#fff',
                                        borderRadius: '4px', padding: '1px 7px', fontSize: '11pt',
                                        fontWeight: 700, marginLeft: '6px', letterSpacing: '0.03em'
                                    }}>
                                        ({item.id})
                                    </span>
                                    <span style={{ color: '#64748b', fontSize: '11pt', marginLeft: '4px' }}>
                                        {item.label}:{' '}
                                    </span>
                                    <strong>{item.content}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── الأسئلة الموجّهة ── */}
                <div style={{ marginTop: '10px', borderTop: '2px solid #e2e8f0', paddingTop: '16px' }}>

                    {/* السؤال أ — الترجمة */}
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold', color: '#1e3a5f' }}>
                            السؤال أ
                        </div>
                        <div className="right-col">
                            <strong>الترجمة الرياضية:</strong>{' '}
                            ترجم عبارة{' '}
                            <em>"المتتالية متناقصة تماما"</em>{' '}
                            إلى جملة رياضية دقيقة باستخدام الرموز{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_n\\)'}</span>{' '}و<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1}\\)'}</span>.
                            {/* <div style={{ minHeight: '10px', borderBottom: '1px dashed #cbd5e1', marginTop: '10px' }} /> */}
                        </div>
                    </div>

                    {/* السؤال ب — الهدف */}
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold', color: '#1e3a5f' }}>
                            السؤال ب
                        </div>
                        <div className="right-col">
                            <strong>صياغة الهدف:</strong>{' '}
                            بناءً على ترجمتك في (أ)، اكتب الهدف الرياضي المكافئ الذي يجب إثباته.{' '}
                            {/* <strong> الفرق.</strong>{' '} */}
                            {/* <div style={{ minHeight: '10px', borderBottom: '1px dashed #cbd5e1', marginTop: '10px' }} /> */}
                        </div>
                    </div>

                    {/* السؤال ج — تصفية المعطيات */}
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold', color: '#1e3a5f' }}>
                            السؤال ج
                        </div>
                        <div className="right-col">
                            <strong>تصفية المعطيات:</strong>{' '}
                            من بنك المعطيات أعلاه، ضع علامة{' '}
                            <strong>✓</strong>{' '}في المربع المجاور لكل معطى{' '}
                            <strong>ضروري</strong>{' '}لإثبات الهدف في (ب). علّل كل اختيار بجملة.
                            {/* <div style={{ marginTop: '10px', padding: '10px 14px', background: '#fefce8', border: '1px dashed #ca8a04', borderRadius: '6px', fontSize: '11pt', color: '#78350f' }}>
                                <WarningIcon /> تنبيه: بعض المعطيات صحيحة لكنها خاصة بأجزاء أخرى وليست بهذا الجزء. اختر فقط ما يخدم إثبات التناقص.
                            </div> */}
                        </div>
                    </div>


                </div>
            </ExerciseCard>


            {/* ── الأسئلة الموجّهة ── */}
            <div className="radar-box" style={{
                border: '2px solid #1e3a5f',
                borderRadius: '12px',
                padding: '20px 22px',
                margin: '0px 0',
                background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)',
                position: 'relative'
            }}>


                <div style={{ marginTop: '0px', paddingTop: '16px' }}>
                    {/* السؤال د — التطبيق */}
                    <div className="step-row-two">
                        <div className="left-col" style={{ fontWeight: 'bold', color: '#1e3a5f' }}>
                            السؤال د
                        </div>
                        <div className="right-col">
                            <strong>التطبيق:</strong>{' '}
                            باستخدام المعطيات التي اخترتها في (ج)، احسب الفرق{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} - U_n\\)'}</span>{' '}
                            ثم حدّد إشارته واستنتج.
                        </div>
                    </div>
                </div>

                {/* ── تنبيه منهجي ── */}
                <div style={{
                    marginTop: '10px', padding: '12px 16px',
                    background: '#f0f9ff', borderRadius: '8px',
                    borderRight: '4px solid #0284c7',
                    fontSize: '11pt', color: '#334155', lineHeight: '1.8'
                }}>
                    <strong style={{ color: '#0284c7' }}><TargetIcon /> تنبيه منهجي:</strong>{' '}
                    ليس كل معطى مذكور في السؤال ضرورياً للجزء الذي تحله.{' '}
                    قدرتك على <em>تصفية البيانات واختيار المفيد منها</em>{' '}
                    هي مهارة أساسية تميّز الطالب المتمكّن عن غيره.
                </div>
            </div>



            <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0369a1',
                backgroundColor: '#f0f9ff',
                padding: '8px 15px',
                borderRadius: '6px',
                borderRight: '4px solid #0284c7',
                marginBottom: '15px',
                marginTop: '5px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <span style={{
                    backgroundColor: '#0284c7',
                    color: '#fff',
                    padding: '1px 8px',
                    borderRadius: '4px',
                    marginLeft: '10px',
                    fontSize: '1rem'
                }}>ب</span>
                توظيف المعطيات وربطها بالهدف
            </div>

            <div className="step-row-two">
                <div className="left-col"><ThoughtIcon /> القاعدة</div>
                <div className="right-col" style={{ fontWeight: "bold" }}>اسأل نفسك: "ما الذي علي أن أستخدمه من هاته المعطيات لأصل إلى هذا الهدف أو إلى جزء منه؟"</div>
            </div>
            <div className="starting-point-container">
                <div className="starting-point-card">
                    <div className="starting-point-icon"><FlagIcon /></div>
                    <div className="strategy-box-title" style={{ margin: 0 }}>نقطة الانطلاق الأولى</div>
                    <p style={{ fontSize: '11pt', color: '#444', marginTop: '5px' }}>
                        أهم معطى هو الأقرب "شكلاً أو مفهوماً" للهدف. اكتشافه يمثل 50% من الطريق نحو الحل.
                    </p>
                </div>
                <div className="roadmap-card">
                    <div className="strategy-box-title" style={{ color: '#0369a1' }}>منهجية بناء "خطة الحل"</div>
                    <p style={{ fontSize: '0.95rem', color: '#334155' }}>
                        لا تبدأ بالحل عشوائياً؛ ابدأ بالربط التتابعي. قارن شكلياً، صِل المعطيات بالهدف، ثم صلها ببعضها البعض حتى تكتمل الشبكة.
                    </p>
                    <div className="process-steps">
                        <div className="process-node">الهدف</div>
                        <div className="process-arrow">←</div>
                        <div className="process-node">أقرب معطى <FlagIcon /></div>
                        <div className="process-arrow">←</div>
                        <div className="process-node">شبكة المعطيات</div>
                    </div>
                </div>
            </div>

            {/* مثال تطبيقي المرحلة الرابعة */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '16px 20px', margin: '10px 0' }}>
                {/* <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>مثال: متتاليات </div> */}

                <DiscoveryProblem />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '2px 0',
                color: '#e11d48',
                fontSize: '24px',
            }}>
                <div style={{ transform: 'rotate(90deg)' }}>⟹</div>
            </div>

            <DiscoveryTranslation />
            <DiscoveryInventory />

            <div className="strategy-box">
                <div className="strategy-box-title">قاعدة "التركيز على الهدف"</div>
                في كل خطوة تبسيط أو نشر، قارن النتيجة مع الهدف المطلوب؛ فكثير من الطلبة يقومون بمراحل حل غير متعلقة بالهدف النهائي. إذا ظهرت لك نتائج لا تتوافق مع بنية الهدف، فعليك مراجعة مسارك. يجب أن تكون كل خطوة رياضية موجهة نحو الوصول إلى النتيجة النهائية.
            </div>


            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 5 — المرحلة الرابعة (توظيف المعطيات)
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="5" phase="المرحلة الرابعة" title="ترتيب خطوات الحل (متتاليات)">

                <div className="exercise-statement">
                    <strong>الوضعية:</strong> لإثبات أن المتتالية المعرّفة بـ{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} = \\dfrac{U_n}{2} + 1\\)'}</span>{' '}
                    مع <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_0 = 4\\)'}</span>{' '}
                    متناقصة، رتّب الخطوات التالية بالترتيب المنهجي الصحيح:
                </div>

                <QuizOrder
                    steps={[
                        <>احسب <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_1 = \\dfrac{U_0}{2} + 1 = 3\\)'}</span> للتحقق العددي الأولي.</>,
                        <>استنتج إشارة <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} - U_n\\)'}</span> وأثبت أنها سالبة بشرط أن <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_n > 2\\)'}</span>.</>,
                        <>اكتب الهدف الرياضي: نريد إثبات <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} - U_n < 0\\)'}</span>.</>,
                        <>احسب <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} - U_n = \\dfrac{U_n}{2} + 1 - U_n = -\\dfrac{U_n}{2} + 1\\)'}</span>.</>,
                        <>اقرأ السؤال وترجمه: "متناقصة" <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\Leftrightarrow U_{n+1} - U_n < 0\\)'}</span>.</>
                    ]}
                    correctOrder={[4, 2, 0, 3, 1]}
                    hint={
                        <>
                            الترتيب الصحيح: (1) ترجمة السؤال ← (2) كتابة الهدف ← (3) التحقق العددي ← (4) الحساب الجبري ← (5) الاستنتاج.{' '}
                            ملاحظة: <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(U_{n+1} - U_n = -\\dfrac{U_n}{2} + 1 < 0 \\Longleftrightarrow U_n > 2\\)'}</span>.{' '}
                            يجب إثبات هذا الشرط بالاستقراء أو من طبيعة المتتالية.
                        </>
                    }
                />

            </ExerciseCard>



            <div className="question-header" style={{ marginTop: '0px' }}>
                تقنيات تحليلية:
            </div>
            {/* مقدمة */}
            <div className="exercise-statement">
                في هذه المرحلة، لم يعد التحدي هو فهم السؤال أو استخراج المعطيات، بل أصبح التحدي الحقيقي هو:

                <strong>كيف نربط بين ما نملكه (المعطيات) وما نريده (الهدف)؟</strong>

                <br />

                في بعض التمارين، يكون هذا الربط مباشراً، لكن في التمارين المعقدة :
                <strong>لا يوجد طريق واضح يربط بينهما</strong>

                <br />

                سأعرض في هذا الجزء الطرق التحليلة التالية:

                <br />

                <ul style={{ listStyleType: 'disc', paddingRight: '20px' }}>
                    <li>إعادة كتابة الهدف بشكل يسهل الوصول إليه (التحليل العكسي)</li>
                    <li>إدخال عنصر وسيط لتسهيل المقارنة أو التحليل</li>
                    <li>تغيير زاوية النظر إلى المسألة (بتغيير المتغير أو التمثيل)</li>
                    <li>خلق تعبير جديد يسمح بالتبسيط أو الاختزال</li>
                    <li>الحصر بين حدّين</li>
                </ul>

                المهم أن تفهم:
                <strong>لا توجد تقنية واحدة صالحة لكل التمارين</strong>،
                وما ستراه هنا هو فقط <strong>نماذج من أدوات كثيرة</strong> ستتعلم اختيارها تدريجياً مع الممارسة.



                والهدف دائما ليس حفظ هذه التقنيات، و إنما
                <strong>تطوير القدرة على اكتشاف الحيلة المناسبة لكل تمرين.</strong>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', margin: '10px 0' }}> */}

            {/* 1. التحليل العكسي */}
            <div style={{ borderRight: '3px solid #1e3a5f', paddingRight: '16px', pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '16px' }}>
                <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '5px' }}>
                    1. التحليل العكسي
                </div>
                <div style={{ color: '#334155', marginBottom: '5px', lineHeight: '1.8' }}>
                    في بعض الأحيان يطلب منك إثبات متباينات مثل:    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                        {"\\(\\dfrac{x+y}{2} \\geq \\sqrt{xy}, \\quad x,y \\geq 0\\)"}
                    </span>
                </div>

                <div style={{ color: '#334155', margin: '5px 0', lineHeight: '1.8' }}>
                    إذا لم تعرف من أين تبدأ، اشتغل بطريقة "التحليل العكسي" في المسودة:
                </div>
                <div style={{ paddingRight: '8px', lineHeight: '2.4' }}>
                    <div style={{ marginBottom: '4px' }}>1. نبدأ من الهدف:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\dfrac{x+y}{2} \\geq \\sqrt{xy}\\)"}</span></div>
                    <div style={{ marginBottom: '4px' }}>2. نضرب في 2:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x + y \\geq 2\\sqrt{xy}\\)"}</span></div>
                    <div style={{ marginBottom: '4px' }}>3. نربع الطرفين:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((x + y)^2 \\geq 4xy\\)"}</span></div>
                    <div style={{ marginBottom: '4px' }}>4. نشر:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x^2 + 2xy + y^2 \\geq 4xy\\)"}</span></div>
                    <div style={{ marginBottom: '4px' }}>5. إعادة ترتيب:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x^2 - 2xy + y^2 \\geq 0\\)"}</span></div>
                    <div style={{ marginBottom: '4px' }}>6. التحليل:{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((x - y)^2 \\geq 0\\)"}</span></div>
                </div>
                <div style={{ color: '#334155', lineHeight: '1.8', marginTop: '6px' }}>
                    <strong>الفكرة الأساسية:</strong> ننتهي دائماً إلى حقيقة معروفة: أي مربع عدد حقيقي غير سالب.
                </div>
                <div style={{ color: '#334155', lineHeight: '1.8', marginTop: '6px' }}>
                    <strong>المنطق العكسي:</strong> في الامتحان، لا تبدأ من الهدف النهائي، بل تبدأ من{' '}
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((x - y)^2 \\geq 0\\)"}</span>
                    {' '}وتعيد بناء الخطوات للوصول إلى النتيجة المطلوبة.
                </div>

                {/* أخطاء شائعة */}
                <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '14px 16px', marginTop: '14px', lineHeight: '1.9' }}>
                    <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '10px' }}>أخطاء شائعة يجب تجنبها</div>
                    <ol style={{ paddingRight: '20px', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>خطوات غير قابلة للعكس:</strong> انتبه للعمليات التي لا يمكن عكسها بسهولة. مثلاً التربيع ليس قابلاً للعكس دائماً لأن{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(4 = (-2)^2 = 2^2\\)"}</span>
                            {' '}، لذلك قد تحتاج دراسة حالات{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((+/-)\\)"}</span>.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>نسيان كتابة البرهان في الاتجاه الأمامي:</strong> في الامتحان، العمل العكسي هو فقط مسودة. الحل النهائي يجب أن يكون تسلسلاً منطقياً يبدأ من المعطيات نحو النتيجة.
                        </li>
                        <li>
                            <strong>اتجاه المنطق:</strong> كون{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(B \\Rightarrow A\\)"}</span>
                            {' '}لا يعني دائماً أن{' '}
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(A \\Rightarrow B\\)"}</span>
                            . لذلك يجب التأكد من صحة كل خطوة، خاصة في التكافؤات.
                        </li>
                    </ol>
                </div>
            </div>

            {/* 2. الوسيط المنطقي */}
            <div style={{ borderRight: '3px solid #1e3a5f', paddingRight: '16px', pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '16px' }}>
                <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '6px' }}>
                    2. الدالة المساعدة
                </div>
                <div style={{ color: '#334155', marginBottom: '10px', lineHeight: '1.8' }}>
                    عندما يطلب منك إثبات متباينة بين دالتين، المقارنة المباشرة غير ممكنة، فتلجأ لدالة وسيطة هي الفرق.
                </div>
                <div className="exercise-statement" style={{ padding: '12px 16px', lineHeight: '2' }}>
                    <strong>المطلوب:</strong> أثبت أن لكل <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x \\geq 0\\)"}</span>:<br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(e^x \\geq 1 + x\\)"}</span><br />
                    <strong>لماذا الدالة المساعدة؟</strong> لا يمكن مقارنة <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(e^x\\)"}</span> بـ <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(1+x\\)"}</span> مباشرة. نعرّف الدالة الفرق:<br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(x) = e^x - (1+x)\\)"}</span><br />
                    <strong>الحل:</strong> <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g'(x) = e^x - 1 \\geq 0\\)"}</span> لكل <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x \\geq 0\\)"}</span>، إذن <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g\\)"}</span> متزايدة.<br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(0) = e^0 - 1 - 0 = 0\\)"}</span> ← نقطة الانطلاق.<br />
                    → بما أن <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g\\)"}</span> متزايدة ابتداءً من 0: <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(x) \\geq g(0) = 0\\)"}</span>، أي <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(e^x \\geq 1+x\\)"}</span>. ✓
                </div>
            </div>


            {/* 3. تغيير المتغير */}
            <div style={{ borderRight: '3px solid #1e3a5f', paddingRight: '16px', pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '16px' }}>
                <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '6px' }}>
                    3. تغيير المتغير
                </div>
                <div style={{ color: '#334155', marginBottom: '10px', lineHeight: '1.8' }}>
                    عندما يتكرر نفس التعبير في المتتالية — بدل محاولة التعامل معه مباشرة، عرّفه كمتتالية جديدة.
                </div>
                <div className="exercise-statement" style={{ padding: '12px 16px', lineHeight: '2' }}>
                    <strong>المطلوب:</strong> لتكن المتتالية <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((V_n)\\)"}</span> معرّفة بـ <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(V_n = 3 \\cdot 2^n\\)"}</span>. احسب:<br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = V_0^2 + V_1^2 + \\cdots + V_n^2\\)"}</span><br />
                    <strong>المحاولة المباشرة (بدون الحيلة):</strong><br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = 9 + 36 + 144 + \\cdots\\)"}</span> — الطالب يرى هذا ولا يعرف كيف يجمعه.<br />
                    <strong>بتغيير المتغير — نعرّف <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(W_n = V_n^2\\)"}</span>:</strong><br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(W_n = (3 \\cdot 2^n)^2 = 9 \\cdot 4^n\\)"}</span><br />
                    → <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(W_0 = 9, \\quad \\frac{W_{n+1}}{W_n} = \\frac{9 \\cdot 4^{n+1}}{9 \\cdot 4^n} = 4\\)"}</span><br />
                    → <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((W_n)\\)"}</span> متتالية هندسية بأساس <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(4\\)"}</span> وحدها الأول <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(9\\)"}</span>.<br />
                    <strong>الخلاصة:</strong> <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = 9 \\cdot \\dfrac{4^{n+1} - 1}{4 - 1} = 3(4^{n+1} - 1)\\)"}</span>
                </div>
            </div>

            {/* 4. خلق من العدم */}
            <div style={{ borderRight: '3px solid #1e3a5f', paddingRight: '16px', pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '16px' }}>
                <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '6px' }}>
                    4. الإضافة والاختزال (الضرب في المرافق)
                </div>
                <div style={{ color: '#334155', marginBottom: '10px', lineHeight: '1.8' }}>
                    الهدف يختلف بنيوياً عن المعطى. الطريق الوحيد: خلق الشكل المطلوب بإضافة عنصر واختزاله.
                </div>
                <div className="exercise-statement" style={{ padding: '12px 16px', lineHeight: '2' }}>
                    <strong>المطلوب:</strong> احسب النهاية:<br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + x} - x\\right)\\]"}</span><br />
                    <strong>لماذا الإضافة والاختزال؟</strong> الشكل <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\infty - \\infty\\)"}</span> غير محدد. لا يمكن تبسيطه مباشرة.<br />
                    <strong>نضرب بالمرافق (نخلق الـ 1):</strong><br />
                    <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\sqrt{x^2+x} - x = \\frac{(\\sqrt{x^2+x} - x)(\\sqrt{x^2+x} + x)}{\\sqrt{x^2+x} + x} = \\frac{x^2+x - x^2}{\\sqrt{x^2+x} + x} = \\frac{x}{\\sqrt{x^2+x}+x}\\)"}</span><br />
                    نقسم على <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x\\)"}</span>: <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\frac{1}{\\sqrt{1 + \\frac{1}{x}} + 1} \\xrightarrow[x \\to +\\infty]{} \\frac{1}{2}\\)"}</span>
                </div>
            </div>
            {/* 5. التأطير (الحصر أو مبدأ العصر / Sandwich) */}
            <div style={{ borderRight: '3px solid #1e3a5f', paddingRight: '14px', marginTop: '5px' }}>

                <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '4px' }}>
                    5. الحصر بين حدّين
                </div>

                <div style={{ color: '#334155', marginBottom: '6px', lineHeight: '1.7' }}>
                    أحياناً لا نستطيع حساب قيمة مباشرة أو دراسة سلوك دالة بشكل صريح،
                    لكن يمكننا حصرها بين حدّين. إذا تقارب الحدّان لنفس القيمة، فإن الدالة تقترب منها.
                </div>

                <div className="exercise-statement" style={{ padding: '8px 12px', lineHeight: '1.7' }}>

                    <strong>الفكرة الأساسية:</strong>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>إذا كان:</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\( a(x) \\leq f(x) \\leq b(x) \\)'}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>و</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim a(x) = \\lim b(x) = L \\]'}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>إذن:</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim f(x) = L \\]'}
                            </span>
                        </div>
                    </div>



                    <strong>مثال:</strong>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>نحسب:</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim_{x \\to 0} \\frac{\\sin x}{x} \\]'}
                            </span>
                        </div>
                    </div>

                    <div style={{ marginTop: '6px' }}>
                        قرب 0:
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\( \\cos x \\leq \\frac{\\sin x}{x} \\leq 1 \\)'}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>وبما أن:</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim_{x \\to 0} \\cos x = 1 \\]'}
                            </span>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim_{x \\to 0} 1 = 1 \\]'}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>إذن:</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                                {'\\[ \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\]'}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* ---- فاصل صفحة A4 ---- */}


            {/* ---- فاصل صفحة A4 ---- */}

            {/* ===================== المرحلة الخامسة ===================== */}
            <div id="toc-step5" className="question-header" style={{ backgroundColor: '#117a65' }}>المرحلة الخامسة: التحقق من النتيجة (Test)</div>

            <div className="strategy-box">
                <div className="strategy-box-title"><SearchIcon /> معايير التحقق المنطقي</div>
                <ul className="pedagogical-list">
                    <li>هل وجدت احتمالاً <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A) > 1\\)'}</span> أو <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A) \\leq 0\\)'}</span>؟ (مستحيل، هناك خطأ حتمي).</li>
                    <li>هل وجدت دالة أسية <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(e^x \\leq 0\\)'}</span>؟ (مستحيل قطعياً).</li>
                    <li>هل وجدت نهاية تناقض جدول التغيرات؟ (جدول التغيرات أداة أساسية للتحقق).</li>
                    <li>في الهندسة في الفضاء: تأكد من تعامد شعاع التوجيه مع الناظمي في حالة التوازي عبر الجداء السلمي.</li>
                    <li>جرب صحة النتيجة بقيم عددية بسيطة (عوض في المتتالية لتتأكد من التزايد).</li>
                </ul>
            </div>

            {/* مثال تطبيقي المرحلة الخامسة */}
            <div className="radar-box" style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '18px 20px', margin: '15px 0' }}>
                <div className="radar-box-title" style={{ color: '#1e3a5f', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>مثال: احتمالات</div>
                <div style={{ marginBottom: '10px' }}>
                    <strong>الوضعية:</strong> يجد طالب بعد الحساب أن <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(P(A) = 1.2\\)"}</span>.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ borderRight: '3px solid #94a3b8', padding: '12px' }}>
                        <div style={{ fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>الخطأ الشائع</div>
                        <p style={{ fontSize: '11pt', margin: 0 }}>يكتب الطالب النتيجة مباشرة دون التحقق: "P(A) = 1.2".</p>
                    </div>
                    <div style={{ borderRight: '3px solid #b45309', padding: '12px' }}>
                        <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '6px' }}>تطبيق معايير التحقق</div>
                        <p style={{ fontSize: '11pt', margin: 0 }}>الاحتمال لا يتجاوز 1 → خطأ حتمي → يعود الطالب ليجد أنه نسي قسمة عدد الحوادث الملائمة على المجموع الكلي.</p>
                    </div>
                </div>
                ثوانٍ من "فلتر المنطق" أنقذت الطالب من خسارة كاملة لعلامة السؤال.
            </div>



            {/* ---- فاصل صفحة A4 ---- */}

            {/* ══════════════════════════════════════════════
                تمرين 7 — المرحلة الخامسة
               ══════════════════════════════════════════════ */}
            <ExerciseCard number="7" phase="المرحلة الخامسة" title="التحقق المنطقي — صحيح أم خاطئ؟">

                <div className="exercise-statement">
                    <strong>الوضعية:</strong>{' '}
                    فيما يلي نتائج تحصّل عليها طالب خلال حل مسائل في البكالوريا.
                    لكل حالة: قرر إن كانت النتيجة <strong>صحيحة أم خاطئة</strong>، وإن كانت خاطئة <strong>اكشف التناقض</strong> الرياضي الموجود فيها.
                </div>

                {/* ── السؤال 1: جدول تغيرات متناقض ── */}
                <div style={{ margin: '16px 0', padding: '14px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div style={{ fontWeight: 700, color: '#1e3a5f', marginBottom: '10px', fontSize: '0.92rem' }}>
                        السؤال 1 — جدول التغيرات
                    </div>
                    <div style={{ fontSize: '11pt', color: '#334155', marginBottom: '10px', lineHeight: '1.7' }}>
                        يدّعي طالب أنه درس دالة <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(f\\)'}</span> واستنتج جدول التغيرات التالي:
                    </div>

                    {/* جدول التغيرات المتناقض — صورة بأسلوب البكالوريا */}
                    <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                        <img
                            src={variationTableImg}
                            alt="جدول تغيرات متناقض: الدالة تبدأ من +∞ وتتزايد — مستحيل"
                            style={{ maxWidth: '100%', width: '480px', height: 'auto', display: 'block', margin: '0 auto' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            صحيح — لا يوجد تناقض في هذا الجدول.
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            خاطئ — يوجد تناقض. الجهة المتناقضة هي: <span style={{ borderBottom: '1px dashed #cbd5e1', minWidth: '120px', display: 'inline-block' }}>&nbsp;</span>
                        </span>
                    </div>
                </div>

                {/* ── السؤال 2: فخ القيمة المطلقة في النهايات ── */}
                <div style={{ margin: '16px 0', padding: '14px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div style={{ fontWeight: 700, color: '#1e3a5f', marginBottom: '6px', fontSize: '0.92rem' }}>
                        السؤال 2 — النهايات والقيمة المطلقة
                    </div>
                    <div style={{ fontSize: '11pt', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                        السياق: حساب النهاية عند{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(-\\infty\\)'}</span>{' '}
                        للدالة{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(f(x) = \\dfrac{\\sqrt{x^2+1}}{x}\\)'}</span>.
                    </div>
                    <div style={{ fontSize: '11pt', color: '#dc2626', lineHeight: '1.9', background: '#fef2f2', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fecaca', marginBottom: '8px' }}>
                        <strong>الحل المقترح من الطالب:</strong>{' '}
                        نعمّل{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(x^2\\)'}</span>{' '}داخل الجذر:{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(f(x) = \\dfrac{\\sqrt{x^2\\left(1+\\frac{1}{x^2}\\right)}}{x} = \\dfrac{x\\sqrt{1+\\frac{1}{x^2}}}{x}\\)'}</span>.{' '}
                        بعد الاختزال:{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\[\\displaystyle\\lim_{x\\to-\\infty} f(x) = 1\\]'}</span>.
                    </div>

                </div>


            </ExerciseCard>

            <div className="radar-box" style={{
                border: '2px solid #1e3a5f',
                borderRadius: '12px',
                padding: '20px 22px',
                margin: '0px 0',
                background: '#f0f4ff',
                position: 'relative'
            }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
                    <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                    <span style={{ fontSize: '11pt', color: '#334155' }}>صحيح — النهاية تساوي 1.</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
                    <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                    <span style={{ fontSize: '11pt', color: '#334155' }}>
                        خاطئ. الخطأ في: <span style={{ borderBottom: '1px dashed #cbd5e1', minWidth: '160px', display: 'inline-block' }}>&nbsp;</span>
                    </span>
                </div>
                {/* ── فاصل صفحة: السؤال 3 والسؤال 4 في صفحة جديدة ── */}
                <div style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                {/* ── السؤال 3: حلول وهمية في المعادلات اللوغاريتمية ── */}
                <div style={{ margin: '16px 0', padding: '14px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div style={{ fontWeight: 700, color: '#1e3a5f', marginBottom: '6px', fontSize: '0.92rem' }}>
                        السؤال 3 — المعادلات اللوغاريتمية
                    </div>
                    <div style={{ fontSize: '11pt', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                        السياق: حل المعادلة{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\ln(x-1) + \\ln(x-2) = \\ln(2)\\)'}</span>.
                    </div>
                    <div style={{ fontSize: '11pt', color: '#dc2626', lineHeight: '1.9', background: '#fef2f2', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fecaca', marginBottom: '8px' }}>
                        <strong>الحل المقترح من الطالب:</strong>{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(\\ln[(x-1)(x-2)] = \\ln 2\\)'}</span>{' '}
                        إذن{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\((x-1)(x-2)=2 \\Rightarrow x^2-3x=0\\)'}</span>.{' '}
                        الحلول:{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(x=0\\)'}</span>{' '}أو{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(x=3\\)'}</span>.{' '}
                        إذن{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(S=\\{0,\\,3\\}\\)'}</span>.
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            صحيح — <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(S = \\{0, 3\\}\\)'}</span>.
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            خاطئ. الخطأ في: <span style={{ borderBottom: '1px dashed #cbd5e1', minWidth: '160px', display: 'inline-block' }}>&nbsp;</span>
                        </span>
                    </div>
                </div>

                {/* ── السؤال 4: خلط الاستقلالية بالتنافي ── */}
                <div style={{ margin: '16px 0', padding: '14px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', pageBreakInside: 'avoid', breakInside: 'avoid', orphans: 4, widows: 4 }}>
                    <div style={{ fontWeight: 700, color: '#1e3a5f', marginBottom: '6px', fontSize: '0.92rem' }}>
                        السؤال 4 — الاحتمالات
                    </div>
                    <div style={{ fontSize: '11pt', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                        السياق: لدينا{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A)=0{,}4\\)'}</span>{' '}و{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(B)=0{,}3\\)'}</span>{' '}
                        والحدثان{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(A\\)'}</span>{' '}و{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(B\\)'}</span>{' '}
                        <strong>مستقلان</strong>. أحسب{' '}<span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A\\cup B)\\)'}</span>.
                    </div>
                    <div style={{ fontSize: '11pt', color: '#dc2626', lineHeight: '1.9', background: '#fef2f2', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fecaca', marginBottom: '8px' }}>
                        <strong>الحل المقترح من الطالب:</strong>{' '}
                        بما أن الحدثين مستقلان، فهما لا يتقاطعان، أي{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(A\\cap B=\\emptyset\\)'}</span>.{' '}
                        إذن{' '}
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A\\cup B) = P(A)+P(B) = 0{,}4+0{,}3 = 0{,}7\\)'}</span>.
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            صحيح — <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{'\\(P(A\\cup B)=0{,}7\\)'}</span>.
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
                        <div style={{ width: '28px', height: '28px', border: '2px solid #94a3b8', borderRadius: '4px', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontSize: '11pt', color: '#334155' }}>
                            خاطئ. الخطأ في: <span style={{ borderBottom: '1px dashed #cbd5e1', minWidth: '160px', display: 'inline-block' }}>&nbsp;</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* ===================== حيل اكتشاف الأخطاء ===================== */}
            <div id="toc-techniques" className="question-header">تقنيات لتصحيح الأخطاء وتعزيز مهارات الحل</div>
            <div className="radar-box">
                <ul className="radar-list">
                    <li>
                        <strong>مراجعة المعطيات:</strong> إذا واجهت صعوبة في إكمال الحل، تأكد من استخدامك لكافة المعطيات المذكورة في السؤال. غالباً ما يكون سبب التوقف هو وجود معطى لم يتم توظيفه بعد.
                    </li>
                    <li>
                        <strong>الورقة البيضاء:</strong> بعد المحاولات الكثيرة لحل مشكل رياضي بدون الوصول إلى نتيجة والإحساس بالإرهاق، غالباً ما يكون فتح ورقة جديدة بيضاء والبدء من جديد مع حذف خلفية التفكير القديم والافتراض الخاطئ حلاً فعالاً.
                    </li>
                    <li>
                        <strong>التنظيم التقني:</strong> الكتابة بخط واسع وتباعد بين الأرقام والرموز (مثل السالب والمساواة، الكسر ورمز السالب)، وتوضيح الأقواس جيدا يُمكّن الطالب من تفادي دقائق كثيرة ضائعة في البحث عن أخطاء تافهة.
                    </li>
                    <li>
                        <strong>التدقيق السلس:</strong> على الطالب ألا يقوم بخطوات طويلة جداً في عقله، بل عليه أن يدقق وينتقل بسلاسة بكتابة كل الخطوات ليسهل عليه إيجاد أخطائه في الورقة لاحقاً.
                    </li>
                    <li>
                        <strong>الربط المستقبلي:</strong> عند إتمام الحل، فكر لوهلة كيف يمكنك استخدامه وأين في الأسئلة القادمة؛ فالتمرين مركب ومترابط في ما بينه.
                    </li>
                    <li>
                        <strong>المراجعة الشاملة:</strong> قبل إنهاء الحل، تأكد من منطقية النتيجة. فكر فيما إذا كان هناك طريق بديل للتحقق من صحة الحل. إن تعدد طرق الوصول للنتيجة يعزز من دقة الفهم.
                    </li>
                    <li>
                        <strong>الاستعانة الذكية بالحل:</strong> عند تدربك على حل التمارين، ابذل أقصى جهدك قبل الاستعانة بالحل. وإن اضطررت لذلك، فاحرص على فهم "لماذا" و"كيف" تم الانتقال من كل خطوة إلى التي تليها.
                    </li>
                </ul>
            </div>

            {/* ===================== بروتوكول رادار الأخطاء ===================== */}
            <div id="toc-audit" className="question-header">بروتوكول "تدقيق الأخطاء الذاتي"</div>
            <div className="exercise-statement">
                تكرار الأخطاء السابقة هو أحد الأسباب الرئيسية لفقدان النقاط في الامتحان. وظيفتك هي توثيق كل خطأ ترتكبه لضمان عدم تكراره؛ فعند ضغط الامتحان، يعتمد العقل على الممارسات المسجلة مسبقاً.
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">تقنية "تنبيه الأخطاء"</div>
                اعتمد "الترميز البصري" للأخطاء في كراسك بشكل مستمر. عند اكتشاف خطأ، لا تكتفِ بتصحيحه فقط، بل سجل بجانبه القاعدة الرياضية التي تم إغفالها (مثلاً: "تغيير اتجاه المتراجحة عند الضرب في عدد سالب"). هذا التوثيق البصري يساعد العقل على تذكر القاعدة وتجنب الوقوع في الخطأ ذاته مستقبلاً.
            </div>
            <div className="question-header">مثال تطبيقي: حساب المشتقة والتمثيل البصري</div>
            <div style={{
                margin: '25px auto',
                padding: '20px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                maxWidth: '640px',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '25px',
                    background: '#f8fafc',
                    padding: '2px 12px',
                    borderRadius: '8px',
                    fontSize: '11pt',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    border: '1px solid #e2e8f0'
                }}>
                    توضيح منهجي
                </div>
                <img
                    src={errorCloud}
                    alt="غيمة التحذير"
                    style={{
                        width: '90%',
                        height: 'auto',
                        borderRadius: '12px',
                        display: 'block'
                    }}
                />
            </div>

            <div className="radar-box">
                <div className="radar-box-title">منهجية التعلم من الأخطاء</div>
                <ul className="radar-list">
                    <li><strong>المراجعة الدورية للتنبيهات:</strong> راجع سجل الأخطاء دوريا و قبل كل اختبار لتثبيت القواعد الصحيحة وتجنب الأخطاء الشائعة.</li>
                    <li><strong>الممارسة المنظمة:</strong> إن الكراس الذي لا يحتوي على توثيق للأخطاء المرتكبة لا يعكس استفادة كاملة من التدريب. احرص على تدوين كافة التنبيهات التي تجنبك الوقوع في أخطاء قد وقعت فيها مسيقا أثناء الامتحان.</li>
                </ul>
            </div>
        </>
    );
};

export default Methodology;