import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import careerAPI from "./careerAPI";
import { Post } from "../types/post";
import { Overlay } from "@bit/wasedatime.core.ts.styles.overlay";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";



const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  background-color: #fff;
  padding: 0 20vw;
  color: #666;
  hr {
    width: 80%;
  }
`;

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
        <ExtendedOverlay>
            <br />
            <MediaQuery minWidth={sizes.desktop}>
              {(matches) =>
                matches ? (
                  <h2 style={{ color: "#555", textAlign: "center" }}>
                    <b><FontAwesomeIcon icon={faNewspaper} /> Welcome to the article block!</b>
                  </h2>
                ) : (
                  <h3 style={{ color: "#555", textAlign: "center" }}>
                    <b><FontAwesomeIcon icon={faNewspaper} /> Welcome to the article block</b>
                  </h3>
                )
              }
            </MediaQuery>
            <hr />
            <br />
            <p>
              WasedaTime has been working on supporting students' academic
              activities since launching. Here we offer you some articles 
              that may be helpful for your future career.
            </p>
        </ExtendedOverlay>
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
