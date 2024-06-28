import React from 'react'

function SmallNavbar() {
  return (
<>
<div className="flex flex-col space-y-2 md:flex-row md:space-x-0 md:space-y-0">
  <button
    type="button"
    className=" bg-white px-3 py-2 text-2xl font-semibold text-black shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-bl-2xl rounded-tl-none rounded-tr-none" 
    onClick={()=>{
      
    }}
  >
    Ongoing
  </button>
  <button
    type="button"
    className=" bg-white px-3 py-2 text-2xl font-semibold text-black shadow-sm  hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-br-2xl rounded-tl-none rounded-tr-none"
  >
    Completed
  </button>

</div>

</>
  )
}

export default SmallNavbar
