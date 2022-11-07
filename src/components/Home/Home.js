import React from 'react'
import { useState,useEffect } from 'react'
import {
    
    
    BodyDiv,
    EnterPageLink,
    PageTitle,
    SearchInput,
    SearchInputDiv,
    SearchButton,
    CardsDiv,
    CardDiv,
    ImgDiv,
    CardPrice,
    CardLoan,
    CardTitle,
    CardLoanSpan,
    CardTextDiv,
    CardImg,
    AllProductsTitle,
    DiscountImgDiv
} from "./style"

import {RiSearch2Line} from "react-icons/ri"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom'

// import required modules
import { Pagination } from "swiper";
import axios from "axios"
import UpNavbar from '../UpNavbar/UpNavbar'
import LeftNavbar from '../LeftNavbar/LeftNavbar'
import Discount1 from "../../assets/Акция-bundle.png"
import Discount2 from "../../assets/Акция-скидка.png"



export const Home = () => {

    

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="Bullet ' + className + '">' +  "</div>";
        },
      };

      const [data, setData] = useState('')
    

     async function GetData() {
        const response=axios.get("http://myjson.dit.upm.es/api/bins/cszm",{
            headers:{
                Accept:"application/json"
            }
        })
        setData((await response).data)
        console.log(data);
     }
     useEffect(() => {
       GetData()
     }, [])
     
      

  return (
    <>
    <UpNavbar/>
    <LeftNavbar/>

    <BodyDiv>
        <EnterPageLink>
        Заявки &#62;<span style={{color:"#00C48C"}}>Оформить заказ</span>
        </EnterPageLink>
        <PageTitle>
        Оформить заказ
        </PageTitle>
        <SearchInputDiv>
        <SearchInput placeholder='Поиск по названию товара'/>
        <SearchButton>
        <RiSearch2Line/>
        </SearchButton>
        </SearchInputDiv>

        <AllProductsTitle>
        Все товары (121)
        </AllProductsTitle>

        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><CardsDiv>
{(data.length>0) && data.map((val)=>{
    return(
        <CardDiv key={val.id}>
            <DiscountImgDiv>
            <img src={Discount1} alt="" />
                <img src={Discount2} style={{marginTop:"5px"}} alt="" />
            </DiscountImgDiv>
    <Link to={`/more/${val.id}`}>
    <ImgDiv>
    <CardImg src={`${val.objSrc}`}/>
    </ImgDiv></Link>
    <CardTextDiv>
    <CardTitle>
    {val.name}
    </CardTitle>
    <CardPrice>
    7 300 000 сум 
    </CardPrice>
        <CardLoan>
        от 2 435 000 сум 
        </CardLoan>
        <CardLoanSpan>х24</CardLoanSpan>
    </CardTextDiv>
    </CardDiv>
    )
})}




</CardsDiv></SwiperSlide>
<SwiperSlide><CardsDiv>
{(data.length>0) && data.map((val)=>{
    return(
        <CardDiv key={val.id}>
            <DiscountImgDiv>
            <img src={Discount1} alt="" />
                <img src={Discount2} style={{marginTop:"5px"}} alt="" />
            </DiscountImgDiv>
    <Link to={`/more/${val.id}`}>
    <ImgDiv>
    <CardImg src={`${val.objSrc}`}/>
    </ImgDiv></Link>
    <CardTextDiv>
    <CardTitle>
    {val.name}
    </CardTitle>
    <CardPrice>
    7 300 000 сум 
    </CardPrice>
        <CardLoan>
        от 2 435 000 сум 
        </CardLoan>
        <CardLoanSpan>х24</CardLoanSpan>
    </CardTextDiv>
    </CardDiv>
    )
})}




</CardsDiv></SwiperSlide>

<SwiperSlide><CardsDiv>
{(data.length>0) && data.map((val)=>{
    return(
        <CardDiv key={val.id}>
            <DiscountImgDiv>
            <img src={Discount1} alt="" />
                <img src={Discount2} style={{marginTop:"5px"}} alt="" />
            </DiscountImgDiv>
    <Link to={`/more/${val.id}`}>
    <ImgDiv>
    <CardImg src={`${val.objSrc}`}/>
    </ImgDiv></Link>
    <CardTextDiv>
    <CardTitle>
    {val.name}
    </CardTitle>
    <CardPrice>
    7 300 000 сум 
    </CardPrice>
        <CardLoan>
        от 2 435 000 сум 
        </CardLoan>
        <CardLoanSpan>х24</CardLoanSpan>
    </CardTextDiv>
    </CardDiv>
    )
})}




</CardsDiv></SwiperSlide>
      </Swiper>
  

    </BodyDiv>

    </>
  )
}
