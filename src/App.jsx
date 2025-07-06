import Footer from "./Footer";
import Nav from "./Nav";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import Section_7 from "./Section_7";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Section_1 />}></Route>
          <Route path="/services" element={<Section_2 />}></Route>
          <Route path="/about" element={<Section_3 />}></Route>
          <Route path="/since" element={<Section_4 />}></Route>
          <Route path="/testimonials" element={<Section_5 />}></Route>
          <Route path="/news" element={<Section_6 />}></Route>
          <Route path="/contact" element={<Section_7 />}></Route>
        </Routes>
        <hr
          style={{
            border: "1px solid #646464",
          }}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
