
import React, { useState } from 'react';
import { Route, Switch,useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

// import Modal from './components/Modal';
import UsersPage from './components/UsersPage';
import {AnimatePresence} from 'framer-motion'

function App(): JSX.Element {
  
  const location = useLocation();
  const [base, setBase] = useState<string>("");
  const [toppings, settToppings] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

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
    <>
      
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
              <Route path="/users">
                <UsersPage />
              </Route>  
              <Route path="/">
                <Home />
              </Route>
              
              </Switch>
          </AnimatePresence>
        
    </>
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