import React from "react";
import { connect } from "react-redux";

import { PDFViewer } from "@react-pdf/renderer";
import { Document, Page } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
//import { Document, Page } from "react-pdf";

///import MyDocument from "../contents/MyDocument";

class Topics extends React.Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  //{ReactPDF.render(`http://www.pdf995.com/samples/pdf.pdf`)}
  componentWillMount() {
    // ReactPDF.render(<MyDocument />, `http://www.pdf995.com/samples/pdf.pdf`);
  }
  render() {
    const topicId = this.props.match.params.id;
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        {/* <h1>Data</h1>
        {this.props.contents
          .filter(content => content._id === this.props.topic.content)
          .map(content => {
            return <h1 key={content._id}>{content.content_text}</h1>;
          })} */}
        {/* {/*  */};
        {/* <PDFViewer>
          <MyDocument />
        </PDFViewer> */}
        {/* <Document file={sample} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
      </div>
    );
  }
}
const MyDocument = () => (
  <Document>
    <Page size="A4"></Page>
  </Document>
);

const mapStateToProps = (state, props) => {
  const topicId = props.match.params.id;
  return {
    topic: state.topics.find(topic => topic._id == topicId),
    topics: state.topics,
    contents: state.contents
  };
};
export default connect(mapStateToProps)(Topics);
