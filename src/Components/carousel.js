import React from 'react';
import Carousel from 'react-elastic-carousel';
import eletronico from './img/loja/eletronico.png';
import papelaria from './img/loja/papelaria.png';
import roupa_adulto from './img/loja/roupas-adultos.png';
import roupa_infantil from './img/loja/roupas-infantis.png';

export default class Produtos extends React.Component {
    state = {
      items: [
        {id: 1, title: 'Eletronicos e Variados', img:eletronico},
        {id: 2, title: 'Papelaria', img:papelaria},
        {id: 3, title: 'Roupas para adultos', img:roupa_adulto},
        {id: 4, title: 'Roupas infantis', img:roupa_infantil}
      ]
    }
  
    render () {
      const { items } = this.state;
      return (
        <Carousel>
          {items.map(item => <div className='produtos' key={item.id}><img src={item.img} alt={item.title}/><br/><span className="nomeProduto">{item.title}</span></div>)}
        </Carousel>
      )
    }
  }