import React from 'react';
import { FlashIcon, QuestionIcon, WarningIcon } from '../components/PrintIcons';
import signeOfGImg from '../images/signe_of_g.png';
import variationTableOfFImg from '../images/variation_table_of_f.png';
import graphesFTDImg from '../images/graphes_f_T_D.png';
import signeOfFPlusXImg from '../images/signe_of_f_plus_x.svg';
import disscustionMImg from '../images/disscustion_m.png';

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
                    border: 1.5px solid #AABBCC;
                    border-radius: 6px;
                    background: #F3F6FA;
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
                    color: #004080;
                    text-align: center;
                    font-style: italic;
                    direction: rtl;
                }
                @media print {
                    .graph-image { width: 480px; }
                }

                /* ── Section Divider (Part heading) ── */
                .section-divider {
                    background: #003380;
                    color: #FFFFFF;
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
                    background: #737373;
                }
                .phase-label.execution {
                    background: #111144;
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
            <div id="toc-exercice4" >
                التمرين الرابع بكالوريا 2016 شعبة رياضيات — دراسة دالة لوغاريتمية ومتتالية تكاملية
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
                        1) احسب <span className="math">{"\\[\\lim_{x\\to0^+} f(x)\\]"}</span> و <span className="math">{"\\[\\lim_{x\\to+\\infty} f(x)\\]"}</span>.
                        <br />
                        2) أ) بيّن أنّه من أجل كل عدد حقيقي <span className="math">{"\\(x\\)"}</span> من المجال <span className="math">{"\\(]0; +\\infty[\\)"}</span>: <span className="math">{"\\(f'(x) = \\dfrac{-g(x)}{x^2}\\)"}</span>.
                        <br />
                        ب) شكّل جدول تغيّرات الدالة <span className="math">{"\\(f\\)"}</span>.
                        <br />
                        جـ) تحقّق أنّ: <span className="math">{"\\(f(\\alpha) = 2\\left(\\dfrac{1}{\\alpha} - \\alpha\\right)\\)"}</span> ثم عيّن حصراً له.
                        <br />
                        3) أ) احسب <span className="math">{"\\[\\lim_{x\\to+\\infty} [f(x) + x]\\]"}</span> ثمّ فسّر النتيجة هندسياً.
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
                الجزء I — دراسة الدالة المساعدة <span className="math" style={{ color: '#FFFFFF' }}>{"\\(g\\)"}</span>
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

            {/* Q1 — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطى المفيد:</strong> <span className="math">{"\\(x > 0\\)"}</span> على كامل مجال التعريف.<br />
                    كيف نوظف <strong>قواعد الاشتقاق</strong> لإيجاد إشارة <span className="math">{"\\(g'(x)\\)"}</span>؟
                    <div className="math-block">{"\\[g'(x) = \\frac{2x^2+2}{x} = \\frac{2(x^2+1)}{x}\\]"}</div>
                    البسط <span className="math">{"\\(2(x^2+1)>0\\)"}</span> والمقام <span className="math">{"\\(x>0\\)"}</span>، إذن <span className="math">{"\\(g'(x)>0\\)"}</span>.
                </div>
                <div className="right-col">
                    من أجل كل <span className="math">{"\\(x \\in ]0,+\\infty[\\)"}</span>:
                    <div className="math-block">{"\\[g'(x) = 2x + \\frac{2}{x}\\]"}</div>
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
                <div className="trigger-box-title"><FlashIcon /> دليل المحفزات البصرية (Trigger)</div>
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

            {/* Q2 — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(g\\)"}</span> مستمرة ومتزايدة تماماً (Q1).
                    <br />• حدا المجال: <span className="math">{"\\(0.52\\)"}</span> و <span className="math">{"\\(0.53\\)"}</span>.<br />
                    كيف نوظف <strong>مبرهنة القيم المتوسطة</strong> (مع الرتابة) لإثبات وجود ووحدانية <span className="math">{"\\(\\alpha\\)"}</span>؟
                    <div className="math-block">{"\\[g(0.52) \\approx 1 + 0.2704 - 1.3078 = -0.037 < 0\\]"}</div>
                    <div className="math-block">{"\\[g(0.53) \\approx 1 + 0.2809 - 1.2698 = 0.011 > 0\\]"}</div>
                    <span className="math">{"\\(g(0.52) \\cdot g(0.53) < 0\\)"}</span> ← تغيّر الإشارة محقق.
                </div>
                <div className="right-col">
                    <span className="math">{"\\(g\\)"}</span> مستمرة ورتيبة تماماً على <span className="math">{"\\([0.52,\,0.53]\\)"}</span>.
                    <div className="math-block">{"\\[g(0.52) \\approx -0.037 < 0\\]"}</div>
                    <div className="math-block">{"\\[g(0.53) \\approx 0.011 > 0\\]"}</div>
                    بمبرهنة القيم المتوسطة، يوجد حل وحيد <span className="math">{"\\(\\alpha \\in ]0.52,0.53[\\)"}</span>.
                </div>
            </div>

            {/* Q2 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(g(0.52)<0\\)"}</span> و <span className="math">{"\\(g(0.53)>0\\)"}</span> ← شروط م.ق.م محققة ✓
                </div>
                <div className="right-col">
                    المعادلة <span className="math">{"\\(g(x)=0\\)"}</span> تقبل حلاً وحيداً <span className="math">{"\\(\\alpha \\in ]0.52,0.53[\\)"}</span>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title"><QuestionIcon /> لماذا نذكر شرط الرتابة؟ (Why)</div>
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

            {/* Q3 — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(g\\)"}</span> متزايدة تماماً على <span className="math">{"\\(]0,+\\infty[\\)"}</span> (Q1).
                    <br />• <span className="math">{"\\(g(\\alpha)=0\\)"}</span> (Q2).<br />
                    كيف نوظف <strong>تعريف الرتابة</strong> لاستنتاج إشارة <span className="math">{"\\(g(x)\\)"}</span> حول <span className="math">{"\\(\\alpha\\)"}</span>؟
                    جدول الإشارة النهائي:
                </div>
                <div className="right-col">
                    <br />• <span className="math">{"\\(x < \\alpha \\Rightarrow g(x) < g(\\alpha) = 0\\)"}</span>.
                    <br />• <span className="math">{"\\(x > \\alpha \\Rightarrow g(x) > g(\\alpha) = 0\\)"}</span>.
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
                الجزء II — دراسة الدالة الرئيسية <span className="math" style={{ color: '#FFFFFF' }}>{"\\(f\\)"}</span>
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
                            {"\\[\\lim_{x\\to0^+} f(x)\\]"}
                        </span>
                        و
                        <span className="math">
                            {"\\[\\lim_{x\\to+\\infty} f(x)\\]"}
                        </span>.
                    </p>
                </div>

                <div className="right-col">
                    <strong>الهدف:</strong> حساب نهايتي الدالة عند الصفر واللانهاية.
                </div>
            </div>

            {/* II.Q1 — RELATE (WITH EXECUTION MERGED) */}
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
                        {"\\[\\lim_{x\\to0^+}\\ln x = -\\infty\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0\\]"}
                    </div>

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
                <div className="danger-box-title"><WarningIcon />️ احذر من الخلط في شكل المالانهاية على الصفر!</div>
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

            {/* II.Q2.A — RELATE (WITH EXECUTION MERGED) */}
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

            {/* II.Q2.B — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات:</strong>
                    <br />• <span className="math">{"\\(f'(x) = \\frac{-g(x)}{x^2}\\)"}</span> (Q2.أ)
                    <br />• إشارة <span className="math">{"\\(g\\)"}</span> معروفة (I.Q3): عكسها = إشارة <span className="math">{"\\(f'\\)"}</span>.
                    <br />• نهايتا <span className="math">{"\\(f\\)"}</span> = <span className="math">{"\\(-\\infty\\)"}</span> (II.Q1).<br />
                    كيف نوظف <strong>إشارة <span className="math">{"\\(f'\\)"}</span></strong> لبناء جدول تغيرات <span className="math">{"\\(f\\)"}</span>؟
                    جدول التغيرات النهائي:
                </div>
                <div className="right-col">
                    • <span className="math">{"\\(x\\in]0,\\alpha]\\Rightarrow f'(x)>0\\)"}</span>: متزايدة.
                    <br />• <span className="math">{"\\(x\\in[\\alpha,+\\infty[\\Rightarrow f'(x)<0\\)"}</span>: متناقصة.
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

            {/* II.Q2.C — RELATE (WITH EXECUTION MERGED) */}
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

                    <p>
                        بعد التبسيط حصلنا على:
                        <span className="math">{"\\(f(\\alpha)=2(\\frac1\\alpha-\\alpha)\\)"}</span>.
                    </p>

                    <p>
                        الآن نريد حصر قيمة
                        <span className="math">{"\\(f(\\alpha)\\)"}</span>.
                    </p>

                    <p>
                        أركز على العبارة:
                        <span className="math">{"\\(\\frac1x-x\\)"}</span>.
                    </p>

                    <p>
                        ألاحظ أن:
                        <span className="math">{"\\(\\frac1x\\)"}</span>
                        دالة متناقصة على
                        <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                    </p>

                    <p>
                        وكذلك:
                        <span className="math">{"\\(-x\\)"}</span>
                        دالة متناقصة.
                    </p>

                    <p>
                        ومجموع دالتين متناقصتين هو أيضا دالة متناقصة.
                    </p>

                    <p>
                        إذن:
                        <span className="math">{"\\(\\frac1x-x\\)"}</span>
                        دالة متناقصة على
                        <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                    </p>

                    <p>
                        وبما أن:
                        <span className="math">{"\\(0.52<\\alpha<0.53\\)"}</span>،
                        فإن ترتيب الحدود ينعكس عند التعويض.
                    </p>

                    <p>
                        بعدها نضرب في 2 للحصول على حصر
                        <span className="math">{"\\(f(\\alpha)\\)"}</span>.
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

                    <div className="math-block">
                        {"\\[f(\\alpha)=-\\alpha+\\frac{2-\\alpha^2}{\\alpha}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[=-\\alpha+\\frac2\\alpha-\\alpha\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[=\\frac2\\alpha-2\\alpha\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[=2\\left(\\frac1\\alpha-\\alpha\\right)\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[0.52<\\alpha<0.53\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\frac1{0.53}-0.53<\\frac1\\alpha-\\alpha<\\frac1{0.52}-0.52\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[1.357<\\frac1\\alpha-\\alpha<1.403\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[2.71<f(\\alpha)<2.81\\]"}
                    </div>
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


            {/* ============================================================
                PART II — Q3.A
            ============================================================ */}
            <div className="sub-question">
                3) أ. حساب النهاية <span className="math">{"\\[\\lim_{x\\to+\\infty}[f(x)+x]\\]"}</span> وتفسير النتيجة هندسياً
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

            {/* II.Q3.A — RELATE (WITH EXECUTION MERGED) */}
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
                        {"\\[\\frac{3+2\\ln x}{x}=\\frac3x+2\\frac{\\ln x}{x}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac3x=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0\\]"}
                    </div>

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
                    <span className="math">{"\\[\\lim_{x\\to+\\infty}[f(x)-(-x)]=0\\]"}</span>

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
                <div className="trigger-box-title"><FlashIcon /> دليل المحفزات البصرية (Trigger)</div>
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

                    <p>
                        "دراسة وضعية المنحنى بالنسبة للمقارب"
                        تعني دراسة إشارة الفرق:      <span className="math">
                            {"\\[f(x)-(-x)=f(x)+x\\]"}
                        </span>
                    </p>

                    <p>
                        إذا كان الفرق موجباً فالمنحنى فوق المقارب.
                    </p>

                    <p>
                        وإذا كان الفرق سالباً فالمنحنى تحت المقارب.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[f(x)+x=\\frac{3+2\\ln x}{x}\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q3.B — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    <p>
                        الهدف هو تحديد إشارة:<span className="math">{"\\[f(x)+x\\]"}</span>
                    </p>



                    <p>
                        على المجال
                        <span className="math">{"\\(]0,+\\infty[\\)"}</span>.
                    </p>

                    <p>
                        ثم استنتاج وضعية المنحنى بالنسبة للمقارب.
                    </p>
                </div>

                <div className="right-col">
                    <strong>الهدف:</strong>

                    <div className="math-block">
                        دراسة إشارة <span className="math">{"\\[f(x)+x\\]"}</span>
                    </div>
                </div>
            </div>

            {/* II.Q3.B — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        لدينا: <span className="math">
                            {"\\[f(x)+x=\\frac{3+2\\ln x}{x}\\]"}
                        </span>
                    </p>



                    <p>
                        الهدف هو دراسة الإشارة.
                    </p>

                    <p>
                        ألاحظ أن التعبير عبارة عن كسر.
                    </p>

                    <p>
                        مباشرة أفكر في إشارة البسط والمقام.
                    </p>

                    <p>
                        بما أن:
                        <span className="math">{"\\(x>0\\)"}</span>
                        على مجال التعريف،
                        فإن المقام موجب دائماً.
                    </p>

                    <p>
                        إذن إشارة الكسر هي نفس إشارة البسط:   <span className="math">
                            {"\\[3+2\\ln x\\]"}
                        </span>
                    </p>



                    <p>
                        لذلك أبحث عن قيمة
                        <span className="math">{"\\(x\\)"}</span>
                        التي تجعل البسط يساوي الصفر،
                        لأنها نقطة تغير الإشارة.
                    </p>

                    <p>
                        أحل المعادلة:
                    </p>

                    <span className="math">
                        {"\\[3+2\\ln x=0\\]"}
                    </span>

                    <p>
                        ثم أستعمل الدالة الأسية لإزالة اللوغاريتم.
                    </p>

                    <p>
                        بعد إيجاد الجذر أحدد إشارة البسط،
                        ومنه إشارة الفرق.
                    </p>

                    <p>
                        بعدها أستنتج وضعية المنحنى بالنسبة للمقارب.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[x>0\\]"}
                    </div>

                    <div className="math-block">
                        <span className="math">{"\\(f(x)+x\\)"}</span>
                        <span>إشارة </span>

                    </div>
                    <div className="math-block">

                        <span className="math">{"\\(3+2\\ln x\\)"}</span>
                        <span> هي من إشارة </span>

                    </div>
                    <div className="math-block">
                        {"\\[3+2\\ln x=0\\]"}
                    </div>


                    <div className="math-block">
                        {"\\[2\\ln x=-3\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\ln x=-\\frac32\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[x=e^{-3/2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[x\\in]0,e^{-3/2}[\\Rightarrow f(x)+x<0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[x\\in]e^{-3/2},+\\infty[\\Rightarrow f(x)+x>0\\]"}
                    </div>

                    <p>
                        إذن المنحنى
                        <span className="math">{"\\((C_f)\\)"}</span>
                        تحت المقارب قبل
                        <span className="math">{"\\(e^{-3/2}\\)"}</span>
                        وفوقه بعده.
                    </p>

                    <p>
                        نقطة التقاطع هي:
                    </p>

                    <div className="math-block">
                        {"\\[A\\left(e^{-3/2},-e^{-3/2}\\right)\\]"}
                    </div>
                </div>
            </div>



            {/* II.Q3.B — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    <p>
                        نختبر عند
                        <span className="math">{"\\(x=1\\)"}</span>:
                        <span className="math">{"\\(f(1)+1=2>0\\)"}</span>
                        و
                        <span className="math">{"\\(1>e^{-3/2}\\)"}</span>،
                        إذن المنحنى فوق المقارب ✓
                    </p>
                </div>

                <div className="right-col">
                    <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                        <img src={signeOfFPlusXImg} alt="جدول إشارة f(x)+x" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    النتيجة صحيحة ومتوافقة مع إشارة الفرق.
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
                    <p>
                        "مماس" يعني معادلة من الشكل:
                        <span className="math">
                            {"\\(y=f'(x_0)(x-x_0)+f(x_0)\\)"}
                        </span>.
                    </p>

                    <p>
                        و"يوازي" يعني:
                        تساوي معاملي التوجيه.
                    </p>

                </div>

                <div className="right-col">

                    <p>
                        معامل توجيه المقارب
                        <span className="math">{"\\((\\Delta)\\)"}</span>
                        هو:
                        <span className="math">{"\\(-1\\)"}</span>.
                    </p>
                </div>
            </div>

            {/* II.Q3.C — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <p>
                        إذن نبحث عن {"\\(x_0\\)"}
                        حيث :
                        <span className="math">{"\\(f'(x_0)=a_{\\Delta} = -1\\)"}</span>.
                    </p>


                    <p>
                        ثم التأكد أن {"\\(x_0\\)"} ينتمي إلى مجال التعريف.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[f'(x_0)=-1\\]"}
                    </div>
                </div>
            </div>

            {/* II.Q3.C — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        لدينا عبارة المشتقة:
                        <span className="math">{"\\(f'(x)=\\frac{-g(x)}{x^2}\\)"}</span>.
                    </p>

                    <p>
                        والهدف يحتوي على
                        <span className="math">{"\\(f'(x)\\)"}</span>،
                        إذن من الطبيعي تعويض عبارة المشتقة.
                    </p>

                    <p>
                        بعد التعويض تظهر:
                        <span className="math">{"\\(g(x)\\)"}</span>.
                    </p>

                    <p>
                        ثم أستعمل العبارة الأصلية لـ
                        <span className="math">{"\\(g(x)\\)"}</span>
                        لأن فيها
                        <span className="math">{"\\(\\ln x\\)"}</span>
                        ويمكن حلها بسهولة.
                    </p>

                    <p>
                        ألاحظ أيضا أن
                        <span className="math">{"\\(x^2\\)"}</span>
                        سيختزل من الطرفين،
                        وهذا سيبسط المعادلة كثيرا.
                    </p>
                    <p>
                        أختزل الحدود المتشابهة ثم أحل المعادلة اللوغاريتمية.
                    </p>

                    <p>
                        في النهاية أستعمل الدالة الأسية لإزالة اللوغاريتم.
                    </p>

                    <p>
                        ثم أتحقق أن الحل موجب،
                        أي ينتمي إلى مجال التعريف.
                    </p>
                </div>

                <div className="right-col">
                    <div className="math-block">
                        {"\\[f'(x)=\\frac{-g(x)}{x^2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\frac{-g(x)}{x^2}=-1\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[g(x)=x^2\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[1+x^2+2\\ln x=x^2\\]"}
                    </div>
                    <div className="math-block">
                        {"\\[1+2\\ln x=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[2\\ln x=-1\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\ln x=-\\frac12\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[x=e^{-1/2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[x=\\frac1{\\sqrt e}\\approx0.607\\]"}
                    </div>

                    <p>
                        إذن يوجد مماس يوازي المقارب عند:
                        <span className="math">{"\\(x=e^{-1/2}\\)"}</span>.
                    </p>
                </div>
            </div>


            {/* II.Q3.C — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    <p>
                        نجد:
                        <span className="math">{"\\(e^{-1/2}>0\\)"}</span>،
                        إذن الحل ينتمي إلى
                        <span className="math">{"\\(]0,+\\infty[\\)"}</span> ✓
                    </p>
                </div>

                <div className="right-col">
                    <p>
                        المماس الموازي يوجد عند الفاصلة
                        <span className="math">{"\\(x=e^{-1/2}\\)"}</span>.
                    </p>
                </div>
            </div>
            <div className="danger-box">
                <div className="danger-box-title"><WarningIcon />️ احذر من الخلط بين التوازي والتقاطع!</div>
                يقع بعض الطلاب في خطأ فادح ويقومون بحل المعادلة
                <span className="math">{"\\(f(x) = -x\\)"}</span>
                وهذا يعطيك نقاط التقاطع وليس نقاط التوازي. التوازي هو شرط يرتبط بالمشتقة
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

                    <p>
                        "يقطع محور الفواصل" يعني وجود حلول للمعادلة:
                        <span className="math">{"\\(f(x)=0\\)"}</span>.
                    </p>

                    <p>
                        نريد إثبات وجود حلين مختلفين محصورين في مجالين.
                    </p>
                </div>

                <div className="right-col">
                    <p>
                        نبحث عن جذور الدالة
                        <span className="math">{"\\(f(x)\\)"}</span>
                        باستعمال التغير في الإشارة.
                    </p>
                </div>
            </div>

            {/* II.Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    <p>
                        إثبات وجود:
                        <span className="math">{"\\(x_0\\in]0.22,0.23[\\)"}</span>
                        بحيث
                        <span className="math">{"\\(f(x_0)=0\\)"}</span>.
                    </p>

                    <p>
                        ووجود:
                        <span className="math">{"\\(x_1\\in]2.11,2.13[\\)"}</span>
                        بحيث
                        <span className="math">{"\\(f(x_1)=0\\)"}</span>.
                    </p>
                </div>

                <div className="right-col">
                    <p>
                        الهدف: إثبات وجود جذرين باستعمال تغير الإشارة والاستمرارية.
                    </p>
                </div>
            </div>

            {/* II.Q4 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    <p>
                        الدالة
                        <span className="math">{"\\(f\\)"}</span>
                        مستمرة على المجالين المعطيين.
                    </p>

                    <p>
                        الحل يتم عبر مبدأ بسيط:
                        إذا تغيرت الإشارة بين قيمتين،
                        فهناك جذر بينهما.
                    </p>

                    <p>
                        إذن نختار قيمًا قريبة من المجالين المطلوبين ونقارن الإشارة.
                    </p>

                    <p>
                        1) على المجال
                        <span className="math">{"\\([0.22,0.23]\\)"}</span>:
                    </p>

                    <p>
                        نلاحظ تغير الإشارة بين الطرفين ⇐ يوجد جذر
                        <span className="math">{"\\(x_0\\)"}</span>.
                    </p>

                    <br />

                    <p>
                        2) على المجال
                        <span className="math">{"\\([2.11,2.13]\\)"}</span>:
                    </p>

                    <p>
                        أيضا تغير الإشارة ⇐ يوجد جذر
                        <span className="math">{"\\(x_1\\)"}</span>.
                    </p>
                </div>

                <div className="right-col">
                    <p>
                        نستعمل شرط:
                        <span className="math">{"\\(f(a)f(b)<0\\)"}</span>
                        ⇐ يوجد جذر بين
                        <span className="math">{"\\(a\\)"}</span> و
                        <span className="math">{"\\(b\\)"}</span>.
                    </p>
                    <div className="math-block">
                        {"\\[f(0.22)<0\\quad ,\\quad f(0.23)>0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[f(2.11)>0\\quad ,\\quad f(2.13)<0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\exists x_0\\in]0.22,0.23[\\;:\\; f(x_0)=0\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\exists x_1\\in]2.11,2.13[\\;:\\; f(x_1)=0\\]"}
                    </div>

                    <p>
                        إذن حسب مبرهنة القيم المنوسطة المنحنى يقطع محور الفواصل في نقطتين محصورتين.
                    </p>
                </div>
            </div>

            {/* II.Q4 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    <p>
                        تغير الإشارة في كل مجال ⇐ يوجد جذر في كل مجال ✓
                    </p>
                </div>

                <div className="right-col">

                </div>
            </div>

            {/* ============================================================
    PART II — Q4 DRAWING
============================================================ */}
            <div className="sub-question">
                4) ب. إنشاء المستقيم المقارب المائل والمماس والمنحنى
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">خطوات الرسم</div>
                <div className="col-header right-h">التمثيل البياني</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">

                    <p>
                        أولاً أحدد مجال التعريف الكامل:
                        <span className="math">{"\\(x>0\\)"}</span>، وأضع محور
                        <span className="math">{"\\(x=0\\)"}</span> في أقصى اليسار حتى أستغل مساحة الورقة بشكل صحيح.
                    </p>

                    <p>
                        أرسم المقارب المائل:
                        <span className="math">{"\\(y=-x\\)"}</span>.
                    </p>

                    <p>
                        أحدد نقطة المماس عند
                        <span className="math">{"\\(x=e^{-1/2}\\)"}</span> ثم أرسم المماس
                        <span className="math">{"\\((T)\\)"}</span>.
                    </p>

                    <p>
                        أرسم المنحنى
                        <span className="math">{"\\((C_f)\\)"}</span> مع احترام:
                        الاقتراب من المقارب عند اللانهاية،
                        ومواضع التغير والإشارة السابقة.
                    </p>
                    <p>
                        في حالة تعذر الرسم بشكل دقيق نستعين بنقاط مساعدة.
                    </p>
                </div>

                <div className="right-col">
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
                </div>
            </div>
            {/* ============================================================
    PART II — Q5  (المناقشة البيانية الوسيطية)
============================================================ */}
            <div className="sub-question">
                5) <span className="math">{"\\(m\\)"}</span> وسيط حقيقي. ناقش بيانياً وحسب قيم <span className="math">{"\\(m\\)"}</span> عدد حلول المعادلة: <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>

            {/* II.Q5 — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">1) الترجمة (Translate)</span><br />
                    عدد الحلول = عدد قيم <span className="math">{"\\(x\\)"}</span> التي تحقق المعادلة، وبيانياً هو عدد تقاطعات المنحنيات.
                </div>
                <div className="right-col">
                    ترجمة المعادلة إلى دراسة تقاطع منحنى مع عائلة مستقيمات.
                </div>
            </div>

            {/* II.Q5 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">2) تحديد الهدف (Aim)</span><br />
                    الهدف هو تحديد عدد حلول المعادلة <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span> بيانياً حسب قيم <span className="math">{"\\(m\\)"}</span>.
                    <br />
                    بإعادة الكتابة:
                    <span className="math">{"\\(3 + 2\\ln x - mx = 0\\)"}</span>
                    <br />
                    <span className="math">{"\\(\\frac{3 + 2\\ln x}{x} = m\\)"}</span>
                    <br />
                    <span className="math">{"\\(f(x) = -x + m\\)"}</span>.
                </div>

                <div className="right-col">
                    <strong>الهدف:</strong> مناقشة عدد حلول المعادلة حسب موضع المستقيم
                    <span className="math">{"\\(y = -x + m\\)"}</span> بالنسبة للمنحنى
                    <span className="math">{"\\((C_f)\\)"}</span>.
                    <br />
                    بيانياً، ندرس عدد تقاطعات <span className="math">{"\\((C_f)\\)"}</span> مع عائلة المستقيمات
                    <span className="math">{"\\((\\Delta_m)\\)"}</span> ذات المعادلة <span className="math">{"\\(y = -x + m\\)"}</span>، حيث معامل التوجيه ثابت ويساوي <span className="math">{"\\(-1\\)"}</span>.
                </div>
            </div>

            {/* II.Q5 — Relate */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label link">3) الربط (Relate)</span><br />

                    سأقوم بإمساك مسطرة تمثل المستقيم <span className="math">{"\\(y = -x + m\\)"}</span> مع ثبيت ميلها عند <span className="math">{"\\(-1\\)"}</span>، ثم أبدأ بتحريكها عموديا من الأسفل نحو الأعلى مع المحافظة على نفس الميل، وأراقب عدد نقاط تقاطعها مع المنحنى <span className="math">{"\\(C_f\\)"}</span>.
                    <br /><br />

                    الفكرة الأساسية: كل وضعية للمستقيم تعطي عدد تقاطعات معين مع <span className="math">{"\\(C_f\\)"}</span>.
                    <br /><br />

                    <strong>في البداية</strong>، عندما تكون المسطرة منخفضة جداً أسفل المنحنى، أي عندما <span className="math">{"\\(m < 0\\)"}</span>، يقطع المستقيم المنحنى في نقطة واحدة فقط، وبالتالي يوجد حل وحيد.
                    <br /><br />

                    ثم عندما تصل المسطرة إلى الوضعية الموافقة لـ <span className="math">{"\\(m = 0\\)"}</span>، يبقى هناك تقاطع وحيد مع المنحنى.
                    <br /><br />

                    <strong>بعد ذلك</strong>، إذا واصلت رفع المسطرة أكثر، فإن المستقيم سيقطع المنحنى في نقطتين مختلفتين، وبالتالي نحصل على حلين اثنين متمايزين. وهذا يحدث عندما: <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span>.
                    <br /><br />

                    ثم أواصل رفع المسطرة تدريجياً حتى تصل إلى وضعية تمس فيها المنحنى في نقطة واحدة فقط دون أن تقطعه، أي تصبح مماسة للمنحنى عند فاصلة المماس <span className="math">{"\\(x = e^{-1/2}\\)"}</span>. في هذه الحالة نحصل على حل وحيد مضاعف، وذلك عندما: <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span>.
                    <br /><br />

                    <strong>وأخيراً</strong>، عندما تصبح المسطرة مرتفعة جداً فوق المنحنى، أي عندما <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span>، لا يوجد أي تقاطع مع المنحنى، وبالتالي لا توجد حلول للمعادلة.
                </div>

                <div className="right-col">
                    <strong>المناقشة البيانية المائلة حسب قيم الوسيط <span className="math">{"\\(m\\)"}</span> :</strong>
                    <br />
                    المعادلة تكافئ:
                    <span className="math">{"\\(h(x) = m\\)"}</span>
                    بمقارنة قيم <span className="math">{"\\(m\\)"}</span> مع القيمة العظمى <span className="math">{"\\(2\\sqrt{e}\\)"}</span> والصفر:
                    <br /><br />

                    • إذا كان <span className="math">{"\\(m < 0\\)"}</span> : يقطع المستقيم المنحنى في نقطة واحدة فقط، إذن <strong>يوجد حل وحيد</strong>.
                    <br /><br />

                    • إذا كان <span className="math">{"\\(m = 0\\)"}</span> : <strong>يوجد حل وحيد</strong>.
                    <br /><br />

                    • إذا كان <span className="math">{"\\(0 < m < 2\\sqrt{e}\\)"}</span> : يقطع المستقيم المنحنى في نقطتين، إذن <strong>يوجد حلان متمايزان</strong>.
                    <br /><br />

                    • إذا كان <span className="math">{"\\(m = 2\\sqrt{e}\\)"}</span> <strong>يوجد حل وحيد مضاعف</strong> هو <span className="math">{"\\(x = e^{-1/2}\\)"}</span>.
                    <br /><br />

                    • إذا كان <span className="math">{"\\(m > 2\\sqrt{e}\\)"}</span> : لا يوجد تقاطع، إذن <strong>لا توجد حلول</strong>.

                    <div className="graph-container" style={{ marginTop: '16px', border: 'none', background: 'transparent' }}>
                        <img
                            src={disscustionMImg}
                            alt="المناقشة البيانية"
                            className="graph-image"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
            {/* ============================================================
    PART III — Q1
============================================================ */}
            <div className="question-header">
                الجزء III — المتتالية التكاملية <span className="math" style={{ color: '#FFFFFF' }}>{"\\((u_n)\\)"}</span>
            </div>

            <div className="sub-question">
                1) إثبات أن حدود المتتالية موجبة تماماً: <span className="math">{"\\(u_n > 0\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي المعياري</div>
            </div>


            {/* III.Q1 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إثبات أن:
                    <span className="math">{"\\(u_n > 0\\)"}</span> لكل <span className="math">{"\\(n \\in \\mathbb{N}\\)"}</span>.
                </div>
                <div className="right-col">
                    الهدف: إثبات أن التكامل موجب لأن الدالة موجبة على مجال التكامل.
                </div>
            </div>

            {/* III.Q1 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أفكر في مجال التكامل:
                    <span className="math">{"\\([e^n, e^{n+1}]\\)"}</span>.<br />

                    بما أن <span className="math">{"\\(n \\ge 0\\)"}</span> فإن
                    <span className="math">{"\\(e^n \\ge 1\\)"}</span> ⇐ إذن
                    <span className="math">{"\\(x \\ge 1\\)"}</span> على كامل المجال.<br />

                    الفكرة: لا ندرس الدالة بالكامل، فقط نستخدم إشارة كل جزء على مجال موجب.<br />

                    على <span className="math">{"\\(x \\ge 1\\)"}</span>:
                    • <span className="math">{"\\(\\ln x \\ge 0\\)"}</span><br />
                    • <span className="math">{"\\(3+2\\ln x > 0\\)"}</span><br />
                    • <span className="math">{"\\(x > 0\\)"}</span><br />

                    إذن التكامل موجب تماماً.
                </div>

                <div className="right-col">
                    من <span className="math">{"\\(e^n \\ge 1\\)"}</span>:
                    <div className="math-block">{"\\[x \\in [e^n, e^{n+1}] \\Rightarrow x \\ge 1\\]"}</div>

                    <div className="math-block">{"\\[\\ln x \\ge 0 \\Rightarrow 3+2\\ln x > 0\\]"}</div>

                    <div className="math-block">{"\\[\\frac{3+2\\ln x}{x} > 0\\]"}</div>

                    <div className="math-block">{"\\[e^n < e^{n+1} \\Rightarrow \\int_{e^n}^{e^{n+1}} \\frac{3+2\\ln x}{x}\\,dx > 0\\]"}</div>
                    إذن مباشرة:
                    <div className="math-block">{"\\[u_n > 0\\]"}</div>
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
                    <span className="math">{"\\(u_0 = \\int_1^e [f(x)+x]\\,dx = \\int_1^e \\dfrac{3+2\\ln x}{x}\\,dx\\)"}</span>.
                </div>
                <div className="right-col">
                </div>
            </div>

            {/* III.Q2 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف:</strong> تفسير <span className="math">{"\\(u_0\\)"}</span> هندسياً.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> تفسير المقدار <span className="math">{"\\(u_0\\)"}</span>
                </div>
            </div>

            {/* III.Q2 — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    علي أن أفهم أولا ما تمثله <span className="math">{"\\(u_n\\)"}</span>  ,                     <span className="math">{"\\(u_0 = \\int_{1}^{e} [f(x)-(-x)] dx\\)"}</span> .
                    أي هو تكامل دالة الفرق بين منحنيين
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
                    أصيغ التفسير الهندسي النهائي بلغة المساحات ووحدات قياس المساحة (u.a.).
                    المنطقة مغلقة تماماً ومحددة بالحدود الأربعة المذكورة.
                </div>
                <div className="right-col">
                    على المجال
                    <span className="math">{"\\([1, e]\\)"}</span>، لدينا المنحنى
                    <span className="math">{"\\((C_f)\\)"}</span> يقع تماماً فوق المستقيم المقارب
                    <span className="math">{"\\((\\Delta)\\)"}</span>.
                    <br />
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
                    <span className="math">{"\\(u_0 > 0\\)"}</span> (III.Q1) و <span className="math">{"\\((C_f)\\)"}</span> فوق <span className="math">{"\\((\\Delta)\\)"}</span> على <span className="math">{"\\([1,e]\\)"}</span> ← مساحة موجبة ✓
                </div>
                <div className="right-col">
                    التفسير الهندسي للمساحة محقق تماماً.
                </div>
            </div>

            <div className="trigger-box">
                <div className="trigger-box-title"><FlashIcon /> دليل المحفزات البصرية (Trigger)</div>
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


            {/* III.Q3 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو تحويل
                    <span className="math">{"\\(u_n\\)"}</span>
                    إلى فرق قيم دالة أصلية بين
                    <span className="math">{"\\(e^n\\)"}</span> و
                    <span className="math">{"\\(e^{n+1}\\)"}</span>.
                </div>
                <div className="right-col">
                    الهدف:
                    <span className="math">{"\\(u_n = U(e^{n+1}) - U(e^n)\\)"}</span>
                    حيث
                    <span className="math">{"\\(U\\)"}</span> دالة أصلية لـ
                    <span className="math">{"\\(\\frac{3+2\\ln x}{x}\\)"}</span>.
                </div>
            </div>

            {/* III.Q3 — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أربط شكل التكامل مع قواعد الاشتقاق العكسي (log + chain rule).<br />
                    ألاحظ أن:
                    <span className="math">{"\\(\\frac{3}{x}\\)"}</span> ↔ دالة أصلية لوغاريتمية، و
                    <span className="math">{"\\(\\frac{2\\ln x}{x}\\)"}</span> مرتبطة بمشتقة مربع اللوغاريتم.<br />

                    إذن أستنتج أن الحل يتم عبر دالة أصلية من الشكل
                    <span className="math">{"\\(U(x)=3\\ln x+(\\ln x)^2\\)"}</span>
                    ثم أطبق فرق القيم على حدود التكامل.
                </div>

                <div className="right-col">
                    إيجاد الدالة الأصلية:
                    <div className="math-block">
                        {"\\[U(x)=3\\ln x+(\\ln x)^2\\]"}
                    </div>

                    حساب الحدود:
                    <div className="math-block">
                        {"\\[U(e^{n+1})=3(n+1)+(n+1)^2=n^2+5n+4\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[U(e^n)=3n+n^2\\]"}
                    </div>

                    تطبيق فرق القيم:
                    <div className="math-block">
                        {"\\[u_n=(n^2+5n+4)-(n^2+3n)=2n+4\\]"}
                    </div>
                </div>
            </div>

            {/* III.Q3 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق بسرعة عند
                    <span className="math">{"\\(n=0\\)"}</span> للحصول على نفس القيمة.<br />

                    كما أتحقق من صحة الدالة الأصلية عبر الاشتقاق:
                    <span className="math">{"\\(U'(x)=\\frac{3+2\\ln x}{x}\\)"}</span>
                    مما يؤكد أن \(U\) صحيحة.
                </div>

                <div className="right-col">
                    اختبار عددياً:
                    <div className="math-block">
                        {"\\[u_0 = 2(0)+4 = 4\\]"}
                    </div>

                    تحقق تحليلي (اشتقاق):
                    <div className="math-block">
                        {"\\[U(x)=3\\ln x+(\\ln x)^2\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[U'(x)=\\frac{3}{x}+\\frac{2\\ln x}{x}=\\frac{3+2\\ln x}{x}\\]"}
                    </div>

                    إذن الدالة الأصلية صحيحة ⇐ النتيجة صحيحة.
                </div>
            </div>

            <div className="danger-box">
                <div className="danger-box-title"><WarningIcon />️ انتبه لمربع اللوغاريتم!</div>
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
                    المتتالية خطية من الشكل:
                    <span className="math">{"\\(u_n = 2n + 4\\)"}</span> ⇐ متتالية حسابية.
                </div>
                <div className="right-col">
                    نلاحظ أن
                    <span className="math">{"\\((u_n)\\)"}</span>
                    متتالية حسابية أساسها
                    <span className="math">{"\\(r=2\\)"}</span>
                    وحدها الأول
                    <span className="math">{"\\(u_0=4\\)"}</span>.
                </div>
            </div>

            {/* III.Q4 — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف هو إيجاد عبارة مغلقة لـ
                    <span className="math">{"\\(S_n\\)"}</span>
                    بدلالة
                    <span className="math">{"\\(n\\)"}</span>.
                </div>
                <div className="right-col">
                    حساب:
                    <span className="math">{"\\(S_n = u_0 + u_1 + ... + u_n\\)"}</span>
                    باستعمال خواص المتتالية الحسابية.
                </div>
            </div>

            {/* III.Q4 — RELATE (WITH EXECUTION MERGED) */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أتعامل مع المجموع كمتتالية حسابية، لذا يكفي تحديد:
                    البداية، النهاية، وعدد الحدود.<br />

                    • البداية:
                    <span className="math">{"\\(u_0=4\\)"}</span><br />
                    • النهاية:
                    <span className="math">{"\\(u_n=2n+4\\)"}</span><br />
                    • عدد الحدود:
                    <span className="math">{"\\(n+1\\)"}</span><br />

                    إذن أستعمل صيغة مجموع متتالية حسابية مباشرة.
                </div>

                <div className="right-col">
                    بما أن المتتالية حسابية:
                    <div className="math-block">
                        {"\\[S_n = (n+1)\\cdot\\frac{u_0+u_n}{2}\\]"}
                    </div>

                    بالتعويض:
                    <div className="math-block">
                        {"\\[S_n = (n+1)\\cdot\\frac{4+(2n+4)}{2}\\]"}
                    </div>

                    التبسيط:
                    <div className="math-block">
                        {"\\[S_n = (n+1)(n+4)\\]"}
                    </div>
                </div>
            </div>

            {/* III.Q4 — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    اختبار سريع:
                    <span className="math">{"\\(n=0 \\Rightarrow S_0=4\\)"}</span> ✓،
                    <span className="math">{"\\(n=1 \\Rightarrow S_1=10\\)"}</span> ✓
                </div>

                <div className="right-col">
                    النتيجة النهائية:
                    <span className="math">{"\\(S_n=(n+1)(n+4)\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                FINAL STRATEGY
            ============================================================ */}
            <div className="strategy-box" style={{ marginTop: '20px' }}>
                <div className="strategy-box-title">الخلاصة الاستراتيجية الكبرى للتمرين</div>
                <strong>أهم ما نتعلمه من هذا التمرين الشامل:</strong>
                <br /><br />
                1. <strong>الدالة المساعدة:</strong> دراسة إشارة الدالة المساعدة في البداية هي أساس تفكيك تغيّرات الدالة الكبرى. لا يمكن حل البكالوريا بنجاح دون ربطهما بشكل صحيح.
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