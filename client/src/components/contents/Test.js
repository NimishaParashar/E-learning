import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const ExamplePDFViewer = () => {
  return (
    <PDFViewer
      document={{
        url: "http://www.africau.edu/images/default/sample.pdf"
      }}
    />
  );
};

export default ExamplePDFViewer;
//("https://arxiv.org/pdf/quant-ph/0410100.pdf");
