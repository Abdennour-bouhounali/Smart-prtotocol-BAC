import React from 'react';

const DirectQuestions_Integrals = () => {
    return (
        <>
            <div id="toc-direct-integrals" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الرابع: الحساب التكاملي والمعادلات التفاضلية</div>



            {/* Exercise 1: Primitive Functions */}
            <div key={1} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#1e3a5f',
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
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" عين الدوال الأصلية للدوال التالية:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = (x^2+1)e^x\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\frac{\\ln x}{x}\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\cos^2 x\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"4) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\frac{1}{x \\ln x}\\)"}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Integration by Parts */}
            <div key={2} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#1e3a5f',
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
                        color: '#1e3a5f',
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

            {/* Exercise 3: Definite Integrals and Areas */}
            <div key={3} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#1e3a5f',
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
                        3
                    </span>
                    <div style={{
                        marginRight: '0px',
                        lineHeight: '1.7',
                        color: '#1e3a5f',
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

            {/* Exercise 4: Differential Equations */}
            <div key={4} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '11pt',
                direction: 'rtl',
                textAlign: 'right'
            }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                    <span style={{
                        background: '#1e3a5f',
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
                        4
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" حل المعادلات التفاضلية التالية:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y' + 2y = 0\\)"}</span>
                        <span>{" مع الشرط "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y(0)=1\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y'' + 4y = 0\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y' = 2y + 3\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DirectQuestions_Integrals;
