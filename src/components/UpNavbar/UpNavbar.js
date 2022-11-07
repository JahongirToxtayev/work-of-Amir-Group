import React from 'react'
import {UpNavbarDiv,
    LogoText,
    PrivateCabinet,
    PrivateCabinetDiv,
    NotificationImg,
    PrivateCabinetText,
    PrivateCabIcons} from "../Home/style"
    import NotificationImgIcon from "../../assets/Notification.png"
import PrivateCabIcon from "../../assets/icon-личный кабинет.png"

const UpNavbar = () => {
  return (
    <>
    <UpNavbarDiv>
        <div>
            <LogoText>LOGO</LogoText>
        </div>
        <PrivateCabinetDiv>
        <NotificationImg src={NotificationImgIcon} alt="" />
        <PrivateCabinet>
            <PrivateCabinetText>Личный кабинет</PrivateCabinetText>
            <PrivateCabIcons src={PrivateCabIcon} alt="" />
        </PrivateCabinet>
        </PrivateCabinetDiv>
    </UpNavbarDiv>
    </>
  )
}

export default UpNavbar