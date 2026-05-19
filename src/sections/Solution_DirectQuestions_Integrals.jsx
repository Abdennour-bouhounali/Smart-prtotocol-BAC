import React from 'react';

const Solution_DirectQuestions_Integrals = () => {
    return (
        <>
            <div id="toc-sol-direct-integrals" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - الحساب التكاملي والمعادلات التفاضلية</div>


            {/* ============================================================
                EXERCISE 1: Primitive Functions
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — الدوال الأصلية</div>

            {/* Q1.1 */}
            <div className="sub-question">1) الدالة الأصلية لـ <span className="math">{"\\(f(x) = (x^2+1)e^x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد الدالة الأصلية لدالة من الشكل (كثير حدود <span className="math">{"\\(\\times\\)"}</span> أسية).
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\(F(x)\\)"}</span> بحيث <span className="math">{"\\(F'(x) = f(x)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    الدالة الأصلية تحافظ على نفس البنية: <span className="math">{"\\(F(x) = (ax^2+bx+c)e^x\\)"}</span>. إيجادها يترجم إلى عملية مطابقة بعد الاشتقاق.
                </div>
                <div className="right-col">
                    نضع الدالة الأصلية من الشكل المألوف:
                    <div className="math-block">{"\\[ F(x) = (ax^2+bx+c)e^x \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أشتق <span className="math">{"\\(F(x)\\)"}</span> المجهولة كجداء دالتين وأطابق معاملاتها مع <span className="math">{"\\(x^2+1\\)"}</span>.
                    </div>
                    المشتقة: <span className="math">{"\\(F'(x) = [ax^2 + (2a+b)x + (b+c)]e^x\\)"}</span>.<br />
                    بالمطابقة مع <span className="math">{"\\((x^2+1)e^x\\)"}</span>:<br />
                    <span className="math">{"\\(a=1\\)"}</span><br />
                    <span className="math">{"\\(2a+b=0 \\implies b=-2\\)"}</span><br />
                    <span className="math">{"\\(b+c=1 \\implies c=3\\)"}</span>
                </div>
                <div className="right-col">
                    نشتق ونطابق مع العبارة الأصلية:
                    <div className="math-block">{"\\[ F'(x) = [ax^2 + (2a+b)x + (b+c)]e^x \\]"}</div>
                    بالمطابقة: <span className="math">{"\\(a=1\\)"}</span>، <span className="math">{"\\(2a+b=0\\)"}</span>، <span className="math">{"\\(b+c=1\\)"}</span>.<br />
                    نجد: <span className="math">{"\\(a=1, b=-2, c=3\\)"}</span>.<br />
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أشتق النتيجة النهائية ذهنياً: <span className="math">{"\\((2x-2)e^x + (x^2-2x+3)e^x = (x^2+1)e^x\\)"}</span>. صحيحة 100%.
                </div>
                <div className="right-col">
                    <strong>النتيجة:</strong> <span className="math">{"\\(F(x) = (x^2-2x+3)e^x + C\\)"}</span>
                </div>
            </div>

            {/* Q1.2 */}
            <div className="sub-question">2) الدالة الأصلية لـ <span className="math">{"\\(f(x) = \\frac{\\ln x}{x}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد الدالة الأصلية لدالة كسرية تتضمن لوغاريتم.
                </div>
                <div className="right-col">
                    الهدف: إيجاد <span className="math">{"\\(F(x)\\)"}</span> بدلالة اللوغاريتم.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    تحويل الكسر إلى جداء لاكتشاف البنية المخفية: <span className="math">{"\\(u'(x) \\cdot u(x)^n\\)"}</span>.
                </div>
                <div className="right-col">
                    نعيد كتابة الدالة لتتضح القاعدة التراكبية:
                    <div className="math-block">{"\\[ f(x) = \\frac{1}{x} \\cdot \\ln x = u'(x) \\cdot u(x)^1 \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أطبق قانون <span className="math">{"\\(u' u^n\\)"}</span> لرفع القوة بدرجة واحدة والقسمة عليها.
                    </div>
                </div>
                <div className="right-col">
                    حيث <span className="math">{"\\(u(x) = \\ln x\\)"}</span> و <span className="math">{"\\(n=1\\)"}</span>.<br />
                    بتطبيق قاعدة الدوال الأصلية:
                    <div className="math-block">{"\\[ F(x) = \\frac{1}{2} (\\ln x)^2 + C \\]"}</div>
                </div>
            </div>

            {/* Q1.3 */}
            <div className="sub-question">3) الدالة الأصلية لـ <span className="math">{"\\(f(x) = \\cos^2 x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد دالة أصلية لدالة مثلثية مرفوعة لقوة.
                </div>
                <div className="right-col">
                    الهدف: إيجاد الدالة الأصلية لـ <span className="math">{"\\(\\cos^2 x\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    مكاملة دالة مثلثية مربعة يترجم مباشرة إلى ضرورة استعمال <strong>دساتير التحويل</strong> (تخفيض الدرجة) للتخلص من التربيع وتوليد دوال بسيطة مألوفة.
                </div>
                <div className="right-col">
                    باستعمال دساتير التحويل (تخفيض الدرجة):
                    <div className="math-block">{"\\[ \\cos^2 x = \\frac{1 + \\cos(2x)}{2} = \\frac{1}{2} + \\frac{1}{2}\\cos(2x) \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    أكامل كل جزء على حدة. <span className="math">{"\\(1/2\\)"}</span> تصبح <span className="math">{"\\(1/2 x\\)"}</span>، والدالة <span className="math">{"\\(\\cos(2x)\\)"}</span> تصبح <span className="math">{"\\(\\frac{1}{2} \\sin(2x)\\)"}</span>.
                </div>
                <div className="right-col">
                    بالمكاملة المباشرة لكل حد:
                    <div className="math-block">{"\\[ F(x) = \\frac{1}{2}x + \\frac{1}{4}\\sin(2x) + C \\]"}</div>
                </div>
            </div>

            {/* Q1.4 */}
            <div className="sub-question">4) الدالة الأصلية لـ <span className="math">{"\\(f(x) = \\frac{1}{x \\ln x}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    البحث عن شكل قياسي يسمح بإيجاد الأصلية.
                </div>
                <div className="right-col">
                    الهدف: إيجاد الأصلية باستعمال الشكل <span className="math">{"\\(\\frac{u'}{u}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    بما أن مشتقة اللوغاريتم هي <span className="math">{"\\(1/x\\)"}</span>، أفصل الكسر ليظهر كـ مشتقة مقسومة على دالة.
                </div>
                <div className="right-col">
                    نعيد كتابة الكسر:
                    <div className="math-block">{"\\[ f(x) = \\frac{\\frac{1}{x}}{\\ln x} = \\frac{u'(x)}{u(x)} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    القاعدة الصريحة تخبرنا أن الأصلية هي لوغاريتم القيمة المطلقة للمقام. النتيجة هي تركيب لوغاريتمي.
                </div>
                <div className="right-col">
                    بتطبيق القاعدة <span className="math">{"\\(\\int \\frac{u'}{u} = \\ln|u|\\)"}</span>:
                    <div className="math-block">{"\\[ F(x) = \\ln |\\ln x| + C \\]"}</div>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 2: Integration by Parts
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — المكاملة بالتجزئة</div>

            <div className="sub-question">حساب <span className="math">{"\\(I = \\int_1^e x^2 \\ln x \\, dx\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب تكامل لجداء دالتين (كثير حدود ولوغاريتم) ليس لهما علاقة اشتقاقية مباشرة.
                </div>
                <div className="right-col">
                    الهدف: حساب التكامل بتطبيق قانون المكاملة بالتجزئة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    عدم وجود علاقة مباشرة يترجم إلى استخدام <strong>المكاملة بالتجزئة</strong>. اختيار الدوال يخضع لقاعدة ALPES (اللوغاريتم يُشتق، كثير الحدود يُكامل).
                </div>
                <div className="right-col">
                    نطبق قانون: <span className="math">{"\\(\\int u v' = [uv] - \\int u' v\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أطبق القانون خطوة بخطوة للحصول على تكامل جديد أسهل حساباً.
                    </div>
                </div>
                <div className="right-col">
                    نضع:<br />
                    <span className="math">{"\\(u(x) = \\ln x \\implies u'(x) = \\frac{1}{x}\\)"}</span><br />
                    <span className="math">{"\\(v'(x) = x^2 \\implies v(x) = \\frac{x^3}{3}\\)"}</span><br />
                    <div className="math-block">{"\\[ I = \\left[ \\frac{x^3}{3} \\ln x \\right]_1^e - \\int_1^e \\frac{x^2}{3} dx \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التكامل المتبقي سهل وهو <span className="math">{"\\(x^2/3\\)"}</span>. أصلّيتها <span className="math">{"\\(x^3/9\\)"}</span>. بالتعويض الصحيح نجد النتيجة الدقيقة.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ I = \\left( \\frac{e^3}{3}(1) - 0 \\right) - \\left[ \\frac{x^3}{9} \\right]_1^e \\]"}</div>
                    <div className="math-block">{"\\[\\begin{aligned} I &= \\frac{e^3}{3} - \\left( \\frac{e^3}{9} - \\frac{1}{9} \\right) \\\\\\\\ &= \\frac{2e^3 + 1}{9} \\end{aligned}\\]"}</div>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 3: Areas
            ============================================================ */}
            <div className="question-header no-break">التمرين 3 — حساب المساحات</div>

            <div className="sub-question">مساحة الحيز المحصور بـ <span className="math">{"\\(f(x) = e^x - 1\\)"}</span> ومحور الفواصل على <span className="math">{"\\([0, \\ln 2]\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب مساحة الحيز الهندسي بدلالة وحدات المساحة (u.a).
                </div>
                <div className="right-col">
                    الهدف: حساب التكامل المعبر عن المساحة <span className="math">{"\\(A = \\int_0^{\\ln 2} |f(x)| dx\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    حساب المساحة يترجم إلى دراسة الإشارة أولاً لمعرفة وضعية المنحنى بالنسبة لمحور الفواصل للتخلص من القيمة المطلقة.
                </div>
                <div className="right-col">
                    ندرس إشارة الدالة على المجال المعطى.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    بما أن <span className="math">{"\\(x \\ge 0\\)"}</span>، فإن <span className="math">{"\\(e^x \\ge 1\\)"}</span>. إذن الدالة موجبة تماماً على المجال. أكامل الدالة كما هي دون إشارات سالبة.
                </div>
                <div className="right-col">
                    لما <span className="math">{"\\(x \\in [0, \\ln 2]\\)"}</span>، فإن <span className="math">{"\\(f(x) \\ge 0\\)"}</span>.<br />
                    إذن <span className="math">{"\\(A = \\int_0^{\\ln 2} (e^x - 1) dx\\)"}</span>.<br />
                    <div className="math-block">{"\\[\\begin{aligned} A &= \\left[ e^x - x \\right]_0^{\\ln 2} \\\\\\\\ &= (e^{\\ln 2} - \\ln 2) - (e^0 - 0) \\end{aligned}\\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> النتيجة <span className="math">{"\\(1 - \\ln 2\\)"}</span> عدد موجب (حوالي 0.3) وهذا منطقي جداً لمساحة.
                    </div>
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ A = (2 - \\ln 2) - 1 = 1 - \\ln 2 \\; (u.a) \\]"}</div>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 4: Differential Equations
            ============================================================ */}
            <div className="question-header no-break">التمرين 4 — المعادلات التفاضلية</div>

            {/* Q4.1 */}
            <div className="sub-question">1) <span className="math">{"\\(y' + 2y = 0\\)"}</span> مع <span className="math">{"\\(y(0)=1\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد الحل الخاص الذي يحقق المعادلة التفاضلية والشرط الابتدائي.
                </div>
                <div className="right-col">
                    الهدف: إيجاد الدالة <span className="math">{"\\(y(x)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    أكتبها بالشكل القياسي <span className="math">{"\\(y' = -2y\\)"}</span> وأطبق القانون المباشر. ثم أستعمل الشرط الابتدائي لإيجاد الثابت <span className="math">{"\\(C\\)"}</span>.
                </div>
                <div className="right-col">
                    المعادلة من الشكل <span className="math">{"\\(y' = ay\\)"}</span> حيث <span className="math">{"\\(a = -2\\)"}</span>.<br />
                    الحل العام: <span className="math">{"\\(y(x) = C e^{-2x}\\)"}</span>.<br />
                    لدينا <span className="math">{"\\(y(0) = 1 \\implies C e^0 = 1 \\implies C = 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أشتق الحل الخاص وأجمعه مع ضعفه لأجد الصفر تماماً. النتيجة مطابقة.
                </div>
                <div className="right-col">
                    الحل الخاص: <span className="math">{"\\(y(x) = e^{-2x}\\)"}</span>.
                </div>
            </div>

            {/* Q4.2 */}
            <div className="sub-question">2) <span className="math">{"\\(y'' + 4y = 0\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    معادلة من الرتبة الثانية دون المشتقة الأولى تترجم إلى حلول دورية (دوال جيبية). أطابق مع <span className="math">{"\\(y'' + \\omega^2 y = 0\\)"}</span>.
                </div>
                <div className="right-col">
                    بالمطابقة مع <span className="math">{"\\(y'' + \\omega^2 y = 0\\)"}</span> نجد <span className="math">{"\\(\\omega = 2\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    بما أن <span className="math">{"\\(\\omega = 2\\)"}</span>، فالحل هو ترکیب خطي من الـ cos والـ sin بنفس الزاوية.
                </div>
                <div className="right-col">
                    الحل العام هو:
                    <div className="math-block">{"\\[ y(x) = A \\cos(2x) + B \\sin(2x) \\]"}</div>
                    حيث <span className="math">{"\\(A, B \\in \\mathbb{R}\\)"}</span>.
                </div>
            </div>

            {/* Q4.3 */}
            <div className="sub-question">3) <span className="math">{"\\(y' = 2y + 3\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    المعادلة من الشكل القياسي <span className="math">{"\\(y' = ay + b\\)"}</span>. أعوض مباشرة في الحل النموذجي <span className="math">{"\\(Ce^{ax} - \\frac{b}{a}\\)"}</span>.
                </div>
                <div className="right-col">
                    المعادلة من الشكل <span className="math">{"\\(y' = ay + b\\)"}</span> حيث <span className="math">{"\\(a = 2\\)"}</span> و <span className="math">{"\\(b = 3\\)"}</span>.<br />
                    الحل العام:
                    <div className="math-block">{"\\[ y(x) = C e^{2x} - \\frac{3}{2} \\]"}</div>
                </div>
            </div>



        </>
    );
};

export default Solution_DirectQuestions_Integrals;
