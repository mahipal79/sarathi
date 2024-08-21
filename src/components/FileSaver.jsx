import React from 'react';
import { saveAs } from 'file-saver';

function DownloadButton({ fileUrl }) {
    const downloadFile = () => {
        saveAs(fileUrl, 'downloaded_file.pdf');
    };

    return (
        <button onClick={downloadFile}>
            Download PDF
        </button>
    );
}

export default DownloadButton;
