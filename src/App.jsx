import Footer from "./Footer";
import Nav from "./Nav";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import Section_7 from "./Section_7";
function App() {
  return (
    <>
      <Nav />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <hr style={{
        border: "1px solid #646464"
      }} />
      <Footer />
    </>
  );
}

export default App;
