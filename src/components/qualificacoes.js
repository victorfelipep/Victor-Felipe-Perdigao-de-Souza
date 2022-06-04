import React, { useEffect, useState } from "react"
import TypeWriterEffect from 'react-typewriter-effect'
import Certificados from "./certificados"
import '../timeline.css'
import Curriculo from '../curriculo/CURRICULO_VICTOR.pdf'

function Qualificacoes(){
    return(
        <div id="qualificacoes" className="pt-3 mt-4">
            <div className="text-center typewriter-title my-4" id="typewriter-1">
                <TypeWriterEffect
                    textStyle={{
                        textAlign: 'center',
                    }}
                    text = "QUALIFICAÇÕES"
                    typeSpeed={100}
                    cursorColor="#FFFFFF"
                />
            </div>
            <div className="page container">
                <div className="timeline"> {/* INÍCIO ITEM TIMELINE*/}
                    <div className="timeline__group">
                        <span className="timeline__year status" aria-hidden="true">2014 - 2016</span>
                        <div className="timeline__cards">
                            <div className="timeline__card card">
                                <div className="card__header">
                                    <span className="status bg-success">
                                        <span className="text-white">CONCLUÍDO</span>
                                    </span>
                                    <h3 className="card__title r-title">C.E. SESI 094</h3>
                                </div>
                                <div className="card__content">
                                    <p>Ensino Médio Completo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> { /* FIM ITEM TIMELINE */ }
                <div className="timeline"> {/* INÍCIO ITEM TIMELINE*/}
                    <div className="timeline__group">
                        <span className="timeline__year status" aria-hidden="true">2017 - 2018</span>
                        <div className="timeline__cards">
                            <div className="timeline__card card">
                                <div className="card__header">
                                    <span className="status bg-success">
                                        <span className="text-white">CONCLUÍDO</span>
                                    </span>
                                    <h3 className="card__title r-title">Escola Senai Almirante Tamandaré</h3>
                                </div>
                                <div className="card__content">
                                    <p>CAI - Eletricista de Manutenção Eletroeletrônica</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> { /* FIM ITEM TIMELINE */ }
                <div className="timeline"> {/* INÍCIO ITEM TIMELINE*/}
                    <div className="timeline__group">
                        <span className="timeline__year status" aria-hidden="true">2022 - 2025</span>
                        <div className="timeline__cards">
                            <div className="timeline__card card">
                                <div className="card__header">
                                    <span className="status bg-primary">
                                        <span className="text-white">CURSANDO</span>
                                    </span>
                                    <h3 className="card__title r-title">UFABC - Universidade Federal do ABC</h3>
                                </div>
                                <div className="card__content">
                                    <p>Bacharelado em Ciência e Tecnologia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> { /* FIM ITEM TIMELINE */ }
                <div className="timeline"> {/* INÍCIO ITEM TIMELINE*/}
                    <div className="timeline__group">
                        <span className="timeline__year status" aria-hidden="true">2022 - 2027</span>
                        <div className="timeline__cards">
                            <div className="timeline__card card">
                                <div className="card__header">
                                    <span className="status bg-primary">
                                        <span className="text-white">CURSANDO</span>
                                    </span>
                                    <h3 className="card__title r-title">UFABC - Universidade Federal do ABC</h3>
                                </div>
                                <div className="card__content">
                                    <p>Bacharelado em Engenharia de Informação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> { /* FIM ITEM TIMELINE */ }
            </div>
            <Certificados/>
            <div className="container text-center mt-4">
                <h2 className="text-white p-3">BAIXE MEU CURRÍCULO COMPLETO PARA MAIS INFORMAÇÕES</h2>
                <a className="btn btn-lg btn-main" href={Curriculo} download>BAIXAR CURRÍCULO EM PDF</a>
            </div>
        </div>    
    )
}

export default Qualificacoes