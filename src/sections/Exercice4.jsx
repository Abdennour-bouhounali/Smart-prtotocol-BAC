import React from 'react';
import signeOfGImg from '../images/signe_of_g.png';
import variationTableOfFImg from '../images/variation_table_of_f.png';
import graphesFTDImg from '../images/graphes_f_T_D.png';

const Exercice4 = () => {
    return (
        <>
            {/* ── Local styles scoped to Exercice4 ── */}
            <style>{`
                /* ── Graph Container ── */
                .graph-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 1.5px solid #aab7c4;
                    border-radius: 6px;
                    background: #f5f7fa;
                    padding: 10px 8px 6px;
                    margin: 8px auto;
                    max-width: 100%;
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                .graph-image {
                    display: block;
                    max-width: 100%;
                    width: 520px;
                    height: auto;
                    margin: 0 auto;
                }
                .graph-caption {
                    margin-top: 5px;
                    font-size: 10.5pt;
                    color: #34495e;
                    text-align: center;
                    font-style: italic;
                    direction: rtl;
                }
                @media print {
                    .graph-image { width: 480px; }
                }

                /* ── Section Divider (Part heading) ── */
                .section-divider {
                    background: #1a5276;
                    color: #fff;
                    padding: 5px 12px;
                    font-size: 12pt;
                    font-weight: 700;
                    margin: 8px 0 4px;
                    border-radius: 4px;
                    break-before: auto;
                    page-break-before: auto;
                    break-after: avoid;
                    page-break-after: avoid;
                }

                /* ── Exercise Statement (boxed) improvements ── */
                .exercise-statement_2 {
                    line-height: 1.75;
                }

                /* ── Slight improvement: step-row-two borders ── */
                .step-row-two:last-of-type {
                    border-bottom: none;
                }

                /* ── phase-label.link (missing variant) ── */
                .phase-label.link {
                    background: #5d6d7e;
                }
                .phase-label.execution {
                    background: #6c3483;
                }

                /* ── Table image centering ── */
                .table-img-wrap {
                    display: flex;
                    justify-content: center;
                    margin: 8px 0;
                }
                .table-img-wrap img {
                    max-width: 100%;
                    height: auto;
                }
            `}</style>

            {/* ── Exercise Title ── */}
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
                        1)  ادرس اتجاه تغير الدالة <span className="math">{"\\(g\\)"}</span>.
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
                    «اتجاه تغير» = دراسة إشارة <span className="math">{"\\(g'(x)\\)"}</span>.
                </div>
                <div className="right-col">
                    الدالة <span className="math">{"\\(g\\)"}</span> قابلة للاشتقاق على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <span className="math">{"\\(g'(x) > 0\\)"}</span> أم <span className="math">{"\\(g'(x) < 0\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>؟
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> تحديد إشارة <span className="math">{"\\(g'(x)\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطى المفيد:</strong> <span className="math">{"\\(x > 0\\)"}</span> على كامل مجال التعريف.<br />
                    كيف نوظف <strong>قواعد الاشتقاق</strong> لإيجاد إشارة <span className="math">{"\\(g'(x)\\)"}</span>؟
                </div>
                <div className="right-col">
                    من أجل كل <span className="math">{"\\(x \\in ]0,+\\infty[\\)"}</span>:
                    <div className="math-block">{"\\[g'(x) = 2x + \\frac{2}{x}\\]"}</div>
                </div>
            </div>

            {/* Q1 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />
                    <div className="math-block">{"\\[g'(x) = \\frac{2x^2+2}{x} = \\frac{2(x^2+1)}{x}\\]"}</div>
                    البسط <span className="math">{"\\(2(x^2+1)>0\\)"}</span> والمقام <span className="math">{"\\(x>0\\)"}</span>، إذن <span className="math">{"\\(g'(x)>0\\)"}</span>.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[g'(x) = \\frac{2(x^2+1)}{x} > 0\\]"}</div>
                    إذن <span className="math">{"\\(g\\)"}</span> <strong>متزايدة تماماً</strong> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q1 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(g'(1) = \\frac{2(1+1)}{1} = 4 > 0\\)"}</span> ✓
                </div>
                <div className="right-col">
                    <span className="math">{"\\(g\\)"}</span> متزايدة تماماً على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            <div className="trigger-box">
                <div className="trigger-box-title">⚡ دليل المحفزات البصرية (Trigger)</div>
                عندما تطلب منك البكالوريا دراسة "اتجاه تغير دالة" مساعدة، فإن الهدف الأساسي هو إيجاد إشارة المشتقة وتوظيف رتابتها لإثبات وجود جذر وحيد لاحقاً. لا تتوقف عند حساب المشتقة بل بسطها حتى تصبح الإشارة واضحة تماماً.
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
            {/* لا شيء لترجمته: الهدف مصاغ رياضياً بوضوح في السؤال */}

            {/* Q2 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <span className="math">{"\\(\\exists!\\, \\alpha \\in ]0.52,\\, 0.53[ \\;:\\; g(\\alpha)=0\\)"}</span>
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات وجود ووحدانية الحل <span className="math">{"\\(\\alpha\\)"}</span> في <span className="math">{"\\(]0.52,0.53[\\)"}</span>.
                </div>
            </div>

            {/* Q2 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(g\\)"}</span> مستمرة ومتزايدة تماماً (Q1).
                    <br />• حدا المجال: <span className="math">{"\\(0.52\\)"}</span> و <span className="math">{"\\(0.53\\)"}</span>.<br />
                    كيف نوظف <strong>مبرهنة القيم المتوسطة</strong> (مع الرتابة) لإثبات وجود ووحدانية <span className="math">{"\\(\\alpha\\)"}</span>؟
                </div>
                <div className="right-col">
                    <span className="math">{"\\(g\\)"}</span> مستمرة ورتيبة تماماً على <span className="math">{"\\([0.52,\,0.53]\\)"}</span>.
                </div>
            </div>

            {/* Q2 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ العددي</span><br />
                    <div className="math-block">{"\\[g(0.52) \\approx 1 + 0.2704 - 1.3078 = -0.037 < 0\\]"}</div>
                    <div className="math-block">{"\\[g(0.53) \\approx 1 + 0.2809 - 1.2698 = 0.011 > 0\\]"}</div>
                    <span className="math">{"\\(g(0.52) \\cdot g(0.53) < 0\\)"}</span> → تغيّر الإشارة محقق.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[g(0.52) \\approx -0.037 < 0\\]"}</div>
                    <div className="math-block">{"\\[g(0.53) \\approx 0.011 > 0\\]"}</div>
                    بمبرهنة القيم المتوسطة، يوجد حل وحيد <span className="math">{"\\(\\alpha \\in ]0.52,0.53[\\)"}</span>.
                </div>
            </div>

            {/* Q2 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(g(0.52)<0\\)"}</span> و <span className="math">{"\\(g(0.53)>0\\)"}</span> → شروط م.ق.م محققة ✓
                </div>
                <div className="right-col">
                    المعادلة <span className="math">{"\\(g(x)=0\\)"}</span> تقبل حلاً وحيداً <span className="math">{"\\(\\alpha \\in ]0.52,0.53[\\)"}</span>.
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

            {/* Q3 — TRANSLATE: لا شيء لترجمته — الهدف مصاغ رياضياً */}

            {/* Q3 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف:</strong> تحديد إشارة <span className="math">{"\\(g(x)\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إشارة <span className="math">{"\\(g(x)\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* Q3 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(g\\)"}</span> متزايدة تماماً على <span className="math">{"\\(]0,+\\infty[\\)"}</span> (Q1).
                    <br />• <span className="math">{"\\(g(\\alpha)=0\\)"}</span> (Q2).<br />
                    كيف نوظف <strong>تعريف الرتابة</strong> لاستنتاج إشارة <span className="math">{"\\(g(x)\\)"}</span> حول <span className="math">{"\\(\\alpha\\)"}</span>؟
                </div>
                <div className="right-col">
                    <br />• <span className="math">{"\\(x < \\alpha \\Rightarrow g(x) < g(\\alpha) = 0\\)"}</span>.
                    <br />• <span className="math">{"\\(x > \\alpha \\Rightarrow g(x) > g(\\alpha) = 0\\)"}</span>.
                </div>
            </div>

            {/* Q3 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    جدول الإشارة النهائي:
                </div>
                <div className="right-col">
                    <div className="table-img-wrap" style={{ marginTop: '8px' }}>
                        <img src={signeOfGImg} alt="جدول إشارة g(x)" style={{ maxWidth: '100%', width: '480px', height: 'auto' }} />
                    </div>
                </div>
            </div>

            {/* Q3 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(g(1) = 1+1+2\\ln 1 = 2 > 0\\)"}</span> و <span className="math">{"\\(1 > \\alpha\\)"}</span> ✓
                </div>
                <div className="right-col">
                    <span className="math">{"\\(g(x)<0\\)"}</span> على <span className="math">{"\\(]0,\\alpha[\\)"}</span>، و<span className="math">{"\\(g(x)>0\\)"}</span> على <span className="math">{"\\(]\\alpha,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                PART II — Q1
            ============================================================ */}
            <div className="question-header">
                الجزء II — دراسة الدالة الرئيسية <span className="math" style={{ color: '#fff' }}>{"\\(f\\)"}</span>
            </div>

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

                    <p>
                        المطلوب هو حساب نهايتين:
                        <span className="math">{"\\(x \\to 0^+\\)"}</span>
                        و
                        <span className="math">{"\\(x \\to +\\infty\\)"}</span>.
                    </p>

                    <p>
                        سنحدد سلوك كل حد من حدود الدالة.
                    </p>
                </div>

                <div className="right-col">
                    نعوض في عبارة الدالة لدراسة السلوك قرب حدود المجال.
                </div>
            </div>

            {/* II.Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    <p>
                        نريد إيجاد:
                        <span className="math">
                            {"\\(\\lim_{x\\to0^+} f(x)\\)"}
                        </span>
                        و
                        <span className="math">
                            {"\\(\\lim_{x\\to+\\infty} f(x)\\)"}
                        </span>.
                    </p>
                </div>

                <div className="right-col">
                    <strong>الهدف:</strong> حساب نهايتي الدالة عند الصفر واللانهاية.
                </div>
            </div>

            {/* II.Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        عند الصفر:
                        <span className="math">{"\\(\\ln x\\)"}</span>
                        يؤول إلى
                        <span className="math">{"\\(-\\infty\\)"}</span>.
                    </p>

                    <p>
                        عند اللانهاية:
                        <span className="math">{"\\(\\frac{\\ln x}{x}\\)"}</span>
                        يؤول إلى الصفر.
                    </p>

                    <p>
                        إذن نركز على الحد المسيطر في كل حالة.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[\\lim_{x\\to0^+}\\ln x = -\\infty\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q1 — EXECUTION 1 */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />

                    <p>
                        أدرس كل حد لوحده.
                    </p>

                    <p>
                        الحد
                        <span className="math">{"\\(-x\\)"}</span>
                        يقترب من الصفر.
                    </p>

                    <p>
                        أما الكسر فيحتوي على
                        <span className="math">{"\\(\\ln x\\)"}</span>
                        الذي يؤول إلى
                        <span className="math">{"\\(-\\infty\\)"}</span>.
                    </p>

                    <p>
                        إذن هذا الحد هو الذي يحدد النهاية.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[\\lim_{x \\to 0^+} f(x)=\\lim_{x \\to 0^+}\\left[-x+(3+2\\ln x)\\frac1x\\right]\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x \\to 0^+}(-x)=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x \\to 0^+}(3+2\\ln x)=-\\infty\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x \\to 0^+}\\frac1x=+\\infty\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x \\to 0^+}f(x)=-\\infty\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q1 — EXECUTION 2 */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />

                    <p>
                        أفكك الكسر إلى حدود بسيطة.
                    </p>

                    <p>
                        الحدود الكسرية تؤول إلى الصفر.
                    </p>

                    <p>
                        يبقى الحد
                        <span className="math">{"\\(-x\\)"}</span>
                        وهو الذي يسيطر عند اللانهاية.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[\\frac{3+2\\ln x}{x}=\\frac3x+2\\frac{\\ln x}{x}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac3x=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}(-x)=-\\infty\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}f(x)=-\\infty\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q1 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    <p>
                        النهاية عند الصفر هي
                        <span className="math">{"\\(-\\infty\\)"}</span>.
                    </p>

                    <p>
                        إذن المستقيم
                        <span className="math">{"\\(x=0\\)"}</span>
                        مقارب عمودي.
                    </p>
                </div>

                <div className="right-col">
                    المستقيم
                    <span className="math">{"\\(x=0\\)"}</span>
                    هو مقارب عمودي للمنحنى.
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
                    «بيّن أن» = أثبت جبرياً أن <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                </div>
                <div className="right-col">
                    نطبق قواعد الاشتقاق على <span className="math">{"\\(f\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.A — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.A — RELATE */}
            <div className="step-row-two">
                {/* LEFT = طريقة التفكير */}
                <div className="left-col thinking-col">
                    <span className="phase-label data">R. التفكير والربط</span>

                    <p>
                        لدينا كسر، إذن نستعمل قاعدة مشتقة الكسر.
                    </p>

                    <p>
                        بعد الاشتقاق سأبسط النتيجة حتى أرى هل تظهر عبارة
                        <span className="math">{"\\(g(x)\\)"}</span>.
                    </p>

                    <p>
                        الهدف هو ربط المشتقة بالدالة المساعدة.
                    </p>
                </div>

                {/* RIGHT = الحساب */}
                <div className="right-col calc-col">
                    <span className="phase-label exec">الحساب</span>

                    <div className="math-block">
                        {"\\[\\left(\\frac{3+2\\ln x}{x}\\right)' = \\frac{(\\frac{2}{x})(x) - (3+2\\ln x)(1)}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[= \\frac{2 - 3 - 2\\ln x}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[= \\frac{-1 - 2\\ln x}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[f'(x) = -1 + \\frac{-1 - 2\\ln x}{x^2}\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q2.A — EXECUTION */}
            <div className="step-row-two">
                {/* LEFT = طريقة التفكير */}
                <div className="left-col thinking-col">
                    <span className="phase-label start">الفكرة</span>

                    <p>
                        الآن نوحد المقامات للحصول على كسر واحد.
                    </p>

                    <p>
                        ثم نستخرج العامل المشترك حتى تظهر عبارة
                        <span className="math">{"\\(g(x)\\)"}</span>.
                    </p>

                    <p>
                        بهذا نستطيع كتابة المشتقة بدلالة
                        <span className="math">{"\\(g(x)\\)"}</span>.
                    </p>
                </div>

                {/* RIGHT = الحساب */}
                <div className="right-col calc-col">
                    <span className="phase-label exec">الحساب</span>

                    <div className="math-block">
                        {"\\[f'(x) = \\frac{-x^2}{x^2} + \\frac{-1-2\\ln x}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[= \\frac{-x^2 - 1 - 2\\ln x}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[= \\frac{-(x^2 + 1 + 2\\ln x)}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[= \\frac{-g(x)}{x^2}\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q2.A — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    البسط النهائي: <span className="math">{"\\(-(1+x^2+2\\ln x) = -g(x)\\)"}</span> ✓
                </div>
                <div className="right-col">
                    <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>. ∎
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

            {/* II.Q2.B — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف:</strong> تشكيل جدول تغيرات <span className="math">{"\\(f\\)"}</span> بالكامل.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> جدول تغيرات <span className="math">{"\\(f\\)"}</span>.
                </div>
            </div>

            {/* II.Q2.B — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span> (Q2.أ)
                    <br />• إشارة <span className="math">{"\\(g\\)"}</span> معروفة (I.Q3): عكسها = إشارة <span className="math">{"\\(f'\\)"}</span>.
                    <br />• نهايتا <span className="math">{"\\(f\\)"}</span> = <span className="math">{"\\(-\\infty\\)"}</span> (II.Q1).<br />
                    كيف نوظف <strong>إشارة <span className="math">{"\\(f'\\)"}</span></strong> لبناء جدول تغيرات <span className="math">{"\\(f\\)"}</span>؟
                </div>
                <div className="right-col">
                    • <span className="math">{"\\(x\\in]0,\\alpha]\\Rightarrow f'(x)>0\\)"}</span>: متزايدة.
                    <br />• <span className="math">{"\\(x\\in[\\alpha,+\\infty[\\Rightarrow f'(x)<0\\)"}</span>: متناقصة.
                </div>
            </div>

            {/* II.Q2.B — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    جدول التغيرات النهائي:
                </div>
                <div className="right-col">
                    <div className="table-img-wrap" style={{ marginTop: '8px' }}>
                        <img src={variationTableOfFImg} alt="جدول تغيرات الدالة f(x)" style={{ maxWidth: '100%', width: '480px', height: 'auto' }} />
                    </div>
                </div>
            </div>

            {/* II.Q2.B — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(f'(\\alpha)=0\\)"}</span> (تعريف الذروة) و<span className="math">{"\\(f(\\alpha)>0\\)"}</span> سيثبت في Q2.ج ✓
                </div>
                <div className="right-col">
                    <span className="math">{"\\(f\\)"}</span> تقبل قيمة عظمى <span className="math">{"\\(f(\\alpha)\\)"}</span> عند <span className="math">{"\\(x=\\alpha\\)"}</span>.
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
                    «تحقّق» = أثبت أن <span className="math">{"\\(f(\\alpha) = 2\\left(\\dfrac{1}{\\alpha}-\\alpha\\right)\\)"}</span>.
                </div>
                <div className="right-col">

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
                    <span className="math">{"\\(f(\\alpha)\\)"}</span> بدون وجود <span className="math">{"\\(\\ln(\\alpha)\\)"}</span> وحصرها بدقة.
                </div>
            </div>

            {/* II.Q2.C — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        في العبارة المراد إثباتها لا يوجد
                        <span className="math">{"\\(\\ln(\\alpha)\\)"}</span>.
                    </p>

                    <p>
                        إذن يجب التخلص من اللوغاريتم.
                    </p>

                    <p>
                        أبحث في المعطيات عن كل علاقة تحتوي على
                        <span className="math">{"\\(\\alpha\\)"}</span>.
                    </p>

                    <p>
                        نجد أن:
                        <span className="math">{"\\(g(\\alpha)=0\\)"}</span>.
                    </p>

                    <p>
                        أي:
                        <span className="math">{"\\(1+\\alpha^2+2\\ln(\\alpha)=0\\)"}</span>.
                    </p>

                    <p>
                        هذه العلاقة ممتازة لأنها تحتوي على
                        <span className="math">{"\\(\\ln(\\alpha)\\)"}</span>.
                    </p>

                    <p>
                        إذن أستخرج منها:
                        <span className="math">{"\\(2\\ln(\\alpha)=-1-\\alpha^2\\)"}</span>.
                    </p>

                    <p>
                        ثم أعوض هذه القيمة داخل
                        <span className="math">{"\\(f(\\alpha)\\)"}</span>
                        حتى يختفي اللوغاريتم.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[1+\\alpha^2+2\\ln(\\alpha)=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[2\\ln(\\alpha)=-1-\\alpha^2\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[f(\\alpha)=-\\alpha+\\frac{3+2\\ln(\\alpha)}{\\alpha}\\]"}
                    </div>
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
                    <div className="math-block">{"\\[f(\\alpha) = -\\alpha + \\frac{2 - \\alpha^2}{\\alpha} = -\\alpha + \\frac{2}{\\alpha} - \\frac{\\alpha^2}{\\alpha}\\]"}</div>
                    <div className="math-block">{"\\[= \\frac{2}{\\alpha} - 2\\alpha = 2\\left( \\frac{1}{\\alpha} - \\alpha \\right)\\]"}</div>
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
                    بما أن <span className="math">{"\\(0.52<\\alpha<0.53\\)"}</span> و <span className="math">{"\\(f(\\alpha)=2(\\frac{1}{\\alpha}-\\alpha)>0\\)"}</span>: القيمة العظمى موجبة ✓
                </div>
                <div className="right-col">
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


            {/* II.Q3.A — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    <p>
                        نريد حساب نهاية الفرق بين الدالة والمستقيم
                        <span className="math">{"\\(y=-x\\)"}</span>.
                    </p>

                    <p>
                        ثم نفسر النتيجة هندسياً.
                    </p>
                </div>

                <div className="right-col">
                    <strong>الهدف:</strong>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}[f(x)+x]\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q3.A — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        بعد التبسيط حصلنا على كسر يحتوي على
                        <span className="math">{"\\(\\ln x\\)"}</span>.
                    </p>

                    <p>
                        مباشرة أفكر في النهاية الشهيرة:
                        <span className="math">{"\\(\\dfrac{\\ln x}{x}\\to0\\)"}</span>.
                    </p>

                    <p>
                        لذلك أفكك الكسر إلى حدود بسيطة حتى أستعمل النهايات المعروفة.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[\\frac{3+2\\ln x}{x}=\\frac3x+2\\frac{\\ln x}{x}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac3x=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q3.A — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ الجبري</span><br />

                    <p>
                        أعوض بالنهايات المعروفة.
                    </p>

                    <p>
                        كل حدود الكسر تؤول إلى الصفر.
                    </p>

                    <p>
                        إذن الفرق بين المنحنى والمستقيم
                        <span className="math">{"\\(y=-x\\)"}</span>
                        يقترب من الصفر.
                    </p>

                    <p>
                        هذا يعني أن المنحنى يقترب من هذا المستقيم عند
                        <span className="math">{"\\(+\\infty\\)"}</span>.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}[f(x)+x]=\\lim_{x\\to+\\infty}\\left(\\frac3x+2\\frac{\\ln x}{x}\\right)\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[=0+2(0)\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[=0\\]"}
                    </div>

                    بما أن:
                    <span className="math">{"\\(\\lim_{x\\to+\\infty}[f(x)-(-x)]=0\\)"}</span>

                    فإن المستقيم
                    <span className="math">{"\\(y=-x\\)"}</span>
                    مقارب مائل للمنحنى.
                </div>
            </div>

            {/* II.Q3.A — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    <p>
                        النهاية تساوي الصفر.
                    </p>

                    <p>
                        إذن الفرق بين المنحنى والمقارب يصبح صغيراً جداً عند اللانهاية.
                    </p>
                </div>

                <div className="right-col">
                    المقارب المائل هو:
                    <span className="math">{"\\((\\Delta):y=-x\\)"}</span>.
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
                    إشارة <span className="math">{"\\(f(x)-(-x) = \\dfrac{3+2\\ln x}{x}\\)"}</span> تتبع إشارة بسطه <span className="math">{"\\(3+2\\ln x\\)"}</span> (المقام <span className="math">{"\\(x>0\\)"}</span>).
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
                    <strong>الهدف:</strong> تحديد إشارة <span className="math">{"\\(f(x)+x\\)"}</span> على <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
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
                    <span className="math">{"\\(f(1)+1 = 2 > 0\\)"}</span> و <span className="math">{"\\(1 > e^{-3/2} \\approx 0.22\\)"}</span> → منحنى فوق المقارب ✓
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
                    «يوازي» = ميلان متساويان ⇒ <span className="math">{"\\(f'(x) = -1\\)"}</span>.
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
                    <strong>الهدف:</strong> حل <span className="math">{"\\(f'(x)=-1\\)"}</span> وإثبات وجود حل في <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات وجود نقطة تماس يكون عندها ميل المنحنى مساوياً لميل المقارب.
                </div>
            </div>

            {/* II.Q3.C — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span> (II.Q2.أ).
                    <br />• ميل <span className="math">{"\\((\\Delta)\\)"}</span> = <span className="math">{"\\(-1\\)"}</span>.<br />
                    كيف نوظف <strong>تعويض <span className="math">{"\\(f'(x)=-1\\)"}</span></strong> بعبارة <span className="math">{"\\(g\\)"}</span> لإيجاد فاصلة نقطة التماس؟
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
                    <span className="math">{"\\(1+2\\cdot(-\\frac{1}{2})=0\\)"}</span> ← الحل <span className="math">{"\\(x=e^{-1/2}\\in]0,+\\infty[\\)"}</span> ✓
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
                4) أ. إثبات أن المنحنى يقطع محور الفواصل في نقطتين محصورتين
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q4 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    «يقطع محور الفواصل» = <span className="math">{"\\(f(x_0)=0\\)"}</span> و <span className="math">{"\\(f(x_1)=0\\)"}</span> مع <span className="math">{"\\(x_0 \\neq x_1\\)"}</span>.
                </div>
                <div className="right-col">
                    الدالة مستمرة ورتيبة تماماً في كل من المجالين الفرعيين.
                </div>
            </div>

            {/* II.Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <span className="math">{"\\(\\exists\\, x_0\\in]0.22,0.23[\\;:\\; f(x_0)=0\\)"}</span><br />
                    <span className="math">{"\\(\\exists\\, x_1\\in]2.11,2.13[\\;:\\; f(x_1)=0\\)"}</span>
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
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(f\\)"}</span> مستمرة ومتزايدة على <span className="math">{"\\(]0,\\alpha]\\)"}</span>.
                    <br />• <span className="math">{"\\(f\\)"}</span> مستمرة ومتناقصة على <span className="math">{"\\([\\alpha,+\\infty[\\)"}</span>.<br />
                    كيف نوظف م.ق.م (مع الرتابة) مرتين لإثبات وجود <span className="math">{"\\(x_0\\)"}</span> و <span className="math">{"\\(x_1\\)"}</span>؟
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
                    <span className="math">{"\\(f(0.22)\\cdot f(0.23)<0\\)"}</span> ✓ و <span className="math">{"\\(f(2.11)\\cdot f(2.13)<0\\)"}</span> ✓ → شروط م.ق.م محققة مرتين
                </div>
                <div className="right-col">
                    إذن، يقطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> حامل محور الفواصل في نقطتين فاصلتاهما
                    <span className="math">{"\\(x_0\\)"}</span> و
                    <span className="math">{"\\(x_1\\)"}</span> في المجالين المذكورين.
                </div>
            </div>
            <br />
            <br />
            <br />

            {/* ============================================================
                PART II — Q4 DRAWING
            ============================================================ */}
            <div className="sub-question">
                4) ب. إنشاء المستقيم المقارب المائل والمماس والمنحنى
            </div>

            {/* Graphical representation — centered, bordered, with caption */}
            <div className="graph-container">
                <img
                    src={graphesFTDImg}
                    alt="Graphes de Cf, Δ et T"
                    className="graph-image"
                />
                <div className="graph-caption">
                    تمثيل المنحنى (Cf) والمستقيم المقارب (Δ) والمماس (T)
                </div>
            </div>


            {/* ============================================================
                PART II — Q5  (المناقشة البيانية الوسيطية)
            ============================================================ */}
            <div className="sub-question">
                5) <span className="math">{"\\(m\\)"}</span> وسيط حقيقي. ناقش بيانياً وحسب قيم <span className="math">{"\\(m\\)"}</span>، عدد حلول المعادلة: <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q5 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">1) الترجمة (Translate)</span><br />
                    <span className="math">{"\\(3+2\\ln x = mx\\)"}</span> ⇒ منحنى <span className="math">{"\\(h(x)=\\dfrac{3+2\\ln x}{x}\\)"}</span> ومستقيم <span className="math">{"\\(y=m\\)"}</span>.
                </div>
                <div className="right-col">
                    ترجمة حلول المعادلة الوسيطية هندسياً إلى دراسة تقاطع المنحنى البياني
                    مع عائلة من المستقيمات.
                </div>
            </div>

            {/* II.Q5 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">2) تحديد الهدف (Aim)</span><br />
                    الهدف هو تحديد عدد حلول المعادلة
                    <span className="math">{"\\(f(x) = -x + m\\)"}</span>
                    تبعاً لقيم الوسيط الحقيقي
                    <span className="math">{"\\(m\\)"}</span>.
                    هذا يتطلب دراسة عدد التقاطعات مع المستقيمات ذات الميل
                    <span className="math">{"\\(-1\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> مناقشة عدد حلول المعادلة بيانياً حسب قيم الوسيط
                    <span className="math">{"\\(m\\)"}</span>،
                    وهو ما يوافق عدد نقاط تقاطع المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>
                    مع المستقيمات ذات الميل
                    <span className="math">{"\\(-1\\)"}</span>.
                </div>
            </div>

            {/* II.Q5 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label link">3) الربط (Relate)</span><br />
                    <strong>الربط:</strong> ربط المناقشة البيانية بالمعادلة المعطاة:
                    <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span>
                    عن طريق عزل المتغيرات وإضافة
                    <span className="math">{"\\(x\\)"}</span>
                    للطرفين تحوّل المعادلة إلى الشكل المألوف
                    <span className="math">{"\\(f(x) = -x + m\\)"}</span>، وهي
                    مناقشة مائلة موازية للمقارب.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(x > 0\\)"}</span> :
                    <div className="math-block">{"\\[3 + 2\\ln x - mx = 0\\]"}</div>
                    <div className="math-block">{"\\[\\iff \\frac{3 + 2\\ln x}{x} = m\\]"}</div>
                    <div className="math-block">{"\\[\\iff f(x) = -x + m\\]"}</div>
                </div>
            </div>

            {/* II.Q5 — EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label execution">4) التنفيذ (Execution)</span><br />
                    سأقوم بإمساك مسطرة تمثل المستقيم
                    <span className="math">{"\\(y = -x + m\\)"}</span>
                    مع ثبيت ميلها عند
                    <span className="math">{"\\(-1\\)"}</span>،
                    ثم أبدأ بتحريكها ترجمةً عمودية من الأسفل نحو الأعلى مع المحافظة على نفس الميل،
                    وأراقب عدد نقاط تقاطعها مع المنحنى
                    <span className="math">{"\\(C_f\\)"}</span>.
                    <br />
                    <strong>في البداية</strong>، عندما تكون المسطرة منخفضة جداً أسفل المنحنى، أي
                    عندما <span className="math">{"\\(m < 0\\)"}</span>،
                    يقطع المستقيم المنحنى في نقطة واحدة فقط، وبالتالي يوجد حل وحيد.
                    <br />
                    ثم عندما تصل المسطرة إلى الوضعية الموافقة لـ
                    <span className="math">{"\\(m = 0\\)"}</span>،
                    يبقى هناك تقاطع وحيد مع المنحنى.
                    <br />
                    <strong>بعد ذلك</strong>، إذا واصلت رفع المسطرة أكثر، فإن المستقيم سيقطع المنحنى
                    في نقطتين مختلفتين، وبالتالي نحصل على حلين اثنين متمايزين.
                    وهذا يحدث عندما:
                    <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span>.
                    <br />
                    ثم أواصل رفع المسطرة تدريجياً حتى تصل إلى وضعية تمس فيها المنحنى في نقطة واحدة
                    فقط دون أن تقطعه، أي تصبح مماسة للمنحنى عند الذروة.
                    في هذه الحالة نحصل على حل وحيد مضاعف.
                    وذلك عندما:
                    <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>
                    حيث
                    <span className="math">{"\\(x = e^{-1/2}\\)"}</span>.
                    <br />
                    <strong>وأخيراً</strong>، عندما تصبح المسطرة مرتفعة جداً فوق المنحنى، أي
                    عندما <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span>،
                    لا يوجد أي تقاطع مع المنحنى، وبالتالي لا توجد حلول للمعادلة.
                </div>
                <div className="right-col">
                    <strong>المناقشة البيانية المائلة حسب قيم الوسيط <span className="math">{"\\(m\\)"}</span> :</strong>
                    <br />
                    المعادلة تكافئ:
                    <span className="math">{"\\(h(x) = m\\)"}</span>
                    بمقارنة قيم <span className="math">{"\\(m\\)"}</span> مع القيمة العظمى
                    <span className="math">{"\\(2\\sqrt{e}\\)"}</span>
                    والصفر:
                    <br /><br />
                    • إذا كان <span className="math">{"\\(m < 0\\)"}</span> :
                    يقطع المستقيم المنحنى في نقطة واحدة فقط،
                    إذن <strong>يوجد حل وحيد</strong>.
                    <br /><br />
                    • إذا كان <span className="math">{"\\(m = 0\\)"}</span> :
                    <strong>يوجد حل وحيد</strong>.
                    <br /><br />
                    • إذا كان <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span> :
                    يقطع المستقيم المنحنى في نقطتين،
                    إذن <strong>يوجد حلان متمايزان</strong>.
                    <br /><br />
                    • إذا كان <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span> :
                    يمس المستقيم المنحنى عند الذروة،
                    <strong>يوجد حل وحيد مضاعف</strong> هو
                    <span className="math">{"\\(x = e^{-1/2}\\)"}</span>.
                    <br /><br />
                    • إذا كان <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span> :
                    لا يوجد تقاطع، إذن <strong>لا توجد حلول</strong>.
                </div>
            </div>

            {/* ============================================================
                PART III — Q1
            ============================================================ */}
            <div className="question-header">
                الجزء III — المتتالية التكاملية <span className="math" style={{ color: '#fff' }}>{"\\((u_n)\\)"}</span>
            </div>

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
                    <span className="math">{"\\(u_n = \\int_{e^n}^{e^{n+1}} \\dfrac{3+2\\ln x}{x}\\,dx > 0\\)"}</span>
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
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(u_n > 0\\)"}</span> لكل <span className="math">{"\\(n \\in \\mathbb{N}\\)"}</span>.
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
                    <span className="math">{"\\(x\\in[e^n,e^{n+1}]\\Rightarrow\\ln x\\ge 0\\Rightarrow 3+2\\ln x\\ge3>0\\)"}</span> → الدالة موجبة على مجال التكامل → <span className="math">{"\\(u_n>0\\)"}</span> ✓
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
                    <span className="math">{"\\(u_0 = \\int_1^e [f(x)+x]\\,dx = \\int_1^e \\dfrac{3+2\\ln x}{x}\\,dx\\)"}</span>: مساحة السطح بين <span className="math">{"\\((C_f)\\)"}</span> و <span className="math">{"\\((\\Delta)\\)"}</span> على <span className="math">{"\\([1,e]\\)"}</span>.
                </div>
                <div className="right-col">
                    التكامل يمثل مساحة المنطقة المحصورة بين منحنى الدالة والمستقيم المقارب.
                </div>
            </div>

            {/* III.Q2 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف:</strong> تفسير <span className="math">{"\\(u_0\\)"}</span> هندسياً كمساحة سطح.
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
                    <span className="math">{"\\(u_0 > 0\\)"}</span> (III.Q1) و <span className="math">{"\\((C_f)\\)"}</span> فوق <span className="math">{"\\((\\Delta)\\)"}</span> على <span className="math">{"\\([1,e]\\)"}</span> → مساحة موجبة ✓
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
                    الدالة الأصلية لـ <span className="math">{"\\(\\dfrac{3}{x}\\)"}</span> = <span className="math">{"\\(3\\ln x\\)"}</span>. لـ <span className="math">{"\\(\\dfrac{2\\ln x}{x} = 2u'u\\)"}</span> (<span className="math">{"\\(u=\\ln x\\)"}</span>) = <span className="math">{"\\((\\ln x)^2\\)"}</span>.
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
                    <strong>الهدف:</strong> <span className="math">{"\\(u_n = \\left[3\\ln x + (\\ln x)^2\\right]_{e^n}^{e^{n+1}}\\)"}</span>.
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
                    <span className="math">{"\\(n=0\\)"}</span>: <span className="math">{"\\(u_0=2(0)+4=4\\)"}</span> و <span className="math">{"\\([3\\ln x+(\\ln x)^2]_1^e = (3+1)-0=4\\)"}</span> ✓
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
                    <span className="math">{"\\(u_n = 2n+4\\)"}</span> ⇒ متتالية حسابية (<span className="math">{"\\(r=2,\\,u_0=4\\)"}</span>) ⇒ <span className="math">{"\\(S_n = (n+1)\\cdot\\dfrac{u_0+u_n}{2}\\)"}</span>.
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
                    <strong>الهدف:</strong> <span className="math">{"\\(S_n = u_0+u_1+\\cdots+u_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
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
                    <span className="math">{"\\(n=0: S_0=4, \\;(0+1)(0+4)=4\\)"}</span> ✓<br />
                    <span className="math">{"\\(n=1: S_1=4+6=10, \\;(1+1)(1+4)=10\\)"}</span> ✓
                </div>
                <div className="right-col">
                    إذن المجموع النهائي بدلالة
                    <span className="math">{"\\(n\\)"}</span> هو:
                    <span className="math">{"\\(S_n = (n+1)(n+4)\\)"}</span>.
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