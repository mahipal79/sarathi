import React from 'react';
import PDFViewer from './PDFViewer';
import DownloadButton from './DownloadButton';

function App() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=19sJjfDYWGSZDfoQxX7T8acPFr2z6zWvP';
    
    return (
        <div>
            <h1>PDF Viewer</h1>
            <PDFViewer fileUrl={fileUrl} />
            <DownloadButton fileUrl={fileUrl} />
        </div>
    );
}

export default App;
