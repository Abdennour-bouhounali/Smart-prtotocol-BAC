import React from 'react';
import { RocketIcon } from '../components/PrintIcons';

const DirectQuestionsIntro = () => {
    return (
        <>
            <div id="toc-direct-questions-intro" className="exercise-title">
                فلسفة التدريب بالأسئلة المباشرة: لماذا هذا القسم؟
            </div>

            <div className="radar-box">
                <div className="radar-box-title" style={{ color: '#0066B3' }}>تحذير تربوي: العبرة ليست في "الحل"</div>
                <p>
                    عزيزي الطالب، الإنترنت يعج بآلاف التمارين والحلول المجانية. إذا كان هدفك هو مجرد رؤية "كيف يُحل التمرين" لتنتقل لغيره، فأنت تضيع وقتك.
                    الهدف من هذا القسم ليس إعطاؤك تمارين جديدة، بل هو <strong>تغيير طريقة عمل عقلك</strong> أثناء مواجهة المشكلة.
                </p>
            </div>

            <div className="radar-box" style={{ borderRightColor: '#007ACC' }}>
                <div className="radar-box-title" style={{ color: '#0066B3' }}>أهمية "التراكم" والنمذجة العقلية</div>
                <p>
                    المهارة الرياضية تشبه العضلة؛ لا تنمو بمشاهدة الآخرين يرفعون الأوزان، بل برفعها بنفسك. حل عدد كبير من الأسئلة المباشرة يبني عندك <strong>"الحدس الرياضي"</strong>، بحيث يصبح عقلك يتعرف على الأنماط بسرعة البرق دون تفكير مجهد.
                    نحن نستخدم هذه الأسئلة كمختبر لتطبيق بروتوكول <strong>SMART</strong>. الهدف هو أن تنتقل من العشوائية في التفكير إلى النظام.
                </p>
            </div>

            <div className="strategy-box" style={{ padding: '10px', margin: '15px 0' }}>
                <div className="strategy-box-title" style={{ fontSize: '13pt' }}><RocketIcon /> تحدي الصفحتين (قاعدة الـ A4)</div>
                <p style={{ fontSize: '11.5pt' }}>
                    قبل أن تفتح صفحة الحلول، نضع بين يديك هذا التحدي الصارم:
                    <br />
                    <strong>لا تنظر إلى الحل حتى تملأ صفحتين كاملتين (A4) من المحاولات الجادة.</strong>
                    <br />
                    حاول، ارسم، حلل، أخطئ، ابدأ من جديد.. هذه "الخربشات" هي اللحظات التي يتعلم فيها عقلك فعلاً. إذا استسلمت سريعاً، فأنت تحرم نفسك من فرصة النمو.
                </p>
            </div>

            <div className="verify-box">
                <div className="verify-box-title">كيف تقرأ الحلول في هذا الكتاب؟</div>
                <p style={{ marginBottom: '5px' }}>
                    لقد صممنا الحلول بنظام <strong>العمودين المزدوجين</strong> لمحاكاة "بث مباشر" لما يدور في عقل خبير أثناء الحل:
                </p>

                <div className="col-header-row-two">
                    <div className="col-header left-h">التفكير الداخلي (بروتوكول SMART)</div>
                    <div className="col-header right-h">الحل التفصيلي</div>
                </div>
                <div className="step-row-two" style={{ borderBottom: '1px solid #DDDDDD' }}>
                    <div className="left-col" style={{ fontSize: '11pt' }}>
                        يشرح لك <strong>"كيف أفكر"</strong>. هنا نطبق مراحل SMART (تحديد الهدف، الترجمة، الربط..). نخبرك لماذا اخترنا هذه الطريقة دون غيرها، وما هي الفخاخ التي تجنبناها.
                    </div>
                    <div className="right-col" style={{ fontSize: '11pt' }}>
                        هو ما تكتبه في ورقة الامتحان. خطوات رياضية جافة، دقيقة، ومنظمة.
                    </div>
                </div>

                <p style={{ marginTop: '5px', fontStyle: 'italic', textAlign: 'center' }}>
                    "هدفك هو محاكاة (Simulate) هذا الحوار الداخلي حتى يصبح جزءاً من شخصيتك الرياضية."
                </p>
            </div>
        </>
    );
};

export default DirectQuestionsIntro;
