import React, { ReactElement, useState } from "react";
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
};

const HeaderWithModal = ({ modal, onSearchBarClick, ...others }: Props) => {
  const [ isModalOpen, setModalOpen ] = useState(false);

  const handleSearchBarClick = () => {
    if (onSearchBarClick) onSearchBarClick();
    setModalOpen(!isModalOpen);
  }

  return (
    <>
      <Header {...others} onSearchBarClick={handleSearchBarClick} />
      {modal({ isShow: isModalOpen, closeModal: () => setModalOpen(false) })}
    </>
  )
}

export default HeaderWithModal;
