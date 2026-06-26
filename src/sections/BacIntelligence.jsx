import React from 'react';
// BacIntelligence.jsx
// Helper component: renders LaTeX inline via KaTeX auto-render delimiters
const M = ({ children }) => (
    <span dangerouslySetInnerHTML={{ __html: children }} />
);

const BacIntelligence = () => {
    return (
        <>
            <div id="toc-bac" className="exercise-title" style={{ marginBottom: '20px', textAlign: 'center', direction: 'rtl' }}>
                التحليل الاستراتيجي لأسئلة البكالوريا
            </div>

            <div className="exercise-statement" style={{ fontSize: '1.1rem', lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', direction: 'rtl', marginBottom: '30px' }}>
                <p style={{ marginBottom: '10px' }}>
                    أسئلة البكالوريا ليست عشوائية، بل تعتمد على أفكار وأنماط تتكرر من سنة إلى أخرى. لكل سؤال هدف رياضي محدد، ولكل عبارة ترجمة ذهنية تساعد على فهم المطلوب بسرعة.
                </p>
                <p style={{ marginBottom: '10px' }}>
                    في هذا القسم، قمنا بتحليل مواضيع البكالوريا من 2008 إلى 2023، و استخراج لكل سؤال:
                </p>
                <ul style={{ paddingRight: '30px', marginBottom: '10px', listStyleType: 'disc' }}>
                    <li><strong>الترجمة الرياضية</strong> .</li>
                    <li><strong>الاستراتيجية المناسبة</strong> للحل.</li>
                </ul>
                <p style={{ marginBottom: '0', fontWeight: 'bold', color: '#0f172a' }}>
                    الهدف ليس حفظ الحلول، بل تعلم طريقة التفكير والتحليل أثناء التعامل مع التمارين الرياضية.
                </p>
            </div>
            <div id="toc-bac-functions" className="question-header">🔹 الدوال العددية</div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نبرهن أن المستقيم <M>{`\\(\\Delta\\)`}</M> مقارب مائل للمنحنى <M>{`\\((C_f)\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0\\]`}</M></div>
                <div className="right-col">نعيد كتابة <M>{`\\(f(x)\\)`}</M> على الشكل <M>{`\\(ax+b+g(x)\\)`}</M> (بالتحليل أو القسمة)، ثم ندرس نهاية <M>{`\\(g(x)\\)`}</M> عند المالانهاية. إذا كانت تؤول للصفر، فالمقارب المائل محقق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف ندرس الوضع النسبي للمنحنى <M>{`\\((C_f)\\)`}</M> بالنسبة للمستقيم <M>{`\\(\\Delta\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(f(x) - y_\\Delta \\gtrless 0\\)`}</M> (إشارة الفرق على المجال)</div>
                <div className="right-col">نطرح معادلة المستقيم من الدالة ثم ندرس إشارة الفرق من جدول الإشارات. موجب: المنحنى فوق، سالب: تحت، منعدم: تقاطع.</div>
            </div>
            <div className="step-row">
                <div className="left-col">  بين أن <M>{`\\((C_f)\\)`}</M> يقبل مركز تناظر <M>{`\\(\\Omega\\)`}</M>(a; b)</div>
                <div className="mid-col"><M>{`\\(f(2a-x) + f(x) = 2b\\)`}</M></div>
                <div className="right-col">يجب التحقق أولاً أن <M>{`\\((2a-x)\\)`}</M> ينتمي لمجال التعريف، ثم الحساب بتبسيط الطرف الأيسر لتصل للثابت <M>{`\\(2b\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نبرهن أن المعادلة <M>{`\\(f(x) = 0\\)`}</M> تقبل حلاً وحيداً <M>{`\\(\\alpha\\)`}</M> في <M>{`\\([a, b]\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(f(a) \\times f(b) < 0\\)`}</M> مع رتابة <M>{`\\(f\\)`}</M> على <M>{`\\([a, b]\\)`}</M></div>
                <div className="right-col">ثلاث شروط ذهبية: نتحقق من استمرارية <M>{`\\(f\\)`}</M>، ثم رتابتها التامة (ندرس المشتقة)، ثم اختلاف إشارة الصورتين. مبرهنة القيم المتوسطة تضمن وجود الحل ووحدانيته.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المنحنى <M>{`\\((C_f)\\)`}</M> يقبل مماساً <M>{`\((T)\)`}</M> يوازي المستقيم <M>{`\\(D\\)`}</M></div>
                <div className="mid-col"><M>{`\\(f'(x_0) = a\\)`}</M> (حيث a ميل D)</div>
                <div className="right-col">البحث عن فاصلة نقطة التماس <M>{`\\(x_0\\)`}</M>. نحل المعادلة المشتقة تساوي الميل، ثم نكتب معادلة المماس عند تلك النقطة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نبرهن أن <M>{`\\((C_f)\\)`}</M> يقبل مماساً عمودياً عند <M>{`\\(x_0\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\[\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = \\pm\\infty\\]`}</M></div>
                <div className="right-col">نحسب نهاية نسبة التزايد عند <M>{`\\(x_0\\)`}</M>. إذا كانت النهاية <M>{`\\(\\pm\\infty\\)`}</M>، فالدالة غير قابلة للاشتقاق هناك والمماس عمودي معادلته <M>{`\\(x = x_0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المنحنى <M>{`\\((C_f)\\)`}</M> يقطع محور الفواصل في نقطتين فاصلتاهما <M>{`\\(\\alpha\\)`}</M> و <M>{`\\(\\beta\\)`}</M></div>
                <div className="mid-col">حلان للمعادلة <M>{`\\(f(x) = 0\\)`}</M></div>
                <div className="right-col">استخدام نظرية القيم المتوسطة مرتين في مجالين مختلفين، أو تحليل العبارة إذا كانت كثيرة حدود.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(f\\)`}</M> دالة زوجية</div>
                <div className="mid-col"><M>{`\\(f(-x) = f(x)\\)`}</M> والمجال متناظر بالنسبة لـ 0</div>
                <div className="right-col">التناظر المحوري بالنسبة لمحور التراتيب. تستخدم لاختصار دراسة الدالة على نصف المجال.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(f\\)`}</M> دالة فردية</div>
                <div className="mid-col"><M>{`\\(f(-x) = -f(x)\\)`}</M> والمجال متناظر بالنسبة لـ 0</div>
                <div className="right-col">التناظر المركزي بالنسبة لمبدأ المعلم O. المنحنى يمر من المبدأ غالباً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين نقط تقاطع <M>{`\\((C_f)\\)`}</M> مع محور التراتيب</div>
                <div className="mid-col">حساب <M>{`\\(f(0)\\)`}</M></div>
                <div className="right-col">النقطة هي دائماً <M>{`\\((0;\\ f(0))\\)`}</M> بشرط أن 0 ينتمي لمجال التعريف.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\((C_f)\\)`}</M> يقبل نقطة انعطاف <M>{`\\(A\\)`}</M></div>
                <div className="mid-col">

                    <M>{`\\(f''(x_0) = 0\\)`}</M> أو تكون غير معرفة عند <M>{`\\(x_0\\)`}</M>  بشرط انتمائها لمجال تعريف الدالة مع <strong>تغيير الإشارة</strong>



                </div>
                <div className="right-col">نشتق الدالة مرتين . النقطة التي تنعدم عندها المشتقة الثانية وتغير إشارتها هي نقطة انعطاف (تغير التقعر). حالة خاصة : <M>{`\\(f'(x_0) = 0\\)`}</M> و لا تغير الاشارة عند <M>{`\\(x_0\\)`}</M> تعطي نقطة انعطاف افقية</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نثبت أن <M>{`\\(f(x)\\)`}</M> تكتب بالشكل <M>{`\\(ax + b + \\dfrac{c}{x-d}\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(f(x) = ax + b + \\dfrac{c}{x-d}\\)`}</M> (مطابقة المعاملات)</div>
                <div className="right-col">نجري القسمة الإقليدية على الكسر أو نوحد المقامات في الطرف الأيمن، ثم نطابق مع صورة <M>{`\\(f(x)\\)`}</M> الأصلية للحصول على قيم a, b, c.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نبين أن <M>{`\\((C_f)\\)`}</M> يقبل مماسين ميلهما يساوي <M>{`\\(k\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(f'(x) = k\\)`}</M> لها حلان مختلفان</div>
                <div className="right-col">نحل المعادلة <M>{`\\(f'(x) = k\\)`}</M>؛ عدد حلولها يعطي عدد المماسات. إذا وجد حلان <M>{`\\(x_1, x_2\\)`}</M> نكتب معادلتي المماسين بالقانون <M>{`\\(y = k(x - x_i) + f(x_i)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ناقش بيانياً حسب قيم m عدد حلول المعادلة <M>{`\\(f(x) = m\\)`}</M></div>
                <div className="mid-col">تقاطع <M>{`\\((C_f)\\)`}</M> مع المستقيم الأفقي <M>{`\\(y = m\\)`}</M></div>
                <div className="right-col">المسح العمودي من الأسفل للأعلى. الحلول هي فواصل نقط التقاطع.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ناقش بيانياً حلول المعادلة <M>{`\\(f(x) = x + m\\)`}</M></div>
                <div className="mid-col">تقاطع <M>{`\\((C_f)\\)`}</M> مع مستقيم مائل ميله 1</div>
                <div className="right-col">الإزاحة الموازية للمستقيم <M>{`\\(y = x\\)`}</M>. نراقب نقاط التماس والمقاربات الموازية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المنحنى <M>{`\\((C_f)\\)`}</M> تحت المستقيم المقارب <M>{`\\(\\Delta\\)`}</M></div>
                <div className="mid-col"><M>{`\\(f(x) - y_\\Delta < 0\\)`}</M></div>
                <div className="right-col">دراسة الإشارة ضرورية. لا تكتفِ بالتعويض بقيم، يجب برهانها لمجال كامل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين القيم الحدية للدالة <M>{`\\(f\\)`}</M></div>
                <div className="mid-col">نبحث عن انعدام المشتقة <M>{`\\(f'(x)=0\\)`}</M> وتغيير إشارتها</div>
                <div className="right-col">القيمة الكبرى أو الصغرى المحلية. تظهر في جدول التغيرات كـ "قمة" أو "قاع".</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الدالة متزايدة تماماً على المجال <M>{`\\([a, b]\\)`}</M></div>
                <div className="mid-col"><M>{`\\(f'(x) > 0\\)`}</M> لكل <M>{`\\(x \\in [a, b]\\)`}</M></div>
                <div className="right-col">دراسة إشارة المشتقة. إذا كانت المشتقة موجبة في كل نقطة، فالدالة متزايدة تماماً على المجال <M>{`\\([a, b]\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رسم المنحنى <M>{`\\((C_g)\\)`}</M> انطلاقاً من <M>{`\\((C_f)\\)`}</M> بانسحاب</div>
                <div className="mid-col"><M>{`\\(g(x) = f(x-a) + b\\)`}</M></div>
                <div className="right-col"><M>{`\\((C_g)\\)`}</M> هو صورة <M>{`\\((C_f)\\)`}</M> بالانسحاب الذي شعاعه <M>{`\\(\\vec{v}(a;\\ b)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المنحنى <M>{`\\((C_f)\\)`}</M> يمر بالنقطة <M>{`\(A(x, y)\)`}</M></div>
                <div className="mid-col">التحقق من <M>{`\\(f(x) = y\\)`}</M></div>
                <div className="right-col">تعويض فاصلة النقطة في دستور الدالة والتأكد من الحصول على ترتيبتها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معامل توجيه المماس عند <M>{`\\(x = 0\\)`}</M></div>
                <div className="mid-col">حساب <M>{`\\(f'(0)\\)`}</M></div>
                <div className="right-col">التعويض المباشر في عبارة المشتقة لإيجاد ميل المماس عند تقاطع محور التراتيب.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الدالة <M>{`\\(f\\)`}</M> أصلية للدالة <M>{`\\(g\\)`}</M></div>
                <div className="mid-col"><M>{`\\(f'(x) = g(x)\\)`}</M></div>
                <div className="right-col">اشتقاق <M>{`\\(f\\)`}</M> والتحقق من تطابقها مع <M>{`\\(g\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين صور الأعداد 1، 2، 3 بالدالة <M>{`\\(f\\)`}</M></div>
                <div className="mid-col">حساب <M>{`\\(f(1),\\ f(2),\\ f(3)\\)`}</M></div>
                <div className="right-col">تعويض القيم في عبارة الدالة. تساعد في رسم المنحنى بدقة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نبين أن المنحنى يقبل مماساً موازياً لمحور الفواصل؟</div>
                <div className="mid-col"><M>{`\\(f'(x_0) = 0\\)`}</M> لقيمة <M>{`\\(x_0\\)`}</M> في مجال التعريف</div>
                <div className="right-col">نحل المعادلة <M>{`\\(f'(x) = 0\\)`}</M>. إذا وجد حل <M>{`\\(x_0\\)`}</M>، فالمماس عند النقطة <M>{`\\((x_0, f(x_0))\\)`}</M> أفقي معادلته <M>{`\\(y = f(x_0)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رسم المنحنى <M>{`\\((C_h)\\)`}</M> حيث <M>{`\\(h(x) = |f(x)|\\)`}</M></div>
                <div className="mid-col">تطبيق التناظر المحوري بالنسبة لمحور الفواصل</div>
                <div className="right-col">نحتفظ بالجزء من <M>{`\\((C_f)\\)`}</M> الموجود فوق محور الفواصل، ونناظر الجزء الموجود تحته بالنسبة لمحور الفواصل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رسم المنحنى <M>{`\\((C_h)\\)`}</M> حيث <M>{`\\(h(x) = f(|x|)\\)`}</M></div>
                <div className="mid-col">استغلال خاصية الدالة الزوجية</div>
                <div className="right-col">نحتفظ بالجزء من <M>{`\\((C_f)\\)`}</M> من أجل <M>{`\\(x \\geq 0\\)`}</M> (يمين محور التراتيب)، ونناظره بالنسبة لمحور التراتيب لاستنتاج الجزء الأيسر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل المعادلة التفاضلية <M>{`\\(y' = ay + b\\)`}</M></div>
                <div className="mid-col">تطبيق قانون الحل العام</div>
                <div className="right-col">الحلول هي الدوال من الشكل <M>{`\\(y(x) = C \\cdot e^{ax} - \\dfrac{b}{a}\\)`}</M> حيث <M>{`\\(C\\)`}</M> ثابت حقيقي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المعادلة <M>{`\\(f(x) = x\\)`}</M> تقبل حلاً وحيداً</div>
                <div className="mid-col">مبرهنة القيم المتوسطة على دالة مساعدة</div>
                <div className="right-col">نعتبر الدالة المساعدة <M>{`\\(g(x) = f(x) - x\\)`}</M> وندرس رتابتها ونطبق مبرهنة القيم المتوسطة على المعادلة <M>{`\\(g(x) = 0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ناقش بيانياً حسب قيم m عدد وإشارة حلول المعادلة <M>{`\\(f(x) = f(m)\\)`}</M></div>
                <div className="mid-col">مناقشة أفقية بدلالة وسيط دالي</div>
                <div className="right-col">المستقيم <M>{`\\(y = f(m)\\)`}</M> هو مستقيم أفقي. نمسح البيان أفقياً ونقرأ الحلول، ثم نستنتج قيم m من خلال إسقاط قيم <M>{`\\(f(m)\\)`}</M> على محور الفواصل باستخدام الدالة العكسية بيانيا.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المنحنى لا يقطع محور تناظره إلا في نقطة وحيدة</div>
                <div className="mid-col">حل المعادلة <M>{`\\(f(x) = y_{\\text{axis}}\\)`}</M></div>
                <div className="right-col">إذا كانت الدالة زوجية ومحور التناظر هو محور التراتيب، فإنها تقطعه فقط في النقطة <M>{`\\((0, f(0))\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المماس يقطع المنحنى عند نقطة التماس</div>
                <div className="mid-col">دراسة إشارة الفرق <M>{`\\(f(x) - y_T\\)`}</M> بجوار نقطة التماس</div>
                <div className="right-col">إذا كان الفرق يغير إشارته عند نقطة التماس، فإن المماس يخترق المنحنى، والنقطة هي نقطة انعطاف حتمية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن جميع المماسات <M>{`\\((T_m)\\)`}</M> تشمل نقطة ثابتة مستقلة عن m</div>
                <div className="mid-col">كتابة معادلة المماس وفصل الوسيط m</div>
                <div className="right-col">نكتب <M>{`\\(y - f'(x_0)(x-x_0) - f(x_0) = 0\\)`}</M> ونجمع الحدود المضروبة في m وحدها. النقطة الثابتة تعدم معامل m والجزء المتبقي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تقاطع منحنيين <M>{`\\((C_f)\\)`}</M> و <M>{`\\((C_g)\\)`}</M></div>
                <div className="mid-col">حل المعادلة <M>{`\\(f(x) = g(x)\\)`}</M></div>
                <div className="right-col">الفواصل هي الحلول، ولإيجاد التراتيب نعوض الفواصل في إحدى الدالتين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ناقش دورانياً حسب <M>{`\\(m\\)`}</M> حلول <M>{`\\(f(x) = mx\\)`}</M></div>
                <div className="mid-col">تقاطع مع مستقيمات تمر من المبدأ ميلها <M>{`\\(m\\)`}</M></div>
                <div className="right-col">المستقيمات تدور حول المبدأ. نراقب المماسات التي تمر من المبدأ والمقاربات لتحديد مجالات <M>{`\\(m\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج معادلة المماس للدالة <M>{`\\(g(x) = f(ax+b)\\)`}</M></div>
                <div className="mid-col">تطبيق قاعدة مشتقة مركب واستغلال مماس <M>{`\\(f\\)`}</M></div>
                <div className="right-col">الميل الجديد هو <M>{`\\(a \\cdot f'(ax_0+b)\\)`}</M> ونقطة التماس تستنتج بتعويض <M>{`\\(x_0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت وجود نقطة تماس مشتركة بين <M>{`\\((C_f)\\)`}</M> و <M>{`\\((C_g)\\)`}</M></div>
                <div className="mid-col">حل الجملة: <M>{`\\(f(x)=g(x)\\)`}</M> و <M>{`\\(f'(x)=g'(x)\\)`}</M></div>
                <div className="right-col">المنحنيان يتقاطعان في نقطة ولهما نفس الميل (نفس المماس) في تلك النقطة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احصر الحل <M>{`\\(\\alpha\\)`}</M> بدقة <M>{`\\(\\epsilon\\)`}</M> (طريقة التنصيف)</div>
                <div className="mid-col">حساب مركز المجال واختبار إشارة الصورة</div>
                <div className="right-col">نقسم المجال <M>{`\\([a,b]\\)`}</M> على 2، ونحسب صورة المنتصف لتقليص المجال الذي يحوي <M>{`\\(\\alpha\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف ندرس الوضع النسبي بين منحنيين حين يصعب تحليل الفرق مباشرة؟</div>
                <div className="mid-col"><M>{`\\(h(x) = f(x) - g(x) \\gtrless 0\\)`}</M> على المجال</div>
                <div className="right-col">نعتبر <M>{`\\(h(x) = f(x) - g(x)\\)`}</M> دالة مستقلة ندرس تغيراتها (نشتقها ونملأ الجدول) لتحديد إشارتها على كل مجال فرعي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نستغل متراجحة أثبتناها مسبقاً <M>{`\\(f(x) \\ge 2x\\)`}</M> لاستنتاج نتيجة جديدة؟</div>
                <div className="mid-col"><M>{`\\(f(x) \\ge 2x\\)`}</M> (نتيجة جاهزة من جزء سابق)</div>
                <div className="right-col">هذا النمط كلاسيكي في البكالوريا: الجزء الأخير يطلب استنتاج وضع نسبي أو نهاية متتالية باستخدام متراجحة تم إثباتها في جزء سابق مباشرة دون حسابات جديدة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رسم المنحنى للدالة العكسية <M>{`\\(f^{-1}\\)`}</M></div>
                <div className="mid-col">التناظر بالنسبة للمنصف الأول <M>{`\\(y=x\\)`}</M></div>
                <div className="right-col">النقطة <M>{`\\((x,y)\\)`}</M> تصبح <M>{`\\((y,x)\\)`}</M> والمماس الأفقي يصبح مماسًا عموديًا.</div>
            </div>
            <div className="step-row">
                <div className="left-col">برهن وجود مماسين متوازيين لدالة فردية</div>
                <div className="mid-col">التحقق من <M>{`\\(f'(x) = f'(-x)\\)`}</M></div>
                <div className="right-col">مشتقة الدالة الفردية هي دالة زوجية، وبالتالي النقطتان المتناظرتان لهما نفس الميل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رسم المنحنى <M>{`\\(y = f(x+a) + b\\)`}</M></div>
                <div className="mid-col">انسحاب شعاعه <M>{`\\(\\vec{V}(-a, b)\\)`}</M></div>
                <div className="right-col">عكس إشارة <M>{`\\(a\\)`}</M> داخل القوس ونفس إشارة <M>{`\\(b\\)`}</M> خارجه لتحديد شعاع الانسحاب.</div>
            </div>


            <div id="toc-bac-limits" className="question-header">🔹 النهايات</div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب نهايات <M>{`\\(f\\)`}</M> عند أطراف مجموعة تعريفها</div>
                <div className="mid-col"><M>{`\\[\\lim f(x)\\]`}</M> عند <M>{`\\(\\pm\\infty\\)`}</M> وعند القيم الممنوعة</div>
                <div className="right-col">تحديد نوع المقاربات (أفقية أو عمودية) بناءً على النتائج.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أزل حالة عدم التعيين</div>
                <div className="mid-col"><M>{`\\(\\dfrac{\\infty}{\\infty},\\ \\dfrac{0}{0},\\ 0\\times\\infty,\\ +\\infty-\\infty\\)`}</M></div>
                <div className="right-col">استراتيجيات: التحليل والمقارنة (أكبر أس)، المرافق (في الجذور)، أو التزايد المقارن (في الأسية واللوغاريتمية).</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المستقيم ذو المعادلة <M>{`\\(x\\)`}</M>=a مقارب عمودي للتمثيل البياني</div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to a^{\\pm}} f(x) = \\pm\\infty\\]`}</M></div>
                <div className="right-col">عادة ما يكون a قيمة تعدم المقام. ندرس النهاية بقيم كبرى وصغرى بجدول إشارة المقام.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المستقيم <M>{`\\(y\\)`}</M>=b مقارب أفقي للمنحنى بجوار اللانهاية</div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to \\pm\\infty} f(x) = b\\]`}</M></div>
                <div className="right-col">دليل على أن الدالة تستقر عند قيمة ثابتة في اللانهاية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استعمل مبرهنة التزايد المقارن </div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to \\infty} \\dfrac{e^x}{x^n} = +\\infty\\]`}</M></div>
                <div className="right-col">المقارنة بين سرعة نمو الدالة الأسية والقوى. الأسية "تغلب" في اللانهاية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب النهاية باستعمال تعريف العدد المشتق</div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to a} \\dfrac{f(x)-f(a)}{x-a} = f'(a)\\]`}</M></div>
                <div className="right-col">تستخدم غالباً لفصل 0/0 في الدوال الدائرية والأسية واللوغاريتمية عند نقطة محددة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(f(x)\\)`}</M> ليس لها نهاية عند <M>{`\\(+\\infty\\)`}</M></div>
                <div className="mid-col">النهاية غير موجودة (تذبذب)</div>
                <div className="right-col">استخدام مبرهنة الحصر أو مقارنتها بدوال جيبية تتغير قيمها باستمرار.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب نهاية الدالة المركبة <M>{`\\(f(g(x))\\)`}</M></div>
                <div className="mid-col">مبرهنة نهاية مركب دالتين</div>
                <div className="right-col">نضع <M>{`\\(u = g(x)\\)`}</M>، فإذا كان <M>{`\\[\\lim g(x) = L\\]`}</M>، نحسب <M>{`\\[\\lim_{u \\to L} f(u)\\]`}</M></div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب النهاية بـ "مبرهنة الحصر" </div>
                <div className="mid-col"><M>{`\\(g(x) \\leq f(x) \\leq h(x)\\)`}</M></div>
                <div className="right-col">إذا كانت نهاية <M>{`\\(g\\)`}</M> و <M>{`\\(h\\)`}</M> متساويتين (<M>{`\\(L\\)`}</M>)، فإن نهاية <M>{`\\(f\\)`}</M> هي <M>{`\\(L\\)`}</M> بالضرورة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">أثبت أن <M>{`\\[\\lim_{x \\to -\\infty} x \\cdot e^x = 0
\\]`}</M></div>
                <div className="mid-col">تزايد مقارن عند <M>{`\\(-\\infty\\)`}</M></div>
                <div className="right-col">تغيير المتغير <M>{`\\(X = -x\\)`}</M> يقلب المسألة لتصبح تزايداً مقارناً شهيراً عند <M>{`\\(+\\infty\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية <M>{`\\(\\dfrac{\\sqrt{x^2+1}}{x}\\)`}</M> عند <M>{`\\(+\\infty\\)`}</M></div>
                <div className="mid-col">إخراج <M>{`\\(x\\)`}</M> كعامل مشترك</div>
                <div className="right-col">نخرج <M>{`\\(|x|\\)`}</M> من تحت الجذر، وبما أننا بجوار <M>{`\\(+\\infty\\)`}</M> فإن <M>{`\\(|x|=x\\)`}</M> وتختزل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين نهاية <M>{`\\(f(x) = e^x - x\\)`}</M> عند <M>{`\\(+\\infty\\)`}</M></div>
                <div className="mid-col">استخراج الأسية كعامل مشترك</div>
                <div className="right-col">تصبح <M>{`\\(e^x \\left(1 - \\dfrac{x}{e^x}\\right)\\)`}</M>، وبحسب التزايد المقارن النهاية هي <M>{`\\(+\\infty\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد نهاية <M>{`\\(x \\cdot \\ln(x)\\)`}</M> عند 0</div>
                <div className="mid-col">نهاية شهيرة = 0</div>
                <div className="right-col"> دائماً: "الصفر يغلب اللوغاريتم عند الصفر".</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس الفروع اللانهائية للمنحنى <M>{`\\((C_f)\\)`}</M></div>
                <div className="mid-col">حساب <M>{`\\[\\lim_{x \\to \\pm\\infty} \\dfrac{f(x)}{x}\\]`}</M></div>
                <div className="right-col">
                    إذا كانت النهاية 0 فهو فرع مكافئ لمحور الفواصل،
                    وإذا كانت <M>{`\\(\\pm\\infty\\)`}</M> فهو فرع مكافئ لمحور التراتيب،
                    وإذا كانت <M>{`\\(a\\)`}</M> نحسب <M>{`\\[\\lim [f(x)-ax]\\]`}</M>
                </div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب النهاية  <M>{`\\[\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\dfrac{1}{x}\\right)\\]`}</M></div>
                <div className="mid-col">تغيير المتغير والعودة لنهاية شهيرة</div>
                <div className="right-col">نضع <M>{`\\(t = \\dfrac{1}{x}\\)`}</M>، فتؤول <M>{`\\(t\\)`}</M> إلى الصفر، وتصبح النهاية <M>{`\\[\\lim_{t \\to 0} \\dfrac{\\ln(1+t)}{t} = 1\\]`}</M> (فخ بكالوريا متكرر).</div>
            </div>

            <div className="step-row">
                <div className="left-col">أزل حالة عدم التعيين 0/0 لكثيرة حدود</div>
                <div className="mid-col">التحليل باستخدام القسمة الإقليدية أو هورنر</div>
                <div className="right-col">إذا انعدم بسط ومقام عند <M>{`\\(a\\)`}</M>، نقسم كلاهما على <M>{`\\((x-a)\\)`}</M> ثم نختزل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استخدم المرافق مرتين لإزالة حالة <M>{`\\(\\infty - \\infty\\)`}</M></div>
                <div className="mid-col">ضرب وقسمة بالمرافق متتالياً</div>
                <div className="right-col">تستخدم مع الجذور المربعة المعقدة حيث التحليل البسيط لا ينفع.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية تتضمن القيمة المطلقة عند الصفر</div>
                <div className="mid-col">دراسة النهاية يميناً ويساراً</div>
                <div className="right-col">من اليمين نكتب <M>{`\\(x\\)`}</M> ومن اليسار نكتب <M>{`\\(-x\\)`}</M>، وإذا اختلفتا فالنهاية غير موجودة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية تتضمن <M>{`\\(e^{-x}\\)`}</M> عند <M>{`\\(-\\infty\\)`}</M></div>
                <div className="mid-col">استخراج العامل المشترك الأقوى</div>
                <div className="right-col">الخطأ الشائع هو استخراج <M>{`\\(x\\)`}</M>. الأصح استخراج <M>{`\\(e^{-x}\\)`}</M> لأنه الأقوى عند <M>{`\\(-\\infty\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية <M>{`\\(\\dfrac{\\ln(x)}{x^n}\\)`}</M> عند <M>{`\\(+\\infty\\)`}</M></div>
                <div className="mid-col">نهاية شهيرة = 0</div>
                <div className="right-col">القوة دائماً تغلب اللوغاريتم في المالانهاية، مهما كان الأس موجباً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية كسر يحوي أسية وكثيرة حدود عند <M>{`\\(+\\infty\\)`}</M></div>
                <div className="mid-col">استخراج الأسية كعامل مشترك بسطاً ومقاماً</div>
                <div className="right-col">يساعد في ظهور نهايات شهيرة من الشكل <M>{`\\(\\dfrac{x}{e^x}\\)`}</M> التي تؤول للصفر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب النهاية عند نقطة عدم التعريف (المقارب العمودي المزدوج)</div>
                <div className="mid-col">إذا كان المقام تربيعاً <M>{`\\((x-a)^2\\)`}</M></div>
                <div className="right-col">النهاية يميناً ويساراً ستكونان متساويتين (نفس الإشارة + أو -) لأن التربيع موجب دوماً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية <M>{`\\(\\dfrac{\\cos x}{x}\\)`}</M> أو <M>{`\\(\\dfrac{\\sin x}{x}\\)`}</M> عند المالانهاية</div>
                <div className="mid-col">مبرهنة الحصر المطلق</div>
                <div className="right-col">بما أن <M>{`\\(-1 \\le \\cos x \\le 1\\)`}</M>، نقسم على <M>{`\\(x\\)`}</M> ونستنتج أن النهاية هي الصفر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية الفرق <M>{`\\(f(x) - (ax+b)\\)`}</M> في الدالة اللوغاريتمية</div>
                <div className="mid-col">التأكد من المقارب المائل</div>
                <div className="right-col">غالباً ما يطلب استخراج <M>{`\\(x\\)`}</M> من اللوغاريتم وتطبيق خواص <M>{`\\(\\ln(ab)\\)`}</M> للوصول للصفر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن للمنحنى مقارباً مائلاً دون إعطاء معادلته</div>
                <div className="mid-col">كتابة الدالة على الشكل <M>{`\\(f(x) = ax+b + g(x)\\)`}</M></div>
                <div className="right-col">أجرِ القسمة الإقليدية أو فكك الكسر لتستنتج <M>{`\\(y = ax+b\\)`}</M> بنفسك.</div>
            </div>


            <div id="toc-bac-derivatives" className="question-header">🔹 الاشتقاق </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس قابلية اشتقاق <M>{`\\(f\\)`}</M> عند <M>{`\\(x_0\\)`}</M></div>
                <div className="mid-col">
                    <M>{`\\[
  \\begin{aligned}
  \\lim_{\\substack{h \\to 0 \\\\ h > 0}} \\frac{f(x_0 + h) - f(x_0)}{h} &= L \\\\
  \\lim_{\\substack{h \\to 0 \\\\ h < 0}} \\frac{f(x_0 + h) - f(x_0)}{h} &= L
  \\end{aligned}
  \\]`}</M>
                </div>                <div className="right-col">إذا كانت النهاية غير منتهية، الدالة غير قابلة للاشتقاق ولها مماس عمودي. التفسير الهندسي مهم.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الدالة المشتقة هي <M>{`\\(f'(x) = \\dfrac{g(x)}{x^2}\\)`}</M></div>
                <div className="mid-col">تطبيق قواعد اشتقاق الحاصل والمجموع</div>
                <div className="right-col">اشتقاق الكسر: <M>{`\\(\\dfrac{u'v - v'u}{v^2}\\)`}</M>. انتبه لإشارة <M>{`\(g(x)\)`}</M> لأن المقام دائماً موجب.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة المماس عند نقطة فاصلتها 1</div>
                <div className="mid-col">تطبيق القانون <M>{`\\(y = f'(1)(x-1) + f(1)\\)`}</M></div>
                <div className="right-col">أهم قانون في الدوال. يحتاج لحسابين: الميل <M>{`\\(f'(1)\\)`}</M> والصورة <M>{`\\(f(1)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن <M>{`\\(f\\)`}</M> دالة أصلية لـ <M>{`\\(g\\)`}</M> على مجال I</div>
                <div className="mid-col"><M>{`\\(f'(x) = g(x)\\)`}</M> لكل <M>{`\\(x\\)`}</M> من I</div>
                <div className="right-col">لا تضيع الوقت في التكامل إذا كان السؤال يطلب التحقق فقط. اشتق العبارة المعطاة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">اشتق الدالة اللوغاريتمية <M>{`\\(\\ln(u(x))\\)`}</M></div>
                <div className="mid-col"><M>{`\\(\\dfrac{u'(x)}{u(x)}\\)`}</M></div>
                <div className="right-col">تأكد أن الدالة <M>{`\(u(x)\)`}</M> موجبة في المجال. إشارة المشتقة تتبع <M>{`\\(u\\)`}</M>' و <M>{`\\(u\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">اشتق الدالة الأسية <M>{`\\(e^{u(x)}\\)`}</M></div>
                <div className="mid-col"><M>{`\\(u'(x) \\cdot e^{u(x)}\\)`}</M></div>
                <div className="right-col">بما أن الأسية موجبة دوماً، فإن إشارة المشتقة هي إشارة <M>{`\\(u'(x)\\)`}</M>.</div>
            </div>

            <div className="step-row">
                <div className="left-col">عين معامل توجيه المماس عند نقطة تقاطع <M>{`\\((C_f)\\)`}</M> مع حامل محور التراتيب</div>
                <div className="mid-col">حساب <M>{`\\(f'(0)\\)`}</M></div>
                <div className="right-col">النقطة هي دائماً <M>{`\\((0,\\ f(0))\\)`}</M> والميل هو <M>{`\\(f'(0)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(f\\)`}</M> قابلة للاشتقاق على مجال التعريف</div>
                <div className="mid-col">تبرير الاستمرارية والاشتقاق للعمليات</div>
                <div className="right-col">نذكر أن <M>{`\\(f\\)`}</M> عبارة عن مجموع/جداء دوال مرجعية قابلة للاشتقاق (مثل كثيرة حدود، كسر، أسية).</div>
            </div>

            <div className="step-row">
                <div className="left-col">بين أن للدالة مماسًا معامل توجيهه يساوي <M>{`\(k\)`}</M></div>
                <div className="mid-col">حل <M>{`\\(f'(x) = k\\)`}</M></div>
                <div className="right-col">عدد الحلول هو عدد المماسات الممكنة بهذا الميل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">اشتق دالة الجذر <M>{`\\(\\sqrt{u(x)}\\)`}</M></div>
                <div className="mid-col"><M>{`\\(\\dfrac{u'(x)}{2\\sqrt{u(x)}}\\)`}</M></div>
                <div className="right-col">الدالة <M>{`\\(u\\)`}</M> يجب أن تكون موجبة تماماً لضمان قابلية الاشتقاق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج إشارة المشتقة من جدول التغيرات للدالة <M>{`\\(g\\)`}</M></div>
                <div className="mid-col">ملاحظة تزايد وتناقص <M>{`\\(g\\)`}</M></div>
                <div className="right-col">إذا كانت <M>{`\\(g\\)`}</M> دالة مساعدة، فإن إشارتها(فوق أو تحت محور الفواصل) تحدد اتجاه تغير <M>{`\\(f\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد القيمة الحدية الصغرى للدالة</div>
                <div className="mid-col">نقطة انعدام <M>{`\\(f\\)`}</M>' مع تغير من (−) لـ (+)</div>
                <div className="right-col">تمثل "قاع" المنحنى البياني.</div>
            </div>
            <div className="step-row">
                <div className="left-col">فسر هندسيا عدم قابلية الاشتقاق عند <M>{`\\(x_0\\)`}</M></div>
                <div className="mid-col">وجود نقطة زاوية</div>
                <div className="right-col">المنحنى يقبل مماسين نصفين مختلفين عند النقطة ذات الفاصلة <M>{`\\(x_0\\)`}</M>، مما يشكل زاوية. (إذا كانت النهايتان من اليمين واليسار مختلفتين).</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الدالة <M>{`\\(f\\)`}</M> تقبل تمديداً بالاستمرارية عند <M>{`\\(x_0\\)`}</M></div>
                <div className="mid-col">حساب <M>{`\\[\\lim_{x \\to x_0} f(x) = l\\]`}</M> حيث <M>{`\\(l\\)`}</M> عدد حقيقي</div>
                <div className="right-col">بما أن النهاية منتهية، التمديد هو الدالة <M>{`\\(g\\)`}</M> حيث <M>{`\\(g(x) = f(x)\\)`}</M> و <M>{`\\(g(x_0) = l\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس إشارة المشتقة <M>{`\\(f'(x)\\)`}</M> المعقدة جدا</div>
                <div className="mid-col">الاستعانة بدالة مساعدة ثانية <M>{`\\(k(x)\\)`}</M></div>
                <div className="right-col">في بعض البكالوريات، دراسة إشارة المشتقة يتطلب إدخال دالة مساعدة جديدة داخل نفس الجزء، ودراسة تغيراتها لمعرفة إشارتها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس اشتقاقية الدالة المعرفة بمجالين عند نقطة الوصل <M>{`\\(x_0\\)`}</M></div>
                <div className="mid-col">حساب العدد المشتق يميناً ويساراً</div>
                <div className="right-col">يجب أن تكون الدالة مستمرة أولاً، ثم يجب أن يتساوى العدد المشتق من اليمين مع العدد المشتق من اليسار.</div>
            </div>
            <div className="step-row">
                <div className="left-col">اشتقاق دالة تتضمن قيمة مطلقة</div>
                <div className="mid-col">كتابة الدالة دون رمز القيمة المطلقة أولاً</div>
                <div className="right-col">الاشتقاق يختلف حسب المجال. تدرس قابلية الاشتقاق عند نقطة الانعدام للتأكد من وجود نقطة زاوية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن المشتقة تنعدم دون تغيير الإشارة</div>
                <div className="mid-col">التعرف على نقطة الانعطاف الأفقية</div>
                <div className="right-col">المماس في هذه النقطة يكون أفقياً ويخترق المنحنى (مثال <M>{`\\(y = x^3\\)`}</M> عند الصفر).</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت علاقة تفاضلية بين الدالة ومشتقتها</div>
                <div className="mid-col">المعادلات التفاضلية الخفية <M>{`\\(f'(x) = af(x) + b\\)`}</M></div>
                <div className="right-col">نعوض عبارة <M>{`\\(f\\)`}</M> في الطرف الثاني لنثبت أنها تساوي المشتقة، لتسهيل استنتاج دوال أصلية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس إشارة المشتقة الثانية <M>{`\\(f''(x)\\)`}</M></div>
                <div className="mid-col">إثبات وجود نقطة انعطاف مخفية</div>
                <div className="right-col">المشتقة الثانية تتحكم في تقعر المنحنى، وانعدامها مع تغيير الإشارة يعني نقطة انعطاف.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج مشتقة الدالة العكسية <M>{`\\((f^{-1})'(y_0)\\)`}</M></div>
                <div className="mid-col">استخدام العلاقة <M>{`\\(\\dfrac{1}{f'(x_0)}\\)`}</M></div>
                <div className="right-col">حيث <M>{`\\(f(x_0) = y_0\\)`}</M>. المماس للدالة العكسية ميله هو مقلوب ميل الدالة الأصلية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب مشتقة الدالة المركبة المعقدة <M>{`\\(h(x) = f(g(x))\\)`}</M></div>
                <div className="mid-col">تطبيق قانون التسلسل <M>{`\\(g'(x) \\cdot f'(g(x))\\)`}</M></div>
                <div className="right-col">انتبه جيدا: تشتق ما بداخل القوس، وتضربه في مشتقة الدالة الخارجية المطبقة على نفس القوس.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن المشتقة تحافظ على إشارة ثابتة</div>
                <div className="mid-col">حساب المميز أو تجميع المربعات</div>
                <div className="right-col">في كثيرة حدود من الدرجة 2، إذا كان المميز سالباً فالإشارة ثابتة وتتبع معامل <M>{`\\(x^2\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استخدم مبرهنة رول لإثبات انعدام المشتقة</div>
                <div className="mid-col">التحقق من أن <M>{`\\(f(a) = f(b)\\)`}</M></div>
                <div className="right-col">إذا كانت الدالة مستمرة وقابلة للاشتقاق ولها نفس الصورة في نقطتين، فالمشتقة تنعدم حتماً بينهما.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما هو التفسير الهندسي لنهاية نسبة التزايد المتناظرة</div>
                <div className="mid-col"><M>{`\\[\\lim \\dfrac{f(x_0+h)-f(x_0-h)}{2h}\\]`}</M></div>
                <div className="right-col">تمثل العدد المشتق <M>{`\\(f'(x_0)\\)`}</M> وهي تقريب للمماس باستخدام وتر متناظر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب مشتقة دالة تحوي تكاملاً <M>{`\\(F(x) = \\int_a^x f(t) dt\\)`}</M></div>
                <div className="mid-col">تطبيق المبرهنة الأساسية <M>{`\\(F'(x) = f(x)\\)`}</M></div>
                <div className="right-col">الدالة المحددة بالتكامل مشتقتها هي ما بداخل التكامل (بشرط اتصال الدالة المكاملة).</div>
            </div>

            <div id="toc-bac-variations" className="question-header">🔹 دراسة التغيرات </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">شكل جدول تغيرات الدالة <M>{`\\(f\\)`}</M></div>
                <div className="mid-col">تجميع النهايات، المشتقة، والإشارات في جدول واحد</div>
                <div className="right-col">الجدول هو "بطاقة تعريف" الدالة. تأكد من توافق النهايات مع الأسهم (مثلاً: سهم يرتفع من −∞ لـ 5 منطقي).</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج اتجاه تغير الدالة <M>{`\\(g\\)`}</M> حيث <M>{`\\(g(x) = f(x^2)\\)`}</M></div>
                <div className="mid-col">بما أنه استنتاج يعني باستعمال تغيرات الدالة <M>{`\\(f\\)`}</M> , وباستعمال تغيرات الدالة <M>{`\\(x^2\\)`}</M> نستنتج تغيرات الدالة <M>{`\\(g\\)`}</M></div>
                <div className="right-col"><M>{`\\(g\\)`}</M> لها نفس اتجاه <M>{`\\(f\\)`}</M> على <M>{`\\(]0, +\\infty[\\)`}</M> و اتجاه  معاكس ل  <M>{`\\(f\\)`}</M> على <M>{`\\(]-\\infty, 0[\\)`}</M></div>
            </div>
            <div className="step-row">
                <div className="left-col">عين القيم الحدية لـ <M>{`\\(f\\)`}</M> على <M>{`\([0, 2]\)`}</M></div>
                <div className="mid-col">أكبر وأصغر قيمة في جدول التغيرات لهذا المجال</div>
                <div className="right-col">تحقق من أطراف المجال والصور عند انعدام المشتقة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">استنتج إشارة <M>{`\\(f(x)\\)`}</M> من جدول التغيرات</div>
                <div className="mid-col">ملاحظة أماكن عبور الصفر في الصور</div>
                <div className="right-col">إذا كان <M>{`\\(Cf\\)`}</M> تحت محور الفواصل فإن <M>{`\\(f(x) < 0\\)`}</M> و إذا كان Cf فوق محور الفواصل فإن <M>{`\\(f(x) > 0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين حصراً لـ <M>{`\\(f(x)\\)`}</M> على المجال <M>{`\([1, 2]\)`}</M></div>
                <div className="mid-col">استخدام القيمتين الصغرى والكبرى للدالة في هذا الجزء من الجدول</div>
                <div className="right-col">الحصر يكون من الشكل <M>{`\\(f(a) \\leq f(x) \\leq f(b)\\)`}</M> إذا كانت الدالة رتيبة.</div>
            </div>
            <div className="step-row">
                <div className="left-col"> يدرس في الجزء الأول تغيرات و اشارة <M>{`\(g(x)\)`}</M> و يطلب دراسة اشارة و تغيرات <M>{`\\(f(x)\\)`}</M> في الجزء الثاني من التمرين</div>
                <div className="mid-col">استخدام إشارة <M>{`\\(g\\)`}</M> في دراسة تغيرات <M>{`\\(f\\)`}</M></div>
                <div className="right-col">نمط كلاسيكي: "ادرس تغيرات <M>{`\\(g\\)`}</M>" ثم "استنتج إشارة <M>{`\\(g\\)`}</M>" ثم "بين أن <M>{`\(f'(x)\)`}</M> من إشارة <M>{`\\(g\\)`}</M>".</div>
            </div>


            <div className="step-row">
                <div className="left-col">شكل جدول تغيرات الدالة <M>{`\\(h\\)`}</M> حيث <M>{`\\(h(x) = f(-x)\\)`}</M></div>
                <div className="mid-col">استنتاج بالتناظر بالنسبة لمحور التراتيب</div>
                <div className="right-col">نقلب اتجاهات الأسهم في جدول <M>{`\\(f\\)`}</M> ونغير إشارات قيم <M>{`\\(x\\)`}</M>.</div>
            </div>

            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(f\\)`}</M> مستمرة عند 2</div>
                <div className="mid-col"><M>{`\\[\\lim_{x \\to 2} f(x) = f(2)\\]`}</M></div>
                <div className="right-col">التحقق من أن النهاية عند النقطة تساوي صورتها الحقيقية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج اتجاه تغير <M>{`\\(\\dfrac{1}{f(x)}\\)`}</M></div>
                <div className="mid-col">عكس اتجاه تغير <M>{`\\(f\\)`}</M></div>
                <div className="right-col">بشرط أن <M>{`\\(f\\)`}</M> لا تنعدم ولا تغير إشارتها في ذلك المجال.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تغيرات الدالة <M>{`\\(x \\mapsto \\ln(\\cos x)\\)`}</M></div>
                <div className="mid-col">المشتقة هي <M>{`\\(\\dfrac{-\\sin x}{\\cos x} = -\\tan x\\)`}</M></div>
                <div className="right-col">دراسة إشارة <M>{`\\(tan(x)\\)`}</M> في المجال المعطى.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج إشارة الدالة دون أن تنعدم</div>
                <div className="mid-col">استغلال القيمة الحدية الصغرى أو الكبرى</div>
                <div className="right-col">إذا كانت القيمة الحدية الصغرى للدالة موجبة تماماً، فهذا يعني أن الدالة بأكملها موجبة <M>{`\\(f(x) > 0\\)`}</M> (مطب بكالوريا خفي).</div>
            </div>
            <div className="step-row">
                <div className="left-col">شكل جدول التغيرات انطلاقا من التمثيل البياني للمشتقة <M>{`\\((C_{f'})\\)`}</M></div>
                <div className="mid-col">ترجمة الوضع النسبي لـ <M>{`\\((C_{f'})\\)`}</M> إلى إشارة</div>
                <div className="right-col">إذا كان المنحنى المشتق فوق محور الفواصل فالدالة الأصلية متزايدة، وإذا كان تحته فهي متناقصة. نقاط التقاطع مع الفواصل هي الذروات.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج تغيرات دالة من مساحة محصورة <M>{`\\(A(x)\\)`}</M></div>
                <div className="mid-col">التكامل من 0 إلى <M>{`\\(x\\)`}</M> هو دالة متزايدة</div>
                <div className="right-col">بما أن الدالة המكاملة موجبة، فإن المساحة <M>{`\\(A(x)\\)`}</M> تزداد كلما زاد <M>{`\\(x\\)`}</M>، فالدالة متزايدة تماما.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت الرتابة التامة رغم انعدام المشتقة</div>
                <div className="mid-col"><M>{`\\(f'(x) = (x-1)^2 \\ge 0\\)`}</M></div>
                <div className="right-col">إذا انعدمت المشتقة في نقطة معزولة ولم تغير إشارتها، تبقى الدالة رتيبة تماماً (لا توجد ذروة).</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج تغيرات الدالة المربعة <M>{`\\(h(x) = (f(x))^2\\)`}</M></div>
                <div className="mid-col">المشتقة <M>{`\\(h'(x) = 2f'(x)f(x)\\)`}</M></div>
                <div className="right-col">يجب ضرب إشارة المشتقة <M>{`\\(f'\\)`}</M> في إشارة الدالة <M>{`\\(f\\)`}</M> نفسها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس التغيرات واستنتاج أن المعادلة <M>{`\\(f(x) = 0\\)`}</M> مستحيلة</div>
                <div className="mid-col">الدالة متزايدة/متناقصة ولا تقطع الصفر</div>
                <div className="right-col">إذا كانت الدالة متزايدة وقيمتها الحدية العظمى سالبة، فمن المستحيل أن تبلغ الصفر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">شكل جدول تغيرات يتضمن نقطة توقف</div>
                <div className="mid-col">نهاية مجال التعريف المغلق <M>{`\\([a, b]\\)`}</M></div>
                <div className="right-col">الدالة لا تقبل نهاية عند التوقف بل صورة حقيقية، ويتم حساب المشتقة فقط من جهة واحدة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج تغيرات دالة من خلال مشتقتها المكتوبة كجداء دالتين</div>
                <div className="mid-col">استعمال جدول إشارات مركب</div>
                <div className="right-col">إذا كانت <M>{`\\(f'(x) = u(x)v(x)\\)`}</M>، ننشئ جدولاً يضم إشارة <M>{`\\(u\\)`}</M> وإشارة <M>{`\\(v\\)`}</M> لضرب الإشارات.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ناقش تغيرات دالة تتضمن وسيطا <M>{`\\(m\\)`}</M></div>
                <div className="mid-col">المشتقة تنعدم بدلالة <M>{`\\(m\\)`}</M></div>
                <div className="right-col">يجب فصل الحالات حسب إشارة المميز أو حسب موضع <M>{`\\(m\\)`}</M> لتحديد عدد الذروات ومواضعها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استغل التغيرات لإثبات متباينة <M>{`\\(f(x) \\ge x\\)`}</M></div>
                <div className="mid-col">دراسة الدالة <M>{`\\(g(x) = f(x) - x\\)`}</M></div>
                <div className="right-col">تثبت أن <M>{`\\(g\\)`}</M> قيمتها الدنيا هي الصفر، إذن هي موجبة دوما، مما يحقق المتباينة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تغيرات دالة دورية (مثل الجيب وجيب التمام)</div>
                <div className="mid-col">تقليص مجال الدراسة لدور واحد أو نصف دور</div>
                <div className="right-col">ندرس التغيرات في <M>{`\\([0, \\pi]\\)`}</M> ثم نعممها بالتناظر والانسحاب الذي يوافق الدور.</div>
            </div>
            <div className="step-row">
                <div className="left-col">فسر التناقض بين جدول التغيرات وحل معادلة</div>
                <div className="mid-col">اكتشاف خطأ في حساب المشتقة</div>
                <div className="right-col">إذا كان الجدول يقول أن القيم سالبة بينما تجد حلاً لـ <M>{`\\(f(x)=0\\)`}</M>، يجب مراجعة الاشتقاق فوراً.</div>
            </div>

            <div id="toc-bac-sequences" className="question-header">🔹 المتتاليات</div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت بالتراجع أن <M>{`\\(u_n > 2\\)`}</M></div>
                <div className="mid-col">
                    تطبيق نظرية البرهان بالتراجع:

                </div>
                <div className="right-col">
                    <ol style={{ listStyleType: 'decimal', paddingRight: '20px', margin: '0' }}>
                        <li style={{ marginBottom: '5px' }}>حساب <M>{`\\(u_0\\)`}</M> و مقارنته مع 2</li>
                        <li style={{ marginBottom: '5px' }}>
                            نفرض <M>{`\\(u_n > 2\\)`}</M> ثم نحاول الوصول إلى <M>{`\\(u_{n+1} > 2\\)`}</M>
                        </li>
                        <li>
                            ندرس إشارة الفرق <M>{`\\(u_{n+1} - 2\\)`}</M> و نبين أنه موجب تماما
                        </li>
                    </ol>
                </div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية <M>{`\\((V_n)\\)`}</M> المعرفة بدلالة <M>{`\\((u_n)\\)`}</M> هندسية</div>
                <div className="mid-col"> (ثابت) <M>{`\\(\\dfrac{V_{n+1}}{V_n} = q\\)`}</M> </div>
                <div className="right-col">نكتب <M>{`\\(V_{n+1}\\)`}</M> بدلالة <M>{`\\(u_{n+1}\\)`}</M>، نعوض عبارة التراجع، ثم نستخرج عاملاً مشتركاً يظهر فيه <M>{`\\(V_n\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس رتابة المتتالية <M>{`\\((U_n)\\)`}</M></div>
                <div className="mid-col">دراسة إشارة الفرق <M>{`\\(U_{n+1} - U_n\\)`}</M></div>
                <div className="right-col">إذا كان الفرق موجباً فالمتتالية متزايدة. نصيحة: استعمل التحليل أو الحصر السابق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نحسب المجموع <M>{`\\(S_n = v_0 + v_1 + \\cdots + v_n\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(S_n = v_0 \\cdot \\dfrac{1 - q^{n+1}}{1 - q}\\)`}</M> (هندسية) أو <M>{`\\(\\dfrac{(n+1)(v_0+v_n)}{2}\\)`}</M> (حسابية)</div>
                <div className="right-col">انتبه: عدد الحدود هو <M>{`\\(n+1\\)`}</M> (=من 0 إلى n). للهندسية تحقق من <M>{`\\(q \\neq 1\\)`}</M>. للحسابية استخدم خاصية المتوسط الحسابي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج أن (Un) متقاربة</div>
                <div className="mid-col">متزايدة ومحدودة من الأعلى (أو متناقصة و محدودة من الأسفل)</div>
                <div className="right-col">هذا الاستنتاج نظري. لا تطلب منك حساب النهاية هنا بل فقط تبرير وجودها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نعين نهاية <M>{`\\(u_n\\)`}</M> لما يؤول n لـ <M>{`\\(+\\infty\\)`}</M>؟</div>
                <div className="mid-col"><M>{`\\(L = f(L)\\)`}</M> (معادلة النقطة الصامدة)</div>
                <div className="right-col">إذا كانت المتتالية تراجعية ومتقاربة، نهايتها <M>{`\\(L\\)`}</M> تحقق معادلة النقطة الصامدة. نحلها ونختار الجذر المناسب حسب نتائج الحصر السابق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية (Un) محدودة بالعددين 0 و 1</div>
                <div className="mid-col"><M>{`\\(0 < u_n < 1\\)`}</M></div>
                <div className="right-col">تستخدم غالباً في البرهان بالتراجع لحماية الدالة من الخروج عن مجال تعريفها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب الجداء <M>{`\\(P_n = v_0 \\times v_1 \\times \\cdots \\times v_n\\)`}</M></div>
                <div className="mid-col">استعمال الخواص الأسية أو اللوغاريتمية</div>
                <div className="right-col">تؤول غالباً إلى مجموع في الأسس إذا كانت المتتالية هندسية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نكتب <M>{`\\(u_n\\)`}</M> بدلالة n (العبارة العامة)؟</div>
                <div className="mid-col"><M>{`\\(u_n = u_0 + nr\\)`}</M> (حسابية) أو <M>{`\\(u_n = u_0 \\cdot q^n\\)`}</M> (هندسية)</div>
                <div className="right-col">نحدد أولاً نوع المتتالية، ثم نطبق القانون المناسب. بالعموم: <M>{`\\(u_n = u_p + (n-p)r\\)`}</M> أو <M>{`\\(u_n = u_p \\cdot q^{n-p}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين قيمة n الطبيعية بحيث <M>{`\\(S_n > 100\\)`}</M></div>
                <div className="mid-col">حل متراجحة بدلالة n</div>
                <div className="right-col">تعويض قانون المجموع والحل باستعمال اللوغاريتم ln إذا كان n في الأس.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية (Un) ثابتة</div>
                <div className="mid-col"><M>{`\\(U_{n+1} = U_n\\)`}</M> أو <M>{`\\(U_0 = L\\)`}</M></div>
                <div className="right-col">إذا بدأنا من النقطة الصامدة(نهاية المتتالية) ، فإن جميع الحدود القادمة ستبقى مساوية لها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تقارب المتتالية باستخدام مبرهنة الحصر</div>
                <div className="mid-col">حصر <M>{`\\(|U_n - L|\\)`}</M> بمتتالية تؤول للصفر</div>
                <div className="right-col">تستخدم غالباً في التمارين التي تحتوي على متباينات صعبة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتاليتين (Un) و (Vn) متجاورتان</div>
                <div className="mid-col">أحدهما متزايدة، الأخرى متناقصة، ونهاية فرقهما 0</div>
                <div className="right-col">تثبت وجود نهاية مشتركة وحيدة لهما.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج رتبة الحد الذي قيمته 2024</div>
                <div className="mid-col">حل المعادلة <M>{`\\(U_n = 2024\\)`}</M></div>
                <div className="right-col">البحث عن الدليل n. تذكر أن الرتبة هي n+1 إذا بدأنا من 0.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(S_n = \\dfrac{1}{3}\\left[1 - \\left(\\dfrac{1}{4}\\right)^{n+1}\\right]\\)`}</M></div>
                <div className="mid-col">تبسيط قانون مجموع هندسية أساسها 1/4</div>
                <div className="right-col">يجب إظهار مهاراتك في توحيد المقامات والتبسيط الجبري.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب المجموع المقلوب <M>{`\\(\\sum \\dfrac{1}{v_k}\\)`}</M></div>
                <div className="mid-col">ملاحظة أن مقلوب الهندسية هو هندسية</div>
                <div className="right-col">إذا كانت أساس <M>{`\(v\)`}</M> هو <M>{`\(q\)`}</M>، فأساس المقلوب هو <M>{`\\(\\dfrac{1}{q}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين نهاية المجموع <M>{`\\(S_n\\)`}</M> لما <M>{`\\(n \\to +\\infty\\)`}</M></div>
                <div className="mid-col">حساب نهاية العبارة المستنتجة للمجموع</div>
                <div className="right-col">إذا كان |<M>{`\(q\)`}</M>| &lt; 1، فإن <M>{`\\(q^{n+1}\\)`}</M> يؤول للصفر والمجموع يؤول للقيمة <M>{`\\(\\dfrac{v_0}{1-q}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية متناقصة تماماً انطلاقاً من الرتبة 5</div>
                <div className="mid-col">دراسة إشارة الفرق للأعداد <M>{`\\(n \\geq 5\\)`}</M></div>
                <div className="right-col">بعض المتتاليات لا تبدأ بالرتابة إلا بعد عدة حدود أولى.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن <M>{`\\(u_{n+1} - 3 = \\dfrac{1}{2}(u_n - 3)\\)`}</M></div>
                <div className="mid-col">
                    <ul style={{ listStyle: 'disc', paddingRight: '20px' }}>
                        <li>ابدأ دائماً بكتابة <M>{`\\(U_{n+1}\\)`}</M> بدلالة <M>{`\\(U_n\\)`}</M> وليس <M>{`\\(n\\)`}</M></li>
                        <li>أخرج العامل المشترك  <M>{`\\(\\dfrac{1}{2}\\)`}</M></li>
                        <li>تظهر لك المتتالية المساعدة <M>{`\\(V_n = U_n - 3\\)`}</M></li>
                    </ul>
                </div>
                <div className="right-col">هذه الخطوة تبرهن أن المتتالية <M>{`\\(V_n = U_n - 3\\)`}</M> هي هندسية أساسها 1/2.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين قيمة الحد الأول <M>{`\\(u_0\\)`}</M> ليكون المجموع معدوماً</div>
                <div className="mid-col">حل معادلة بدلالة <M>{`\\(u_0\\)`}</M></div>
                <div className="right-col">كتابة المجموع كدالة لـ <M>{`\\(u_0\\)`}</M> ومساواته بالصفر.</div>
            </div>

            <div className="step-row">
                <div className="left-col">احسب عدد الحدود في المجموع <M>{`\\(u_3 + \\cdots + u_{n+2}\\)`}</M></div>
                <div className="mid-col"><M>{`\\((n+2) - 3 + 1 = n\\)`}</M> حدود</div>
                <div className="right-col">القاعدة: (الدليل الأخير − الدليل الأول + 1) القراءة من اليمين إلى اليسار.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج حصر المتتالية باستعمال التكامل</div>
                <div className="mid-col">المقارنة بين المجموع ومساحة معينة</div>
                <div className="right-col">تستخدم في التمارين المتقدمة لربط المتتاليات بالدوال الأصلية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">برهن بالتراجع لخاصية مضاعف (مثال <M>{`\\(u_n)\\)`}</M> مضاعف لـ 3)</div>
                <div className="mid-col">كتابة <M>{`\\(u_n = 3k\\)`}</M> والبرهان على الخطوة التالية</div>
                <div className="right-col">نفرض <M>{`\\(u_n = 3k\\)`}</M> ونعوضها في <M>{`\\(u_{n+1}\\)`}</M> ثم نستخرج 3 كعامل مشترك لتصبح <M>{`\\(3k'\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس المتتالية التناظرية <M>{`\\(u_{n+1} = \\dfrac{au_n+b}{cu_n+d}\\)`}</M></div>
                <div className="mid-col">إثبات أنها ليست حسابية ولا هندسية</div>
                <div className="right-col">يتم دائماً إعطاء متتالية مساعدة <M>{`\\(v_n\\)`}</M> كسرية لتحويلها إلى متتالية هندسية أو حسابية لتسهيل الحل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس متتالية بدلالة <M>{`\\(\\ln(v_n)\\)`}</M> حيث <M>{`\\(v_n\\)`}</M> هندسية</div>
                <div className="mid-col">تحول الجداء إلى مجموع والأس إلى ضرب</div>
                <div className="right-col">اللوغاريتم يحول المتتالية الهندسية ذات الأساس الموجب إلى متتالية حسابية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نثبت أن متتالية دلتا <M>{`\\(w_n = u_{n+1} - u_n\\)`}</M> هندسية؟</div>
                <div className="mid-col"><M>{`\\(\\dfrac{w_{n+1}}{w_n} = q\\)`}</M> (ثابت)</div>
                <div className="right-col">نحسب <M>{`\\(w_{n+1}\\)`}</M> بدلالة <M>{`\\(u_{n+2}\\)`}</M> و <M>{`\\(u_{n+1}\\)`}</M>، نعوض العلاقة التراجعية، ثم نخرج <M>{`\\(w_n\\)`}</M> عاملاً مشتركاً. بما أن <M>{`\\(w_n\\)`}</M> هندسية، يمكن حساب مجموعها بالتلسكوب لإيجاد العبارة العامة <M>{`\\(u_n\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية متتالية من الشكل <M>{`\\(u_n = q^n\\)`}</M> مع وسيط</div>
                <div className="mid-col">مناقشة حسب تقاطع المجالات</div>
                <div className="right-col">تكون متقاربة نحو الصفر إذا كان <M>{`\\(-1 < q < 1\\)`}</M>. نحو 1 إذا كان <M>{`\\(q=1\\)`}</M>. ومتباعدة عدا ذلك.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس متتاليتان متجاورتان بمتوسط حسابي <M>{`\\(u_{n+1} = \\dfrac{u_n+v_n}{2}\\)`}</M></div>
                <div className="mid-col">تشكيل متتالية الفرق <M>{`\\(u_n - v_n\\)`}</M></div>
                <div className="right-col">غالباً تكون متتالية الفرق هندسية أساسها محصور بين -1 و 1، فنهايتها تؤول للصفر (شرط التجاور).</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد النهاية بالحصر بمتتاليتين هندسيتين</div>
                <div className="mid-col">حصر المتتالية ثم حساب نهايتي الطرفين</div>
                <div className="right-col">بما أن المتتاليتين الحاصرتين تؤولان للصفر، فإن المتتالية المحصورة تؤول للصفر إجبارياً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس المتتالية المعرفة بمشتقة الدالة المتكررة <M>{`\\(u_n = f^{(n)}(x)\\)`}</M></div>
                <div className="mid-col">استنتاج النمط عبر المشتقات الأولى</div>
                <div className="right-col">نشتق 3 مرات لملاحظة العلاقة التراجعية، ثم نبرهن النمط العام المكتشف بالتراجع.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب جداء حدود متتالية لوغاريتمية</div>
                <div className="mid-col">يتحول إلى مجموع داخل اللوغاريتم</div>
                <div className="right-col">الجداء <M>{`\\(e^{u_1} \\cdot e^{u_2} \\cdots e^{u_n}\\) `}</M> يصبح <M>{`\\(e^{u_1+u_2+\\dots+u_n}\\) `}</M>فنحسب المجموع في الأس.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حدد اتجاه التغير بدلالة نسبة الحدود</div>
                <div className="mid-col">مقارنة <M>{`\\(\\dfrac{u_{n+1}}{u_n}\\) `}</M>مع 1</div>
                <div className="right-col">صالحة فقط للمتتاليات موجبة الحدود تماماً. إذا كانت النسبة أكبر من 1 فهي متزايدة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">أحسب المجموع المربع <M>{`\\(u_0^2 + u_1^2 + \\cdots + u_n^2\\)`}</M></div>
                <div className="mid-col">عرف متتالية مساعدة <M>{`\\(v_n = u_n^2\\)`}</M></div>
                <div className="right-col">غالباً ما توجد علاقة تربط المربعات بفرق الحدود المتتالية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية <M>{`\\((u_n)\\)`}</M> غير رتيبة</div>
                <div className="mid-col">الفرق يغير إشارته حسب زوجية n</div>
                <div className="right-col">مثل المتتاليات التي فيها <M>{`\\((-1)^n\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">مثل الحدود الأولى للمتتالية <M>{`\\(u_{n+1} = f(u_n)\\)`}</M> على محور الفواصل</div>
                <div className="mid-col">استعمال المنحنى <M>{`\\((C_f)\\)`}</M> والمستقيم <M>{`\\(y=x\\)`}</M> (المنصف الأول)</div>
                <div className="right-col">نعين <M>{`\\(u_0\\)`}</M> على الفواصل، نسقط عمودياً على <M>{`\\((C_f)\\)`}</M> ثم أفقياً على <M>{`\\(y=x\\)`}</M> ثم ننزل لمحور الفواصل لنجد <M>{`\\(u_1\\)`}</M> وهكذا.</div>
            </div>
            <div className="step-row">
                <div className="left-col">برهن أن المتتالية محدودة بالاعتماد على الدالة المرفقة</div>
                <div className="mid-col">استعمال البرهان بالتراجع وتزايد الدالة <M>{`\\(f\\)`}</M></div>
                <div className="right-col">في خطوة البرهان، ندخل الدالة <M>{`\\(f\\)`}</M> المتزايدة تماماً على طرفي المتباينة <M>{`\\(a \\leq u_n \\leq b\\)`}</M> فنحصل على <M>{`\\(f(a) \\leq u_{n+1} \\leq f(b)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تقارب المتتالية المعرفة بمجموع <M>{`\\(S_n = \\sum \\dfrac{1}{k^2}\\)`}</M></div>
                <div className="mid-col">إثبات أنها متزايدة ومحدودة من الأعلى</div>
                <div className="right-col">لإثبات المحدودية، نستخدم حصراً مثل <M>{`\\(\\dfrac{1}{k^2} < \\dfrac{1}{k(k-1)} = \\dfrac{1}{k-1} - \\dfrac{1}{k}\\)`}</M> مما يؤدي لتداخل الحدود (Telescoping sum).</div>
            </div>
            <div className="step-row">
                <div className="left-col">برهن بالتراجع صحة المتباينة المزدوجة <M>{`\\(a < u_n < b\\)`}</M></div>
                <div className="mid-col">التعامل مع الطرفين في آن واحد</div>
                <div className="right-col">احذر من تركيب الدوال المتناقصة الذي يقلب اتجاه المتباينة. يفضل غالباً إثبات كل جهة على حدة باستخدام دراسة إشارة الفرق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المتتالية المعرفة بتكامل <M>{`\\(I_n = \\int x^n e^{-x} dx\\)`}</M> متناقصة</div>
                <div className="mid-col">دراسة إشارة الفرق <M>{`\\(I_{n+1} - I_n\\)`}</M></div>
                <div className="right-col">ندخل الفرق داخل التكامل المشترك: <M>{`\\(\\int x^n(x-1)e^{-x} dx\\)`}</M> وندرس إشارة الدالة المكاملة على مجال التكامل.</div>
            </div>

            <div id="toc-bac-integrals" className="question-header">🔹 التكامل </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب القيمة المتوسطة للدالة <M>{`\\(f\\)`}</M> على <M>{`\\([a, b]\\)`}</M></div>
                <div className="mid-col"><M>{`\\(M = \\dfrac{1}{b-a} \\int_a^b f(x)\\, dx\\)`}</M></div>
                <div className="right-col">تطبيق القانون مباشرة. تحسب التكامل ثم تقسم على طول المجال.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب مساحة الحيز المحصور بين <M>{`\\(C_f\\)`}</M> ومحور الفواصل</div>
                <div className="mid-col"><M>{`\\(A = \\int |f(x)|\\, dx\\)`}</M> بوحدة المساحة</div>
                <div className="right-col">انتبه لإشارة <M>{`\\(f(x)\\)`}</M>. إذا كانت سالبة، نضرب في <span>{`\\((−1)\\)`}</span> لأن المساحة موجبة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استعمل التكامل بالتجزئة</div>
                <div className="mid-col"><M>{`\\(\\int u \\cdot v' = [u \\cdot v] - \\int u' \\cdot v\\)`}</M></div>
                <div className="right-col">نختار <M>{`\\(u\\)`}</M> بحيث يسهل اشتقاقها (تتبسط) و <M>{`\\(v'\\)`}</M> بحيث يسهل تكاملها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين الدالة الأصلية <M>{`\\(f\\)`}</M> للدالة <M>{`\\(f\\)`}</M> والتي تنعدم عند 1</div>
                <div className="mid-col"><M>{`\\(F(x) = \\int f(t)\\, dt + C\\)`}</M> مع <M>{`\\(F(1)=0\\)`}</M></div>
                <div className="right-col">نحسب التكامل العام ثم نجد الثابت C من شرط الانعدام.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب مساحة الحيز المحدود بـ <M>{`\\(C_f\\)`}</M> و <M>{`\\(C_g\\)`}</M></div>
                <div className="mid-col"><M>{`\\(\\int |f(x) - g(x)|\\, dx\\)`}</M></div>
                <div className="right-col">نحدد أي المنحنيين فوق الآخر في مجال التكامل لإزالة القيمة المطلقة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الدالة H أصلية لـ <M>{`\\(h\\)`}</M></div>
                <div className="mid-col"><M>{`\\(H'(x) = h(x)\\)`}</M></div>
                <div className="right-col">اشتقاق العبارة المعقدة المعطاة للوصول للعبارة البسيطة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين قيمة العدد الحقيقي <M>{`\\(\\alpha\\)`}</M> حيث <M>{`\\(\\int (2x+\\alpha)\\, dx = 5\\)`}</M></div>
                <div className="mid-col">حل معادلة تكاملية</div>
                <div className="right-col">حساب التكامل بدلالة <M>{`\\(\\alpha\\)`}</M> ثم حل المعادلة الناتجة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد الحجم الناتج عن دوران المنحنى حول محور الفواصل</div>
                <div className="mid-col"><M>{`\\(V = \\pi \\int [f(x)]^2\\, dx\\)`}</M></div>
                <div className="right-col">تطبيق قانون حجم الأجسام الدورانية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(0 \\leq \\int f(x)\\, dx \\leq (b-a)M\\)`}</M></div>
                <div className="mid-col">مبرهنة الخصائص الترتيبية للتكامل</div>
                <div className="right-col">إذا كانت <M>{`\\(f\\)`}</M> محصورة بين 0 و <M>{`\(M\)`}</M>، فإدماج الأطراف يحافظ على المتباينة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">استنتج تكامل دالة كسرية باستعمال التفكيك</div>
                <div className="mid-col"><M>{`\\(\\int \\left[\\dfrac{A}{x-a} + \\dfrac{B}{x-b}\\right] dx\\)`}</M></div>
                <div className="right-col">تفكيك الكسر إلى كسور بسيطة يسهل تكاملها للوغاريتمات.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب مساحة حيز ممتد للانهاية</div>
                <div className="mid-col">حساب نهاية التكامل </div>
                <div className="right-col">نحسب المساحة في مجال <M>{`\\([a, t]\)`}</M> ثم نحسب النهاية لما <M>{`\\(t \\to +\\infty\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن دالة المجموع <M>{`\\(F(x) = \\int_0^x f(t)\\, dt\\)`}</M> متزايدة</div>
                <div className="mid-col">المشتقة هي <M>{`\\(f(x)\\)`}</M></div>
                <div className="right-col">بما أن <M>{`\\(F'(x) = f(x)\\)`}</M>، فإشارة <M>{`\\(F\\)`}</M>' هي إشارة <M>{`\\(f\\)`}</M> مباشرة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد تكامل الدالة <M>{`\\(f(x) = \\tan x\\)`}</M></div>
                <div className="mid-col"><M>{`\\(\\int \\dfrac{\\sin x}{\\cos x}\\, dx = -\\ln|\\cos x|\\)`}</M></div>
                <div className="right-col">استعمال صبغة <M>{`\\(\\dfrac{u'}{u}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب تكامل الدالة <M>{`\\(\\ln x\\)`}</M></div>
                <div className="mid-col">استعمال التكامل بالتجزئة</div>
                <div className="right-col">نضع <M>{`\\(u = \\ln x\\)`}</M> و <M>{`\\(v' = 1\\)`}</M>. النتيجة هي <M>{`\\(x\\ln x - x\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج مساحة الحيز المحصور بين المنحنى والمقارب المائل</div>
                <div className="mid-col"><M>{`\\(A = \\int_a^b |f(x) - y_\\Delta| \\, dx\\)`}</M></div>
                <div className="right-col">نستغل دراسة الوضع النسبي السابقة لحذف القيمة المطلقة وحساب تكامل الفرق المباشر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج دالة أصلية للدالة <M>{`\\(h\\)`}</M> انطلاقاً من سؤال سابق</div>
                <div className="mid-col">ملاحظة العلاقة <M>{`\\(h(x) = a \\cdot f'(x) + b \\cdot g(x)\\)`}</M></div>
                <div className="right-col">غالباً ما يطلب اشتقاق دالة مساعدة معقدة، ثم يطلب المكاملة باستغلال النتيجة السابقة مباشرة دون حسابات معقدة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد علاقة تراجعية بين التكاملين <M>{`\\(I_{n+1}\\)`}</M> و <M>{`\\(I_n\\)`}</M></div>
                <div className="mid-col">استخدام المكاملة بالتجزئة بذكاء</div>
                <div className="right-col">نشتق المتغير الذي يحمل الأس <M>{`\\(n+1\\)`}</M> ليظهر الأس <M>{`\\(n\\)`}</M> في الحد المتبقي، مما يولد العلاقة المطلوبة (أساسي في شعبة رياضيات).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين حصراً للتكامل دون حسابه</div>
                <div className="mid-col">استغلال حصر الدالة المكاملة</div>
                <div className="right-col">إذا أثبتنا أن <M>{`\\(m \\leq f(x) \\leq M\\)`}</M> على المجال <M>{`\\([a,b]\\)`}</M>، فإن <M>{`\\(m(b-a) \\leq \\int_a^b f(x) dx \\leq M(b-a)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج مساحة حيز انطلاقا من تحويل نقطي</div>
                <div className="mid-col">الانسحاب والتناظر يحفظان المساحات</div>
                <div className="right-col">إذا كان <M>{`\\((C_g)\\)`}</M> صورة <M>{`\\((C_f)\\)`}</M> بانسحاب، فإن مساحة الحيز أسفل <M>{`\\((C_g)\\)`}</M> تساوي مساحة الحيز المطابق أسفل <M>{`\\((C_f)\\)`}</M> مع إزاحة حدود التكامل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج تكامل من مشتقة مركب <M>{`\\(u'(x) e^{u(x)}\\)`}</M></div>
                <div className="mid-col">الدالة الأصلية هي <M>{`\\(e^{u(x)}\\)`}</M></div>
                <div className="right-col">استغلال المشتقات المركبة المألوفة دون الدخول في تكامل بالتجزئة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب تكامل دالة تتضمن قيمة مطلقة</div>
                <div className="mid-col">تفكيك حسب علاقة شال عند نقطة الانعدام</div>
                <div className="right-col">نقسم مجال التكامل إلى مجالين، في الأول نأخذ الموجب وفي الثاني نأخذ السالب.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت متراجحة بين تكاملين <M>{`\\(\\int f \\le \\int g\\)`}</M> دون حسابهما</div>
                <div className="mid-col">حفظ المتباينات</div>
                <div className="right-col">يكفي أن نثبت أن <M>{`\\(f(x) \\le g(x)\\)`}</M> على مجال التكامل ثم ندخل التكامل على الطرفين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كامل بالتجزئة مرتين متتاليتين</div>
                <div className="mid-col">التخلص من <M>{`\\(x^2\\)`}</M> المضروب في أسية أو لوغاريتم</div>
                <div className="right-col">في المرة الأولى نصل إلى <M>{`\\(x\\)`}</M>، وفي الثانية يختفي ليصبح ثابتاً، مما يسمح بحساب التكامل النهائي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب الحجم الدوراني المحصور بين منحنيين</div>
                <div className="mid-col"><M>{`\\(\\pi \\int |[f(x)]^2 - [g(x)]^2| dx\\)`}</M></div>
                <div className="right-col">حذار من خطأ شائع: الحجم ليس تكامل مربع الفرق <M>{`\\((f-g)^2\\)`}</M> بل فرق المربعين <M>{`\\(f^2 - g^2\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب القيمة المتوسطة لمجموع دالتين</div>
                <div className="mid-col">توزيع التكامل (الخطية)</div>
                <div className="right-col">القيمة المتوسطة للمجموع هي مجموع القيمتين المتوسطتين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب تكامل دالة ناطقة مقلوبها درجته أعلى</div>
                <div className="mid-col">استخراج الجزء الصحيح بالقسمة</div>
                <div className="right-col">تتحول الدالة إلى <M>{`\\(ax+b + \\dfrac{c}{x-x_0}\\)`}</M> فيصبح التكامل بسيطاً (كثير حدود + لوغاريتم).</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب تكامل الدالة الفردية على مجال متناظر <M>{`\\([-a, a]\\)`}</M></div>
                <div className="mid-col">التكامل معدوم مباشرة</div>
                <div className="right-col">المساحة فوق المحور تلغي المساحة تحته. يفضل ذكر هذه الخاصية لاختصار الحساب.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب نهاية تكامل لما يؤول حدوده إلى المالانهاية</div>
                <div className="mid-col">حساب المساحة غير المحدودة</div>
                <div className="right-col">نحسب التكامل بدلالة وسيط <M>{`\\(x\\)`}</M> أو <M>{`\\(\\alpha\\)`}</M> ثم نحسب نهاية النتيجة. إذا كانت منتهية فالمساحة متقاربة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استخدم المساحة لإيجاد قيمة وسيط <M>{`\\(m\\)`}</M> (عكسي)</div>
                <div className="mid-col">حل المعادلة <M>{`\\(S(m) = K\\)`}</M></div>
                <div className="right-col">يُعطى الحجم أو المساحة بقيمة عددية، ويطلب إيجاد الحد الذي يحقق تلك المساحة.</div>
            </div>

            <div id="toc-bac-complex" className="question-header">🔹 الأعداد المركبة </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">أكتب <M>{`\\(z\\)`}</M> على الشكل الأسي</div>
                <div className="mid-col"><M>{`\\(z = r \\cdot e^{i\\theta}\\)`}</M></div>
                <div className="right-col">نحسب الطويلة r والعمدة θ. تذكر أن <M>{`\\(\\cos\\theta = \\dfrac{a}{r}\\)`}</M> و <M>{`\\(\\sin\\theta = \\dfrac{b}{r}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المثلث ABC قائم ومتساوي الساقين</div>
                <div className="mid-col"><M>{`\\(\\dfrac{z_C - z_A}{z_B - z_A} = \\pm i\\)`}</M></div>
                <div className="right-col">الطويلة تساوي 1 (متساوي الساقين) والعمدة <M>{`\\(\\pm\\dfrac{\\pi}{2}\\)`}</M> (قائم).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين طبيعة التحويل النقطي <M>{`\\(f\\)`}</M> ذو العبارة <M>{`\\(z' = az + b\\)`}</M></div>
                <div className="mid-col">انسحاب، تحاكي، أو دوران</div>
                <div className="right-col">إذا كان <M>{`\\(a=1\\)`}</M> (انسحاب). إذا كان <M>{`\\(a \\in \\mathbb{R}^* \\setminus \\{1\\}\\)`}</M> (تحاكي). إذا كان <M>{`\\(|a|=1\\)`}</M> (دوران).</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن النقط <M>{`\\(A\\)`}</M>, B, C على استقامة واحدة</div>
                <div className="mid-col"><M>{`\\(\\dfrac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}\\)`}</M></div>
                <div className="right-col">الارتباط الخطي للشعاعين يعني أن زاوية الميل بينهما هي 0 أو π.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\(M\)`}</M> حيث <M>{`\\(|z - z_A| = R\\)`}</M></div>
                <div className="mid-col">دائرة مركزها <M>{`\\(A\\)`}</M> ونصف قطرها R</div>
                <div className="right-col">الطويلة تمثل المسافة. المسافة الثابتة عن نقطة هي تعريف الدائرة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\(M\)`}</M> حيث <M>{`\\(|z - z_A| = |z - z_B|\\)`}</M></div>
                <div className="mid-col">المحور القطاعي للقطعة [AB]</div>
                <div className="right-col">المسافة بين <M>{`\(M\)`}</M> و <M>{`\\(A\\)`}</M> تساوي المسافة بين <M>{`\(M\)`}</M> و B.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أكتب <M>{`\\(z\\)`}</M> على الشكل المثلثي</div>
                <div className="mid-col"><M>{`\\(z = r(\\cos\\theta + i\\sin\\theta)\\)`}</M></div>
                <div className="right-col">الخطوة البينية قبل الشكل الأسي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين طويلة وعمدة العدد المرافق <M>{`\\(\\bar{z}\\)`}</M></div>
                <div className="mid-col"><M>{`\\(|\\bar{z}| = |z|\\)`}</M> و <M>{`\\(\\arg(\\bar{z}) = -\\arg(z)\\)`}</M></div>
                <div className="right-col">المرافق هو تناظر بالنسبة لمحور الفواصل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(\\left(\\dfrac{z}{\\bar{z}}\\right)^n\\)`}</M> هو عدد حقيقي</div>
                <div className="mid-col"><M>{`\\( \\arg(Z) = k\\pi \\)`}</M> حيث <M>{`\\( k \\in \\mathbb{Z} \\)`}</M></div>
                <div className="right-col">نكتب <M>{`\\(z\\)`}</M> على الشكل الأسي، نطبق خاصية عمدة المرافق <M>{`\\( \\arg(\\bar{z}) = -\\theta \\)`}</M> لتصبح عمدة الكسر <M>{`\\( 2\theta \\)`}</M>، ثم نطبق دستور موافر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين اللاحقة <M>{`\\(z_G\\)`}</M> لمركز ثقل المثلث</div>
                <div className="mid-col"><M>{`\\(z_G = \\dfrac{z_A + z_B + z_C}{3}\\)`}</M></div>
                <div className="right-col">الوسط الحسابي للنقط الثلاث.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن النقط <M>{`\\(A\\)`}</M>, B, C على دائرة واحدة</div>
                <div className="mid-col"><M>{`\\(\\Omega A = \\Omega B = \\Omega C = R\\)`}</M></div>
                <div className="right-col">حساب أطوال الأشعة بين المركز <M>{`\\(\\Omega\\)`}</M> والنقط الثلاث، أو التحقق من أن طويلات فرق اللاحقات متساوية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أكتب العبارة المركبة للدوران <M>{`\\(R(\\Omega,\\ \\theta)\\)`}</M></div>
                <div className="mid-col"><M>{`\\(z' - \\omega = e^{i\\theta}(z - \\omega)\\)`}</M></div>
                <div className="right-col">تذكر أن ω هي لاحقة المركز وعمدة e هي زاوية الدوران.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين طبيعة الرباعي ABCD</div>
                <div className="mid-col">متوازي أضلاع، مربع، مستطيل...</div>
                <div className="right-col">نستخدم تساوي الأشعة <M>{`\\(z_B - z_A = z_C - z_D\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد قيم n بحيث يكون <M>{`\\(z^n\\)`}</M> تخيلياً صرفاً</div>
                <div className="mid-col"><M>{`\\(\\arg(z^n) = \\dfrac{\\pi}{2} + k\\pi\\)`}</M></div>
                <div className="right-col"><M>{`\\(n \\cdot \\theta = \\dfrac{\\pi}{2} + k\\pi\\)`}</M> واستنتاج n.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين اللاحقة لمركز التحاكي <M>{`\\(h\\)`}</M></div>
                <div className="mid-col">نقطة صامدة <M>{`\\(z = az+b \\Rightarrow \\omega = \\dfrac{b}{1-a}\\)`}</M></div>
                <div className="right-col">النقطة التي لا تتغير بالتحويل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل في ℂ المعادلة <M>{`\\(z^2 - 4z + 13 = 0\\)`}</M></div>
                <div className="mid-col">حساب المميز Δ (سالب)</div>
                <div className="right-col">الحلول تكون دائماً مترافقة <M>{`\\(z = \\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن العدد مركزي (لاحقته <M>{`\\(z\\)`}</M>) ينتمي للقرص</div>
                <div className="mid-col"><M>{`\\(|z - \\omega| \\leq R\\)`}</M></div>
                <div className="right-col">المسافة أقل من أو تساوي نصف القطر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين العددين المركبين <M>{`\\(z\\)`}</M> بحيث <M>{`\\(z^2=a+ib\\)`}</M></div>
                <div className="mid-col">حل جملة معادلات <M>{`\\(x^2-y^2=a\\)`}</M><M>{`\\(x^2+y^2=r=\\sqrt{a^2+b^2}\\)`}</M></div>
                <div className="right-col">طريقة كلاسيكية لإيجاد جذور الأعداد المركبة التي ليست في شكل أسي بسيط.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن العدد <M>{`\\(z\\)`}</M> حقيقي سالب</div>
                <div className="mid-col"><M>{`\\(\\arg(z) = \\pi + 2k\\pi\\)`}</M></div>
                <div className="right-col">يقع على الجزء السالب من محور الفواصل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المثلث <M>{`\\(ABC\\)`}</M> متقايس الأضلاع</div>
                <div className="mid-col"><M>{`\\(\\dfrac{z_C - z_A}{z_B - z_A} = e^{\\pm i \\frac{\\pi}{3}}\\)`}</M></div>
                <div className="right-col">الطويلة تساوي 1 (الأضلاع متقايسة) والعمدة <M>{`\\(\\pm \\dfrac{\\pi}{3}\\)`}</M> (الزاوية 60 درجة).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\\(M\\)`}</M> حيث <M>{`\\(\\dfrac{z-z_A}{z-z_B}\\)`}</M> عدد حقيقي</div>
                <div className="mid-col"><M>{`\\(\\arg\\left(\\dfrac{z-z_A}{z-z_B}\\right) = k\\pi\\)`}</M></div>
                <div className="right-col">مجموعة النقط هي المستقيم <M>{`\\((AB)\\)`}</M> باستثناء النقطة <M>{`\\(B\\)`}</M> (لأن المقام لا ينعدم).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\\(M\\)`}</M> حيث <M>{`\\(\\dfrac{z-z_A}{z-z_B}\\)`}</M> تخيلي صرف</div>
                <div className="mid-col"><M>{`\\(\\arg\\left(\\dfrac{z-z_A}{z-z_B}\\right) = \\dfrac{\\pi}{2} + k\\pi\\)`}</M></div>
                <div className="right-col">مجموعة النقط هي الدائرة التي قطرها <M>{`\\([AB]\\)`}</M> باستثناء النقطة <M>{`\\(B\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل في <M>{`\\(\\mathbb{C}\\)`}</M> معادلة من الدرجة الثالثة</div>
                <div className="mid-col">إيجاد الجذر الظاهر <M>{`\\(z_0\\)`}</M> ثم التحليل</div>
                <div className="right-col">نكتب كثيرة الحدود على الشكل <M>{`\\((z - z_0)(az^2 + bz + c) = 0\\)`}</M> ونستعمل المطابقة أو القسمة الإقليدية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد الجذور النونية للعدد المركب الواحد (جذور الوحدة)</div>
                <div className="mid-col">حل المعادلة <M>{`\\(z^n = 1\\)`}</M></div>
                <div className="right-col">الحلول هي <M>{`\\(z_k = e^{i \\frac{2k\\pi}{n}}\\)`}</M> وتمثل هندسياً رؤوس مضلع منتظم محاط بدائرة الوحدة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج طبيعة التحويل النقطي المركب <M>{`\\(S \\circ R\\)`}</M></div>
                <div className="mid-col">ضرب العبارتين المركبتين للتحويلين</div>
                <div className="right-col">مركب دورانين هو دوران زوايته مجموع الزاويتين. مركب تحاكيين هو تحاكي نسبته جداء النسبتين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين أصغر عدد طبيعي <M>{`\\(n\\)`}</M> حتى يكون <M>{`\\(z^n\\)`}</M> حقيقياً موجباً تماماً</div>
                <div className="mid-col">حل المعادلة <M>{`\\(n \\cdot \\theta = 2k\\pi\\)`}</M></div>
                <div className="right-col">عكس الحقيقي السالب. هنا يجب أن تكون العمدة من مضاعفات <M>{`\\(2\\pi\\)`}</M>. نعطي لـ <M>{`\\(k\\)`}</M> القيمة 1 ونجد <M>{`\\(n\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن النقط تنتمي لنفس الدائرة يطلب تعيين مركزها ونصف قطرها</div>
                <div className="mid-col">استعمال الدائرة المحيطة بمثلث قائم</div>
                <div className="right-col">إذا كان لدينا مثلث قائم في <M>{`\\(A\\)`}</M> ومثلث قائم في <M>{`\\(B\\)`}</M> لهما نفس الوتر <M>{`\\([CD]\\)`}</M>، فالنقط الأربعة تنتمي لدائرة قطرها <M>{`\\([CD]\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط التي تحقق <M>{`\\(z + \\bar{z} = |z|^2\\)`}</M></div>
                <div className="mid-col">استعمال الشكل الجبري <M>{`\\(z = x + iy\\)`}</M></div>
                <div className="right-col">تتحول إلى معادلة ديكارتية <M>{`\\(2x = x^2 + y^2\\)`}</M> وهي معادلة دائرة يجب إتمام المربع لإيجاد مركزها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب المجموع <M>{`\\(1 + z + z^2 + \\dots + z^n\\)`}</M></div>
                <div className="mid-col">مجموع حدود متتالية هندسية أساسها <M>{`\\(z\\)`}</M></div>
                <div className="right-col">تطبيق القانون: <M>{`\\(\\dfrac{1 - z^{n+1}}{1 - z}\\)`}</M> وتبسيط الناتج باستعمال الشكل الأسي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استخدم دستور موافر لحساب <M>{`\\(\\cos(nx)\\)`}</M> بدلالة <M>{`\\(\\cos x\\)`}</M></div>
                <div className="mid-col">النشر باستعمال ثنائي الحد لنيوتن</div>
                <div className="right-col">نكتب <M>{`\\((\\cos x + i\\sin x)^n\\)`}</M> وننشرها، ثم نطابق الأجزاء الحقيقية والتخيلية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن المعين هو مربع</div>
                <div className="mid-col">إثبات أن قطراه متقايسان ومتعامدان</div>
                <div className="right-col">باستخدام الأعداد المركبة نثبت أن <M>{`\\(\\dfrac{z_C - z_A}{z_D - z_B} = \\pm i\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد العبارة المركبة للتناظر المركزي</div>
                <div className="mid-col">دوران مركزه <M>{`\\(\\Omega\\)`}</M> وزاويته <M>{`\\(\\pi\\)`}</M></div>
                <div className="right-col">تكتب على الشكل <M>{`\\(z' - \\omega = - (z - \\omega)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد العبارة المركبة للتناظر المحوري (بالنسبة لمحور الفواصل)</div>
                <div className="mid-col">العدد المرافق</div>
                <div className="right-col">المعادلة هي ببساطة <M>{`\\(z' = \\bar{z}\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين تحويل نقطي غير مألوف يتضمن المرافق <M>{`\\(z' = i \\bar{z}\\)`}</M></div>
                <div className="mid-col">مركب تحويلين (تناظر محوري يليه دوران)</div>
                <div className="right-col">التناظر بالنسبة لمحور الفواصل أولاً متبوعاً بدوران زاويته <M>{`\\(\\dfrac{\\pi}{2}\\)`}</M> ومركزه المبدأ.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط M حيث <M>{`\\(\\arg(z-a)+\\arg(z-b)\\)`}</M>
                    <M>{`\\(=\\pi\\)`}</M></div>
                <div className="mid-col">تحويل المجموع إلى جداء داخل العمدة</div>
                <div className="right-col">تصبح <M>{`\\(\\arg((z-a)(z-b)) = \\pi\\)`}</M>، يعني أن الجداء حقيقي سالب. نستخدم الشكل الجبري لتعيين مجموعة النقط.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل المعادلة <M>{`\\((z-z_0)^n = a\\)`}</M> في <M>{`\\(\\mathbb{C}\\)`}</M></div>
                <div className="mid-col">تغيير المتغير <M>{`\\(Z = z-z_0\\)`}</M></div>
                <div className="right-col">نحل معادلة الجذور النونية لـ <M>{`\\(Z^n = a\\)`}</M> ثم نعود للمتغير الأصلي <M>{`\\(z = Z + z_0\\)`}</M> بإزاحة جذور الوحدة.</div>
            </div>

            <div id="toc-bac-probabilities" className="question-header">🔹 الاحتمالات </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال أن نسحب في آن واحد 3 كرات</div>
                <div className="mid-col">استعمال التوفيقات <M>{`\\(C_n^p\\)`}</M></div>
                <div className="right-col">الترتيب غير مهم. نستعملها عند سحب حفنة واحدة من الكرات.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال أن نسحب على التوالي وبإرجاع</div>
                <div className="mid-col">استعمال القوائم <M>{`\\(n^p\\)`}</M></div>
                <div className="right-col">الترتيب مهم جداً والإرجاع يعني تكرار العناصر ممكن.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين قانون الاحتمال للمتغير العشوائي X</div>
                <div className="mid-col">جدول يربط كل قيمة لـ X باحتمالها</div>
                <div className="right-col">تأكد أن مجموع الاحتمالات يساوي 1 دائماً كوسيلة للتحقق.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب الأمل الرياضياتي E(X)</div>
                <div className="mid-col"><M>{`\\(\\sum x_i \\cdot P(x_i)\\)`}</M></div>
                <div className="right-col">المعدل المتوقع للربح أو الخسارة على المدى الطويل.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب احتمال سحب كرة بيضاء علماً أنها تحمل رقماً واحداً</div>
                <div className="mid-col">الاحتمال الشرطي <M>{`\\(P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}\\)`}</M></div>
                <div className="right-col">نعتبر المجموعة الكلية هي فقط التي تحقق الشرط B.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الحادثتين <M>{`\\(A\\)`}</M> و B مستقلتان</div>
                <div className="mid-col"><M>{`\\(P(A\\cap B) = P(A) \\cdot P(B)\\)`}</M></div>
                <div className="right-col">إذا تحقق التساوي فهما مستقلتان، أي وقوع أحدهما لا يؤثر على الآخر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب التباين V(X)</div>
                <div className="mid-col"><M>{`\\(V(X) = E(X^2) - [E(X)]^2\\)`}</M></div>
                <div className="right-col">مقياس لتشتت القيم حول الأمل الرياضياتي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد الانحراف المعياري σ(X)</div>
                <div className="mid-col"><M>{`\\(\\sigma(X) = \\sqrt{V(X)}\\)`}</M></div>
                <div className="right-col">الجذر التربيعي للتباين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب كرتين من نفس اللون</div>
                <div className="mid-col"><M>{`\\(P(3B) + P(3R) + P(3N)\\)`}</M></div>
                <div className="right-col">نجمع احتمالات كل لون على حدة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب كرتين مختلفتين في اللون</div>
                <div className="mid-col">الحادثة العكسية: <M>{`\\(1 - P(\\bar{A})\\)`}</M> حيث <M>{`\\(A\\)`}</M> = "نفس اللون"</div>
                <div className="right-col">الحادثة العكسية توفر وقتاً هائلاً في البكالوريا.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب كرة بيضاء واحدة على الأقل</div>
                <div className="mid-col"><M>{`\\(1 - P(\\bar{B})\\)`}</M> حيث B = "لا كرة بيضاء"</div>
                <div className="right-col">كلمة "على الأقل" هي كلمة سر استعمال الحادثة العكسية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أرسم شجرة الاحتمالات</div>
                <div className="mid-col">تمثيل المسارات الممكنة</div>
                <div className="right-col">تأكد أن مجموع احتمالات الفروع المنطلقة من نفس العقدة يساوي 1.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس المتغير العشوائي يتبع التوزيع الثنائي B(n, p)</div>
                <div className="mid-col">قانون برنولي لـ n محاولة</div>
                <div className="right-col">تستخدم عند تكرار نفس التجربة n مرة بصفة مستقلة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب احتمال الحصول على كرتين مجموع رقميهما زوجي</div>
                <div className="mid-col">(زوجي+زوجي) أو (فردي+فردي)</div>
                <div className="right-col">تصنيف الكرات حسب الأرقام قبل البدء في حساب الاحتمالات.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب 3 كرات تحمل أرقاماً تشكل متتالية حسابية</div>
                <div className="mid-col">(1,2,3) أو (2,3,4)...</div>
                <div className="right-col">يجب تعداد جميع الحالات الممكنة يدوياً ثم حساب احتمالها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب احتمال حادثة باستخدام الشجرة (الاحتمال الكلي)</div>
                <div className="mid-col">دستور الاحتمالات الكلية <M>{`\\(P(A) = \\sum P(A \\cap B_i)\\)`}</M></div>
                <div className="right-col">تتبع جميع المسارات في شجرة الاحتمالات التي تنتهي بالحادثة <M>{`\\(A\\)`}</M> واجمع جداءات احتمالاتها.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين أصغر قيمة لـ <M>{`\\(n\\)`}</M> حتى يكون احتمال الحادثة أكبر من 0.99</div>
                <div className="mid-col">حل المتراجحة <M>{`\\(1 - p^n > 0.99\\)`}</M></div>
                <div className="right-col">ندخل اللوغاريتم النيبيري <M>{`\\(\\ln\\)`}</M> على الطرفين، مع الانتباه لتغير اتجاه المتباينة عند القسمة على عدد سالب مثل <M>{`\\(\\ln(p)\\)`}</M> حيث <M>{`\\(0 < p < 1\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس المتغير العشوائي <M>{`\\(X\\)`}</M> يمثل عدد السحبات حتى الحصول على كرة بيضاء</div>
                <div className="mid-col">التوزيع الهندسي (وقت الانتظار)</div>
                <div className="right-col">القيم الممكنة هي 1, 2, 3... الاحتمال <M>{`\\(P(X=k)\\)`}</M> هو سحب <M>{`\\(k-1\\)`}</M> كرة غير بيضاء ثم كرة بيضاء في السحبة <M>{`\\(k\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب كرة من صندوقين بعد اختيار الصندوق بنرد</div>
                <div className="mid-col">الاحتمال الشرطي المركب (شجرة كاملة)</div>
                <div className="right-col">المرحلة الأولى في الشجرة لاختيار الصندوق <M>{`\\(U_1\\)`}</M> أو <M>{`\\(U_2\\)`}</M> (حسب النرد)، والمرحلة الثانية للسحب من الصندوق المختار.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن اللعبة المعتمدة على المتغير العشوائي عادلة</div>
                <div className="mid-col">التحقق من أن الأمل الرياضياتي معدوم <M>{`\\(E(X) = 0\\)`}</M></div>
                <div className="right-col">إذا كان <M>{`\\(E(X) > 0\\)`}</M> فاللعبة مربحة للاعب، وإذا كان <M>{`\\(E(X) < 0\\)`}</M> فهي خاسرة للاعب ومربحة للمنظم.</div>
            </div>
            <div className="step-row">
                <div className="left-col">السحب في آن واحد مع تغيير عدد الكرات الكلي إلى <M>{`\\(n\\)`}</M></div>
                <div className="mid-col">الاحتمالات بدلالة <M>{`\\(n\\)`}</M> (دراسة دالة)</div>
                <div className="right-col">تصبح الاحتمالات عبارة عن دالة كسرية بدلالة <M>{`\\(n\\)`}</M>، ويُطلب لاحقاً إيجاد <M>{`\\(n\\)`}</M> الذي يعظم الاحتمال (الاشتقاق).</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس المتغير العشوائي الذي يمثل الفرق المطلق بين رقمي كرتين</div>
                <div className="mid-col">تعيين القيم الممكنة للفرق <M>{`\\(|X_1 - X_2|\\)`}</M></div>
                <div className="right-col">نشكل جدولاً ذو مدخلين (رقم الكرة 1 ورقم الكرة 2) ونملأ الخانات بالفروق لتسهيل الحساب.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين التوزيع الاحتمالي الشرطي <M>{`\\(P(X=x_i | A)\\)`}</M></div>
                <div className="mid-col">تضييق فضاء العينة إلى الحادثة <M>{`\\(A\\)`}</M></div>
                <div className="right-col">نقسم احتمال التقاطع <M>{`\\(P(X=x_i \\cap A)\\)`}</M> على الاحتمال الشرطي <M>{`\\(P(A)\\)`}</M> لجميع قيم <M>{`\\(X\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس لعبة قمار مع قيمة وسيط <M>{`\\(m\\)`}</M> لتعيين اللعبة عادلة</div>
                <div className="mid-col">حل المعادلة <M>{`\\(E(X) = 0\\)`}</M> حيث <M>{`\\(X\\)`}</M> بدلالة <M>{`\\(m\\)`}</M></div>
                <div className="right-col">نكتب قيم المتغير كفروق <M>{`\\(Gain - m\\)`}</M> ونحسب الأمل الرياضياتي ثم نحلها كمعادلة خطية لإيجاد <M>{`\\(m\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال سحب كرات من أكياس مختلفة على التوالي</div>
                <div className="mid-col">استعمال مبدأ الجداء الأساسي</div>
                <div className="right-col">الاحتمال هو جداء احتمالات السحب من كل كيس نظراً لأنها حوادث مستقلة تماماً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استخدم الدالة المساعدة <M>{`\\(g(p) = p(1-p)\\)`}</M> في الاحتمالات</div>
                <div className="mid-col">البحث عن الاحتمال الأعظمي</div>
                <div className="right-col">تشتق هذه الدالة وتدرس تغيراتها لتجد أن القيمة العظمى تقع عند <M>{`\\(p = 0.5\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استغل الاستقلال لسحبين متتاليين دون إرجاع</div>
                <div className="mid-col">فخ بكالوريا: السحب دون إرجاع ليس مستقلاً</div>
                <div className="right-col">السحب الأول يؤثر على تركيبة الصندوق في السحب الثاني، لذا نستخدم الاحتمال الشرطي وليس الجداء المباشر للاستقلال.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال تكوين لجان بمهام مختلفة (ترتيب) وأعضاء (بدون ترتيب)</div>
                <div className="mid-col">استعمال الترتيبات <M>{`\\(A_n^p\\)`}</M> والتوفيقات <M>{`\\(C_n^p\\)`}</M> معاً</div>
                <div className="right-col">نختار أصحاب المهام المحددة (رئيس، نائب) بالترتيبات، ثم نختار بقية الأعضاء بالتوفيقات من الباقي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ما احتمال الحصول على لونين فقط من 3 ألوان موجودة بالصندوق</div>
                <div className="mid-col">الحادثة العكسية غير مفيدة جداً هنا</div>
                <div className="right-col">يفضل جمع حالات: (أحمر وأخضر) + (أحمر وأصفر) + (أخضر وأصفر).</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب الاحتمال إذا كان السحب يتوقف عند أول كرة حمراء</div>
                <div className="mid-col">تجربة عشوائية غير محددة العدد</div>
                <div className="right-col">تعتمد على التوزيع الهندسي وتشكيل مجاميع متتاليات هندسية لحساب الاحتمال الكلي.</div>
            </div>

            <div id="toc-bac-geometry" className="question-header">🔹 الهندسة في الفضاء </div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">أكتب تمثيلاً وسيطياً للمستقيم <M>{`\\((D)\\)`}</M></div>
                <div className="mid-col"><M>{`\\(x=x_0+at,\\ y=y_0+bt\\)`}</M><M>{`\\(,\\ z=z_0+ct\\)`}</M></div>
                <div className="right-col">نحتاج لنقطة منه وشعاع توجيه <M>{`\\(\\vec{u}(a,\\ b,\\ c)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة ديكارتية للمستوي (ABC)</div>
                <div className="mid-col"><M>{`\\(ax + by + cz + d = 0\\)`}</M></div>
                <div className="right-col">نحسب الشعاع الناظمي <M>{`\\(\\vec{n}(a,\\ b,\\ c)\\)`}</M> باستعمال الجداء السلمي مع شعاعين من المستوي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أصل المسافة بين النقطة <M>{`\\(A\\)`}</M> والمستوي <M>{`\\((P)\\)`}</M></div>
                <div className="mid-col">قانون المسافة الكسرية <M>{`\\(d = \\dfrac{|ax+by+cz+d|}{\\sqrt{a^2+b^2+c^2}}\\)`}</M></div>
                <div className="right-col">يستخدم لإثبات التماس بين كرة ومستوي (المسافة تساوي نصف القطر).</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن المستقيمين <M>{`\\(D\\)`}</M> و <M>{`\\(\\Delta\\)`}</M> متقاطعان</div>
                <div className="mid-col">حل جملة معادلات الوسيطين s و t</div>
                <div className="right-col">إذا وجدنا حلاً وحيداً فهما متقاطعان. إذا تعارضت الجملة ولم يكونا متوازيين فهما غير متصالبين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت أن النقط <M>{`\\(A\\)`}</M>, B, C, D من نفس المستوي</div>
                <div className="mid-col"><M>{`\\(\\det(\\overrightarrow{AB},\\ \\overrightarrow{AC},\\ \\overrightarrow{AD}) = 0\\)`}</M></div>
                <div className="right-col">أو برهان أن الشعاع AD يكتب كتركيبة خطية لـ AB و AC.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب مساحة المثلث ABC</div>
                <div className="mid-col"><M>{`\\(S = \\dfrac{1}{2} |\\overrightarrow{AB} \\times \\overrightarrow{AC}|\\)`}</M></div>
                <div className="right-col">نصف طويلة الجداء الشعاعي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين إحداثيات النقطة H المسقط العمودي لـ <M>{`\\(A\\)`}</M> على <M>{`\\(P\\)`}</M></div>
                <div className="mid-col">H نقطة تقاطع المستقيم المار بـ <M>{`\\(A\\)`}</M> والناظمي على <M>{`\\(P\\)`}</M></div>
                <div className="right-col">نكتب التمثيل الوسيطي للمستقيم (AH) ونعوضه في معادلة المستوي.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\((C_f)\\)`}</M> هي سطح كرة</div>
                <div className="mid-col">كتابة المعادلة من الشكل <M>{`\\((x-a)^2 + (y-b)^2 + (z-c)^2 \\)`}</M><M>{`\\(= R^2\\)`}</M></div>
                <div className="right-col">استعمال إتمام المربع لمتغيرات <M>{`\\(x\\)`}</M>, <M>{`\\(y\\)`}</M>, <M>{`\\(z\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أوجد إحداثيات مركز الكرة <M>{`\\(\\Omega\\)`}</M> ونصف قطرها</div>
                <div className="mid-col">الاستخراج المباشر من المعادلة المركزية</div>
                <div className="right-col">تأكد أن الطرف الثاني للمعادلة موجب تماماً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس الوضع النسبي لمستوي <M>{`\\(P\\)`}</M> وسطح كرة (S)</div>
                <div className="mid-col">مقارنة المسافة d مع نصف القطر R</div>
                <div className="right-col">إذا كان d &lt; R يتقاطعان في دائرة. إذا كان d=R يتماسان. إذا كان d &gt; R لا يتقاطعان.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أحسب حجم رباعي الوجوه ABCD</div>
                <div className="mid-col"><M>{`\\(V = \\dfrac{1}{3} \\times S_{base} \\times h\\)`}</M></div>
                <div className="right-col">مساحة القاعدة (المثلث) في الارتفاع المتعلق بها مقسومة على 3.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن الشعاعين <M>{`\\(u\\)`}</M> و <M>{`\(v\)`}</M> متعامدان</div>
                <div className="mid-col">الجداء السلمي <M>{`\\(\\vec{u} \\cdot \\vec{v} = 0\\)`}</M></div>
                <div className="right-col"><M>{`\\(xx' + yy' + zz' = 0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة المستوي المحوري للقطعة [AB]</div>
                <div className="mid-col">مستوي يمر بمنتصف AB وناظمه هو الشعاع AB</div>
                <div className="right-col">تطبيق قانون معادلة مستوي بمعرفة نقطة وشعاع ناظم.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن <M>{`\\(D\\)`}</M> يوازي <M>{`\\(P\\)`}</M></div>
                <div className="mid-col">الجداء السلمي بين شعاع التوجيه والناظم معدوم</div>
                <div className="right-col"><M>{`\\(\\vec{u} \\cdot \\vec{n} = 0\\)`}</M> مع التأكد أن نقطة من <M>{`\\(D\\)`}</M> ليست في <M>{`\\(P\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين جيب تمام الزاوية بين مستويين</div>
                <div className="mid-col"><M>{`\\(\\cos\\theta = \\dfrac{|\\vec{n_1} \\cdot \\vec{n_2}|}{|\\vec{n_1}| \\cdot |\\vec{n_2}|}\\)`}</M></div>
                <div className="right-col">نستعمل جداء شعاعيهما الناظميين.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة سطح الكرة التي قطرها <M>{`\\([AB]\\)`}</M></div>
                <div className="mid-col">استعمال الجداء السلمي <M>{`\\(\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0\\)`}</M></div>
                <div className="right-col">أو إيجاد المركز (منتصف <M>{`\\([AB]\\)`}</M>) ونصف القطر (طول <M>{`\\(AB / 2\\)`}</M>) والتعويض في المعادلة الديكارتية.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حدد طبيعة تقاطع المستوي <M>{`\\((P)\\)`}</M> وسطح الكرة <M>{`\\((S)\\)`}</M></div>
                <div className="mid-col">حساب المسافة <M>{`\\(d(\\Omega, P)\\)`}</M> ومقارنتها بنصف القطر <M>{`\\(R\\)`}</M></div>
                <div className="right-col">إذا كان <M>{`\\(d < R\\)`}</M> التقاطع دائرة نصف قطرها <M>{`\\(r = \\sqrt{R^2 - d^2}\\)`}</M>. مركزها هو المسقط العمودي لـ <M>{`\\(\\Omega\\)`}</M> على <M>{`\\((P)\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين المسقط العمودي للنقطة <M>{`\\(A\\)`}</M> على المستقيم <M>{`\\((D)\\)`}</M></div>
                <div className="mid-col">البحث عن نقطة <M>{`\\(H \\in (D)\\)`}</M> حيث <M>{`\\(\\overrightarrow{AH} \\cdot \\vec{u} = 0\\)`}</M></div>
                <div className="right-col">نعوض إحداثيات <M>{`\\(H\\)`}</M> من التمثيل الوسيطي للمستقيم في الجداء السلمي لنجد الوسيط <M>{`\\(t\\)`}</M> ثم نستنتج <M>{`\\(H\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تقاطع ثلاثة مستويات <M>{`\\((P)\\)`}</M>, <M>{`\\((Q)\\)`}</M>, <M>{`\\((R)\\)`}</M></div>
                <div className="mid-col">حل جملة 3 معادلات خطية بـ 3 مجاهيل</div>
                <div className="right-col">التقاطع قد يكون نقطة وحيدة، مستقيماً، أو لا يوجد تقاطع (حسب الارتباط الخطي للأشعة الناظمية).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\\(M\\)`}</M> حيث <M>{`\\(||\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}|| \\)`}</M><M>{`\\(= 3 ||\\overrightarrow{MA}-\\overrightarrow{MB}||\\)`}</M></div>
                <div className="mid-col">استعمال المرجح <M>{`\\(G\\)`}</M> وخواص الأشعة</div>
                <div className="right-col">الطرف الأيسر يصبح <M>{`\\(3MG\\)`}</M>. الطرف الأيمن مبسط بعلاقة شال إلى <M>{`\\(3BA\\)`}</M> (ثابت). إذن <M>{`\\(MG = BA\\)`}</M> وهي معادلة سطح كرة مركزها <M>{`\\(G\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب المسافة بين مستقيمين متصالبين (غير متقاطعين وغير متوازيين)</div>
                <div className="mid-col">إيجاد المستوي الذي يحوي أحدهما ويوازي الآخر</div>
                <div className="right-col">المسافة هي البعد بين نقطة من المستقيم الأول والمستوي المساعد الذي يضم المستقيم الثاني (فكرة قوية في شعبة الرياضيات).</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة المستوي المماس لسطح كرة <M>{`\\((S)\\)`}</M> في النقطة <M>{`\\(A\\)`}</M> منها</div>
                <div className="mid-col">استعمال الجداء السلمي <M>{`\\(\\overrightarrow{\\Omega A} \\cdot \\overrightarrow{AM} = 0\\)`}</M></div>
                <div className="right-col">الشعاع <M>{`\\(\\overrightarrow{\\Omega A}\\)`}</M> (من المركز إلى نقطة التماس) هو شعاع ناظمي لهذا المستوي المماس.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس تقاطع مستويين لتوليد مستقيم</div>
                <div className="mid-col">إيجاد التمثيل الوسيطي للتقاطع</div>
                <div className="right-col">نضع أحد المتغيرات كـ <M>{`\\(t\\)`}</M> (مثلا <M>{`\\(z=t\\)`}</M>) ثم نحل الجملة لإيجاد <M>{`\\(x\\)`}</M> و <M>{`\\(y\\)`}</M> بدلالة <M>{`\\(t\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب المسافة بين نقطة ومستقيم في الفضاء</div>
                <div className="mid-col">استعمال المسقط العمودي أو جداء شعاعي (جامعي)</div>
                <div className="right-col">في البكالوريا نستعمل المسقط العمودي: نعين المستوي المار بالنقطة والعمودي على المستقيم، ثم نجد نقطة التقاطع ونحسب المسافة.</div>
            </div>

            <div className="step-row">
                <div className="left-col">عين مجموعة النقط من الشكل <M>{`\\(MA^2 + MB^2 = k\\)`}</M></div>
                <div className="mid-col">مبرهنة المتوسط (مرجح نقطتين)</div>
                <div className="right-col">ندخل منتصف <M>{`\\([AB]\\)`}</M> ولتكن <M>{`\\(I\\)`}</M> فتصبح <M>{`\\(2MI^2 + \\dfrac{AB^2}{2} = k\\)`}</M>. وهي معادلة كرة مركزها <M>{`\\(I\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة مستوي يشمل مستقيما <M>{`\\((D)\\)`}</M> ونقطة <M>{`\\(A\\)`}</M></div>
                <div className="mid-col">تحديد شعاعين توجيه للمستوي</div>
                <div className="right-col">الشعاع الأول هو شعاع توجيه المستقيم <M>{`\\(\\vec{u}\\)`}</M>، والشعاع الثاني هو <M>{`\\(\\overrightarrow{BM}\\)`}</M> حيث B نقطة من <M>{`\\((D)\\)`}</M>. الناظم هو جداءهما السلمي المتعامد.</div>
            </div>
            <div className="step-row">
                <div className="left-col">أثبت تعامد مستويين</div>
                <div className="mid-col">تعامد الشعاعين الناظميين</div>
                <div className="right-col">الجداء السلمي <M>{`\\(\\vec{n_1} \\cdot \\vec{n_2} = 0\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين المركز ونصف القطر للكرة من معادلة منشورة مضاف لها وسيط <M>{`\\(m\\)`}</M></div>
                <div className="mid-col">مناقشة طبيعة مجموعة النقط بدلالة <M>{`\\(m\\)`}</M></div>
                <div className="right-col">نتمم المربع، فيظهر الطرف الأيمن بدلالة <M>{`\\(m\\)`}</M>. لتكون كرة يجب أن يكون الطرف الأيمن موجباً تماماً.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين مجموعة النقط <M>{`\\(M\\)`}</M> حيث <M>{`\\(\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = k\\)`}</M></div>
                <div className="mid-col">ندخل منتصف <M>{`\\([AB]\\)`}</M> لتكن <M>{`\\(I\\)`}</M></div>
                <div className="right-col">تصبح <M>{`\\(MI^2 - \\dfrac{AB^2}{4} = k\\)`}</M>، وهي إما سطح كرة أو نقطة أو مجموعة خالية حسب قيمة <M>{`\\(k\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">احسب مساحة مثلث باستخدام الجداء السلمي وقانون السينوس</div>
                <div className="mid-col"><M>{`\\(S = \\dfrac{1}{2} ||\\overrightarrow{AB}|| \\times ||\\overrightarrow{AC}|| \\sin \\theta\\)`}</M></div>
                <div className="right-col">نحسب الكوسينوس من الجداء السلمي، ثم السينوس من العلاقة <M>{`\\(\\cos^2 + \\sin^2 = 1\\)`}</M> لتفادي الجداء الشعاعي المعقد.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين معادلة سطح الكرة المماسة لمستويين متوازيين</div>
                <div className="mid-col">تحديد المركز والقطر</div>
                <div className="right-col">المركز يقع في المستوي المنتصف بينهما، والقطر هو المسافة العمودية بين المستويين.</div>
            </div>

            <div id="toc-bac-arithmetic" className="question-header">🔹 الحساب والموافقات (شعبة رياضيات وتقني رياضي)</div>

            <div className="col-header-row">
                <div className="col-header left-h">العبارة في التمرين</div>
                <div className="col-header mid-h">الهدف/الترجمة</div>
                <div className="col-header right-h">العمل الاستراتيجي</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن العددين <M>{`\\(a\\)`}</M> و <M>{`\\(b\\)`}</M> أوليان فيما بينهما</div>
                <div className="mid-col">استعمال مبرهنة بيزو <M>{`\\(au + bv = 1\\)`}</M></div>
                <div className="right-col">إيجاد عددين صحيحين <M>{`\\(u\\)`}</M> و <M>{`\\(v\\)`}</M> يحققان العلاقة، أو استعمال خوارزمية إقليدس للوصول إلى <M>{`\\(PGCD = 1\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل في <M>{`\\(\\mathbb{Z}^2\\)`}</M> المعادلة <M>{`\\(ax + by = c\\)`}</M></div>
                <div className="mid-col">استعمال الحل الخاص ومبرهنة غوص</div>
                <div className="right-col">نجد حلاً خاصاً <M>{`\\((x_0, y_0)\\)`}</M>، نطرح المعادلتين، ثم نطبق مبرهنة غوص لإيجاد الحل العام <M>{`\\((x, y)\\)`}</M> بدلالة <M>{`\\(k\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج بواقي القسمة الإقليدية للعدد <M>{`\\(a^n\\)`}</M> على <M>{`\\(b\\)`}</M></div>
                <div className="mid-col">دراسة دورية البواقي <M>{`\\(a^n \\equiv r \\pmod b\\)`}</M></div>
                <div className="right-col">نعوض <M>{`\\(n\\)`}</M> بالقيم 0, 1, 2... حتى نجد الباقي 1. عدد الخطوات هو الدور <M>{`\\(p\\)`}</M>، ونشكل جدول البواقي حسب قيم <M>{`\\(n = pk + r\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">بين أن العدد <M>{`\\(A\\)`}</M> يقبل القسمة على <M>{`\\(b\\)`}</M></div>
                <div className="mid-col">التحقق من أن الباقي معدوم <M>{`\\(A \\equiv 0 \\pmod b\\)`}</M></div>
                <div className="right-col">استعمال خواص الموافقات (الجمع، الضرب، الأس) وتبسيط العبارة خطوة بخطوة حتى نصل للصفر.</div>
            </div>
            <div className="step-row">
                <div className="left-col">عين قيم <M>{`\\(n\\)`}</M> حتى يكون الكسر <M>{`\\(\\dfrac{A(n)}{B(n)}\\)`}</M> عدداً طبيعياً</div>
                <div className="mid-col">كتابة الكسر على شكل <M>{`\\(q + \\dfrac{r}{B(n)}\\)`}</M></div>
                <div className="right-col">القيام بالقسمة الإقليدية أو التفكيك، ثم البحث عن قيم <M>{`\\(n\\)`}</M> التي تجعل <M>{`\\(B(n)\\)`}</M> قاسماً للعدد الثابت <M>{`\\(r\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">استنتج باقي قسمة عدد ضخم جداً <M>{`\\(X\\)`}</M> على <M>{`\\(b\\)`}</M></div>
                <div className="mid-col">استغلال الدورية أو مبرهنة فيرما الصغرى</div>
                <div className="right-col">نقسم أس العدد الضخم على الدور <M>{`\\(p\\)`}</M> لنكتبه <M>{`\\(pk + r\\)`}</M>، فنجد الباقي مباشرة من جدول البواقي للرتبة <M>{`\\(r\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">حل الجملة: <M>{`\\(x+y=a\\)`}</M> و <M>{`\\(PGCD(x,y)=d\\)`}</M></div>
                <div className="mid-col">استبدال <M>{`\\(x=dx'\\)`}</M> و <M>{`\\(y=dy'\\)`}</M></div>
                <div className="right-col">تصبح المعادلة <M>{`\\(x'+y' = \\dfrac{a}{d}\\)`}</M> بشرط أن يكون <M>{`\\(x'\\)`}</M> و <M>{`\\(y'\\)`}</M> أوليين فيما بينهما. نختبر الأزواج المحتملة.</div>
            </div>
            <div className="step-row">
                <div className="left-col">اكتب العدد في نظام التعداد ذي الأساس <M>{`\\(a\\)`}</M></div>
                <div className="mid-col">النشر وفق قوى الأساس <M>{`\\(a\\)`}</M></div>
                <div className="right-col">تذكر أن الأرقام المكتوبة في نظام التعداد ذي الأساس <M>{`\\(a\\)`}</M> يجب أن تكون أصغر تماماً من <M>{`\\(a\\)`}</M>.</div>
            </div>
            <div className="step-row">
                <div className="left-col">ادرس بواقي القسمة على 7 واستنتاج باقي مجاميع كبرى</div>
                <div className="mid-col">تحليل الدورية وفصل الحدود</div>
                <div className="right-col">نعوض كل حد بباقيه حسب دوره (مثال <M>{`\\(n=3k+1\\)`}</M>) ثم نجمع البواقي ونقسم على 7 لتصغير الناتج.</div>
            </div>
            <div className="step-row">
                <div className="left-col">كيف نثبت أن الكسر <M>{`\\(\\dfrac{P}{Q}\\)`}</M> غير قابل للاختزال باستعمال مبرهنة بيزو؟</div>
                <div className="mid-col"><M>{`\\(\\alpha P + \\beta Q = 1\\)`}</M> مع <M>{`\\(\\alpha, \\beta \\in \\mathbb{Z}\\)`}</M></div>
                <div className="right-col">نطبق خوارزمية إقليدس الممتدة على البسط والمقام للوصول إلى توليفة بيزو. الحصول على 1 يعني أن <M>{`\\(PGCD(P, Q) = 1\\)`}</M> أي أن الكسر غير قابل للاختزال.</div>
            </div>

            <div className="step-row">
                <div className="left-col">استعمل التعداد العكسي (إيجاد الأساس <M>{`\\(b\\)`}</M> لحل معادلة)</div>
                <div className="mid-col">تحويل المشكلة إلى معادلة من الدرجة الثانية</div>
                <div className="right-col">ننشر العبارة المكتوبة بالأساس المجهول لتصبح <M>{`\\(x \\cdot b^2 + y \\cdot b + z = N\\)`}</M> ونحلها لإيجاد <M>{`\\(b\\)`}</M></div>
            </div>


            <div className="step-row">
                <div className="left-col">عين القاسم المشترك الأكبر للأعداد من الشكل <M>{`\\(2^n - 1\\)`}</M></div>
                <div className="mid-col">خاصية <M>{`\\(PGCD(a^n-1, a^m-1)\\)`}</M><M>{`\\(= a^{PGCD(n,m)} - 1\\)`}</M></div>
                <div className="right-col">طريقة سريعة جداً لاستنتاج القاسم المشترك في تمارين الأعداد الخاصة بشعبة الرياضيات.</div>
            </div>

            <div className="step-row">
                <div className="left-col">أثبت أولية عدد (اختبار القسمة)</div>
                <div className="mid-col">القسمة على الأعداد الأولية حتى الجذر التربيعي</div>
                <div className="right-col">إذا لم يقبل القسمة على أي عدد أولي أصغر من أو يساوي جذره التربيعي، فهو أولي حتماً.</div>
            </div>

        </>
    );
};

export default BacIntelligence;