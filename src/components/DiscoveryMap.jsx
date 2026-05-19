import connectionStep from '../images/connection_step.jpg';

const CONTAINER_STYLE = {
    fontFamily: '"Amiri", "Traditional Arabic", serif',
    direction: "rtl",
    background: "#fff",
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    maxWidth: '100%',
    margin: "8px auto",
    padding: '18px 22px',
    position: 'relative',
    backgroundImage: `
        linear-gradient(to right, #f1f5f9 1px, transparent 1px),
        linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    color: '#1e293b'
};

export const DiscoveryProblem = () => (
    <div style={{ padding: '4px', fontSize: '0.92rem', lineHeight: '1.8' }}>
        <div style={{ fontWeight: 'bold', color: '#1e3a5f', marginBottom: '0px', fontSize: '1rem' }}>مثال: متتاليات</div>
        <div style={{ marginBottom: '0px' }}>
            نعتبر المتتالية <span className="math">{"\\((U_n)\\)"}</span> معرّفة بـ :
            <span style={{ direction: 'ltr', display: 'inline-block', margin: '0 10px' }}>
                <span className="math">{"\\(U_0 = 8\\)"}</span>
            </span>
            و من أجل كل طبيعي <span className="math">{"\\(n\\)"}</span>:
            <span style={{ direction: 'ltr', display: 'inline-block', margin: '0 10px' }}>
                <span className="math">{"\\(U_{n+1} = \\frac{5U_n}{3U_n + 5}\\)"}</span>
            </span>
        </div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '5px' }}>
            1. نعتبر المتتالية <span className="math">{"\\((V_n)\\)"}</span> المعرفة بـ :
            <span style={{ direction: 'ltr', display: 'inline-block', margin: '0 10px', fontWeight: 'bold' }}>
                <span className="math">{"\\(V_n = \\frac{5}{U_n}\\)"}</span>
            </span>
            <br />
            - بيّن أن <span className="math">{"\\((V_n)\\)"}</span> حسابية يُطلب تعيين أساسها وحدها الأول.
        </div>
    </div>
);

export const DiscoveryTranslation = () => (
    <div style={CONTAINER_STYLE}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div style={{
                width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #991b1b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 'bold', color: '#991b1b'
            }}>1</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#991b1b' }}>الترجمة الرياضية (تحديد الهدف):</div>
        </div>
        <div style={{ paddingRight: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '6px 0' }}>
                <div style={{ fontSize: '0.9rem' }}><span className="math">{"\\((V_n)\\)"}</span> حسابية :</div>
                <div style={{ direction: 'ltr', background: '#fffbeb', padding: '3px 8px', borderRadius: '4px', border: '1px dashed #f59e0b', fontSize: '0.9rem' }}>
                    <span className="math">{"\\(V_{n+1} = V_n + r\\)"}</span>
                </div>
            </div>
            <div style={{
                marginTop: '5px',
                padding: '5px 15px',
                background: '#fef2f2',
                borderRadius: '10px',
                borderRight: '4px solid #ef4444'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#991b1b' }}>الهدف الرياضي :</div>
                    <div style={{ direction: 'ltr', fontSize: '0.95rem', color: '#b91c1c' }}>
                        <span className="math">{"\\(V_{n+1} - V_n = r\\)"}</span><span> : إثبات أن </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const DiscoveryInventory = () => (
    <div style={CONTAINER_STYLE}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
            <div style={{
                width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #991b1b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 'bold', color: '#991b1b'
            }}>2</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#991b1b' }}>جرد المعطيات الربط مع الهدف :</div>
        </div>
        <div style={{
            padding: '5px',
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}>
            <img
                src={connectionStep}
                alt="تجسيد المعطيات والربط"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
            />
        </div>
        <div style={{
            marginTop: 5, background: "#f0f9ff", borderRadius: 8,
            padding: "5px 14px", fontSize: '0.85rem', color: "#0369a1",
            border: "1px solid #bae6fd",
        }}>
            <strong>آلية التفكير:</strong> ابدأ بالمعطى الأكثر شبهاً بالهدف، ثم ابنِ سلسلة من الروابط المنطقية.
        </div>
    </div>
);

const DiscoveryMap = () => (
    <>
        <DiscoveryProblem />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5px 0',
            color: '#e11d48',
            fontSize: '24px',
        }}>
            <div style={{ transform: 'rotate(90deg)' }}>⟹</div>
        </div>
        <DiscoveryTranslation />
        <DiscoveryInventory />
    </>
);

export default DiscoveryMap;
