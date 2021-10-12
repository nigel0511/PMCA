import Nav from "./components/Nav";
import MasterHead from "./components/MasterHead";
import About from "./components/About";
import MyGallery from "./components/MyGallery";
import MusicLesson from "./components/MusicLesson";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SimpleMap from "./components/Map"

function App() {
  return (
    <div className="App">
      <Nav />
      <MasterHead />
      <About />
      <MyGallery />
      <MusicLesson />
      <Teachers />
      {/* <SimpleMap/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
