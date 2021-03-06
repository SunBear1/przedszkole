import "./App.css";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import Home from "./pages";
import {Helmet} from 'react-helmet';

function App() {
    return (
        <Router>
            <Helmet><title>Leśny Fordon</title></Helmet>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/signin" component={SigninPage} /> */}
                <Redirect to="/"/>
            </Switch>
    </Router>
  );
}

export default App;
