import React from 'react';

const Exercice1 = () => {
    return (
        <>
            <div id="toc-comprehensive" className="exercise-title">التمرين 1</div>

            <div className="exercise-statement_2">
                <strong>نص التمرين:</strong><br />
                لتكن <span className="math">{"\\(f\\)"}</span> الدالة المعرفة على المجال <span className="math">{"\\(I=[1;2]\\)"}</span>
                بالعبارة:
                <span className="math">{"\\(f(x)=\\dfrac{x+2}{-x+4}\\)"}</span>
                <br /><br />
                <strong>1/</strong> أ. بيّن أن الدالة <span className="math">{"\\(f\\)"}</span> متزايدة على <span className="math">{"\\(I\\)"}</span>.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ب. بيّن أنه من أجل كل عدد حقيقي <span className="math">{"\\(x\\)"}</span> من المجال <span className="math">{"\\(I\\)"}</span>، يكون <span className="math">{"\\(f(x)\\)"}</span> ينتمي إلى <span className="math">{"\\(I\\)"}</span>.
                <br /><br />
                <strong>2/</strong> المتتالية <span className="math">{"\\(u_n\\)"}</span> المعرفة على <span className="math">{"\\(\\mathbb{N}\\)"}</span> كما يأتي:
                <span className="math">{"\\(u_{n+1}=f(u_n)\\)"}</span> و <span className="math">{"\\(u_0=\\dfrac{3}{2}\\)"}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;أ. برهن بالتراجع أنه من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span>، فإن <span className="math">{"\\(u_n\\)"}</span> ينتمي إلى <span className="math">{"\\(I\\)"}</span>.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ب. أدرس اتجاه تغير المتتالية <span className="math">{"\\(u_n\\)"}</span> ثم استنتج أنها متقاربة.
                <br /><br />
                <strong>3/</strong> أ. برهن بالتراجع أنه من أجل كل عدد طبيعي <span className="math">{"\\(n\\)"}</span>:
                <span className="math">{"\\(u_n=1+\\dfrac{1}{\\left(\\dfrac{3}{2}\\right)^n+1}\\)"}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ب. عيّن النهاية: <span className="math">{"\\(\\displaystyle\\lim_{n\\to+\\infty}u_n\\)"}</span>
            </div>

            {/* ============================================================
                RADAR BOX — enriched with full strategic scanning logic
            ============================================================ */}
            <div className="radar-box" style={{ marginTop: '14px' }}>
                <div className="radar-box-title">النظرة الشمولية للتمرين</div>
                <ul className="radar-list">
                    <li>
                        <strong>أول شيء أراه:</strong> الدالة كسرية <span className="math">{"\\(f(x)=\\frac{x+2}{-x+4}\\)"}</span> على مجال مغلق ومحدود <span className="math">{"\\([1;2]\\)"}</span>. هذا الإطار المحدود مقصود — سيُستغل لاحقاً للتحكم في إشارات التعابير.
                    </li>
                    <li>
                        <strong>السؤال 1أ:</strong> إثبات تزايد ← هذا مفتاح السؤال 1ب. لماذا؟ لأن التزايد هو الذي سيجعل إثبات <span className="math">{"\\(f(I)\\subseteq I\\)"}</span> سهلاً جداً (يكفي حساب الطرفين فقط). إذن هذان السؤالان مترابطان عمداً.
                    </li>
                    <li>
                        <strong>السؤال 1ب:</strong> إثبات <span className="math">{"\\(f(I)\\subseteq I\\)"}</span> ← هذا مفتاح السؤال 2أ! لأن خطوة التراجع الاستقرائية تعتمد على هذه النتيجة مباشرة. التمرين يبني هرماً.
                    </li>
                    <li>
                        <strong>السؤال 2ب:</strong> اتجاه التغير + التقارب. أرى أن المطلوب "استنتج أنها متقاربة" — هذا يعني أنني سأحتاج: رتابة + تحديد. التحديد من الأسفل يأتي من 2أ (لأن <span className="math">{"\\(u_n\\in[1;2]\\)"}</span>). إذن 2أ تُغذي 2ب أيضاً.
                    </li>
                    <li>
                        <strong>السؤال 3أ:</strong> الصيغة الصريحة معطاة جاهزة — مهمتي فقط التحقق منها بالتراجع، لا اشتقاقها. هذا يُريحني.
                    </li>
                </ul>
            </div>

            <div className="sub-question">أ. إثبات تزايد <span className="math">{"\\(f\\)"}</span> على <span className="math">{"\\(I\\)"}</span></div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            {/* A — AIM */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف الرئيسي:</strong> إثبات أن <span className="math">{"\\(f\\)"}</span> متزايدة على <span className="math">{"\\(I=[1;2]\\)"}</span>.<br /><br />
                    <strong>الهدف الفرعي:</strong> إيجاد أبسط طريقة للإثبات — التعريفية أم المشتقة? أقرر الآن قبل أي حساب.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات أن <span className="math">{"\\(\\forall x\\in I,\\; f'(x)\\geq 0\\)"}</span>.
                </div>
            </div>

            {/* M — TRANSLATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    كلمة "متزايدة" تترجم رياضياً بطريقتين:
                    <br />• التعريفية: نأخذ <span className="math">{"\\(x_1<x_2\\)"}</span> ونثبت <span className="math">{"\\(f(x_1)<f(x_2)\\)"}</span>
                    <br />• المشتقة: <span className="math">{"\\(f'(x)\\geq 0\\)"}</span> على <span className="math">{"\\(I\\)"}</span>
                    <br /><br />
                    الدالة كسرية بسيطة ← أختار <strong>المشتقة</strong> لأنها أسرع وأنظف جبرياً.
                </div>
                <div className="right-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    الهدف المترجم: نريد إثبات <span className="math">{"\\(f'(x)>0\\)"}</span> على <span className="math">{"\\(I\\)"}</span>.
                </div>
            </div>

            {/* R — RELATE */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>جرد المعطيات:</strong> قاعدة مشتقة الكسر تعطي: <span className="math">{"\\(\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}\\)"}</span>.<br />
                    <span className="math">{"\\(u=x+2\\)"}</span> ← <span className="math">{"\\(u'=1\\)"}</span> &nbsp;|&nbsp; <span className="math">{"\\(v=-x+4\\)"}</span> ← <span className="math">{"\\(v'=-1\\)"}</span>
                    <br /><br />
                    <strong>الربط بالهدف:</strong> تحقق مسبق: <span className="math">{"\\(v=0\\Leftrightarrow x=4\\notin I\\)"}</span> ← المقام لا يلغى على <span className="math">{"\\(I\\)"}</span>. ✓
                    إذن إشارة <span className="math">{"\\(f'\\)"}</span> = إشارة البسط فقط.
                </div>
                <div className="right-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نضع <span className="math">{"\\(u=x+2\\)"}</span>، <span className="math">{"\\(v=-x+4\\)"}</span>، <span className="math">{"\\(u'=1\\)"}</span>، <span className="math">{"\\(v'=-1\\)"}</span>.<br />
                    على <span className="math">{"\\(I\\)"}</span>: <span className="math">{"\\(v=-x+4\\in[2;3]>0\\)"}</span> ← المقام موجب دائماً.
                </div>
            </div>

            <div className="arrow-row">↕ نطبق قاعدة مشتقة الكسر: <span className="math">{"\\(\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}\\)"}</span> ↕</div>

            {/* EXECUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أعوّض في قانون الكسر للحصول على عبارة <strong>واضحة الإشارة</strong>. أتذكر أن <span className="math">{"\\(v'=-1\\)"}</span> سيحوّل الطرح إلى جمع في البسط.
                    </div>
                    أفتح الأقواس:<br />
                    • <span className="math">{"\\((1)(-x+4) = -x+4\\)"}</span><br />
                    • <span className="math">{"\\(-(x+2)(-1) = +x+2\\)"}</span><br /><br />
                    البسط: <span className="math">{"\\(-x+4+x+2=6\\)"}</span> — المتغير <span className="math">{"\\(x\\)"}</span> يتلاشى! ثابت موجب. ✓
                </div>
                <div className="right-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div className="math-block">{"\\[f'(x)=\\frac{(1)(-x+4)-(x+2)(-1)}{(-x+4)^2}\\]"}</div>
                    <div className="math-block">{"\\[f'(x)=\\frac{-x+4+x+2}{(-x+4)^2}=\\frac{6}{(-x+4)^2}\\]"}</div>
                </div>
            </div>

            {/* T — TEST */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> بسط موجب (<span className="math">{"\\(6>0\\)"}</span>) ومقام موجب صرف على <span className="math">{"\\(I\\)"}</span> (<span className="math">{"\\(x\\neq 4\\)"}</span>) ← <span className="math">{"\\(f'(x)>0\\)"}</span>. الهدف محقق!
                    </div>
                    <strong>فلتر المنطق:</strong> دالة كسرية بعيدة عن القطب — منطقي أن تكون متزايدة. الرابط للأمام: هذه النتيجة تُفعّل الطريقة السريعة في السؤال 1ب.
                </div>
                <div className="right-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    على <span className="math">{"\\(I=[1;2]\\)"}</span>: البسط <span className="math">{"\\(6>0\\)"}</span> والمقام <span className="math">{"\\((-x+4)^2>0\\)"}</span><br />
                    إذن <span className="math">{"\\(f'(x)=\\dfrac{6}{(-x+4)^2}>0\\)"}</span> على <span className="math">{"\\(I\\)"}</span><br />
                    ∴ <span className="math">{"\\(f\\)"}</span> <strong>متزايدة</strong> على <span className="math">{"\\(I\\)"}</span> ✓
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">صندوق الاستراتيجية — السؤال 1أ</div>
                <strong>لماذا المشتقة ولا التعريف؟</strong> الدالة كسرية بسيطة — المشتقة أسرع وأقل احتمالاً للخطأ الجبري. | <strong>لماذا لم أقلق من المقام؟</strong> تحققت مبكراً أن <span className="math">{"\\(x=4\\notin I\\)"}</span>، فعرفت أن المقام موجب صرف على <span className="math">{"\\(I\\)"}</span>. | <strong>الرابط للأمام:</strong> هذه النتيجة ستُستعمل في 1ب مباشرة.
            </div>

            {/* ============================================================
                QUESTION 1B
            ============================================================ */}
            <div className="sub-question">ب. إثبات أن <span className="math">{"\\(f(x)\\in I\\)"}</span> لكل <span className="math">{"\\(x\\in I\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف الرئيسي:</strong> إثبات أن <span className="math">{"\\(f(x)\\in I=[1;2]\\)"}</span> لكل <span className="math">{"\\(x\\in I\\)"}</span>.<br /><br />
                    <strong>الهدف الفرعي:</strong> اختيار الطريقة الأكثر دكاءً. الدالة متزايدة (1أ) ← أستغلها!
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(f([1;2])\\subseteq[1;2]\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    "يكون <span className="math">{"\\(f(x)\\)"}</span> ينتمي إلى <span className="math">{"\\(I\\)"}</span>" ← أترجم فوراً: <span className="math">{"\\(1\\leq f(x)\\leq 2\\)"}</span>.<br /><br />
                    <strong>الاستراتيجية:</strong> لأن الدالة متزايدة (من 1أ)، يكفي التحقق من صور الأطراف <span className="math">{"\\(f(1)\\)"}</span> و<span className="math">{"\\(f(2)\\)"}</span> لضمان أن كل الصور بينهما.
                </div>
                <div className="right-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    نبرهن أن <span className="math">{"\\(x \\in [1, 2] \\Rightarrow f(x) \\in [1, 2]\\)"}</span> باستخدام الرتابة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    <strong>جرد ما أملك:</strong><br />
                    • <strong>نتيجة 1أ:</strong> <span className="math">{"\\(f\\)"}</span> متزايدة على <span className="math">{"\\(I\\)"}</span> — هذا هو المعطى الذكي.<br />
                    • <strong>تعريف التزايد:</strong> <span className="math">{"\\(\\forall x\\in[a;b]: f(a)\\leq f(x)\\leq f(b)\\)"}</span>.<br /><br />
                    إذن مهمتي تقلصت إلى: احسب <span className="math">{"\\(f(1)\\)"}</span> و<span className="math">{"\\(f(2)\\)"}</span> فقط. أتوقع: لو كان <span className="math">{"\\(f(1)=1\\)"}</span> و<span className="math">{"\\(f(2)=2\\)"}</span> → الطرفان نقطتا ثبات!
                </div>
                <div className="right-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    لأن <span className="math">{"\\(f\\)"}</span> متزايدة على <span className="math">{"\\(I\\)"}</span> فإن:<br />
                    <span className="math">{"\\(\\forall x\\in[1;2]:\\; f(1)\\leq f(x)\\leq f(2)\\)"}</span>
                </div>
            </div>

            <div className="arrow-row">↕ نحسب قيمتَي التصوير عند الطرفين ↕</div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> أحسب <span className="math">{"\\(f(1)\\)"}</span> و<span className="math">{"\\(f(2)\\)"}</span> <strong>فقط</strong> لأن التزايد يضمن أن كل قيمة وسطية محصورة بينهما تلقائياً.
                    </div>
                    • <span className="math">{"\\(f(1)\\)"}</span>: البسط <span className="math">{"\\(3\\)"}</span>، المقام <span className="math">{"\\(3\\)"}</span> ← <span className="math">{"\\(1\\)"}</span>.<br />
                    • <span className="math">{"\\(f(2)\\)"}</span>: البسط <span className="math">{"\\(4\\)"}</span>، المقام <span className="math">{"\\(2\\)"}</span> ← <span className="math">{"\\(2\\)"}</span>.<br /><br />
                    <strong>فلتر المنطق:</strong> <span className="math">{"\\(f(1)=1\\)"}</span> و<span className="math">{"\\(f(2)=2\\)"}</span> — الطرفان نقطتا ثبات! هذا يؤكد صحة الحساب.
                </div>
                <div className="right-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div className="math-block">{"\\[f(1)=\\frac{1+2}{-1+4}=\\frac{3}{3}=1\\]"}</div>
                    <div className="math-block">{"\\[f(2)=\\frac{2+2}{-2+4}=\\frac{4}{2}=2\\]"}</div>
                </div>
            </div>


            {/* ============================================================
                QUESTION 2 — دراسة المتتالية
            ============================================================ */}

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> وجدنا أن <span className="math">{"\\(f(1)=1\\)"}</span> و<span className="math">{"\\(f(2)=2\\)"}</span>. وبما أن الدالة متزايدة، فكل قيمها للمجال <span className="math">{"\\([1, 2]\\)"}</span> محصورة بين 1 و 2.
                    </div>
                </div>
                <div className="right-col">
                    إذن: <span className="math">{"\\(x \\in [1, 2] \\Rightarrow f(x) \\in [1, 2]\\)"}</span>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">صندوق الاستراتيجية — السؤال 1ب</div>
                <strong>لماذا استغللت نتيجة 1أ؟</strong> لأن الطريقة الجبرية المباشرة (حل المتراجحة) أطول وأكثر خطورة. نتيجة التزايد تُختزل الإثبات لحساب نقطتين فقط. | <strong>الرابط للأمام:</strong> هذه النتيجة هي ركيزة السؤال 2أ بالكامل.
            </div>

            <div className="question-header">السؤال 2 — دراسة المتتالية <span className="math" style={{ color: '#fff' }}>{"\\((u_n)\\)"}</span></div>

            <div className="sub-question">أ. البرهان بالتراجع على <span className="math">{"\\(u_n\\in I\\)"}</span> لكل <span className="math">{"\\(n\\in\\mathbb{N}\\)"}</span></div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف الرئيسي:</strong> إثبات أن جميع حدود المتتالية محصورة في المجال <span className="math">{"\\(I=[1;2]\\)"}</span>.<br /><br />
                    <strong>الهدف الفرعي:</strong> توظيف "الاستقرار الوراثي" للدالة (النتيجة 1ب) في الخطوة الاستقرائية.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(P(n): u_n \in [1, 2]\\)"}</span> بالتراجع.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    البرهان بالتراجع يتطلب ثلاث محطات إجبارية:<br />
                    1. <strong>التحقق :</strong> التأكد من الحد الأول.<br />
                    2. <strong>الفرضية :</strong> قبول <span className="math">{"\\(P(n)\\)"}</span> كمساعدة.<br />
                    3. <strong>الوراثة :</strong> الانتقال لـ <span className="math">{"\\(P(n+1)\\)"}</span>.
                </div>
                <div className="right-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    نطبق هيكل التراجع على الخاصية <span className="math">{"\\(P(n)\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نربط بين تعريف المتتالية <span className="math">{"\\(u_{n+1}=f(u_n)\\)"}</span> وخاصية الدالة في 1ب:<br />
                    "إذا كان المدخل في <span className="math">{"\\(I\\)"}</span>، فإن المخرج حتماً في <span className="math">{"\\(I\\)"}</span>".
                </div>
                <div className="right-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نستخدم <span className="math">{"\\(u_0=1.5\\)"}</span> و <span className="math">{"\\(f(I) \\subset I\\)"}</span>.
                </div>
            </div>

            <div className="arrow-row">↕ البدء بمراحل البرهان بالتراجع ↕</div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> نبدأ بالتحقق من <span className="math">{"\\(n=0\\)"}</span> ثم ننتقل لبناء الجسر الوراثي.
                    </div>
                    <strong>1. من أجل <span className="math">{"\\(n=0\\)"}</span>:</strong> لدينا <span className="math">{"\\(u_0=1.5\\)"}</span> وهو ينتمي لـ <span className="math">{"\\([1, 2]\\)"}</span>. (محققة).<br /><br />
                    <strong>2. الفرضية:</strong> نفترض <span className="math">{"\\(u_n \\in [1, 2]\\)"}</span>.<br /><br />
                    <strong>3. الانتقال:</strong> بما أن <span className="math">{"\\(u_n \\in I\\)"}</span>، فإنه حسب السؤال 1ب، صورتها <span className="math">{"\\(f(u_n)\\)"}</span> تنتمي لـ <span className="math">{"\\(I\\)"}</span>. أي <span className="math">{"\\(u_{n+1} \\in I\\)"}</span>.
                </div>
                <div className="right-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    • من أجل <span className="math">{"\\(n=0\\)"}</span>: <span className="math">{"\\(u_0=1.5 \\in [1, 2]\\)"}</span>.<br />
                    • نفترض <span className="math">{"\\(u_n \\in I\\)"}</span> ونبرهن <span className="math">{"\\(u_{n+1} \\in I\\)"}</span>.<br />
                    • لدينا <span className="math">{"\\(u_n \\in I\\)"}</span>، وبما أن <span className="math">{"\\(f(I) \\subset I\\)"}</span> (من 1ب):<br />
                    <span className="math">{"\\(f(u_n) \\in I \\Rightarrow u_{n+1} \\in I\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> تم التحقق من البداية والوراثة. إذن الخاصية صادقة دوماً.
                    </div>
                </div>
                <div className="right-col">
                    إذن حسب مبدأ التراجع: <span className="math">{"\\(\\forall n \\in \\mathbb{N}, u_n \\in [1, 2]\\)"}</span>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">صندوق الاستراتيجية — السؤال 2أ</div>
                <strong>مفتاح الحل:</strong> الربط بين التراجع وخصائص الدالة. بمجرد إثبات <span className="math">{"\\(f(I) \\subset I\\)"}</span>، يصبح برهان تراجع المتتالية <span className="math">{"\\(u_{n+1}=f(u_n)\\)"}</span> مجرد تحصيل حاصل.
            </div>

            {/* ============================================================
                QUESTION 2B
            ============================================================ */}
            <div className="sub-question">ب. اتجاه التغير والتقارب</div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف الرئيسي:</strong> معرفة هل المتتالية "تصعد" أم "تنزل" (الرتابة) وهل لها "نهاية" (التقارب).
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> دراسة رتابة وتقارب <span className="math">{"\\((u_n)\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    دراسة التغيرات تعني دراسة إشارة الفرق <span className="math">{"\\(u_{n+1}-u_n\\)"}</span>.<br />
                    رياضياً: <span className="math">{"\\(u_{n+1}-u_n = f(u_n)-u_n\\)"}</span>.
                </div>
                <div className="right-col">
                    نبحث عن إشارة <span className="math">{"\\(u_{n+1}-u_n\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    نعلم أن <span className="math">{"\\(u_n \\in [1, 2]\\)"}</span>. سنستخدم هذا المجال لتحليل إشارة العبارة الجبرية الناتجة عن الفرق.
                </div>
                <div className="right-col">
                    نستغل نتيجة 2أ: <span className="math">{"\\(u_n \\in [1, 2]\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> نوحد المقامات ونحلل البسط للوصول إلى جداء يسهل دراسة إشارته.
                    </div>
                    بعد الحساب نجد:<br />
                    <span className="math">{"\\(u_{n+1}-u_n = \\frac{(u_n-1)(u_n-2)}{-u_n+4}\\)"}</span>.<br />
                    بما أن <span className="math">{"\\(u_n \\in [1, 2]\\)"}</span> فإن:<br />
                    • <span className="math">{"\\(u_n-1 \\geq 0\\)"}</span><br />
                    • <span className="math">{"\\(u_n-2 \\leq 0\\)"}</span><br />
                    • المقام <span className="math">{"\\(-u_n+4 > 0\\)"}</span>.<br />
                    إذن الفرق سالب.
                </div>
                <div className="right-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div className="math-block">{"\\[ u_{n+1}-u_n = \\frac{u_n^2-3u_n+2}{-u_n+4} = \\frac{(u_n-1)(u_n-2)}{-u_n+4} \\]"}</div>
                    من أجل <span className="math">{"\\(u_n \in [1, 2]\\)"}</span> لدينا:<br />
                    <span className="math">{"\\((u_n-1) \\geq 0\\)"}</span> و <span className="math">{"\\((u_n-2) \\leq 0\\)"}</span> و <span className="math">{"\\((-u_n+4) > 0\\)"}</span>.<br />
                    إذن <span className="math">{"\\(u_{n+1}-u_n \\leq 0\\)"}</span>. المتتالية متناقصة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> المتتالية متناقصة ومحدودة من الأسفل بـ 1، فهي إذن متقاربة حسب نظرية التقارب الرتيب.
                    </div>
                </div>
                <div className="right-col">
                    بما أن <span className="math">{"\\((u_n)\\)"}</span> متناقصة ومحدودة من الأسفل، فهي <strong>متقاربة</strong>.
                </div>
            </div>

            <div className="strategy-box">
                <div className="strategy-box-title">صندوق الاستراتيجية — السؤال 2ب</div>
                <strong>قاعدة ذهبية:</strong> لإثبات التقارب دون حساب النهاية، ابحث دائماً عن "الرتابة" (تزايد/تناقص) و"التحديد" (محدودة من الأعلى/الأسفل).
            </div>

            {/* ============================================================
                QUESTION 3 — الصيغة الصريحة والنهاية
            ============================================================ */}
            <div className="question-header">السؤال 3 — الصيغة الصريحة والنهاية</div>

            <div className="sub-question">أ. برهان بالتراجع على الصيغة الصريحة</div>

            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    <strong>الهدف الرئيسي:</strong> إثبات <span className="math">{"\\(Q(n):\\; u_n=1+\\dfrac{1}{\\left(\\frac{3}{2}\\right)^n+1}\\)"}</span> بالتراجع.<br /><br />
                    <strong>الهدف الفرعي:</strong> الصيغة معطاة — فقط أتحقق منها، لا أشتقها. هذا يريحني.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> إثبات <span className="math">{"\\(Q(n):\\; u_n=1+\\dfrac{1}{\\left(\\dfrac{3}{2}\\right)^n+1}\\)"}</span>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    هيكل التراجع: <strong>أساس</strong> ← <strong>فرضية</strong> ← <strong>خطوة</strong>. الخطوة ستكون جبرياً أطول.<br /><br />
                    <strong>تكتيك الوضوح:</strong> أضع <span className="math">{"\\(a=\\left(\\frac{3}{2}\\right)^n+1\\)"}</span> لتبسيط الكتابة وتجنب الأخطاء في الكسور المتشعبة.
                </div>
                <div className="right-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    نريد إثبات: <span className="math">{"\\(Q(n):\\; u_n=1+\\dfrac{1}{\\left(\\dfrac{3}{2}\\right)^n+1}\\)"}</span>
                </div>
            </div>

            {/* BASIS */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">الأساس <span className="math">{"\\(n=0\\)"}</span></span><br />
                    أعوض <span className="math">{"\\(n=0\\)"}</span> في الصيغة: <span className="math">{"\\(\\left(\\frac{3}{2}\\right)^0=1\\)"}</span>.
                    <br /><br />
                    إذن الصيغة تعطي: <span className="math">{"\\(1+\\frac{1}{1+1}=1+\\frac{1}{2}=\\frac{3}{2}\\)"}</span>.
                    <br /><br />
                    وهذا بالضبط <span className="math">{"\\(u_0=\\frac{3}{2}\\)"}</span>. ✓ الأساس محقق بسهولة.
                </div>
                <div className="right-col">
                    <span className="phase-label start">الأساس <span className="math">{"\\(n=0\\)"}</span></span><br />
                    <div className="math-block">{"\\[\\begin{aligned} &1+\\frac{1}{\\left(\\frac{3}{2}\\right)^0+1} = 1+\\frac{1}{1+1} \\\\\\\\ &= 1+\\frac{1}{2} = \\frac{3}{2} = u_0 \\end{aligned}\\]"}</div>
                    إذن <span className="math">{"\\(Q(0)\\)"}</span> صحيحة ✓
                </div>
            </div>

            {/* HYPOTHESIS */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label solution">فرضية</span><br />
                    أفترض <span className="math">{"\\(Q(n)\\)"}</span> صحيحة، أي: <span className="math">{"\\(u_n=1+\\dfrac{1}{\\left(\\frac{3}{2}\\right)^n+1}\\)"}</span>.
                    <br /><br />
                    أكتب الهدف الفرعي أمامي: أريد الوصول إلى <span className="math">{"\\(u_{n+1}=1+\\dfrac{1}{\\left(\\frac{3}{2}\\right)^{n+1}+1}\\)"}</span>.
                    <br /><br />
                    <strong>تكتيك الوضوح:</strong> أضع <span className="math">{"\\(a=\\left(\\frac{3}{2}\\right)^n+1\\)"}</span> لتبسيط الكتابة. إذن الفرضية: <span className="math">{"\\(u_n=1+\\frac{1}{a}=\\frac{a+1}{a}\\)"}</span>.
                    <br /><br />
                    والهدف يصبح: أصل إلى <span className="math">{"\\(1+\\frac{1}{\\frac{3}{2}a}\\)"}</span> (لأن <span className="math">{"\\(\\left(\\frac{3}{2}\\right)^{n+1}+1=\\frac{3}{2}\\cdot\\left(\\frac{3}{2}\\right)^n+1=\\frac{3}{2}(a-1)+1\\)"}</span>... سأعيد حسابها بعد التعويض).
                </div>
                <div className="right-col">
                    <span className="phase-label solution">الفرضية الاستقرائية</span><br />
                    نفترض: <span className="math">{"\\(u_n=1+\\dfrac{1}{\\left(\\dfrac{3}{2}\\right)^n+1}\\)"}</span><br />
                    نريد إثبات: <span className="math">{"\\(u_{n+1}=1+\\dfrac{1}{\\left(\\dfrac{3}{2}\\right)^{n+1}+1}\\)"}</span>
                </div>
            </div>

            <div className="arrow-row">↕ نحسب <span className="math">{"\\(u_{n+1}=f(u_n)\\)"}</span> بعد تعويض الفرضية ↕</div>

            {/* SUBSTITUTION */}
            <div className="step-row-two">
                <div className="left-col">
                    أعوض <span className="math">{"\\(u_n=\\frac{a+1}{a}\\)"}</span> في <span className="math">{"\\(f(u_n)=\\frac{u_n+2}{-u_n+4}\\)"}</span>.
                    <br /><br />
                    الوضع <span className="math">{"\\(a\\)"}</span> يجعل الحساب منظماً. أحسب البسط والمقام بشكل منفصل — خطأ الجمع في الكسور هو أشيع خطأ في هذا النوع من المسائل.
                </div>
                <div className="right-col">
                    نضع <span className="math">{"\\(a=\\left(\\dfrac{3}{2}\\right)^n+1\\)"}</span> لتبسيط الكتابة، فيصبح <span className="math">{"\\(u_n=1+\\dfrac{1}{a}=\\dfrac{a+1}{a}\\)"}</span>
                </div>
            </div>

            {/* NUMERATOR */}
            <div className="step-row-two">
                <div className="left-col">
                    أحسب البسط: <span className="math">{"\\(u_n+2=\\frac{a+1}{a}+2\\)"}</span>.
                    <br />
                    أضع على مقام مشترك <span className="math">{"\\(a\\)"}</span>: <span className="math">{"\\(\\frac{a+1+2a}{a}=\\frac{3a+1}{a}\\)"}</span>.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[u_n+2=\\frac{a+1}{a}+2=\\frac{a+1+2a}{a}=\\frac{3a+1}{a}\\]"}</div>
                </div>
            </div>

            {/* DENOMINATOR */}
            <div className="step-row-two">
                <div className="left-col">
                    أحسب المقام: <span className="math">{"\\(-u_n+4=-\\frac{a+1}{a}+4\\)"}</span>.
                    <br />
                    أضع على مقام مشترك <span className="math">{"\\(a\\)"}</span>: <span className="math">{"\\(\\frac{-a-1+4a}{a}=\\frac{3a-1}{a}\\)"}</span>.
                    <br /><br />
                    <strong>تحقق سريع:</strong> هل <span className="math">{"\\(3a-1\\neq0\\)"}</span>؟ <span className="math">{"\\(a=\\left(\\frac{3}{2}\\right)^n+1\\geq2\\)"}</span>، إذن <span className="math">{"\\(3a-1\\geq5>0\\)"}</span>. ✓
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[\\begin{aligned} -u_n+4 &= -\\frac{a+1}{a}+4 = \\frac{-a-1+4a}{a} \\\\\\\\ &= \\frac{3a-1}{a} \\end{aligned}\\]"}</div>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> نريد التحقق من صحة الصيغة الصريحة عند <span className="math">{"\\(n=0\\)"}</span>.
                    </div>
                    <strong>1. الأساس (<span className="math">{"\\(n=0\\)"}</span>):</strong><br />
                    نعوض في الصيغة: <span className="math">{"\\(1 + \\frac{1}{(3/2)^0+1} = 1 + \\frac{1}{2} = 1.5\\)"}</span>.<br />
                    وهي تساوي <span className="math">{"\\(u_0\\)"}</span>. إذن الصيغة صحيحة في البداية.
                </div>
                <div className="right-col">
                    <span className="phase-label start">الأساس <span className="math">{"\\(n=0\\)"}</span></span><br />
                    <div className="math-block">{"\\[ 1+\\frac{1}{\\left(\\frac{3}{2}\\right)^0+1} = 1+\\frac{1}{2} = \\frac{3}{2} = u_0 \\]"}</div>
                    إذن <span className="math">{"\\(Q(0)\\)"}</span> صحيحة.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> ننتقل للوراثة. نفرض صحة الصيغة لـ <span className="math">{"\\(n\\)"}</span> ونثبتها لـ <span className="math">{"\\(n+1\\)"}</span>.
                    </div>
                    <strong>2. الفرضية:</strong> نفترض <span className="math">{"\\(u_n = 1 + \\frac{1}{a}\\)"}</span> حيث <span className="math">{"\\(a = (3/2)^n + 1\\)"}</span>.<br /><br />
                    <strong>3. الانتقال:</strong> نحسب <span className="math">{"\\(u_{n+1} = f(u_n)\\)"}</span> بالتعويض الجبري.
                </div>
                <div className="right-col">
                    <span className="phase-label solution">الفرضية والهدف</span><br />
                    نفترض: <span className="math">{"\\(u_n = 1 + \\frac{1}{\\left(\\frac{3}{2}\\right)^n+1}\\)"}</span><br />
                    ونبرهن: <span className="math">{"\\(u_{n+1} = 1 + \\frac{1}{\\left(\\frac{3}{2}\\right)^{n+1}+1}\\)"}</span>
                </div>
            </div>

            <div className="arrow-row">↕ التبسيط الجبري باستخدام المتغير الوسيط <span className="math">{"\\(a\\)"}</span> ↕</div>

            <div className="step-row-two">
                <div className="left-col">
                    نستخدم <span className="math">{"\\(a\\)"}</span> لتجنب تعقيد الكسور المتراكمة. البسط يصبح <span className="math">{"\\((3a+1)/a\\)"}</span> والمقام <span className="math">{"\\((3a-1)/a\\)"}</span>.
                </div>
                <div className="right-col">
                    نضع <span className="math">{"\\(a = (3/2)^n + 1\\)"}</span>.<br />
                    <div className="math-block">{"\\[ u_{n+1} = \\frac{u_n+2}{-u_n+4} = \\frac{(a+1)/a + 2}{-(a+1)/a + 4} = \\frac{3a+1}{3a-1} \\]"}</div>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    نحلل الكسر <span className="math">{"\\((3a+1)/(3a-1)\\)"}</span> لإظهار الرقم 1:<br />
                    <span className="math">{"\\(1 + \\frac{2}{3a-1}\\)"}</span>.<br />
                    بالرجوع لتعريف <span className="math">{"\\(a\\)"}</span>، نصل للشكل المطلوب.
                </div>
                <div className="right-col">
                    <div className="math-block">{"\\[ u_{n+1} = 1 + \\frac{2}{3a-1} = 1 + \\frac{2}{3(3/2)^n+3-1} \\]"}</div>
                    <div className="math-block">{"\\[ = 1 + \\frac{2}{3(3/2)^n+2} \\]"}</div>
                    بقسمة البسط والمقام على 2:<br />
                    <div className="math-block">{"\\[ u_{n+1} = 1 + \\frac{1}{\\frac{3}{2}(3/2)^n+1} = 1 + \\frac{1}{(3/2)^{n+1}+1} \\]"}</div>
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> الصيغة الصريحة برهنت بالتراجع. نلاحظ انسجامها مع الرتابة (المقام يزداد فالمقدار يقل).
                    </div>
                </div>
                <div className="right-col">
                    إذن الخاصية <span className="math">{"\\(Q(n)\\)"}</span> صحيحة لكل <span className="math">{"\\(n\\)"}</span>.
                </div>
            </div>

            {/* ============================================================
                QUESTION 3B — LIMIT
            ============================================================ */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    إيجاد قيمة حدود المتتالية عندما يقترب <span className="math">{"\\(n\\)"}</span> من المالانهاية.
                </div>
                <div className="right-col">
                    <strong>الهدف:</strong> حساب <span className="math">{"\\(\\lim_{n \\to \\infty} u_n\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    بما أننا نملك العبارة الصريحة، نطبق نهايات الدوال المرجعية (نهاية المتتالية الهندسية).
                </div>
                <div className="right-col">
                    نستخدم النهاية المرجعية لـ <span className="math">{"\\(q^n\\)"}</span> مع <span className="math">{"\\(q > 1\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>🔔 تذكير بالهدف:</strong> حساب نهاية المقام أولاً.
                    </div>
                    بما أن <span className="math">{"\\(3/2 > 1\\)"}</span> فإن <span className="math">{"\\((3/2)^n\\)"}</span> تؤول للمالانهاية.<br />
                    إذن الكسر يؤول للصفر. النهاية هي 1.
                </div>
                <div className="right-col">
                    <span className="phase-label start">التنفيذ</span><br />
                    <div className="math-block">{"\\[ \\lim_{n \\to \\infty} (3/2)^n = +\\infty \\Rightarrow \\lim_{n \\to \\infty} \\frac{1}{(3/2)^n+1} = 0 \\]"}</div>
                    إذن: <span className="math">{"\\(\\lim_{n \\to \\infty} u_n = 1 + 0 = 1\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    <div style={{ backgroundColor: "#f0fdf4", border: "1px dashed #16a34a", padding: "5px", borderRadius: "5px", marginBottom: "4px", color: "#15803d", fontSize: '11pt' }}>
                        <strong>✅ تحقيق الهدف:</strong> النهاية هي 1، وهي تتوافق مع كون المتتالية متناقصة ومحدودة من الأسفل بـ 1. كما أنها تمثل نقطة ثبات الدالة <span className="math">{"\\(f(1)=1\\)"}</span>.
                    </div>
                </div>
                <div className="right-col">
                    <span className="phase-label verify">الخلاصة</span><br />
                    <div className="math-block">{"\\[ \\lim_{n \\to \\infty} u_n = 1 \\]"}</div>
                </div>
            </div>
        </>
    );
};

export default Exercice1;