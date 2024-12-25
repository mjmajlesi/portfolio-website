import Header from './Header'
import About from './About'
import Mywork from './Mywork'
import Connect from './Connect'

function Home() {
  return (
    <div className='flex flex-col gap-40'>
      <Header />
      <About />
      <Mywork />
      <Connect />
    </div>
  )
}

export default Home