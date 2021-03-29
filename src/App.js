import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path={["/search", "/search/:name"]}
                     exact={true}>
                  <Search/>
              </Route>
              <Route path="/details/:id" exact={true}>
                  <Details/>
              </Route>
              <Route path="/login" exact={true}>
                  <Login/>
              </Route>
              <Route path="/register" exact={true}>
                  <Register/>
              </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
