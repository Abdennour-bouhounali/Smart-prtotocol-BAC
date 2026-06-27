import React from 'react';
import summaryPageImg from '../summary/summary_page-1.png';

const Summary = () => {
    return (
        <>
            <div id="toc-summary" style={{ display: 'none' }}></div>
            <div 
                className="summary-page-container" 
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <img 
                    src={summaryPageImg} 
                    alt="مخطط بروتوكول SMART الشامل" 
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'contain',
                        display: 'block'
                    }} 
                />
            </div>
        </>
    );
};

export default Summary;
