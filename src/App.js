import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route path="/" exact={true}>
            <HomeScreen/>
          </Route>
          <Route path={["/search", "/search/:name"]}
                 exact={true}>
            <SearchScreen/>
          </Route>
          <Route path="/details/:id" exact={true}>
            <DetailsScreen/>
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
