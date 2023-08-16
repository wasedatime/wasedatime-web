import React from "react";

const ForumHomepage = () => {
    return (
        <div className="flex flex-row w-full h-full">
            {/*  */}
            <div className="flex flex-col w-1/2 !justify-center content-around">
                <div className="text-center font-bold text-black text-[50px] m-[2%]">
                    Welcome to Forum!
                </div>
                <div className="text-center font-normal text-black text-[25px] m-[1%]">
                    Start from...
                </div>
            </div>
            <div className="flex w-1/2 justify-center content-around">
                2
            </div>
        </div>
    );
}

export default ForumHomepage;