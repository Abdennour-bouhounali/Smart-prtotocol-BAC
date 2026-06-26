import React from 'react';

const Solution_DirectQuestions_Integrals = () => {
    return (
        <>
            <div id="toc-sol-direct-integrals" className="exercise-title" style={{ textAlign: 'center' }}>حلول الأسئلة المباشرة - الحساب التكاملي والمعادلات التفاضلية</div>


            {/* ============================================================
                EXERCISE 1: Primitive Functions
            ============================================================ */}
            <div className="question-header no-break">التمرين 1 — الدوال الأصلية</div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة (Translate)</span><br />
                    الدالة الأصلية تعني رياضيا إيجاد دالة F بحيث F' = f.
                </div>
                <div className="right-col">

                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />
                    نريد إيجاد دالة <span className="math">{"\\(F\\)"}</span> يكون اشتقاقها هو <span className="math">{"\\(f\\)"}</span>.
                </div>
                <div className="right-col">
                    نبحث عن <span className="math">{"\\(F(x)\\)"}</span> بحيث <span className="math">{"\\(F'(x) = f(x)\\)"}</span>.
                </div>
            </div>

            {/* Q1.1 */}

            <div className="sub-question">1) الدالة الأصلية لـ <span className="math">{"\\(f(x) = (x^2+1)e^x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. الربط (Relate)</span><br />

                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "6px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>1. أحدد الهدف:</strong><br />
                        المطلوب هو إيجاد أصلية لـ
                        <span className="math">{"\\((x^2+1)e^x\\)"}</span>.
                        إذن أبحث عن دالة إذا اشتققناها تعطينا هذه العبارة.
                    </div>

                    <strong>2. أبحث في أدواتي:</strong><br />
                    ألاحظ وجود
                    <span className="math">{"\\(e^x\\)"}</span>
                    مضروباً في كثير حدود. أتذكر القاعدة:

                    <div style={{ marginTop: '4px', marginBottom: '4px' }}>
                        اشتقاق
                        <span className="math">{"\\(P(x)e^x\\)"}</span>
                        يعطيني من جديد
                        <span className="math">{"\\((P(x)+P'(x))e^x\\)"}</span>
                    </div>



                    <strong>3. كيف أصل إلى الهدف؟</strong><br />
                    بما أن الهدف من هذه العائلة، فأختار أصلية من نفس العائلة، وأجعل كثير الحدود من نفس الدرجة، ثم أحدد معاملاته بالمطابقة.

                    <div style={{ background: "#eef6ff", borderRight: "3px solid #2563eb", padding: "6px 10px", borderRadius: "4px", marginTop: "6px", fontSize: "10.8pt" }}> <strong>تذكير:</strong> هذه نفس فكرة <strong>التحليل العكسي</strong>: نفترض النتيجة (شكل الأصلية)، ثم نشتقها للتحقق منها، وبعد اكتشافها نكتب الحل في الاتجاه الأمامي. </div>
                </div>

                <div className="right-col">
                    نفرض:
                    <div className="math-block">
                        {"\\[F(x)=(ax^2+bx+c)e^x\\]"}
                    </div>

                    نشتق:
                    <div className="math-block">
                        {"\\[F'(x)=\\big[(ax^2+bx+c)+(2ax+b)\\big]e^x\\]"}
                    </div>

                    ثم نجمع الحدود:
                    <div className="math-block">
                        {"\\[F'(x)=\\left(ax^2+(2a+b)x+(b+c)\\right)e^x\\]"}
                    </div>

                    نطابق مع
                    <span className="math">{"\\((x^2+1)e^x\\)"}</span>:

                    <div className="math-block">
                        {"\\[a=1,\\qquad 2a+b=0,\\qquad b+c=1\\]"}
                    </div>

                    فنجد:
                    <span className="math">{"\\(a=1,\\;b=-2,\\;c=3\\)"}</span>.
                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    آخر خطوة دائماً هي إلغاء عملية التكامل: أشتق النتيجة التي وجدتها. إذا رجعت إلى الدالة الأصلية، فهذا يؤكد أن الأصلية صحيحة، ولا يبقى إلا إضافة ثابت التكامل.
                </div>

                <div className="right-col">
                    <strong>نشتق النتيجة:</strong>

                    <div className="math-block">
                        {"\\[F(x)=(x^2-2x+3)e^x+C\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[F'(x)=\\big[(x^2-2x+3)+(2x-2)\\big]e^x\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[F'(x)=(x^2+1)e^x\\]"}
                    </div>

                    وهي بالضبط الدالة المطلوب إيجاد أصلية لها، إذن:

                    <div className="math-block">
                        {"\\[F(x)=(x^2-2x+3)e^x+C\\]"}
                    </div>
                </div>
            </div>

            {/* Q1.2 */}
            <div className="sub-question">2) الدالة الأصلية لـ <span className="math">{"\\(f(x) = \\frac{\\ln x}{x}\\)"}</span></div> <div className="col-header-row-two"> <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div> <div className="col-header right-h">الحل التفصيلي</div> </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. الربط (Relate)</span><br />

                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "6px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>1. أحدد الهدف:</strong><br />
                        أريد إيجاد أصلية لـ
                        <span className="math">{"\\(\\frac{\\ln x}{x}\\)"}</span>.
                        أي أبحث عن دالة إذا اشتققناها تعطيني هذا الشكل.
                    </div>

                    <strong>2. أبحث في أدواتي:</strong><br />

                    ألاحظ أن
                    <span className="math">{"\\(\\ln x\\)"}</span>
                    موجودة ومعها مشتقتها
                    <span className="math">{"\\(\\frac{1}{x}\\)"}</span>.

                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "6px", marginTop: "6px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>فكرة:</strong> عندما أرى دالة ومعها مشتقتها مضروبتين، أبحث مباشرة عن قاعدة
                        <span className="math">{"\\(u'u^n\\)"}</span>.
                    </div>

                    هنا
                    <span className="math">{"\\(u(x)=\\ln x\\)"}</span>
                    ووجود
                    <span className="math">{"\\(\\frac{1}{x}\\)"}</span>
                    يؤكد أن قاعدة التركيب هي الأداة المناسبة، لأنها تعكس قاعدة اشتقاق قوة دالة مركبة.

                    <br />

                    <strong>3. كيف أصل إلى الهدف؟</strong><br />
                    بما أن لدي
                    <span className="math">{"\\(u'\\)"}</span>
                    مضروباً في
                    <span className="math">{"\\(u\\)"}</span>،
                    أطبق مباشرة قاعدة

                    <span className="math">{"\\(\\int u^n u'\\,dx=\\frac{u^{n+1}}{n+1}+C\\)"}</span>.




                </div>

                <div className="right-col">
                    حيث
                    <span className="math">{"\\(u(x)=\\ln x\\)"}</span>
                    و
                    <span className="math">{"\\(u'(x)=\\frac1x\\)"}</span>
                    و
                    <span className="math">{"\\(n=1\\)"}</span>.

                    <br />

                    بتطبيق القاعدة:

                    <div className="math-block">
                        {"\\[F(x)=\\frac{(\\ln x)^{1+1}}{1+1}+C\\]"}
                    </div>

                    أي:

                    <div className="math-block">
                        {"\\[F(x)=\\frac12(\\ln x)^2+C\\]"}
                    </div>


                </div>
            </div>
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    في النهاية أشتق النتيجة فقط، فإذا رجعت إلى
                    <span className="math">{"\\(\\frac{\\ln x}{x}\\)"}</span>
                    فهذا يؤكد صحة الأصلية.                </div>
                <div className="right-col">
                    نتحقق بالاشتقاق:

                    <div className="math-block">
                        {"\\[F'(x)=\\frac12\\cdot2\\ln x\\cdot\\frac1x=\\frac{\\ln x}{x}\\]"}
                    </div>                </div>
            </div>

            {/* Q1.3 */}
            <div className="sub-question">3) الدالة الأصلية لـ <span className="math">{"\\(f(x) = \\cos^2 x\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. الربط (Relate)</span><br />

                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "6px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>1. أحدد الهدف:</strong><br />
                        أريد إيجاد أصلية لـ
                        <span className="math">{"\\(\\cos^2x\\)"}</span>.
                        إذن أسأل نفسي: هل أستطيع تكاملها مباشرة؟
                    </div>

                    <strong>2. أبحث في أدواتي:</strong><br />

                    ألاحظ أن الدالة تحتوي على قوة زوجية للدالة المثلثية، ولا توجد قاعدة مباشرة لحساب
                    <span className="math">{"\\(\\int \\cos^2x\\,dx\\)"}</span>.

                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "6px", marginTop: "6px", color: "#1e40af", fontSize: '11pt' }}>
                        <strong>فكرة:</strong> عندما أرى
                        <span className="math">{"\\(\\cos^2x\\)"}</span>
                        أو
                        <span className="math">{"\\(\\sin^2x\\)"}</span>
                        أتذكر دستور <strong>تخفيض الدرجة</strong> لأنه يحول القوة الزوجية إلى حدود يمكن تكاملها مباشرة.
                    </div>

                    <strong>3. كيف أصل إلى الهدف؟</strong><br />
                    بما أن التكامل المباشر غير ممكن، أستعمل دستور تخفيض الدرجة لتحويل المسألة إلى مجموع حد ثابت وحد مثلثي بسيط، ثم أكامل كل حد على حدة.


                </div>

                <div className="right-col">
                    نطبق دستور تخفيض الدرجة:

                    <div className="math-block">
                        {"\\[\\cos^2x=\\frac{1+\\cos(2x)}2\\]"}
                    </div>

                    إذن:

                    <div className="math-block">
                        {"\\[\\int\\cos^2x\\,dx=\\frac12\\int1\\,dx+\\frac12\\int\\cos(2x)\\,dx\\]"}
                    </div>

                    نكامل كل حد:

                    <div className="math-block">
                        {"\\[F(x)=\\frac12x+\\frac14\\sin(2x)+C\\]"}
                    </div>


                </div>
            </div>

            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />
                    في النهاية أشتق النتيجة. إذا حصلت من جديد على
                    <span className="math">{"\\(\\cos^2x\\)"}</span>
                    فهذا يؤكد صحة الأصلية.
                </div>
                <div className="right-col">
                    نتحقق بالاشتقاق:

                    <div className="math-block">
                        {"\\[F'(x)=\\frac12+\\frac12\\cos(2x)=\\cos^2x\\]"}
                    </div>
                </div>
            </div>
            {/* ============================================================
                EXERCISE 2: Integration by Parts
            ============================================================ */}
            <div className="question-header no-break">التمرين 2 — المكاملة بالتجزئة</div>

            <div className="sub-question">احسب التكامل التالي باستعمال المكاملة بالتجزئة: <span className="math">{"\\(I = \\int_1^e x^2 \\ln x \\, dx\\)"}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>


            {/* A */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    هدفي ليس فقط إيجاد أصلية، بل حساب القيمة الدقيقة للتكامل المحدد.

                    لذلك يجب تحويل هذا الجداء إلى تكامل أسهل يمكن حسابه مباشرة.
                </div>

                <div className="right-col">
                    نبحث عن طريقة تبسط التكامل قبل حسابه.
                </div>
            </div>

            {/* R */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. الربط (Relate)</span><br />

                    <div style={{
                        backgroundColor: "#eef2ff",
                        border: "1px dashed #3b82f6",
                        padding: "5px",
                        borderRadius: "5px",
                        marginBottom: "6px",
                        marginTop: "4px",
                        color: "#1e40af",
                        fontSize: "11pt"
                    }}>
                        <strong>1. ألاحظ الهدف:</strong><br />
                        لا أستطيع تكامل
                        <span className="math">{"\\(x^2\\ln x\\)"}</span>
                        مباشرة.
                    </div>

                    <strong>2. أبحث في أدواتي:</strong><br />

                    لدي جداء بين دالتين مختلفتين.

                    أتساءل:

                    <strong>أي أداة تحول هذا الجداء إلى تكامل أبسط؟</strong>

                    <div style={{
                        backgroundColor: "#eef2ff",
                        border: "1px dashed #3b82f6",
                        padding: "5px",
                        borderRadius: "5px",
                        marginBottom: "6px",
                        marginTop: "6px",
                        color: "#1e40af",
                        fontSize: "11pt"
                    }}>
                        <strong>فكرة:</strong>
                        عندما يكون لدي جداء دالتين ولا توجد قاعدة مباشرة للتكامل، أفكر في
                        <strong> المكاملة بالتجزئة </strong>
                        لأنها تحول الجداء إلى تكامل أبسط.
                    </div>

                    <strong>3. كيف أختار</strong>
                    <span className="math">{"\\(u\\)"}</span>
                    <strong> و </strong>
                    <span className="math">{"\\(v'\\)"}</span>
                    <strong>؟</strong>

                    <br />

                    أختار الجزء الذي يصبح أبسط بعد الاشتقاق ليكون
                    <span className="math">{"\\(u\\)"}</span>
                    ، وأختار الجزء الذي يبقى سهلاً بعد التكامل ليكون
                    <span className="math">{"\\(v'\\)"}</span>.

                    هنا

                    <span className="math">{"\\(\\ln x\\)"}</span>

                    يختفي تعقيده عند الاشتقاق،

                    بينما

                    <span className="math">{"\\(x^2\\)"}</span>

                    سهل التكامل.

                </div>

                <div className="right-col">

                    نضع:

                    <br />

                    <span className="math">
                        {"\\(u(x)=\\ln x\\Rightarrow u'(x)=\\frac1x\\)"}
                    </span>

                    <br />

                    <span className="math">
                        {"\\(v'(x)=x^2\\Rightarrow v(x)=\\frac{x^3}{3}\\)"}
                    </span>

                    <br /><br />

                    بتطبيق قانون المكاملة بالتجزئة:

                    <div className="math-block">
                        {"\\[I=\\left[\\frac{x^3}{3}\\ln x\\right]_1^e-\\int_1^e\\frac{x^2}{3}\\,dx\\]"}
                    </div>

                    نحسب التكامل المتبقي:

                    <div className="math-block">
                        {"\\[I=\\left(\\frac{e^3}{3}-0\\right)-\\left[\\frac{x^3}{9}\\right]_1^e\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[\\begin{aligned}I&=\\frac{e^3}{3}-\\left(\\frac{e^3}{9}-\\frac19\\right)\\\\&=\\frac{2e^3+1}{9}\\end{aligned}\\]"}
                    </div>

                </div>
            </div>

            {/* T */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    أتحقق من نقطتين:

                    <ol style={{ marginTop: "5px", paddingRight: "18px" }}>
                        <li>التجزئة جعلت التكامل الجديد أبسط من التكامل الأصلي، إذن اختيار الأداة كان مناسباً.</li>

                        <li>
                            النتيجة موجبة، وهذا منطقي لأن
                            <span className="math">{"\\(x^2\\ln x\\ge0\\)"}</span>
                            على
                            <span className="math">{"\\([1,e]\\)"}</span>.
                        </li>
                    </ol>
                </div>

                <div className="right-col">

                    <strong>النتيجة النهائية:</strong>

                    <div className="math-block">
                        {"\\[I=\\frac{2e^3+1}{9}\\]"}
                    </div>

                </div>
            </div>

            {/* ============================================================
                EXERCISE 3: Areas
            ============================================================ */}
            <div className="question-header no-break">التمرين 3 — حساب المساحات</div>

            <div className="sub-question">  <span>{"احسب مساحة الحيز المحصور بين منحنى الدالة "}</span>
                <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = e^x - 1\\)"}</span>
                <span>{" ومحور الفواصل والمستقيمين "}</span>
                <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x=0\\)"}</span>
                <span>{" و "}</span>
                <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x=\\ln 2\\)"}</span>
                <span>{"."}</span></div>
            <div className="col-header-row-two">
                <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                <div className="col-header right-h">الحل التفصيلي</div>
            </div>
            {/* M */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label translate">M. الترجمة الرياضية (Math Translate)</span><br />

                    أترجم المعطيات إلى لغة الرياضيات:

                    <ul style={{ marginTop: "5px", paddingRight: "18px" }}>
                        <li>المطلوب حساب <strong>مساحة</strong> وليس مجرد تكامل.</li>
                        <li>المساحة محصورة بين منحنى الدالة ومحور الفواصل.</li>
                        <li>المجال محدد بين
                            <span className="math">{"\\(0\\)"}</span>
                            و
                            <span className="math">{"\\(\\ln2\\)"}</span>.
                        </li>
                    </ul>
                </div>

                <div className="right-col">
                    نمثل المساحة المطلوبة بين المنحنى والمحور على المجال
                    <span className="math">{"\\([0,\\ln2]\\)"}</span>.
                </div>
            </div>

            {/* A */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label goal">A. تحديد الهدف (Aim)</span><br />

                    هدفي هو حساب مساحة هندسية، لذلك يجب أن تكون النتيجة النهائية عدداً موجباً.

                    ولأن المساحة تعتمد على موضع المنحنى، يجب أولاً تحديد إشارة الدالة ثم اختيار صيغة التكامل المناسبة.
                </div>

                <div className="right-col">
                    المساحة تعطى بالعلاقة:

                    <div className="math-block">
                        {"\\[A=\\int_0^{\\ln2}|f(x)|\\,dx\\]"}
                    </div>
                </div>
            </div>

            {/* R */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label data">R. الربط (Relate)</span><br />

                    <div style={{
                        backgroundColor: "#eef2ff",
                        border: "1px dashed #3b82f6",
                        padding: "5px",
                        borderRadius: "5px",
                        marginBottom: "6px",
                        marginTop: "4px",
                        color: "#1e40af",
                        fontSize: "11pt"
                    }}>
                        <strong>1. أحدد الهدف:</strong><br />
                        أريد حساب مساحة، وليس مجرد تكامل.
                    </div>

                    <strong>2. أبحث في أدواتي:</strong><br />

                    أتذكر أن مساحة الحيز المحصور بين منحنى ومحور الفواصل تعطى دائماً بـ

                    <span className="math">
                        {"\\(\\int|f(x)|dx\\)"}
                    </span>.

                    إذن أول سؤال يجب أن أجيب عنه هو:

                    <strong>هل الدالة موجبة أم سالبة على المجال؟</strong>

                    <div style={{
                        backgroundColor: "#eef2ff",
                        border: "1px dashed #3b82f6",
                        padding: "5px",
                        borderRadius: "5px",
                        marginBottom: "6px",
                        marginTop: "6px",
                        color: "#1e40af",
                        fontSize: "11pt"
                    }}>
                        <strong>فكرة:</strong>
                        قبل حذف القيمة المطلقة لا أحسب أي تكامل، بل أحدد إشارة الدالة أولاً.
                    </div>

                    على المجال
                    <span className="math">{"\\([0,\\ln2]\\)"}</span>

                    لدينا

                    <span className="math">{"\\(e^x\\ge1\\)"}</span>

                    وبالتالي

                    <span className="math">{"\\(e^x-1\\ge0\\)"}</span>.

                    إذن المنحنى يقع فوق محور الفواصل، ويمكن حذف القيمة المطلقة.


                </div>

                <div className="right-col">

                    بما أن

                    <span className="math">
                        {"\\(f(x)=e^x-1\\ge0\\)"}
                    </span>

                    على المجال،

                    فإن

                    <div className="math-block">
                        {"\\[A=\\int_0^{\\ln2}(e^x-1)\\,dx\\]"}
                    </div>

                    نحسب:

                    <div className="math-block">
                        {"\\[A=\\left[e^x-x\\right]_0^{\\ln2}\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[A=(e^{\\ln2}-\\ln2)-(e^0-0)\\]"}
                    </div>

                    <div className="math-block">
                        {"\\[A=(2-\\ln2)-1=1-\\ln2\\;(u.a)\\]"}
                    </div>
                    <div style={{
                        background: "#eef6ff",
                        borderRight: "3px solid #2563eb",
                        padding: "6px 10px",
                        borderRadius: "4px",
                        marginTop: "8px",
                        fontSize: "10.8pt"
                    }}>
                        <strong>تذكير:</strong>
                        في مسائل المساحات لا تبدأ بالحساب مباشرة؛ ابدأ دائماً بدراسة الإشارة لأنها هي التي تحدد هل نحذف القيمة المطلقة أم نغير إشارة الدالة.
                    </div>

                </div>
            </div>

            {/* T */}
            <div className="step-row-two">
                <div className="left-col">
                    <span className="phase-label verify">T. التحقق (Test)</span><br />

                    أتحقق من أمرين:

                    <ol style={{ marginTop: "5px", paddingRight: "18px" }}>
                        <li>درست الإشارة قبل حذف القيمة المطلقة، إذن اختيار صيغة التكامل صحيح.</li>

                        <li>
                            النتيجة
                            <span className="math">{"\\(1-\\ln2\\)"}</span>
                            موجبة، وهذا ضروري لأنها تمثل مساحة.
                        </li>
                    </ol>

                    <div style={{
                        backgroundColor: "#eef2ff",
                        border: "1px dashed #3b82f6",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "6px",
                        color: "#1e40af",
                        fontSize: "11pt"
                    }}>
                        <strong>فحص منطقي:</strong>
                        المجال قصير، والمنحنى يبدأ من محور الفواصل، لذلك من الطبيعي أن تكون المساحة موجبة لكنها صغيرة.
                    </div>
                </div>

                <div className="right-col">
                    <strong>النتيجة النهائية:</strong>

                    <div className="math-block">
                        {"\\[A=1-\\ln2\\;(u.a)\\]"}
                    </div>
                </div>
            </div>



        </>
    );
};

export default Solution_DirectQuestions_Integrals;
