import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import qatarSimulator from '../assets/cards/qatar-simulator.png'
import portifolioVictor from '../assets/cards/portifolio-victor.png'
import estoqueSmartBom from '../assets/cards/estoque-smartbom.png'
import { useDoubleTap } from 'use-double-tap';

import styles from '../styles.module.css'

const cards = [
  '',
  estoqueSmartBom,
  portifolioVictor,
  qatarSimulator
]

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1.5,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 2, y: -1000 })

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Cards() {
  const [indexCarta, setIndexCarta] = useState(0)
  var isMobile = false; 
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true
  }
  const doubleTap = useDoubleTap(isMobile ? () => {
      handleDblClick()
    } : null)
  function handleDblClick() {
    if (indexCarta === 3) {
      window.open(
        'https://victorfelipep.github.io/world-cup-simulator/',
        '_blank' 
        )
    }
    if (indexCarta === 2) {
      window.location.reload()
    }
    if (indexCarta === 1) {
      window.open(
        'https://smartbom-estoque.herokuapp.com/',
        '_blank' 
        )
    }
  }
  const [gone] = useState(() => new Set()) 
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) 
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.6 : 1.5
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    setIndexCarta(index)
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div {...doubleTap} onDoubleClick={handleDblClick} className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export default function Deck() {
  return (
    <div className={styles.containerC}>
      <Cards />
    </div>
  )
}
