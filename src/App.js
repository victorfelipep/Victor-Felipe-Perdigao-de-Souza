import React from "react"
import Header from './components/header'
import Sobre from './components/sobre'
import Habilidades from './components/habilidades'
import Qualificacoes from './components/qualificacoes'
import Portifolio from './components/portifolio'
import Footer from './components/footer'

function App(){
return(
    <>
        <Header/>
        <div id="todos">
            <Sobre/>
            <Habilidades/>
            <Qualificacoes/>
            <Portifolio/>
            <Footer/>
        </div>
    </>
)}

export default App