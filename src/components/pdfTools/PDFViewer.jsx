import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function PDFViewer({ fileUrl }) {
    return (
        <div style={{ height: '750px' }}>
            <Viewer fileUrl={fileUrl} />
        </div>
    );
}

export default PDFViewer;
