import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Board from "./Board";
import BoardMenu from "./BoardMenu";
import Thread from "./Thread";

const App = () => {
  return (
    <div>
      <BoardMenu />
      <BrowserRouter>
        <Routes>
          <Route element={<Board />} path="forum/:boardId" />
          <Route element={<Thread />} path="forum/:board/:threadId" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
