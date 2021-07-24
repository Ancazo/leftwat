import "materialize-css/dist/css/materialize.min.css";
import { ThemeContextProvider } from "./services/ThemeProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  UploadPage,
  InventoryPage,
  DashboardPage,
  MenuPage,
  DashboardHistoryPage
} from "./Pages";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className="App">
          <Switch>
            <Route path="/menu">
              <MenuPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/inventory">
              <InventoryPage />
            </Route>
            <Route path="/upload">
              <UploadPage />
            </Route>

            <Route path="/login" component={LoginPage}/>
              

            <Route path="/history"> 
              <DashboardHistoryPage />
            </Route>

            <Route path="/" component={LandingPage}/>
          </Switch>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
