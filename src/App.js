import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dandan from "./components/teacheProfile/Dandan";
import Kong from "./components/teacheProfile/Kong";
import Julian from "./components/teacheProfile/Julian";
import Marco from "./components/teacheProfile/Marco";
import Cheng from "./components/teacheProfile/Cheng";
import Alex from "./components/teacheProfile/Alex";
import Felicia from "./components/teacheProfile/Felicia";
import Home from "./components/Home";
// import MasterHead from "./components/MasterHead";
// import About from "./components/About";
// import MyGallery from "./components/MyGallery";
// import MusicLesson from "./components/MusicLesson";
// import Teachers from "./components/Teachers";
// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav></Nav>
          <Switch>
            <Route path="/dandan" component={Dandan}></Route>
            <Route path="/kong" component={Kong}></Route>
            <Route path="/julian" component={Julian}></Route>
            <Route path="/marco" component={Marco}></Route>
            <Route path="/cheng" component={Cheng}></Route>
            <Route path="/alex" component={Alex}></Route>
            <Route path="/felicia" component={Felicia}></Route>
            <Route path="/home" component={Home}></Route>
            <Route render={() => <Redirect to="/home" />} />

          </Switch>

          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
