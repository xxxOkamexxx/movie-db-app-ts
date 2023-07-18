import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()

  return (
    <div 
      className='logo-container'
      onClick={() => navigate('/')}
    >
      <svg 
        width={'100px'}
        height={'90px'}
        className='logo'
      >
        <text x='50%'  y='45px' textAnchor='middle' alignmentBaseline='baseline' fontFamily="'Braah One', sans-serif" fontSize='32'>
          <tspan fill='url(#logo-gradient)'>TMdb</tspan>
        </text>
        <text x='50%' y='65px' textAnchor='middle' alignmentBaseline="after-edge" fontFamily='Verdana, Geneva, Tahoma, sans-serif' fontSize='12'>
        <tspan fill='url(#logo-gradient)'>TheMovie db</tspan>
        </text>
        <defs>
          <linearGradient id='logo-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='10%' stopColor='#f285c1' />
            <stop offset='50%' stopColor='#732650' />
            <stop offset='100%' stopColor='#f285c1' />
          </linearGradient>
        </defs>
      </svg>
      
    </div>
  )
}

export default Logo
