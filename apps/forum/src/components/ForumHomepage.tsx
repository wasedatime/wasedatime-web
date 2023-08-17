import React from "react";

const ForumHomepage = () => {
    return (
        <div className="flex flex-row w-full h-full">
            {/*  */}
            <div className="flex flex-col w-1/2 justify-center content-around">
                <div className="text-center font-bold text-light-text1 dark:text-dark-text2 text-[50px] m-[2%]">
                    Welcome to Forum!
                </div>
                <div
                    className="self-center font-normal text-light-text2 dark:text-dark-text2 text-[25px] m-[1%] w-full p-[5%] lg:w-2/3 lg:px-[3%]"
                >
                    Start by clicking one of the
                    boards in the menu or one of the selected thread on the right.
                </div>
            </div>
            <div className="flex w-1/2 justify-center content-around">
                This is the thread menu and the selected threads
                {/* Thread Menu */}
                {/* Displaying Threads*/}
            </div>
        </div>
    );
}

export default ForumHomepage;