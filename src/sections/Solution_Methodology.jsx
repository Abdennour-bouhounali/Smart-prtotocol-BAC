import React from 'react';

const SolutionCard = ({ number, phase, title, children }) => {
    return (
        <div className="radar-box" style={{
            border: '2px solid #16a34a',
            borderRadius: '12px',
            padding: '20px 22px',
            margin: '18px 0',
            background: '#f0fdf4',
            position: 'relative',
            direction: 'rtl',
            textAlign: 'right',
            unicodeBidi: 'plaintext'
        }}>
            <div style={{
                position: 'absolute',
                top: '-14px',
                right: '20px',
                background: '#16a34a',
                color: '#fff',
                borderRadius: '20px',
                padding: '3px 16px',
                fontSize: '11pt',
                fontWeight: 700,
                letterSpacing: '0.04em',
                direction: 'rtl'
            }}>
                حل تمرين {number} — {phase}
            </div>

            <div className="radar-box-title" style={{
                color: '#16a34a',
                borderBottom: '2px solid #bbf7d0',
                paddingBottom: '8px',
                marginBottom: '14px',
                marginTop: '6px',
                textAlign: 'right'
            }}>
                {title}
            </div>

            <div style={{ lineHeight: '1.9', color: '#334155', fontSize: '0.95rem' }}>
                {children}
            </div>
        </div>
    );
};

