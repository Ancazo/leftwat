import 'materialize-css/dist/css/materialize.min.css'
import { ThemeContextProvider } from './Components/ThemeProvider'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {
    LandingPage, 
    LoginPage, 
    UploadPage
    } from './Pages'

function App() {
    return (
        <Router>
            <ThemeContextProvider>
                <div className="App">
                    <Switch>
                        <Route path ='/upload'>
                            <UploadPage/>
                        </Route>

                        <Route path ='/login'>
                            <LoginPage/>
                        </Route>
                        
                        <Route path = '/'>
                            <LandingPage />
                        </Route>
                        
                    </Switch>
                </div>
            </ThemeContextProvider>
        </Router>
    );
}

export default App;
