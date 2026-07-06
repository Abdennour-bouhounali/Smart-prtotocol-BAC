import React from 'react';
import { BellIcon } from '../components/PrintIcons';

const Solution_DirectQuestions_Sequences = () => {
    return (
        <>
            <div id="toc-sol-direct-sequences" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - المتتاليات العددية</div>

            {/* ============================================================
                EXERCISE 1: Induction
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — البرهان بالتراجع والحصر</div>

            {/* Q1.1 */}
            <div className="sub-question">1) برهان <span className="math">{"\\(0 < u_n < 1\\)"}</span> حيث <span className="math">{"\\(u_0 = 1/2\\)"}</span> و <span className="math">{"\\(u_{n+1} = \\frac{2u_n}{u_n+1}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات صحة متباينة تعتمد على عدد طبيعي، مما يستدعي استخدام البرهان بالتراجع كأداة منهجية.
                </div>
                <div className="right-col">
                    الهدف: إثبات الخاصية <span className="math">{"\\(P(n): 0 < u_n < 1\\)"}</span> من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط العلاقة التراجعية بالدالة المرفقة لتسهيل الانتقال بين الحدود. أتحقق من شرط البداية (الأساس)، ثم أصيغ فرضية التراجع. أدرس اتجاه تغير الدالة المرفقة لإثبات خطوة التراجع مع الحفاظ على ترتيب المتباينة.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> توظيف تزايد الدالة المرفقة للمحافظة على اتجاه المتباينة والانتقال من فرضية التراجع إلى خطوة البرهان.
                    </div>
                </div>
                <div className="right-col">
                    نعتبر الدالة المرفقة <span className="math">{"\\(f(x) = \\frac{2x}{x+1}\\)"}</span> المعرفة على <span className="math">{"\\([0, 1]\\)"}</span>.<br />
                    <strong>1. الأساس:</strong> من أجل <span className="math">{"\\(n=0\\)"}</span>، لدينا <span className="math">{"\\(u_0 = 1/2\\)"}</span> وهو يحقق <span className="math">{"\\(0 < 1/2 < 1\\)"}</span>، فالخاصية محققة عند البداية.<br />
                    <strong>2. الفرضية والبرهان:</strong> نفرض أن <span className="math">{"\\(0 < u_n < 1\\)"}</span> ونبرهن أن <span className="math">{"\\(0 < u_{n+1} < 1\\)"}</span>.<br />
                    نحسب مشتقة الدالة المرفقة: <span className="math">{"\\(f'(x) = \\frac{2}{(x+1)^2}\\)"}</span>. بما أن المشتقة موجبة تماماً على المجال، فإن الدالة متزايدة تماماً.<br />
                    بتطبيق الدالة <span className="math">{"\\(f\\)"}</span> على أطراف متباينة الفرضية: <span className="math">{"\\(f(0) < f(u_n) < f(1)\\)"}</span>.<br />
                    وبما أن <span className="math">{"\\(f(0) = 0\\)"}</span> و <span className="math">{"\\(f(1) = 1\\)"}</span> و <span className="math">{"\\(f(u_n) = u_{n+1}\\)"}</span>، نجد: <span className="math">{"\\(0 < u_{n+1} < 1\\)"}</span>.
                </div>
            </div>


            {/* Q1.2 */}
            <div className="sub-question">2) برهان <span className="math">{"\\(u_n < 2\\)"}</span> والمتتالية متزايدة، حيث <span className="math">{"\\(u_{n+1} = \\sqrt{u_n+2}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات خاصية الرتابة والحد الأعلى للمتتالية بالتراجع.
                </div>
                <div className="right-col">
                    الهدف: إثبات أن المتتالية متزايدة ومحدودة من الأعلى بالعدد 2، أي برهان الخاصية <span className="math">{"\\(u_n < u_{n+1} < 2\\)"}</span> بالتراجع.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أدمج الخاصيتين في متباينة واحدة لتسهيل البرهان. أتحقق من الحد الأول والثاني كأساس للتراجع، ثم أفرض صحة المتباينة وأستعمل البناء الجبري (إضافة عدد ثم التجذير) لنقلها إلى الحد الموالي مستفيداً من تزايد دالة الجذر.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> بناء حدود التراجع الموالية بإضافة الثابت وجر الأطراف تحت دالة الجذر التربيعي المتزايدة دون تغيير اتجاه المتراجحة.
                    </div>
                </div>
                <div className="right-col">
                    <strong>1. الأساس:</strong> من أجل <span className="math">{"\\(n=0\\)"}</span>، لدينا <span className="math">{"\\(u_0=1\\)"}</span> و <span className="math">{"\\(u_1=\\sqrt{3}\\)"}</span>. نلاحظ أن <span className="math">{"\\(1 < \\sqrt{3} < 2\\)"}</span>، فالخاصية محققة.<br />
                    <strong>2. الفرضية والبرهان:</strong> نفرض أن <span className="math">{"\\(u_n < u_{n+1} < 2\\)"}</span> ونبرهن أن <span className="math">{"\\(u_{n+1} < u_{n+2} < 2\\)"}</span>.<br />
                    نضيف العدد 2 لجميع الأطراف: <span className="math">{"\\(u_n + 2 < u_{n+1} + 2 < 4\\)"}</span>.<br />
                    بإدخال دالة الجذر التربيعي (وهي دالة متزايدة تماماً على المجال الموجب):<br />
                    <span className="math">{"\\(\\sqrt{u_n+2} < \\sqrt{u_{n+1}+2} < \\sqrt{4}\\)"}</span>.<br />
                    وبما أن <span className="math">{"\\(u_{n+1} = \\sqrt{u_n+2}\\)"}</span> و <span className="math">{"\\(u_{n+2} = \\sqrt{u_{n+1}+2}\\)"}</span>، فإن: <span className="math">{"\\(u_{n+1} < u_{n+2} < 2\\)"}</span>.
                </div>
            </div>


            {/* Q1.3 */}
            <div className="sub-question">3) المتراجحة الأسية: <span className="math">{"\\(u_{n+1} \\le \\frac{3}{4} u_n\\)"}</span> ثم <span className="math">{"\\(0 < u_n \\le (\\frac{3}{4})^n\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    الهدف واضح وهو إثبات صحة المتراجحة بالتراجع.                </div>
                <div className="right-col">
                    الهدف: إثبات صحة المتباينة <span className="math">{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span> بالتراجع.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    ذكر بالتراجع يعني باستعمال الحد أو الحدود الاولى , وأيضا العلاقة نفسها كمعطى مهم جدا لبرهان صحتها من أجل كل الحدود.<br />
                    في الخطوة الثالثة : يجب أن أركز جيدا ان هدفي الواضح هو إثبات العلاقة من أجل n+1 و أكتب العلاقة المراد إثباتها بوضوح : <span className="math">{"\\(0 < u_{n+1} \\le (\\frac{3}{4})^{n+1}\\)"}</span>.

                </div>
                <div className="right-col">
                    نعلم من المعطيات المبرهنة سابقاً أن <span className="math">{"\\(u_{n+1} \\le \\frac{3}{4} u_n\\)"}</span>.<br />
                    <strong>1. الأساس:</strong> من أجل <span className="math">{"\\(n=0\\)"}</span>، لدينا <span className="math">{"\\(u_0 = 1\\)"}</span> و <span className="math">{"\\((\\frac{3}{4})^0 = 1\\)"}</span>، وبما أن <span className="math">{"\\(1 \\le 1\\)"}</span> فالأساس محقق.<br />
                    <strong>2. الفرضية والبرهان:</strong> نفرض أن <span className="math">{"\\(0 < u_n \\le (\\frac{3}{4})^n\\)"}</span> ونبرهن أن <span className="math">{"\\(0 < u_{n+1} \\le (\\frac{3}{4})^{n+1}\\)"}</span>.<br />
                    نضرب متباينة الفرضية في العدد الموجب <span className="math">{"\\(\\frac{3}{4}\\)"}</span>: <span className="math">{"\\(\\frac{3}{4} u_n \\le (\\frac{3}{4})^{n+1}\\)"}</span>.<br />
                    من المعطيات لدينا: <span className="math">{"\\(u_{n+1} \\le \\frac{3}{4} u_n\\)"}</span>.<br />
                    بالتعدي نجد: <span className="math">{"\\(u_{n+1} \\le (\\frac{3}{4})^{n+1}\\)"}</span>.
                </div>
            </div>


            {/* ============================================================
                EXERCISE 2: Variations and Limits
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — دراسة اتجاه التغير والنهايات</div>

            {/* Q2.1 */}
            <div className="sub-question">1) اتجاه تغير <span className="math">{"\\(u_n\\)"}</span> حيث <span className="math">{"\\(u_{n+1} - u_n = \\frac{-u_n^2 + u_n + 2}{u_n + 3}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    "اتجاه التغير" يعني دراسة اشارة الفرق
                </div>
                <div className="right-col">
                    الهدف: دراسة إشارة الفرق <span className="math">{"\\(u_{n+1} - u_n\\)"}</span> لتحديد رتابة المتتالية.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر حدود المتتالية بإشارة بسط ومقام كسر الفرق. أحلل إشارة المقام أولاً، ثم أحلل إشارة البسط ككثيرة حدود من الدرجة الثانية بإيجاد جذورها وتحديد إشارتها داخل وخارج مجال الجذور.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> دراسة البسط والمقام بشكل مستقل لتركيب إشارة كسر الفرق النهائي.

                    </div>
                    أستنتج رتابة المتتالية بناءً على الإشارة الموجبة تماماً للفرق.

                </div>
                <div className="right-col">
                    لدينا عبارة الفرق: <span className="math">{"\\(u_{n+1} - u_n = \\frac{-u_n^2 + u_n + 2}{u_n + 3}\\)"}</span>.<br />
                    بما أن حدود المتتالية محصورة في المجال <span className="math">{"\\(]0, 2[\\)"}</span>، فإن المقام <span className="math">{"\\(u_n + 3 > 0\\)"}</span> دائماً.<br />
                    ندرس إشارة كثيرة الحدود في البسط <span className="math">{"\\(P(x) = -x^2 + x + 2\\)"}</span>. الجذور هي <span className="math">{"\\(x_1 = -1\\)"}</span> و <span className="math">{"\\(x_2 = 2\\)"}</span>.<br />
                    إشارة كثيرة الحدود تكون موجبة داخل مجال الجذرين، أي على المجال <span className="math">{"\\(]-1, 2[\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(u_n \\in ]0, 2[ \\subset ]-1, 2[\\)"}</span>، فإن البسط <span className="math">{"\\(-u_n^2 + u_n + 2 > 0\\)"}</span>.
                    بما أن البسط والمقام موجبان تماماً، فإن الفرق موجباً تماماً، وعليه                  <span style={{ color: "#003399", fontSize: '11pt' }}>المتتالية متزايدة تماماً.

                    </span>                 </div>

            </div>


            {/* Q2.2 */}
            <div className="sub-question">2) استنتاج نهاية <span className="math">{"\\(u_n\\)"}</span> علماً أن <span className="math">{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب نهاية المتتالية عند اللانهائية. و بما أنه قيل لي "علما أن" فإنني أستعمل مبرهنة الحصر.
                </div>
                <div className="right-col">
                    الهدف: حساب نهاية المتتالية <span className="math">{"\\[\\lim_{n\\to+\\infty} u_n\\]"}</span> باستعمال مبرهنة الحصر.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتتالية بمبرهنة الحصر. أحسب نهاية الأطراف المحيطة بالمتتالية (الحد الثابت والمتتالية الهندسية التي يقترب أساسها من الصفر) لاستنتاج نهاية الحد الأوسط.
                    أطبق مبرهنة الحصر لصياغة النتيجة النهائية للنهاية.

                </div>
                <div className="right-col">
                    لدينا الحصر المبرهن سابقاً: <span className="math">{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span>.<br />
                    نحسب نهاية الطرف الأيسر: <span className="math">{"\\[\\lim_{n\\to+\\infty} 0 = 0\\]"}</span>.<br />
                    نحسب نهاية الطرف الأيمن: بما أن الأساس هندسي يحقق <span className="math">{"\\(-1 < \\frac{3}{4} < 1\\)"}</span>، فإن <span className="math">{"\\[\\lim_{n\\to+\\infty} \\left(\\frac{3}{4}\\right)^n = 0\\]"}</span>.

                    حسب مبرهنة الحصر، فإن:
                    <span className="math">{"\\[ \\lim_{n \\to +\\infty} u_n = 0 \\]"}</span>

                </div>
            </div>


            {/* ============================================================
                EXERCISE 3: Helper Sequences
            ============================================================ */}
            <div className="question-header no-break">التمرين 3 — المتتاليات المساعدة</div>

            {/* Q3.1 */}
            <div className="sub-question">1) تعيين <span className="math">{"\\(\\alpha\\)"}</span> لتكون <span className="math">{"\\(v_n = \\frac{u_n - \\alpha}{u_n + 3}\\)"}</span> هندسية</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label  translate">M. الترجمة (Translate)</span><br />
                    متتالية هندسية تعني : <span className="math">{"\\(v_{n+1} = q \\cdot v_n\\)"}</span>                   </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد قيمة الثابت الهندسي لتكون المتتالية المساعدة هندسية.
                </div>
                <div className="right-col">
                    الهدف: البحث عن قيمة <span className="math">{"\\(\\alpha\\)"}</span> التي تحقق العلاقة التراجعية الهندسية <span className="math">{"\\(v_{n+1} = q \\cdot v_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>المعطيات الأساسية المتاحة:</strong>
                    <ul style={{ margin: "5px 0", paddingRight: "20px" }}>
                        <li>العلاقة التراجعية للمتتالية <span className="math">{"\\(u_n\\)"}</span>.</li>
                        <li>عبارة المتتالية المساعدة: <span className="math">{"\\(v_n = \\frac{u_n - \\alpha}{u_n + 3}\\)"}</span>.</li>
                        <li>التعريف الرياضي للمتتالية الهندسية: <span className="math">{"\\(v_{n+1} = q \\cdot v_n\\)"}</span>.</li>
                    </ul>
                    <strong>سؤال التفكير المنهجي:</strong> كيف يمكنني الربط بين هذه المعطيات الثلاثة للانتقال من الحد <span className="math">{"\\(v_n\\)"}</span> إلى <span className="math">{"\\(v_{n+1}\\)"}</span> وتحديد الثوابت المطلوبة؟

                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> مقارنة النتائج لاستبعاد القيمة التي تلغي مقام المتتالية المساعدة وتحديد الأساس q المقابل للقيمة المقبولة.
                    </div>
                </div>
                <div className="right-col">
                    نبدأ بحساب <span className="math">{"\\(v_{n+1}\\)"}</span> بالتعويض:
                    <div className="math-block">{"\\[ v_{n+1} = \\frac{u_{n+1} - \\alpha}{u_{n+1} + 3} = \\frac{\\dfrac{2u_n+3}{u_n+4} - \\alpha}{\\dfrac{2u_n+3}{u_n+4} + 3} \\]"}</div>
                    نضرب البسط والمقام في المقدار <span className="math">{"\\((u_n+4)\\)"}</span> للتبسيط:<br />
                    <span className="math">{"\\(v_{n+1} = \\frac{(2u_n+3) - \\alpha(u_n+4)}{(2u_n+3) + 3(u_n+4)} = \\frac{(2-\\alpha)u_n + (3-4\\alpha)}{5(u_n+3)}\\)"}</span>.<br /><br />

                    <strong>الطريقة 1: المطابقة (Pattern Matching)</strong><br />
                    نريد مطابقة النتيجة مع <span className="math">{"\\(q \\cdot v_n = q \\frac{u_n - \\alpha}{u_n+3}\\)"}</span>، أي:<br />
                    <span className="math">{"\\(\\frac{(2-\\alpha)u_n + (3-4\\alpha)}{5(u_n+3)} = \\frac{5q(u_n - \\alpha)}{5(u_n+3)}\\)"}</span>.<br />
                    بمطابقة معاملات البسط نتحصل على الجملة:<br />
                    <span className="math">{"\\(\\begin{cases} 2 - \\alpha = 5q \\\\ 3 - 4\\alpha = -5q\\alpha \\end{cases}\\)"}</span>.<br />
                    بالتعويض نجد المعادلة: <span className="math">{"\\(\\alpha^2 + 2\\alpha - 3 = 0\\)"}</span>، والتي حلولها هي <span className="math">{"\\(\\alpha = 1\\)"}</span> أو <span className="math">{"\\(\\alpha = -3\\)"}</span>.<br /><br />

                    <strong>الطريقة 2: النقطة الصامدة (Fixed Point)</strong><br />
                    نحل المعادلة المميزة للنقطة الصامدة <span className="math">{"\\(\\alpha = f(\\alpha)\\)"}</span> للدالة المرفقة <span className="math">{"\\(f(x) = \\frac{2x+3}{x+4}\\)"}</span>:<br />
                    <span className="math">{"\\(\\alpha = \\frac{2\\alpha+3}{\\alpha+4} \\implies \\alpha^2 + 2\\alpha - 3 = 0\\)"}</span>.<br />
                    تعطي نفس القيمتين: <span className="math">{"\\(\\alpha = 1\\)"}</span> أو <span className="math">{"\\(\\alpha = -3\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من استبعاد القيمة غير الممكنة جبرياً وتحديد الأساس النهائي.
                </div>
                <div className="right-col">
                    القيمة <span className="math">{"\\(\\alpha = -3\\)"}</span> مرفوضة لأنها تجعل مقام المتتالية المساعدة مساوياً للصفر عند التعويض، وعليه القيمة المقبولة هي <span className="math">{"\\(\\alpha = 1\\)"}</span>.<br />
                    بالتعويض نجد الأساس: <span className="math">{"\\(5q = 2-1 = 1 \\implies q = \\frac{1}{5}\\)"}</span>.<br />
                    عبارة المتتالية هي: <span className="math">{"\\(v_n = \\frac{u_n-1}{u_n+3}\\)"}</span> وهي هندسية أساسها <span className="math">{"\\(q = \\frac{1}{5}\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 4: Sums and Products
            ============================================================ */}
            <div className="question-header no-break">التمرين 4 — المجاميع والجداءات</div>

            {/* Q4.1 */}
            <div className="sub-question">1) مجموع متتالية هندسية: <span className="math">{"\\(S_n = v_0 + \\dots + v_n\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب مجموع حدود متتابعة لمتتالية هندسية معلومة.
                </div>
                <div className="right-col">
                    الهدف: حساب المجموع <span className="math">{"\\(S_n = v_0 + v_1 + \\dots + v_n\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط المجموع بالقانون العام لمجموع حدود متتالية هندسية بتعيين الحد الأول والأساس وعدد الحدود بدقة ثم التعويض المباشر والتبسيط.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> حساب عدد الحدود بدقة لتفادي الأخطاء في الأسس عند كتابة العبارة المغلقة للمجموع.
                    </div>
                </div>
                <div className="right-col">
                    لدينا المتتالية الهندسية حدها الأول <span className="math">{"\\(v_0 = 3\\)"}</span> وأساسها <span className="math">{"\\(q = 1/2\\)"}</span>.<br />
                    عدد الحدود في المجموع هو <span className="math">{"\\(n+1\\)"}</span>.<br />
                    نعوض في قانون مجموع متتالية هندسية:<br />
                    <span className="math">
                        {`
\\[
\\begin{aligned}
S_n &= v_0 \\frac{1 - q^{n+1}}{1 - q} \\\\
    &= 3 \\frac{1 - (1/2)^{n+1}}{1 - 1/2} \\\\
    &= 6 \\left( 1 - \\left(\\frac{1}{2}\\right)^{n+1} \\right)
\\end{aligned}
\\]
`}
                    </span>                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من صحة المجموع بحساب القيمة الابتدائية عند رتبة الصفر.
                </div>
                <div className="right-col">
                    من أجل <span className="math">{"\\(n=0\\)"}</span> نجد <span className="math">{"\\(S_0 = 6(1-1/2) = 3 = v_0\\)"}</span>، وهي مطابقة للحد الأول.
                </div>
            </div>

            {/* Q4.2 */}
            <div className="sub-question">2) جداء قوى: <span className="math">{"\\(P_n = 2^{u_0} \\times 2^{u_1} \\times \\dots \\times 2^{u_n}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب جداء قوى أسية بدلالة مجموع حدود متتالية.
                </div>
                <div className="right-col">
                    الهدف: حساب الجداء <span className="math">{"\\(P_n = 2^{u_0} \\times 2^{u_1} \\times \\dots \\times 2^{u_n}\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط جداء القوى بجمع الأسس لتحويل الجداء إلى قوى مرفوعة لمجموع متتالية حسابية. أحسب هذا المجموع الحسابي باستخراج حده الأول والأخير وعدد الحدود ثم التعويض في قانونه الخاص.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> حساب مجموع الأسس في الأس كخطوة وسيطة قبل رفع الناتج كأساس للعدد 2.
                    </div>
                </div>
                <div className="right-col">
                    باستعمال خواص القوى، نجمع الأسس:<br />
                    <span className="math">{"\\(P_n = 2^{u_0 + u_1 + \\dots + u_n}\\)"}</span>.<br />
                    الأس هو مجموع حدود متتالية حسابية <span className="math">{"\\(S'_n = u_0 + \\dots + u_n\\)"}</span> حيث <span className="math">{"\\(u_n = 1 + 2n\\)"}</span> حدها الأول <span className="math">{"\\(u_0 = 1\\)"}</span> وعدد الحدود هو <span className="math">{"\\(n+1\\)"}</span>.<br />
                    نعوض في قانون مجموع متتالية حسابية:<br />
                    <span className="math">
                        {`
\\[
\\begin{aligned}
S'_n &= \\frac{n+1}{2}(u_0 + u_n)
     = \\frac{n+1}{2}(1 + 1 + 2n) \\\\
     &= (n+1)^2
\\end{aligned}
\\]
`}
                    </span>
                    نكتب العبارة النهائية للجداء: <span className="math">{"\\(P_n = 2^{(n+1)^2}\\)"}</span>.<br />

                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من صحة الجداء النهائي بحساب القيمة عند رتبة البدء.
                </div>
                <div className="right-col">
                    عند <span className="math">{"\\(n=0\\)"}</span> نجد <span className="math">{"\\(P_0 = 2^1 = 2\\)"}</span> وهو مطابق لـ <span className="math">{"\\(2^{u_0} = 2^1 = 2\\)"}</span>.
                </div>
            </div>

            {/* Q4.3 */}
            <div className="sub-question">3) مجموع لوغاريتمي: <span className="math">{"\\(T_n = \\ln(v_0) + \\dots + \\ln(v_n)\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تبسيط وحساب مجموع لوغاريتمي لحدود متتالية هندسية.
                </div>
                <div className="right-col">
                    الهدف: تبسيط المجموع <span className="math">{"\\(T_n = \\ln(v_0) + \\dots + \\ln(v_n)\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أرى مجموع لوغاريتمات، فأفكر فوراً في:

                    <span className="math">{"\\(\\ln(a)+\\ln(b)=\\ln(ab)\\)"}</span>

                    ثم ألاحظ أن

                    <span className="math">{"\\(v_n\\)"}</span>

                    هندسية، مما يوحي بتعريف

                    <span className="math">{"\\(w_n=\\ln(v_n)\\)"}</span>

                    لتحويل المسألة إلى مجموع متتالية حسابية واستعمال قانونها مباشرة.

                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> الإشارة الذهنية:</strong>
                        لوغاريتمات + جمع ⇐ ابحث عن متتالية حسابية.
                    </div>
                </div>
                <div className="right-col">
                    باستعمال خواص اللوغاريتم، نكتب: <span className="math">{"\\(T_n = \\ln(v_0 \\cdot v_1 \\dots v_n)\\)"}</span>.<br />
                    أو نضع المتتالية المساعدة <span className="math">{"\\(w_n = \\ln(v_n)\\)"}</span>. بما أن <span className="math">{"\\(v_n\\)"}</span> هندسية، فإن <span className="math">{"\\(w_n\\)"}</span> هي متتالية حسابية أساسها <span className="math">{"\\(\\ln(q)\\)"}</span>.<br />
                    نعوض في قانون المجموع الحسابي:<br />
                    <span className="math">{"\\(T_n = \\frac{n+1}{2}(\\ln(v_0) + \\ln(v_n)) = \\frac{n+1}{2} \\ln(v_0 \\cdot v_n)\\)"}</span>.
                </div>
            </div>


            {/* Q4.4 */}
            <div className="sub-question">4) حساب المجموع <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = \\ln\\!\\left(1-\\tfrac{1}{(1+1)^2}\\right) + \\ln\\!\\left(1-\\tfrac{1}{(2+1)^2}\\right) + \\dots + \\ln\\!\\left(1-\\tfrac{1}{(n+1)^2}\\right)\\)"}</span></div>
            <div className="strategy-box">
                <div className="strategy-box-title">استراتيجية المجاميع اللوغاريتمية</div>
                عند وجود المجموع مع اللوغاريتم، الهدف هو تحويل ما بداخل اللوغاريتم إلى كسر ثم استغلال خاصية <span className="math">{"\\(\\ln(a/b) = \\ln a - \\ln b\\)"}</span> للحصول على حدود تتلاشى مع بعضها (Telescoping Sum).
            </div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تبسيط وحساب مجموع لوغاريتمي تلسكوبي لكسور مركبة.
                </div>
                <div className="right-col">
                    الهدف: حساب وتبسيط المجموع <span className="math">{"\\(S_n\\)"}</span> للحصول على عبارة مختصرة بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أوحد المقامات داخل اللوغاريتم، ثم أحلل البسط كفرق مربعين. أستعمل خواص اللوغاريتم لتفكيك المقادير إلى فروق بين حدود متتالية لتوليد مجموع تلسكوبي تختزل حدوده الوسطية تلقائياً.
                    <div style={{ backgroundColor: "#DDEEFF", border: "1px dashed #0080FF", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#003399", fontSize: '11pt' }}>
                        <strong><BellIcon /> تذكير بالهدف:</strong> كتابة الحد العام على شكل فرق حدين متتاليين لتسريع عملية الاختزال عند الجمع.
                    </div>
                </div>
                <div className="right-col">
                    نوحد المقامات داخل اللوغاريتم للحد العام:<br />
                    <span className="math">{"\\(1 - \\frac{1}{(k+1)^2} = \\frac{(k+1)^2 - 1}{(k+1)^2} = \\frac{k(k+2)}{(k+1)^2}\\)"}</span>.<br />
                    ندخل اللوغاريتم ونبسط باستخدام خواصه:<br />
                    <span className="math">{"\\(\\ln\\left(\\frac{k(k+2)}{(k+1)^2}\\right) = \\ln(k) - 2\\ln(k+1) + \\ln(k+2)\\)"}</span>.<br />
                    نعيد ترتيب الحدود لتظهر كفرق بين متتاليتين متتاليتين:<br />
                    <span className="math">{"\\([\\ln(k) - \\ln(k+1)] - [\\ln(k+1) - \\ln(k+2)]\\)"}</span>.

                    عند تعويض قيم <span className="math">{"\\(k\\)"}</span> من 1 إلى <span className="math">{"\\(n\\)"}</span> في المجموع، تختزل كافة الحدود المتعاقبة ويتبقى فقط الحد الأول والأخير:<br />

                </div>
            </div>

            {/* ============================================================
    EXERCISE 5: Integral Sequences
============================================================ */}
            <div className="question-header no-break">التمرين 5 — المتتاليات التكاملية</div>

            {/* ============================================================
    QUESTION 1
============================================================ */}
            <div className="sub-question">
                1) برهان العلاقة التراجعية
                <span className="math">{"\\(I_{n+1}=e-(n+1)I_n\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    المطلوب ليس حساب التكامل، بل إيجاد علاقة تربط
                    <span className="math">{"\\(I_{n+1}\\)"}</span>
                    بـ
                    <span className="math">{"\\(I_n\\)"}</span>.

                    إذن يجب أن أبحث عن طريقة تجعل تعريف
                    <span className="math">{"\\(I_n\\)"}</span>
                    يظهر من جديد داخل الحساب.
                </div>

                <div className="right-col">
                    الهدف هو إيجاد صيغة تراجعية تربط
                    <span className="math">{"\\(I_{n+1}\\)"}</span>
                    و
                    <span className="math">{"\\(I_n\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أجرد المعطيات:

                    <ul style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li>المتتالية معرفة بتكامل.</li>
                        <li>داخل التكامل يوجد جداء:
                            <span className="math">{"\\(x^{n+1}e^x\\)"}</span>.
                        </li>
                        <li>المطلوب علاقة تراجعية.</li>
                    </ul>

                    عندما أرى جداء دالتين داخل تكامل أتذكر مباشرة:
                    <strong>المكاملة بالتجزئة</strong>.

                    لكنني لا أختار العناصر عشوائياً.

                    أسأل نفسي:

                    ما الذي أريد ظهوره بعد الاشتقاق؟

                    أريد ظهور
                    <span className="math">{"\\(x^n e^x\\)"}</span>

                    لأنه يمثل تعريف
                    <span className="math">{"\\(I_n\\)"}</span>.

                    لذلك أجعل:

                    <span className="math">{"\\(u=x^{n+1}\\)"}</span>

                    لأن اشتقاقه يخفض الأس من
                    <span className="math">{"\\(n+1\\)"}</span>
                    إلى
                    <span className="math">{"\\(n\\)"}</span>.

                    <div style={{
                        backgroundColor: "#DDEEFF",
                        border: "1px dashed #0080FF",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: "#003399",
                        fontSize: '11pt'
                    }}>
                        <strong><BellIcon /> ما الذي أبحث عنه؟</strong><br />
                        لست أبحث عن قيمة التكامل، بل عن إعادة ظهور
                        <span className="math">{"\\(I_n\\)"}</span>
                        داخل الحساب.
                    </div>
                </div>

                <div className="right-col">
                    نطبق المكاملة بالتجزئة على:

                    <span className="math">
                        {"\\(I_{n+1}=\\int_0^1 x^{n+1}e^x dx\\)"}
                    </span>.

                    نختار:

                    <span className="math">
                        {"\\(u=x^{n+1}\\Rightarrow u'=(n+1)x^n\\)"}
                    </span>

                    و

                    <span className="math">
                        {"\\(v'=e^x\\Rightarrow v=e^x\\)"}
                    </span>.

                    إذن:

                    <span className="math">
                        {"\\(I_{n+1}=\\left[x^{n+1}e^x\\right]_0^1-(n+1)\\int_0^1x^ne^xdx\\)"}
                    </span>.

                    وبحساب الحدود نجد :

                    <span className="math">
                        {"\\(I_{n+1}=e-(n+1)I_n\\)"}
                    </span>.
                </div>
            </div>

            {/* ============================================================
    QUESTION 2
============================================================ */}

            <div className="sub-question">
                2) دراسة رتابة وتقارب المتتالية
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    المطلوب الآن ليس إيجاد صيغة جديدة، بل معرفة سلوك المتتالية:
                    هل هي متزايدة أم متناقصة؟ وهل تتقارب؟
                </div>

                <div className="right-col">
                    الهدف هو إثبات أن المتتالية
                    <span className="math">{"\\((I_n)\\)"}</span>
                    متناقصة ومتقاربة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    عندما أسمع كلمة:

                    <strong style={{ color: '#004D99' }}> رتابة متتالية </strong>

                    أفكر مباشرة في الفرق:

                    <span className="math">{"\\(I_{n+1}-I_n\\)"}</span>.

                    فإذا استطعت تحديد إشارته أعرف اتجاه تغير المتتالية.

                    سأجمع الحدين داخل تكامل واحد ثم أدرس إشارة الدالة تحت التكامل.


                    الآن أدرس إشارة كل عامل:

                    <ul style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li>
                            <span className="math">{"\\(x^n\\)"}</span>
                            موجب أو منعدم.
                        </li>
                        <li>
                            <span className="math">{"\\(e^x\\)"}</span>
                            موجب دائماً.
                        </li>
                        <li>
                            <span className="math">{"\\(x-1\\le0\\)"}</span>
                            على المجال
                            <span className="math">{"\\([0,1]\\)"}</span>.
                        </li>
                    </ul>

                    إذن الدالة تحت التكامل سالبة أو منعدمة.

                    وبالتالي الفرق سالب.

                    <div style={{
                        backgroundColor: "#DDEEFF",
                        border: "1px dashed #0080FF",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: "#003399",
                        fontSize: '11pt'
                    }}>
                        <strong><BellIcon /> الفكرة الذهنية:</strong><br />
                        الرتابة تتحول غالباً إلى دراسة إشارة
                        <span className="math">{"\\(u_{n+1}-u_n\\)"}</span>.
                    </div>
                </div>

                <div className="right-col">
                    نحسب:

                    <span className="math">
                        {"\\(I_{n+1}-I_n=\\int_0^1x^{n+1}e^xdx-\\int_0^1x^ne^xdx\\)"}
                    </span>

                    ومنه:

                    <span className="math">
                        {"\\(I_{n+1}-I_n=\\int_0^1x^n(x-1)e^xdx\\)"}
                    </span>.
                    بما أن:

                    <span className="math">{"\\(x^n\\ge0\\)"}</span>

                    و

                    <span className="math">{"\\(e^x>0\\)"}</span>

                    و

                    <span className="math">{"\\(x-1\\le0\\)"}</span>

                    على

                    <span className="math">{"\\([0,1]\\)"}</span>،

                    فإن:

                    <span className="math">
                        {"\\(I_{n+1}-I_n\\le0\\)"}
                    </span>.

                    إذن المتتالية
                    <span className="math">{"\\((I_n)\\)"}</span>
                    متناقصة.
                </div>
            </div>



            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    بعد إثبات التناقص أسأل نفسي:

                    هل هذا يكفي لإثبات التقارب؟

                    لا.

                    أحتاج أيضاً إلى حد سفلي.

                    أعود إلى تعريف المتتالية:

                    <span className="math">
                        {"\\(I_n=\\int_0^1x^ne^xdx\\)"}
                    </span>

                    وألاحظ أن الدالة تحت التكامل موجبة.

                    إذن جميع الحدود موجبة.

                    أصبحت أملك:

                    <br />• متناقصة.
                    <br />• محدودة من الأسفل.

                    وهذا يكفي لتطبيق مبرهنة المتتاليات الرتيبة.
                </div>

                <div className="right-col">
                    بما أن:

                    <span className="math">{"\\(x^n\\ge0\\)"}</span>

                    و

                    <span className="math">{"\\(e^x>0\\)"}</span>

                    فإن:

                    <span className="math">
                        {"\\(I_n=\\int_0^1x^ne^xdx\\ge0\\)"}
                    </span>.

                    إذن المتتالية محدودة من الأسفل بالعدد 0.

                    وبما أنها متناقصة ومحدودة فإنها متقاربة حسب مبرهنة المتتاليات الرتيبة.
                </div>
            </div>

            {/* ============================================================
    QUESTION 3
============================================================ */}

            <div className="sub-question">
                3) إثبات الحصر وحساب النهاية
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    إثبات:

                    <span className="math">
                        {"\\(0\\le I_n\\le\\frac{e}{n+1}\\)"}
                    </span>

                    ثم حساب النهاية.
                </div>

                <div className="right-col">
                    الهدف هو إيجاد حصر بسيط للمتتالية ثم استعماله لاستخراج النهاية.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    قبل أن أبدأ الحساب، أنظر إلى الهدف المطلوب:

                    <span className="math">
                        {"\\(0\\le I_n\\le\\frac{e}{n+1}\\)"}
                    </span>

                    وأطرح على نفسي السؤال:
                    <br />

                    <strong>من أين يمكن أن يظهر الحد</strong>

                    <span className="math">
                        {"\\(\\frac1{n+1}\\)"}
                    </span>

                    <strong>؟</strong>
                    <br />

                    أستعرض التكاملات المشهورة التي أعرفها.

                    بسرعة أتعرف على:

                    <span className="math">
                        {"\\(\\int_0^1x^ndx=\\frac1{n+1}\\)"}
                    </span>

                    إذن أصبح لدي خيط مهم:

                    إذا استطعت التخلص من
                    <span className="math">{"\\(e^x\\)"}</span>

                    والإبقاء فقط على
                    <span className="math">{"\\(x^n\\)"}</span>

                    فسأحصل تلقائياً على الكسر المطلوب.

                    الآن أسأل:

                    كيف أستبدل
                    <span className="math">{"\\(e^x\\)"}</span>
                    بشيء أبسط؟

                    بما أن:

                    <span className="math">{"\\(0\\le x\\le1\\)"}</span>

                    فإن:

                    <span className="math">{"\\(1\\le e^x\\le e\\)"}</span>

                    أي أن
                    <span className="math">{"\\(e\\)"}</span>

                    يمثل حاجزاً علوياً ثابتاً.

                    إذا عوضت
                    <span className="math">{"\\(e^x\\)"}</span>
                    بـ
                    <span className="math">{"\\(e\\)"}</span>

                    فسيتبقى لي التكامل الذي أعرف أنه يولد

                    <span className="math">
                        {"\\(\\frac1{n+1}\\)"}
                    </span>.

                    <br />
                    <br />
                    <br />
                    بعد الحصول على الحصر ألاحظ أن الطرف الأيمن:

                    <span className="math">
                        {"\\(\\frac{e}{n+1}\\)"}
                    </span>

                    يتجه إلى الصفر.

                    إذن المتتالية أصبحت محصورة بين مقدارين لهما نفس النهاية.
                </div>

                <div className="right-col">
                    بما أن:

                    <span className="math">
                        {"\\(1\\le e^x\\le e\\)"}
                    </span>

                    على المجال
                    <span className="math">{"\\([0,1]\\)"}</span>،

                    فإن:

                    <span className="math">
                        {"\\(0\\le x^ne^x\\le ex^n\\)"}
                    </span>.
                    <br /><br />

                    بالتكامل:

                    <span className="math">
                        {"\\(0\\le\\int_0^1x^ne^xdx\\le e\\int_0^1x^ndx\\)"}
                    </span>.
                    <br /><br />

                    أي:

                    <span className="math">
                        {"\\(0\\le I_n\\le e\\left[\\frac{x^{n+1}}{n+1}\\right]_0^1\\)"}
                    </span>.
                    <br /><br />

                    ومنه:

                    <span className="math">
                        {"\\(0\\le I_n\\le\\frac{e}{n+1}\\)"}
                    </span>.
                    <div style={{
                        backgroundColor: "#DDEEFF",
                        border: "1px dashed #0080FF",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: "#003399",
                        fontSize: '11pt'
                    }}>
                        <strong><BellIcon /> الفكرة :</strong><br />
                        لم أبدأ من المعطيات ثم وصلت إلى الحصر،
                        بل بدأت من الحصر المطلوب،
                        وسألت نفسي:
                        <br />
                        "أي تكامل يعطي
                        <span className="math">{"\\(\\frac1{n+1}\\)"}</span>
                        ؟"
                        <br />
                        ثم حاولت تعديل التكامل الأصلي ليحتوي ذلك التكامل المعروف.
                    </div>
                    <br />
                    لدينا:

                    <span className="math">
                        {"\\(0\\le I_n\\le\\frac{e}{n+1}\\)"}
                    </span>.

                    وبما أن:

                    <span className="math">
                        {"\\[\\lim_{n\\to+\\infty}0=0\\]"}
                    </span>

                    و

                    <span className="math">
                        {"\\[\\lim_{n\\to+\\infty}\\frac{e}{n+1}=0\\]"}
                    </span>،

                    فإن مبرهنة الحصر تعطي:

                    <div className="math-block">
                        {"\\[\\lim_{n\\to+\\infty}I_n=0\\]"}
                    </div>
                </div>
            </div>

            {/* ============================================================
    EXERCISE 6: Adjacent Sequences
============================================================ */}
            <div className="question-header no-break">التمرين 6 — المتتاليات المتجاورة</div>

            {/* ============================================================
    Q6.1
============================================================ */}
            <div className="sub-question">
                1) إثبات تجاور المتتاليتين
                <span>{" حيث: "}</span>
                <span className="math">{"\\(u_{n+1}=\\frac{u_n+v_n}{2},\\quad v_{n+1}=\\frac{u_n+2v_n}{3}\\)"}</span>
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            {/* AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    المطلوب إثبات أن المتتاليتين متجاورتان.

                    قبل أي حساب أتذكر تعريف التجاور:

                    <ul style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li>إحداهما متزايدة.</li>
                        <li>الأخرى متناقصة.</li>
                        <li>الفرق بينهما يؤول إلى الصفر.</li>
                    </ul>

                    إذن هذه هي الشروط الثلاثة التي سأحاول إثباتها.
                </div>

                <div className="right-col">
                    الهدف هو إثبات أن المتتاليتين
                    <span className="math">{"\\((u_n)\\)"}</span>
                    و
                    <span className="math">{"\\((v_n)\\)"}</span>
                    متجاورتان.
                </div>
            </div>

            {/* RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    أنظر إلى شروط التجاور وأسأل نفسي:

                    ما الشرط الأصعب؟

                    الشرط الثالث:

                    <span className="math">{"\\(v_n-u_n\\to0\\)"}</span>

                    لأن الرتابة يمكن دراستها لاحقاً بسهولة بواسطة
                    <span className="math">{"\\(u_{n+1}-u_n\\)"}</span>
                    و
                    <span className="math">{"\\(v_{n+1}-v_n\\)"}</span>.
                    <br />
                    لذلك أبدأ مباشرة بقياس المسافة بين المتتاليتين.
                    <br />
                    ما أبسط كمية تقيس هذه المسافة؟

                    <span className="math">{"\\(v_n-u_n\\)"}</span>.
                    <br />
                    لهذا السبب أعرّف:

                    <span className="math">{"\\(w_n=v_n-u_n\\)"}</span>.
                    <br />
                    الآن أصبح هدفي الجديد هو دراسة
                    <span className="math">{"\\(w_n\\)"}</span>.
                    <br />
                    بعد التعويض بعلاقات التراجع أجد أن:

                    <span className="math">{"\\(w_{n+1}=\\frac16w_n\\)"}</span>.
                    <br />
                    هنا أتعرف فوراً على متتالية هندسية.

                    والمتتاليات الهندسية سهلة جداً لأن نهايتها تعتمد فقط على الأساس.
                    <br />
                    بما أن:

                    <span className="math">{"\\(|q|=\\frac16<1\\)"}</span>

                    فإن الفرق بين المتتاليتين يتقلص في كل مرحلة،
                    وبالتالي يجب أن يقترب من الصفر.


                </div>

                <div className="right-col">
                    نعرّف:

                    <span className="math">
                        {"\\(w_n=v_n-u_n\\)"}
                    </span>.

                    نحسب:

                    <span className="math">
                        {"\\(w_{n+1}=v_{n+1}-u_{n+1}\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac{u_n+2v_n}{3}-\\frac{u_n+v_n}{2}\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac{2u_n+4v_n-3u_n-3v_n}{6}\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac{v_n-u_n}{6}\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac16w_n\\)"}
                    </span>.

                    إذن
                    <span className="math">{"\\((w_n)\\)"}</span>
                    متتالية هندسية أساسها:

                    <span className="math">{"\\(q=\\frac16\\)"}</span>.

                    وبما أن:

                    <span className="math">{"\\(|q|<1\\)"}</span>

                    فإن:

                    <span className="math">
                        {"\\[\\lim_{n\\to+\\infty}w_n=0\\]"}
                    </span>.

                    أي:

                    <span className="math">
                        {"\\[\\lim_{n\\to+\\infty}(v_n-u_n)=0\\]"}
                    </span>.
                    <div style={{
                        backgroundColor: "#DDEEFF",
                        border: "1px dashed #0080FF",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: "#003399",
                        fontSize: '11pt'
                    }}>
                        <strong><BellIcon /> الفكرة:</strong><br />
                        عندما يكون الهدف هو إثبات أن متتاليتين تقتربان من بعضهما،
                        أول شيء أبحث عنه هو الفرق بينهما،
                        لأنه يقيس هذه المسافة مباشرة.
                    </div>
                </div>
            </div>

            {/* TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    بعد إثبات أن الفرق يقترب من الصفر،
                    أعود إلى الشرطين المتبقيين:

                    <ul style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li>رتابة <span className="math">{"\\((u_n)\\)"}</span>.</li>
                        <li>رتابة <span className="math">{"\\((v_n)\\)"}</span>.</li>
                    </ul>

                    عندما أبحث عن الرتابة أفكر مباشرة في:

                    <span className="math">{"\\(u_{n+1}-u_n\\)"}</span>

                    و

                    <span className="math">{"\\(v_{n+1}-v_n\\)"}</span>.

                    بعد التبسيط ألاحظ أن كلا التعبيرين يحتويان على

                    <span className="math">{"\\(v_n-u_n\\)"}</span>

                    الذي درست إشارته سابقاً.

                    إذن أستفيد من النتيجة السابقة بدل إعادة العمل من البداية.

                    <div style={{
                        backgroundColor: "#DDEEFF",
                        border: "1px dashed #0080FF",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        color: "#003399",
                        fontSize: '11pt'
                    }}>
                        <strong><BellIcon /> الفكرة :</strong><br />
                        كل نتيجة قوية أثبتها أحاول إعادة استعمالها لاحقاً.
                        الرياضيات ليست سلسلة من الحسابات المنفصلة،
                        بل بناء متدرج للنتائج.
                    </div>
                </div>

                <div className="right-col">
                    نحسب:

                    <span className="math">
                        {"\\(u_{n+1}-u_n=\\frac{u_n+v_n}{2}-u_n\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac{v_n-u_n}{2}\\)"}
                    </span>.

                    وبما أن:

                    <span className="math">{"\\(v_0-u_0=1>0\\)"}</span>

                    والمتتالية الفرقية هندسية أساسها موجب،
                    فإن:

                    <span className="math">{"\\(v_n-u_n>0\\)"}</span>.

                    وبالتالي:

                    <span className="math">
                        {"\\(u_{n+1}-u_n>0\\)"}
                    </span>.

                    إذن
                    <span className="math">{"\\((u_n)\\)"}</span>
                    متزايدة.

                    <br /><br />

                    كما أن:

                    <span className="math">
                        {"\\(v_{n+1}-v_n=\\frac{u_n+2v_n}{3}-v_n\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\frac{u_n-v_n}{3}\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(<0\\)"}
                    </span>.

                    إذن
                    <span className="math">{"\\((v_n)\\)"}</span>
                    متناقصة.

                    <br /><br />

                    بما أن:

                    <ul style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li><span className="math">{"\\((u_n)\\)"}</span> متزايدة.</li>
                        <li><span className="math">{"\\((v_n)\\)"}</span> متناقصة.</li>
                        <li><span className="math">{"\\(v_n-u_n\\to0\\)"}</span>.</li>
                    </ul>

                    فإن المتتاليتين متجاورتان.
                </div>
            </div>

            {/* ============================================================
    Q6.2
============================================================ */}

            <div className="sub-question">
                2) تعيين
                <span className="math">{"\\(a,b\\)"}</span>
                بحيث تكون
                <span className="math">{"\\(w_n=a u_n+b v_n\\)"}</span>
                متتالية ثابتة
            </div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            {/* AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />


                </div>

                <div className="right-col">
                    الهدف هو إيجاد قيم
                    <span className="math">{"\\(a\\)"}</span>
                    و
                    <span className="math">{"\\(b\\)"}</span>

                    بحيث تكون المتتالية

                    <span className="math">
                        {"\\(w_n=a u_n+b v_n\\)"}
                    </span>

                    ثابتة.
                </div>
            </div>

            {/* RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />

                    عندما أقرأ عبارة:

                    "اجعل المتتالية ثابتة"

                    أترجمها مباشرة إلى:

                    <span className="math">{"\\(w_{n+1}=w_n\\)"}</span>.

                    هذه أول فكرة تخطر ببالي.

                    الآن أعرف ما يجب فعله:

                    <ol style={{ margin: '4px 0', paddingRight: '18px' }}>
                        <li>أحسب <span className="math">{"\\(w_{n+1}\\)"}</span>.</li>
                        <li>أعوض علاقات التراجع.</li>
                        <li>أفرض المساواة مع <span className="math">{"\\(w_n\\)"}</span>.</li>
                        <li>أطابق المعاملات.</li>
                    </ol>

                    لماذا المطابقة؟

                    لأن التعبيرين يجب أن يكونا متساويين مهما كانت قيم
                    <span className="math">{"\\(u_n\\)"}</span>
                    و
                    <span className="math">{"\\(v_n\\)"}</span>.

                    والطريقة الوحيدة لضمان ذلك هي تساوي المعاملات.
                </div>

                <div className="right-col">
                    نحسب:

                    <span className="math">
                        {"\\(w_{n+1}=a u_{n+1}+b v_{n+1}\\)"}
                    </span>.

                    بالتعويض:

                    <span className="math">
                        {"\\(w_{n+1}=a\\left(\\frac{u_n+v_n}{2}\\right)+b\\left(\\frac{u_n+2v_n}{3}\\right)\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=\\left(\\frac a2+\\frac b3\\right)u_n+\\left(\\frac a2+\\frac{2b}3\\right)v_n\\)"}
                    </span>.
                    <br /><br />

                    لكي تكون المتتالية ثابتة يجب أن يكون:

                    <span className="math">
                        {"\\(w_{n+1}=w_n=a u_n+b v_n\\)"}
                    </span>.

                    إذن:

                    <span className="math">
                        {"\\(\\begin{cases}\\frac a2+\\frac b3=a\\\\\\frac a2+\\frac{2b}3=b\\end{cases}\\)"}
                    </span>
                    <br />

                    ومنهما:

                    <span className="math">
                        {"\\(\\frac b3=\\frac a2\\)"}
                    </span>

                    أي:

                    <span className="math">
                        {"\\(2b=3a\\)"}
                    </span>.
                    <br /><br />

                    نختار أبسط حل صحيح:

                    <span className="math">
                        {"\\(a=2\\)"}
                    </span>

                    و

                    <span className="math">
                        {"\\(b=3\\)"}
                    </span>.
                </div>
            </div>

            {/* TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    بعد إيجاد المعاملات لا أتوقف مباشرة.

                    أعود إلى الهدف الأصلي:

                    هل أصبحت المتتالية ثابتة فعلاً؟

                    أفضل طريقة للتحقق هي التعويض المباشر.

                    وإذا نجحت المطابقة،
                    أحسب قيمة الثابت باستعمال الحد الأول.
                </div>

                <div className="right-col">
                    مع:

                    <span className="math">{"\\(a=2\\)"}</span>

                    و

                    <span className="math">{"\\(b=3\\)"}</span>

                    نحصل على:

                    <div className="math-block">
                        {"\\[2\\cdot\\frac{u_n+v_n}{2}+3\\cdot\\frac{u_n+2v_n}{3}=2u_n+3v_n=w_n\\]"}
                    </div>

                    وبالتالي:

                    <span className="math">
                        {"\\(w_{n+1}=w_n\\)"}
                    </span>

                    والمتتالية ثابتة.

                    <br /><br />

                    نحسب قيمة هذا الثابت:

                    <span className="math">
                        {"\\(w_0=2u_0+3v_0\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(=2(1)+3(2)=8\\)"}
                    </span>.

                    <br /><br />

                    إذن:

                    <div className="math-block">
                        {"\\[w_n=8\\quad \\forall n\\in\\mathbb N\\]"}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution_DirectQuestions_Sequences;
