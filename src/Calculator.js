import React, { Component } from 'react';
import Button from "./Button";
import Display from "./Display";
import Keypad from "./Keypad";
import "./Calculator.css";



class Calculator extends React.Component{

    constructor(){
        super();
        this.state = {data: ""}
    }

    calculate = () => {
        try{
            const result = eval(this.state.data)
            this.setState({data: result});
        } catch (e){
            this.setState({data: 'error'})
        }   
    }

    handleclick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value){
            case 'clear':
                this.setState({data: ""});
                break;
            case 'equal':
                this.calculate();
                break;
            
                default:
                    this.setState({data : this.state.data + value});

        }
    }

    render(){
        return(

            <div className="Calculator">
                <Display data={this.state.data}/>
                <keypad>
                    <Button onclick={this.handleclick} label="C" value="clear"/>                   
                    <Button onclick={this.handleclick} label="7" value="7"/>
                    <Button onclick={this.handleclick} label="4" value="4"/>
                    <Button onclick={this.handleclick} label="1" value="1"/>
                    <Button onclick={this.handleclick} label="0" value="0"/>


                    <Button onclick={this.handleclick} label="/" value="/"/>
                    <Button onclick={this.handleclick} label="8" value="8"/>
                    <Button onclick={this.handleclick} label="5" value="5"/>
                    <Button onclick={this.handleclick} label="2" value="2"/>
                    <Button onclick={this.handleclick} label="." value="."/>


                    <Button onclick={this.handleclick} label="*" value="*"/>
                    <Button onclick={this.handleclick} label="9" value="9"/>
                    <Button onclick={this.handleclick} label="6" value="6"/>
                    <Button onclick={this.handleclick} label="3" value="3"/>
                    <Button onclick={this.handleclick} label="" value="null"/>


                    <Button onclick={this.handleclick} label="-" value="-"/>
                    <Button onclick={this.handleclick} label="+" size="2" value="+"/>
                    <Button onclick={this.handleclick} label="=" size="2" value="equal"/>

                </keypad>
            </div>

        );
    }
}

export default Calculator ;