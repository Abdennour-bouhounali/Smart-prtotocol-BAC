import React from 'react';

const Solution_DirectQuestions_Probabilities = () => {
    return (
        <>
            <div id="toc-sol-direct-probabilities" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - الاحتمالات</div>


            {/* ============================================================
                EXERCISE 1: Counting
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — العد والاحتمالات البسيطة</div>

            <div className="sub-question">حساب احتمال الحصول على كرتين من نفس اللون</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    العبارة "في آن واحد" تترجم رياضياً إلى استخدام التوفيقات <span className="math">{"\\(C_n^p\\)"}</span>. العبارة "نفس اللون" تترجم إلى جمع حالات سحب لونين متطابقين (حمراوين أو خضراوين).
                </div>
                <div className="right-col">
                    السحب يتم في آن واحد، إذن نستخدم التوفيقات.<br />
                    <span className="math">{"\\(A = \\text{\\{حمراوين\\}} \\cup \\text{\\{خضراوين\\}}\\)"}</span>.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب احتمال حادثة تعتمد على سحب عشوائي بتطبيق قاعدة (الحالات الملائمة / الحالات الممكنة).
                </div>
                <div className="right-col">
                    الهدف: حساب احتمال الحادثة <span className="math">{"\\(A\\)"}</span>: "سحب كرتين من نفس اللون".
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    لدينا 8 كرات في المجموع: 5 حمراء و 3 خضراء. السحب هو لكرتين. الحالات الممكنة هي سحب 2 من 8.
                </div>
                <div className="right-col">
                    عدد الحالات الممكنة الإجمالية:
                    <div className="math-block">{"\\[ \\text{Card}(\\Omega) = C_8^2 = \\frac{8 \\times 7}{2} = 28 \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب عدد الحالات الملائمة (حالتين مستقلتين بينهما جمع) ثم أقسمها على عدد الحالات الممكنة.
                    </div>
                    حمراوين من أصل 5: <span className="math">{"\\(C_5^2 = 10\\)"}</span>.<br />
                    خضراوين من أصل 3: <span className="math">{"\\(C_3^2 = 3\\)"}</span>.<br />
                    المجموع 13. الاحتمال <span className="math">{"\\(13/28\\)"}</span>.
                </div>
                <div className="right-col">
                    عدد الحالات الملائمة:
                    <div className="math-block">{"\\[ \\text{Card}(A) = C_5^2 + C_3^2 \\]"}</div>
                    <div className="math-block">{"\\[ \\text{Card}(A) = 10 + 3 = 13 \\]"}</div>
                    احتمال الحادثة <span className="math">{"\\(A\\)"}</span> هو:
                    <div className="math-block">{"\\[ P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)} = \\frac{13}{28} \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> الاحتمال محصور بين 0 و 1 (حوالي 0.46) وهو منطقي.
                    </div>
                </div>
                <div className="right-col">
                    <strong>النتيجة النهائية مقبولة.</strong>
                </div>
            </div>

            {/* ============================================================
                EXERCISE 2: Random Variables
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — المتغير العشوائي والأمل الرياضياتي</div>

            <div className="sub-question">حساب الأمل الرياضياتي <span className="math">{"\\(E(X)\\)"}</span> والتباين <span className="math">{"\\(V(X)\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    حساب التباين يتميز بصيغتين، وأترجم هذه الحاجة المنهجية باختيار <strong>نظرية كونيغ</strong> لأنها تجنبنا الحسابات المعقدة للفروق المربعة.
                </div>
                <div className="right-col">
                    نستعمل القوانين المباشرة للمتوسط، ومبرهنة كونيغ للتباين.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    حساب المؤشرات الإحصائية لمتغير عشوائي معرف بقانون احتماله.
                </div>
                <div className="right-col">
                    الهدف: حساب <span className="math">{"\\(E(X)\\)"}</span> و <span className="math">{"\\(V(X)\\)"}</span> انطلاقاً من قانون الاحتمال المعطى.
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أضرب كل قيمة في احتمالها لحساب <span className="math">{"\\(E(X)\\)"}</span>، ثم أربع القيم وأضربها في الاحتمالات لحساب <span className="math">{"\\(E(X^2)\\)"}</span>.
                    </div>
                    الأمل الرياضياتي: <span className="math">{"\\(0 \\times 0.2 + 1 \\times 0.5 + 2 \\times 0.3 = 1.1\\)"}</span>.<br />
                    لحساب التباين: <span className="math">{"\\(E(X^2) = 0^2(0.2) + 1^2(0.5) + 2^2(0.3) = 1.7\\)"}</span>.<br />
                    ثم أطبق كونيغ: <span className="math">{"\\(1.7 - (1.1)^2 = 1.7 - 1.21 = 0.49\\)"}</span>.
                </div>
                <div className="right-col">
                    <strong>1) حساب الأمل الرياضياتي <span className="math">{"\\(E(X)\\)"}</span>:</strong>
                    <div className="math-block">{"\\[ E(X) = \\sum x_i P_i \\]"}</div>
                    <div className="math-block">{"\\[ E(X) = (0)(0.2) + (1)(0.5) + (2)(0.3) = 1.1 \\]"}</div>

                    <strong>2) حساب التباين <span className="math">{"\\(V(X)\\)"}</span>:</strong><br />
                    باستعمال مبرهنة كونيغ: <span className="math">{"\\(V(X) = E(X^2) - (E(X))^2\\)"}</span><br />
                    نحسب <span className="math">{"\\(E(X^2)\\)"}</span> أولاً:
                    <div className="math-block">{"\\[ E(X^2) = (0^2)(0.2) + (1^2)(0.5) + (2^2)(0.3) = 1.7 \\]"}</div>
                    الآن نحسب التباين:
                    <div className="math-block">{"\\[ V(X) = 1.7 - (1.1)^2 = 1.7 - 1.21 = 0.49 \\]"}</div>
                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> التباين موجب تماماً وهذا يؤكد صحة الحساب (لو كان سالباً لعرفت بوجود خطأ حتمي).
                    </div>
                </div>
                <div className="right-col">
                    <strong>النتيجة النهائية: <span className="math">{"\\(V(X) = 0.49\\)"}</span></strong>
                </div>
            </div>

        </>
    );
};

export default Solution_DirectQuestions_Probabilities;
