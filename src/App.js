import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Blogs from "./components/Blogs";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
// import Footer2 from "./components/Footer-v2";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="hero"><Hero/></div>
      <div id="offer"><Offer /></div>
      <div id="blogs"><Blogs /></div>
      <div id="connect"><Connect/></div>
      <Footer />
    </div>
  );
}

export default App;
