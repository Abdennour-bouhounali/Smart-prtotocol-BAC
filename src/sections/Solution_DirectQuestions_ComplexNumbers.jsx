import React from 'react';

const Solution_DirectQuestions_ComplexNumbers = () => {
    return (
        <>
            <div id="toc-sol-direct-complex" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - الأعداد المركبة</div>
            {/* ============================================================
                EXERCISE 1: Algebraic and Exponential Forms
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — الأشكال الجبرية والأسية</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Math Translate)</span><br />
                    الشكل الأسي يعني من الشكل : <span className="math">{"\\(re^{i\\theta}\\)"}</span>
                    <br />
                    الشكل الجبري يعني من الشكل : <span className="math">{"\\(x+iy\\)"}</span>
                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    تحويل عدد مركب من الشكل الأسي أو المربع إلى الشكلين الجبري والأسي للتبسيط.
                </div>
                <div className="right-col">
                    الهدف: إيجاد الأعداد <span className="math">{"\\(x_1,y_1,x_2,y_2,x_3,y_3\\)"}</span> و <span className="math">{"\\(r_1,r_2,r_3,θ_1,θ_2,θ_3\\)"}</span>  لـ <span className="math">{"\\(z_3 , z_2 , z_1\\)"}</span>.
                    حيث
                    <span className="math">{"\\(z_1=x_1+iy_1\\)"}</span>
                    <span className="math">{"\\( , \\)"}</span>
                    <span className="math">{"\\(z_2=x_2+iy_2\\)"}</span>
                    <span className="math">{"\\( , \\)"}</span>
                    <span className="math">{"\\(z_3=x_3+iy_3\\)"}</span>

                    و

                    <span className="math">{"\\(z_1=r_1e^{i\\theta_1}\\)"}</span>
                    <span className="math">{"\\( , \\)"}</span>
                    <span className="math">{"\\(z_2=r_2e^{i\\theta_2}\\)"}</span>
                    <span className="math">{"\\( , \\)"}</span>
                    <span className="math">{"\\(z_3=r_3e^{i\\theta_3}\\)"}</span>

                </div>
            </div>
            {/* Q1.1 */}
            <div className="sub-question">1) كتابة <span className="math">{"\\(z_1 = (1+i)^2\\)"}</span> على الشكلين الجبري والأسي</div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    الشكل الجبري يتطلب النشر والتخلص من الأقواس. الشكل الأسي يتطلب استخراج الطويلة والعمدة.
                    <br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أنشر المتطابقة الشهيرة واستبدل <span className="math">{"\\(i^2\\)"}</span> بـ <span className="math">{"\\(-1\\)"}</span> لأصل إلى الجزء الحقيقي والتخيلي.
                    </div>
                    أحسب: <span className="math">{"\\(1 + 2i + i^2 = 1 + 2i - 1 = 2i\\)"}</span>.<br />
                    بما أنه تخيجي صرف موجب، طويلته هي المعامل وعمدته <span className="math">{"\\(\\pi/2\\)"}</span>.
                </div>
                <div className="right-col">
                    ننشر العبارة الجبرية ثم نحدد المعالم الهندسية للعدد.
                    <br />
                    <strong>الشكل الجبري:</strong> ننشر المتطابقة الشهيرة:
                    <div className="math-block">{"\\[ z_1 = 1^2 + 2(1)(i) + i^2 = 1 + 2i - 1 = 2i \\]"}</div>
                    <strong>الشكل الأسي:</strong> العدد <span className="math">{"\\(2i\\)"}</span> هو عدد تخيلي صرف موجب.<br />
                    طويلته <span className="math">{"\\(r = 2\\)"}</span> وعمدته <span className="math">{"\\(\\theta = \\frac{\\pi}{2}\\)"}</span>.<br />
                    <div className="math-block">{"\\[ z_1 = 2 e^{i\\frac{\\pi}{2}} \\]"}</div>
                </div>
            </div>

            {/* Q1.2 */}
            <div className="sub-question">2) كتابة <span className="math">{"\\(z_2 = \\frac{1-i}{1+i}\\)"}</span> على الشكلين الجبري والأسي</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أضرب في <span className="math">{"\\((1-i)\\)"}</span> لتبسيط المقام إلى عدد حقيقي حقيقي (مجموع المربعات).
                    </div>
                    العدد <span className="math">{"\\(-i\\)"}</span> هو تخيلي صرف سالب، إذن يقع في الجزء السفلي من محور التراتيب. الزاوية حتماً <span className="math">{"\\(-\\pi/2\\)"}</span>.

                </div>
                <div className="right-col">
                    <strong>الشكل الجبري:</strong>
                    <div className="math-block">{"\\[ z_2 = \\frac{(1-i)(1-i)}{(1+i)(1-i)} = \\frac{(1-i)^2}{1^2 + 1^2} \\]"}</div>
                    <div className="math-block">{"\\[ z_2 = \\frac{1 - 2i - 1}{2} = \\frac{-2i}{2} = -i \\]"}</div>

                    <strong>الشكل الأسي:</strong> العدد <span className="math">{"\\(-i\\)"}</span> تخيلي صرف سالب. طويلته <span className="math">{"\\(1\\)"}</span> وعمدته <span className="math">{"\\(-\\frac{\\pi}{2}\\)"}</span>.
                    <div className="math-block">{"\\[ z_2 = e^{-i\\frac{\\pi}{2}} \\]"}</div>

                </div>
            </div>


            {/* Q1.3 */}
            <div className="sub-question">3) كتابة <span className="math">{"\\(z_3 = e^{i\\pi/3} \\cdot e^{i\\pi/6}\\)"}</span> على الشكلين الجبري والأسي</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    هنا لدي جداء لعددين بالشكل الأسي. الخواص الأسية تخبرني أن الجداء يؤول إلى جمع الأسس المرفقة بالزوايا.
                    <br />
                    أجمع: <span className="math">{"\\(\\pi/3 + \\pi/6 = 3\\pi/6 = \\pi/2\\)"}</span>.<br />
                    إذن <span className="math">{"\\(z_3 = e^{i\\pi/2}\\)"}</span>. وهذا العدد معروف، هو <span className="math">{"\\(i\\)"}</span>.
                </div>
                <div className="right-col">
                    نستعمل خاصية جمع الأسس لإيجاد الشكل الأسي المباشر، ثم نستنتج الشكل الجبري.
                    <br />
                    <strong>الشكل الأسي:</strong>
                    <div className="math-block">{"\\[ z_3 = e^{i\\left(\\frac{\\pi}{3} + \\frac{\\pi}{6}\\right)} = e^{i\\frac{3\\pi}{6}} = e^{i\\frac{\\pi}{2}} \\]"}</div>
                    <strong>الشكل الجبري:</strong> <span className="math">{"\\(z_3 = \\cos(\\pi/2) + i\\sin(\\pi/2) = i\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 2: Equations in C
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — حل المعادلات في مجموعة الأعداد المركبة</div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    حل تعني إيجاد القيم التي تحقق المعادلة .                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد جذور المعادلة من الدرجة الثانية في مجموعة الأعداد المركبة.
                </div>
                <div className="right-col">
                    حل المعادلة باستعمال المميز <span className="math">{"\\(\\Delta\\)"}</span>.
                </div>
            </div>
            {/* Q2.1 */}
            <div className="sub-question">1) حل <span className="math">{"\\(z^2 - 2z + 2 = 0\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    إيجاد حلول معادلة من الدرجة الثانية يستلزم حساب المميز أولا .
                </div>
                <div className="right-col">
                    المميز: <span className="math">{"\\(\\Delta = (-2)^2 - 4(1)(2) = 4 - 8 = -4 = (2i)^2\\)"}</span><br />
                    <div className="math-block">{"\\[ z_1 = \\frac{2 - 2i}{2} = 1 - i \\quad ; \\quad z_2 = \\frac{2 + 2i}{2} = 1 + i \\]"}</div>
                </div>
            </div>

            {/* Q2.2 */}
            <div className="sub-question">2) حل <span className="math">{"\\(z^2 + 4 = 0\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <span className="math">{"\\(z^2 = -4\\)"}</span>. وبما أن <span className="math">{"\\(-4 = (2i)^2\\)"}</span>، إذن الحلول هي <span className="math">{"\\(\\pm 2i\\)"}</span>.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ z^2 = -4 \\implies z^2 = (2i)^2 \\]"}</div>
                    <strong>مجموعة الحلول:</strong> <span className="math">{"\\(S = \\{-2i,\\, 2i\\}\\)"}</span>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 3: Geometric Transformations
            ============================================================ */}
            <div className="question-header no-break">التمرين 3 — التحويلات النقطية</div>

            <div className="strategy-box">
                <div className="strategy-box-title">المفتاح المنهجي للتحويلات</div>
                التحويل من الشكل <span className="math">{"\\(z' = az + b\\)"}</span> يتم تحديده كلياً بقيمة <span className="math">{"\\(a\\)"}</span>:
                <br />- إذا كان <span className="math">{"\\(a = 1\\)"}</span>: انسحاب شعاعه لاحقته <span className="math">{"\\(b\\)"}</span>.
                <br />- إذا كان <span className="math">{"\\(a \\in \\mathbb{R}^* - \\{1\\}\\)"}</span>: تحاكي نسبته <span className="math">{"\\(a\\)"}</span> ومركزه <span className="math">{"\\(\\omega = \\frac{b}{1-a}\\)"}</span>.
                <br />- إذا كان <span className="math">{"\\(a \\in \\mathbb{C}\\)"}</span> حيث <span className="math">{"\\(|a|=1\\)"}</span>: دوران زاويته <span className="math">{"\\(\\arg(a)\\)"}</span> ومركزه <span className="math">{"\\(\\omega\\)"}</span>.
            </div>

            {/* Q3.1 */}
            <div className="sub-question">1) طبيعة وعناصر التحويل: <span className="math">{"\\(z' = z + 1 - i\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أطابق المعادلة مع الشكل العام <span className="math">{"\\(z'=az+b\\)"}</span>. هنا ألاحظ بوضوح أن <span className="math">{"\\(a=1\\)"}</span> و <span className="math">{"\\(b = 1-i\\)"}</span>.
                    <br />
                    حسب القاعدة المنهجية، <span className="math">{"\\(a=1\\)"}</span> يعني أن التحويل يحافظ على المتجهات كما هي ويضيف لها شعاعاً ثابتاً، وهو تعريف الانسحاب.

                </div>
                <div className="right-col">
                    بالمطابقة، <span className="math">{"\\(a = 1\\)"}</span>.
                    التحويل هو <strong>انسحاب</strong> شعاعه <span className="math">{"\\(\\vec{u}\\)"}</span> ذو اللاحقة <span className="math">{"\\(b = 1 - i\\)"}</span>.
                </div>
            </div>


            {/* Q3.2 */}
            <div className="sub-question">2) طبيعة وعناصر التحويل: <span className="math">{"\\(z' = 2z + i\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أطابق المعادلة لأجد <span className="math">{"\\(a=2\\)"}</span>. وهو عدد حقيقي غير معدوم ولا يساوي 1، مما يعني تمدداً مضاعفاً للمسافات مع المحافظة على الاتجاه: تحاكي.
                    <br />
                    أبحث عن نقطة الصمود (المركز) بإيجاد حل المعادلة <span className="math">{"\\(\\omega = 2\\omega + i\\)"}</span> أو تطبيق القانون.
                </div>
                <div className="right-col">
                    بالمطابقة، <span className="math">{"\\(a = 2 \\in \\mathbb{R}^* - \\{1\\}\\)"}</span>. إذن التحويل <strong>تحاكي</strong> نسبته <span className="math">{"\\(2\\)"}</span>.
                    <br />
                    مركزه <span className="math">{"\\(\\Omega\\)"}</span> ذو اللاحقة: <span className="math">{"\\(\\omega = \\frac{b}{1-a} = \\frac{i}{1-2} = -i\\)"}</span>.
                </div>
            </div>

            {/* Q3.3 */}
            <div className="sub-question">3) طبيعة وعناصر التحويل: <span className="math">{"\\(z' = iz + 1\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    بالمطابقة <span className="math">{"\\(a=i\\)"}</span>. الطويلة هي 1، مما يعني أن المسافات محفوظة ولكن هناك دوران زاويته هي عمدة <span className="math">{"\\(i\\)"}</span>.
                    <br />
                    أحسب المركز: <span className="math">{"\\(\\omega = \\frac{1}{1-i}\\)"}</span>. أضرب في المرافق.
                </div>
                <div className="right-col">
                    بالمطابقة، <span className="math">{"\\(a = i\\)"}</span>. بما أن <span className="math">{"\\(|a| = 1\\)"}</span>، التحويل <strong>دوران</strong>.<br />
                    زاويته <span className="math">{"\\(\\theta = \\arg(i) = \\frac{\\pi}{2}\\)"}</span>.
                    <br />
                    المركز <span className="math">{"\\(\\Omega\\)"}</span> لاحقته: <span className="math">{"\\(\\omega = \\frac{1}{1-i} = \\frac{1(1+i)}{1^2+1^2} = \\frac{1}{2} + \\frac{1}{2}i\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                EXERCISE 4: Set of Points
            ============================================================ */}
            <div className="question-header no-break">التمرين 4 — مجموعة النقط</div>

            {/* Q4.1 */}
            <div className="sub-question">1) مجموعة النقط: <span className="math">{"\\(|z - 1 + i| = 2\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            {/* Q4.1 */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    أتعرف على الشكل القياسي
                    <span className="math">{"\\(|z-z_A|\\)"}</span>.
                    الطويلة تمثل مسافة بين نقطة متحركة ونقطة ثابتة.
                    لذلك أول خطوة هي تحديد النقطة الثابتة.
                </div>
                <div className="right-col">
                    <span className="math">{"\\(|z-(1-i)|=2\\)"}</span>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    المطلوب هو التعرف على الشكل الهندسي الذي تمثله جميع النقط التي تحقق هذه المسافة.
                </div>
                <div className="right-col">
                    نريد تحديد مجموعة النقط المعرفة بهذه العلاقة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    بعد تحديد النقطة الثابتة، ألاحظ أن المسافة ثابتة وتساوي 2.
                    وأتذكر أن جميع النقط التي تبعد مسافة ثابتة عن نقطة معلومة تشكل دائرة.
                </div>
                <div className="right-col">
                    نضع
                    <span className="math">{"\\(A(1,-1)\\)"}</span>.
                    <br />
                    <span className="math">{"\\(|z-z_A|=2\\iff AM=2\\)"}</span>.
                    <br />
                    مجموعة النقط دائرة مركزها
                    <span className="math">{"\\(A\\)"}</span>
                    ونصف قطرها
                    <span className="math">{"\\(2\\)"}</span>.
                </div>
            </div>

            {/* Q4.2 */}
            <div className="sub-question">2) مجموعة النقط: <span className="math">{"\\(|z - i| = |z + 1|\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    أتعرف على الشكل
                    <span className="math">{"\\(|z-z_A|=|z-z_B|\\)"}</span>.
                    تساوي الطويلتين يعني أن النقطة المتحركة تبقى على نفس البعد من نقطتين ثابتتين.
                </div>
                <div className="right-col">
                    <span className="math">{"\\(|z-i|=|z-(-1)|\\)"}</span>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    أريد تحديد الشكل الهندسي الذي تمثله جميع النقط المتساوية البعد عن هاتين النقطتين.
                </div>
                <div className="right-col">
                    نبحث عن مجموعة النقط التي تحقق
                    <span className="math">{"\\(AM=BM\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    أتذكر خاصية هندسية أساسية: جميع النقط المتساوية البعد عن نقطتين ثابتتين تنتمي إلى محور القطعة الواصلة بينهما.
                </div>
                <div className="right-col">
                    نضع
                    <span className="math">{"\\(A(z_A=i)\\)"}</span>
                    و
                    <span className="math">{"\\(B(z_B=-1)\\)"}</span>.
                    <br />
                    <span className="math">{"\\(|z-i|=|z+1|\\iff AM=BM\\)"}</span>.
                    <br />
                    إذن مجموعة النقط هي محور القطعة
                    <span className="math">{"\\([AB]\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    النتيجة منسجمة مع الخاصية لأن كل نقطة من محور القطعة تكون متساوية البعد عن طرفيها.
                </div>
                <div className="right-col">
                    ✓ مجموعة النقط هي محور القطعة
                    <span className="math">{"\\([AB]\\)"}</span>.
                </div>
            </div>


        </>
    );
};

export default Solution_DirectQuestions_ComplexNumbers;
