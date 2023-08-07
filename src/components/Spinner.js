import React from 'react'
import loading from './loading.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
      {/* image to show when loading */}
      <img src={loading}  alt='loding...'/>
    </div>
  )
}
