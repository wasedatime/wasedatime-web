import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FilterMenu = () => {
const [openSchoolModal, setOpenSchoolModal] = useState(false)
const navigate = useNavigate()


  return (
    // New component created by Michael -- Zero functionality so far, moreso there for visuals
    <div className="w-64 text-center">
          <div className='flex justify-center gap-4'>
          <h1 onClick={() => navigate('/forum')} className='cursor-pointer'>Home</h1>
          <h1 onClick={() => navigate(`/forum/courses`)}  className='cursor-pointer'>Courses</h1>
          </div>
          
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