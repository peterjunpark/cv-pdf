import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./Resume";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PDFViewer height={960} width={1000}>
        <Resume />
      </PDFViewer>
    </div>
  );
}

export default App;
