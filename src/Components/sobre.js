import React from 'react';
import "./style.css";

export default class Sobre extends React.Component{
    render(){
        return(
            <div className="sobre">
                <div>
                    <h1>Bazar Vila Alta</h1>
                    <br/>
                    <h3>Somos uma loja familiar, há mais de 30 anos no mercado, com uma grande variedade de produtos para atender as nessecidaes de nossos clientes. </h3>
                    <br/>
                    <h3>Presamos sempre pela felicidade de nossos clientes e comodidade de trazer tudo o que podem precisar no dia a dia, seja papelaria, componentes eletronicos, roupas infantis e para adultos, brinquedos e muito mais.</h3>
                </div>
            </div>
        )
    }
}