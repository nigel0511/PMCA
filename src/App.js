import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import StringClass from "./components/musicLessons/StringClass";
import PianoClass from './components/musicLessons/PianoClass'
import GuitarClass from './components/musicLessons/GuitarClass'
import RuanClass from './components/musicLessons/RuanClass'
import TheoryClass from './components/musicLessons/TheoryClass'
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav></Nav>
          <Switch>
            <Route path="/string" component={StringClass}></Route>
            <Route path="/piano" component={PianoClass}></Route>
            <Route path="/guitar" component={GuitarClass}></Route>
            <Route path="/ruan" component={RuanClass}></Route>
            <Route path="/theory" component={TheoryClass}></Route>
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
