import React from 'react'
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import TypeWriterEffect from 'react-typewriter-effect'
import Deck from './deck'

function Portifolio(){

    return(
        <div id='portifolio'>
            <div className='container-fluid portifolio'>
                <div className="text-center typewriter-title mb-5" id="typewriter-1">
                    <TypeWriterEffect
                        textStyle={{
                            textAlign: 'center',
                        }}
                        text = "PORTIFÓLIO"
                        typeSpeed={100}
                    />
                </div>
                <Deck/>
            </div>
            <h1 className='display-6 text-muted text-center mt-5'>
                ARRASTE PARA O LADO E DÊ UM DUPLO CLIQUE NO CARD PARA ACESSAR O PROJETO
            </h1>
        </div>
    )
}

export default Portifolio