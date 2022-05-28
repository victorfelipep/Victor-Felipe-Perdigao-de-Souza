import React from "react"
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import Html5 from '../assets/skills/html5.png'
import Css3 from '../assets/skills/css3.png'
import Js from '../assets/skills/js.png'
import ReactJS from '../assets/skills/react.png'
import Sass from '../assets/skills/sass.png'

function Habilidades(){

let habilidades = [
    {id:0, nome:'HTML5', img:Html5},
    {id:1, nome:'CSS3', img:Css3},
    {id:2, nome:'JavaScript', img:Js},
    {id:3, nome:'REACT', img:ReactJS},
    {id:4, nome:'SASS', img:Sass }
]

return(
    <section className="pt-5" id="habilidades">
        <h1 className="text-center">HABILIDADES E CONHECIMENTOS</h1>
        <div className="container">
            <div className="mt-5">
                <ul className="list-unstyled row">
                    {habilidades.map((habilidade) =>{
                        const { id, nome, img } = habilidade
                        return(
                            <div key={id} className="col-12 col-md-4 ">
                                <li className="mt-4 skill-box py-4 text-center">
                                    <h3>{nome}</h3>
                                    <img src={img} alt="nome" className={nome.toLowerCase()}></img>
                                </li>
                            </div>    
                        )
                    })}
                </ul>
            </div>
        </div> 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
    </section>
)
}

export default Habilidades