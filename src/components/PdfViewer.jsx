import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ fileUrl }) => {
  return (
    <div className="pdf-viewer">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
