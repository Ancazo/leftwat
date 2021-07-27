import "materialize-css/dist/css/materialize.min.css";
import { ThemeContextProvider } from "./services/ThemeProvider";
import PrivateRoute from "../src/Components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  UploadPage,
  InventoryPage,
  DashboardPage,
  MenuPage,
  DashboardHistoryPage,
} from "./Pages";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className="App">
          <ToastContainer />

          <Switch>
            <PrivateRoute path="/menu">
              <MenuPage />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path="/inventory">
              <InventoryPage />
            </PrivateRoute>
            <PrivateRoute path="/upload">
              <UploadPage />
            </PrivateRoute>

            <Route path="/login" component={LoginPage} />

            <PrivateRoute path="/history">
              <DashboardHistoryPage />
            </PrivateRoute>

            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
