import React from 'react';

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
            <div className="sub-question">1) نهاية الكسر <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{x^3}{\\ln x - x}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    السؤال معطى بصيغة رياضية مباشرة. الهدف هو حساب نهاية الكسر بجوار المالانهاية مع التخلص من أي حالة عدم تعيين.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{x^3}{\\ln x - x}\\)"}</span>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    حساب النهاية يترجم رياضياً إلى التعويض المباشر أولاً لاستكشاف وجود حالات عدم التعيين.
                </div>
                <div className="right-col">
                    نقوم بالتعويض المباشر في العبارة المعطاة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>جرد المعطيات:</strong> التعويض المباشر يعطي في البسط <span className="math">{"\\(+\\infty\\)"}</span> وفي المقام <span className="math">{"\\(+\\infty - \\infty\\)"}</span> (حالة عدم تعيين مركبة).<br />
                    <strong>الربط بالهدف (الاستراتيجية):</strong> للوصول للهدف، يجب فك هذه الحالة. أعلم من مكتسباتي القبلية أن <span className="math">{"\\(x\\)"}</span> أقوى من <span className="math">{"\\(\\ln x\\)"}</span> بجوار المالانهاية. لذا سأستخرج <span className="math">{"\\(x\\)"}</span> كعامل مشترك في المقام لتوليد النهاية الشهيرة <span className="math">{"\\(\\frac{\\ln x}{x}\\)"}</span>.
                </div>
                <div className="right-col">
                    التعويض المباشر يعطي حالة عدم تعيين في المقام <span className="math">{"\\(+\\infty - \\infty\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أستخرج <span className="math">{"\\(x\\)"}</span> كعامل مشترك في المقام <strong>فقط</strong> لأتمكن من إظهار النهاية الشهيرة <span className="math">{"\\(\\frac{\\ln x}{x} \\to 0\\)"}</span> والتخلص من حالة عدم التعيين.
                    </div>
                    أستخرج <span className="math">{"\\(x\\)"}</span> وأختزل:<br />
                    <span className="math">{"\\(\\frac{x^3}{x(\\frac{\\ln x}{x} - 1)} = \\frac{x^2}{\\frac{\\ln x}{x} - 1}\\)"}</span>
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ = \\lim_{x \\to +\\infty} \\frac{x^3}{x \\left( \\frac{\\ln x}{x} - 1 \\right)} = \\lim_{x \\to +\\infty} \\frac{x^2}{\\frac{\\ln x}{x} - 1} \\]"}</div>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    بما أن <span className="math">{"\\(\\frac{\\ln x}{x} \\to 0\\)"}</span>، فالمقام يؤول إلى <span className="math">{"\\(-1\\)"}</span>.<br />
                    <span className="math">{"\\(+\\infty / -1 = -\\infty\\)"}</span>. الكسر يؤول لنتيجة منطقية، ولا توجد حالات عدم تعيين جديدة. نجحت الاستراتيجية.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0\\)"}</span>، فإن نهاية المقام هي <span className="math">{"\\(-1\\)"}</span>. ونهاية البسط <span className="math">{"\\(+\\infty\\)"}</span>.<br />
                    <strong>النتيجة:</strong> <span className="math">{"\\(-\\infty\\)"}</span>
                </div>
            </div>

            {/* Q1.2 */}
            <div className="sub-question">2) نهاية الدالة الأسية <span className="math">{"\\(\\lim_{x \\to 0} \\frac{e^{2x} - e^x}{x}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب نهاية الدالة الكسرية الأسية عند الصفر وإزالة حالة عدم التعيين المحتملة.
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\(\\lim_{x \\to 0} \\frac{e^{2x} - e^x}{x}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    النهاية عند نقطة لدالة كسرية توحي غالباً باستخدام تعريف العدد المشتق إذا كان التعويض المباشر يعطي <span className="math">{"\\(0/0\\)"}</span>.
                </div>
                <div className="right-col">
                    نجرب التعويض المباشر لتشخيص الحالة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> التعويض بـ 0 يعطي <span className="math">{"\\(1 - 1 = 0\\)"}</span> في البسط، و 0 في المقام. حالة <span className="math">{"\\(0/0\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> كلما رأيت عبارة من الشكل <span className="math">{"\\(\\frac{g(x)-g(a)}{x-a}\\)"}</span> عندما <span className="math">{"\\(x \\to a\\)"}</span>، أترجمها فوراً إلى <span className="math">{"\\(g'(a)\\)"}</span>. هنا أضع <span className="math">{"\\(g(x) = e^{2x} - e^x\\)"}</span> وألاحظ أن <span className="math">{"\\(g(0) = 0\\)"}</span>.
                </div>
                <div className="right-col">
                    التعويض المباشر يعطي <span className="math">{"\\(\\frac{0}{0}\\)"}</span> (ح.ع.ت).
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب مشتقة الدالة <span className="math">{"\\(g(x)\\)"}</span> عند الصفر <strong>لأن</strong> النهاية المطلوبة تتطابق تماماً مع تعريف العدد المشتق. هذا يجنبنا التفكيك المعقد.
                    </div>
                    أشتق الدالة <span className="math">{"\\(g(x)\\)"}</span>: <span className="math">{"\\(g'(x) = 2e^{2x} - e^x\\)"}</span>.<br />
                    أحسب قيمتها عند <span className="math">{"\\(x=0\\)"}</span>: <span className="math">{"\\(g'(0) = 2(1) - 1 = 1\\)"}</span>.
                </div>
                <div className="right-col">
                    نضع الدالة <span className="math">{"\\(g(x) = e^{2x} - e^x\\)"}</span>، القابلة للاشتقاق عند 0.<br />
                    لدينا <span className="math">{"\\(g(0) = 0\\)"}</span>، إذن النهاية هي:
                    <div className="math-block">{"\\[ \\lim_{x \\to 0} \\frac{g(x) - g(0)}{x - 0} = g'(0) \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بفضل تعريف العدد المشتق، تحولت نهاية معقدة إلى مجرد تعويض مباشر في المشتقة!
                    </div>
                    استخدام العدد المشتق وفر عليّ استعمال التفكيك <span className="math">{"\\(e^x(e^x-1)/x\\)"}</span>. النتيجة 1 متسقة تماماً وسريعة.
                </div>
                <div className="right-col">
                    المشتقة: <span className="math">{"\\(g'(x) = 2e^{2x} - e^x\\)"}</span>.<br />
                    <span className="math">{"\\(g'(0) = 2(1) - 1 = 1\\)"}</span>.<br />
                    <strong>النتيجة:</strong> <span className="math">{"\\(1\\)"}</span>
                </div>
            </div>

            {/* Q1.3 */}
            <div className="sub-question">3) النهاية الشهيرة بقوى متغيرة <span className="math">{"\\(\\lim_{x \\to 0^>} x^2 (\\ln x)^3\\)"}</span></div>
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
                    الهدف: إيجاد <span className="math">{"\\(\\lim_{x \\to 0^>} x^2 (\\ln x)^3\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    عبارة من الشكل <span className="math">{"\\(x^n (\\ln x)^m\\)"}</span> تترجم إلى محاولة دمج القوى للوصول إلى النهاية الشهيرة <span className="math">{"\\(X \\ln X \\to 0\\)"}</span>.
                </div>
                <div className="right-col">
                    تشخيص حالة عدم التعيين الناتجة عن الجداء.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> <span className="math">{"\\(x^2 \\to 0\\)"}</span> و <span className="math">{"\\((\\ln x)^3 \\to -\\infty\\)"}</span>. الجداء حالة عدم تعيين <span className="math">{"\\(0 \\times \\infty\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> لمعالجة هذا الشكل، أحتاج للوصول إلى النهاية الشهيرة <span className="math">{"\\(X \\ln X \\to 0\\)"}</span>. سأدخل <span className="math">{"\\(x^2\\)"}</span> داخل القوة المكعبة بوضعه على شكل <span className="math">{"\\((x^{2/3})^3\\)"}</span>، وأجمع الحدود تحت أس واحد.
                </div>
                <div className="right-col">
                    التعويض يعطي ح.ع.ت من الشكل <span className="math">{"\\(0 \\times (-\\infty)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أغير المتغيرات وأدمج القوى <strong>فقط</strong> لأستخرج النهاية الشهيرة <span className="math">{"\\(X \\ln X \\to 0\\)"}</span>. يجب ألا أغيب عن هذا الهدف.
                    </div>
                    نكتب <span className="math">{"\\(x^2 = (x^{2/3})^3\\)"}</span>.<br />
                    إذن العبارة تصبح <span className="math">{"\\((x^{2/3} \\ln x)^3\\)"}</span>.<br />
                    لجعل العبارة متطابقة، أضرب وأقسم داخل القوس على <span className="math">{"\\(\\frac{3}{2}\\)"}</span>.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ x^2 (\\ln x)^3 = (x^{2/3})^3 (\\ln x)^3 = \\left( x^{2/3} \\ln x \\right)^3 \\]"}</div>
                    نضع التغيير <span className="math">{"\\(X = x^{2/3}\\)"}</span>، إذن <span className="math">{"\\(\\ln X = \\frac{2}{3} \\ln x\\)"}</span> أي <span className="math">{"\\(\\ln x = \\frac{3}{2} \\ln X\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> ممتاز! لقد ظهر الشكل <span className="math">{"\\(X \\ln X\\)"}</span> الذي خططت له. الآن يمكنني إنهاء الحساب.
                    </div>
                    لما <span className="math">{"\\(x \\to 0\\)"}</span>، فإن <span className="math">{"\\(X \\to 0\\)"}</span>. الحد داخل القوس يصبح <span className="math">{"\\(\\frac{3}{2} X \\ln X\\)"}</span> الذي يؤول إلى 0. ومكعب الصفر هو 0.
                </div>
                <div className="right-col">
                    العبارة تصبح: <div className="math-block">{"\\[ \\left( X \\cdot \\frac{3}{2} \\ln X \\right)^3 = \\frac{27}{8} (X \\ln X)^3 \\]"}</div>
                    نهاية الشهيرة <span className="math">{"\\(\\lim_{X \\to 0} X \\ln X = 0\\)"}</span>.<br />
                    <strong>النتيجة:</strong> <span className="math">{"\\(0\\)"}</span>
                </div>
            </div>

            {/* Q1.4 */}
            <div className="sub-question">4) نهاية الجداء اللوغاريتمي <span className="math">{"\\(\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)\\)"}</span></div>
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
                    الهدف: حساب <span className="math">{"\\(\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    التعويض يعطي <span className="math">{"\\(+\\infty \\times \\ln(1+0) = \\infty \\times 0\\)"}</span> (ح.ع.ت).<br />
                    أرى العبارة <span className="math">{"\\(1/x\\)"}</span>، وهذا يوحي فوراً بوضع متغير جديد <span className="math">{"\\(X = 1/x\\)"}</span>.
                </div>
                <div className="right-col">
                    نضع التغيير <span className="math">{"\\(X = \\frac{1}{x}\\)"}</span>. لما <span className="math">{"\\(x \\to +\\infty\\)"}</span>، فإن <span className="math">{"\\(X \\to 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    بوجود <span className="math">{"\\(x \\to +\\infty\\)"}</span> ووجود المقلوب <span className="math">{"\\(1/x\\)"}</span>، الاستراتيجية الأفضل هي تبديل المتغير ليؤول إلى الصفر ونستفيد من النهايات الشهيرة للوغاريتم.
                </div>
                <div className="right-col">
                    الربط بنهاية الدالة <span className="math">{"\\(\\frac{\\ln(1+X)}{X}\\)"}</span> عند الصفر.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أضع <span className="math">{"\\(X = 1/x\\)"}</span> <strong>لغرض وحيد</strong> وهو إظهار النهاية الشهيرة <span className="math">{"\\(\\frac{\\ln(1+X)}{X}\\)"}</span> عند الصفر التي أعرف نتيجتها مسبقاً.
                    </div>
                    بعكس المتغير، العبارة تصبح <span className="math">{"\\(\\frac{1}{X} \\ln(1+X)\\)"}</span>.
                </div>
                <div className="right-col">
                    العبارة تصبح:
                    <div className="math-block">{"\\[ \\lim_{X \\to 0} \\frac{\\ln(1+X)}{X} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    هذه نهاية شهيرة جداً للدالة اللوغاريتمية عند الصفر! نهايتها هي 1.
                </div>
                <div className="right-col">
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف: إيجاد مستقيم <span className="math">{"\\(y = ax+b\\)"}</span> بحيث <span className="math">{"\\(\\lim_{x\\to+\\infty} [f(x) - (ax+b)] = 0\\)"}</span>. أريد كتابة <span className="math">{"\\(f(x)\\)"}</span> على الشكل <span className="math">{"\\((ax+b) + \\epsilon(x)\\)"}</span>.
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\(a\\)"}</span> و <span className="math">{"\\(b\\)"}</span> بحيث <span className="math">{"\\(\\lim_{x\\to+\\infty} f(x) - (ax+b) = 0\\)"}</span>.
                </div>
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
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> الدالة تحت الجذر هي كثيرة حدود. بجوار <span className="math">{"\\(+\\infty\\)"}</span> تتصرف مثل <span className="math">{"\\(|x|\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> الطريقة الأسرع لتخمين المقارب هي كتابة ما تحت الجذر على الشكل النموذجي <span className="math">{"\\((x+c)^2 + d\\)"}</span> واستخراج المربع.
                </div>
                <div className="right-col">
                    نخمّن المقارب بكتابة الشكل النموذجي: <span className="math">{"\\(x^2+x+1 \\approx (x+\\frac{1}{2})^2\\)"}</span>.<br />
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أبحث عن الشكل النموذجي <strong>لكي</strong> أستخرج مربعاً كاملاً من تحت الجذر، مما يكشف لي مباشرة عن معادلة المقارب المائل.
                    </div>
                    أضع <span className="math">{"\\(x^2+x+1\\)"}</span> في الشكل النموذجي: <span className="math">{"\\((x+\\frac{1}{2})^2 + \\frac{3}{4}\\)"}</span>.<br />
                    هذا يعني أن المقارب معادلته <span className="math">{"\\(y = x + \\frac{1}{2}\\)"}</span>. لنتحقق.
                </div>
                <div className="right-col">
                    ندرس نهاية الفرق <span className="math">{"\\(f(x) - (x+\\frac{1}{2})\\)"}</span>:
                    <div className="math-block">{"\\[ \\lim_{x\\to+\\infty} \\left( \\sqrt{x^2+x+1} - (x+\\frac{1}{2}) \\right) \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بضرب المرافق، أثبتنا أن الباقي يؤول للصفر، مما يؤكد صحة المقارب المائل.
                    </div>
                    أضرب في المرافق لإزالة عدم التعيين، أجد أن النتيجة تساوي 0 فعلاً.
                </div>
                <div className="right-col">
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تحديد وضعية المنحنى بالنسبة للمقارب المائل عبر دراسة إشارة الفرق بينهما.
                </div>
                <div className="right-col">
                    الهدف: دراسة الوضع النسبي بين <span className="math">{"\\((C_f)\\)"}</span> والمستقيم <span className="math">{"\\(y = x+1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    كلمة "الوضعية" تترجم رياضياً إلى دراسة إشارة الفرق <span className="math">{"\\(f(x) - y\\)"}</span>.
                </div>
                <div className="right-col">
                    ندرس إشارة الفرق: <span className="math">{"\\(D(x) = f(x) - (x+1) = -\\frac{x}{e^x-1}\\)"}</span>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    إشارة الفرق تعتمد كلياً على الكسر المتبقي. نلاحظ أن المقام يحتوي على <span className="math">{"\\(e^x - 1\\)"}</span> الذي تتغير إشارته عند الصفر.
                </div>
                <div className="right-col">
                    ربط إشارة الفرق بإشارة كل من البسط والمقام حسب قيم <span className="math">{"\\(x\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> ندرس إشارة الكسر <span className="math">{"\\(\\frac{x}{e^x-1}\\)"}</span> <strong>فقط</strong> لنعرف متى يكون الفرق موجباً أو سالباً لتحديد وضعية المنحنى بدقة.
                    </div>
                    إشارة الفرق تعتمد على بسطه ومقامه.<br />
                    - لما <span className="math">{"\\(x > 0\\)"}</span>: <span className="math">{"\\(e^x > 1 \\Rightarrow e^x-1 > 0\\)"}</span>. الكسر موجب، ومسبوق بناقص فهو سالب.<br />
                    - لما <span className="math">{"\\(x < 0\\)"}</span>: <span className="math">{"\\(e^x < 1 \\Rightarrow e^x-1 < 0\\)"}</span>. الكسر سالب/سالب موجب، ومسبوق بناقص فهو سالب.
                </div>
                <div className="right-col">
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
                </div>
                <div className="right-col">
                    نطبق قانون السلسلة <span className="math">{"\\(\\left(\\ln(u)\\right)' = \\frac{u'}{u}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> هدفي الأول هو التعبير عن <span className="math">{"\\(u'\\)"}</span> بشكل صحيح وتجنب الأخطاء في مشتقة الجذر لتعويضها في قانون مشتقة اللوغاريتم.
                    </div>
                    مشتقة <span className="math">{"\\(x\\)"}</span> هي 1. ومشتقة الجذر هي <span className="math">{"\\(\\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}}\\)"}</span>.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ f'(x) = \\frac{1 + \\frac{2x}{2\\sqrt{x^2+1}}}{x + \\sqrt{x^2+1}} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بعد توحيد المقامات، ظهر أن البسط يطابق المقام تماماً، مما سمح لنا باختزال العبارة إلى شكلها المبسط النهائي!
                    </div>
                    أوحد المقامات في البسط: <span className="math">{"\\(\\frac{\\sqrt{x^2+1}+x}{\\sqrt{x^2+1}}\\)"}</span>.<br />
                    ألاحظ أن هذا البسط يحتوي بالضبط على نفس عبارة المقام الكلي! سيختزل بالكامل.<br />
                    النتيجة <span className="math">{"\\(\\frac{1}{\\sqrt{x^2+1}}\\)"}</span>. اختزال سحري يؤكد صحة الحساب.
                </div>
                <div className="right-col">
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
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> الدالة <span className="math">{"\\(x^x\\)"}</span> تحتوي على متغير في الأساس ومتغير في الأس.<br />
                    <strong>الاستراتيجية:</strong> القاعدة الذهبية هنا: لا أملك قاعدة اشتقاق مباشرة لها. أستخدم الخواص اللوغاريتمية الأسية لتحويلها: <span className="math">{"\\(x^x = e^{\\ln(x^x)} = e^{x \\ln x}\\)"}</span>.
                </div>
                <div className="right-col">
                    نعيد كتابة الدالة باستخدام الدالة الأسية:
                    <div className="math-block">{"\\[ f(x) = e^{x \\ln x} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> قمت بالتحويل إلى الشكل الأسي <span className="math">{"\\(e^{x \\ln x}\\)"}</span> <strong>لأنني</strong> لا أملك قاعدة مباشرة لاشتقاق متغير أس متغير، والآن يمكنني تطبيق قاعدة مشتقة الجداء.
                    </div>
                    الآن أشتق دالة أسية. مشتقة <span className="math">{"\\(e^u\\)"}</span> هي <span className="math">{"\\(u' e^u\\)"}</span>.<br />
                    مشتقة <span className="math">{"\\(x \\ln x\\)"}</span> هي مشتقة جداء: <span className="math">{"\\(1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1\\)"}</span>.
                </div>
                <div className="right-col">
                    نشتق باستخدام قاعدة السلسلة ومشتقة الجداء:
                    <div className="math-block">{"\\[ f'(x) = (x \\ln x)' e^{x \\ln x} \\]"}</div>
                    <div className="math-block">{"\\[ f'(x) = (1 \\cdot \\ln x + x \\cdot \\frac{1}{x}) e^{x \\ln x} = (1 + \\ln x) x^x \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    تحولت الدالة بنجاح إلى جداء يمكن اشتقاقه. النتيجة صحيحة ومنطقية.
                </div>
                <div className="right-col">
                    <strong>النتيجة النهائية:</strong> <span className="math">{"\\((1 + \\ln x) x^x\\)"}</span>
                </div>
            </div>

            {/* Q3.3 */}
            <div className="sub-question">3) مشتقة الدالة العكسية لـ <span className="math">{"\\(f(x) = e^x + x\\)"}</span> عند 1</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو حساب <span className="math">{"\\((f^{-1})'(1)\\)"}</span> باستخدام قانون مشتقة الدالة العكسية.
                </div>
                <div className="right-col">
                    الهدف: حساب <span className="math">{"\\((f^{-1})'(1)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> القانون يعطينا <span className="math">{"\\((f^{-1})'(y_0) = \\frac{1}{f'(x_0)}\\)"}</span> حيث <span className="math">{"\\(f(x_0) = y_0 = 1\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> لحل هذا، أحتاج أولاً لإيجاد السابقة <span className="math">{"\\(x_0\\)"}</span>، ثم حساب مشتقة <span className="math">{"\\(f\\)"}</span> وتعويض <span className="math">{"\\(x_0\\)"}</span> فيها.
                </div>
                <div className="right-col">
                    القانون: <span className="math">{"\\((f^{-1})'(1) = \\frac{1}{f'(x_0)}\\)"}</span> حيث <span className="math">{"\\(f(x_0) = 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> قبل تطبيق قانون الدالة العكسية، أبحث أولاً عن السابقة <span className="math">{"\\(x_0\\)"}</span> <strong>لأن</strong> القانون يتطلب حساب المشتقة <span className="math">{"\\(f'(x_0)\\)"}</span> وليس <span className="math">{"\\(f'(1)\\)"}</span>.
                    </div>
                    أحتاج أولاً معرفة <span className="math">{"\\(x_0\\)"}</span> الذي صورته 1. بالملاحظة البديهية، <span className="math">{"\\(f(0) = e^0 + 0 = 1\\)"}</span>. إذن <span className="math">{"\\(x_0 = 0\\)"}</span>.<br />
                    الآن أحسب <span className="math">{"\\(f'(x)\\)"}</span>: <span className="math">{"\\(f'(x) = e^x + 1\\)"}</span>.<br />
                    قيمته عند 0: <span className="math">{"\\(f'(0) = 2\\)"}</span>.
                </div>
                <div className="right-col">
                    بالملاحظة، <span className="math">{"\\(f(0) = e^0 + 0 = 1\\)"}</span>، إذن <span className="math">{"\\(x_0 = 0\\)"}</span>.<br />
                    نحسب المشتقة: <span className="math">{"\\(f'(x) = e^x + 1\\)"}</span>.<br />
                    إذن <span className="math">{"\\(f'(0) = 2\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    النتيجة هي مقلوب مشتقة الدالة الأصلية عند السابقة، وهذا متوافق تماماً مع القانون الجبري.
                </div>
                <div className="right-col">
                    <strong>النتيجة:</strong> <span className="math">{"\\((f^{-1})'(1) = \\frac{1}{2}\\)"}</span>.
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات أن المعادلة المعطاة تقبل حلاً وحيداً في المجال المذكور.
                </div>
                <div className="right-col">
                    الهدف: إثبات وجود حل وحيد <span className="math">{"\\(\\alpha\\)"}</span> للمعادلة <span className="math">{"\\(x^3 + x - 1 = 0\\)"}</span> في المجال المعطى.
                </div>
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
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    حتى نطبق المبرهنة، يجب توفر استمرارية الدالة، رتابتها التامة (تزايد أو تناقص)، وأن الصورتين في طرفي المجال متعاكستان في الإشارة.
                </div>
                <div className="right-col">
                    الربط: التحقق من الاستمرارية، الرتابة التامة، وتغير الإشارة لصور الأطراف.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب المشتقة والصور <strong>فقط</strong> لأثبت الشروط الثلاثة: الاستمرارية، الرتابة التامة، وتغير الإشارة.
                    </div>
                    1. الدالة <span className="math">{"\\(h\\)"}</span> كثيرة حدود إذن مستمرة.<br />
                    2. المشتقة <span className="math">{"\\(h'(x) = 3x^2 + 1 > 0\\)"}</span>، إذن متزايدة تماماً.<br />
                    3. أحسب <span className="math">{"\\(h(0.6)\\)"}</span> و <span className="math">{"\\(h(0.7)\\)"}</span> لضمان تغير الإشارة.<br />
                    <span className="math">{"\\(0.6^3 = 0.216\\)"}</span>، <span className="math">{"\\(h(0.6) = -0.184 < 0\\)"}</span>.<br />
                    <span className="math">{"\\(0.7^3 = 0.343\\)"}</span>، <span className="math">{"\\(h(0.7) = 0.043 > 0\\)"}</span>.
                </div>
                <div className="right-col">
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
                    الهدف: التعويض في <span className="math">{"\\(f(\\alpha) = \\frac{\\alpha + \\ln \\alpha}{\\alpha - 1}\\)"}</span> للتخلص من اللوغاريتم نهائياً.
                </div>
                <div className="right-col">
                    الهدف: التخلص من اللوغاريتم في عبارة <span className="math">{"\\(f(\\alpha)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    برهان صحة عبارة بدلالة <span className="math">{"\\(\\alpha\\)"}</span> يترجم دائماً إلى استغلال المعطى <span className="math">{"\\(g(\\alpha)=0\\)"}</span> لاستخراج اللوغاريتم أو الأسية وتعويضها.
                </div>
                <div className="right-col">
                    توظيف المعادلة الصفرية السابقة لتبسيط العبارة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> <span className="math">{"\\(g(\\alpha) = 0 \\Rightarrow \\alpha^2 + 1 - \\ln \\alpha = 0\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> أستخرج <span className="math">{"\\(\\ln \\alpha\\)"}</span> من المعادلة السابقة للحصول على <span className="math">{"\\(\\ln \\alpha = \\alpha^2 + 1\\)"}</span>، وأعوضها في عبارة الدالة.
                </div>
                <div className="right-col">
                    لدينا <span className="math">{"\\(g(\\alpha) = 0 \\implies \\alpha^2 + 1 - \\ln \\alpha = 0 \\implies \\ln \\alpha = \\alpha^2 + 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> هدفي الأساسي هو استبدال اللوغاريتم <span className="math">{"\\(\\ln \\alpha\\)"}</span> بقيمته الحدودية من <span className="math">{"\\(g(\\alpha)=0\\)"}</span> للوصول إلى شكل كسري لا يحتوي على لوغاريتمات.
                    </div>
                    أعوض: <span className="math">{"\\(f(\\alpha) = \\frac{\\alpha + (\\alpha^2 + 1)}{\\alpha - 1} = \\frac{\\alpha^2 + \\alpha + 1}{\\alpha - 1}\\)"}</span>.<br />
                    مهلاً، الهدف هو <span className="math">{"\\(\\frac{\\alpha+1}{\\alpha-1}\\)"}</span>! هناك شيء ناقص. دعني أتفحص السؤال.. هل كان هناك جذر؟ لا، الدالة هي الدالة المعطاة. هل يمكن أن يكون هناك خطأ مطبعي في نص التمرين؟
                    لأراجع المعطيات: لو كان <span className="math">{"\\(f(\\alpha) = \\frac{\\alpha^2+\\alpha+1}{\\alpha-1}\\)"}</span>، فهذا لا يساوي <span className="math">{"\\(\\frac{\\alpha+1}{\\alpha-1}\\)"}</span> إلا إذا كانت <span className="math">{"\\(\\alpha^2=0\\)"}</span> وهو غير صحيح. قد تكون الدالة <span className="math">{"\\(f\\)"}</span> أصلها مختلف في التمرين الكلاسيكي، لكنني سأصلها جبرياً كما هي أو استخراج عامل مشترك.
                    لحظة، لو كانت <span className="math">{"\\(g(x) = x^2+1-\\ln x\\)"}</span>، ربما الدالة هي <span className="math">{"\\(f(x) = \\frac{x+\\ln x}{x-1}\\)"}</span>، التعويض يعطي <span className="math">{"\\(\\frac{\\alpha^2+\\alpha+1}{\\alpha-1}\\)"}</span>. سأكتب ما وصلت إليه جبرياً بصراحة.
                </div>
                <div className="right-col">
                    نعوض في عبارة الدالة <span className="math">{"\\(f\\)"}</span>:
                    <div className="math-block">{"\\[ f(\\alpha) = \\frac{\\alpha + \\alpha^2 + 1}{\\alpha - 1} \\]"}</div>
                    <em>ملاحظة منهجية:</em> بناء على دوال البكالوريا، الصيغة النهائية المحققة جبرياً هي <span className="math">{"\\(\\frac{\\alpha^2+\\alpha+1}{\\alpha-1}\\)"}</span>. إذا كان المطلوب إثبات صيغة أخرى فهناك نقص في ربط العبارات، والأساس السليم هو استبدال <span className="math">{"\\(\\ln \\alpha\\)"}</span> بقيمتها الحدودية.
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
                </div>
                <div className="right-col">
                    لإجراء المناقشة، ندرس تغيرات <span className="math">{"\\(g(m)\\)"}</span> بدلالة <span className="math">{"\\(m\\)"}</span> (والتي هي نفسها تغيرات الدالة <span className="math">{"\\(g(x)\\)"}</span>). نعين قيم <span className="math">{"\\(m\\)"}</span> التي توافق القيم الحدية.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أقوم بمسح محور الفواصل بالوسيط <span className="math">{"\\(m\\)"}</span> من اليسار إلى اليمين، <strong>وأراقب</strong> كيف يتصرف المستقيم الأفقي <span className="math">{"\\(y=g(m)\\)"}</span> لاستنتاج عدد الحلول.
                    </div>
                    لنفترض كمثال بيداغوجي عام أن <span className="math">{"\\(g\\)"}</span> تقبل قيمة حدية صغرى (أو كبرى) وحيدة عند <span className="math">{"\\(x=\\alpha\\)"}</span>:<br />
                    - لما <span className="math">{"\\(m\\)"}</span> يمسح <span className="math">{"\\(]-\\infty, \\alpha[\\)"}</span>، المستقيم الأفقي ينزل من <span className="math">{"\\(+\\infty\\)"}</span> إلى <span className="math">{"\\(g(\\alpha)\\)"}</span>.<br />
                    - لما <span className="math">{"\\(m = \\alpha\\)"}</span>، المستقيم يستقر في القاع عند <span className="math">{"\\(y=g(\\alpha)\\)"}</span>.<br />
                    - لما <span className="math">{"\\(m\\)"}</span> يمسح <span className="math">{"\\(]\\alpha, +\\infty[\\)"}</span>، المستقيم يصعد مجدداً.
                </div>
                <div className="right-col">
                    <strong>جدول المناقشة الشاملة (من <span className="math">{"\\(-\\infty\\)"}</span> إلى <span className="math">{"\\(+\\infty\\)"}</span>):</strong><br />
                    <ul style={{ paddingRight: "15px", margin: "5px 0" }}>
                        <li>لما <span className="math">{"\\(m \\in ]-\\infty, \\alpha[ \\cup ]\\alpha, +\\infty[\\)"}</span>:<br/> المعادلة تقبل حلين متمايزين (المستقيم يقطع المنحنى في نقطتين). أحدهما دائماً هو <span className="math">{"\\(x = m\\)"}</span>.</li>
                        <li>لما <span className="math">{"\\(m = \\alpha\\)"}</span>:<br/> المعادلة تقبل حلاً مضاعفاً <span className="math">{"\\(x = \\alpha\\)"}</span> لأن <span className="math">{"\\(y=g(\\alpha)\\)"}</span> هو مماس أفقي للمنحنى.</li>
                    </ul>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> حتماً <span className="math">{"\\(x = m\\)"}</span> هو دائماً حل بديهي للمعادلة <span className="math">{"\\(g(x)=g(m)\\)"}</span>! وهذا يؤكد أن التقاطع مضمون دائماً.
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    وجود متغير <span className="math">{"\\(m\\)"}</span> في طرف، ومعادلة معقدة في الطرف الآخر، يترجم إلى ضرورة تبسيط المعادلة وإيصالها لشكل مناقشة مألوف.
                </div>
                <div className="right-col">
                    المعادلة تحتوي على وسيط <span className="math">{"\\(m\\)"}</span>، مما يستدعي إجراء مناقشة بيانية بعد التبسيط.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong> <span className="math">{"\\(f(x)\\)"}</span> فيها لوغاريتم، بينما المعادلة المعطاة فيها <span className="math">{"\\(e^{-m}\\)"}</span>.<br />
                    <strong>الاستراتيجية:</strong> أعزل القيمة المطلقة ثم أُدخل الدالة اللوغاريتمية على الطرفين لإيجاد الرابط بين العبارتين.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ |e^x - 1| = e^{-m} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أجري هذه التحويلات على المعادلة <strong>خصيصاً</strong> لكي تظهر لي عبارة الدالة <span className="math">{"\\(f(x)\\)"}</span> واضحة للتمكن من مناقشتها بيانياً.
                    </div>
                    أُدخل <span className="math">{"\\(\\ln\\)"}</span> على الطرفين (كلاهما موجب): <span className="math">{"\\(\\ln|e^x - 1| = -m\\)"}</span>.<br />
                    أضرب في سالب وأضيف <span className="math">{"\\(x\\)"}</span> للطرفين لتشكيل الدالة: <span className="math">{"\\(x - \\ln|e^x - 1| = x + m\\)"}</span>.<br />
                    وهكذا نحصل على: <span className="math">{"\\(f(x) = x + m\\)"}</span>.
                </div>
                <div className="right-col">
                    بإدخال اللوغاريتم النيبيري على الطرفين:
                    <div className="math-block">{"\\[ \\ln|e^x - 1| = -m \\]"}</div>
                    <div className="math-block">{"\\[ -\\ln|e^x - 1| = m \\implies x - \\ln|e^x - 1| = x + m \\]"}</div>
                    إذن: <span className="math">{"\\(f(x) = x + m\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بظهور <span className="math">{"\\(f(x) = x + m\\)"}</span>، أصبح بإمكاني مباشرة ربطها بالمستقيمات المقاربة المائلة ومناقشة الحلول بسهولة.
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    دراسة الإشارة لدالة تتضمن تركيبات لوغاريتمية وحدودية تترجم غالباً إلى الاستعانة بجدول التغيرات واستنتاج الإشارة من القيمة الحدية.
                </div>
                <div className="right-col">
                    لا يمكن إيجاد الإشارة جبرياً مباشرة، فنلجأ لدراسة التغيرات.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    حساب المشتقة ومعرفة متى تنعدم هو المفتاح للوصول إلى جدول التغيرات.
                </div>
                <div className="right-col">
                    ربط الإشارة بالقيمة الحدية الصغرى.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أنا أدرس اتجاه التغير <strong>ليس</strong> حباً في المشتقة، بل لأصل إلى القيمة الحدية الصغرى التي ستحدد لي إشارة الدالة بأكملها.
                    </div>
                    أشتق الدالة: <span className="math">{"\\(g'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}\\)"}</span>.<br />
                    في المجال <span className="math">{"\\(]0, +\\infty[\\)"}</span>، الإشارة تعتمد على <span className="math">{"\\(x-1\\)"}</span>.<br />
                    إذن <span className="math">{"\\(g\\)"}</span> متناقصة حتى 1، ثم متزايدة.
                </div>
                <div className="right-col">
                    <span className="math">{"\\(g'(x) = \\frac{x-1}{x}\\)"}</span>. تنعدم عند 1 وتكون سالبة قبله وموجبة بعده.<br />
                    الدالة تقبل قيمة حدية صغرى عند <span className="math">{"\\(x=1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بما أن أدنى نقطة يبلغها المنحنى هي 0، فهذا يثبت فوراً أن الدالة موجبة تماماً كما أردنا إثباته.
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
                    استنتاج اتجاه تغير الدالة المركبة <span className="math">{"\\(h\\)"}</span> انطلاقاً من الدالة <span className="math">{"\\(f\\)"}</span> والدالة المربع.
                </div>
                <div className="right-col">
                    الهدف: دراسة تغيرات <span className="math">{"\\(h(x) = f(x^2)\\)"}</span>.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    كلمة "تغيرات دالة مركبة" تترجم رياضياً إلى تطبيق قانون مشتقة الدالة المركبة.<br />
                    القاعدة: <span className="math">{"\\([f(u(x))]' = u'(x) \\cdot f'(u(x))\\)"}</span>.
                </div>
                <div className="right-col">
                    نشتق الدالة <span className="math">{"\\(h\\)"}</span>:
                    <div className="math-block">{"\\[ h'(x) = 2x \\cdot f'(x^2) \\]"}</div>
                </div>
            </div>
                        <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    مشتقة الدالة المركبة تعتمد على مشتقة الدالة الداخلية <span className="math">{"\\(x^2\\)"}</span> ومشتقة الدالة الخارجية <span className="math">{"\\(f\\)"}</span>.
                </div>
                <div className="right-col">
                    تطبيق قانون: <span className="math">{"\\(h'(x) = 2x \\cdot f'(x^2)\\)"}</span>.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أقوم بضرب مشتقة ما بداخل القوس في المشتقة الخارجية <strong>لأن</strong> هذه هي الطريقة الوحيدة لتحديد إشارة الدالة المركبة بدقة.
                    </div>
                    معطى أن <span className="math">{"\\(f'(x) = x(x-2)\\)"}</span>. إذن <span className="math">{"\\(f'(x^2) = x^2(x^2-2)\\)"}</span>.<br />
                    ومنه <span className="math">{"\\(h'(x) = 2x \\cdot x^2 (x^2-2) = 2x^3 (x-\\sqrt{2})(x+\\sqrt{2})\\)"}</span>.<br />
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(f'(X) = X(X-2)\\)"}</span> نعوض <span className="math">{"\\(X = x^2\\)"}</span>:<br />
                    <div className="math-block">{"\\[ h'(x) = 2x \\left( x^2(x^2-2) \\right) = 2x^3(x^2-2) \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    الآن أدرس إشارة هذه العبارة ببساطة لتحديد فترات التزايد والتناقص لـ <span className="math">{"\\(h\\)"}</span>. الجذور واضحة ومنطقية.
                </div>
                <div className="right-col">
                    تحديد الإشارة يتم عبر دراسة جذور المعادلة: <span className="math">{"\\(x=0, x=\\sqrt{2}, x=-\\sqrt{2}\\)"}</span> لجدول الإشارات.
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    حل معادلة تفاضلية تترجم إلى البحث عن دوال تحقق العلاقة المعطاة بين الدالة ومشتقاتها.
                </div>
                <div className="right-col">
                    حل المعادلة التفاضلية <span className="math">{"\\(y'' + 2y' + y = 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    المعادلة من الرتبة الثانية خطية ذات معاملات ثابتة. نحتاج لحساب المميز للمعادلة المميزة.
                </div>
                <div className="right-col">
                    المعادلة المميزة هي <span className="math">{"\\(r^2 + 2r + 1 = 0\\)"}</span>.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب المشتقة الأولى والثانية بدقة <strong>لغرض</strong> تعويضهما في المعادلة التفاضلية والتأكد من أن المجموع يساوي الصفر.
                    </div>
                    أشتق الأولى: <span className="math">{"\\(f'(x) = e^{-x} - (x+1)e^{-x} = -x e^{-x}\\)"}</span>.<br />
                    أشتق الثانية: <span className="math">{"\\(f''(x) = -e^{-x} + x e^{-x} = (x-1)e^{-x}\\)"}</span>.<br />
                    أعوض في المعادلة: <span className="math">{"\\((x-1)e^{-x} + 2(-x e^{-x}) + (x+1)e^{-x}\\)"}</span>.
                </div>
                <div className="right-col">
                    نحسب المشتقات:
                    <div className="math-block">{"\\[ y' = -xe^{-x} \\]"}</div>
                    <div className="math-block">{"\\[ y'' = (x-1)e^{-x} \\]"}</div>
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد معادلات المماسات التي تمر بنقطة خارجية لا تنتمي بالضرورة للمنحنى.
                </div>
                <div className="right-col">
                    الهدف: إيجاد المماسات المارّة بالنقطة <span className="math">{"\\(A(0,-1)\\)"}</span>.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    الخطأ الشائع هنا هو اعتبار 0 فاصلة نقطة التماس. لا، النقطة <span className="math">{"\\(A(0,-1)\\)"}</span> تنتمي للمماس ولا تنتمي بالضرورة للمنحنى (يمكن التحقق: <span className="math">{"\\(f(0)=3 \\ne -1\\)"}</span>).<br />
                    أفرض نقطة التماس هي <span className="math">{"\\(x_0\\)"}</span>.
                </div>
                <div className="right-col">
                    نكتب معادلة المماس عند النقطة ذات الفاصلة <span className="math">{"\\(x_0\\)"}</span>:
                    <div className="math-block">{"\\[ y = f'(x_0)(x - x_0) + f(x_0) \\]"}</div>
                    بما أن المماس يمر بالنقطة <span className="math">{"\\(A(0, -1)\\)"}</span>، فإن إحداثياتها تحقق المعادلة:
                    <div className="math-block">{"\\[\\begin{aligned} -1 &= f'(x_0)(0 - x_0) + f(x_0) \\\\\\\\ &\\implies -x_0 f'(x_0) + f(x_0) = -1 \\end{aligned}\\]"}</div>
                </div>
            </div>
                        <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    معادلة المماس تعتمد كلياً على فاصلة نقطة التماس المجهولة <span className="math">{"\\(x_0\\)"}</span>. سأعوض إحداثيات <span className="math">{"\\(A\\)"}</span> لتشكيل معادلة مجهولها <span className="math">{"\\(x_0\\)"}</span>.
                </div>
                <div className="right-col">
                    تعويض <span className="math">{"\\(x=0\\)"}</span> و <span className="math">{"\\(y=-1\\)"}</span> في معادلة المماس العامة لإيجاد <span className="math">{"\\(x_0\\)"}</span>.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أعوض إحداثيات النقطة <span className="math">{"\\(A\\)"}</span> في معادلة المماس العامة <strong>لأحصل</strong> على معادلة مجهولها الوحيد هو <span className="math">{"\\(x_0\\)"}</span> (فاصلة نقطة التماس المجهولة).
                    </div>
                    أحسب <span className="math">{"\\(f'(x)\\)"}</span>: <span className="math">{"\\(\\frac{2x(x+1)-(x^2+3)}{(x+1)^2} = \\frac{x^2+2x-3}{(x+1)^2}\\)"}</span>.<br />
                    أعوض في المعادلة السابقة.
                </div>
                <div className="right-col">
                    مشتقة الدالة: <span className="math">{"\\(f'(x) = \\frac{x^2+2x-3}{(x+1)^2}\\)"}</span>.<br />
                    نعوض في المعادلة:
                    <div className="math-block">{"\\[ \\frac{x_0^2+3}{x_0+1} - x_0 \\frac{x_0^2+2x_0-3}{(x_0+1)^2} = -1 \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بعد حل المعادلة وإيجاد <span className="math">{"\\(x_0 = -0.5\\)"}</span>، أصبحت قادراً على كتابة معادلة المماس النهائية بكل بساطة.
                    </div>
                    بتوحيد المقامات:
                    <div className="math-block">{"\\[\\frac{(x_0^2+3)(x_0+1) - x_0(x_0^2+2x_0-3)}{(x_0+1)^2} = -1\\]"}</div>
                    البسط:
                    <div className="math-block">{"\\[\\begin{aligned} &x_0^3+x_0^2+3x_0+3 - x_0^3 - 2x_0^2 + 3x_0 \\\\\\\\ &= -x_0^2+6x_0+3 \\end{aligned}\\]"}</div>
                    وبالتعويض:
                    <div className="math-block">{"\\[-x_0^2+6x_0+3 = -x_0^2-2x_0-1\\]"}</div>
                    أختزل <span className="math">{"\\(-x_0^2\\)"}</span> من الطرفين:
                    <div className="math-block">{"\\[\\begin{aligned} 6x_0 + 3 &= -2x_0 - 1 \\\\\\\\ \\implies 8x_0 &= -4 \\\\\\\\ \\implies x_0 &= -\\frac{1}{2} \\end{aligned}\\]"}</div>
                    يوجد مماس وحيد فاصلة نقطة تماسه <span className="math">{"\\(-0.5\\)"}</span>.<br />
                    معادلته: أعوض <span className="math">{"\\(-0.5\\)"}</span> في <span className="math">{"\\(f'\\)"}</span> تعطي <span className="math">{"\\(-15\\)"}</span>. <span className="math">{"\\(y = -15(x - 0) - 1 = -15x - 1\\)"}</span>.
                </div>
                <div className="right-col">
                    بتوحيد المقامات ونشر البسط نجد:
                    <div className="math-block">{"\\[\\begin{aligned} \\frac{-x_0^2+6x_0+3}{(x_0+1)^2} &= -1 \\\\\\\\ -x_0^2+6x_0+3 &= -x_0^2-2x_0-1 \\end{aligned}\\]"}</div>
                    <div className="math-block">{"\\[ 8x_0 = -4 \\implies x_0 = -\\frac{1}{2} \\]"}</div>
                    نحسب <span className="math">{"\\(f'(-\\frac{1}{2}) = -15\\)"}</span>. <br />
                    معادلة المماس هي: <span className="math">{"\\(y = -15x - 1\\)"}</span>.
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات العلاقة <span className="math">{"\\(f(2a-x) + f(x) = 2b\\)"}</span> أي <span className="math">{"\\(f(2-x) + f(x) = 0\\)"}</span>.
                </div>
                <div className="right-col">
                    المطلوب إثبات أن <span className="math">{"\\(f(2-x) + f(x) = 0\\)"}</span>.
                </div>
            </div>
                        <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    إثبات أن نقطة هي مركز تناظر يترجم جبرياً إلى إثبات صحة العلاقة <span className="math">{"\\(f(2a-x) + f(x) = 2b\\)"}</span>.
                </div>
                <div className="right-col">
                    تطبيق قانون مركز التناظر: <span className="math">{"\\(f(2 - x) + f(x) = 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    لدينا الإحداثيات <span className="math">{"\\(a=1\\)"}</span> و <span className="math">{"\\(b=0\\)"}</span>. سأعوض في الدالة وأقوم بتوحيد المقامات والتبسيط للتأكد من المجموع.
                </div>
                <div className="right-col">
                    نعوض <span className="math">{"\\(a=1, b=0\\)"}</span> ونحسب المجموع الجبري.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب <span className="math">{"\\(f(2-x)\\)"}</span> <strong>لأصل</strong> إلى إثبات العلاقة <span className="math">{"\\(f(2-x) + f(x) = 0\\)"}</span>، وهذا يكفي لإثبات أن <span className="math">{"\\(\\Omega\\)"}</span> مركز تناظر.
                    </div>
                    أحسب <span className="math">{"\\(f(2-x) = \\frac{2(2-x)^2 - 4(2-x) + 5}{(2-x)-1} = \\frac{2x^2 - 4x + 5}{1-x}\\)"}</span> بعد التبسيط.<br />
                    ألاحظ أن <span className="math">{"\\(f(2-x) = -f(x)\\)"}</span> لتغير إشارة المقام فقط. إذن المجموع يؤول للصفر حتماً.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[\\begin{aligned} f(2-x) &= \\frac{2(2-x)^2-4(2-x)+5}{1-x} \\\\\\\\ &= \\frac{2x^2-4x+5}{-(x-1)} = -f(x) \\end{aligned}\\]"}</div>
                    إذن <span className="math">{"\\(f(2-x) + f(x) = 0\\)"}</span>، و <span className="math">{"\\(\\Omega\\)"}</span> مركز تناظر.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    المجموع معدوم تماماً، مما يثبت أن المنحنى متناظر فعلاً بالنسبة للنقطة المعطاة.
                </div>
                <div className="right-col">
                    النتيجة <span className="math">{"\\(0\\)"}</span> تؤكد أن <span className="math">{"\\(\\Omega(1,0)\\)"}</span> مركز تناظر.
                </div>
            </div>

            {/* Q10 */}
            <div className="sub-question">التمرين 10: إثبات أن <span className="math">{"\\(x e^{1-x} \\le x\\)"}</span> على <span className="math">{"\\([0, 1]\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات متراجحة أسية على مجال معين.
                </div>
                <div className="right-col">
                    الهدف: إثبات <span className="math">{"\\(x e^{1-x} \\le x\\)"}</span> على <span className="math">{"\\([0,1]\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    المتراجحات تترجم عادة بدراسة إشارة الفرق أو بناء الدالة خطوة بخطوة انطلاقاً من حصر المتغير <span className="math">{"\\(x\\)"}</span>.
                </div>
                <div className="right-col">
                    دراسة حصر المتغيرات أو إشارة الفرق.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    المعطى الأساسي هو أن <span className="math">{"\\(x \\in [0,1]\\)"}</span>. سأبني العبارة انطلاقاً من هذا الحصر للوصول للمطلوب.
                </div>
                <div className="right-col">
                    نبدأ من <span className="math">{"\\(0 \\le x \\le 1\\)"}</span> ونبني الأسية المضروبة فيه.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحاول دراسة إشارة <span className="math">{"\\(e^{1-x}\\)"}</span> بالمقارنة مع 1 <strong>لأستنتج</strong> المتراجحة النهائية المطلوبة بعد الضرب في <span className="math">{"\\(x\\)"}</span>.
                    </div>
                    بما أن <span className="math">{"\\(x \\in [0, 1]\\)"}</span>، يمكنني قسمة الطرفين على <span className="math">{"\\(x\\)"}</span> الموجب دون تغيير المتراجحة (مع العلم بأنها محققة عند الصفر 0=0).<br />
                    يتبقى إثبات <span className="math">{"\\(e^{1-x} \\le 1\\)"}</span>.
                </div>
                <div className="right-col">
                    من أجل <span className="math">{"\\(x \\in [0, 1]\\)"}</span>:<br />
                    لدينا <span className="math">{"\\(x \\le 1 \\implies -x \\ge -1 \\implies 1-x \\ge 0\\)"}</span>... مهلاً.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    لحظة! إذا كان <span className="math">{"\\(x \\in [0, 1]\\)"}</span> فإن <span className="math">{"\\(1-x \\ge 0\\)"}</span>. وإذا كان الأس موجباً فإن <span className="math">{"\\(e^{1-x} \\ge 1\\)"}</span>.<br />
                    إذن <span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span> وليس <span className="math">{"\\(\\le\\)"}</span>! يبدو أن هناك خطأ مطبعي في نص التمرين الأصلي (يجب أن يكون المجال أكبر من 1 لتكون المتراجحة صحيحة، أو المتراجحة بالعكس). أكتب التحليل بصدق.
                </div>
                <div className="right-col">
                    <strong>تصحيح منطقي:</strong> إذا كان <span className="math">{"\\(x \\in [0, 1]\\)"}</span> فإن <span className="math">{"\\(1-x \\ge 0\\)"}</span> وبالتالي <span className="math">{"\\(e^{1-x} \\ge e^0 = 1\\)"}</span>.<br />
                    بالضرب في <span className="math">{"\\(x\\)"}</span> الموجب نجد أن: <strong><span className="math">{"\\(x e^{1-x} \\ge x\\)"}</span></strong>.<br />
                    المتراجحة المطلوبة في السؤال تتناقض مع المنطق الرياضي الصحيح.
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
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    رسم منحنى دالة تحتوي على قيم مطلقة مركبة انطلاقاً من منحنى دالة معلومة.
                </div>
                <div className="right-col">
                    الهدف: استنتاج رسم <span className="math">{"\\(C_k\\)"}</span> انطلاقاً من <span className="math">{"\\(C_f\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    القيمة المطلقة للدالة ككل تترجم إلى تناظر بالنسبة لمحور الفواصل، بينما القيمة المطلقة للمتغير تترجم إلى زوجية الدالة وتناظرها بالنسبة لمحور التراتيب.
                </div>
                <div className="right-col">
                    تفكيك التحويلات الهندسية الناتجة عن القيمة المطلقة.
                </div>
            </div>
<div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    الدالة <span className="math">{"\\(f(x) = \\ln|x|\\)"}</span> هي أصلاً دالة زوجية، لأن <span className="math">{"\\(f(-x) = \\ln|-x| = \\ln|x| = f(x)\\)"}</span>.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(f(x) = \\ln|x|\\)"}</span> هي دالة زوجية، فإن <span className="math">{"\\(f(|x|) = f(x)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>🔔 تذكير بالهدف:</strong> أستغل زوجية الدالة للتخلص من القيمة المطلقة الداخلية، <strong>ليتبقى</strong> لي فقط التعامل مع القيمة المطلقة الخارجية لرسم المنحنى.
                    </div>
                    إذن العبارة <span className="math">{"\\(f(|x|)\\)"}</span> لا تضيف شيئاً للمنحنى لأن المنحنى متناظر أساساً بالنسبة لمحور التراتيب. <br />
                    يتبقى دراسة القيمة المطلقة الخارجية <span className="math">{"\\(|f(x)|\\)"}</span>.
                </div>
                <div className="right-col">
                    وعليه تصبح الدالة: <span className="math">{"\\(k(x) = |f(x)|\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: "0.85em" }}>
                        <strong>✅ تحقيق الهدف:</strong> بعد التبسيط إلى <span className="math">{"\\(|f(x)|\\)"}</span>، أصبح الرسم مباشراً بمجرد مناظرة الأجزاء السالبة لتصبح موجبة!
                    </div>
                    كيف أرسم <span className="math">{"\\(|f(x)|\\)"}</span>؟ أحتفظ بالأجزاء الموجبة من منحنى <span className="math">{"\\(f\\)"}</span> (فوق محور الفواصل)، وأناظر الأجزاء السالبة (تحت المحور) بالنسبة لمحور الفواصل.
                </div>
                <div className="right-col">
                    <strong>الإنشاء الهندسي:</strong><br />
                    - الأجزاء من <span className="math">{"\\((C_f)\\)"}</span> الواقعة فوق محور الفواصل أو عليه، نبقيها كما هي.<br />
                    - الأجزاء الواقعة تحت محور الفواصل، نعين نظيرتها بالنسبة لمحور الفواصل.
                </div>
            </div>
        </>
    );
};

export default Solution_DirectQuestions_Functions;
