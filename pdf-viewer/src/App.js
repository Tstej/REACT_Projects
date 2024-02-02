// src/App.js
import React from 'react';
import PDFViewer from './PDFViewer';

const App = () => {
  const pdfUrl = 'https://drive.google.com/file/d/16yRdXUmXpOPOsNio9YVEPawY1fK_byr3/view';

  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;
