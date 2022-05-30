import React, { useEffect, useState } from "react"
import '../bootstrap/bootstrap.min.css'
import '../index.css'

function Certificados(){

let certificados = [
    {id:0, titulo:'Introduction to IOT', instituicao:'Cisco Networking Academy'},
    {id:1, titulo:'Competência transversal - Lógica de programação', instituicao:'Centro SENAI de Tecnologias Educacionais'},
    {id:2, titulo:'Desvendando a blockchain', instituicao:'Escola SENAI Almirante Tamandaré'},
    {id:3, titulo:'Desenvolvimento Web Completo 2022', instituicao:'Udemy'},
    {id:4, titulo:'Server-side Development with NodeJS, Express and MongoDB - The Hong Kong University of Science and Technology', instituicao:'Coursera'}
]

return(
    <div className="container mt-5" id="certificados">
        <h1 className="text-center">CERTIFICADOS</h1>
        <div className="mt-3">
            <div className="card w-100">
            <div className="card-body">
                    {certificados.map((certificado) => {
                        const { id, titulo, instituicao } = certificado
                        return(
                            <div key={id}>                    
                                <h5 className="card-title">{titulo}</h5>
                                 <h6 className="card-subtitle mb-2 text-muted">{instituicao}</h6>
                            </div>  
                        )
                    })}
            </div>
            </div>
        </div>
    </div>
)}

export default Certificados