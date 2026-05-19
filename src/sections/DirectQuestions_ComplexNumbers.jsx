import React from 'react';

const DirectQuestions_ComplexNumbers = () => {
    return (
        <>
            <div id="toc-direct-complex" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الثالث: الأعداد المركبة</div>



            {/* Exercise 1: Algebraic and Exponential Forms */}
            <div key={1} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '10pt',
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
                        fontSize: '9pt',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '1px'
                    }}>
                        1
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '10pt', textAlign: 'right' }}>
                        <span>{" اكتب الأعداد التالية على الشكل الجبري ثم الأسي:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '10pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z_1 = (1+i)^2\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z_2 = \\frac{1-i}{1+i}\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z_3 = e^{i\\pi/3} \\cdot e^{i\\pi/6}\\)"}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Solving Equations in C */}
            <div key={2} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '10pt',
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
                        fontSize: '9pt',
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
                        fontSize: '10pt',
                        paddingRight: '0px',
                        direction: 'rtl',
                        textAlign: 'right',
                        unicodeBidi: 'plaintext'
                    }}>
                        <span>{"حل في مجموعة الأعداد المركبة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\mathbb{C}\\)"}</span>
                        <span>{" المعادلات التالية:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '10pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z^2 - 2z + 2 = 0\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z^2 + 4 = 0\\)"}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 3: Geometric Transformations */}
            <div key={3} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '10pt',
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
                        fontSize: '9pt',
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
                        fontSize: '10pt',
                        paddingRight: '0px',
                        direction: 'rtl',
                        textAlign: 'right',
                        unicodeBidi: 'plaintext'
                    }}>
                        <span>{"عين طبيعة وعناصر التحويل النقطي "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f\\)"}</span>
                        <span>{" الذي يرفق بكل نقطة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(M(z)\\)"}</span>
                        <span>{" النقطة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(M'(z')\\)"}</span>
                        <span>{" حيث:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '10pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z' = z + 1 - i\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z' = 2z + i\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z' = i z + 1\\)"}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 4: Set of Points */}
            <div key={4} style={{
                background: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                marginBottom: '4px',
                borderRight: '4px solid #1e3a5f',
                fontSize: '10pt',
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
                        fontSize: '9pt',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '1px'
                    }}>
                        4
                    </span>
                    <div style={{
                        marginRight: '0px',
                        lineHeight: '1.7',
                        color: '#1e3a5f',
                        fontWeight: '600',
                        fontSize: '10pt',
                        paddingRight: '0px',
                        direction: 'rtl',
                        textAlign: 'right',
                        unicodeBidi: 'plaintext'
                    }}>
                        <span>{"عين مجموعة النقط "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(M\\)"}</span>
                        <span>{" ذات اللاحقة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(z\\)"}</span>
                        <span>{" في كل حالة:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#1e3a5f',
                    fontWeight: '600',
                    fontSize: '10pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #93c5fd',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(|z - 1 + i| = 2\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(|z - i| = |z + 1|\\)"}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DirectQuestions_ComplexNumbers;
