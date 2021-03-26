import React, { Component } from 'react';
import Calculator from"./Calculator";
import Button from "./Button";
import Display from "./Display";
import Keypad from "./Keypad";
class App extends Component {
    state = {  }
    render() { 
        return (

      
           <Calculator/>,
           < Button />,
           <Display/>,
           <Keypad/>
        
          );
    }
}
 
export default App;