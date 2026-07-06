import React from 'react';
import { BellIcon, CheckIcon } from '../components/PrintIcons';

const Solution_DirectQuestions_Functions = () => {
    return (
        <>
            <div id="toc-sol-direct-functions" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - الدوال العددية، الأسية واللوغاريتمية</div>

            {/* ============================================================
                RADAR BOX — Global Strategy
            ============================================================ */}


            {/* ============================================================
                EXERCISE 1: LIMITS
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — النهايات وحالات عدم التعيين</div>

            {/* Q1.1 */}
            <div className="sub-question">1) النهاية الشهيرة بقوى متغيرة <span className="math">{"\\[\\lim_{x \\to 0^>} x^2 (\\ln x)^3\\]"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب نهاية جداء دالتين (قوة ولوغاريتم) عند الصفر بقيم كبرى، وإزالة حالة عدم التعيين.
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\[\\lim_{x \\to 0^>} x^2 (\\ln x)^3\\]"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> <span className="math">{"\\(x^2 \\to 0\\)"}</span> و <span className="math">{"\\((\\ln x)^3 \\to -\\infty\\)"}</span>. الجداء حالة عدم تعيين <span className="math">{"\\(0 \\times \\infty\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> لمعالجة هذا الشكل، أحتاج للوصول إلى النهاية الشهيرة <span className="math">{"\\(X \\ln X \\to 0\\)"}</span>. سأدخل <span className="math">{"\\(x^2\\)"}</span> داخل القوة المكعبة بوضعه على شكل <span className="math">{"\\((x^{2/3})^3\\)"}</span>، وأجمع الحدود تحت أس واحد.
                </div>
                <div className="right-col">
                    التعويض يعطي ح.ع.ت من الشكل <span className="math">{"\\(0 \\times (-\\infty)\\)"}</span>.<br />
                    نكتب <span className="math">{"\\(x^2 = (x^{2/3})^3\\)"}</span>.<br />
                    إذن العبارة تصبح <span className="math">{"\\((x^{2/3} \\ln x)^3\\)"}</span>.<br />
                    لجعل العبارة متطابقة، أضرب وأقسم داخل القوس على <span className="math">{"\\(\\frac{3}{2}\\)"}</span>.
                    <div className="math-block">{"\\[ x^2 (\\ln x)^3 = (x^{2/3})^3 (\\ln x)^3 = \\left( x^{2/3} \\ln x \\right)^3 \\]"}</div>
                    نضع التغيير <span className="math">{"\\(X = x^{2/3}\\)"}</span>، إذن <span className="math">{"\\(\\ln X = \\frac{2}{3} \\ln x\\)"}</span> أي <span className="math">{"\\(\\ln x = \\frac{3}{2} \\ln X\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><CheckIcon /> تحقيق الهدف:</strong> ممتاز! لقد ظهر الشكل <span className="math">{"\\(X \\ln X\\)"}</span> الذي خططت له. الآن يمكنني إنهاء الحساب.
                    </div>
                    لما <span className="math">{"\\(x \\to 0\\)"}</span>، فإن <span className="math">{"\\(X \\to 0\\)"}</span>. الحد داخل القوس يصبح <span className="math">{"\\(\\frac{3}{2} X \\ln X\\)"}</span> الذي يؤول إلى 0. ومكعب الصفر هو 0.
                </div>
                <div className="right-col">
                    العبارة تصبح: <div className="math-block">{"\\[ \\left( X \\cdot \\frac{3}{2} \\ln X \\right)^3 = \\frac{27}{8} (X \\ln X)^3 \\]"}</div>
                    نهاية الشهيرة <span className="math">{"\\[\\lim_{X \\to 0} X \\ln X = 0\\]"}</span>.<br />
                    <strong>النتيجة:</strong> <span className="math">{"\\(0\\)"}</span>
                </div>
            </div>

            {/* Q1.2 */}
            <div className="sub-question">2) نهاية الجداء اللوغاريتمي <span className="math">{"\\[\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)\\]"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب النهاية بجوار المالانهاية لدالة تحتوي على لوغاريتم مركب وإزالة حالة عدم التعيين.
                </div>
                <div className="right-col">
                    الهدف: حساب <span className="math">{"\\[\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)\\]"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    بوجود <span className="math">{"\\(x \\to +\\infty\\)"}</span> ووجود المقلوب <span className="math">{"\\(1/x\\)"}</span>، الاستراتيجية الأفضل هي تبديل المتغير ليؤول إلى الصفر ونستفيد من النهايات الشهيرة للوغاريتم.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أضع <span className="math">{"\\(X = 1/x\\)"}</span> <strong>لغرض وحيد</strong> وهو إظهار النهاية الشهيرة <span className="math">{"\\(\\frac{\\ln(1+X)}{X}\\)"}</span> عند الصفر التي أعرف نتيجتها مسبقاً.
                    </div>
                </div>
                <div className="right-col">
                    الربط بنهاية الدالة <span className="math">{"\\(\\frac{\\ln(1+X)}{X}\\)"}</span> عند الصفر.<br />
                    بعكس المتغير، العبارة تصبح <span className="math">{"\\(\\frac{1}{X} \\ln(1+X)\\)"}</span>.
                    العبارة تصبح:
                    <div className="math-block">{"\\[ \\lim_{X \\to 0} \\frac{\\ln(1+X)}{X} \\]"}
                    </div>
                    وهي نهاية شهيرة (بواسطة العدد المشتق للدالة <span className="math">{"\\(\\ln(1+X)\\)"}</span> عند 0).<br />
                    <strong>النتيجة:</strong> <span className="math">{"\\(1\\)"}</span>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 2: ASYMPTOTES
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — المقاربات والوضع النسبي</div>

            {/* Q2.1 */}
            <div className="sub-question">1) تعيين المقارب المائل لـ <span className="math">{"\\(f(x) = \\sqrt{x^2+x+1}\\)"}</span> بجوار <span className="math">{"\\(+\\infty\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    المقارب المائل بجوار المالانهاية يترجم رياضياً إلى إيجاد مستقيم يكون الفرق بينه وبين الدالة يؤول إلى الصفر.
                </div>
                <div className="right-col">
                    نبحث عن مقارب من الشكل <span className="math">{"\\(y = ax+b\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف: إيجاد مستقيم <span className="math">{"\\(y = ax+b\\)"}</span> بحيث <span className="math">{"\\[\\lim_{x\\to+\\infty} [f(x) - (ax+b)] = 0\\]"}</span>. أريد كتابة <span className="math">{"\\(f(x)\\)"}</span> على الشكل <span className="math">{"\\((ax+b) + \\epsilon(x)\\)"}</span>.
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\(a\\)"}</span> و <span className="math">{"\\(b\\)"}</span> بحيث <span className="math">{"\\[\\lim_{x\\to+\\infty} f(x) - (ax+b) = 0\\]"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> الدالة تحت الجذر هي كثيرة حدود. بجوار <span className="math">{"\\(+\\infty\\)"}</span> تتصرف مثل <span className="math">{"\\(|x|\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> الطريقة الأسرع لتخمين المقارب هي كتابة ما تحت الجذر على الشكل النموذجي <span className="math">{"\\((x+c)^2 + d\\)"}</span> واستخراج المربع.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أبحث عن الشكل النموذجي <strong>لكي</strong> أستخرج مربعاً كاملاً من تحت الجذر، مما يكشف لي مباشرة عن معادلة المقارب المائل.
                    </div>
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><CheckIcon /> تحقيق الهدف:</strong> بضرب المرافق، أثبتنا أن الباقي يؤول للصفر، مما يؤكد صحة المقارب المائل.
                    </div>
                    أضرب في المرافق لإزالة عدم التعيين، أجد أن النتيجة تساوي 0 فعلاً.
                </div>
                <div className="right-col">
                    نخمّن المقارب بكتابة الشكل النموذجي: <span className="math">{"\\(x^2+x+1 \\approx (x+\\frac{1}{2})^2\\)"}</span>.<br />
                    أضع <span className="math">{"\\(x^2+x+1\\)"}</span> في الشكل النموذجي: <span className="math">{"\\((x+\\frac{1}{2})^2 + \\frac{3}{4}\\)"}</span>.<br />
                    هذا يعني أن المقارب معادلته <span className="math">{"\\(y = x + \\frac{1}{2}\\)"}</span>. لنتحقق.
                    ندرس نهاية الفرق <span className="math">{"\\(f(x) - (x+\\frac{1}{2})\\)"}</span>:
                    <div className="math-block">{"\\[ \\lim_{x\\to+\\infty} \\left( \\sqrt{x^2+x+1} - (x+\\frac{1}{2}) \\right) \\]"}
                    </div>
                    بالضرب والقسمة على المرافق:
                    <div className="math-block">{"\\[ = \\lim_{x\\to+\\infty} \\frac{(x^2+x+1) - (x+\\frac{1}{2})^2}{\\sqrt{x^2+x+1} + x + \\frac{1}{2}} \\]"}</div>
                    <div className="math-block">{"\\[\\begin{aligned} &= \\lim_{x\\to+\\infty} \\frac{x^2+x+1 - \\left(x^2+x+\\frac{1}{4}\\right)}{\\sqrt{x^2+x+1} + x + \\frac{1}{2}} \\\\\\\\ &= \\frac{\\dfrac{3}{4}}{+\\infty} = 0 \\end{aligned}\\]"}</div>
                    <strong>إذن:</strong> المستقيم ذو المعادلة <span className="math">{"\\(y = x + \\frac{1}{2}\\)"}</span> هو مقارب مائل.
                </div>
            </div>


            {/* Q2.2 */}
            <div className="sub-question">2) دراسة الوضعية <span className="math">{"\\(f(x) = x + 1 - \\frac{x}{e^x-1}\\)"}</span> بالنسبة لـ <span className="math">{"\\(y = x+1\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    كلمة "الوضعية" تترجم رياضياً إلى دراسة إشارة الفرق <span className="math">{"\\(f(x) - y\\)"}</span>.
                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تحديد وضعية المنحنى بالنسبة للمقارب المائل عبر دراسة إشارة الفرق بينهما.
                </div>
                <div className="right-col">
                    ندرس إشارة الفرق: <span className="math">{"\\(D(x) = f(x) - (x+1) = -\\frac{x}{e^x-1}\\)"}</span>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    إشارة الفرق تعتمد كلياً على الكسر المتبقي. نلاحظ أن المقام يحتوي على <span className="math">{"\\(e^x - 1\\)"}</span> الذي تتغير إشارته عند الصفر.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> ندرس إشارة الكسر <span className="math">{"\\(\\frac{x}{e^x-1}\\)"}</span> <strong>فقط</strong> لنعرف متى يكون الفرق موجباً أو سالباً لتحديد وضعية المنحنى بدقة.
                    </div>
                </div>
                <div className="right-col">
                    ربط إشارة الفرق بإشارة كل من البسط والمقام حسب قيم <span className="math">{"\\(x\\)"}</span>.<br />
                    إشارة الفرق تعتمد على بسطه ومقامه.<br />
                    - لما <span className="math">{"\\(x > 0\\)"}</span>: <span className="math">{"\\(e^x > 1 \\Rightarrow e^x-1 > 0\\)"}</span>. الكسر موجب، ومسبوق بناقص فهو سالب.<br />
                    - لما <span className="math">{"\\(x < 0\\)"}</span>: <span className="math">{"\\(e^x < 1 \\Rightarrow e^x-1 < 0\\)"}</span>. الكسر سالب/سالب موجب، ومسبوق بناقص فهو سالب.
                    - إذا كان <span className="math">{"\\(x > 0\\)"}</span>: <span className="math">{"\\(e^x - 1 > 0\\)"}</span> <span className="math">{"\\(\\implies\\)"}</span> <span className="math">{"\\(\\frac{x}{e^x-1} > 0\\)"}</span> <span className="math">{"\\(\\implies D(x) < 0\\)"}</span><br />
                    - إذا كان <span className="math">{"\\(x < 0\\)"}</span>: <span className="math">{"\\(e^x - 1 < 0\\)"}</span> <span className="math">{"\\(\\implies\\)"}</span> <span className="math">{"\\(\\frac{x}{e^x-1} > 0\\)"}</span> (سالب/سالب) <span className="math">{"\\(\\implies D(x) < 0\\)"}</span><br />
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    الفرق دائماً سالب. المنحنى يقع دائماً تحت المقارب، وهو أمر منطقي لكسر بهذه الإشارة المستقرة.
                </div>
                <div className="right-col">
                    <strong>الخلاصة:</strong> المنحنى <span className="math">{"\\((C_f)\\)"}</span> يقع <strong>تحت</strong> المقارب المائل على المجالين <span className="math">{"\\(]-\\infty, 0[\\)"}</span> و <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 3: DERIVATIVES
            ============================================================ */}
            <div className="question-header no-break">التمرين 3 — المشتقات المعقدة والدالة العكسية</div>

            {/* Q3.1 */}
            <div className="sub-question">1) مشتقة <span className="math">{"\\(f(x) = \\ln(x + \\sqrt{x^2+1})\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب الدالة المشتقة وتبسيطها قدر الإمكان.
                </div>
                <div className="right-col">
                    الهدف: حساب وتَبسِيط مشتقة الدالة <span className="math">{"\\(f\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> الدالة هي مركب دالتين، لوغاريتمية وجذرية.<br />
                    <strong>الاستراتيجية:</strong> أطبق قاعدة السلسلة لمشتقة اللوغاريتم <span className="math">{"\\(\\frac{u'}{u}\\)"}</span> حيث <span className="math">{"\\(u = x + \\sqrt{x^2+1}\\)"}</span>.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> هدفي الأول هو التعبير عن <span className="math">{"\\(u'\\)"}</span> بشكل صحيح وتجنب الأخطاء في مشتقة الجذر لتعويضها في قانون مشتقة اللوغاريتم.
                    </div>
                </div>
                <div className="right-col">
                    نطبق قانون السلسلة <span className="math">{"\\(\\left(\\ln(u)\\right)' = \\frac{u'}{u}\\)"}</span>.<br />
                    مشتقة <span className="math">{"\\(x\\)"}</span> هي 1. ومشتقة الجذر هي <span className="math">{"\\(\\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}}\\)"}</span>.
                    <div className="math-block">{"\\[ f'(x) = \\frac{1 + \\frac{2x}{2\\sqrt{x^2+1}}}{x + \\sqrt{x^2+1}} \\]"}
                    </div>
                    نوحد المقامات في بسط الكسر:
                    <div className="math-block">{"\\[ = \\frac{\\frac{\\sqrt{x^2+1} + x}{\\sqrt{x^2+1}}}{x + \\sqrt{x^2+1}} = \\frac{1}{\\sqrt{x^2+1}} \\]"}</div>
                    <strong>النتيجة النهائية للمشتقة مبسطة تماماً.</strong>
                </div>
            </div>


            {/* Q3.2 */}
            <div className="sub-question">2) مشتقة <span className="math">{"\\(f(x) = x^x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب مشتقة دالة تحتوي على متغير في الأساس ومتغير في الأس بالاعتماد على الخواص الأسية واللوغاريتمية.
                </div>
                <div className="right-col">
                    الهدف: إيجاد مشتقة <span className="math">{"\\(f(x) = x^x\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> الدالة <span className="math">{"\\(x^x\\)"}</span> تحتوي على متغير في الأساس ومتغير في الأس.<br />
                    <strong>الاستراتيجية:</strong> القاعدة الذهبية هنا: لا أملك قاعدة اشتقاق مباشرة لها. أستخدم الخواص اللوغاريتمية الأسية لتحويلها: <span className="math">{"\\(x^x = e^{\\ln(x^x)} = e^{x \\ln x}\\)"}</span>.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> قمت بالتحويل إلى الشكل الأسي <span className="math">{"\\(e^{x \\ln x}\\)"}</span> <strong>لأنني</strong> لا أملك قاعدة مباشرة لاشتقاق متغير أس متغير، والآن يمكنني تطبيق قاعدة مشتقة الجداء.
                    </div>
                </div>
                <div className="right-col">
                    نعيد كتابة الدالة باستخدام الدالة الأسية:
                    <div className="math-block">{"\\[ f(x) = e^{x \\ln x} \\]"}</div><br />
                    الآن أشتق دالة أسية. مشتقة <span className="math">{"\\(e^u\\)"}</span> هي <span className="math">{"\\(u' e^u\\)"}</span>.<br />
                    مشتقة <span className="math">{"\\(x \\ln x\\)"}</span> هي مشتقة جداء: <span className="math">{"\\(1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1\\)"}</span>.
                    نشتق باستخدام قاعدة السلسلة ومشتقة الجداء:
                    <div className="math-block">{"\\[ f'(x) = (x \\ln x)' e^{x \\ln x} \\]"}</div>
                    <div className="math-block">{"\\[ f'(x) = (1 \\cdot \\ln x + x \\cdot \\frac{1}{x}) e^{x \\ln x} = (1 + \\ln x) x^x \\]"}
                    </div>
                </div>
            </div>




            {/* ============================================================
                EXERCISE 4: THEOREMS
            ============================================================ */}
            <div className="question-header no-break">التمرين 4 — نظرية القيم المتوسطة والتطبيقات</div>

            {/* Q4.1 */}
            <div className="sub-question">1) حل وحيد للمعادلة <span className="math">{"\\(x^3 + x - 1 = 0\\)"}</span> في <span className="math">{"\\(]0.6, 0.7[\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    "إثبات وجود حل وحيد" لمعادلة يساوي الصفر، يترجم مباشرة إلى تطبيق مبرهنة القيم المتوسطة بشروطها الثلاثة.
                </div>
                <div className="right-col">
                    نطبق مبرهنة القيم المتوسطة على الدالة <span className="math">{"\\(h(x) = x^3 + x - 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات أن المعادلة المعطاة تقبل حلاً وحيداً في المجال المذكور.
                </div>
                <div className="right-col">
                    الهدف: إثبات وجود حل وحيد <span className="math">{"\\(\\alpha\\)"}</span> للمعادلة <span className="math">{"\\(x^3 + x - 1 = 0\\)"}</span> في المجال المعطى.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    حتى نطبق المبرهنة، يجب توفر استمرارية الدالة، رتابتها التامة (تزايد أو تناقص)، وأن الصورتين في طرفي المجال متعاكستان في الإشارة.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أحسب المشتقة والصور <strong>فقط</strong> لأثبت الشروط الثلاثة: الاستمرارية، الرتابة التامة، وتغير الإشارة.
                    </div>
                </div>
                <div className="right-col">
                    1. الدالة <span className="math">{"\\(h\\)"}</span> كثيرة حدود إذن مستمرة.<br />
                    2. المشتقة <span className="math">{"\\(h'(x) = 3x^2 + 1 > 0\\)"}</span>، إذن متزايدة تماماً.<br />
                    3. أحسب <span className="math">{"\\(h(0.6)\\)"}</span> و <span className="math">{"\\(h(0.7)\\)"}</span> لضمان تغير الإشارة.<br />
                    <span className="math">{"\\(0.6^3 = 0.216\\)"}</span>، <span className="math">{"\\(h(0.6) = -0.184 < 0\\)"}</span>.<br />
                    <span className="math">{"\\(0.7^3 = 0.343\\)"}</span>، <span className="math">{"\\(h(0.7) = 0.043 > 0\\)"}</span>.
                    - الدالة مستمرة ومتزايدة تماماً لأن <span className="math">{"\\(h'(x) = 3x^2 + 1 > 0\\)"}</span>.<br />
                    - لدينا <span className="math">{"\\(h(0.6) = -0.184\\)"}</span> و <span className="math">{"\\(h(0.7) = 0.043\\)"}</span>.<br />
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    الشروط الثلاثة محققة بدقة. الجداء سالب والصورة تمر بالصفر بين القيمتين. الاستنتاج سليم.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(h(0.6) \\times h(0.7) < 0\\)"}</span>، فإنه يوجد حل وحيد <span className="math">{"\\(\\alpha\\)"}</span> للمعادلة.
                </div>
            </div>

            {/* Q4.2 */}
            <div className="sub-question">2) برهان <span className="math">{"\\(f(\\alpha) = \\frac{\\alpha+1}{\\alpha-1}\\)"}</span> علماً أن <span className="math">{"\\(g(\\alpha) = 0\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات أن <span className="math">{"\\(f(\\alpha) = \\frac{\\alpha+1}{\\alpha-1}\\)"}</span>                </div>
                <div className="right-col">
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    كلمة «علماً أن» تعني أن مفتاح الحل موجود في
                    <span className="math">{"\\(g(\\alpha)=0\\)"}</span>.<br />

                    بما أن العبارة النهائية لا تحتوي على
                    <span className="math">{"\\(\\ln\\alpha\\)"}</span>،
                    فأول فكرة هي استخراج قيمته ثم التعويض داخل
                    <span className="math">{"\\(f(\\alpha)\\)"}</span>.
                </div>

                <div className="right-col">
                    من
                    <span className="math">{"\\(g(\\alpha)=0\\iff \\alpha^2-\\alpha+1-\\ln\\alpha=0\\)"}</span>
                    نحصل على
                    <span className="math">{"\\(\\ln\\alpha=\\alpha^2-\\alpha+1\\)"}</span>.<br />

                    وبما أن
                    <span className="math">{"\\(f(x)=\\dfrac{x+\\ln x}{x-1}\\)"}</span>،
                    فإن:
                    <span className="math">{"\\(f(\\alpha)=\\dfrac{\\alpha+\\alpha^2-\\alpha+1}{\\alpha-1}\\)"}</span>.<br />

                    بتبسيط البسط:
                    <span className="math">{"\\(f(\\alpha)=\\dfrac{\\alpha^2+1}{\\alpha-1}\\)"}</span>.<br />

                    وإذا كان المطلوب النهائي
                    <span className="math">{"\\(\\dfrac{\\alpha+1}{\\alpha-1}\\)"}</span>
                    مباشرة، فهذا يعني أن عبارة
                    <span className="math">{"\\(f(x)\\)"}</span>
                    الأصلية في نص التمرين مختلفة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    المعادلة الجبرية التي وصلنا إليها متسقة تماماً مع المعطيات السابقة. إذا ظهر اختلاف عن المطلوب، يجب مراجعة عبارة الدالة في النص الأصلي.
                </div>
                <div className="right-col">
                    نتحقق من اتساق الحساب الجبري ونتأكد من عدم وجود أخطاء في التعويض.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 5: Graphical Discussion
            ============================================================ */}
            <div className="question-header no-break">التمرين 5 — المناقشة البيانية</div>

            {/* Q5.1 */}
            <div className="sub-question">1) مناقشة عدد وإشارة حلول <span className="math">{"\\(g(x) = g(m)\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تحديد عدد وإشارة حلول المعادلة <span className="math">{"\\(g(x) = g(m)\\)"}</span> بيانياً، بمسح جميع قيم الوسيط الحقيقي <span className="math">{"\\(m\\)"}</span> من <span className="math">{"\\(-\\infty\\)"}</span> إلى <span className="math">{"\\(+\\infty\\)"}</span>.
                </div>
                <div className="right-col">
                    الهدف: المناقشة البيانية لعدد وإشارة تقاطعات المنحنى مع المستقيم الأفقي بدلالة <span className="math">{"\\(m\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    المعادلة من الشكل <span className="math">{"\\(y = k\\)"}</span> حيث <span className="math">{"\\(k = g(m)\\)"}</span>. هذه تترجم بيانياً إلى مناقشة أفقية.<br />
                    الحلول هي فواصل نقط تقاطع المنحنى <span className="math">{"\\((C_g)\\)"}</span> مع المستقيم الأفقي المذكور.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(m\\)"}</span> وسيط، فإن <span className="math">{"\\(g(m)\\)"}</span> هو قيمة ثابتة. إذن المناقشة هي مناقشة أفقية بالمستقيم ذي المعادلة <span className="math">{"\\(y = g(m)\\)"}</span>.<br />
                    عدد الحلول هو عدد نقط التقاطع. إشارتها هي إشارة فواصل هذه النقط.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    في هذا النوع من المناقشات، المستقيم الأفقي <span className="math">{"\\(y = g(m)\\)"}</span> لا يتحرك عشوائياً، بل يتحرك صعوداً ونزولاً بناءً على تغيرات الدالة <span className="math">{"\\(g\\)"}</span> نفسها عندما يتغير <span className="math">{"\\(m\\)"}</span> من <span className="math">{"\\(-\\infty\\)"}</span> إلى <span className="math">{"\\(+\\infty\\)"}</span>.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أقوم بمسح محور الفواصل بالوسيط <span className="math">{"\\(m\\)"}</span> من اليسار إلى اليمين، <strong>وأراقب</strong> كيف يتصرف المستقيم الأفقي <span className="math">{"\\(y=g(m)\\)"}</span> لاستنتاج عدد الحلول.
                    </div>
                </div>
                <div className="right-col">
                    لإجراء المناقشة، ندرس تغيرات <span className="math">{"\\(g(m)\\)"}</span> بدلالة <span className="math">{"\\(m\\)"}</span> (والتي هي نفسها تغيرات الدالة <span className="math">{"\\(g(x)\\)"}</span>). نعين قيم <span className="math">{"\\(m\\)"}</span> التي توافق القيم الحدية.<br />
                    لنفترض كمثال بيداغوجي عام أن <span className="math">{"\\(g\\)"}</span> تقبل قيمة حدية صغرى (أو كبرى) وحيدة عند <span className="math">{"\\(x=\\alpha\\)"}</span>:<br />
                    - لما <span className="math">{"\\(m\\)"}</span> يمسح <span className="math">{"\\(]-\\infty, \\alpha[\\)"}</span>، المستقيم الأفقي ينزل من <span className="math">{"\\(+\\infty\\)"}</span> إلى <span className="math">{"\\(g(\\alpha)\\)"}</span>.<br />
                    - لما <span className="math">{"\\(m = \\alpha\\)"}</span>، المستقيم يستقر في القاع عند <span className="math">{"\\(y=g(\\alpha)\\)"}</span>.<br />
                    - لما <span className="math">{"\\(m\\)"}</span> يمسح <span className="math">{"\\(]\\alpha, +\\infty[\\)"}</span>، المستقيم يصعد مجدداً.
                    <strong>جدول المناقشة الشاملة (من <span className="math">{"\\(-\\infty\\)"}</span> إلى <span className="math">{"\\(+\\infty\\)"}</span>):</strong><br />
                    <ul style={{ paddingRight: "15px", margin: "5px 0" }}>
                        <li>لما <span className="math">{"\\(m \\in ]-\\infty, \\alpha[ \\cup ]\\alpha, +\\infty[\\)"}</span>:<br /> المعادلة تقبل حلين متمايزين (المستقيم يقطع المنحنى في نقطتين). أحدهما دائماً هو <span className="math">{"\\(x = m\\)"}</span>.</li>
                        <li>لما <span className="math">{"\\(m = \\alpha\\)"}</span>:<br /> المعادلة تقبل حلاً مضاعفاً <span className="math">{"\\(x = \\alpha\\)"}</span> لأن <span className="math">{"\\(y=g(\\alpha)\\)"}</span> هو مماس أفقي للمنحنى.</li>
                    </ul>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><CheckIcon /> تحقيق الهدف:</strong> حتماً <span className="math">{"\\(x = m\\)"}</span> هو دائماً حل بديهي للمعادلة <span className="math">{"\\(g(x)=g(m)\\)"}</span>! وهذا يؤكد أن التقاطع مضمون دائماً.
                    </div>
                    بما أن <span className="math">{"\\(m\\)"}</span> ينتمي لمجموعة التعريف، فإن المستقيم <span className="math">{"\\(y=g(m)\\)"}</span> يقطع المنحنى على الأقل في النقطة ذات الفاصلة <span className="math">{"\\(m\\)"}</span>. المناقشة كانت سليمة ومنطقية.
                </div>
                <div className="right-col">
                    <strong>التحقق المنطقي:</strong> المعادلة <span className="math">{"\\(g(x) = g(m)\\)"}</span> تقبل دائماً الحل البديهي <span className="math">{"\\(x = m\\)"}</span>، مما يؤكد أن المنحنى والمستقيم يتقاطعان في نقطة واحدة على الأقل من أجل أي قيمة للوسيط <span className="math">{"\\(m\\)"}</span> في مجموعة التعريف.
                </div>
            </div>

            {/* Q5.2 */}
            <div className="sub-question">2) مناقشة <span className="math">{"\\(|e^x - 1| - e^{-m} = 0\\)"}</span> للدالة <span className="math">{"\\(f(x) = x - \\ln|e^x - 1|\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إجراء تحويلات جبرية على المعادلة المعطاة حتى تظهر فيها عبارة الدالة <span className="math">{"\\(f(x)\\)"}</span>.
                </div>
                <div className="right-col">
                    نعيد كتابة المعادلة لتظهر فيها عبارة الدالة <span className="math">{"\\(f(x)\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> <span className="math">{"\\(f(x)\\)"}</span> فيها لوغاريتم، بينما المعادلة المعطاة فيها <span className="math">{"\\(e^{-m}\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> أعزل القيمة المطلقة ثم أُدخل الدالة اللوغاريتمية على الطرفين لإيجاد الرابط بين العبارتين.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أجري هذه التحويلات على المعادلة <strong>خصيصاً</strong> لكي تظهر لي عبارة الدالة <span className="math">{"\\(f(x)\\)"}</span> واضحة للتمكن من مناقشتها بيانياً.
                    </div>
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ |e^x - 1| = e^{-m} \\]"}</div><br />
                    أُدخل <span className="math">{"\\(\\ln\\)"}</span> على الطرفين (كلاهما موجب): <span className="math">{"\\(\\ln|e^x - 1| = -m\\)"}</span>.<br />
                    أضرب في سالب وأضيف <span className="math">{"\\(x\\)"}</span> للطرفين لتشكيل الدالة: <span className="math">{"\\(x - \\ln|e^x - 1| = x + m\\)"}</span>.<br />
                    وهكذا نحصل على: <span className="math">{"\\(f(x) = x + m\\)"}</span>.
                    بإدخال اللوغاريتم النيبيري على الطرفين:
                    <div className="math-block">{"\\[ \\ln|e^x - 1| = -m \\]"}</div>
                    <div className="math-block">{"\\[ -\\ln|e^x - 1| = m \\implies x - \\ln|e^x - 1| = x + m \\]"}</div>
                    إذن: <span className="math">{"\\(f(x) = x + m\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><CheckIcon /> تحقيق الهدف:</strong> بظهور <span className="math">{"\\(f(x) = x + m\\)"}</span>، أصبح بإمكاني مباشرة ربطها بالمستقيمات المقاربة المائلة ومناقشة الحلول بسهولة.
                    </div>
                    الشكل <span className="math">{"\\(f(x) = x + m\\)"}</span> يمثل مناقشة مائلة. المستقيمات <span className="math">{"\\(y = x + m\\)"}</span> توازي المستقيم <span className="math">{"\\(y = x\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الخلاصة:</strong> المناقشة هنا هي <strong>مناقشة مائلة</strong> بواسطة مستقيمات توازي المستقيم ذو المعادلة <span className="math">{"\\(y = x\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 6: VARIATIONS
            ============================================================ */}
            <div className="question-header no-break">التمرين 6 — اتجاه التغير والتركيب</div>

            {/* Q6.1 */}
            <div className="sub-question">1) إشارة <span className="math">{"\\(g(x) = x - 1 - \\ln x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو استنتاج إشارة الدالة <span className="math">{"\\(g(x)\\)"}</span> على مجال تعريفها من خلال دراسة اتجاه تغيرها.
                </div>
                <div className="right-col">
                    ندرس اتجاه تغير الدالة <span className="math">{"\\(g\\)"}</span> لاستنتاج إشارتها.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    حساب المشتقة ومعرفة متى تنعدم هو المفتاح للوصول إلى جدول التغيرات.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أنا أدرس اتجاه التغير <strong>ليس</strong> حباً في المشتقة، بل لأصل إلى القيمة الحدية الصغرى التي ستحدد لي إشارة الدالة بأكملها.
                    </div>
                </div>
                <div className="right-col">
                    ربط الإشارة بالقيمة الحدية الصغرى.<br />
                    أشتق الدالة: <span className="math">{"\\(g'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}\\)"}</span>.<br />
                    في المجال <span className="math">{"\\(]0, +\\infty[\\)"}</span>، الإشارة تعتمد على <span className="math">{"\\(x-1\\)"}</span>.<br />
                    إذن <span className="math">{"\\(g\\)"}</span> متناقصة حتى 1، ثم متزايدة.
                    <span className="math">{"\\(g'(x) = \\frac{x-1}{x}\\)"}</span>. تنعدم عند 1 وتكون سالبة قبله وموجبة بعده.<br />
                    الدالة تقبل قيمة حدية صغرى عند <span className="math">{"\\(x=1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><CheckIcon /> تحقيق الهدف:</strong> بما أن أدنى نقطة يبلغها المنحنى هي 0، فهذا يثبت فوراً أن الدالة موجبة تماماً كما أردنا إثباته.
                    </div>
                    أحسب <span className="math">{"\\(g(1) = 1 - 1 - 0 = 0\\)"}</span>. بما أن أدنى قيمة هي الصفر، فإن الدالة دائماً موجبة! <span className="math">{"\\(g(x) \\ge 0\\)"}</span>.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(g(1) = 0\\)"}</span> هي القيمة الحدية الصغرى المطلقة، فإن:
                    <div className="math-block">{"\\[ \\forall x > 0,\\; g(x) \\ge 0 \\]"}</div>
                </div>
            </div>

            {/* Q6.2 */}
            <div className="sub-question">2) تغيرات الدالة المركبة <span className="math">{"\\(h(x) = f(x^2)\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>لماذا نفضل خواص التركيب على الاشتقاق؟</strong> بما أن المطلوب هو استنتاج اتجاه التغير، فإن الاعتماد على اتجاه تغير الدالة الداخلية والخارجية يوصلنا للحل مباشرة دون الحاجة لحساب مشتقة من الدرجة الثالثة ودراسة إشارتها، مما يمنع الوقوع في الأخطاء الحسابية الحتمية.
                </div>
                <div className="right-col">
                    الهدف: دراسة اتجاه تغير الدالة المركبة <span className="math">{"\\(h(x) = f(x^2)\\)"}</span> مباشرة باستغلال اتجاه تغير الدالة الداخلية والخارجية.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نطبق قاعدة تركيب الدوال لتحديد اتجاه تغير الدالة المركبة:<br />
                    - إذا كانت الدالة الأولى (الداخلية) متزايدة، فإن الدالة المركبة تسلك نفس اتجاه تغير الدالة الثانية (الخارجية).<br />
                    - إذا كانت الدالة الأولى (الداخلية) متناقصة، فإن الدالة المركبة تسلك عكس اتجاه تغير الدالة الثانية (الخارجية).
                </div>
                <div className="right-col">
                    الدالة الخارجية <span className="math">{"\\(f\\)"}</span> متناقصة على <span className="math">{"\\([0, 2]\\)"}</span> ومتزايدة على <span className="math">{"\\([2, +\\infty[\\)"}</span>.<br />
                    الدالة الداخلية <span className="math">{"\\(u(x) = x^2\\)"}</span> متناقصة على <span className="math">{"\\(]-\\infty, 0]\\)"}</span> ومتزايدة على <span className="math">{"\\([0, +\\infty[\\)"}</span>.<br />
                    نقارن قيم الدالة الداخلية <span className="math">{"\\(x^2\\)"}</span> مع القيمة 2 (نقطة تغير رتابة الدالة الخارجية):<br />
                    - <span className="math">{"\\(x^2 \\le 2 \\iff x \\in [-\\sqrt{2}, \\sqrt{2}]\\)"}</span>.<br />
                    - <span className="math">{"\\(x^2 \\ge 2 \\iff x \\in ]-\\infty, -\\sqrt{2}] \\cup [\\sqrt{2}, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 7, 8, 9, 10, 11
            ============================================================ */}
            <div className="question-header no-break">تمارين متفرقة — خصائص متقدمة</div>

            {/* Q7 */}
            <div className="sub-question">التمرين 7: المعادلة التفاضلية <span className="math">{"\\(f(x) = (x+1)e^{-x}\\)"}</span> وحل المعادلة <span className="math">{"\\(y'' + 2y' + y = 0\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات أن الدالة المعطاة تمثل حلاً للمعادلة التفاضلية، وذلك بتعويضها وتعويض مشتقاتها فيها وإيجاد صفر.
                </div>
                <div className="right-col">
                    الهدف هو حساب <span className="math">{"\\(y', y''\\)"}</span> للدالة <span className="math">{"\\(f(x)\\)"}</span> وتعويضها في المعادلة التفاضلية للتحقق منها.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    المعادلة من الرتبة الثانية خطية ذات معاملات ثابتة. نحتاج لحساب المميز للمعادلة المميزة.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> أحسب المشتقة الأولى والثانية بدقة <strong>لغرض</strong> تعويضهما في المعادلة التفاضلية والتأكد من أن المجموع يساوي الصفر.
                    </div>
                </div>
                <div className="right-col">
                    المعادلة المميزة هي <span className="math">{"\\(r^2 + 2r + 1 = 0\\)"}</span>.<br />
                    أشتق الأولى: <span className="math">{"\\(f'(x) = e^{-x} - (x+1)e^{-x} = -x e^{-x}\\)"}</span>.<br />
                    أشتق الثانية: <span className="math">{"\\(f''(x) = -e^{-x} + x e^{-x} = (x-1)e^{-x}\\)"}</span>.<br />
                    أعوض في المعادلة: <span className="math">{"\\((x-1)e^{-x} + 2(-x e^{-x}) + (x+1)e^{-x}\\)"}</span>.
                    نحسب المشتقات:
                    <div className="math-block">{"\\[ y' = -xe^{-x} \\]"}</div>
                    <div className="math-block">{"\\[ y'' = (x-1)e^{-x} \\]"}
                    </div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    المجموع: <span className="math">{"\\((x - 1 - 2x + x + 1) e^{-x} = 0 e^{-x} = 0\\)"}</span>. المساواة محققة والدالة هي حل فعلاً.
                </div>
                <div className="right-col">
                    بالتعويض: <span className="math">{"\\((x-1)e^{-x} - 2xe^{-x} + (x+1)e^{-x} = 0\\)"}</span>. محققة.
                </div>
            </div>

            {/* Q8 */}
            <div className="sub-question">التمرين 8: المماسات التي تشمل النقطة <span className="math">{"\\(A(0, -1)\\)"}</span> لـ <span className="math">{"\\(f(x) = \\frac{x^2+3}{x+1}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    المماس يعني المعادلة : <span className="math">{"\\(y = f'(x_0)(x - x_0) + f(x_0)\\)"}</span>.
                    تشمل النقطة A(0, -1) يعني:  (-1, 0) تنتمي للمماس                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد معادلات المماسات التي تمر بالنقطة A(0, -1)  .
                </div>
                <div className="right-col">
                    الهدف : إيجاد حلول المعادلة : <span className="math">{"\\( f'(x_0) )(0 - x_0) + f(x_0) = -1\\)"}</span>
                    <br />
                    أي: حل المعادلة <span className="math">{"\\(-x_0 f'(x_0) + f(x_0) = -1\\)"}</span> .
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أقوم بربط المشتقة والدالة بالمعادلة المستنتجة لتشكيل معادلة ذات مجهول واحد هو فاصلة نقطة التماس.
                </div>
                <div className="right-col">
                    لدينا الدالة <span className="math">{"\\(f(x) = \\frac{x^2+3}{x+1}\\)"}</span> ومشتقتها هي <span className="math">{"\\(f'(x) = \\frac{x^2+2x-3}{(x+1)^2}\\)"}</span>.<br />
                    بالتعويض في العلاقة المستنتجة:<br />
                    <span className="math">{"\\(\\frac{x_0^2+3}{x_0+1} - x_0 \\frac{x_0^2+2x_0-3}{(x_0+1)^2} = -1\\)"}</span>.
                    بتوحيد المقامات والتبسيط نجد:<br />
                    <span className="math">{"\\(\\ -x_0^2+6x_0+3 = -x_0^2-2x_0-1\\)"}</span>.<br />
                    وبالتالي: <span className="math">{"\\(8x_0 = -4 \\implies x_0 = -\\frac{1}{2}\\)"}</span>.<br />
                    نحسب معامل التوجيه: <span className="math">{"\\(f'(-\\frac{1}{2}) = -15\\)"}</span>.<br />
                    معادلة المماس الوحيد هي: <span className="math">{"\\(y = -15x - 1\\)"}</span>.

                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    لنتحقق أن المماس يمر بالنقطة A(0, -1)                 </div>
                <div className="right-col">
                    نعوض <span className='math'>{"\\(x=0\\)"}</span>  و <span className='math'>{"\\(y=-1\\)"}</span> في معادلة المماس:
                    <span className="math">{"\\(-15(0) - 1 = -1\\)"}</span>.<br /> محققة.
                </div>
            </div>

            {/* Q9 */}
            <div className="sub-question">التمرين 9: مركز التناظر <span className="math">{"\\(\\Omega(1, 0)\\)"}</span> للدالة <span className="math">{"\\(f(x) = \\frac{2x^2-4x+5}{x-1}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    أترجم هندسة مركز التناظر إلى علاقة جبرية دستورية تربط إحداثيات النقطة بالدالة.
                </div>
                <div className="right-col">
                    تطبيق قانون مركز التناظر للنقطة <span className="math">{"\\(\\Omega(a, b)\\)"}</span>:<br />
                    <span className="math">{"\\(f(2a - x) + f(x) = 2b\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات صحة العلاقة الجبرية لمركز التناظر عند النقطة المعطاة.
                </div>
                <div className="right-col">
                    الهدف: إثبات أن <span className="math">{"\\(f(2-x) + f(x) = 0\\)"}</span> من أجل النقطة <span className="math">{"\\(\\Omega(1, 0)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أقوم بحساب قيمة الدالة عند المتغير الجديد وتبسيطه لربطه بالدالة الأصلية.
                </div>
                <div className="right-col">
                    نعوض في عبارة الدالة <span className="math">{"\\(f(x) = \\frac{2x^2-4x+5}{x-1}\\)"}</span>:<br />
                    <span className="math">{"\\(f(2-x) = \\frac{2(2-x)^2-4(2-x)+5}{(2-x)-1} = \\frac{2x^2-4x+5}{-(x-1)} = -f(x)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أجمع الطرفين للتحقق من أن المجموع يساوي القيمة المطلوبة لإثبات التناظر.
                </div>
                <div className="right-col">
                    المجموع: <span className="math">{"\\(f(2-x) + f(x) = -f(x) + f(x) = 0\\)"}</span>.<br />
                    المساواة محققة، إذن النقطة هي مركز تناظر للمنحنى.
                </div>
            </div>

            {/* Q10 */}
            <div className="sub-question">التمرين 10: إثبات أن <span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span> على <span className="math">{"\\([0, 1]\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    أترجم المقارنة بين عبارة الدالة والمتغير إلى دراسة إشارة الفرق أو بناء متراجحة انطلاقاً من مجال تعريف محدد.
                </div>
                <div className="right-col">
                    المطلوب إثبات أن <span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span> على المجال المعطى.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات صحة متراجحة تتضمن عبارة أسية على مجال محدد.
                </div>
                <div className="right-col">
                    الهدف: إثبات صحة المتراجحة <span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span> من أجل <span className="math">{"\\(x \\in [0, 1]\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتغير ببناء الأطراف الأسية باستخدام تزايد الدالة الأسية.
                </div>
                <div className="right-col">
                    لدينا <span className="math">{"\\(x \\in [0, 1]\\)"}</span>.<br />
                    عند الصفر المتراجحة محققة مساواة <span className="math">{"\\(0=0\\)"}</span>.<br />
                    من أجل <span className="math">{"\\(x > 0\\)"}</span>، بقسمة الطرفين على <span className="math">{"\\(x\\)"}</span> يؤول المطلوب إلى إثبات: <span className="math">{"\\(e^{1-x} \\ge 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من صحة المتراجحة ببناء الأسية انطلاقاً من حصر الأس.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(x \\le 1 \\implies 1-x \\ge 0\\)"}</span>.<br />
                    وبما أن الدالة الأسية متزايدة تماماً: <span className="math">{"\\(e^{1-x} \\ge e^0 = 1\\)"}</span>.<br />
                    بالضرب في <span className="math">{"\\(x\\)"}</span> الموجب نجد: <span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span> وهي محققة تماماً.
                </div>
            </div>

            {/* Q11 */}
            <div className="sub-question">التمرين 11: رسم <span className="math">{"\\(k(x) = |f(|x|)|\\)"}</span> انطلاقاً من <span className="math">{"\\(f(x) = \\ln|x|\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    القيمة المطلقة جبريا تترجم إلى تناظر في الرسم
                    <br />
                    "انطلاقا من" يعني استعماله في بناء رسم المنحنى الجديد

                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    استنتاج رسم منحنى دالة تحتوي على قيم مطلقة مركبة انطلاقاً من منحنى معلوم.
                </div>
                <div className="right-col">
                    الهدف: إنشاء المنحنى الجديد <span className="math">{"\\(C_k\\)"}</span> انطلاقاً من المنحنى الأصلي <span className="math">{"\\(C_f\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط زوجية الدالة الأصلية بتبسيط العبارة للتخلص من القيمة المطلقة للمتغير.
                </div>
                <div className="right-col">
                    بما أن الدالة <span className="math">{"\\(f(x) = \\ln|x|\\)"}</span> زوجية، فإن <span className="math">{"\\(f(|x|) = f(x)\\)"}</span>.<br />
                    وعليه يؤول الرسم إلى منحنى الدالة المبسطة: <span className="math">{"\\(k(x) = |f(x)|\\)"}</span>.
                    <br />
                    <strong>الإنشاء الهندسي:</strong><br />
                    - المنحنى <span className="math">{"\\(C_k\\)"}</span> هو نفسه المنحنى <span className="math">{"\\(C_f\\)"}</span> عندما يكون <span className="math">{"\\(C_f\\)"}</span> فوق محور الفواصل.<br />
                    - المنحنى <span className="math">{"\\(C_k\\)"}</span> هو نظير المنحنى <span className="math">{"\\(C_f\\)"}</span> بالنسبة لمحور الفواصل عندما يكون <span className="math">{"\\(C_f\\)"}</span> تحت محور الفواصل.<br />

                </div>
            </div>

        </>
    );
};

export default Solution_DirectQuestions_Functions;
