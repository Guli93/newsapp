import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
    <div style={{margin:'10px'}} className='text-center'>
      <img src={loading} alt="loading" />
    </div>

  )
}
