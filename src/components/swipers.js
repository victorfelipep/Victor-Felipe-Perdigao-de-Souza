import React, { useEffect, useState, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules';
import '../index.css'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import gestao_orcamento from '../assets/swiper-img/gestao_orcamento.png'
import monitoramento_prodes from '../assets/swiper-img/monitoramento_prodes.png'
import qatar_cup from '../assets/swiper-img/qatar_cup.png'
import portifolio_victor from '../assets/swiper-img/este_site.png'
import { useDoubleTap } from 'use-double-tap';


const projetosPowerBI = [
    {id:0, idHTML:'gestao_orcamento', img:gestao_orcamento, link:'https://app.powerbi.com/links/adDnaRXZM1?ctid=168d4137-d6f6-45f8-aaa7-d1a70233095e&pbi_source=linkShare'},
    {id:1, idHTML:'monitoramento_prodes', img:monitoramento_prodes, link:'https://app.powerbi.com/links/WQh6tW0KT5?ctid=168d4137-d6f6-45f8-aaa7-d1a70233095e&pbi_source=linkShare&bookmarkGuid=c8c16ea3-0a8f-42b9-a937-29577f746069'},
]

const projetosDesenvolvimento = [
    {id:0, idHTML:'qatar_cup', img:qatar_cup, link:'https://victorfelipep.github.io/world-cup-simulator/'},
    {id:1, idHTML:'portifolio_victor ', img:portifolio_victor, link:'#'},
]

function Swipers(){
    var isMobile = false; 
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true
    }
    const [renderType, setRenderType] = useState(0)
    const [stylePBI, setStylePBI] = useState('type-box-clicked')
    const [styleDev, setStyleDev] = useState('type-box')

    const handleClick = event => {
        if(event.target.id == 'pbi-select' || event.target.className == 'pbi-select'){
            setStylePBI('type-box-clicked')
            setStyleDev('type-box')
            setRenderType(0)
        }
        else if(event.target.id == 'dev-select' || event.target.className == 'dev-select'){
            setStylePBI('type-box')
            setStyleDev('type-box-clicked')
            setRenderType(1)
        }
        console.log(styleDev)
    }

    const handleDblClickPBI = event => {
        window.open(
            projetosPowerBI[parseInt(event.target.name, 10)].link
        )
    }

    const handleDblClickDev = event => {
        window.open(
            projetosDesenvolvimento[parseInt(event.target.name, 10)].link
        )
    }
    const doubleTapPBI = useDoubleTap(isMobile ? (event) => {
      handleDblClickPBI(event)
    } : null)
    const doubleTapDev = useDoubleTap(isMobile ? (event) => {
      handleDblClickDev(event)
    } : null)




    return(
        <div>
            <div className='container-fluid mt-3 mb-5 '>
                <ul className='list-unstyled text-center'>
                    <div className="row  justify-content-center" >
                            <div className="col-12 col-md-6 col-lg-3" onClick={event => handleClick(event)}>
                                <li className={stylePBI} id="pbi-select">
                                    <div className="pt-1 font-weight-bold">
                                        <p className="pbi-select">
                                            Power BI
                                        </p>
                                    </div>
                                </li>
                            </div>
                            <div className="mt-2 mt-md-0 col-12 col-md-6 col-lg-3" onClick={event => handleClick(event)}>
                                <li className={styleDev} id="dev-select">
                                    <div className="pt-1 font-weight-bold">
                                        <p className="dev-select">
                                            Desenvolvimento
                                        </p>
                                    </div>
                                </li>
                            </div>
                    </div>
                </ul>
            </div>


            <div className="pt-5">
                <ul className="list-unstyled row">
                    <div className="col-10 col-md-4 mx-auto">
                        {renderType == 0 &&
                        <Swiper
                            className="swiper-css"
                            modules={[EffectCube, Pagination]} 
                            effect="cube"
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            
                        >
                            {projetosPowerBI.map((projeto) =>{
                                const { id, idHTML, img } = projeto
                                return(
                                        <SwiperSlide {...doubleTapPBI} key={id} onDoubleClick={event => handleDblClickPBI(event)}><li className="swiper-card d-flex"><div className="my-auto mx-auto"><img  src={img} id={idHTML} name={id}></img></div></li>
                                        </SwiperSlide>
                                )
                            })}
                        </Swiper>}
                        {renderType == 1 &&
                        <Swiper
                            className="swiper-css"
                            modules={[EffectCube, Pagination]} 
                            effect="cube"
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            
                        >
                            {projetosDesenvolvimento.map((projeto) =>{
                                const { id, idHTML, img } = projeto
                                return(
                                        <SwiperSlide {...doubleTapDev} key={id} onDoubleClick={event => handleDblClickDev(event)}><li className="swiper-card d-flex"><div className="my-auto mx-auto"><img  src={img} id={idHTML} name={id}></img></div></li>
                                        </SwiperSlide>
                                )
                            })}
                        </Swiper>}
                    </div>
                </ul>
            </div>
        </div>  
    )
}

export default Swipers
