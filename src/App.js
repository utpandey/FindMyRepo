
import React, { useState } from 'react';
import {BrowserRouter as Route, Switch,useLocation,Router } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import { createBrowserHistory } from 'history';
// import Modal from './components/Modal';
import UsersPage from './components/UsersPage';
import {AnimatePresence} from 'framer-motion'
//import { Router } from '@material-ui/icons';

function App() {
  
  const location = useLocation();
  const history = createBrowserHistory();
  // const [base, setBase] = useState<string>("");
  // const [toppings, settToppings] = useState<string[]>([]);
  // const [showModal, setShowModal] = useState<boolean>(false);

  // const addBase = (base: string) => {
  //   setBase(base )
  // }
  
  // const addTopping = (topping:string):void => {
  //   let newToppings: string[];
  //   if(!toppings.includes(topping)){
  //     newToppings = [...toppings, topping];
  //   } else {
  //     newToppings = toppings.filter((item:any) => item !== topping);
  //   }
  //   settToppings(newToppings);
  // }


  //  onExitComplete={() => setShowModal(false)}
  return (
    <Router history={history}>
    <React.Fragment>
        <Header />
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
          <AnimatePresence exitBeforeEnter={true}>
            <Switch location={location} key={location.key}>
              {/* <Route path="/base">
                <Base addBase={addBase} base={base} toppings={toppings}  setShowModal={setShowModal} />
              </Route>
              <Route path="/toppings">
                <Toppings addTopping={addTopping} base={base} toppings={toppings} />
              </Route>
              <Route path="/order">
                <Order addBase={addBase}  base={base} toppings={toppings} setShowModal={setShowModal}/>
              </Route> */}
               {/* component={Home} component={UsersPage} / */}
             
              <Route path="/users" >
                <UsersPage />
              </Route>
              <Route exact path="/" >
                <Home />
              </Route>
                {/* <UsersPage /> */} 
              
                {/* <Home />
              </Route> */}
              
              </Switch>
          </AnimatePresence>
        </React.Fragment>
        </Router>
  );
}

export default App;


// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject",


// import Base from './components/Base';
// import Toppings from './components/Toppings';
// import Order from './components/Order';