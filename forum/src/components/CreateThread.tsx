import React, {useState} from 'react'

const CreateThread = () => {

const [isExpanded, setIsExpanded] = useState(false)
const [expandTags, setExpandTags] = useState(false)
const [expandGroups, setExpandGroups] = useState(false)


// Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.

  return (
    isExpanded ?  (
        <div className='relative'>
        <textarea placeholder='Share something...'
        className='border-b-2 text-start border-light-main h-36 pl-2 pb-28 w-full hover:outline-0 focus:outline-0'
       
        />
        <h1 className='absolute top-0 right-2 hover:text-light-main cursor-pointer' onClick={() => setIsExpanded(false)}>X</h1>
        <div className='absolute bottom-0 left-2 flex mb-3 gap-2 text-sm'>
        <button className='relative border-light-main border px-4 rounded-lg hover:text-white hover:bg-light-main' onClick={() => setExpandTags(!expandTags)}>
            {expandTags ? (
                <div className='bg-gray-100 border-light-main border absolute h-32 w-32 top-8 left-0 rounded-lg'>
                Text
                </div>

            ) : null }
            Tags</button>
        <button className='relative border-light-main border px-4 rounded-lg hover:text-white hover:bg-light-main' onClick={() => setExpandGroups(!expandGroups)}>Groups
        {expandGroups ? (
                <div className='bg-gray-200 border border-light-main absolute h-32 w-32 top-8 left-0 rounded-lg'>
                Text
                </div>

            ) : null }
        </button>
        </div>
        </div>
  ) : (
    <div>
        <div className='cursor-pointer' onClick={() => setIsExpanded(true)}>
        <h1 className='border-b-2 border-light-main'>Start a new thread</h1>
        </div>
    </div>
  )
  )
}

export default CreateThread