const Solution_Methodology = () => {
    return (
        <>
            <div id="toc-solution-smart" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>
                حلول تمارين بروتوكول SMART
            </div>

            <SolutionCard number="1" phase="المرحلة الأولى" title="التحليل الشامل للتمرين">

                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>أ. قراءة ذكية للسؤال 3 (التوجيه العكسي):</div>
                <p>
                    السؤال 3 يخبرنا أن للدالة <span className="math">{"\\(f\\)"}</span> قيمة صغرى عند
                    <span className="math">{"\\(x=0\\)"}</span> وأن سلوكها يرتبط بهذه النقطة.
                    هذا يعني أن دراسة المشتقة في السؤال 1 ليست هدفاً مستقلاً، بل يجب أن تكشف عن نقطة حرجة تعطي هذا السلوك.
                </p>

                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>ب. التوقع قبل الحساب:</div>
                <p>
                    بما أن السؤال 3 يحدد وجود سلوك “أدنى قيمة” مرتبط بنقطة معينة،
                    فهذا يعني أن:
                    <span className="math">{"\\(f'(x)\\)"}</span>
                    يجب أن تنعدم عند هذه النقطة، وأن تتغير إشارتها حولها.
                    إذن قبل الحساب، نتوقع شكل عامل في المشتقة يعطي جذراً واضحاً (مثل <span className="math">{"\\(x\\)"}</span> أو <span className="math">{"\\(x-2\\)"}</span>).
                </p>

                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>ج. التحقق بعد الاشتقاق:</div>
                <p>
                    نحسب المشتقة:
                    <br />
                    <span className="math">
                        {"\\(f'(x) = 2x e^{-x} - x^2 e^{-x} = x(2 - x)e^{-x}\\)"}
                    </span>
                    <br />

                    بما أن
                    <span className="math">{"\\(e^{-x} > 0\\)"}</span>
                    فإن إشارة المشتقة تُحدد من:
                    <span className="math">{"\\(x(2-x)\\)"}</span>.
                    <br />

                    إذن تنعدم المشتقة عند:
                    <span className="math">{"\\(x=0\\)"}</span>
                    و
                    <span className="math">{"\\(x=2\\)"}</span>.
                </p>

                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>د. ربط النتيجة بالسؤال 3:</div>
                <p>
                    نلاحظ أن إحدى نقاط الانعدام هي <span className="math">{"\\(x=0\\)"}</span>، وبالتالي:
                    <span className="math">{"\\(f(0)=0\\)"}</span> تمثل قيمة حدية.
                    وهذا ينسجم مع فكرة السؤال 3 أن السلوك العام للدالة يمر بنقطة تحقق قيمة دنيا.
                </p>

                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>هـ. الاستنتاج المنهجي:</div>
                <p>
                    السؤال 3 لم يكن نتيجة نهائية فقط، بل كان “دليل بنية” يخبرنا مسبقاً أن:
                    المشتقة يجب أن تحتوي على عوامل تجعل نقاط الانعدام واضحة،
                    وأن جدول التغيرات يجب أن يفسر وجود قيمة حدية عند تلك النقاط.
                </p>

            </SolutionCard>

            <SolutionCard number="2" phase="المرحلة الثانية" title="ترجمة السؤال إلى رياضيات">
                <ul style={{ paddingRight: '20px' }}>
                    <li><strong>المنحنى يمر من النقطة (2, 3):</strong> <span className="math">{"\\(f(2) = 3\\)"}</span></li>
                    <li><strong>المتتالية محدودة من الأعلى بـ 5:</strong> <span className="math">{"\\(U_n \\leq 5\\)"}</span> لكل <span className="math">{"\\(n\\)"}</span></li>
                    <li><strong>مقارب أفقي y = -2 عند +∞:</strong> <span className="math">{"\\[\\lim_{x \\to +\\infty} f(x) = -2\\]"}</span></li>
                    <li><strong>المستقيم مماس عند النقطة ذات الفاصلة 1:</strong> معادلة المماس هي <span className="math">{"\\(y = f'(1)(x - 1) + f(1)\\)"}</span>، ومعامل التوجيه هو <span className="math">{"\\(f'(1)\\)"}</span></li>
                </ul>
            </SolutionCard>

            <SolutionCard number="3" phase="المرحلة الثانية" title="جرد المعطيات وتصفيتها — متتاليات">
                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>أ. الترجمة الرياضية:</div>
                <p>إثبات أن <span className="math">{"\\(U_{n+1} - U_n < 0\\)"}</span>.</p>
                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>ب. صياغة الهدف:</div>
                <p>الوصول إلى متباينة مبسطة تبين أن الفرق سالب.</p>
                <div style={{ fontWeight: 'bold', color: '#16a34a' }}>ج. تصفية المعطيات:</div>
                <ul>
                    <li><strong>(A) العلاقة التراجعية:</strong> ضروري. لأننا نحتاجه لحساب <span className="math">{"\\(U_{n+1} - U_n\\)"}</span>.</li>
                    <li><strong>(C) نتيجة الجزء 1:</strong> ضروري. لأننا بعد حساب الفرق سنجد <span className="math">{"\\(-\\dfrac{1}{2}U_n + 1\\)"}</span>، ولتحديد إشارته سنحتاج للمعلومة <span className="math">{"\\(U_n > 2\\)"}</span>.</li>
                    <li><em>بقية المعطيات (B, D, E, F, G, H):</em> غير ضرورية لإثبات التناقص في هذه الخطوة.</li>
                </ul>
            </SolutionCard>

            <SolutionCard number="4" phase="المرحلة الثالثة" title="تحديد الهدف الرياضي وكتابته">
                <ul style={{ paddingRight: '20px' }}>
                    <li><strong>السؤال أ:</strong> إثبات أن <span className="math">{"\\(f(2(1) - x) + f(x) = 2(2)\\)"}</span> أي <span className="math">{"\\(f(2 - x) + f(x) = 4\\)"}</span>.</li>
                    <li><strong>السؤال ب:</strong> إثبات أن النسبة <span className="math">{"\\(\\dfrac{V_{n+1}}{V_n} = q\\)"}</span> (حيث q عدد حقيقي ثابت)، أو <span className="math">{"\\(V_{n+1} = q \\cdot V_n\\)"}</span>.</li>
                    <li><strong>السؤال ج:</strong> إيجاد جذر بديهي (مثل <span className="math">{"\\(x=1\\)"}</span>) ثم كتابة الهدف: إيجاد العوامل a, b, c بحيث <span className="math">{"\\(x^3 - 3x + 2 = (x - 1)(ax^2 + bx + c)\\)"}</span>.</li>
                </ul>
            </SolutionCard>

            <SolutionCard number="5" phase="المرحلة الرابعة" title="ترتيب خطوات الحل (متتاليات)">
                <p>الترتيب المنهجي الصحيح هو:</p>
                <ol style={{ paddingRight: '20px' }}>
                    <li><strong>ترجمة السؤال:</strong> اقرأ السؤال وترجمه: "متناقصة" ⇔ <span className="math">{"\\(U_{n+1} - U_n < 0\\)"}</span>.</li>
                    <li><strong>كتابة الهدف:</strong> نريد إثبات <span className="math">{"\\(U_{n+1} - U_n < 0\\)"}</span>.</li>
                    <li><strong>التحقق العددي:</strong> احسب <span className="math">{"\\(U_1 = 3\\)"}</span> لترى أن <span className="math">{"\\(U_1 < U_0\\)"}</span> وهذا يعطيك ثقة في المسار.</li>
                    <li><strong>الحساب الجبري:</strong> احسب <span className="math">{"\\(U_{n+1} - U_n = -\\dfrac{U_n}{2} + 1\\)"}</span>.</li>
                    <li><strong>الاستنتاج:</strong> استنتج إشارة الفرق معتمداً على <span className="math">{"\\(U_n > 2\\)"}</span>.</li>
                </ol>
            </SolutionCard>

            <SolutionCard number="6" phase="المرحلة الرابعة — التقنيات" title="اختيار التقنية المناسبة">
                <ul style={{ paddingRight: '20px' }}>
                    <li><strong>الحالة أ (متباينة دوال):</strong> استخدام <em>الدالة المساعدة</em>. نعرّف <span className="math">{"\\(g(x) = \\ln(x) - x + 1\\)"}</span> وندرس تغيراتها لإثبات أنها سالبة.</li>
                    <li><strong>الحالة ب (حالة عدم تعيين ):</strong> استخدام تقنية <em>الإضافة والاختزال (الضرب في المرافق)</em> للتخلص من الجذور في البسط.</li>
                    <li><strong>الحالة ج (مجموع متتالية):</strong> هنا التقنية هي <em>الاستدلال بالتراجع</em> أو استغلال مجموع حدود متتالية حسابية.</li>
                    <li><strong>الحالة د (مجموع تربيعي معقد):</strong> استخدام <em>تغيير المتغير</em>. نلاحظ أن <span className="math">{"\\(U_n - 1 = 3^n\\)"}</span>، فنتعامل مع المربع بعد تبسيط المتتالية.</li>
                </ul>
            </SolutionCard>

            <SolutionCard number="7" phase="المرحلة الخامسة" title="التحقق المنطقي — صحيح أم خاطئ؟">
                <ul style={{ paddingRight: '20px' }}>
                    <li><strong>السؤال 1 (جدول التغيرات):</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>خاطئ</span>. لا يمكن لدالة أن تنزل إلى +∞، النهاية الكبرى لا تكون أسفل قيمة عظمى. تناقض صارخ.</li>
                    <li><strong>السؤال 2 (النهايات والقيمة المطلقة):</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>خاطئ</span>. عند إخراج <span className="math">{"\\(x^2\\)"}</span> من الجذر يصبح <span className="math">{"\\(|x|\\)"}</span>. وبما أن النهاية عند -∞ فإن <span className="math">{"\\(|x| = -x\\)"}</span>، وبالتالي النهاية الصحيحة هي -1.</li>
                    <li><strong>السؤال 3 (المعادلات اللوغاريتمية):</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>خاطئ</span>. شرط تعريف المعادلة هو <span className="math">{"\\(x - 1 > 0\\)"}</span> و <span className="math">{"\\(x - 2 > 0\\)"}</span> أي <span className="math">{"\\(x > 2\\)"}</span>. الحل <span className="math">{"\\(x = 0\\)"}</span> مرفوض، والحل الوحيد هو <span className="math">{"\\(S=\\{3\\}\\)"}</span>.</li>
                    <li><strong>السؤال 4 (خلط الاستقلالية بالتنافي):</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>خاطئ</span>. الاستقلالية تعني <span className="math">{"\\(P(A \\cap B) = P(A)P(B) = 0.12\\)"}</span>. التقاطع لا ينعدم! الحساب الصحيح: <span className="math">{"\\(P(A \\cup B) = 0.4 + 0.3 - 0.12 = 0.58\\)"}</span>.</li>
                </ul>
            </SolutionCard>


        </>
    );
};

export default Solution_Methodology;
