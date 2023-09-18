import React, { ReactElement, useState, useEffect } from "react";
import Header from "./Header";
import { THEME } from "@app/types/theme";

type Props = {
  modal: React.FC<any>;
  title: string;
  onInputChange(x: string): void;
  placeholder: string;
  inputText: string | string[];
  disabled?: boolean;
  isBlur: boolean;
  changeLang(x: string): void;
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
  onSearchBarClick?: () => void;
  boardSlug: string;
  commentNotify: boolean;
};

const HeaderWithModal = ({
  modal,
  onSearchBarClick,
  boardSlug,
  ...others
}: Props) => {
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [board, setBoard] = useState(boardSlug);

  // useEffect(() => {
  //   setBoard(boardSlug);
  // }, [boardSlug]);

  // const handleSearchBarClick = () => {
  //   if (onSearchBarClick) onSearchBarClick();
  //   setModalOpen(!isModalOpen);
  // };

  return (
    <>
      {/* <Header {...others} onSearchBarClick={handleSearchBarClick} /> */}
      <Header {...others} />
      {/* {modal({
        isShow: isModalOpen,
        closeModal: () => setModalOpen(false),
        boardSlug: board,
      })} */}
    </>
  );
};

export default HeaderWithModal;
