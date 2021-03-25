import React from 'react';
import "./style.css";
import Mercado_Livre from './img/logo-mercado-livre.png';
import Taruma from './img/taruma_logo.png';

export default class Loja extends React.Component{
    render(){
        return(
            <div className="loja_Fundo">
                <div>
                    <div className="loja">
                        <h1>Venha Conhecer nossa loja online</h1>
                        <div>
                            <a href=""><img src={Mercado_Livre} alt='logo-mercado-livre'/></a>
                            <a href="https://compredetaruma.com.br/lojas/bazar-vila-alta/"><img src={Taruma} alt='logo-mercado-livre'/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}