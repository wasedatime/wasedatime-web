import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Board from "./Board";
import BoardMenu from "./BoardMenu";
import Thread from "./Thread";

const App = () => {
  return (
    <>
    <div className="justify-between">
    <BoardMenu />
    </div>
    {/* This code can become a new component from here */}
      <div className="flex h-screen justify-between pl-2 gap-4">
        <div className="w-64 text-center">
          <h1>Home ---- Group</h1>
          <h1 className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2">Select the School</h1>
          <h1>Undergrad, Grad</h1>
          <div className="border px-4 py-2 rounded-xl">
            <h1>Spring Semester</h1>
          </div>
          <h1>Languages</h1>
          <div className="border px-4 py-2 rounded-xl">
            <h1>English</h1>
          </div>
        </div>
        {/* End of new component code */}
      <BrowserRouter>
        <Routes>
          <Route element={<Board />} path="forum/:boardId" />
          <Route element={<Thread />} path="forum/:board/:threadId" />
        </Routes>
      </BrowserRouter>
      <div className="bg-gray-100 md:h-full flex">
        <h1 className="my-auto">Advertisement</h1>
        </div>
    </div>
    </>
  )
}

export default App;
