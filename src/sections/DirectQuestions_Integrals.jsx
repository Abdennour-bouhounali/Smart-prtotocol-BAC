import React from 'react';

const DirectQuestions_Integrals = () => {
    return (
        <>
            <div id="toc-direct-integrals" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الرابع: الحساب التكاملي والمعادلات التفاضلية</div>



            {/* Exercise 1: Integration by Parts */}
            <div key={1} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #E0E8F5',
                marginBottom: '4px',
                borderRight: '4px solid #004D99',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#004D99',
                        color: 'white',
                        borderRadius: '4px',
                        minWidth: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11pt',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '1px'
                    }}>
                        1
                    </span>
                    <div style={{
                        marginRight: '0px',
                        lineHeight: '1.7',
                        color: '#004D99',
                        fontWeight: '600',
                        fontSize: '11pt',
                        paddingRight: '0px',
                        direction: 'rtl',
                        textAlign: 'right',
                        unicodeBidi: 'plaintext'
                    }}>
                        <span>{"احسب التكامل التالي باستعمال المكاملة بالتجزئة: "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(I = \\int_1^e x^2 \\ln x \\, dx\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Definite Integrals and Areas */}
            <div key={2} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #E0E8F5',
                marginBottom: '4px',
                borderRight: '4px solid #004D99',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#004D99',
                        color: 'white',
                        borderRadius: '4px',
                        minWidth: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11pt',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '1px'
                    }}>
                        2
                    </span>
                    <div style={{
                        marginRight: '0px',
                        lineHeight: '1.7',
                        color: '#004D99',
                        fontWeight: '600',
                        fontSize: '11pt',
                        paddingRight: '0px',
                        direction: 'rtl',
                        textAlign: 'right',
                        unicodeBidi: 'plaintext'
                    }}>
                        <span>{"احسب مساحة الحيز المحصور بين منحنى الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = e^x - 1\\)"}</span>
                        <span>{" ومحور الفواصل والمستقيمين "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x=0\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x=\\ln 2\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DirectQuestions_Integrals;
