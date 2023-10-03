import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from "./Qzone";

const RightSideNav = () => {
  return (
    <>
    {/*Social LogIn section */}
    <div className="mb-6 p-2 text-center me-2">
      <h3 className='text-2xl mb-6 font-bold md:text-start md:ms-4'>Login With</h3>
      <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-2 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
      <FaGoogle className="me-2" />
Sign in with Google
</button>
      <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
      <FaGithub className="me-2"/>
Sign in with Github
</button>
    </div>




    {/* Social section */}
    <div className="mb-6 p-2 text-center me-2">
      <h3 className='text-2xl mb-4 font-bold md:text-start md:ms-4'>Find Us On</h3>
      <div className="border border-neutral-200 flex items-center gap-2 p-3">
        <FaFacebook />
<p className="text-neutral-500 text-base font-medium leading-[30px]"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
</div>
      <div className="border border-neutral-200 flex items-center gap-2 p-3">
        <FaTwitter/>
<p className="text-neutral-500 text-base font-medium leading-[30px]"><a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
</div>
      <div className="border border-neutral-200 flex items-center gap-2 p-3">
        <FaInstagram/>
        <p className="text-neutral-500 text-base font-medium leading-[30px]"><a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
</div>
    </div>


{/* Q -Zone section */}
<Qzone />


    </>
  )
}

export default RightSideNav
