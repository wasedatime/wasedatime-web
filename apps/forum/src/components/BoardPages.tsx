import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "./Board";
import Thread from "./Thread";
import FilterMenu from "./FilterMenu";

const BoardPages = () => {
    return (    
        <div className="flex h-screen justify-between pl-2 gap-4">
            <div className="flex flex-row w-full">
            <FilterMenu />
            <div className="w-5/6">
                <Routes>
                <Route element={<Board />} path="forum/:boardSlug" />
                <Route
                    element={<Thread />}
                    path="forum/:boardSlug/:threadUuid"
                />
                </Routes>
            </div>
            <div className="bg-gray-100 md:h-full flex w-1/6">
                <h1 className="my-auto">Advertisement</h1>
            </div>
            </div>
        </div>
    );
}

export default BoardPages;