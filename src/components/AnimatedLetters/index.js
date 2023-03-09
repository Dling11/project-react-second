import React from 'react'
import "./index.scss";
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className='font-improve'>
        {
            strArray.map((value, i) => (
                <span 
                    key={value + i} //========> I dont know why he + the index
                    className={`${letterClass} _${i + idx}`}  //================> Also be aware of the space on letterClass
                >
                    {value}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters