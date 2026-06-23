import React from 'react';

const DirectQuestions_Sequences = () => {
    return (
        <>
            <div id="toc-direct-sequences" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الثاني: المتتاليات العددية</div>



            {/* Exercise 1: Induction and Inequalities */}
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
                        <span>{" برهن بالتراجع صحة كل من الخاصيات التالية:"}</span>
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
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(0 < u_n < 1\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0 = \\frac{1}{2}\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} = \\frac{2u_n}{u_n+1}\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_n < 2\\)"}</span>
                        <span>{" والمتتالية متزايدة، حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0 = 1\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} = \\sqrt{u_n+2}\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0 = 1\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} \\le \\frac{3}{4} u_n\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Variations and Limits */}
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
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" دراسة اتجاه التغير والنهايات:"}</span>
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
                        <span>{"ادرس اتجاه تغير المتتالية "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((u_n)\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} - u_n = \\frac{-u_n^2 + u_n + 2}{u_n + 3}\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(0 < u_n < 2\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"إذا كان "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(0 < u_n \\le \\left(\\frac{3}{4}\\right)^n\\)"}</span>
                        <span>{"، استنتج نهاية المتتالية."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 3: Helper Sequences (Arithmetic/Geometric) */}
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
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" المتتاليات المساعدة والعبارات العامة:"}</span>
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
                        <span>{"عين العدد "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\alpha\\)"}</span>
                        <span>{" حتى تكون "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(v_n = \\frac{u_n - \\alpha}{u_n + 3}\\)"}</span>
                        <span>{" هندسية، حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} = \\frac{2u_n+3}{u_n+4}\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 4: Sums and Products */}
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
                        <span>{" احسب المجاميع والجدائات التالية بدلالة "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(n\\)"}</span><span>{":"}</span>
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
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = v_0 + \\dots + v_n\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(v_n\\)"}</span>
                        <span>{" هندسية أساسها "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(1/2\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(v_0=3\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(P_n = 2^{u_0} \\times 2^{u_1} \\times \\dots \\times 2^{u_n}\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_n\\)"}</span>
                        <span>{" حسابية أساسها "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(r=2\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0=1\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(T_n = \\ln(v_0) + \\ln(v_1) + \\dots + \\ln(v_n)\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(v_n\\)"}</span>
                        <span>{" هندسية موجبة تماماً."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"4) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(S_n = \\ln\\!\\left(1-\\tfrac{1}{4}\\right) + \\ln\\!\\left(1-\\tfrac{1}{9}\\right) + \\dots + \\ln\\!\\left(1-\\tfrac{1}{(n+1)^2}\\right)\\)"}</span>
                        <span>{" بسط العبارة ثم ادرس النهاية."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 5: Integral Sequences */}
            <div key={5} style={{
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
                        5
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#475569' }}>المعطيات:</strong> <span>{"لتكن المتتالية التكاملية "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(I_n = \\int_0^1 x^n e^x dx\\)"}</span><span>{"."}</span>
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
                        <span>{"برهن أن "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(I_{n+1} = e - (n+1)I_n\\)"}</span>
                        <span>{" باستعمال المكاملة بالتجزئة."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"برهن أن المتتالية "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((I_n)\\)"}</span>
                        <span>{" متناقصة ومتقاربة."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span>{"برهن أن "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(0 \\le I_n \\le \\frac{e}{n+1}\\)"}</span>
                        <span>{" ثم احسب نهايتها."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 6: Adjacent and Fixed Sequences */}
            <div key={6} style={{
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
                        6
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#475569' }}>المعطيات:</strong> <span>{"لتكن "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_{n+1} = \\frac{u_n + v_n}{2}, v_{n+1} = \\frac{u_n + 2v_n}{3}\\)"}</span><span>{" مع "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(u_0 = 1, v_0 = 2\\)"}</span><span>{"."}</span>
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
                        <span>{"برهن أن المتتاليتين "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((u_n)\\)"}</span>
                        <span>{" و "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((v_n)\\)"}</span>
                        <span>{" متجاورتان."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"عين الثابتين "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(a, b\\)"}</span>
                        <span>{" بحيث تكون "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(w_n = a u_n + b v_n\\)"}</span>
                        <span>{" متتالية ثابتة."}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DirectQuestions_Sequences;
