import Navbar from "./Navbar";
import Overview from "./Overview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Content from "./Content";
import NotFound from './NotFound';
import Footer from "./Footer";
import Update from "./Update"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/Update/:id">
              <Update />
            </Route>
            <Route path="/tale/:id">
              <Content />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
