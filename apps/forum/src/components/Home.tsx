import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import localForage from "localforage";
import { currentGroupsState, currentTagsState } from "@app/recoil/atoms";
import { filterThreadsByTags, filterThreadsByGroups } from "@app/utils/filter";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";
import { getUserAttr } from "wasedatime-ui";
import InfiniteScroll from "react-infinite-scroll-component";

const threadCountPerPage = 3; // 10

const Home = () => {
  const currentTags = useRecoilValue(currentTagsState);
  const currentGroups = useRecoilValue(currentGroupsState);

  const [allThreads, setAllThreads] = useState<Thread[]>([]);
  const [filteredThreads, setFilteredThreads] = useState<Thread[]>([]);
  const [userToken, setUserToken] = useState("");
  const [page, setPage] = useState(1);

  const boardStorage = localForage.createInstance({
    name: "BoardData",
  });

  // fetching the all thread data
  useEffect(() => {
    getAllThreads();
  }, []);

  useEffect(() => {
    console.log("allThreads has updated:", allThreads);
  }, [allThreads]);

  const getAllThreads = async () => {
    try {
      let userId = userToken;
      if (userId.length === 0) {
        const userAttr = await getUserAttr();
        if (userAttr) {
          userId = userAttr.id;
          setUserToken(userId);
        }
      }

      const response = await API.get("wasedatime-dev", `/forum?uid=${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllThreads([...response.data]);
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  const displayMoreThread = () => {
    setTimeout(() => {
      if (allThreads.length < threadCountPerPage * page) return;
      const nextPage = page + 1;
      setPage(nextPage);
      var threads = filterThreadsByTags(allThreads, currentTags);
      threads = filterThreadsByGroups(threads, currentGroups);
      threads = threads.slice(0, threadCountPerPage * nextPage);
      setFilteredThreads(threads);
    }, 1000);
  };

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      <div className="overflow-auto h-[calc(100%-44px)]" id="scrollableDiv">
        <InfiniteScroll
          dataLength={filteredThreads.length}
          next={displayMoreThread}
          hasMore={true}
          scrollableTarget="scrollableDiv"
          loader={<h4>Loading...</h4>}
          style={{ overflowY: "hidden" }}
        >
          {/* {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))} */}
          {filteredThreads.map((thread, i) => (
            <ThreadBlock key={i} isPreview={true} thread={thread} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
