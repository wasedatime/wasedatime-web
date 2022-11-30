import React, {useState} from 'react'

const CreateThread = () => {

const [isExpanded, setIsExpanded] = useState(false)
  return (
    isExpanded ?  (
        <div className='relative'>
        <textarea placeholder='Share something...'
        className='border-b-2 text-start border-light-main h-36 pl-2 pb-28 w-full hover:outline-0 focus:outline-0'
       
        />
        <h1 className='absolute top-0 right-2 hover:text-light-main cursor-pointer' onClick={() => setIsExpanded(false)}>X</h1>
        </div>
  ) : (
    <div>
        <div className='cursor-pointer' onClick={() => setIsExpanded(true)}>
        <h1 className='border-b-2 border-light-main'>Share something....</h1>
        </div>
    </div>
  )
  )
}

export default CreateThread