import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import careerAPI from "../utils/careerAPI";
import { Post } from "../types/post";
import { Overlay } from "@bit/wasedatime.core.ts.styles.overlay";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { withTranslation, WithTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";

const BlogIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
  h2 {
    font-size: 32px;
    font-family: Lato, Yu Gothic Medium, Segoe UI;
  }
`;

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

class BlogIndex extends React.Component<WithTranslation, IMyComponentState> {
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
  }
  render() {
    const { mainFeaturedPost, featuredPosts } = this.state;
    const { t, i18n } = this.props;

    return (
      <BlogIndexWrapper>
        <HeaderWrapper>
          <Header
            title={t("navigation.feeds")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText={""}
            disabled={true}
            isBlur={false}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>
        <div>
          <ExtendedOverlay>
              <br />
              <MediaQuery minWidth={sizes.desktop}>
                {(matches) =>
                  matches ? (
                    <h2 style={{ color: "#555", textAlign: "center" }}>
                      <b><FontAwesomeIcon icon={faNewspaper} /> {t("BlogIndex.welcome")}</b>
                    </h2>
                  ) : (
                    <h3 style={{ color: "#555", textAlign: "center" }}>
                      <b><FontAwesomeIcon icon={faNewspaper} /> {t("BlogIndex.welcome")}</b>
                    </h3>
                  )
                }
              </MediaQuery>
              <hr />
              <br />
              <p style={{ textAlign: "center" }}>{t("BlogIndex.top message")}</p>
              <p style={{ textAlign: "center" }}>{t("BlogIndex.looking for more blogs")} contact@wasedatime.com</p>
          </ExtendedOverlay>
          <MainContainer maxWidth="lg">
            <main>
              {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}

              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </main>
          </MainContainer>
        </div>
      </BlogIndexWrapper>
    );
  }
}

export default withTranslation("translation")(BlogIndex);
