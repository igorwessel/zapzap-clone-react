import React from 'react'
import './Home.css'

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <div className="logo-home">
                    <h2>Whatsapp Clone feito em React para aprendizado</h2>
                    <p>Desenvolvido por <a href='https://www.github.com/igorwessel' rel="noopener noreferrer" target='_blank'>Igor Wessel da Silva</a></p>
                    <p> Adicione um contato para começar a utilizar.</p>
                </div>
            </div>
        );
    }
}

export default Home