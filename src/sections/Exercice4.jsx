import React from 'react';
import signeOfGImg from '../images/signe_of_g.png';
import variationTableOfFImg from '../images/variation_table_of_f.png';

const Exercice4 = () => {
    return (
        <>
            <div id="toc-exercice4" className="exercise-title">
                التمرين 4 — دراسة دالة لوغاريتمية ومتتالية تكاملية
            </div>

            {/* ============================================================
                STATEMENT
            ============================================================ */}
            <div className="exercise-statement_2">


                {/* Part I */}
                <div style={{ marginBottom: '5x' }}>
                    <strong>I)</strong> <span className="math">{"\\(g\\)"}</span> الدالة العددية المعرفة على المجال <span className="math">{"\\(]0; +\\infty[\\)"}</span> بـ: <span className="math">{"\\(g(x) = 1 + x^2 + 2\\ln x\\)"}</span>.
                    <div style={{ paddingRight: '20px', marginTop: '5px' }}>
                        1) ادرس اتجاه تغير الدالة <span className="math">{"\\(g\\)"}</span>.
                        <br />
                        2) بيّن أنّ المعادلة <span className="math">{"\\(g(x) = 0\\)"}</span> تقبل في المجال <span className="math">{"\\(]0,52 ; 0,53[\\)"}</span> حلاً وحيداً <span className="math">{"\\(\\alpha\\)"}</span>.
                        <br />
                        3) استنتج إشارة <span className="math">{"\\(g(x)\\)"}</span> على المجال <span className="math">{"\\(]0; +\\infty[\\)"}</span>.
                    </div>
                </div>

                {/* Part II */}
                <div style={{ marginBottom: '5px' }}>
                    <strong>II)</strong> <span className="math">{"\\(f\\)"}</span> الدالة العددية المعرفة على المجال <span className="math">{"\\(]0; +\\infty[\\)"}</span> بـ: <span className="math">{"\\(f(x) = -x + \\dfrac{3+2\\ln x}{x}\\)"}</span>.

                    <span className="math">{"\\((C_f)\\)"}</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد و المتجانس <span className="math">{"\\((O;\\vec{i},\\vec{j})\\)"}</span>.
                    <div style={{ paddingRight: '20px', marginTop: '5px' }}>
                        1) احسب <span className="math">{"\\(\\lim_{x\\to0^+} f(x)\\)"}</span> و <span className="math">{"\\(\\lim_{x\\to+\\infty} f(x)\\)"}</span>.
                        <br />
                        2) أ) بيّن أنّه من أجل كل عدد حقيقي <span className="math">{"\\(x\\)"}</span> من المجال <span className="math">{"\\(]0; +\\infty[\\)"}</span>: <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                        <br />
                        ب) شكّل جدول تغيّرات الدالة <span className="math">{"\\(f\\)"}</span>.
                        <br />
                        جـ) تحقّق أنّ: <span className="math">{"\\(f(\\alpha) = 2\\left(\\dfrac{1}{\\alpha} - \\alpha\\right)\\)"}</span> ثم عيّن حصراً له.
                        <br />
                        3) أ) احسب <span className="math">{"\\(\\lim_{x\\to+\\infty} [f(x) + x]\\)"}</span> ثمّ فسّر النتيجة هندسياً.
                        <br />
                        ب) ادرس وضعية <span className="math">{"\\((C_f)\\)"}</span> بالنسبة إلى مستقيمه المقارب المائل <span className="math">{"\\((\\Delta)\\)"}</span>.
                        <br />
                        جـ) بيّن أنّ <span className="math">{"\\((C_f)\\)"}</span> يقبل مماساً <span className="math">{"\\((T)\\)"}</span> يوازي <span className="math">{"\\((\\Delta)\\)"}</span> يطلب كتابة معادلة ديكارتية له.
                        <br />
                        4) نقبل أنّ <span className="math">{"\\((C_f)\\)"}</span> يقطع حامل محور الفواصل في نقطتين فاصلتيهما <span className="math">{"\\(x_0\\)"}</span> و <span className="math">{"\\(x_1\\)"}</span> حيث:
                        <div style={{ marginRight: '20px', margin: '5px 0' }}>
                            <span className="math">{"\\(0,22 < x_0 < 0,23\\)"}</span> و <span className="math">{"\\(2,11 < x_1 < 2,13\\)"}</span>.
                        </div>
                        أنشئ <span className="math">{"\\((T)\\)"}</span> ، <span className="math">{"\\((\\Delta)\\)"}</span> و <span className="math">{"\\((C_f)\\)"}</span>.
                        <br />
                        5) <span className="math">{"\\(m\\)"}</span> وسيط حقيقي. ناقش بيانياً و حسب قيم <span className="math">{"\\(m\\)"}</span> ، عدد حلول المعادلة: <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span>.
                    </div>
                </div>

                {/* Part III */}
                <div>
                    <strong>III)</strong> من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span> نضع: <span className="math">{"\\(u_n = \\int_{e^n}^{e^{n+1}} [f(x)+x]dx\\)"}</span>.
                    <div style={{ paddingRight: '20px', marginTop: '0px' }}>
                        1) بيّن أنّه من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span>: <span className="math">{"\\(u_n > 0\\)"}</span>.
                        <br />
                        2) أعطِ تفسيراً هندسياً للعدد <span className="math">{"\\(u_0\\)"}</span>.
                        <br />
                        3) احسب <span className="math">{"\\(u_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                        <br />
                        4) نضع: <span className="math">{"\\(S_n = u_0 + u_1 + u_2 + \\dots + u_n\\)"}</span>. احسب <span className="math">{"\\(S_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                    </div>
                </div>
            </div>

            {/* ============================================================
                GLOBAL RADAR
            ============================================================ */}
            <div className="radar-box" style={{ marginTop: '14px' }}>
                <div className="radar-box-title">
                    النظرة الشمولية للتمرين (SMART Radar)
                </div>

                <ul className="radar-list">
                    <li>
                        <strong>أول شيء ألاحظه:</strong>
                        التمرين يربط بشكل وثيق جداً بين دالتين: الدالة المساعدة
                        <span className="math">{"\\(g\\)"}</span>
                        والدالة الرئيسية
                        <span className="math">{"\\(f\\)"}</span>.
                        هذا الهيكل كلاسيكي جداً في البكالوريا، حيث تُستخدم إشارة الدالة المساعدة لتحديد إشارة مشتقة الدالة الرئيسية.
                    </li>

                    <li>
                        <strong>الخطة العامة للتمرين:</strong>
                        <br />
                        • الجزء I: تحليل سلوك الدالة
                        <span className="math">{"\\(g\\)"}</span>
                        (اتجاه التغير، الجذور، الإشارة).
                        <br />
                        • الجزء II: توظيف نتائج الجزء I لدراسة اتجاه تغير
                        <span className="math">{"\\(f\\)"}</span>،
                        وتحديد مقارباتها ومماساتها ونقاط تقاطعها مع المحاور.
                        <br />
                        • الجزء III: دراسة متتالية تكاملية مرتبطة مباشرة بالفرق بين المنحنى البياني والمقارب المائل.
                    </li>

                    <li>
                        <strong>العلاقة المفتاحية:</strong>
                        الصيغة
                        <span className="math">{"\\(f'(x)=\\frac{-g(x)}{x^2}\\)"}</span>
                        هي الرابط العصبي للتمرين. المقام دائماً موجب، لذا فإن اتجاه تغير
                        <span className="math">{"\\(f\\)"}</span>
                        يُعطى مباشرة بعكس إشارة
                        <span className="math">{"\\(g\\)"}</span>.
                    </li>

                    <li>
                        <strong>في المتتاليات التكاملية (الجزء III):</strong>
                        العبارة المطلوبة هي تكامل الفرق
                        <span className="math">{"\\(f(x)+x\\)"}</span>.
                        سألاحظ أن هذا الفرق هو
                        <span className="math">{"\\(\\frac{3+2\\ln x}{x}\\)"}</span>،
                        وهي عبارة سهلة التفكيك إلى دوال أصلية شهيرة.
                    </li>
                </ul>
            </div>

            {/* ============================================================
                PART I — Q1
            ============================================================ */}
            <div className="question-header">
                الجزء I — دراسة الدالة المساعدة <span className="math" style={{ color: '#fff' }}>{"\\(g\\)"}</span>
            </div>

            <div className="sub-question">
                1) دراسة اتجاه تغير الدالة <span className="math">{"\\(g\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* Q1 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    "اتجاه التغير" يعني البحث عن إشارة المشتقة.
                    الدالة هي مجموع دوال مألوفة:
                    <span className="math">{"\\(g(x) = 1 + x^2 + 2\\ln x\\)"}</span>.
                    سأطبق قواعد الاشتقاق الأساسية:
                    <br />• مشتقة الثابت
                    <span className="math">{"\\(1\\)"}</span> هي
                    <span className="math">{"\\(0\\)"}</span>.
                    <br />• مشتقة
                    <span className="math">{"\\(x^2\\)"}</span> هي
                    <span className="math">{"\\(2x\\)"}</span>.
                    <br />• مشتقة
                    <span className="math">{"\\(2\\ln x\\)"}</span> هي
                    <span className="math">{"\\(2 \\cdot \\frac{1}{x} = \\frac{2}{x}\\)"}</span>.
                </div>
                <div className="right-col">
                    الدالة
                    <span className="math">{"\\(g\\)"}</span>
                    قابلة للاشتقاق على
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>
                    كمجموع دوال قابلة للاشتقاق (دالة كثير حدود ودالة لوغاريتمية).
                </div>
            </div>

            {/* Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    أريد دراسة اتجاه تغير الدالة
                    <span className="math">{"\\(g(x)\\)"}</span>.
                    هذا يتطلب حساب الدالة المشتقة
                    <span className="math">{"\\(g'(x)\\)"}</span>
                    ودراسة إشارتها على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                    الهدف واضح وبسيط، وسأحاول الوصول إلى صيغة جبرية يسهل استنتاج إشارتها بالنظر.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب
                    <span className="math">{"\\(g'(x)\\)"}</span>
                    ودراسة إشارتها على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    المجال هو
                    <span className="math">{"\\(x > 0\\)"}</span>.
                    هذه المعلومة ذهبية! بما أن المتغير
                    <span className="math">{"\\(x\\)"}</span>
                    موجب تماماً، فإن أي حد يحتوي على
                    <span className="math">{"\\(x\\)"}</span>
                    أو
                    <span className="math">{"\\(x^2\\)"}</span>
                    في البسط أو المقام سيكون موجباً تماماً دون الحاجة لحل متراجحات معقدة.
                </div>
                <div className="right-col">
                    من أجل كل
                    <span className="math">{"\\(x \\in ]0, +\\infty[\\)"}</span>:
                    <div className="math-block">{"\\[g'(x) = 0 + 2x + 2 \\cdot \\frac{1}{x}\\]"}</div>
                </div>
            </div>

            {/* Q1 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    سأقوم بتوحيد المقامات لتجميع المشتقة في كسر واحد.
                    <div className="math-block">{"\\[2x + \\frac{2}{x} = \\frac{2x^2 + 2}{x} = \\frac{2(x^2 + 1)}{x}\\]"}</div>
                    الآن أقوم بتحليل الإشارة:
                    <br />• البسط:
                    <span className="math">{"\\(2(x^2 + 1)\\)"}</span>
                    هو مجموع مربع وثابت موجب، فهو موجب تماماً دائماً.
                    <br />• المقام:
                    <span className="math">{"\\(x > 0\\)"}</span>
                    موجب تماماً لأننا في مجال التعريف.
                    إذن المشتقة موجبة تماماً!
                </div>
                <div className="right-col">
                    نوحد المقامات لعبارة المشتقة:
                    <div className="math-block">{"\\[g'(x) = \\frac{2x^2 + 2}{x} = \\frac{2(x^2 + 1)}{x}\\]"}</div>
                    بما أن
                    <span className="math">{"\\(x > 0\\)"}</span>، فإن
                    <span className="math">{"\\(x^2 + 1 > 0\\)"}</span> وعليه
                    <span className="math">{"\\(g'(x) > 0\\)"}</span>.
                </div>
            </div>

            {/* Q1 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    بما أن المشتقة موجبة تماماً على المجال بأكمله، فإن الدالة
                    <span className="math">{"\\(g\\)"}</span>
                    متزايدة تماماً على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                    النتيجة منطقية جداً وتتفق مع الملاحظات البيانية.
                </div>
                <div className="right-col">
                    إذن، الدالة
                    <span className="math">{"\\(g\\)"}</span>
                    <strong>متزايدة تماماً</strong> على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            <div className="trigger-box">
                <div className="trigger-box-title">⚡ دليل المحفزات البصرية (Trigger)</div>
                عندما تطلب منك البكالوريا دراسة "اتجاه تغير دالة" مساعدة، فإن الهدف الأساسي هو إيجاد إشارة المشتقة وتوظيف رتابتها لإثبات وجود جذر وحيد لاحقاً. لا تتوقف عند حساب المشتقة بل بسطها حتى تصبح الإشارة واضحة تماماً.
            </div>

            <div className="danger-box">
                <div className="danger-box-title">⚠️ فخ شائع (Danger Zone)</div>
                إياك أن تترك المشتقة بشكل مجموع كسرين دون توحيد المقامات! التسرع هنا قد يجعلك تخطئ في إيجاد إشارة العبارة إذا كانت الحدود تحتوي على إشارات سالبة. توحيد المقامات هو الضمانة القانونية لصحة الإشارة.
            </div>

            {/* ============================================================
                PART I — Q2
            ============================================================ */}
            <div className="sub-question">
                2) بيّن أن المعادلة <span className="math">{"\\(g(x)=0\\)"}</span> تقبل حلاً وحيداً <span className="math">{"\\(\\alpha\\)"}</span> حيث <span className="math">{"\\(0.52 < \\alpha < 0.53\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* Q2 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    شروط مبرهنة القيم المتوسطة للوحدانية هي:
                    <br />1. الاستمرارية على المجال المغلق.
                    <br />2. الرتابة التامة (متزايدة تماماً أو متناقصة تماماً).
                    <br />3. إشارة الصور عند الأطراف متعاكسة، أي:
                    <span className="math">{"\\(g(0.52) \\times g(0.53) < 0\\)"}</span>.
                </div>
                <div className="right-col">
                    بما أن الدالة
                    <span className="math">{"\\(g\\)"}</span>
                    عبارة عن مجموع دوال مستمرة فهي مستمرة على المجال
                    <span className="math">{"\\([0.52, 0.53]\\)"}</span>.
                </div>
            </div>

            {/* Q2 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إثبات وجود حل وحيد للمعادلة
                    <span className="math">{"\\(g(x) = 0\\)"}</span>
                    on the tight interval
                    <span className="math">{"\\([0.52, 0.53]\\)"}</span>.
                    هذا يعني بالضرورة استخدام <strong>مبرهنة القيم المتوسطة</strong> مع شرط الرتابة تماماً لضمان الوحدانية.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات وجود ووحدانية الحل
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    بحيث
                    <span className="math">{"\\(g(\\alpha)=0\\)"}</span> و
                    <span className="math">{"\\(0.52 < \\alpha < 0.53\\)"}</span>.
                </div>
            </div>

            {/* Q2 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    لقد أثبتنا في السؤال السابق أن
                    <span className="math">{"\\(g\\)"}</span>
                    متزايدة تماماً على المجال المفتوح، وبالتالي فهي متزايدة تماماً على هذا المجال الجزئي المغلق.
                    الآن عليّ حساب الصور بدقة بالاستعانة بالآلة الحاسبة وتطبيق التقريب.
                </div>
                <div className="right-col">
                    لدينا الدالة
                    <span className="math">{"\\(g\\)"}</span>
                    مستمرة ورتيبة تماماً (متزايدة تماماً) على المجال
                    <span className="math">{"\\([0.52, 0.53]\\)"}</span>.
                </div>
            </div>

            {/* Q2 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري والعددي</span><br />
                    سأحسب بدقة متناهية:
                    <br />•
                    <span className="math">{"\\(g(0.52) = 1 + (0.52)^2 + 2\\ln(0.52)\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\((0.52)^2 = 0.2704\\)"}</span>
                    و
                    <span className="math">{"\\(\\ln(0.52) \\approx -0.6539\\)"}</span>.
                    إذن
                    <span className="math">{"\\(g(0.52) \\approx 1 + 0.2704 - 1.3078 = -0.0374 < 0\\)"}</span>.
                    <br />•
                    <span className="math">{"\\(g(0.53) = 1 + (0.53)^2 + 2\\ln(0.53)\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\((0.53)^2 = 0.2809\\)"}</span>
                    و
                    <span className="math">{"\\(\\ln(0.53) \\approx -0.6349\\)"}</span>.
                    إذن
                    <span className="math">{"\\(g(0.53) \\approx 1 + 0.2809 - 1.2698 = 0.0111 > 0\\)"}</span>.
                    نلاحظ تغير الإشارة بوضوح!
                </div>
                <div className="right-col">
                    بحساب الصور:
                    <div className="math-block">{"\\[g(0.52) = 1 + (0.52)^2 + 2\\ln(0.52) \\approx -0.037 < 0\\]"}</div>
                    <div className="math-block">{"\\[g(0.53) = 1 + (0.53)^2 + 2\\ln(0.53) \\approx 0.011 > 0\\]"}</div>
                    بما أن:
                    <span className="math">{"\\(g(0.52) \\cdot g(0.53) < 0\\)"}</span>.
                </div>
            </div>

            {/* Q2 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    بما أن الدالة مستمرة ورتيبة تماماً والصور متعاكسة الإشارة، فإن شروط مبرهنة القيم المتوسطة محققة بالكامل.
                    إذن يوجد حل وحيد
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    في هذا المجال.
                </div>
                <div className="right-col">
                    حسب مبرهنة القيم المتوسطة، فإن المعادلة
                    <span className="math">{"\\(g(x) = 0\\)"}</span>
                    تقبل حلاً وحيداً
                    <span className="math">{"\\(\\alpha\\)"}</span> في المجال
                    <span className="math">{"\\(]0.52, 0.53[\\)"}</span>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">❓ لماذا نذكر شرط الرتابة؟ (Why)</div>
                بدون شرط "الرتابة تماماً"، تخبرنا مبرهنة القيم المتوسطة بوجود "حل على الأقل" وليس "حل وحيد". الرتابة تضمن أن المنحنى يقطع محور الفواصل صعوداً أو نزولاً دون التواءات أو تقاطعات أخرى.
            </div>

            {/* ============================================================
                PART I — Q3
            ============================================================ */}
            <div className="sub-question">
                3) استنتج إشارة <span className="math">{"\\(g(x)\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* Q3 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    دالة متزايدة تماماً وتنعدم عند نقطة وحيدة
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    تترجم كالتالي:
                    <br />• جميع القيم التي تسبق
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    ستكون صورها أقل من صورة
                    <span className="math">{"\\(\\alpha\\)"}</span>، أي أقل من الصفر (سالبة).
                    <br />• جميع القيم التي تلي
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    ستكون صورها أكبر من صورة
                    <span className="math">{"\\(\\alpha\\)"}</span>، أي أكبر من الصفر (موجبة).
                </div>
                <div className="right-col">
                    لدينا
                    <span className="math">{"\\(g\\)"}</span>
                    متزايدة تماماً على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span> و
                    <span className="math">{"\\(g(\\alpha) = 0\\)"}</span>.
                </div>
            </div>

            {/* Q3 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    أريد تحديد شحنة الدالة
                    <span className="math">{"\\(g(x)\\)"}</span>
                    (أين تكون موجبة وأين تكون سالبة وأين تنعدم).
                    المطلوب هو "استنتج"، مما يعني الاستفادة المباشرة من نتائج السؤالين السابقين (التزايد والجذر).
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> تحديد إشارة
                    <span className="math">{"\\(g(x)\\)"}</span>
                    على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q3 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط التعريف الرياضي بالدالة المساعدة:
                    <br />• إذا كان
                    <span className="math">{"\\(0 < x < \\alpha\\)"}</span>
                    فإن
                    <span className="math">{"\\(g(x) < g(\\alpha) = 0\\)"}</span>.
                    <br />• إذا كان
                    <span className="math">{"\\(x > \\alpha\\)"}</span>
                    فإن
                    <span className="math">{"\\(g(x) > g(\\alpha) = 0\\)"}</span>.
                </div>
                <div className="right-col">
                    بما أن الدالة متزايدة تماماً:
                    <br />• من أجل
                    <span className="math">{"\\(x \\in ]0, \\alpha[\\)"}</span>:
                    <span className="math">{"\\(g(x) < 0\\)"}</span>.
                    <br />• من أجل
                    <span className="math">{"\\(x \\in ]\\alpha, +\\infty[\\)"}</span>:
                    <span className="math">{"\\(g(x) > 0\\)"}</span>.
                </div>
            </div>

            {/* Q3 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    ألخص هذه الإشارة في جدول لتسهيل استخدامها في الجزء الثاني من التمرين.
                    الجدول يحتوي على سطرين: قيم
                    <span className="math">{"\\(x\\)"}</span>
                    وإشارة
                    <span className="math">{"\\(g(x)\\)"}</span>.
                    المجال يبدأ من 0 (غير معرفة عنده) وينتهي في المالانهاية.
                </div>
                <div className="right-col">
                    جدول إشارة الدالة
                    <span className="math">{"\\(g(x)\\)"}</span>:
                    <div style={{ marginBottom: '12px', textAlign: 'center', marginTop: '10px' }}>
                        <img
                            src={signeOfGImg}
                            alt="جدول إشارة g(x)"
                            style={{ maxWidth: '100%', width: '480px', height: 'auto', display: 'block', margin: '0 auto' }}
                        />
                    </div>
                </div>
            </div>

            {/* Q3 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التحقق سريع: عند الانتقال من اليسار إلى اليمين، تبدأ الدالة سالبة ثم تمر بالصفر لتصبح موجبة. هذا متطابق تماماً مع كونها دالة متزايدة تماماً. الهدف محقق بنجاح.
                </div>
                <div className="right-col">
                    إذن، عبارة
                    <span className="math">{"\\(g(x)\\)"}</span>
                    سالبة تماماً على اليسار وموجبة تماماً على اليمين وتنعدم عند
                    <span className="math">{"\\(\\alpha\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART II — Q1
            ============================================================ */}
            <div className="sub-question">
                1) حساب نهايات الدالة <span className="math">{"\\(f\\)"}</span> عند أطراف مجال التعريف
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q1 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    سأقوم بتحليل كل حد على حدة لمعرفة ما إذا كانت هناك حالة عدم تعيين (ح.ع.ت):
                    <br />• عند الصفر:
                    <span className="math">{"\\(-x \\to 0\\)"}</span>، بينما البسط
                    <span className="math">{"\\(3+2\\ln x \\to -\\infty\\)"}</span>
                    والمقام
                    <span className="math">{"\\(x \\to 0^+\\)"}</span>.
                    النسبة تؤول إلى
                    <span className="math">{"\\(\\frac{-\\infty}{0^+}\\)"}</span>.
                    هل هذه حالة عدم تعيين؟ لا! كسر بسطه يؤول لللانهاية ومقامه للصفر يؤول حتماً لللانهاية مع مراعاة ضرب الإشارات.
                    <br />• عند
                    <span className="math">{"\\(+\\infty\\)"}</span>:
                    <span className="math">{"\\(-x \\to -\\infty\\)"}</span>، بينما الكسر
                    <span className="math">{"\\(\\frac{3+2\\ln x}{x}\\)"}</span>
                    يؤول إلى
                    <span className="math">{"\\(\\frac{+\\infty}{+\\infty}\\)"}</span>.
                    هذه حالة عدم تعيين! سأحتاج لتفكيك الكسر وتطبيق التزايد المقارن.
                </div>
                <div className="right-col">
                    نعوض في عبارة الدالة مباشرة لدراسة السلوك بجوار الحدود.
                </div>
            </div>

            {/* II.Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    أريد حساب نهايتي الدالة
                    <span className="math">{"\\(f(x) = -x + \\frac{3+2\\ln x}{x}\\)"}</span>
                    عندما يقترب
                    <span className="math">{"\\(x\\)"}</span>
                    من الصفر بقيم كبرى
                    <span className="math">{"\\((0^+)\\)"}</span>
                    وعندما يؤول إلى
                    <span className="math">{"\\(+\\infty\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إيجاد
                    <span className="math">{"\\(\\lim_{x \\to 0^+} f(x)\\)"}</span>
                    و
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} f(x)\\)"}</span>.
                </div>
            </div>

            {/* II.Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحتاج إلى توظيف نهايتين شهيرتين:
                    <br />1. عند الصفر:
                    <span className="math">{"\\(\\lim_{x \\to 0^+} \\ln x = -\\infty\\)"}</span>
                    و
                    <span className="math">{"\\(\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty\\)"}</span>.
                    <br />2. عند اللانهاية:
                    التزايد المقارن يخبرنا أن
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0\\)"}</span>.
                </div>
                <div className="right-col">
                    لدينا النهايات المرجعية التالية:
                    <br />•
                    <span className="math">{"\\(\\lim_{x \\to 0^+} \\ln x = -\\infty\\)"}</span>
                    <br />•
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0\\)"}</span>
                </div>
            </div>

            {/* II.Q1 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    <strong>1. عند الصفر:</strong>
                    الحد الأول:
                    <span className="math">{"\\(-x \\to 0\\)"}</span>.
                    الكسر:
                    <span className="math">{"\\(\\frac{3 + 2\\ln x}{x} = (3 + 2\\ln x) \\cdot \\frac{1}{x}\\)"}</span>.
                    بما أن القوس يؤول إلى
                    <span className="math">{"\\(-\\infty\\)"}</span>
                    و
                    <span className="math">{"\\(1/x\\)"}</span> يؤول إلى
                    <span className="math">{"\\(+\\infty\\)"}</span>،
                    فإن جداءهما يؤول إلى
                    <span className="math">{"\\(-\\infty\\)"}</span>.
                    إذن النهاية الكلية هي
                    <span className="math">{"\\(-\\infty\\)"}</span>.
                    <br />
                    <strong>2. عند اللانهاية:</strong>
                    أفكك الكسر:
                    <span className="math">{"\\(\\frac{3+2\\ln x}{x} = \\frac{3}{x} + 2 \\cdot \\frac{\\ln x}{x}\\)"}</span>.
                    النهاية عند اللانهاية تصبح:
                    <span className="math">{"\\(\\lim_{x\\to+\\infty} \\frac{3}{x} = 0\\)"}</span>
                    و
                    <span className="math">{"\\(\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0\\)"}</span>.
                    إذن الكسر بأكمله يؤول للصفر.
                    يتبقى لدينا الحد
                    <span className="math">{"\\(-x\\)"}</span>
                    الذي يؤول إلى
                    <span className="math">{"\\(-\\infty\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الحساب التفصيلي للنهايات:</strong>
                    <br /><br />
                    1. عند الصفر بقيم كبرى:
                    <div className="math-block">{"\\[\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} \\left[ -x + (3+2\\ln x)\\frac{1}{x} \\right]\\]"}</div>
                    بما أن:
                    <span className="math">{"\\(\\lim_{x \\to 0^+} (-x) = 0\\)"}</span> و
                    <span className="math">{"\\(\\lim_{x \\to 0^+} (3+2\\ln x) = -\\infty\\)"}</span> و
                    <span className="math">{"\\(\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty\\)"}</span>:
                    <div className="math-block">{"\\[\\lim_{x \\to 0^+} f(x) = 0 + (-\\infty)(+\\infty) = -\\infty\\]"}</div>
                    2. عند اللانهاية:
                    <div className="math-block">{"\\[\\lim_{x \\to +\\infty} f(x) = \\lim_{x \\to +\\infty} \\left[ -x + \\frac{3}{x} + 2\\frac{\\ln x}{x} \\right]\\]"}</div>
                    بما أن:
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{3}{x} = 0\\)"}</span> و
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0\\)"}</span> و
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} (-x) = -\\infty\\)"}</span>:
                    <div className="math-block">{"\\[\\lim_{x \\to +\\infty} f(x) = -\\infty + 0 + 0 = -\\infty\\]"}</div>
                </div>
            </div>

            {/* II.Q1 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التحقق البياني والهندسي:
                    بما أن النهاية عند الصفر هي
                    <span className="math">{"\\(-\\infty\\)"}</span>،
                    فإن هذا يعني هندسياً أن المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    يقبل مستقيماً مقارباً عمودياً معادلته
                    <span className="math">{"\\(x = 0\\)"}</span>
                    (محور التراتيب).
                    بينما عند اللانهاية الدالة تذهب للمالانهاية السالبة، وهو ما يتناسب مع وجود مقارب مائل سالب الميل.
                </div>
                <div className="right-col">
                    التفسير الهندسي:
                    المستقيم ذو المعادلة
                    <span className="math">{"\\(x = 0\\)"}</span>
                    هو <strong>مستقيم مقارب عمودي</strong> للمنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>.
                </div>
            </div>

            <div className="danger-box">
                <div className="danger-box-title">⚠️ احذر من الخلط في شكل المالانهاية على الصفر!</div>
                يقع بعض الطلاب في حفرة التفكير أن النهاية من شكل
                <span className="math">{"\\(\\frac{-\\infty}{0}\\)"}</span>
                هي حالة عدم تعيين ويضيعون الوقت في إزالتها. تذكر دائماً: عدد حقيقي غير معدوم على صفر يعطي مالانهاية، فكيف إذا كان البسط مالانهاية أصلاً! النتيجة حتماً مالانهاية بإشارتها المناسبة.
            </div>

            {/* ============================================================
                PART II — Q2.A
            ============================================================ */}
            <div className="sub-question">
                2) أ. إثبات أن عبارة الدالة المشتقة هي: <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q2.A — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    الدالة هي مجموع حدين:
                    <span className="math">{"\\(-x\\)"}</span>
                    و
                    <span className="math">{"\\(\\frac{3+2\\ln x}{x}\\)"}</span>.
                    Sأشتق الجزء الأول بشكل مستقل ليعطيني
                    <span className="math">{"\\(-1\\)"}</span>.
                    الجزء الثاني هو حاصل قسمة دالتين
                    <span className="math">{"\\(\\frac{u}{v}\\)"}</span>،
                    حيث:
                    <br />•
                    <span className="math">{"\\(u(x) = 3 + 2\\ln x\\)"}</span>
                    مشتقتها
                    <span className="math">{"\\(u'(x) = \\frac{2}{x}\\)"}</span>.
                    <br />•
                    <span className="math">{"\\(v(x) = x\\)"}</span>
                    مشتقتها
                    <span className="math">{"\\(v'(x) = 1\\)"}</span>.
                    ثم أطبق قاعدة الكسر:
                    <span className="math">{"\\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\)"}</span>.
                </div>
                <div className="right-col">
                    نطبق قواعد الاشتقاق على الدالة
                    <span className="math">{"\\(f\\)"}</span>
                    على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.A — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف واضح: حساب المشتقة لـ
                    <span className="math">{"\\(f\\)"}</span>
                    وتحويلها جبرياً حتى تظهر فيها العبارة المساعدة
                    <span className="math">{"\\(g(x)\\)"}</span>
                    مسبوقة بالإشارة السالبة ومقسومة على
                    <span className="math">{"\\(x^2\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> تبيان أن
                    <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.A — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    دعنا نعوض في قانون الكسر ونجمع الحدود:
                    <div className="math-block">{"\\[\\left(\\frac{3+2\\ln x}{x}\\right)' = \\frac{(\\frac{2}{x})(x) - (3+2\\ln x)(1)}{x^2}\\]"}</div>
                    أبسط البسط:
                    <div className="math-block">{"\\[\\frac{2 - 3 - 2\\ln x}{x^2} = \\frac{-1 - 2\\ln x}{x^2}\\]"}</div>
                    الآن أربط هذا بالحد الأول للمشتقة
                    <span className="math">{"\\(-1\\)"}</span>.
                </div>
                <div className="right-col">
                    حساب مركبات المشتقة بالتفصيل:
                    <div className="math-block">{"\\[f'(x) = -1 + \\frac{(\\frac{2}{x})(x) - (3+2\\ln x)(1)}{x^2}\\]"}</div>
                </div>
            </div>

            {/* II.Q2.A — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    أجمع الحدود بتوحيد المقامات على
                    <span className="math">{"\\(x^2\\)"}</span>:
                    <div className="math-block">{"\\[f'(x) = -1 + \\frac{-1-2\\ln x}{x^2} = \\frac{-x^2 - 1 - 2\\ln x}{x^2}\\]"}</div>
                    أستخرج الإشارة السالبة كعامل مشترك في البسط:
                    <div className="math-block">{"\\[f'(x) = \\frac{-(x^2 + 1 + 2\\ln x)}{x^2}\\]"}</div>
                    الآن ألاحظ بوضوح تام أن ما بين القوسين هو بالضبط عبارة الدالة المساعدة
                    <span className="math">{"\\(g(x)\\)"}</span>!
                    الربط تم بنجاح مبهر.
                </div>
                <div className="right-col">
                    نوحد المقامات:
                    <div className="math-block">{"\\[f'(x) = \\frac{-x^2}{x^2} + \\frac{-1-2\\ln x}{x^2} = \\frac{-x^2 - 1 - 2\\ln x}{x^2}\\]"}</div>
                    nستخرج العامل المشترك:
                    <div className="math-block">{"\\[f'(x) = \\frac{-(1 + x^2 + 2\\ln x)}{x^2} = \\frac{-g(x)}{x^2}\\]"}</div>
                </div>
            </div>

            {/* II.Q2.A — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التحقق تم جبرياً خطوة بخطوة دون اختصار أي عملية.
                    الصيغة النهائية مطابقة تماماً للمطلوب في السؤال.
                    أنا جاهز للانتقال للخطوة التالية.
                </div>
                <div className="right-col">
                    وهو المطلوب إثباته:
                    <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART II — Q2.B
            ============================================================ */}
            <div className="sub-question">
                2) ب. تشكيل جدول تغيرات الدالة <span className="math">{"\\(f\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q2.B — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    لدينا
                    <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span>.
                    من أجل كل
                    <span className="math">{"\\(x > 0\\)"}</span>، المقام
                    <span className="math">{"\\(x^2 > 0\\)"}</span>.
                    إذن إشارة
                    <span className="math">{"\\(f'(x)\\)"}</span>
                    هي <strong>عكس</strong> إشارة الدالة المساعدة
                    <span className="math">{"\\(g(x)\\)"}</span>.
                    لقد درسنا إشارة
                    <span className="math">{"\\(g\\)"}</span> سابقاً:
                    <br />• قبل
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    كانت
                    <span className="math">{"\\(g(x) < 0\\)"}</span>، إذن المشتقة ستكون موجبة.
                    <br />• بعد
                    <span className="math">{"\\(\\alpha\\)"}</span>
                    كانت
                    <span className="math">{"\\(g(x) > 0\\)"}</span>، إذن المشتقة ستكون سالبة.
                </div>
                <div className="right-col">
                    إشارة المشتقة
                    <span className="math">{"\\(f'(x)\\)"}</span> هي عكس إشارة
                    <span className="math">{"\\(g(x)\\)"}</span> على المجال
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.B — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو بناء جدول التغيرات الكامل للدالة
                    <span className="math">{"\\(f\\)"}</span>.
                    الجدول سيلخص إشارة المشتقة واتجاه تغير الدالة وصور نهايات الحدود بالإضافة للذروة عند
                    <span className="math">{"\\(\\alpha\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> استخلاص إشارة المشتقة وتشكيل جدول تغيرات الدالة
                    <span className="math">{"\\(f\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.B — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط الإشارة باتجاه التغير:
                    <br />• الدالة متزايدة تماماً على المجال
                    <span className="math">{"\\(]0, \\alpha]\\)"}</span>.
                    <br />• الدالة متناقصة تماماً على المجال
                    <span className="math">{"\\([\\alpha, +\\infty[\\)"}</span>.
                    النهاية عند الصفر هي
                    <span className="math">{"\\(-\\infty\\)"}</span>، وعند اللانهاية هي أيضاً
                    <span className="math">{"\\(-\\infty\\)"}</span>.
                    الذروة تقع عند النقطة
                    <span className="math">{"\\((\\alpha, f(\\alpha))\\)"}</span>.
                </div>
                <div className="right-col">
                    • من أجل
                    <span className="math">{"\\(x \\in ]0, \\alpha]\\)"}</span>:
                    <span className="math">{"\\(f'(x) > 0\\)"}</span> فالدالة متزايدة تماماً.
                    <br />• من أجل
                    <span className="math">{"\\(x \\in [\\alpha, +\\infty[\\)"}</span>:
                    <span className="math">{"\\(f'(x) < 0\\)"}</span> فالدالة متناقصة تماماً.
                </div>
            </div>

            {/* II.Q2.B — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    سأقوم الآن برسم الجدول التنظيمي للتغيرات.
                    الأسهم سترتفع من
                    <span className="math">{"\\(-\\infty\\)"}</span>
                    إلى القيمة العظمى
                    <span className="math">{"\\(f(\\alpha)\\)"}</span>،
                    ثم تهبط مجدداً نحو
                    <span className="math">{"\\(-\\infty\\)"}</span>.
                </div>
                <div className="right-col">
                    جدول تغيرات الدالة <span className="math">{"\\(f(x)\\)"}</span>:
                    <div style={{ marginBottom: '12px', textAlign: 'center', marginTop: '10px' }}>
                        <img
                            src={variationTableOfFImg}
                            alt="جدول تغيرات الدالة f(x)"
                            style={{ maxWidth: '100%', width: '480px', height: 'auto', display: 'block', margin: '0 auto' }}
                        />
                    </div>
                </div>
            </div>

            {/* II.Q2.B — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من التناسق المنطقي:
                    الدالة تصعد من قيمة سالبة للغاية نحو قيمة موجبة (سنثبت أن
                    <span className="math">{"\\(f(\\alpha)\\)"}</span> موجبة لاحقاً)،
                    ثم تهبط مجدداً نحو السالب اللانهائي.
                    هذا التغير خالٍ تماماً من التناقضات الرياضية. الجدول جاهز وموثوق.
                </div>
                <div className="right-col">
                    نستنتج أن الدالة تقبل قيمة حدية عظمى عند الفاصلة
                    <span className="math">{"\\(\\alpha\\)"}</span> وهي
                    <span className="math">{"\\(f(\\alpha)\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART II — Q2.C
            ============================================================ */}
            <div className="sub-question">
                2) ج. تحقق أن <span className="math">{"\\(f(\\alpha)=2\\left(\\dfrac1\\alpha-\\alpha\\right)\\)"}</span> ثم عيّن حصراً لها
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q2.C — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    لدينا العبارة الأصلية:
                    <span className="math">{"\\(f(\\alpha) = -\\alpha + \\frac{3+2\\ln\\alpha}{\\alpha}\\)"}</span>.
                    اللوغاريتم مزعج في الحصر. سأستخلص قيمته من علاقة الجزء الأول:
                    <span className="math">{"\\(g(\\alpha) = 0\\)"}</span>
                    والتي تترجم لـ:
                    <span className="math">{"\\(1 + \\alpha^2 + 2\\ln\\alpha = 0\\)"}</span>.
                    إذن سأعزل التعبير
                    <span className="math">{"\\(2\\ln\\alpha\\)"}</span>
                    أو ما يعادله في البسط لتنظيف الكسر تماماً من اللوغاريتم.
                </div>
                <div className="right-col">
                    نوظف حقيقة أن
                    <span className="math">{"\\(\\alpha\\)"}</span> هو جذر الدالة المساعدة
                    <span className="math">{"\\(g\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.C — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف يتكون من شقين:
                    <br />1. إثبات العلاقة التبسيطية لـ
                    <span className="math">{"\\(f(\\alpha)\\)"}</span>
                    التي لا تحتوي على اللوغاريتم.
                    <br />2. توظيف هذه العبارة البسيطة للحصول على حصر عددي دقيق للقيمة العظمى بالاستعانة بحصر
                    <span className="math">{"\\(\\alpha\\)"}</span> المعطى.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إيجاد عبارة مبسطة لـ
                    <span className="math">{"\\(f(\\alpha)\\)"}</span> وحصرها بدقة.
                </div>
            </div>

            {/* II.Q2.C — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    من المعادلة:
                    <span className="math">{"\\(1+\\alpha^2+2\\ln\\alpha = 0\\)"}</span>،
                    نستنتج أن:
                    <span className="math">{"\\(2\\ln\\alpha = -\\alpha^2 - 1\\)"}</span>.
                    الآن نعوض هذا في البسط الخاص بـ
                    <span className="math">{"\\(f(\\alpha)\\)"}</span>:
                    البسط هو
                    <span className="math">{"\\(3 + 2\\ln\\alpha\\)"}</span>.
                    بتعويض قيمة اللوغاريتم، يصبح البسط:
                    <span className="math">{"\\(3 + (-\\alpha^2 - 1) = 2 - \\alpha^2\\)"}</span>.
                    تخلصنا تماماً من اللوغاريتم!
                </div>
                <div className="right-col">
                    لدينا:
                    <div className="math-block">{"\\[1 + \\alpha^2 + 2\\ln\\alpha = 0 \\implies 2\\ln\\alpha = -1 - \\alpha^2\\]"}</div>
                    نعوض في عبارة الدالة:
                    <div className="math-block">{"\\[f(\\alpha) = -\\alpha + \\frac{3+2\\ln\\alpha}{\\alpha}\\]"}</div>
                </div>
            </div>

            {/* II.Q2.C — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري والعددي</span><br />
                    أكمل التعويض والتبسيط:
                    <div className="math-block">{"\\[f(\\alpha) = -\\alpha + \\frac{2-\\alpha^2}{\\alpha} = -\\alpha + \\frac{2}{\\alpha} - \\alpha = \\frac{2}{\\alpha} - 2\\alpha\\]"}</div>
                    أستخرج 2 كعامل مشترك:
                    <div className="math-block">{"\\[f(\\alpha) = 2\\left(\\frac{1}{\\alpha} - \\alpha\\right)\\]"}</div>
                    وهو المطلوب بدقة.
                    <br />
                    <strong>حصر الصورة:</strong>
                    نعلم أن:
                    <span className="math">{"\\(0.52 < \\alpha < 0.53\\)"}</span>.
                    سأقوم بحصر كل حد بشكل مستقل:
                    <br />• حصر
                    <span className="math">{"\\(-\\alpha\\)"}</span>:
                    نضرب المتراجحة في -1 ونقلب الاتجاه:
                    <span className="math">{"\\(-0.53 < -\\alpha < -0.52\\)"}</span>.
                    <br />• حصر
                    <span className="math">{"\\(1/\\alpha\\)"}</span>:
                    بما أن الأعداد موجبة، مقلوب الحدود يقلب المتراجحة:
                    <span className="math">{"\\(\\frac{1}{0.53} < \\frac{1}{\\alpha} < \\frac{1}{0.52}\\)"}</span>.
                    بالحساب العددي:
                    <span className="math">{"\\(1.887 < \\frac{1}{\\alpha} < 1.923\\)"}</span>.
                    <br />• نجمع المتراجحتين طرفاً لطرف:
                    <span className="math">{"\\(1.887 - 0.53 < \\frac{1}{\\alpha} - \\alpha < 1.923 - 0.52\\)"}</span>.
                    إذن:
                    <span className="math">{"\\(1.357 < \\frac{1}{\\alpha} - \\alpha < 1.403\\)"}</span>.
                    <br />• نضرب المتراجحة في 2:
                    <span className="math">{"\\(2.714 < f(\\alpha) < 2.806\\)"}</span>.
                    سأقرب النتيجة لأقرب جزء من مئة للحصول على حصر نظيف.
                </div>
                <div className="right-col">
                    نعوض ونوحد المقامات للحدود الكسرية:
                    <div className="math-block">{"\\[f(\\alpha) = -\\alpha + \\frac{2 - \\alpha^2}{\\alpha} = -\\alpha + \\frac{2}{\\alpha} - \\frac{\\alpha^2}{\\alpha} = \\frac{2}{\\alpha} - 2\\alpha = 2\\left( \\frac{1}{\\alpha} - \\alpha \\right)\\]"}</div>
                    <strong>حصر القيمة العظمى:</strong>
                    من أجل
                    <span className="math">{"\\(0.52 < \\alpha < 0.53\\)"}</span>:
                    <div className="math-block">{"\\[-0.53 < -\\alpha < -0.52\\]"}</div>
                    والمقلوب يعطي:
                    <div className="math-block">{"\\[\\frac{1}{0.53} < \\frac{1}{\\alpha} < \\frac{1}{0.52} \\implies 1.887 < \\frac{1}{\\alpha} < 1.923\\]"}</div>
                    بالجمع طرفاً لطرف:
                    <div className="math-block">{"\\[1.357 < \\frac{1}{\\alpha} - \\alpha < 1.403\\]"}</div>
                    بالضرب في 2:
                    <div className="math-block">{"\\[2.71 < f(\\alpha) < 2.81\\]"}</div>
                </div>
            </div>

            {/* II.Q2.C — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من سلامة خطوات الحصر:
                    الدالتان
                    <span className="math">{"\\(1/x\\)"}</span>
                    و
                    <span className="math">{"\\(-x\\)"}</span>
                    متناقصتان تماماً على المجال الموجب، لذا فإن جمع حدودهما يحافظ على سلامة المتراجحات المقلوبة دون تصادم. الحصر النهائي منطقي جداً ويقع تماماً فوق محور الفواصل (قيمة عظمى موجبة).
                </div>
                <div className="right-col">
                    إذن، الحصر النهائي المقرب للقيمة العظمى هو:
                    <span className="math">{"\\(2.71 < f(\\alpha) < 2.81\\)"}</span>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">❓ لماذا نحول العبارة إلى صيغة خالية من اللوغاريتم؟ (Why)</div>
                لو حاولنا حصر العبارة الأصلية التي تحتوي على
                <span className="math">{"\\(\\ln\\alpha\\)"}</span> و
                <span className="math">{"\\(\\alpha\\)"}</span> معاً، لتعرضنا لخطأ فادح بسبب عدم استقلالية المتغيرات داخل نفس الحصر، مما يسبب اتساعاً مفرطاً وغير صحيح في فترات الحصر. التخلص من اللوغاريتم هو التقنية المثالية لتركيز الحصر في متغير واحد بسيط.
            </div>

            {/* ============================================================
                PART II — Q3.A
            ============================================================ */}
            <div className="sub-question">
                3) أ. حساب النهاية <span className="math">{"\\(\\lim_{x\\to+\\infty}[f(x)+x]\\)"}</span> وتفسير النتيجة هندسياً
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q3.A — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    العبارة هي:
                    <span className="math">{"\\(f(x) + x\\)"}</span>.
                    بتعويض عبارة الدالة:
                    <span className="math">{"\\(f(x) + x = -x + \\frac{3+2\\ln x}{x} + x = \\frac{3+2\\ln x}{x}\\)"}</span>.
                    الهدف المترجم هو حساب:
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\frac{3+2\\ln x}{x}\\)"}</span>.
                </div>
                <div className="right-col">
                    نعوض عبارة الدالة ونبسط الفرق مباشرة للتخلص من المتغير الخارجي.
                </div>
            </div>

            {/* II.Q3.A — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو حساب نهاية الفرق بين الدالة
                    <span className="math">{"\\(f(x)\\)"}</span>
                    والمستقيم
                    <span className="math">{"\\(y = -x\\)"}</span>
                    عندما يؤول المتغير إلى اللانهاية الموجبة.
                    ثم تفسير النتيجة هندسياً لإثبات المقارب المائل.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب نهاية الفرق
                    <span className="math">{"\\(f(x)-(-x)\\)"}</span> هندسياً.
                </div>
            </div>

            {/* II.Q3.A — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط هذا بالنهاية الشهيرة للتزايد المقارن التي استخدمناها سابقاً:
                    <span className="math">{"\\(\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0\\)"}</span>.
                    تفكيك الكسر سيجعل الحل مباشراً ومبرراً قانونياً.
                </div>
                <div className="right-col">
                    لدينا من التزايد المقارن:
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0\\)"}</span> و
                    <span className="math">{"\\(\\lim_{x \\to +\\infty} \\dfrac{3}{x} = 0\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.A — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    أقوم بالحساب والتبسيط:
                    <div className="math-block">{"\\[\\lim_{x\\to+\\infty} [f(x)+x] = \\lim_{x\\to+\\infty} \\left( \\frac{3}{x} + 2\\frac{\\ln x}{x} \\right) = 0 + 2(0) = 0\\]"}</div>
                    النتيجة هي الصفر تماماً.
                    وبما أن نهاية الفرق بين الدالة ومستقيم مائل تؤول للصفر عند اللانهاية، فهذا يعني هندسياً أن هذا المستقيم هو مقارب مائل للمنحنى.
                </div>
                <div className="right-col">
                    الحساب والنتيجة:
                    <div className="math-block">{"\\[\\lim_{x \\to +\\infty} [f(x)+x] = \\lim_{x \\to +\\infty} \\left( \\frac{3}{x} + 2\\frac{\\ln x}{x} \\right) = 0\\]"}</div>
                    بما أن النهاية تساوي 0، فإن المستقيم
                    <span className="math">{"\\((\\Delta)\\)"}</span> ذو المعادلة
                    <span className="math">{"\\(y = -x\\)"}</span> هو <strong>مستقيم مقارب مائل</strong> للمنحنى بجوار
                    <span className="math">{"\\(+\\infty\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.A — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من تطابق النتيجة مع الأسئلة السابقة:
                    النهاية عند اللانهاية لـ
                    <span className="math">{"\\(f(x)\\)"}</span> كانت
                    <span className="math">{"\\(-\\infty\\)"}</span>، والمقارب المائل
                    <span className="math">{"\\(y = -x\\)"}</span> يؤول لـ
                    <span className="math">{"\\(-\\infty\\)"}</span> عند
                    <span className="math">{"\\(+\\infty\\)"}</span>.
                    السرعتان متوافقتان والتقارب مثالي.
                </div>
                <div className="right-col">
                    التفسير الهندسي للمنحنى محقق بشكل كامل:
                    المقارب هو
                    <span className="math">{"\\((\\Delta): y = -x\\)"}</span>.
                </div>
            </div>

            <div className="trigger-box">
                <div className="trigger-box-title">⚡ دليل المحفزات البصرية (Trigger)</div>
                كلما رأيت في البكالوريا عبارة "احسب نهاية الفرق وتأكد أو فسر" أو كانت الدالة من الشكل
                <span className="math">{"\\(ax+b + h(x)\\)"}</span>
                حيرة تؤول
                <span className="math">{"\\(h(x)\\)"}</span>
                للصفر، فهذا مؤشر قطعي على وجود مستقيم مقارب مائل معادلته
                <span className="math">{"\\(y = ax+b\\)"}</span>.
            </div>

            {/* ============================================================
                PART II — Q3.B
            ============================================================ */}
            <div className="sub-question">
                3) ب. دراسة وضعية المنحنى <span className="math">{"\\((C_f)\\)"}</span> بالنسبة للمقارب المائل <span className="math">{"\\((\\Delta)\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q3.B — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    لقد بسطنا الفرق سابقاً:
                    <span className="math">{"\\(f(x) + x = \\frac{3+2\\ln x}{x}\\)"}</span>.
                    الترجمة الرياضية هي:
                    <br />• المقام
                    <span className="math">{"\\(x > 0\\)"}</span> دائماً في مجال تعريفنا.
                    <br />• إشارة الكسر بكامله تتبع إشارة البسط فقط
                    <span className="math">{"\\(3 + 2\\ln x\\)"}</span>.
                    سأقوم بحل متراجحة بسيطة لتحديد متى ينعدم البسط ومتى يكون موجباً.
                </div>
                <div className="right-col">
                    إشارة الفرق هي نفس إشارة البسط
                    <span className="math">{"\\(3+2\\ln x\\)"}</span> لأن المقام
                    <span className="math">{"\\(x>0\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.B — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو معرفة متى يقع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    فوق المقارب المائل
                    <span className="math">{"\\((\\Delta)\\)"}</span>
                    ومتى يقع تحته، بالإضافة لتحديد نقطة التقاطع إن وجدت.
                    الوسيلة هي دراسة إشارة الفرق
                    <span className="math">{"\\(f(x) - y_{\\Delta}\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> دراسة إشارة الفرق
                    <span className="math">{"\\(f(x) - (-x) = f(x)+x\\)"}</span> على مجال التعريف.
                </div>
            </div>

            {/* II.Q3.B — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحل المعادلة الصفرية للبسط:
                    <div className="math-block">{"\\[3 + 2\\ln x = 0 \\implies 2\\ln x = -3 \\implies \\ln x = -\\frac{3}{2}\\]"}</div>
                    أدخل الدالة الأسية على الطرفين لإزالة اللوغاريتم:
                    <div className="math-block">{"\\[x = e^{-3/2} = e^{-1.5} = \\frac{1}{e\\sqrt{e}} \\approx 0.223\\]"}</div>
                    هذه هي نقطة العبور.
                </div>
                <div className="right-col">
                    نبحث عن نقطة انعدام الفرق:
                    <div className="math-block">{"\\[3+2\\ln x = 0 \\implies \\ln x = -\\frac{3}{2} \\implies x = e^{-3/2}\\]"}</div>
                </div>
            </div>

            {/* II.Q3.B — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    سأكتب متراجحة لتحديد الجزء الموجب:
                    <div className="math-block">{"\\[3 + 2\\ln x > 0 \\implies x > e^{-3/2}\\]"}</div>
                    ألخص الوضعية بالخطوات التالية:
                    <br />• من أجل
                    <span className="math">{"\\(x \\in ]0, e^{-3/2}[\\)"}</span>:
                    الفرق سالب ← المنحنى تحت المقارب.
                    <br />• من أجل
                    <span className="math">{"\\(x \\in ]e^{-3/2}, +\\infty[\\)"}</span>:
                    الفرق موجب ← المنحنى فوق المقارب.
                    <br />• عند
                    <span className="math">{"\\(x = e^{-3/2}\\)"}</span>:
                    المنحنى يقطع المقارب المائل. ترتيب نقطة التقاطع هو
                    <span className="math">{"\\(y = -x = -e^{-3/2}\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>نتائج دراسة الوضعية:</strong>
                    <br /><br />
                    • من أجل
                    <span className="math">{"\\(x \\in ]0, e^{-3/2}[\\)"}</span>:
                    يكون
                    <span className="math">{"\\(f(x) - (-x) < 0\\)"}</span>، إذن المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> <strong>تحت</strong> المقارب
                    <span className="math">{"\\((\\Delta)\\)"}</span>.
                    <br />
                    • من أجل
                    <span className="math">{"\\(x \\in ]e^{-3/2}, +\\infty[\\)"}</span>:
                    يكون
                    <span className="math">{"\\(f(x) - (-x) > 0\\)"}</span>، إذن المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> <strong>فوق</strong> المقارب
                    <span className="math">{"\\((\\Delta)\\)"}</span>.
                    <br />
                    • المنحنى يقطع المقارب المائل عند النقطة
                    <span className="math">{"\\(A\\left(e^{-3/2};\\ -e^{-3/2}\\right)\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.B — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من أن الإشارة متناسقة:
                    القيمة التقريبية لـ
                    <span className="math">{"\\(e^{-3/2}\\)"}</span>
                    هي حوالي 0.223.
                    هذا يتناسب تماماً مع منطق التمرين، فكلما كبرت قيم
                    <span className="math">{"\\(x\\)"}</span>
                    نحو اللانهاية الموجبة، تزداد قيمة
                    <span className="math">{"\\(\\ln x\\)"}</span>
                    مما يجعل الفرق موجباً ويفسر وجود المنحنى فوق المقارب في اللانهاية.
                </div>
                <div className="right-col">
                    نقطة التقاطع الفريدة والوضعية محددتان بدقة تامة.
                </div>
            </div>

            {/* ============================================================
                PART II — Q3.C
            ============================================================ */}
            <div className="sub-question">
                3) ج. بيّن أن <span className="math">{"\\((C_f)\\)"}</span> يقبل مماساً <span className="math">{"\\((T)\\)"}</span> يوازي المقارب المائل <span className="math">{"\\((\\Delta)\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q3.C — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    "التوازي" يعني تساوي معامل التوجيه.
                    <br />• ميل المقارب المائل
                    <span className="math">{"\\(y = -x\\)"}</span> هو
                    <span className="math">{"\\(-1\\)"}</span>.
                    <br />• ميل المماس عند الفاصلة
                    <span className="math">{"\\(x\\)"}</span> هو الدالة المشتقة
                    <span className="math">{"\\(f'(x)\\)"}</span>.
                    الترجمة الرياضية هي حل المعادلة:
                    <span className="math">{"\\(f'(x) = -1\\)"}</span>
                    والتحقق من وجود حل مقبول هندسياً (في مجال التعريف).
                </div>
                <div className="right-col">
                    معامل توجيه المقارب المائل هو
                    <span className="math">{"\\(-1\\)"}</span>. إذن نحل المعادلة:
                    <span className="math">{"\\(f'(x) = -1\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.C — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إثبات وجود مماس
                    <span className="math">{"\\((T)\\)"}</span>
                    للمنحنى يكون موازياً تماماً للمقارب المائل.
                    هذا يعني هندسياً وجبرياً أن ميل المماس في نقطة ما يجب أن يتساوى تماماً مع ميل المقارب المائل.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات وجود نقطة تماس يكون عندها ميل المنحنى مساوياً لميل المقارب.
                </div>
            </div>

            {/* II.Q3.C — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أستعين بعبارة المشتقة التي أثبتناها في السؤال 2أ:
                    <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span>.
                    المعادلة تصبح:
                    <div className="math-block">{"\\[\\frac{-g(x)}{x^2} = -1 \\implies g(x) = x^2\\]"}</div>
                    الآن أعوض عبارة
                    <span className="math">{"\\(g(x)\\)"}</span> الأصلية:
                    <div className="math-block">{"\\[1 + x^2 + 2\\ln x = x^2\\]"}</div>
                    ألاحظ اختزالاً رائعاً لـ
                    <span className="math">{"\\(x^2\\)"}</span> من الطرفين!
                </div>
                <div className="right-col">
                    نعوض عبارة المشتقة والدالة المساعدة:
                    <div className="math-block">{"\\[\\frac{-g(x)}{x^2} = -1 \\implies g(x) = x^2\\]"}</div>
                    نعوض صيغة كثير الحدود واللوغاريتم:
                    <div className="math-block">{"\\[1 + x^2 + 2\\ln x = x^2\\]"}</div>
                </div>
            </div>

            {/* II.Q3.C — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    أكمل حل المعادلة بعد الاختزال:
                    <div className="math-block">{"\\[1 + 2\\ln x = 0 \\implies 2\\ln x = -1 \\implies \\ln x = -\\frac{1}{2}\\]"}</div>
                    أدخل الدالة الأسية للحصول على قيمة الفاصلة الثابتة:
                    <div className="math-block">{"\\[x = e^{-1/2} = \\frac{1}{\\sqrt{e}} \\approx 0.607\\]"}</div>
                    القيمة
                    <span className="math">{"\\(e^{-1/2}\\)"}</span>
                    تقع تماماً داخل مجال التعريف
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>.
                    إذن المعادلة تقبل حلاً وحيداً ومقبولاً.
                </div>
                <div className="right-col">
                    نختزل الحدود المتشابهة ونبسط:
                    <div className="math-block">{"\\[1 + 2\\ln x = 0 \\implies \\ln x = -\\frac{1}{2} \\implies x = e^{-1/2}\\]"}</div>
                    بما أن الحل
                    <span className="math">{"\\(e^{-1/2}\\)"}</span> ينتمي لمجال تعريف الدالة، فإن المنحنى يقبل مماسًا وحيدًا يوازيه عند الفاصلة
                    <span className="math">{"\\(x = e^{-1/2}\\)"}</span>.
                </div>
            </div>

            {/* II.Q3.C — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التحقق تم بنجاح:
                    وجدنا حلاً حقيقياً فريداً وموجباً تماماً.
                    هذا يؤكد وجود مماس موازٍ وحيد للمقارب المائل عند الفاصلة المذكورة.
                </div>
                <div className="right-col">
                    إذن، المماس الموازي
                    <span className="math">{"\\((T)\\)"}</span> يمس المنحنى عند الفاصلة
                    <span className="math">{"\\(x = e^{-1/2}\\)"}</span>.
                </div>
            </div>

            <div className="danger-box">
                <div className="danger-box-title">⚠️ احذر من الخلط بين التوازي والتقاطع!</div>
                يقع بعض الطلاب في خطأ فادح ويقومون بحل المعادلة
                <span className="math">{"\\(f(x) = -x\\)"}</span>
                وهذا يعطيك نقاط التقاطع وليس نقاط التوازي. التوازي هو شرط تفاضلي يرتبط بالمشتقة
                <span className="math">{"\\(f'(x) = -1\\)"}</span>.
            </div>

            {/* ============================================================
                PART II — Q4
            ============================================================ */}
            <div className="sub-question">
                4) إثبات أن المنحنى يقطع محور الفواصل في نقطتين محصورتين
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q4 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    سأقوم بتقسيم دراسة الدالة إلى فترتين اعتماداً على جدول التغيرات:
                    <br />1. في المجال
                    <span className="math">{"\\(]0, \\alpha]\\)"}</span>: الدالة متزايدة تماماً وصور الأطراف يجب أن تتعاكس إشارتها لتثبت وجود
                    <span className="math">{"\\(x_0\\)"}</span>.
                    <br />2. في المجال
                    <span className="math">{"\\([\\alpha, +\\infty[\\)"}</span>: الدالة متناقصة تماماً وصور الأطراف يجب أن تتعاكس إشارتها لتثبت وجود
                    <span className="math">{"\\(x_1\\)"}</span>.
                    الاستمرارية محققة دائماً.
                </div>
                <div className="right-col">
                    الدالة مستمرة ورتيبة تماماً في كل من المجالين الفرعيين.
                </div>
            </div>

            {/* II.Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إثبات أن المنحنى يقطع محور الفواصل في نقطتين مختلفتين، وتحديد حصر دقيق لكل منهما:
                    <br />• الأولى
                    <span className="math">{"\\(x_0\\)"}</span> في المجال
                    <span className="math">{"\\(]0.22, 0.23[\\)"}</span>.
                    <br />• الثانية
                    <span className="math">{"\\(x_1\\)"}</span> في المجال
                    <span className="math">{"\\(]2.11, 2.13[\\)"}</span>.
                    هذا يتطلب تطبيق مبرهنة القيم المتوسطة مرتين في مجالي الرتابة المختلفين للدالة.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات أن المعادلة
                    <span className="math">{"\\(f(x) = 0\\)"}</span> تقبل حلين محصورين في المجالين المعطيين.
                </div>
            </div>

            {/* II.Q4 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحتاج لحساب الصور التقريبية لأطراف الفترات المقترحة:
                    <br />• للمجال الأول: أحسب
                    <span className="math">{"\\(f(0.22)\\)"}</span> و
                    <span className="math">{"\\(f(0.23)\\)"}</span>.
                    <br />• للمجال الثاني: أحسب
                    <span className="math">{"\\(f(2.11)\\)"}</span> و
                    <span className="math">{"\\(f(2.13)\\)"}</span>.
                </div>
                <div className="right-col">
                    سنقوم بحساب صور القيم العددية المحددة في التمرين للتحقق من شروط مبرهنة القيم المتوسطة.
                </div>
            </div>

            {/* II.Q4 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ العددي الدقيق</span><br />
                    <strong>1. حساب صور المجال الأول:</strong>
                    <br />•
                    <span className="math">{"\\(f(0.22) = -0.22 + \\frac{3+2\\ln(0.22)}{0.22}\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\(\\ln(0.22) \\approx -1.514\\)"}</span>.
                    إذن الكسر هو:
                    <span className="math">{"\\(/\\frac{3 - 3.028}{0.22} = \\frac{-0.028}{0.22} \\approx -0.127\\)"}</span>.
                    وبالتالي:
                    <span className="math">{"\\(f(0.22) \\approx -0.22 - 0.127 = -0.347 < 0\\)"}</span>.
                    <br />•
                    <span className="math">{"\\(f(0.23) = -0.23 + \\frac{3+2\\ln(0.23)}{0.23}\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\(\\ln(0.23) \\approx -1.470\\)"}</span>.
                    إذن الكسر هو:
                    <span className="math">{"\\(\\frac{3 - 2.940}{0.23} = \\frac{0.06}{0.23} \\approx 0.261\\)"}</span>.
                    وبالتالي:
                    <span className="math">{"\\(f(0.23) \\approx -0.23 + 0.261 = 0.031 > 0\\)"}</span>.
                    نلاحظ تغير الإشارة بوضوح! إذن يوجد حل وحيد
                    <span className="math">{"\\(x_0\\)"}</span> في المجال.
                    <br /><br />
                    <strong>2. حساب صور المجال الثاني:</strong>
                    <br />•
                    <span className="math">{"\\(f(2.11) = -2.11 + \\frac{3+2\\ln(2.11)}{2.11}\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\(\\ln(2.11) \\approx 0.747\\)"}</span>.
                    إذن الكسر هو:
                    <span className="math">{"\\(\\frac{3 + 1.494}{2.11} = \\frac{4.494}{2.11} \\approx 2.130\\)"}</span>.
                    وبالتالي:
                    <span className="math">{"\\(f(2.11) \\approx -2.11 + 2.130 = 0.020 > 0\\)"}</span>.
                    <br />•
                    <span className="math">{"\\(f(2.13) = -2.13 + \\frac{3+2\\ln(2.13)}{2.13}\\)"}</span>.
                    نعلم أن
                    <span className="math">{"\\(\\ln(2.13) \\approx 0.756\\)"}</span>.
                    إذن الكسر هو:
                    <span className="math">{"\\(\\frac{3 + 1.512}{2.13} = \\frac{4.512}{2.13} \\approx 2.118\\)"}</span>.
                    وبالتالي:
                    <span className="math">{"\\(f(2.13) \\approx -2.13 + 2.118 = -0.012 < 0\\)"}</span>.
                    تغير الإشارة محقق! إذن يوجد حل وحيد
                    <span className="math">{"\\(x_1\\)"}</span> في المجال الثاني.
                </div>
                <div className="right-col">
                    1. من أجل المجال الأول
                    <span className="math">{"\\([0.22, 0.23]\\)"}</span>:
                    الدالة مستمرة ومتزايدة تماماً ولدينا:
                    <div className="math-block">{"\\[f(0.22) \\approx -0.35 < 0\\]"}</div>
                    <div className="math-block">{"\\[f(0.23) \\approx 0.03 > 0\\]"}</div>
                    بما أن
                    <span className="math">{"\\(f(0.22) \\cdot f(0.23) < 0\\)"}</span>، فإنه يوجد حل وحيد
                    <span className="math">{"\\(x_0\\)"}</span> بحيث
                    <span className="math">{"\\(0.22 < x_0 < 0.23\\)"}</span>.
                    <br /><br />
                    2. من أجل المجال الثاني
                    <span className="math">{"\\([2.11, 2.13]\\)"}</span>:
                    الدالة مستمرة ومتناقصة تماماً ولدينا:
                    <div className="math-block">{"\\[f(2.11) \\approx 0.02 > 0\\]"}</div>
                    <div className="math-block">{"\\[f(2.13) \\approx -0.01 < 0\\]"}</div>
                    بما أن
                    <span className="math">{"\\(f(2.11) \\cdot f(2.13) < 0\\)"}</span>، فإنه يوجد حل وحيد
                    <span className="math">{"\\(x_1\\)"}</span> بحيث
                    <span className="math">{"\\(2.11 < x_1 < 2.13\\)"}</span>.
                </div>
            </div>

            {/* II.Q4 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    شروط مبرهنة القيم المتوسطة محققة مرتين بالتمام والكمال.
                    وجدنا نقطتي عبور واضحة تفصلان المنحنى عن محور الفواصل.
                    هذا يؤكد سلامة الحسابات والتناسق الكامل للدالة.
                </div>
                <div className="right-col">
                    إذن، يقطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> حامل محور الفواصل في نقطتين فاصلتاهما
                    <span className="math">{"\\(x_0\\)"}</span> و
                    <span className="math">{"\\(x_1\\)"}</span> في المجالين المذكورين.
                </div>
            </div>

            {/* ============================================================
                PART III — Q1
            ============================================================ */}
            <div className="sub-question">
                1) إثبات أن حدود المتتالية موجبة تماماً: <span className="math">{"\\(u_n > 0\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* III.Q1 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    لقد بسطنا عبارة ما داخل التكامل سابقاً:
                    <span className="math">{"\\(f(x)+x = \\frac{3+2\\ln x}{x}\\)"}</span>.
                    الترجمة الرياضية تعتمد على الخاصية الخطية للتكامل:
                    إذا كانت الدالة المراد مكاملتها موجبة تماماً على مجال التكامل، وكانت حدود التكامل مرتبة تصاعدياً
                    <span className="math">{"\\((a < b)\\)"}</span>، فإن قيمة التكامل تكون حتماً موجبة تماماً.
                </div>
                <div className="right-col">
                    ندرس إشارة الدالة
                    <span className="math">{"\\(h(x) = f(x)+x = \\frac{3+2\\ln x}{x}\\)"}</span> على مجال التكامل.
                </div>
            </div>

            {/* III.Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو برهنة أن جميع حدود المتتالية المعرفة بالتكامل:
                    <span className="math">{"\\(u_n = \\int_{e^n}^{e^{n+1}} [f(x)+x] dx\\)"}</span>
                    هي أعداد موجبة تماماً من أجل كل عدد طبيعي
                    <span className="math">{"\\(n\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات أن قيمة التكامل موجبة تماماً من أجل كل
                    <span className="math">{"\\(n \\ge 0\\)"}</span>.
                </div>
            </div>

            {/* III.Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    مجال التكامل هو
                    <span className="math">{"\\([e^n, e^{n+1}]\\)"}</span>.
                    بما أن
                    <span className="math">{"\\(n\\)"}</span> عدد طبيعي
                    <span className="math">{"\\((n \\ge 0)\\)"}</span>:
                    <br />• الحد الأدنى للمجال هو
                    <span className="math">{"\\(e^n \\ge e^0 = 1\\)"}</span>.
                    إذن المتغير
                    <span className="math">{"\\(x\\)"}</span> يقع في المجال الموجب تماماً.
                    <br />• بما أن
                    <span className="math">{"\\(x \\ge 1\\)"}</span>، فإن اللوغاريتم يكون موجباً أو معدوماً:
                    <span className="math">{"\\(\\ln x \\ge 0\\)"}</span>.
                    وبالتالي البسط
                    <span className="math">{"\\(3 + 2\\ln x \\ge 3 > 0\\)"}</span>.
                    المقام
                    <span className="math">{"\\(x \\ge 1 > 0\\)"}</span>.
                    إذن الدالة موجبة تماماً على كامل مجال التكامل.
                </div>
                <div className="right-col">
                    من أجل كل
                    <span className="math">{"\\(n \\in \\mathbb{N}\\)"}</span>، لدينا مجال التكامل
                    <span className="math">{"\\(x \\in [e^n, e^{n+1}]\\)"}</span>.
                    بما أن
                    <span className="math">{"\\(e^n \\ge 1\\)"}</span>:
                    <div className="math-block">{"\\[x \\ge 1 \\implies \\ln x \\ge 0 \\implies 3+2\\ln x \\ge 3 > 0\\]"}</div>
                </div>
            </div>

            {/* III.Q1 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    أربط الشروط ببعضها البعض:
                    <br />1. الدالة موجبة تماماً على المجال.
                    <br />2. حدود التكامل مرتبة بشكل صحيح لأن الأساس
                    <span className="math">{"\\(e > 1\\)"}</span> يضمن أن
                    <span className="math">{"\\(e^n < e^{n+1}\\)"}</span>.
                    إذن، حسب قواعد مقارنة التكاملات:
                    <div className="math-block">{"\\[u_n = \\int_{e^n}^{e^{n+1}} [f(x)+x] dx > 0\\]"}</div>
                </div>
                <div className="right-col">
                    بما أن البسط والمقام موجبان تماماً، فإن:
                    <div className="math-block">{"\\[\\forall x \\in [e^n, e^{n+1}], \\quad \\frac{3+2\\ln x}{x} > 0\\]"}</div>
                    وحيث أن حدود التكامل مرتبة تصاعدياً
                    <span className="math">{"\\(e^n < e^{n+1}\\)"}</span>، فإن:
                    <div className="math-block">{"\\[u_n > 0\\]"}</div>
                </div>
            </div>

            {/* III.Q1 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    التحقق ممتاز:
                    كل من الدالة ومجال التكامل موجبين، وترتيب أطراف التكامل يحمي إشارة النتيجة من الانعكاس.
                    إذن
                    <span className="math">{"\\(u_n\\)"}</span> موجب تماماً.
                </div>
                <div className="right-col">
                    إذن، من أجل كل عدد طبيعي
                    <span className="math">{"\\(n\\)"}</span>:
                    <span className="math">{"\\(u_n > 0\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART III — Q2 (NEW ADDITION)
            ============================================================ */}
            <div className="sub-question">
                2) التفسير الهندسي للمقدار <span className="math">{"\\(u_0\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* III.Q2 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    نعلم هندسياً أن تكامل الفرق بين دالتين يمثل مساحة السطح المحصور بين منحييهما البيانيين.
                    العبارة المكاملة هي:
                    <span className="math">{"\\(f(x) - (-x) = f(x) - y_{\\Delta}\\)"}</span>.
                    بما أننا أثبتنا سابقاً أن المنحنى يقع <strong>فوق</strong> المقارب
                    <span className="math">{"\\((\\Delta)\\)"}</span> من أجل قيم
                    <span className="math">{"\\(x > e^{-1.5} \\approx 0.22\\)"}</span>،
                    فإن المنحنى يقع فوق المقارب بالتأكيد على المجال
                    <span className="math">{"\\([1, e]\\)"}</span>.
                </div>
                <div className="right-col">
                    التكامل يمثل مساحة المنطقة المحصورة بين منحنى الدالة والمستقيم المقارب.
                </div>
            </div>

            {/* III.Q2 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو تقديم تفسير هندسي واضح ومعياري للحد الأول للمتتالية
                    <span className="math">{"\\(u_0\\)"}</span>.
                    التعريف الرياضي لـ
                    <span className="math">{"\\(u_0\\)"}</span> هو قيمة التكامل من
                    <span className="math">{"\\(e^0=1\\)"}</span> إلى
                    <span className="math">{"\\(e^1=e\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> تفسير المقدار
                    <span className="math">{"\\(u_0 = \\int_{1}^{e} [f(x)-(-x)] dx\\)"}</span> هندسياً كمساحة.
                </div>
            </div>

            {/* III.Q2 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    سأقوم بربط التكامل بحدود هندسية واضحة:
                    <br />• من الأعلى: المنحنى البياني
                    <span className="math">{"\\((C_f)\\)"}</span>.
                    <br />• من الأسفل: المستقيم المقارب المائل
                    <span className="math">{"\\((\\Delta)\\)"}</span> معادلته
                    <span className="math">{"\\(y = -x\\)"}</span>.
                    <br />• من الجانبين: المستقيمان الرأسيان ذوا المعادلتين
                    <span className="math">{"\\(x = 1\\)"}</span>
                    و
                    <span className="math">{"\\(x = e\\)"}</span>.
                </div>
                <div className="right-col">
                    على المجال
                    <span className="math">{"\\([1, e]\\)"}</span>، لدينا المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> يقع تماماً فوق المستقيم المقارب
                    <span className="math">{"\\((\\Delta)\\)"}</span>.
                </div>
            </div>

            {/* III.Q2 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    أصيغ التفسير الهندسي النهائي بلغة المساحات ووحدات قياس المساحة (u.a.).
                    المنطقة مغلقة تماماً ومحددة بالحدود الأربعة المذكورة.
                </div>
                <div className="right-col">
                    <strong>التفسير الهندسي:</strong>
                    <br />
                    المقدار
                    <span className="math">{"\\(u_0\\)"}</span> هو مساحة الحيز المستوي المحصور بين المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>، والمستقيم المقارب المائل
                    <span className="math">{"\\((\\Delta)\\)"}</span>، والمستقيمين اللذين معادلتاهما
                    <span className="math">{"\\(x = 1\\)"}</span> و
                    <span className="math">{"\\(x = e\\)"}</span>، وتقدر هذه المساحة بـ
                    <span className="math">{"\\(u_0\\)"}</span> وحدة مساحة (u.a.).
                </div>
            </div>

            {/* III.Q2 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من أن الترتيب والرموز متناسقة:
                    التكامل من الصغير (1) إلى الكبير (e) يعطي مساحة موجبة، والوضعية صحيحة لأن المنحنى يقع فوق المقارب في هذا الحيز. التفسير الهندسي دقيق ومكتمل.
                </div>
                <div className="right-col">
                    التفسير الهندسي للمساحة محقق تماماً.
                </div>
            </div>

            <div className="trigger-box">
                <div className="trigger-box-title">⚡ دليل المحفزات البصرية (Trigger)</div>
                كلما رأيت سؤالاً يطلب التفسير الهندسي لتكامل من شكل
                <span className="math">{"\\(\\int_a^b [f(x) - y] dx\\)"}</span>
                فهو يرمز دوماً للمساحة المحصورة بين المنحنى والمستقيم. انتبه للوضعية النسبية لضمان كتابة الفرق بالشكل الصحيح للحصول على مساحة موجبة هندسياً.
            </div>

            {/* ============================================================
                PART III — Q3
            ============================================================ */}
            <div className="sub-question">
                3) حساب قيمة <span className="math">{"\\(u_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* III.Q3 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    سأقوم بتفكيك الكسر لتسهيل إيجاد دوال أصلية مألوفة:
                    <div className="math-block">{"\\[\\frac{3+2\\ln x}{x} = \\frac{3}{x} + 2\\frac{\\ln x}{x} = 3\\left(\\frac{1}{x}\\right) + 2\\left(\\frac{1}{x}\\right)\\ln x\\]"}</div>
                    الآن أبحث عن الدوال الأصلية لكل حد:
                    <br />• الحد الأول:
                    <span className="math">{"\\(3 \\cdot \\frac{1}{x}\\)"}</span>
                    دالته الأصلية هي
                    <span className="math">{"\\(3\\ln x\\)"}</span> (بما أن المتغير موجب، يمكن الاستغناء عن القيمة المطلقة).
                    <br />• الحد الثاني:
                    <span className="math">{"\\(2 \\cdot \\frac{1}{x} \\cdot \\ln x\\)"}</span>
                    هو من الشكل الشهير
                    <span className="math">{"\\(2u'u\\)"}</span>
                    حيث
                    <span className="math">{"\\(u(x) = \\ln x\\)"}</span>.
                    الدالة الأصلية لهذا الشكل هي
                    <span className="math">{"\\(u^2 = (\\ln x)^2\\)"}</span>.
                </div>
                <div className="right-col">
                    نحدد الدوال الأصلية للمركبات الكسرية على المجال
                    <span className="math">{"\\([e^n, e^{n+1}]\\)"}</span>.
                </div>
            </div>

            {/* III.Q3 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو حساب التكامل المحدد بشكل صريح للحصول على عبارة جبرية لـ
                    <span className="math">{"\\(u_n\\)"}</span>
                    بدلالة المتغير الطبيعي
                    <span className="math">{"\\(n\\)"}</span>.
                    الخطوة الأساسية هي إيجاد الدالة الأصلية للعبارة المكاملة.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب قيمة التكامل بدلالة
                    <span className="math">{"\\(n\\)"}</span> بإيجاد الدالة الأصلية المناسبة.
                </div>
            </div>

            {/* III.Q3 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط النتائج ببعضها للحصول على الدالة الأصلية الكلية
                    <span className="math">{"\\(U(x)\\)"}</span>:
                    <div className="math-block">{"\\[U(x) = 3\\ln x + (\\ln x)^2\\]"}</div>
                    سأستخدم نظرية التكامل لحساب الفرق بين قيم الدالة الأصلية عند حدي التكامل:
                    <div className="math-block">{"\\[u_n = U(e^{n+1}) - U(e^n)\\]"}</div>
                </div>
                <div className="right-col">
                    الدالة الأصلية للدالة
                    <span className="math">{"\\(x \\mapsto \\frac{3+2\\ln x}{x}\\)"}</span> هي:
                    <div className="math-block">{"\\[U(x) = 3\\ln x + (\\ln x)^2\\]"}</div>
                </div>
            </div>

            {/* III.Q3 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري التفصيلي</span><br />
                    سأقوم بحساب كل حد بدقة متناهية ودون اختصار لضمان عدم حدوث خطأ في الإشارات:
                    <br /><br />
                    <strong>1. حساب صورة الحد الأعلى:</strong>
                    <div className="math-block">{"\\[U(e^{n+1}) = 3\\ln(e^{n+1}) + (\\ln(e^{n+1}))^2\\]"}</div>
                    نعلم أن
                    <span className="math">{"\\( \\ln(e^{a}) = a \\)"}</span>. إذن:
                    <div className="math-block">{"\\[U(e^{n+1}) = 3(n+1) + (n+1)^2 = 3n + 3 + n^2 + 2n + 1 = n^2 + 5n + 4\\]"}</div>
                    <strong>2. حساب صورة الحد الأدنى:</strong>
                    <div className="math-block">{"\\[U(e^n) = 3\\ln(e^n) + (\\ln(e^n))^2 = 3n + n^2\\]"}</div>
                    <strong>3. حساب الفرق:</strong>
                    <div className="math-block">{"\\[u_n = (n^2 + 5n + 4) - (n^2 + 3n)\\]"}</div>
                    بتبسيط الحدود المتشابهة:
                    <div className="math-block">{"\\[u_n = 2n + 4\\]"}</div>
                    المتتالية حسابية أساسها 2 وحدها الأول 4.
                </div>
                <div className="right-col">
                    نطبق قانون التكامل بالتعويض والتبسيط:
                    <div className="math-block">{"\\[u_n = \\left[ 3\\ln x + (\\ln x)^2 \\right]_{e^n}^{e^{n+1}}\\]"}</div>
                    <div className="math-block">{"\\[u_n = \\left( 3\\ln(e^{n+1}) + [\\ln(e^{n+1})]^2 \\right) - \\left( 3\\ln(e^n) + [\\ln(e^n)]^2 \\right)\\]"}</div>
                    نعوض باستخدام خواص الدالة اللوغاريتمية والأسية:
                    <div className="math-block">{"\\[u_n = \\left( 3(n+1) + (n+1)^2 \\right) - (3n + n^2)\\]"}</div>
                    <div className="math-block">{"\\[u_n = (3n + 3 + n^2 + 2n + 1) - (3n + n^2)\\]"}</div>
                    <div className="math-block">{"\\[u_n = n^2 + 5n + 4 - 3n - n^2 = 2n + 4\\]"}</div>
                </div>
            </div>

            {/* III.Q3 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    سأقوم بالتحقق السريع لحالة
                    <span className="math">{"\\(n = 0\\)"}</span>:
                    <br />• من القانون المباشر:
                    <span className="math">{"\\(u_0 = 2(0) + 4 = 4\\)"}</span>.
                    <br />• من حساب التكامل المباشر:
                    <span className="math">{"\\(u_0 = \\int_1^e \\frac{3+2\\ln x}{x} dx = [3\\ln x + \\ln^2 x]_1^e = (3(1)+1) - (0) = 4\\)"}</span>.
                    النتيجتان متطابقتان تماماً! النتيجة مضمونة وصحيحة.
                </div>
                <div className="right-col">
                    العبارة النهائية لـ
                    <span className="math">{"\\(u_n\\)"}</span> بدلالة
                    <span className="math">{"\\(n\\)"}</span> هي:
                    <span className="math">{"\\(u_n = 2n + 4\\)"}</span>.
                </div>
            </div>

            <div className="danger-box">
                <div className="danger-box-title">⚠️ انتبه لمربع اللوغاريتم!</div>
                يقع بعض الطلاب في خطأ عند تربيع الحدود، فيظنون أن
                <span className="math">{"\\((\\ln x)^2 = 2\\ln x\\)"}</span>
                وهذا خلط فادح مع الخاصية
                <span className="math">{"\\(\\ln(x^2) = 2\\ln x\\)"}</span>.
                تذكر دائماً أن مربع الدالة بأكملها لا يخضع لخاصية سحب الأس أمام اللوغاريتم.
            </div>

            {/* ============================================================
                PART III — Q4
            ============================================================ */}
            <div className="sub-question">
                4) حساب المجموع <span className="math">{"\\(S_n = u_0 + u_1 + ... + u_n\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* III.Q4 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    بما أننا وجدنا أن
                    <span className="math">{"\\(u_n = 2n + 4\\)"}</span>، فإن هذه متتالية حسابية أساسها
                    <span className="math">{"\\(r = 2\\)"}</span> وحدها الأول
                    <span className="math">{"\\(u_0 = 4\\)"}</span>.
                    الترجمة المباشرة هي تطبيق قانون مجموع متتالية حسابية:
                    <div className="math-block">{"\\[S = (\\text{عدد الحدود}) \\cdot \\frac{\\text{الحد الأول} + \\text{الحد الأخير}}{2}\\]"}</div>
                </div>
                <div className="right-col">
                    المتتالية
                    <span className="math">{"\\((u_n)\\)"}</span> هي متتالية حسابية أساسها
                    <span className="math">{"\\(r = 2\\)"}</span> وحدها الأول
                    <span className="math">{"\\(u_0 = 4\\)"}</span>.
                </div>
            </div>

            {/* III.Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو حساب المجموع المتتالي
                    <span className="math">{"\\(S_n\\)"}</span>
                    لأول
                    <span className="math">{"\\(n+1\\)"}</span> حد من حدود المتتالية
                    <span className="math">{"\\((u_n)\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب عبارة المجموع
                    <span className="math">{"\\(S_n\\)"}</span> بدلالة
                    <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>

            {/* III.Q4 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحدد مركبات المجموع بدقة:
                    <br />• عدد الحدود من
                    <span className="math">{"\\(0\\)"}</span> إلى
                    <span className="math">{"\\(n\\)"}</span> هو
                    <span className="math">{"\\(n - 0 + 1 = n + 1\\)"}</span>.
                    <br />• الحد الأول هو
                    <span className="math">{"\\(u_0 = 4\\)"}</span>.
                    <br />• الحد الأخير هو
                    <span className="math">{"\\(u_n = 2n + 4\\)"}</span>.
                </div>
                <div className="right-col">
                    قانون مجموع متتالية حسابية هو:
                    <div className="math-block">{"\\[S_n = (n+1) \\cdot \\frac{u_0 + u_n}{2}\\]"}</div>
                </div>
            </div>

            {/* III.Q4 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري التفصيلي</span><br />
                    أعوض الحدود في صيغتها وأبسط الكسر:
                    <div className="math-block">{"\\[S_n = (n+1) \\cdot \\frac{4 + (2n + 4)}{2} = (n+1) \\cdot \\frac{2n + 8}{2}\\]"}</div>
                    أستخرج 2 كعامل مشترك في البسط لتسهيل الاختزال:
                    <div className="math-block">{"\\[\\frac{2(n + 4)}{2} = n + 4\\]"}</div>
                    إذن المجموع المتبسط هو:
                    <div className="math-block">{"\\[S_n = (n+1)(n+4) = n^2 + 5n + 4\\]"}</div>
                </div>
                <div className="right-col">
                    نعوض القيم ونبسط جبرياً:
                    <div className="math-block">{"\\[S_n = (n+1) \\cdot \\frac{4 + 2n + 4}{2} = (n+1) \\cdot \\frac{2n + 8}{2}\\]"}</div>
                    <div className="math-block">{"\\[S_n = (n+1)(n+4) = n^2 + 5n + 4\\]"}</div>
                </div>
            </div>

            {/* III.Q4 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق لحالة
                    <span className="math">{"\\(n = 0\\)"}</span> و
                    <span className="math">{"\\(n = 1\\)"}</span>:
                    <br />• من أجل
                    <span className="math">{"\\(n = 0\\)"}</span>:
                    <span className="math">{"\\(S_0 = u_0 = 4\\)"}</span>.
                    العبارة تعطي:
                    <span className="math">{"\\(0^2 + 5(0) + 4 = 4\\)"}</span>. ✓
                    <br />• من أجل
                    <span className="math">{"\\(n = 1\\)"}</span>:
                    <span className="math">{"\\(S_1 = u_0 + u_1 = 4 + (2(1)+4) = 4 + 6 = 10\\)"}</span>.
                    العبارة تعطي:
                    <span className="math">{"\\(1^2 + 5(1) + 4 = 10\\)"}</span>. ✓
                    النتائج متطابقة بنسبة مئة بالمئة ومبرهنة بالكامل.
                </div>
                <div className="right-col">
                    إذن المجموع النهائي بدلالة
                    <span className="math">{"\\(n\\)"}</span> هو:
                    <span className="math">{"\\(S_n = (n+1)(n+4)\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART IV — ADDITIONAL PROBLEM
            ============================================================ */}
            <div className="section-divider">الجزء الرابع — المناقشة البيانية الوسيطية</div>

            <div className="step-row-two">
                <div className="col-header left-h">التفكير الذهني الداخلي</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* Q4 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    المعادلة المعطاة هي:
                    <span className="math">{"\\(3 + 2\\ln(x) - mx = 0\\)"}</span>.
                    أولاً، بما أن المجال هو
                    <span className="math">{"\\(]0, +\\infty[\\)"}</span>، فإن
                    <span className="math">{"\\(x \\ne 0\\)"}</span>.
                    يمكنني قسمة الطرفين على
                    <span className="math">{"\\(x\\)"}</span> لعزل الوسيط
                    <span className="math">{"\\(m\\)"}</span>:
                    <div className="math-block">{"\\[\\frac{3 + 2\\ln(x)}{x} - m = 0 \\iff \\frac{3 + 2\\ln(x)}{x} = m\\]"}</div>
                    سأقوم الآن بالربط مع عبارة الدالة
                    <span className="math">{"\\(f(x)\\)"}</span>:
                    <br />
                    نعلم أن
                    <span className="math">{"\\(f(x) = -x + \\frac{3+2\\ln x}{x}\\)"}</span>.
                    إذن:
                    <span className="math">{"\\(f(x) + x = \\frac{3+2\\ln x}{x}\\)"}</span>.
                    <br />
                    بالتالي، المعادلة تكافئ تماماً:
                    <div className="math-block">{"\\[f(x) + x = m \\iff f(x) = -x + m\\]"}</div>
                    هذه مناقشة بيانية مائلة! الحلول هي فواصل نقاط تقاطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    مع المستقيمات
                    <span className="math">{"\\((D_m)\\)"}</span> ذوات المعادلة
                    <span className="math">{"\\(y = -x + m\\)"}</span>.

                    <div className="why-box" style={{ margin: '8px 0', borderRight: '4px solid #3498db', padding: '6px 12px', background: '#ebf5fb', borderRadius: '4px' }}>
                        <strong>لماذا قمنا بالقسمة والربط؟</strong><br />
                        لأن الوسيط
                        <span className="math">{"\\(m\\)"}</span>
                        مضروب في
                        <span className="math">{"\\(x\\)"}</span>.
                        قسمة المعادلة على
                        <span className="math">{"\\(x\\)"}</span> (الموجب تماماً) تعزل الوسيط في طرف وتكشف لنا العبارة المألوفة
                        <span className="math">{"\\(f(x) + x\\)"}</span>
                        التي درسناها سابقاً في الفرع والمقاربات.
                    </div>
                    <div className="danger-box" style={{ margin: '8px 0', borderRight: '4px solid #e74c3c', padding: '6px 12px', background: '#fdedec', borderRadius: '4px' }}>
                        <strong>تنبيه (Danger):</strong><br />
                        لا تحاول مناقشة المعادلة مباشرة بصورتها الأصلية
                        <span className="math">{"\\(3+2\\ln x - mx = 0\\)"}</span>
                        دون ربطها بالمنحنى
                        <span className="math">{"\\((C_f)\\)"}</span>،
                        لأن هذا سيقودك إلى دوال معقدة تتغير بتغير الوسيط. الربط بالمنحنى الثابت
                        <span className="math">{"\\((C_f)\\)"}</span>
                        يجعل المناقشة مجرد حركة مستقيمات موازية للمقارب.
                    </div>
                </div>
                <div className="right-col">
                    بما أن
                    <span className="math">{"\\(x > 0\\)"}</span>:
                    <div className="math-block">{"\\[3 + 2\\ln(x) - mx = 0 \\iff \\frac{3 + 2\\ln(x)}{x} = m\\]"}</div>
                    وبتذكّر عبارة الدالة
                    <span className="math">{"\\(f(x)\\)"}</span>، نجد أن:
                    <span className="math">{"\\(f(x) + x = \\frac{3+2\\ln(x)}{x}\\)"}</span>.
                    إذن المعادلة تكافئ:
                    <div className="math-block">{"\\[f(x) = -x + m\\]"}</div>
                    وهي معادلة فواصل نقاط تقاطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    مع عائلة المستقيمات المائلة
                    <span className="math">{"\\((D_m)\\)"}</span> ذات المعادلة
                    <span className="math">{"\\(y = -x + m\\)"}</span>.
                </div>
            </div>

            {/* Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    أريد تحديد عدد حلول المعادلة
                    <span className="math">{"\\(f(x) = -x + m\\)"}</span>
                    تبعاً لقيم الوسيط الحقيقي
                    <span className="math">{"\\(m\\)"}</span>.
                    هذا يتطلب دراسة عدد التقاطعات مع عائلة المستقيمات ذات الميل
                    <span className="math">{"\\(-1\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> مناقشة عدد حلول المعادلة بيانياً حسب قيم الوسيط
                    <span className="math">{"\\(m\\)"}</span>،
                    وهو ما يوافق عدد نقاط تقاطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    مع المستقيمات المائلة ذات الميل
                    <span className="math">{"\\(-1\\)"}</span>.
                </div>
            </div>

            {/* Q4 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label link">R. الربط (Relate)</span><br />
                    المستقيمات
                    <span className="math">{"\\((D_m): y = -x + m\\)"}</span>
                    توازي المستقيم المقارب المائل
                    <span className="math">{"\\((\\Delta): y = -x\\)"}</span> (الذي يوافق
                    <span className="math">{"\\(m = 0\\)"}</span>) والمماس
                    <span className="math">{"\\((T)\\)"}</span> الذي يوازيه.
                    <br />
                    نعلم من الجزء الثاني (السؤال 3.ج) أن المنحنى يقبل مماساً
                    <span className="math">{"\\((T)\\)"}</span> يوازي
                    <span className="math">{"\\((\\Delta)\\)"}</span> عند نقطة فاصلتها
                    <span className="math">{"\\(x_0 = e^{-1/2} = \\frac{1}{\\sqrt{e}}\\)"}</span>.
                    <br />
                    معادلة المماس هي:
                    <span className="math">{"\\(y = -x + m_T\\)"}</span>
                    حيث
                    <span className="math">{"\\(m_T = f(x_0) + x_0 = \\frac{3+2\\ln(x_0)}{x_0} = \\frac{3+2(-1/2)}{e^{-1/2}} = 2\\sqrt{e}\\)"}</span>.
                    إذن معادلة المماس هي:
                    <span className="math">{"\\(y = -x + 2\\sqrt{e}\\)"}</span>.
                    هذا يعني أن القيمة الحدية للوسيط عند التماس هي
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>.
                </div>
                <div className="right-col">
                    نربط المعادلة بالمستقيمات المعلمية المميزة في التمرين:
                    <br />
                    • المستقيم المقارب المائل
                    <span className="math">{"\\((\\Delta): y = -x\\)"}</span> (حيث
                    <span className="math">{"\\(m = 0\\)"}</span>).
                    <br />
                    • المماس الموازي له
                    <span className="math">{"\\((T): y = -x + 2\\sqrt{e}\\)"}</span> (حيث
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>).
                </div>
            </div>

            {/* Q4 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label execution">E. التنفيذ الجبري (Execution)</span><br />
                    سأقوم بدراسة الدالة الممثلة للفرق أو المسافة العمودية:
                    <span className="math">{"\\(h(x) = f(x) + x = \\frac{3+2\\ln x}{x}\\)"}</span>.
                    تغيرات هذه الدالة تعطينا تماماً السلوك التقاطعي:
                    <br />• المشتقة:
                    <span className="math">{"\\(h'(x) = \\frac{-1-2\\ln x}{x^2}\\)"}</span>.
                    تنعدم عند
                    <span className="math">{"\\(x = e^{-1/2}\\)"}</span> حيث تبلغ قيمتها العظمى المطلقة
                    <span className="math">{"\\(2\\sqrt{e} \\approx 3.29\\)"}</span>.
                    <br />• جدول التغيرات للدالة
                    <span className="math">{"\\(h\\)"}</span>:
                    تتزايد من
                    <span className="math">{"\\(-\\infty\\)"}</span> (عند
                    <span className="math">{"\\(0^+\\)"}</span>) إلى القيمة العظمى
                    <span className="math">{"\\(2\\sqrt{e}\\)"}</span>، ثم تتناقص نحو
                    <span className="math">{"\\(0^+\\)"}</span> (عند
                    <span className="math">{"\\(+\\infty\\)"}</span>).
                    <br />
                    الآن نناقش حسب قيم
                    <span className="math">{"\\(m\\)"}</span>:
                    <br />1. إذا كان
                    <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span>:
                    المستقيم
                    <span className="math">{"\\((D_m)\\)"}</span> يقع تماماً فوق القيمة العظمى للمنحنى، وبالتالي <strong>لا توجد حلول</strong>.
                    <br />2. إذا كان
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>:
                    المستقيم يمس المنحنى عند النقطة ذات الفاصلة
                    <span className="math">{"\\(\\frac{1}{\\sqrt{e}}\\)"}</span>، وبالتالي يوجد <strong>حل وحيد مضاعف</strong>.
                    <br />3. إذا كان
                    <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span>:
                    المستقيم يقطع المنحنى في نقطتين، إحداهما قبل القيمة العظمى والأخرى بعدها، إذن يوجد <strong>حلان متمايزان</strong>.
                    <br />4. إذا كان
                    <span className="math">{"\\(m \\le 0\\)"}</span>:
                    بما أن نهاية الدالة عند
                    <span className="math">{"\\(+\\infty\\)"}</span> هي
                    <span className="math">{"\\(0^+\\)"}</span> (المنحنى فوق المقارب)، فإن الجزء المتناقص لا يقطع المستقيمات لكونها تحت المحور تماماً، بينما الجزء المتزايد يقطعها مرة واحدة لكونه يمتد إلى
                    <span className="math">{"\\(-\\infty\\)"}</span>. إذن يوجد <strong>حل وحيد</strong>.
                </div>
                <div className="right-col">
                    نلخص المناقشة البيانية المائلة كالآتي:
                    <br />
                    • إذا كان
                    <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span>: المعادلة <strong>لا تقبل حلولاً</strong>.
                    <br />
                    • إذا كان
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>: المعادلة تقبل <strong>حلاً وحيداً مضاعفاً</strong> هو
                    <span className="math">{"\\(x = \\frac{1}{\\sqrt{e}}\\)"}</span>.
                    <br />
                    • إذا كان
                    <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span>: المعادلة تقبل <strong>حلين متمايزين موجبيين تماماً</strong>.
                    <br />
                    • إذا كان
                    <span className="math">{"\\(m \\le 0\\)"}</span>: المعادلة تقبل <strong>حلاً وحيداً</strong> في المجال
                    <span className="math">{"\\(]0, \\frac{1}{\\sqrt{e}}[\\)"}</span>.
                </div>
            </div>

            {/* Q4 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أقوم بالتحقق من الحالات الخاصة:
                    <br />• عند
                    <span className="math">{"\\(m = 0\\)"}</span>:
                    المعادلة هي
                    <span className="math">{"\\(3 + 2\\ln(x) = 0 \\iff \\ln(x) = -1.5 \\iff x = e^{-1.5} \\approx 0.223\\)"}</span>.
                    وهذا يقع في المجال
                    <span className="math">{"\\(]0, \\frac{1}{\\sqrt{e}}[\\)"}</span> لأن
                    <span className="math">{"\\(e^{-1.5} < e^{-0.5}\\)"}</span>. وهو بالفعل حل وحيد.
                    <br />• عند
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>:
                    المعادلة هي
                    <span className="math">{"\\(3 + 2\\ln(x) - 2\\sqrt{e}x = 0\\)"}</span>.
                    بالتعويض بـ
                    <span className="math">{"\\(x = e^{-0.5}\\)"}</span>:
                    <span className="math">{"\\(3 + 2(-0.5) - 2e^{0.5}e^{-0.5} = 3 - 1 - 2 = 0\\)"}</span>. ✓ التحقق صحيح تماماً!
                </div>
                <div className="right-col">
                    التحقق الحسابي يؤكد دقة الحدود الفاصلة للمناقشة وتوافقها التام مع النتائج النظرية المدروسة.
                </div>
            </div>

            {/* ============================================================
                FINAL STRATEGY
            ============================================================ */}
            <div className="strategy-box" style={{ marginTop: '20px' }}>
                <div className="strategy-box-title">الخلاصة الاستراتيجية الكبرى للتمرين</div>
                <strong>أهم ما نتعلمه من هذا التمرين الشامل:</strong>
                <br /><br />
                1. <strong>سلاح الدالة المساعدة:</strong> دراسة إشارة الدالة المساعدة في البداية هي أساس تفكيك تغيّرات الدالة الكبرى. لا يمكن حل البكالوريا بنجاح دون ربطهما بشكل صحيح.
                <br /><br />
                2. <strong>تجريد الجذر للتسهيل:</strong> عندما يطلب منك إثبات علاقة لصورة الجذر مثل
                <span className="math">{"\\(f(\\alpha)\\)"}</span>،
                استعمل دائماً الحقيقة الصفرية
                <span className="math">{"\\(g(\\alpha) = 0\\)"}</span>
                لعزل اللوغاريتم أو الأسية والتخلص منها. هذا يجعل الحصر ممكناً وبأقل نسبة خطأ تقريبي.
                <br /><br />
                3. <strong>التكامل والوضعية النسبية:</strong> حساب المساحات أو المتتاليات التكاملية يتطلب دائماً التأكد مسبقاً من إشارة الفرق لضمان الحصول على تكاملات موجبة تعبر عن كميات هندسية حقيقية.
            </div>
        </>
    );
};

export default Exercice4;