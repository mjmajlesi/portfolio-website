import Header from './Header'
import About from './About'
import Mywork from './Mywork'
import Connect from './Connect'
import Footer from './Footer'
import Snowfall from 'react-snowfall'

function Home() {
  return (
    <div className='flex flex-col gap-40 snap-y snap-mandatory overflow-y-scroll h-screen'>
      <Snowfall color='#82c3d9' />
      <div className='snap-always snap-center'>
      <Header />
      </div>
      <div className='snap-always snap-center'>
      <About />
      </div>
      <div className='snap-always snap-center'>
      <Mywork />
      </div>
      <div className='snap-always snap-center'>
      <Connect />
      </div>
      <div className='snap-always snap-center mt-24 mb-7'>
      <Footer />
      </div>
    </div>
  )
}

export default Home