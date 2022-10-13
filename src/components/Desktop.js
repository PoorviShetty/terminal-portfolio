import React from 'react'
import Draggable from 'react-draggable'
import Window from './Window'
import Github from  '../images/github.png'
import LinkedIn from '../images/linkedin.png'

function Desktop() {
  return (
    <div className='desktop px-2'>
        <Draggable>
            <div className='icon-div mt-2'>
                <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
                    <img src={Github} alt="Github" className='icon' />
                </a>
            </div>
        </Draggable>
        <Draggable>
            <div className='icon-div'>
                <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="Linkedin" className='icon p-1' />
                </a>
            </div>
        </Draggable>
        <Window />
    </div>
  )
}

export default Desktop