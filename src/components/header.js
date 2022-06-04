import React from 'react'
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import Logo from '../assets/logo.png'

function Header(){

function goToHome(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}
function goToSkills(){
    var topOfElement = document.querySelector('#habilidades').offsetTop - 30
    window.scrollTo({top: topOfElement, behavior: 'smooth'})
}
function goToAcademy(){
    var topOfElement = document.querySelector('#qualificacoes').offsetTop - 70
    window.scrollTo({top: topOfElement, behavior: 'smooth'})
}
function goToProjects(){
    var topOfElement = document.querySelector('#portifolio').offsetTop - 90
    window.scrollTo({top: topOfElement, behavior: 'smooth'})
}

return(
    <header className='sticky-top'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <a className="navbar-brand" href="#"><img width={200} alt="Victor Souza" src={Logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link" onClick={goToHome} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={goToSkills} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Habilidades</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={goToAcademy} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Qualificações</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={goToProjects} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Portifólio</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)}

export default Header