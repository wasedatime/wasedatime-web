import React, { useState } from 'react'


const FilterMenu = () => 
{
const [openSchoolModal, setOpenSchoolModal] = useState(false)

  return (
    // New component created by Michael
    <div className="w-64 text-center">
          <h1>Home ---- Group</h1>
          <h1 className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2" onClick={() => setOpenSchoolModal(!openSchoolModal)}>Select the School</h1>
          {/* School Select Div */}
          <h1>Undergrad, Grad</h1>
          <div className="border px-4 py-2 rounded-xl">
            <h1 onClick={() => console.log(openSchoolModal)}>Spring Semester</h1>
          </div>
          <h1>Languages</h1>
          <div className="border px-4 py-2 rounded-xl">
            <h1>English</h1>
          </div>
        </div>
  )
}

export default FilterMenu