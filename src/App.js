import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/users/login/login";
import Register from "./components/users/register/register";
import Profile from "./components/users/profile/profile";
import PublicProfile from "./components/users/profile/public-profile";
import Admin from "./components/admin/admin";
import React from "react";
import SellerStore from "./components/seller/seller-store/seller-store";
import ProductDetails from "./components/admin/products-manager/product-details"
import ShoppingMain from "./components/buyer/shopping/shopping-main";
import OrdersList from "./components/buyer/orders/orders-list";
import SellerTable from "./components/admin/seller-manager/seller-table";
import preSearch from "./components/preSearch";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path={["/search", "/search/:name"]}
                     exact={true}
                    component={preSearch}>
                  {/*<preSearch/>*/}
                  {/*<Search/>*/}
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

              <Route path={["/profile/:userId",
                            "/profile/authority/:auth/:userId",
              ]}
                     exact={true}
                     component={PublicProfile}>
              </Route>
              <Route path={["/shopping/:shopBy/:idDrink",
                            "/shopping/:shopBy",
                            "/shopping"]}
                     exact={true}
                     component={ShoppingMain}>
              </Route>
              <Route path={['/orders',
                            '/admin/buyers/:buyer_id/orders']}
                     exact={true}
                     component={OrdersList}>
              </Route>
              <Route path={[
                  "/admin/:adminId",
                  "/admin/:adminId/sellers",
                  "/admin/:adminId/products",
                  "/admin/:adminId/buyers",
                  ]}
                     exact={true}
                     component={Admin}>
              </Route>
                <Route path={["/admin/products/:drinkName/details",
                            "/products/:drinkName/details"]}
                           exact={true}
                           component={ProductDetails}>
                </Route>
              <Route path="/product/:drinkName/sellers"
                     exact={true}
                     component={SellerTable}>
              </Route>
              <Route path={["/store/:sellerId", "/admin/store/:sellerId"]}
                     exact={true}>
                  <SellerStore/>
              </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
