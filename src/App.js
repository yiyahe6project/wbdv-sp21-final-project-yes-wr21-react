import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/users/login/login";
import Register from "./components/users/register/register";
import Profile from "./components/users/profile/profile";
import SellerStore from "./components/seller/seller-store/seller-store";

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
              <Route path="/login"
                     exact={true}
                     component={Login}>
              </Route>
              <Route path="/register"
                     exact={true}
                     component={Register}>
              </Route>
              <Route path="/profile"
                     exact={true}
                     component={Profile}>
              </Route>
              <Route path="/store/:sellerId"
                     exact={true}>
                  <SellerStore/>
              </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
