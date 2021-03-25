import React from 'react';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import whatsapp from './img/whatsapp.png';
import logo from './img/logo.jpg'

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div>
                <img className="logo" src={logo}/>
                </div>
                <div className="contatos">
                    <h2>Visite nossas redes sociais!</h2>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100004621355665" target="_blank"><img className="icone" src={facebook}/></a>
                        <a href="https://www.instagram.com/bazarvilaalta/" target="_blank"><img className="icone" src={instagram}/></a>
                        <a href="https://api.whatsapp.com/send?phone=5518997324026" target="_blank"><img className="icone" src={whatsapp}/></a>
                    </div>
                    <h2>Venha conhecer nossa loja!</h2>
                    <h3>Av. Jaú, 159 - Vila Dourados, Tarumã - SP</h3>
                </div>
            </div>
        );
    }
}