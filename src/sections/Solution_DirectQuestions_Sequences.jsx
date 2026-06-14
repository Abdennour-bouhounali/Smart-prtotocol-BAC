import React from 'react';

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
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> توظيف تزايد الدالة المرفقة للمحافظة على اتجاه المتباينة والانتقال من فرضية التراجع إلى خطوة البرهان.
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
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من أن الانتقال بالدالة المتزايدة حافظ على الحصر المطلوب وحقق هدف التراجع.
                </div>
                <div className="right-col">
                    الخاصية صحيحة من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span> بالوراثة والتعدي.
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
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> بناء حدود التراجع الموالية بإضافة الثابت وجر الأطراف تحت دالة الجذر التربيعي المتزايدة دون تغيير اتجاه المتراجحة.
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
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من توافق النتائج مع رتابة المتتالية المتزايدة والمحدودة من الأعلى.
                </div>
                <div className="right-col">
                    المتتالية متزايدة تماماً ومحدودة من الأعلى بالعدد 2 من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span>.
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
                    استعمال العلاقة التراجعية لإثبات حصر كلي للحد العام بدلالة قوة هندسية.
                </div>
                <div className="right-col">
                    الهدف: إثبات صحة المتباينة <span className="math">{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span> بالتراجع.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط الفرضية بالمعطى التراجعي المتاح. أتحقق من رتبة البداية، ثم أفرض صحة الحصر عند الحد الحالي وأضربه في الأساس الهندسي لتشكيل متباينة وسيطة تسمح بالانتقال للحد الموالي بالتعدي.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> استخدام العلاقة المساعدة للربط بين الحدود وتوظيف خاصية التعدي للوصول للحد ذي الرتبة الموالية.
                    </div>
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
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من الحفاظ على موجبية الحدود بالتوازي مع إثبات الحد الأعلى.
                </div>
                <div className="right-col">
                    بما أن حدود المتتالية موجبة تماماً بالفرض، فإن الحصر محقق بالكامل لكل <span className="math">{"\\(n\\)"}</span>.
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
                    تحديد اتجاه تغير ورتابة المتتالية بدراسة إشارة الفرق بين حدين متتاليين.
                </div>
                <div className="right-col">
                    الهدف: دراسة إشارة الفرق <span className="math">{"\\(u_{n+1} - u_n\\)"}</span> لتحديد رتابة المتتالية.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر حدود المتتالية بإشارة بسط ومقام كسر الفرق. أحلل إشارة المقام أولاً، ثم أحلل إشارة البسط ككثيرة حدود من الدرجة الثانية بإيجاد جذورها وتحديد إشارتها داخل وخارج مجال الجذور.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> دراسة البسط والمقام بشكل مستقل لتركيب إشارة كسر الفرق النهائي.
                    </div>
                </div>
                <div className="right-col">
                    لدينا عبارة الفرق: <span className="math">{"\\(u_{n+1} - u_n = \\frac{-u_n^2 + u_n + 2}{u_n + 3}\\)"}</span>.<br />
                    بما أن حدود المتتالية محصورة في المجال <span className="math">{"\\(]0, 2[\\)"}</span>، فإن المقام <span className="math">{"\\(u_n + 3 > 0\\)"}</span> دائماً.<br />
                    ندرس إشارة كثيرة الحدود في البسط <span className="math">{"\\(P(x) = -x^2 + x + 2\\)"}</span>. الجذور هي <span className="math">{"\\(x_1 = -1\\)"}</span> و <span className="math">{"\\(x_2 = 2\\)"}</span>.<br />
                    إشارة كثيرة الحدود تكون موجبة داخل مجال الجذرين، أي على المجال <span className="math">{"\\(]-1, 2[\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(u_n \\in ]0, 2[ \\subset ]-1, 2[\\)"}</span>، فإن البسط <span className="math">{"\\(-u_n^2 + u_n + 2 > 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أستنتج رتابة المتتالية بناءً على الإشارة الموجبة تماماً للفرق.
                </div>
                <div className="right-col">
                    بما أن البسط والمقام موجبان تماماً، فإن الفرق موجباً تماماً، وعليه **المتتالية متزايدة تماماً**.
                </div>
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
                    حساب نهاية المتتالية عند اللانهائية.
                </div>
                <div className="right-col">
                    الهدف: حساب نهاية المتتالية <span className="math">{"\\(\\lim_{n\\to+\\infty} u_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتتالية بمبرهنة الحصر (الدركيين). أحسب نهاية الأطراف المحيطة بالمتتالية (الحد الثابت والمتتالية الهندسية التي يقترب أساسها من الصفر) لاستنتاج نهاية الحد الأوسط.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> التأكد من تقارب المتتالية المحيطة باليمين إلى الصفر لفرض نفس التقارب على المتتالية المطلوبة.
                    </div>
                </div>
                <div className="right-col">
                    لدينا الحصر المبرهن سابقاً: <span className="math">{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span>.<br />
                    نحسب نهاية الطرف الأيسر: <span className="math">{"\\(\\lim_{n\\to+\\infty} 0 = 0\\)"}</span>.<br />
                    نحسب نهاية الطرف الأيمن: بما أن الأساس هندسي يحقق <span className="math">{"\\(-1 < \\frac{3}{4} < 1\\)"}</span>، فإن <span className="math">{"\\(\\lim_{n\\to+\\infty} \\left(\\frac{3}{4}\\right)^n = 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أطبق مبرهنة الحصر لصياغة النتيجة النهائية للنهاية.
                </div>
                <div className="right-col">
                    حسب مبرهنة الحصر، فإن نهاية المتتالية تساوي الصفر:
                    <div className="math-block">{"\\[ \\lim_{n \\to +\\infty} u_n = 0 \\]"}</div>
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
                    أقوم بحساب عبارة الحد الموالي للمتتالية المساعدة بالتعويض وتوحيد المقامات والتخلص من الكسور المركبة. أربط العبارة الناتجة بطريقتين: الأولى بمطابقة معاملات البسط والمقام، والثانية بالبحث عن النقطة الصامدة للدالة المرفقة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> مقارنة النتائج لاستبعاد القيمة التي تلغي مقام المتتالية المساعدة وتحديد الأساس q المقابل للقيمة المقبولة.
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
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> حساب عدد الحدود بدقة لتفادي الأخطاء في الأسس عند كتابة العبارة المغلقة للمجموع.
                    </div>
                </div>
                <div className="right-col">
                    لدينا المتتالية الهندسية حدها الأول <span className="math">{"\\(v_0 = 3\\)"}</span> وأساسها <span className="math">{"\\(q = 1/2\\)"}</span>.<br />
                    عدد الحدود في المجموع هو <span className="math">{"\\(n+1\\)"}</span>.<br />
                    نعوض في قانون مجموع متتالية هندسية:<br />
                    <span className="math">{"\\(S_n = v_0 \\frac{1 - q^{n+1}}{1 - q} = 3 \\frac{1 - (1/2)^{n+1}}{1 - 1/2} = 6 \\left( 1 - \\left(\\frac{1}{2}\\right)^{n+1} \\right)\\)"}</span>.
                </div>
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
            <div className="sub-question">2) جداء قوى: <span className="math">{"\\(P_n = 2^{v_0} \\times 2^{v_1} \\times \\dots \\times 2^{v_n}\\)"}</span></div>
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
                    الهدف: حساب الجداء <span className="math">{"\\(P_n = 2^{v_0} \\times 2^{v_1} \\times \\dots \\times 2^{v_n}\\)"}</span> بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط جداء القوى بجمع الأسس لتحويل الجداء إلى قوى مرفوعة لمجموع متتالية حسابية. أحسب هذا المجموع الحسابي باستخراج حده الأول والأخير وعدد الحدود ثم التعويض في قانونه الخاص.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> حساب مجموع الأسس في الأس كخطوة وسيطة قبل رفع الناتج كأساس للعدد 2.
                    </div>
                </div>
                <div className="right-col">
                    باستعمال خواص القوى، نجمع الأسس:<br />
                    <span className="math">{"\\(P_n = 2^{v_0 + v_1 + \\dots + v_n}\\)"}</span>.<br />
                    الأس هو مجموع حدود متتالية حسابية <span className="math">{"\\(S'_n = v_0 + \\dots + v_n\\)"}</span> حيث <span className="math">{"\\(v_n = 1 + 2n\\)"}</span> حدها الأول <span className="math">{"\\(v_0 = 1\\)"}</span> وعدد الحدود هو <span className="math">{"\\(n+1\\)"}</span>.<br />
                    نعوض في قانون مجموع متتالية حسابية:<br />
                    <span className="math">{"\\(S'_n = \\frac{n+1}{2}(v_0 + v_n) = \\frac{n+1}{2}(1 + 1 + 2n) = (n+1)^2\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من صحة الجداء النهائي بحساب القيمة عند رتبة البدء.
                </div>
                <div className="right-col">
                    نكتب العبارة النهائية للجداء: <span className="math">{"\\(P_n = 2^{(n+1)^2}\\)"}</span>.<br />
                    عند <span className="math">{"\\(n=0\\)"}</span> نجد <span className="math">{"\\(P_0 = 2^1 = 2\\)"}</span> وهو مطابق لـ <span className="math">{"\\(2^{v_0} = 2^1 = 2\\)"}</span>.
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
                    أستغل خواص اللوغاريتم لتحويل مجموع اللوغاريتمات إلى لوغاريتم جداء الحدود، أو بتعريف متتالية حسابية مساعدة ناتجة عن إدخال اللوغاريتم على متتالية هندسية ثم تطبيق قانون مجموعها.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> ربط المجموع الحسابي الناتج بقانون مجموع المتتالية الحسابية للحصول على عبارة مغلقة ومبسطة.
                    </div>
                </div>
                <div className="right-col">
                    باستعمال خواص اللوغاريتم، نكتب: <span className="math">{"\\(T_n = \\ln(v_0 \\cdot v_1 \\dots v_n)\\)"}</span>.<br />
                    أو نضع المتتالية المساعدة <span className="math">{"\\(w_n = \\ln(v_n)\\)"}</span>. بما أن <span className="math">{"\\(v_n\\)"}</span> هندسية، فإن <span className="math">{"\\(w_n\\)"}</span> هي متتالية حسابية أساسها <span className="math">{"\\(\\ln(q)\\)"}</span>.<br />
                    نعوض في قانون المجموع الحسابي:<br />
                    <span className="math">{"\\(T_n = \\frac{n+1}{2}(\\ln(v_0) + \\ln(v_n)) = \\frac{n+1}{2} \\ln(v_0 \\cdot v_n)\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من مطابقة المجموع عند رتبة الصفر.
                </div>
                <div className="right-col">
                    عند <span className="math">{"\\(n=0\\)"}</span> نجد <span className="math">{"\\(T_0 = \\frac{1}{2} \\ln(v_0^2) = \\ln(v_0)\\)"}</span>، وهي محققة تماماً.
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
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> كتابة الحد العام على شكل فرق حدين متتاليين لتسريع عملية الاختزال عند الجمع.
                    </div>
                </div>
                <div className="right-col">
                    نوحد المقامات داخل اللوغاريتم للحد العام:<br />
                    <span className="math">{"\\(1 - \\frac{1}{(k+1)^2} = \\frac{(k+1)^2 - 1}{(k+1)^2} = \\frac{k(k+2)}{(k+1)^2}\\)"}</span>.<br />
                    ندخل اللوغاريتم ونبسط باستخدام خواصه:<br />
                    <span className="math">{"\\(\\ln\\left(\\frac{k(k+2)}{(k+1)^2}\\right) = \\ln(k) - 2\\ln(k+1) + \\ln(k+2)\\)"}</span>.<br />
                    نعيد ترتيب الحدود لتظهر كفرق بين متتاليتين متتاليتين:<br />
                    <span className="math">{"\\([\\ln(k) - \\ln(k+1)] - [\\ln(k+1) - \\ln(k+2)]\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أعوض الحدود وأختزل المجموع التلسكوبي لاستنتاج النتيجة النهائية والتحقق من صحتها.
                </div>
                <div className="right-col">
                    عند تعويض قيم <span className="math">{"\\(k\\)"}</span> من 1 إلى <span className="math">{"\\(n\\)"}</span> في المجموع، تختزل كافة الحدود المتعاقبة ويتبقى فقط الحد الأول والأخير:<br />
                    <span className="math">{"\\(S_n = \\ln\\left(\\frac{1}{2}\\right) - \\ln\\left(\\frac{n+1}{n+2}\\right)\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 5: Integral Sequences
            ============================================================ */}
            <div className="question-header no-break">التمرين 5 — المتتاليات التكاملية</div>

            <div className="sub-question">برهان العلاقة التراجعية والتناقص لـ <span className="math">{"\\(I_n = \\int_0^1 x^n e^x dx\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد علاقة تراجعية لمتتالية تكاملية ودراسة رتابتها.
                </div>
                <div className="right-col">
                    الهدف: إيجاد علاقة تربط <span className="math">{"\\(I_{n+1}\\)"}</span> بـ <span className="math">{"\\(I_n\\)"}</span> ودراسة رتابة المتتالية التكاملية.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أستعمل المكاملة بالتجزئة للتخلص من الأسس المتغيرة لـ x. أختار الدالة كثيرة الحدود للاشتقاق لتقليل درجتها والدالة الأسية للتكامل، ثم أعوض الحدود لاستخلاص العلاقة التراجعية المطلوبة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> اشتقاق الدالة كثيرة الحدود ذات الدرجة n+1 يولد الحد x^n الذي يمثل تعريفه المتتالية I_n.
                    </div>
                </div>
                <div className="right-col">
                    نطبق المكاملة بالتجزئة على <span className="math">{"\\(I_{n+1} = \\int_0^1 x^{n+1} e^x dx\\)"}</span>.<br />
                    نضع: <span className="math">{"\\(u = x^{n+1} \\implies u' = (n+1)x^n\\)"}</span> و <span className="math">{"\\(v' = e^x \\implies v = e^x\\)"}</span>.<br />
                    بالتعويض في قانون المكاملة بالتجزئة:<br />
                    <span className="math">{"\\(I_{n+1} = \\left[ x^{n+1}e^x \\right]_0^1 - (n+1) \\int_0^1 x^n e^x dx\\)"}</span>.<br />
                    بالتبسيط نجد العلاقة التراجعية:<br />
                    <span className="math">{"\\(I_{n+1} = e - (n+1)I_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أدرس إشارة فرق التكاملين لاستنتاج رتابة المتتالية التكاملية.
                </div>
                <div className="right-col">
                    نحسب الفرق: <span className="math">{"\\(I_{n+1} - I_n = \\int_0^1 x^n(x-1)e^x dx\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(x \\in [0, 1]\\)"}</span>، فإن <span className="math">{"\\(x-1 \\le 0\\)"}</span>، وعليه دالة التكامل سالبة مما يجعل قيمة التكامل سالبة تماماً. إذن **المتتالية متناقصة تماماً**.
                </div>
            </div>

            {/* Q5.3 */}
            <div className="sub-question">3) حصر النهاية: <span className="math">{"\\(0 \\le I_n \\le \\frac{e}{n+1}\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد حصر للمتتالية التكاملية وحساب نهايتها عند اللانهائية.
                </div>
                <div className="right-col">
                    الهدف: إثبات الحصر <span className="math">{"\\(0 \\le I_n \\le \\frac{e}{n+1}\\)"}</span> وحساب <span className="math">{"\\(\\lim_{n\\to+\\infty} I_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أبدأ بحصر الدالة الأسية على مجال التكامل. أضرب أطراف المتراجحة في القوة الموجبة x^n، ثم أدخل التكامل على الأطراف وأحسب التكامل للطرف الأيمن البسيط للوصول إلى الحصر المطلوب.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> دمج حصر المتغير مع خصائص رتابة التكامل لتوليد كسر الحصر النهائي الذي يؤول للصفر.
                    </div>
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(0 \\le x \\le 1\\)"}</span>، فإن الدالة الأسية محصورة بين: <span className="math">{"\\(1 \\le e^x \\le e\\)"}</span>.<br />
                    نضرب في المقدار الموجب <span className="math">{"\\(x^n\\)"}</span>: <span className="math">{"\\(0 \\le x^n e^x \\le e x^n\\)"}</span>.<br />
                    ندخل التكامل من 0 إلى 1 على الأطراف:<br />
                    <span className="math">{"\\(0 \\le \\int_0^1 x^n e^x dx \\le e \\int_0^1 x^n dx\\)"}</span>.<br />
                    نحسب تكامل الطرف الأيمن: <span className="math">{"\\(e \\left[ \\frac{x^{n+1}}{n+1} \\right]_0^1 = \\frac{e}{n+1}\\)"}</span>. وعليه نصل للحصر: <span className="math">{"\\(0 \\le I_n \\le \\frac{e}{n+1}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أستنتج نهاية المتتالية التكاملية بتطبيق مبرهنة النهاية بالحصر.
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(\\lim_{n\\to+\\infty} 0 = 0\\)"}</span> و <span className="math">{"\\(\\lim_{n\\to+\\infty} \\frac{e}{n+1} = 0\\)"}</span>، فإن نهاية المتتالية التكاملية هي:
                    <div className="math-block">{"\\[ \\lim_{n \\to +\\infty} I_n = 0 \\]"}</div>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 6: Adjacent Sequences
            ============================================================ */}
            <div className="question-header no-break">التمرين 6 — المتتاليات المتجاورة</div>

            {/* Q6.1 */}
            <div className="sub-question">1)  إثبات التجاور للمتتاليتين المتقاطعتين
                <span>{" حيث : "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} = \\frac{u_n + v_n}{2}, v_{n+1} = \\frac{u_n + 2v_n}{3}\\)"}</span><span>{" مع "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0 = 1, v_0 = 2\\)"}</span><span>{"."}</span>
            </div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إثبات تجاور متتاليتين متداخلتين.
                </div>
                <div className="right-col">
                    الهدف: إثبات تجاور المتتاليتين <span className="math">{"\\(u_n\\)"}</span> و <span className="math">{"\\(v_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أتحقق من شروط التجاور الثلاثة. أدرس رتابة كل متتالية بشكل متعاكس، وأعرف متتالية فرقية مساعدة لإثبات أنها هندسية متقاربة يؤول حدها العام للصفر عند اللانهائية.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> إيجاد أساس المتتالية الفرقية المساعد q وتأكيد انتمائه للمجال المفتوح للتقارب نحو الصفر.
                    </div>
                </div>
                <div className="right-col">
                    نعرف المتتالية الفرقية المساعدة <span className="math">{"\\(w_n = v_n - u_n\\)"}</span>.<br />
                    نحسب الحد الموالي للفرق:<br />
                    <span className="math">{"\\(v_{n+1} - u_{n+1} = \\frac{u_n + 2v_n}{3} - \\frac{u_n + v_n}{2} = \\frac{2u_n+4v_n - 3u_n - 3v_n}{6} = \\frac{v_n - u_n}{6}\\)"}</span>.<br />
                    إذن المتتالية الفرقية هندسية أساسها <span className="math">{"\\(q = 1/6\\)"}</span>. بما أن <span className="math">{"\\(-1 < 1/6 < 1\\)"}</span>، فإن نهاية الفرق تؤول للصفر:<br />
                    <span className="math">{"\\(\\lim_{n\\to+\\infty} (v_n - u_n) = 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أدرس إشارة الفرق u_{n+1}-u_n و v_{n+1}-v_n لتأكيد الرتابة المتعاكسة وبالتالي التجاور.
                </div>
                <div className="right-col">
                    لدينا <span className="math">{"\\(u_{n+1} - u_n = \\frac{v_n - u_n}{2} > 0\\)"}</span> فالمتتالية الأولى متزايدة.<br />
                    ولدينا <span className="math">{"\\(v_{n+1} - v_n = \\frac{u_n - v_n}{3} < 0\\)"}</span> فالمتتالية الثانية متناقصة.<br />
                    بما أن إحداهما متزايدة والأخرى متناقصة ونهاية الفرق بينهما صفر، فالمتتاليتان متجاورتان.
                </div>
            </div>

            {/* Q6.2 */}
            <div className="sub-question">2) تعيين <span className="math">{"\\(a, b\\)"}</span> لتكون <span className="math">{"\\(w_n = a u_n + b v_n\\)"}</span> ثابتة</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تعيين قيم المعاملات التي تجعل تركيباً خطياً لمتتاليتين متتاليةً ثابتة.
                </div>
                <div className="right-col">
                    الهدف: إيجاد قيم <span className="math">{"\\(a\\)"}</span> و <span className="math">{"\\(b\\)"}</span> التي تجعل المتتالية <span className="math">{"\\(w_n = a u_n + b v_n\\)"}</span> ثابتة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أعوض قوانين التراجع للمتتاليتين في عبارة الحد الموالي للمزيج الخطي. أرتب وأجمع المعاملات المطلوبة للمطابقة مع المزيج الأصلي لتشكيل جملة معادلات تحدد قيم الثوابت المرجوة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> المطابقة تهدف لإيجاد شرط التكافؤ بين معاملات الحدين لضمان بقاء قيمة المتتالية دون تغيير.
                    </div>
                </div>
                <div className="right-col">
                    نحسب الحد الموالي للمزيج الخطي: <span className="math">{"\\(w_{n+1} = a u_{n+1} + b v_{n+1}\\)"}</span>.<br />
                    نعوض العبارات التراجعية للمتتاليتين:<br />
                    <span className="math">{"\\(w_{n+1} = a \\left( \\frac{u_n + v_n}{2} \\right) + b \\left( \\frac{u_n + 2v_n}{3} \\right) = \\left( \\frac{a}{2} + \\frac{b}{3} \\right) u_n + \\left( \\frac{a}{2} + \\frac{2b}{3} \\right) v_n\\)"}</span>.<br />
                    نريد أن يكون <span className="math">{"\\(w_{n+1} = w_n\\)"}</span>، أي بمطابقة معاملات <span className="math">{"\\(u_n\\)"}</span> و <span className="math">{"\\(v_n\\)"}</span> مع <span className="math">{"\\(a u_n + b v_n\\)"}</span>:<br />
                    <span className="math">{"\\(\\begin{cases} \\frac{a}{2} + \\frac{b}{3} = a \\\\ \\frac{a}{2} + \\frac{2b}{3} = b \\end{cases} \\implies \\frac{b}{3} = \\frac{a}{2} \\implies 2b = 3a\\)"}</span>.<br />
                    نختار أبسط الحلول الصحيحة: <span className="math">{"\\(a = 2\\)"}</span> و <span className="math">{"\\(b = 3\\)"}</span>. وعليه تصبح المتتالية الثابتة: <span className="math">{"\\(w_n = 2 u_n + 3 v_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    أتحقق من ثبوت المتتالية بحساب حدها الأول وقيمة ثبوتها الكلية.
                </div>
                <div className="right-col">
                    <strong>التحقق:</strong> مع <span className="math">{"\\(a=2, b=3\\)"}</span>:
                    <div className="math-block">{"\\[ w_{n+1} = 2\\cdot\\frac{u_n+v_n}{2} + 3\\cdot\\frac{u_n+2v_n}{3} = 2u_n+3v_n = w_n \\checkmark \\]"}</div>
                    <strong>قيمة الثابت:</strong> <span className="math">{"\\(w_0 = 2u_0 + 3v_0 = 2(1) + 3(2) = 8\\)"}</span>.<br />
                    إذن المتتالية ثابتة وقيمتها 8 لجميع قيم <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>
        </>
    );
};

export default Solution_DirectQuestions_Sequences;
