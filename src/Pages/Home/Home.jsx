import Header from '../ShereAble/Header'
import Navbar from '../ShereAble/Navbar'
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../ShereAble/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';



const Home = () => {
const news = useLoaderData()
const newsData = news.data
  return (
    <>
   <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className='grid md:grid-cols-4 mx-auto'>
        <div>
          <LeftSideNav />
        </div>
        <div className='md:col-span-2'>
          <h1 className='text-neutral-700 text-xl font-semibold mb-4'>Dragon News Home</h1>
{newsData.map(news => <NewsCard key={news._id} news={news} />)}

        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>

    </>
  )
}

export default Home
