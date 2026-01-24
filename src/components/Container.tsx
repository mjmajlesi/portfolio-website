import { ReactNode } from 'react'

function Container({children} : {children : ReactNode}) {
  return (
    <div className='mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 2xl:mx-64'>
        {children}
    </div>
  )
}

export default Container