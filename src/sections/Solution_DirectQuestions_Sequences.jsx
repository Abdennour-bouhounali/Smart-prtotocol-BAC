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
                    إثبات صحة متباينة تعتمد على عدد طبيعي <span className="math">{"\\(n\\)"}</span>، مما يتطلب البرهان بالتراجع.
                </div>
                <div className="right-col">
                    الهدف: نبرهن بالتراجع على صحة الخاصية <span className="math">{"\\(P(n): 0 < u_n < 1\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نربط الانتقال من حد إلى آخر باستخدام الدالة المرفقة ورتابتها للحفاظ على اتجاه الحصر.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أتحقق من صحة الحد الابتدائي (الأساس)، ثم أفرض صحة المتباينة للحد العام وأبرهنها للحد الموالي بتوظيف تزايد الدالة المرفقة.
                    </div>
                </div>
                <div className="right-col">
                    نعتبر الدالة المرفقة <span className="math">{"\\(f(x) = \\frac{2x}{x+1}\\)"}</span> المعرفة على <span className="math">{"\\([0, 1]\\)"}</span>.<br />
                    <strong>1. الأساس:</strong> من أجل <span className="math">{"\\(n=0\\)"}</span>، <span className="math">{"\\(u_0 = 1/2\\)"}</span> و <span className="math">{"\\(0 < 1/2 < 1\\)"}</span> إذن <span className="math">{"\\(P(0)\\)"}</span> محققة.<br />
                    <strong>2. الفرضية والبرهان:</strong> نفرض أن <span className="math">{"\\(0 < u_n < 1\\)"}</span> ونبرهن أن <span className="math">{"\\(0 < u_{n+1} < 1\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(f'(x) = \\frac{2}{(x+1)^2} > 0\\)"}</span>، فالدالة متزايدة تماماً.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> إدخال الدالة المتزايدة على الحصر أوصلنا للنتيجة بدقة متناهية.
                    </div>
                    لدينا <span className="math">{"\\(0 < u_n < 1\\)"}</span> <span className="math">{"\\(\\implies f(0) < f(u_n) < f(1)\\)"}</span>.
                </div>
                <div className="right-col">
                    بإدخال <span className="math">{"\\(f\\)"}</span> على الفرضية نجد: <span className="math">{"\\(0 < u_n < 1 \\implies f(0) < f(u_n) < f(1)\\)"}</span>.<br />
                    ومنه <span className="math">{"\\(0 < u_{n+1} < 1\\)"}</span>. إذن الخاصية صحيحة من أجل كل <span className="math">{"\\(n\\)"}</span>.
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
                    إثبات خاصيتين (الحد الأعلى والتزايد) في خطوة واحدة بتراجع مزدوج.
                </div>
                <div className="right-col">
                    الهدف: نبرهن بالتراجع الخاصية <span className="math">{"\\(P(n): u_{n} < u_{n+1} < 2\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط دراسة الرتابة والحد الأعلى معاً بالتراجع المزدوج باستخدام تزايد دالة الجذر لبناء متباينة الجيل التالي.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> بدلاً من برهان كل خاصية على حدة، سأقوم بجمع الخاصيتين في متباينة واحدة مركبة.
                    </div>
                </div>
                <div className="right-col">
                    <strong>الأساس:</strong> <span className="math">{"\\(u_0=1\\)"}</span> و <span className="math">{"\\(u_1=\\sqrt{3}\\)"}</span>. إذن <span className="math">{"\\(u_0 < u_1 < 2\\)"}</span> (محققة).<br />
                    <strong>الفرضية:</strong> نفرض <span className="math">{"\\(u_n < u_{n+1} < 2\\)"}</span> ونبرهن <span className="math">{"\\(u_{n+1} < u_{n+2} < 2\\)"}</span>.<br />
                    نضيف 2: <span className="math">{"\\(u_n+2 < u_{n+1}+2 < 4\\)"}</span>.<br />
                    بإدخال دالة الجذر: <span className="math">{"\\(\\sqrt{u_n+2} < \\sqrt{u_{n+1}+2} < \\sqrt{4}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> الجذر يحافظ على المتباينة ونصل بدقة للمطلوب.
                    </div>
                </div>
                <div className="right-col">
                    ومنه <span className="math">{"\\(u_{n+1} < u_{n+2} < 2\\)"}</span>. محققة من أجل كل <span className="math">{"\\(n\\)"}</span>.
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
                    استعمال العلاقة التراجعية الأولى المعطاة لتوليد حصر كلي للحد العام بدلالة <span className="math">{"\\(n\\)"}</span>.
                </div>
                <div className="right-col">
                    نبرهن بالتراجع أن <span className="math">{"\\(0 < u_n \\le (\\frac{3}{4})^n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط فرضية التراجع بالمتراجحة المعطاة للانتقال خطوة بخطوة إلى الرتبة الموالية عبر الضرب والتعدي.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أفرض صحة الحصر للحد الحالي، وأستعمل المتراجحة المعطاة كجسر عبور للوصول إلى الحد الموالي.
                    </div>
                </div>
                <div className="right-col">
                    الأساس: <span className="math">{"\\(n=0\\)"}</span>، <span className="math">{"\\(u_0 = 1 \\le 1\\)"}</span> محققة.<br />
                    نفرض <span className="math">{"\\(0 < u_n \\le (\\frac{3}{4})^n\\)"}</span>.<br />
                    من المعطيات نعلم أن <span className="math">{"\\(u_{n+1} \\le \\frac{3}{4} u_n\\)"}</span>.<br />
                    ومنه <span className="math">{"\\(u_{n+1} \\le \\frac{3}{4} (\\frac{3}{4})^n = (\\frac{3}{4})^{n+1}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    خاصية التعدي للمتباينة أثبتت المطلوب. وبما أن المتتالية موجبة، فالصفر من اليسار ثابت.
                </div>
                <div className="right-col">
                    بالتعدي والمحافظة على الإيجابية، المتباينة محققة لكل <span className="math">{"\\(n\\)"}</span>.
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
                    تحديد إشارة الفرق <span className="math">{"\\(u_{n+1} - u_n\\)"}</span> لاستنتاج الرتابة.
                </div>
                <div className="right-col">
                    الهدف: دراسة إشارة الفرق.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتتالية بإشارة البسط والمقام لتحديد إشارة الفرق الإجمالية ودراسة رتابة المتتالية.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أدرس إشارة كثيرة الحدود في البسط والمقام وأتقاطع مع مجال المتتالية لاستنتاج الإشارة.
                    </div>
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\(0 < u_n < 2\\)"}</span>، فإن المقام <span className="math">{"\\(u_n + 3 > 0\\)"}</span>. إشارة الفرق تتبع إشارة البسط.<br />
                    ندرس إشارة البسط <span className="math">{"\\(-x^2+x+2\\)"}</span>: الجذور هي <span className="math">{"\\(-1\\)"}</span> و <span className="math">{"\\(2\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(u_n \\in ]0, 2[ \\subset ]-1, 2[\\)"}</span>، فإن البسط <span className="math">{"\\(-u_n^2+u_n+2 > 0\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    الفرق موجب تماماً، إذن المتتالية متزايدة تماماً وهو متناسق مع الحصر.
                </div>
                <div className="right-col">
                    ومنه <span className="math">{"\\(u_{n+1} - u_n > 0\\)"}</span>. <strong>المتتالية متزايدة تماماً.</strong>
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
                    حساب النهاية بالاستعانة بمتباينة تم برهنتها مسبقاً.
                </div>
                <div className="right-col">
                    الهدف: حساب النهاية عبر مبرهنة الحصر (الدركيين).
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    وجود حصر للمتتالية بين قيمتين معلومتي النهاية يترجم تلقائياً إلى تطبيق مبرهنة الحصر (Gendarme).
                </div>
                <div className="right-col">
                    نطبق مبرهنة الحصر بما أن الحد العام محصور بين متتاليتين شهيرتين.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتتالية بحساب نهايات الأطراف وتطبيق مبرهنة الدركيين.
                </div>
                <div className="right-col">
                    لدينا <span className="math">{"\\(\\lim 0 = 0\\)"}</span> و <span className="math">{"\\(\\lim \\left(\\frac{3}{4}\\right)^n = 0\\)"}</span> (لأن أساس المتتالية الهندسية يقع بين <span className="math">{"\\(-1\\)"}</span> و <span className="math">{"\\(1\\)"}</span>).
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    كلا الطرفين يؤول للصفر، فالنهاية محصورة في الصفر.
                </div>
                <div className="right-col">
                    حسب مبرهنة الحصر: <div className="math-block">{"\\[ \\lim_{n \\to +\\infty} u_n = 0 \\]"}</div>
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
                    إيجاد قيمة الثابت <span className="math">{"\\(\\alpha\\)"}</span> التي تجعل النسبة <span className="math">{"\\(v_{n+1} / v_n\\)"}</span> ثابتة.
                </div>
                <div className="right-col">
                    الهدف: البحث عن <span className="math">{"\\(\\alpha\\)"}</span> بحيث <span className="math">{"\\(v_{n+1} = q \\cdot v_n\\)"}</span>.
                </div>
            </div>
            {/* Step: Compute v_{n+1} */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أعوض عبارة المتتالية التراجعية في المتتالية الجديدة وأبسط الكسر المركب لتجهيزها للمطابقة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أبدأ بحساب العبارة عند الرتبة الموالية، وأوحد المقامات، تمهيداً للبحث عن الشرط الذي يجعل النسبة ثابتة.
                    </div>
                </div>
                <div className="right-col">
                    نحسب <span className="math">{"\\(v_{n+1}\\)"}</span>:
                    <div className="math-block">{"\\[ v_{n+1} = \\frac{u_{n+1} - \\alpha}{u_{n+1} + 3} = \\frac{\\dfrac{2u_n+3}{u_n+4} - \\alpha}{\\dfrac{2u_n+3}{u_n+4} + 3} \\]"}</div>
                    نضرب البسط والمقام في <span className="math">{"\\((u_n+4)\\)"}</span>:
                    <div className="math-block">{"\\[ \\begin{aligned} v_{n+1} &= \\frac{(2u_n+3) - \\alpha(u_n+4)}{(2u_n+3) + 3(u_n+4)} \\\\[6pt] &= \\frac{(2-\\alpha)u_n+(3-4\\alpha)}{5u_n+15} \\end{aligned} \\]"}</div>
                    نستخرج العامل <span className="math">{"\\(5\\)"}</span> من المقام:
                    <div className="math-block">{"\\[ v_{n+1} = \\frac{(2-\\alpha)u_n+(3-4\\alpha)}{5(u_n+3)} \\]"}</div>
                </div>
            </div>

            {/* Method 1: المطابقة */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label relate" style={{ backgroundColor: "#0f766e" }}>⚙ الطريقة 1 — المطابقة</span><br />
                    لكي يكون <span className="math">{"\\(v_{n+1} = q\\,v_n\\)"}</span>، أطابق معاملات البسط مع <span className="math">{"\\(5q(u_n - \\alpha)\\)"}</span> وأستخرج الشرط على <span className="math">{"\\(\\alpha\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>الطريقة 1: المطابقة (Pattern Matching)</strong><br />
                    نريد أن يكون:
                    <div className="math-block">{"\\[ \\frac{(2-\\alpha)u_n+(3-4\\alpha)}{5(u_n+3)} = q \\cdot \\frac{u_n - \\alpha}{u_n+3} \\]"}</div>
                    إذن البسط يجب أن يساوي <span className="math">{"\\(5q(u_n - \\alpha)\\)"}</span>. بمطابقة المعاملات:
                    <div className="math-block">{"\\[ \\begin{cases} 2 - \\alpha = 5q \\\\ 3 - 4\\alpha = -5q\\alpha \\end{cases} \\]"}</div>
                    من المعادلة الأولى <span className="math">{"\\(5q = 2-\\alpha\\)"}</span>، نعوض في الثانية:
                    <div className="math-block">{"\\[ 3 - 4\\alpha = -\\alpha(2-\\alpha) \\implies \\alpha^2 + 2\\alpha - 3 = 0 \\]"}</div>
                    <div className="math-block">{"\\[ (\\alpha+3)(\\alpha-1) = 0 \\implies \\alpha = 1 \\text{ أو } \\alpha = -3 \\]"}</div>
                </div>
            </div>

            {/* Method 2: Fixed Point */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label relate" style={{ backgroundColor: "#7c3aed" }}>⚙ الطريقة 2 — النقطة الصامدة</span><br />
                    نحل مباشرة <span className="math">{"\\(\\alpha = f(\\alpha)\\)"}</span> دون الحاجة لتوحيد المعاملات.
                </div>
                <div className="right-col">
                    <strong>الطريقة 2: النقطة الصامدة <span className="math">{"\\(\\alpha = f(\\alpha)\\)"}</span></strong><br />
                    الدالة المرفقة هي <span className="math">{"\\(f(x) = \\dfrac{2x+3}{x+4}\\)"}</span>. نحل <span className="math">{"\\(\\alpha = f(\\alpha)\\)"}</span>:
                    <div className="math-block">{"\\[ \\alpha = \\frac{2\\alpha+3}{\\alpha+4} \\implies \\alpha(\\alpha+4) = 2\\alpha+3 \\]"}</div>
                    <div className="math-block">{"\\[ \\alpha^2 + 2\\alpha - 3 = 0 \\implies (\\alpha+3)(\\alpha-1) = 0 \\]"}</div>
                    نجد نفس الجذرين: <span className="math">{"\\(\\alpha = 1\\)"}</span> أو <span className="math">{"\\(\\alpha = -3\\)"}</span>.
                </div>
            </div>

            {/* Elimination and Conclusion */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <span className="math">{"\\(\\alpha = -3\\)"}</span> تجعل مقام <span className="math">{"\\(v_n = \\frac{u_n+3}{u_n+3}\\)"}</span> صفراً عند <span className="math">{"\\(u_n = -3\\)"}</span>، فهي مرفوضة. <strong>فقط <span className="math">{"\\(\\alpha=1\\)"}</span> صحيحة.</strong>
                </div>
                <div className="right-col">
                    <strong>إقصاء <span className="math">{"\\(\\alpha = -3\\)"}</span>:</strong> المقام في <span className="math">{"\\(v_n\\)"}</span> هو <span className="math">{"\\((u_n+3)\\)"}</span>، فلو <span className="math">{"\\(\\alpha=-3\\)"}</span> يصبح المقام صفراً وتنعدم صحة التعريف. <strong>إذن <span className="math">{"\\(\\alpha = 1\\)"}</span></strong>.<br /><br />
                    <strong>الأساس:</strong> من <span className="math">{"\\(5q = 2-\\alpha = 2-1 = 1\\)"}</span>:
                    <div className="math-block">{"\\[ \\boxed{\\alpha = 1 \\;\\text{و}\\; q = \\frac{1}{5}} \\]"}</div>
                    <strong>التحقق المباشر:</strong>
                    <div className="math-block">{"\\[ \\begin{aligned} v_{n+1} &= \\frac{(2-1)u_n+(3-4)}{5(u_n+3)} = \\frac{u_n-1}{5(u_n+3)} \\\\[4pt] &= \\frac{1}{5}\\,v_n \\checkmark \\end{aligned} \\]"}</div>
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
                    التطبيق المباشر لقانون مجموع حدود متعاقبة لمتتالية هندسية.
                </div>
                <div className="right-col">
                    نطبق قانون المجموع للمتتالية الهندسية.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحدد عناصر المتتالية الهندسية من حد أول وأساس وعدد الحدود لتطبيق قانون المجموع مباشرة.
                </div>
                <div className="right-col">
                    الحد الأول هو <span className="math">{"\\(v_0=3\\)"}</span>، الأساس <span className="math">{"\\(1/2\\)"}</span>، عدد الحدود <span className="math">{"\\(n+1\\)"}</span>.<br />
                    <div className="math-block">{"\\[ S_n = v_0 \\frac{1 - q^{n+1}}{1 - q} = 3 \\frac{1 - (1/2)^{n+1}}{1 - 1/2} \\]"}</div>
                    <div className="math-block">{"\\[ S_n = 6 \\left( 1 - \\left(\\frac{1}{2}\\right)^{n+1} \\right) \\]"}</div>
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    ضرب القوى ذات الأساس المشترك يترجم إلى جمع الأسس. الجداء يتحول إلى حساب مجموع في الأس!
                </div>
                <div className="right-col">
                    نجمع الأسس لتحويل الجداء إلى قوى مجموع.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أحسب مجموع حدود المتتالية الحسابية المتواجدة في الأس ثم أرفع الناتج كأساس للعدد المحدد.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب المجموع في الأس الذي يمثل مجموع متتالية حسابية، ثم أرفعه كأساس للعدد المطلق.
                    </div>
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ P_n = 2^{v_0 + v_1 + \\dots + v_n} \\]"}</div>
                    مجموع المتتالية الحسابية <span className="math">{"\\(v_n\\)"}</span>: <span className="math">{"\\(S'_n = \\frac{n+1}{2}(v_0 + v_n)\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(v_n = 1 + 2n\\)"}</span>، فإن <span className="math">{"\\(S'_n = \\frac{n+1}{2}(1 + 1 + 2n) = (n+1)^2\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    العملية سليمة. المجموع أس للعدد 2.
                </div>
                <div className="right-col">
                    إذن: <span className="math">{"\\(P_n = 2^{(n+1)^2}\\)"}</span>.
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
                    حساب المجموع باستغلال خواص اللوغاريتم للتحويل إلى مجاميع مألوفة.
                </div>
                <div className="right-col">
                    تبسيط المجموع اللوغاريتمي باستعمال المتتاليات المساعدة.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط لوغاريتم الحدود الهندسية بخصائص المتتالية الحسابية لتطبيق قانون مجموع حدود متتالية حسابية مباشرة.
                </div>
                <div className="right-col">
                    نضع <span className="math">{"\\(w_n = \\ln(v_n)\\)"}</span>. بما أن <span className="math">{"\\(v_n\\)"}</span> هندسية، فإن <span className="math">{"\\(w_n\\)"}</span> هي متتالية حسابية أساسها <span className="math">{"\\(\\ln(q)\\)"}</span>.<br />
                    <div className="math-block">{"\\[ \\begin{aligned} T_n &= \\frac{n+1}{2}(\\ln(v_0) + \\ln(v_n)) \\\\[4pt] &= \\frac{n+1}{2} \\ln(v_0 \\cdot v_n) \\end{aligned} \\]"}</div>
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    توحيد المقام داخل اللوغاريتم وتفكيكه يحوله إلى مجاميع متداخلة (تلسكوبية) يلغي بعضها بعضاً.
                </div>
                <div className="right-col">
                    نوحد المقامات داخل اللوغاريتم ونفككه.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط تبسيط ما داخل اللوغاريتم بتفكيكه إلى فرق بين حدود متتابعة لتشكيل مجموع تلسكوبي.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أكتب الحد العام بدلالة طرح حدين متعاقبين من متتالية جديدة، لكي تتساقط الحدود بالتناوب عند جمعها.
                    </div>
                </div>
                <div className="right-col">
                    نوحد المقامات داخل اللوغاريتم ونفككه:<br />
                    <div className="math-block">
                        {`
 \\[
 \\begin{alignedat}{2}
 \\hphantom{=\\ }&
 \\ln\\left(\\frac{(k+1)^2-1}{(k+1)^2}\\right)
 = \\ln\\left(\\frac{k(k+2)}{(k+1)^2}\\right)
 \\end{alignedat}
 \\]
 `}
                    </div>

                    <div className="math-block">
                        {`
 \\[
 \\begin{alignedat}{2}
 &= \\ln(k)-2\\ln(k+1)+\\ln(k+2)
 \\end{alignedat}
 \\]
 `}
                    </div>

                    <div className="math-block">
                        {`
 \\[
 \\begin{alignedat}{2}
 &= [\\ln(k)-\\ln(k+1)]
 -[\\ln(k+1)-\\ln(k+2)]
 \\end{alignedat}
 \\]
 `}
                    </div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    بتعويض الحدود من 1 إلى <span className="math">{"\\(n\\)"}</span>، يبقى الحد الأول فقط من القوس الأول والحد الأخير من القوس الأخير. النتيجة صحيحة ومذهلة.
                </div>
                <div className="right-col">
                    إذن <span className="math">{"\\(S_n = u_1 - u_{n+1} = \\ln\\left(\\frac{1}{2}\\right) - \\ln\\left(\\frac{n+1}{n+2}\\right)\\)"}</span>.
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
                    إيجاد علاقة تربط <span className="math">{"\\(I_{n+1}\\)"}</span> بـ <span className="math">{"\\(I_n\\)"}</span> ثم دراسة رتابة المتتالية التكاملية.
                </div>
                <div className="right-col">
                    الهدف: استعمال المكاملة بالتجزئة وحساب الفرق <span className="math">{"\\(I_{n+1} - I_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    وجود متتالية داخل تكامل على شكل جداء دالتين يترجم فوراً إلى استعمال <strong>المكاملة بالتجزئة</strong>.
                </div>
                <div className="right-col">
                    باستعمال المكاملة بالتجزئة لـ <span className="math">{"\\(I_{n+1} = \\int_0^1 x^{n+1} e^x dx\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أطبق طريقة المكاملة بالتجزئة باختيار الحدود المناسبة للاشتقاق والمكاملة لتوليد العلاقة التراجعية المطلوبة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أختار الحدود بشكل يقلل من درجة القوة بالاشتقاق، مما يولد الحد التراجعي السابق.
                    </div>
                </div>
                <div className="right-col">
                    نضع <span className="math">{"\\(u = x^{n+1} \\implies u' = (n+1)x^n\\)"}</span><br />
                    نضع <span className="math">{"\\(v' = e^x \\implies v = e^x\\)"}</span><br />
                    <div className="math-block">{"\\[ I_{n+1} = \\left[ x^{n+1}e^x \\right]_0^1 - (n+1) \\int_0^1 x^n e^x dx \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    العلاقة صحيحة ومطابقة. بالنسبة للتناقص، أدرس فرق التكاملات الذي يضم تحت تكامل واحد كمية سالبة.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ I_{n+1} = e - (n+1)I_n \\]"}</div>
                    لدراسة الرتابة: <span className="math">{"\\(I_{n+1} - I_n = \\int_0^1 x^n(x-1)e^x dx\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(x \\in [0, 1]\\)"}</span>، فإن <span className="math">{"\\(x-1 \\le 0\\)"}</span>. التكامل لدالة سالبة يكون سالباً. <strong>المتتالية متناقصة.</strong>
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
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط حصر المتغير المعطى بحصر الدالة التكاملية، ثم أدخل التكامل على الأطراف لحساب النهاية بمبرهنة الحصر.
                </div>
                <div className="right-col">
                    لدينا <span className="math">{"\\(0 \\le x \\le 1 \\implies 0 < e^x \\le e\\)"}</span>.<br />
                    بالضرب في <span className="math">{"\\(x^n \\ge 0\\)"}</span> نجد: <span className="math">{"\\(0 \\le x^n e^x \\le e x^n\\)"}</span>.<br />
                    نكامل الأطراف من 0 إلى 1:
                    <div className="math-block">{"\\[ 0 \\le I_n \\le e \\left[ \\frac{x^{n+1}}{n+1} \\right]_0^1 = \\frac{e}{n+1} \\]"}</div>
                    بمبرهنة الحصر: <span className="math">{"\\(\\lim_{n\\to+\\infty} I_n = 0\\)"}</span>.
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
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    التجاور يتطلب إثبات رتابتين متعاكستين بالإضافة إلى تقارب الفرق بينهما نحو الصفر.
                </div>
                <div className="right-col">
                    نثبت الرتابة المتعاكسة ونحسب نهاية الفرق.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط عبارة الفرق بخصائص المتتالية الفرقية الهندسية لإيجاد نهايتها وإثبات تجاور المتتاليتين.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أدرس المتتالية الفرقية وأثبت أنها هندسية متقاربة إلى الصفر لتأكيد شرط التجاور الأساسي.
                    </div>
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ v_{n+1} - u_{n+1} = \\frac{1}{6}(v_n - u_n) \\]"}</div>
                    المتتالية الفرقية هندسية أساسها <span className="math">{"\\(1/6 \\in ]-1, 1[\\)"}</span> فنهايتها 0.<br />
                    ومنه <span className="math">{"\\(\\lim (v_n - u_n) = 0\\)"}</span>. وبتحقيق الرتابة فهما متجاورتان.
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
                    تحديد المعاملات لجعل المجموع خطي للمتتاليتين يعطي متتالية ثابتة.
                </div>
                <div className="right-col">
                    الهدف: إيجاد الثوابت ليتحقق <span className="math">{"\\(w_{n+1} = w_n\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    أترجم شرط ثبات المتتالية بمساواة حدين متتاليين ومطابقة معاملات الحدود المتشابهة.
                </div>
                <div className="right-col">
                    نحسب <span className="math">{"\\(w_{n+1} = a\\,u_{n+1} + b\\,v_{n+1}\\)"}</span>:
                    <div className="math-block">{"\\[ w_{n+1} = a\\cdot\\frac{u_n+v_n}{2} + b\\cdot\\frac{u_n+2v_n}{3} \\]"}</div>
                    <div className="math-block">{"\\[ w_{n+1} = \\left(\\frac{a}{2}+\\frac{b}{3}\\right)u_n + \\left(\\frac{a}{2}+\\frac{2b}{3}\\right)v_n \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أربط معاملات العبارة الناتجة بالعبارة الأصلية لتشكيل جملة معادلات وتحديد قيم الثوابت الممكنة.
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 شرط الثبوت:</strong> مطابقة المعاملات تعطينا جملة معادلات تحدد النسبة الثابتة بين الثوابت المطلوبة.
                    </div>
                </div>
                <div className="right-col">
                    بمطابقة معاملات <span className="math">{"\\(u_n\\)"}</span> و<span className="math">{"\\(v_n\\)"}</span> مع <span className="math">{"\\(w_n = a u_n + b v_n\\)"}</span>:
                    <div className="math-block">{"\\[ \\begin{cases} \\dfrac{a}{2}+\\dfrac{b}{3} = a \\\\[6pt] \\dfrac{a}{2}+\\dfrac{2b}{3} = b \\end{cases} \\]"}</div>
                    من المعادلة (1): <span className="math">{"\\(\\dfrac{b}{3} = \\dfrac{a}{2} \\implies 2b = 3a\\)"}</span><br />
                    من المعادلة (2): <span className="math">{"\\(\\dfrac{a}{2} = \\dfrac{b}{3} \\implies 2b = 3a\\)"}</span> (نفس الشرط!)<br /><br />
                    الشرط الوحيد هو <span className="math">{"\\(2b = 3a\\)"}</span>. نختار أبسط الأعداد الصحيحة:
                    <div className="math-block">{"\\[ \\boxed{a = 2,\\quad b = 3} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    نحسب <span className="math">{"\\(w_0\\)"}</span> ونتحقق أن <span className="math">{"\\(w_{n+1} = w_n\\)"}</span> فعلاً.
                </div>
                <div className="right-col">
                    <strong>التحقق:</strong> مع <span className="math">{"\\(a=2, b=3\\)"}</span>:
                    <div className="math-block">{"\\[ w_{n+1} = 2\\cdot\\frac{u_n+v_n}{2} + 3\\cdot\\frac{u_n+2v_n}{3}. \\]"}</div>
                    <div className="math-block">{"\\[ = (u_n+v_n)+(u_n+2v_n) = 2u_n+3v_n = w_n \\checkmark \\]"}</div>

                    <strong>قيمة الثابت:</strong> <span className="math">{"\\(w_0 = 2u_0 + 3v_0 = 2(1)+3(2) = 8\\)"}</span>
                    <div className="math-block">{"\\[ \\forall n \\in \\mathbb{N},\\quad w_n = 2u_n + 3v_n = 8 \\]"}</div>
                </div>
            </div>



        </>
    );
};

export default Solution_DirectQuestions_Sequences;
