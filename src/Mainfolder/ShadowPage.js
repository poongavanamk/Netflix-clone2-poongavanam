import React from 'react'
import img from './Shadowpage.png'
import MoretoWatch from './MoretoWatch'

export default function ShadowPage() {
  return (
    <div>
        <div className='Shadowpage'>
            <img src={img} alt='Shadow page'></img>
        </div>
        <MoretoWatch />
    </div>
  )
}
