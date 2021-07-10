import 'materialize-css/dist/css/materialize.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {LandingPage, LoginPage} from './Pages'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path ='/login'>
                        <LoginPage/>
                    </Route>
                    
                    <Route path = '/'>
                        <LandingPage />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App;
