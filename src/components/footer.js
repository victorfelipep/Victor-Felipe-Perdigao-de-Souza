import React from 'react'
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faWhatsapp, faLinkedin)


function Footer(){

    const telefone = '(11) 96573-1362'

    return(
       <div className='bg-black mb-0 mt-4' id='footer'>
           <div className='container text-white'>
                <div className='float-start'>
                    <h6>Contato:</h6>
                    <div>
                        <span><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>
                        <span className='ms-2'>victor99perdigao@outlook.com</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></span>
                        <span className='ms-2'>{telefone}</span>
                    </div>
                    <div className='mt-4'>
                        <p>Website criado em React</p>
                    </div>
                    <div className='mt-1'>
                        <p>	&copy; 2022 - Victor Felipe Perdigão de Souza</p>
                    </div>
                </div>
                <div className='float-end redes'>
                    <span className='me-2'><a href="https://www.linkedin.com/in/victor-felipe-perdig%C3%A3o-de-souza-907953192/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></span>
                </div>
           </div>
       </div> 
    )

}

export default Footer