import React from 'react';
import Produtos from './carousel';
import "./style.css";

export default class Corpo extends React.Component{
    render(){
        return(
            <div className="corpo">
                <h1>Conheça um pouco dos nossos produtos</h1>
                <Produtos />
            </div>
        );
    }
}