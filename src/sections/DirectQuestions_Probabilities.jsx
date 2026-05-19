import React from 'react';

const DirectQuestions_Probabilities = () => {
    return (
        <>
            <div id="toc-direct-probabilities" className="exercise-title" style={{ textAlign: 'center', direction: 'rtl' }}>المحور الخامس: الاحتمالات</div>


            {/* Exercise 1: Counting and Basic Probabilities */}
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
                        <strong style={{ color: '#475569' }}>المعطيات:</strong> <span>{"كيس يحتوي على "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"5"}</span><span>{" كرات حمراء و "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"3"}</span><span>{" كرات خضراء. نسحب كرتين في آن واحد."}</span>
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
                    <div>
                        <span>{"احسب احتمال الحصول على كرتين من نفس اللون."}</span>
                    </div>
                </div>
            </div>

            {/* Exercise 2: Random Variables and Expectation */}
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
                    <div style={{ lineHeight: '1.5', fontSize: '10pt', textAlign: 'right' }}>
                        <span>{" إذا كان قانون الاحتمال للمتغير "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(X\\)"}</span><span>{" معطى بالجدول التالي:"}</span>
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
                    <div style={{ overflowX: 'auto', marginBottom: '4px' }}>
                        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(x_i\\)"}</span></td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>0</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>1</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>2</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(P(X=x_i)\\)"}</span></td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>0.2</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>0.5</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>0.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <strong>المطلوب:</strong><span>{" احسب الأمل الرياضياتي "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(E(X)\\)"}</span><span>{" والتباين "}</span><span className="math" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{"\\(V(X)\\)"}</span><span>{"."}</span>
                    </div>
                </div>
            </div>


        </>
    );
};

export default DirectQuestions_Probabilities;
