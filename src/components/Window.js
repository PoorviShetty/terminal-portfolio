import React from 'react'
import Terminal from './Terminal'

function Window() {
  return (
    <div className='window'>       
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                    <div><Terminal/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Window