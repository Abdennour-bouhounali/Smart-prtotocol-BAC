import React from 'react';

const tocData = [
    { title: "المقدمة", id: "toc-introduction", type: "chapter" },
    { title: "الفصل 1: بروتوكول SMART لحل المسائل الرياضية", id: "toc-methodology", type: "chapter" },
    { title: "1.1 بروتوكول SMART", id: "toc-smart", type: "section" },
    { title: "1.1.1 المرحلة الأولى: تحليل التمرين (Scan)", id: "toc-step1", type: "subsection" },
    { title: "1.1.2 المرحلة الثانية: ترجمة نص التمرين و السؤال (Math Translate)", id: "toc-step2", type: "subsection" },
    { title: "1.1.3 المرحلة الثالثة: تحديد الهدف الحقيقي رياضيا (Aim)", id: "toc-step3", type: "subsection" },
    { title: "1.1.4 المرحلة الرابعة: تحديد المعطيات و ربطها للوصول للحل (Relate)", id: "toc-step4", type: "subsection" },
    { title: "1.1.5 المرحلة الخامسة: التحقق من النتيجة (Test)", id: "toc-step5", type: "subsection" },
    { title: "1.2 تقنيات تصحيح الأخطاء وتعزيز الأداء", id: "toc-techniques", type: "section" },
    { title: "1.3 بروتوكول تدقيق الأخطاء الذاتي", id: "toc-audit", type: "section" },
    { title: "1.4 حلول تطبيقات بروتوكول SMART", id: "toc-solution-smart", type: "section" },
    { title: "الفصل 2: ملحق المعلمين — بروتوكول القيادة التكتيكية", id: "toc-teacher", type: "chapter" },
    { title: "الفصل 3: التحليل الاستراتيجي لأسئلة البكالوريا", id: "toc-bac", type: "chapter" },
    { title: "3.1 الدوال", id: "toc-bac-functions", type: "section" },
    { title: "3.2 المتتاليات", id: "toc-bac-sequences", type: "section" },
    { title: "3.3 الأعداد المركبة", id: "toc-bac-complex", type: "section" },
    { title: "3.4 الاحتمالات", id: "toc-bac-probabilities", type: "section" },
    { title: "3.5 الهندسة الفضائية", id: "toc-bac-geometry", type: "section" },
    { title: "3.6 التكامل والمعادلات التفاضلية", id: "toc-bac-integrals", type: "section" },
    { title: "الفصل 4: أسئلة مباشرة للتدريب", id: "toc-direct", type: "chapter" },
    { title: "فلسفة التدريب بالأسئلة المباشرة", id: "toc-direct-questions-intro", type: "section" },
    { title: "4.1 المحور الأول: الدوال العددية، الأسية واللوغاريتمية", id: "toc-direct-functions", type: "section" },
    { title: "4.2 حلول الأسئلة المباشرة - الدوال العددية، الأسية واللوغاريتمية", id: "toc-sol-direct-functions", type: "section" },
    { title: "4.3 المحور الثاني: المتتاليات العددية", id: "toc-direct-sequences", type: "section" },
    { title: "4.4 حلول الأسئلة المباشرة - المتتاليات العددية", id: "toc-sol-direct-sequences", type: "section" },
    { title: "4.5 المحور الثالث: الأعداد المركبة", id: "toc-direct-complex", type: "section" },
    { title: "4.6 حلول الأسئلة المباشرة - الأعداد المركبة", id: "toc-sol-direct-complex", type: "section" },
    { title: "4.7 المحور الرابع: الحساب التكاملي والمعادلات التفاضلية", id: "toc-direct-integrals", type: "section" },
    { title: "4.8 حلول الأسئلة المباشرة - الحساب التكاملي والمعادلات التفاضلية", id: "toc-sol-direct-integrals", type: "section" },


    { title: "التمرين الرابع بكالوريا 2016 شعبة رياضيات — دراسة دالة لوغاريتمية ومتتالية تكاملية", id: "toc-exercice4", type: "chapter" },
    { title: "الخاتمة", id: "toc-conclusion", type: "chapter" },
];

const TableOfContents = () => {
    return (
        <>
            <div className="exercise-title" style={{ marginBottom: '30px', textAlign: 'center', direction: 'rtl' }}>
                الفهرس
            </div>

            {tocData.map((item, index) => {
                const isChapter = item.type === 'chapter';
                const isSection = item.type === 'section';

                return (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            paddingRight: isChapter ? '0' : isSection ? '25px' : '50px',
                            marginTop: isChapter && index > 0 ? '10px' : '0',
                            marginBottom: '8px',
                            fontWeight: isChapter ? '700' : (isSection ? '600' : '400'),
                            color: isChapter ? '#2c3e50' : '#333',
                            fontSize: isChapter ? '13pt' : isSection ? '11.5pt' : '10.5pt',
                            pageBreakInside: 'avoid',
                            breakInside: 'avoid',
                            width: '100%',
                            direction: 'rtl'
                        }}
                    >
                        <span style={{
                            paddingLeft: '8px',
                            background: '#fff',
                            zIndex: 1
                        }}>
                            {(() => {
                                const match = item.title.match(/^([\d\.]+)\s+(.*)$/);
                                if (match) {
                                    const reversedNumber = match[1].split('.').reverse().join('.');
                                    return (
                                        <>
                                            <span dir="ltr" style={{ display: 'inline-block', unicodeBidi: 'embed' }}>{reversedNumber}</span>
                                            {' '}{match[2]}
                                        </>
                                    );
                                }
                                return item.title;
                            })()}
                        </span>
                        <span style={{
                            flexGrow: 1,
                            borderBottom: '2px dotted #bdc3c7',
                            position: 'relative',
                            top: '-4px',
                            zIndex: 0
                        }}></span>
                        <span className="toc-page-num" data-target-id={item.id} style={{
                            fontWeight: 'bold',
                            color: isChapter ? '#2c3e50' : '#1a5276',
                            background: '#fff',
                            paddingRight: '8px',
                            zIndex: 1
                        }}>
                            -
                        </span>
                    </div>
                );
            })}
        </>
    );
};

export default TableOfContents;
