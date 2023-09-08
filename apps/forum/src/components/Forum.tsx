import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import { currentSchoolState, currentTagsState } from "@app/recoil/atoms";
import { filterThreadsByTags, filterThreadsBySchool } from "@app/utils/filter";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";
import { getUserAttr } from "wasedatime-ui";
import InfiniteScroll from "react-infinite-scroll-component";

const threadCountPerPage = 3; // 10

const Forum: React.FC = () => {
  const currentTags = useRecoilValue(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);

  const [allThreads, setAllThreads] = useState<Thread[]>([]);
  const [filteredThreads, setFilteredThreads] = useState<Thread[]>([]);
  const [userToken, setUserToken] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
    } catch (error) {}
  };
  useEffect(() => {
    var filteredThreads = filterThreadsByTags(allThreads, currentTags);
    filteredThreads = filterThreadsBySchool(filteredThreads, currentSchools);
    if (filteredThreads.length > threadCountPerPage * page)
      filteredThreads = filteredThreads.slice(0, threadCountPerPage * page);
    setAllThreads(filteredThreads);
    displayMoreThread();
  }, [currentTags, currentSchools]);

  const displayMoreThread = () => {
    setTimeout(() => {
      if (allThreads.length < threadCountPerPage * page) return;
      const nextPage = page + 1;
      setPage(nextPage);
      var threads = filterThreadsByTags(allThreads, currentTags);
      threads = filterThreadsBySchool(threads, currentSchools);
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
            <ThreadBlock
              key={i}
              isPreview={true}
              thread={thread}
              fromRoot={true}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Forum;

// 1 when you first enter) fetch posts (useEffect) -> display posts
// 2 filtering by "groups" -> state that manages groups ("") -> group is selected then setGroup(selected group)
// 3) [posts, setPosts] = useState([]) -> entering the page: setState([post1, post2..... post9])
// 4) displayMore is triggered [...post9] + [additional 10 posts] = [20 posts]
