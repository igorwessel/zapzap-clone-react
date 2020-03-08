import React from 'react'
import './Main.css'

class Main extends React.Component{
    render(){
        return (
            <div className="messages">
                <div className="logo-messages">
                    <h2>Whatsapp Clone feito em React para aprendizado</h2>
                    <p>Desenvolvido por <a href='https://www.github.com/igorwessel' rel="noopener noreferrer" target='_blank'>Igor Wessel da Silva</a></p>
                    <p> Adicione um contato para começar a utilizar.</p>
                </div>
            </div>
        );
    }
}

export default Main