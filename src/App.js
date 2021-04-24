import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/users/login/login";
import Register from "./components/users/register/register";
import Profile from "./components/users/profile/profile";
import Admin from "./components/admin/admin";
import ProductTable from "./components/buyer/shopping/product-table";
import BuyerTable from "./components/admin/buyer-table";
import SellerTable from "./components/admin/seller-table";
import React from "react";
import SellerStore from "./components/seller/seller-store/seller-store";
import ShoppingMain from "./components/buyer/shopping/shopping-main";


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
              <Route path="/products">
                  <ProductTable/>
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
              <Route path={["/shopping/:shopBy/:idDrink",
                            "/shopping/:shopBy"]}
                     exact={true}
                     component={ShoppingMain}>
              </Route>
              <Route path="/admin"

                     exact={true}
                     component={Admin}>
              </Route>

              {/*<Route path="/admin/buyers"*/}
              {/*       exact={true}*/}
              {/*       component={BuyerTable}>*/}
              {/*</Route>*/}
              {/*<Route path="/admin/sellers"*/}
              {/*       exact={true}*/}
              {/*       component={SellerTable}>*/}
              {/*</Route>*/}

              <Route path="/store/:sellerId"
                     exact={true}>
                  <SellerStore/>
              </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
