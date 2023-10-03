import { useEffect, useState } from "react"
import axios from 'axios';
import { NavLink } from "react-router-dom";
import './leftSideNav.css'
import LeftCards from './LeftCards';


const LeftSideNav = () => {
const [category, setCategory] = useState([])


useEffect(() => {
  axios.get("categories.json")
    .then((res) => setCategory(res.data))
    .catch(err => {
     console.log(err.message);
});
}, [])
  return (
<div>
  <h2 className="text-neutral-700 text-xl font-semibold font-['Poppins'] leading-[30px] mb-4 ms-2">All Caterogy</h2>
<div>
{category.map(category => <NavLink to={`/category/${category.id}`}
 key={category.id} className='block
mx-2 p-4 text-start text-neutral-600 text-xl font-medium'>{category.name}</NavLink>)}
</div>

<LeftCards />



</div>
  )
}

export default LeftSideNav
