import * as React from "react";
import { styled } from "@material-ui/core/styles";
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import careerAPI from "./careerAPI";
import { Post } from "../types/post";

const MainContainer = styled(Container)({
  padding: "50px",
});

interface IMyComponentState {
  featuredPosts: Post[];
  mainFeaturedPost: Post | null;
}

class BlogIndex extends React.Component<{}, IMyComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      mainFeaturedPost: null,
      featuredPosts: [],
      // urlFile: "https://api.wasedatime.com/staging/feeds?offset=0&limit=5",
    };
  }
  async componentDidMount() {
    let apiContents = await careerAPI.get<{ data: { articles: Post[] } }>("/");
    let MainApiContent = apiContents.data.data.articles[0];
    // apiContent = apiContent.data.data.articles
    let x = 0; //suppose you want to remove element at 0th index
    let apiContent = apiContents.data.data.articles.filter(
      (num, index) => index !== x
    ); //editedArray = [1,2,3,4]
    this.setState({
      mainFeaturedPost: MainApiContent,
      featuredPosts: apiContent,
    });
    console.log(this.state.featuredPosts);
  }
  render() {
    const { mainFeaturedPost, featuredPosts } = this.state;
    return (
      <React.Fragment>
        <MainContainer maxWidth="lg">
          <main>
            {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}

            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            {/* <Grid container spacing={5}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid> */}
          </main>
        </MainContainer>
      </React.Fragment>
    );
  }
}

export default BlogIndex;
