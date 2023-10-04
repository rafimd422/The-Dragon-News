import React from 'react'
import Header from './../ShereAble/Header';
import RightSideNav from './../ShereAble/RightSideNav/RightSideNav';
import Navbar from './../ShereAble/Navbar';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const {id} = useParams()
    console.log((id))
  return (
    <>
    <Header />
    <Navbar />
    <div className='grid sm:grid-cols-4 justify-center'>
<div className='col-span-3'>
</div>


<div className='mx-auto'>
    <RightSideNav />
</div>
    </div>
    </>
    )
}

export default NewsDetail
