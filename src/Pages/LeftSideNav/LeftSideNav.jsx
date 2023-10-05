
import './leftSideNav.css'
import LeftCards from './LeftCards';


const LeftSideNav = ({category, sortingCategory}) => {

  return (
<div>
  <h2 className="text-neutral-700 text-xl font-semibold font-['Poppins'] leading-[30px] mb-4 ms-2">All Caterogy</h2>
<div>
{category.map(category => <button 
onClick={()=>{sortingCategory(category.id)}}
 key={category.id} className='block
mx-2 p-4 text-start text-neutral-600 text-xl font-medium'>{category.name}</button>)}
</div>

<LeftCards />



</div>
  )
}

export default LeftSideNav
