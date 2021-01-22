import React from 'react'
import { Popup } from 'semantic-ui-react'
import styled from "styled-components";
import wechat from "../../img/aboutus/socialmediaicon/wechat.png"


const MediaIcon = styled('img')`
    width:100%;
    width:1.3em;
    margin:4px;
    text-align:center;

`
const WeChatQRcode= ({ qrcode }, {Icon}) => (
    <Popup
    on='click'
    trigger={
      <button>
        {Icon}
      </button>
    }
>
      <Popup.Content>
        <img src={qrcode} />
      </Popup.Content>
    </Popup>
  )
  export default WeChatQRcode