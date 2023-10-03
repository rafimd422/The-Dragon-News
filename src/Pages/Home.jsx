import Header from './ShereAble/Header'
import Navbar from './ShereAble/Navbar'
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './ShereAble/RightSideNav/RightSideNav';
const Home = () => {
  return (
    <>
   <div>
      <Header />
      <Navbar />
      <div className='text-4xl font-poppins font-bold'>
        This is Home
      </div>

      <div className='grid md:grid-cols-4 mx-auto'>
        <div>
          <LeftSideNav />
        </div>
        <div className='md:col-span-2'>News Are coming broo</div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home
