import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Dandan from "./components/teacheProfile/Dandan";
// import Kong from "./components/teacheProfile/Kong";
// import Julian from "./components/teacheProfile/Julian";
// import Marco from "./components/teacheProfile/Marco";
// import Cheng from "./components/teacheProfile/Cheng";
// import Alex from "./components/teacheProfile/Alex";
// import Felicia from "./components/teacheProfile/Felicia";
// import StringClass from "./components/musicLessons/StringClass";
// import PianoClass from "./components/musicLessons/PianoClass";
// import GuitarClass from "./components/musicLessons/GuitarClass";
// import RuanClass from "./components/musicLessons/RuanClass";
// import TheoryClass from "./components/musicLessons/TheoryClass";

const Dandan = React.lazy(() => import("./components/teacheProfile/Dandan"));
const Kong = React.lazy(() => import("./components/teacheProfile/Kong"));
const Julian = React.lazy(() => import("./components/teacheProfile/Julian"));
const Marco = React.lazy(() => import("./components/teacheProfile/Marco"));
const Cheng = React.lazy(() => import("./components/teacheProfile/Cheng"));
const Alex = React.lazy(() => import("./components/teacheProfile/Alex"));
const Felicia = React.lazy(() => import("./components/teacheProfile/Felicia"));
const StringClass = React.lazy(() =>
  import("./components/musicLessons/StringClass")
);
const PianoClass = React.lazy(() =>
  import("./components/musicLessons/PianoClass")
);
const RuanClass = React.lazy(() =>
  import("./components/musicLessons/RuanClass")
);
const TheoryClass = React.lazy(() =>
  import("./components/musicLessons/TheoryClass")
);
const GuitarClass = React.lazy(() =>
  import("./components/musicLessons/GuitarClass")
);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav></Nav>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/string">
                <StringClass />
              </Route>
              <Route path="/piano">
                <PianoClass />
              </Route>
              <Route path="/guitar">
                <GuitarClass />
              </Route>
              <Route path="/ruan">
                <RuanClass />
              </Route>
              <Route path="/theory">
                <TheoryClass />
              </Route>
              <Route path="/dandan">
                <Dandan />
              </Route>
              <Route path="/kong">
                <Kong />
              </Route>
              <Route path="/julian">
                <Julian />
              </Route>
              <Route path="/marco">
                <Marco />
              </Route>
              <Route path="/cheng">
                <Cheng />
              </Route>
              <Route path="/alex">
                <Alex />
              </Route>
              <Route path="/felicia">
                <Felicia />
              </Route>
              <Route path="/home" component={Home}></Route>
              <Route render={() => <Redirect to="/home" />} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
