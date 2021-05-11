import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddEditcontact from "./Components/AddEditcontact/AddEditcontact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactlist from "./Components/ContactList/Contactlist";
import ContactCard from "./Components/ContactCard/ContactCard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Home />
                {/* <ContactCard /> */}
                {/* <Navbar /> */}
                <Switch>
                    <Route path="/" exact component={Contactlist} />
                    <Route
                        path="/(addcontact|editContact)"
                        exact
                        component={AddEditcontact}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
