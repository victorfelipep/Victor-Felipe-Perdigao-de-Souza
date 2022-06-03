import React, { useEffect, useState } from "react"
import TypeWriterEffect from 'react-typewriter-effect'
import '../bootstrap/bootstrap.min.css'
import '../index.css'
import Html5 from '../assets/skills/html5.png'
import Css3 from '../assets/skills/css3.png'
import Js from '../assets/skills/js.png'
import ReactJS from '../assets/skills/react.png'
import Sass from '../assets/skills/sass.png'
import Bootstrap from '../assets/skills/bootstrap.png'
import Php from '../assets/skills/php.png'
import Nodejs from '../assets/skills/nodejs.png'
import Express from '../assets/skills/express.svg'
import JQuery from '../assets/skills/jquery.png'
import Mysql from '../assets/skills/mysql.png'
import MongoDB from '../assets/skills/mongodb.png'


function Habilidades(){

let habilidades = [
    {id:0, nome:'HTML5', img:Html5},
    {id:1, nome:'CSS3', img:Css3},
    {id:2, nome:'JavaScript', img:Js},
    {id:3, nome:'REACT', img:ReactJS},
    {id:4, nome:'SASS', img:Sass},
    {id:5, nome:'Bootstrap', img:Bootstrap},
    {id:6, nome:'PHP7', img:Php},
    {id:7, nome:'NodeJS', img:Nodejs},
    {id:8, nome:'Express', img:Express},
    {id:9, nome:'JQuery', img:JQuery},
    {id:10, nome:'MySQL', img:Mysql},
    {id:11, nome:'MongoDB', img:MongoDB}
]

document.addEventListener("scroll", handleSkillScroll)

const [render, setRender] = useState(false)
const [blankSpace, setBlankSpace] = useState(true)
var myRef = null

function handleSkillScroll(){
    if(window.scrollY > 380) {
        setRender(true)
        setBlankSpace(false)
    }
}

return(
    <section className="pt-5" id="habilidades">    
        <div className="container">
            <div className="text-center typewriter-title" id="typewriter-1">
                <TypeWriterEffect
                    textStyle={{
                        textAlign: 'center',
                    }}
                    text = "HABILIDADES E CONHECIMENTOS"
                    typeSpeed={100}
                />
            </div>
            <div className="mt-5">
                <ul className="list-unstyled row">
                    {render && habilidades.map((habilidade) =>{
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
        {blankSpace &&
            <div className="row"> 
            {blankSpace &&  habilidades.map((habilidade) =>{
                const { id, nome, img } = habilidade
                return(
                        <div key={id} className="col-12 col-md-4 ">
                            <div className="mt-4 py-4 blank-box text-center">
                            </div>
                        </div>   
                )
            })
            }
            </div>
        }
        </div>
    </section>
)
}

export default Habilidades