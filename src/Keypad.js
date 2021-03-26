import React, { Component } from 'react';

class Keypad extends React.Component{

    render(){

        return(
        <div className="Keypad">

        {this.props.children}

        </div>
        );

    }
}

export default Keypad;