import React, { ReactNode } from 'react'

function Container({children} : {children : ReactNode}) {
  return (
    <div className='mx-24'>
        {children}
    </div>
  )
}

export default Container