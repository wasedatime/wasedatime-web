import React from "react";

const numOfThreadsPerPage = 10;

type Props = {
  count: number;
}

// TODO: change page number by clicking on page button or arrow
// TODO: filter threads to display by page number

const Pagination = ({ count } : Props) => {
  return (
    <div className="flex justify-center m-4">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a href="#" className="block p-2 ml-0 rounded-full text-gray-500 hover:bg-light-main hover:text-white dark:text-gray-300 dark:hover:bg-dark-main dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </li>
        {
          [...Array(Math.ceil(count / numOfThreadsPerPage))].map((_, pageId) => (
            <li key={pageId + 1}>
              <a href="#" className="px-3 py-2 rounded-full text-gray-500 hover:bg-light-main hover:text-white dark:text-gray-300 dark:hover:bg-dark-main dark:hover:text-white">{pageId + 1}</a>
            </li>
          ))
        }
        <li>
          <a href="#" className="block p-2 leading-tight rounded-full text-gray-500 hover:bg-light-main hover:text-white dark:text-gray-300 dark:hover:bg-dark-main dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;