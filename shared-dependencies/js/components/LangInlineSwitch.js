import styled from "styled-components";

const LangButton = styled("button")`
  font-size: 0.6em;
  border: none;
  padding: 5px 10px;
  background-color: #ddd;
  height: 2em;
  vertical-align: 0.3em;
  line-height: 15px;
  ${(props) =>
    props.active && "border-bottom: 2px solid #fff; background-color: #eee;"};

  &:hover {
    outline: none;
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }
`;

const LangSwitch = ({ lang, switchLang }) => (
  <span>
    <LangButton active={lang === "en"} onClick={() => switchLang("en")}>
      English
    </LangButton>
    <LangButton active={lang === "ja"} onClick={() => switchLang("ja")}>
      日本語
    </LangButton>
    <LangButton active={lang === "zh-TW"} onClick={() => switchLang("zh-TW")}>
      繁中
    </LangButton>
    <LangButton active={lang === "zh-CN"} onClick={() => switchLang("zh-CN")}>
      简中
    </LangButton>
    <LangButton active={lang === "ko"} onClick={() => switchLang("ko")}>
      한국
    </LangButton>
  </span>
);

export default LangSwitch;
