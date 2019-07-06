import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.css";

import {Provider} from './context';

import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Contacts from './components/contacts/contacts';
import NotFound from './components/pages/NotFound';
import Test from './components/test/test';

import "@fortawesome/fontawesome-free/css/all.css";


class App extends Component {
    render() { 
        return ( 
            <Provider>
                <Router>
                    <div>
                        <Header branding="Contact Manager"/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/contact/add" component={AddContact}/>
                                <Route exact path="/contact/edit/:id" component={EditContact}/>
                                <Route exact path="/about" component={About}/>  
                                <Route exact path="/test" component={Test}/>
                                <Route component={NotFound}/>                             
                            </Switch>
                        </div>                
                    </div>  
                </Router>                
            </Provider>
            
         );
    }
}
 
export default App;