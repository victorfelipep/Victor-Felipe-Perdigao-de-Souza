import React from "react"
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import Victor from '../assets/victor.png'

function Sobre(){

return(
    <section id="sobre" className="container-fluid">
        <div className="sobre row">
            <div className="col-4 d-lg-flex d-none">
                <img src={Victor} alt="" className="mt-5 ms-lg-5 foto-victor" id="foto-victor"></img>
            </div>
            <div className="col-5 d-md-flex d-lg-none d-none side-md-pic" >
                <img src={Victor} alt="" className="mt-5 ms-2" id="foto-victor-md"></img>
            </div>
            <div className="col-12 col-md-7 col-xl-6 text-white" >
                <h1 className="display-1 " id="titulo-sobre">Quem sou eu?</h1>
                <p id="texto-sobre">
                    Meu nome é Victor Felipe Perdigão de Souza. Sou desenvolvedor full-stack, procurando sempre evoluir e melhorar meus conhecimentos em diversas áreas.
                    Sou curioso e estou sempre buscando novos desafios que me façam quebrar barreiras. Atualmente venho trabalhando em projetos próprios para adquirir prática
                    e me manter por dentro deste mundo. Cursando Bacharelado em Ciência e Tecnologia e Bacharelado em Engenharia de Informação na UFABC - Universidade Federal do ABC.
                    Possuo certificados de cursos na área de desenvolvimento web.
                </p>
            </div>
        </div>
    </section>    
)
}

export default Sobre