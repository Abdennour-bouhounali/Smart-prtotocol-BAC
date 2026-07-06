import React from 'react';

const DirectQuestions_Functions = () => {
    return (
        <>
            <div id="toc-direct" style={{ display: 'none' }}></div>
            <div id="toc-direct-functions" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الأول: الدوال العددية، الأسية واللوغاريتمية</div>


            {/* Exercise 1: Limits */}
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
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" احسب النهايات التالية:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to +\\infty} \\frac{x^3}{\\ln x - x}\\]"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to 0} \\frac{e^{2x} - e^x}{x}\\]"}</span>
                        <span>{" (باستخدام تعريف العدد المشتق)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"3) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to 0^>} x^2 (\\ln x)^3\\]"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"4) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\[\\lim_{x \\to +\\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)\\]"}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Asymptotes and Position */}
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
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" أجب عما يلي بخصوص المقاربات والوضع النسبي:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span>{"لتكن الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\sqrt{x^2+x+1}\\)"}</span>
                        <span>{". عين المستقيم المقارب المائل بجوار "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(+\\infty\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"لتكن الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = x + 1 - \\frac{x}{e^x-1}\\)"}</span>
                        <span>{". ادرس وضعية المنحنى بالنسبة للمقارب المائل "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y = x+1\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 3: Derivatives */}
            <div key={3} style={{
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
                        3
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" عين الدالة المشتقة في كل حالة مما يلي:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\ln(x + \\sqrt{x^2+1})\\)"}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = x^{x}\\)"}</span>
                        <span>{" (حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x > 0\\)"}</span>
                        <span>{")"}</span>
                    </div>

                </div>
            </div>

            {/* Exercise 4: Graphical Discussion */}
            <div key={4} style={{
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
                        4
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" مسائل البرهان ونظرية القيم المتوسطة:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span>{"بين أن المعادلة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x^3 + x - 1 = 0\\)"}</span>
                        <span>{" تقبل حلاً وحيداً "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\alpha\\)"}</span>
                        <span>{" في المجال "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(]0.6, 0.7[\\)"}</span>
                        <span>{"."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"إذا كان "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(\\alpha) = 0\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(x) = x^2 + 1 - \\ln x\\)"}</span>
                        <span>{"، برهن أن "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(\\alpha) = \\frac{\\alpha+1}{\\alpha-1}\\)"}</span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\frac{x + \\ln x}{x-1}\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 5: Theorems and Proofs */}

            <div key={5} style={{
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
                        5
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>

                        <span>{" ناقش بيانياً عدد وإشارة حلول المعادلات التالية:"}</span>
                    </div>
                </div>

                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>


                    {/* Sub-question 1 */}
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(g(x) = g(m)\\)"}
                        </span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(g(x) = \\frac{x^2+1}{x}\\)"}
                        </span>
                        <span>{"."}</span>
                    </div>

                    {/* Sub-question 2 with equation */}
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>

                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(|e^x - 1| - e^{-m} = 0\\)"}
                        </span>
                        <span>{" حيث "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>
                            {"\\(f(x) = x - \\ln|e^x - 1|\\)"}
                        </span>
                        <span>{" "}</span>
                    </div>

                    {/* Graph image — centered below, constrained width */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                        marginBottom: '4px'
                    }}>
                        <img
                            src="/src/images/graphes.png"
                            alt="رسم بياني للمناقشة"
                            style={{
                                maxWidth: '100%',
                                width: '420px',
                                height: 'auto',
                                border: '1px solid #E0E8F5',
                                borderRadius: '6px',
                                padding: '6px',
                                background: '#F7FAFD',
                                display: 'block'
                            }}
                        />
                    </div>

                </div>
            </div>


            {/* Exercise 6: Variations and Composition */}
            <div key={6} style={{
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
                        6
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <span>{" دراسة اتجاه التغير والتركيب:"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"1) "}</span>
                        <span>{"ادرس اتجاه تغير الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(g(x) = x - 1 - \\ln x\\)"}</span>
                        <span>{" ثم استنتج إشارتها."}</span>
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <span>{"2) "}</span>
                        <span>{"إذا كان "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f'(x) = x(x-2)\\)"}</span>
                        <span>{"، استنتج اتجاه تغير الدالة المركبة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(h(x) = f(x^2)\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 7: Specific Properties */}
            <div key={7} style={{
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
                        7
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#445566' }}>المعطيات:</strong> <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = (x+1)e^{-x}\\)"}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div>
                        <span>{"برهن أن الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f\\)"}</span>
                        <span>{" تحقق المعادلة التفاضلية "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(y'' + 2y' + y = 0\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            <div key={8} style={{
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
                        8
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#445566' }}>المعطيات:</strong> <span>{"لتكن الدالة "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\frac{x^2+3}{x+1}\\)"}</span><span>{" ولتكن النقطة "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(A(0, -1)\\)"}</span><span>{"."}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div>
                        <span>{"اكتب معادلات المماسات للمنحنى "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((C_f)\\)"}</span>
                        <span>{" التي تشمل النقطة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(A\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            <div key={9} style={{
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
                        9
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#445566' }}>المعطيات:</strong> <span>{"لتكن الدالة "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\frac{2x^2-4x+5}{x-1}\\)"}</span><span>{"."}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div>
                        <span>{"برهن أن النقطة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(\\Omega(1, 0)\\)"}</span>
                        <span>{" هي مركز تناظر للمنحنى "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\((C_f)\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            <div key={10} style={{
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
                        10
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
                        <span>{"برهن أنه من أجل كل "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x \\in [0, 1]\\)"}</span>
                        <span>{"، لدينا "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x e^{1-x} \\ge x\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>

            <div key={11} style={{
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
                        11
                    </span>
                    <div style={{ lineHeight: '1.5', fontSize: '11pt', textAlign: 'right' }}>
                        <strong style={{ color: '#445566' }}>المعطيات:</strong> <span>{"لتكن الدالة "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f(x) = \\ln|x|\\)"}</span><span>{" و "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(k(x) = |f(|x|)|\\)"}</span><span>{"."}</span>
                    </div>
                </div>
                <div style={{
                    marginRight: '20px',
                    lineHeight: '1.7',
                    color: '#004D99',
                    fontWeight: '600',
                    fontSize: '11pt',
                    paddingRight: '8px',
                    borderRight: '2px solid #66AAFF',
                    direction: 'rtl',
                    textAlign: 'right',
                    unicodeBidi: 'plaintext'
                }}>
                    <div>
                        <span>{"اشرح كيف يمكن رسم منحنى الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(k\\)"}</span>
                        <span>{" انطلاقاً من منحنى الدالة "}</span>
                        <span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(f\\)"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DirectQuestions_Functions;
