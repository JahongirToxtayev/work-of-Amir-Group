import React from 'react'
import {LeftNavbarDiv,
    NavIcon,
    NavText,
    NavIconText,
    NavTextIconDiv,
    NavTextOf,
    NavIconOf} from "../Home/style"
    import NavIcon1 from "../../assets/icon-главная.png"
import NavIcon2 from "../../assets/icon-заказы.png"
import NavIcon3 from "../../assets/icon-товары.png"
import NavIcon4 from "../../assets/icon-отзывы.png"
import NavIcon5 from "../../assets/icon-оформить заказ.png"

const LeftNavbar = () => {
  return (
    <>
    <LeftNavbarDiv>
        <div>
            <ul>
                <NavIconText>
                    <NavIcon src={NavIcon1} alt="" />
                    <NavText>Главная</NavText>
                </NavIconText>
                <NavIconText>
                    <NavIcon src={NavIcon2} alt="" />
                    <NavText>Заказы</NavText>
                </NavIconText>
                <NavIconText>
                    <NavIcon src={NavIcon3} alt="" />
                    <NavText>Товары</NavText>
                </NavIconText>
                <NavIconText>
                    <NavIcon src={NavIcon4} alt="" />
                    <NavText>Отзывы</NavText>
                </NavIconText>
                <NavTextIconDiv>
                <NavIconText>
                    <NavIconOf src={NavIcon5} alt=""/>
                    <NavTextOf >Оформить заказ</NavTextOf>
                </NavIconText>
                </NavTextIconDiv>
            </ul>
        </div>
    </LeftNavbarDiv>
    </>
  )
}

export default LeftNavbar