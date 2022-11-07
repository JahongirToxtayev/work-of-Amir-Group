import styled from "styled-components"


const UpNavbarDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
margin-top: -8px;
position: fixed;
left: 0;
top: 0;
background-color: #ffff;
z-index: 5;
`
const LogoText=styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 19px;
margin-left: 50px;
`
const PrivateCabinetDiv=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
const PrivateCabinet=styled.div`
background: #3D639D;
border-radius: 0px 0px 0px 30px;
width: 292px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
`
const NotificationImg=styled.img`
width: 24px;
height: 24px;
margin-right: 50px;

`
const PrivateCabinetText=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;
color: #ffffff;
`
const PrivateCabIcons=styled.img`
width: 32px;
height: 32px;
margin-left: 20px;
`
const LeftNavbarDiv=styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
width: 263px;
height: 100vh;
position: fixed;
left: 0px;
top: 70px;
border-radius: 0 30px 0 0;
background: #3D639D;
z-index: 5;
`
const NavIcon=styled.img`
width: 20px;
height: 20px;
margin: 0 20px 0 10px;
`
const NavText=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #ffff;
`
const NavIconText=styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
`
const NavTextIconDiv=styled.div`
width: 223px;
height: 50px;
background: #ffff;
border-radius: 24px 0 0 24px;
`
const NavTextOf=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #3D639D;
margin-left: 20px;
`
const NavIconOf=styled.img`
width: 20px;
height: 20px;
margin-left: 10px;
`
const BodyDiv=styled.div`
width: 75%;
min-height: 600px;
background: #F3F5F8;
border-radius: 6px;
margin: 80px 60px 0 290px;
padding: 20px 0 20px 28px;
`
const EnterPageLink=styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 14px;
color: #BBC2D0;
`
const PageTitle=styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
color: #3D639D;
`
const SearchInput=styled.input`
:focus{
border: none;
outline: none;
}
width: 90%;
height: 100%;
background: #ffff;
border: none;
border-radius: 26px 0 0 26px;
color: #BBC2d0;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left: 15px;
`
const SearchInputDiv=styled.div`
display: flex;
width: 1041px;
height: 50px;
justify-content: space-around;
align-items: center;
`
const SearchButton=styled.button`
background: #00C48C;
border-radius: 0px 26px 26px 0px;
width: 10%;
height: 100%;
border: none;
font-size: 26px;
color: #ffff;
`
const CardsDiv=styled.div`
max-width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(18%,1fr));
column-gap: 20px;
row-gap: 20px;
justify-content: space-around;
margin: 20px 20px 30px 0px;
`
const CardDiv=styled.div`
position: relative;
background: #ffff;
min-height: 260px;
padding: 12px;
box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
border-radius: 6px;
`
const ImgDiv=styled.div`
background: #F7F7F7;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
min-height: 180px;
`
const CardTitle=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
`
const CardTextDiv=styled.div`
line-height: 12px;
`
const CardPrice=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
`
const CardLoan=styled.h3`
background: #FF647C;
display: inline;
padding: 1.5px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 15px;
color: #ffff;
border-radius: 2px;
`
const CardLoanSpan=styled.span`
font-family: 'Open Sans';
margin-left: 4px;
display: inline;
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #BBC2D0;
`
const MoreParentDiv=styled.div`
width: 90%;
min-height: 980px;
background-color:#ffff;
padding: 30px;
border-radius: 16px;
`
const MoreTitleIconDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const MoreTitle=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
color: #3D639D;
`
const MoreIcon=styled.img`
width: 60px;
height: 60px;
margin: -120px -25px 0px 0px;
`
const MoreImageTextDiv=styled.div`
display: grid;
justify-content: space-around;
max-width: 100%;
grid-template-columns: repeat(auto-fit,minmax(47%,1fr));
column-gap: 20px;
row-gap: 20px;
`
const MoreMainImageDiv=styled.div`
position: relative;
height: 480px;
background: #F3F5F8;
border-radius: 16px;
display:flex;
justify-content: center;
align-items: center;
`
const MoreMainImage=styled.img`
width: 300px;
`
const MorePriceOfPhoneTitle=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 8px;
color: #BBC2D0;
`
const MorePriceOfPhone=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 8px;
letter-spacing: 0.01em;
color: #262728;
`
const MoreGreyLine=styled.span`
display: inline-block;
background: #F7F7F7;
width: 100%;
height: 2px;
content: "";
margin-bottom: 8px;
`
const MoreLoanPricesDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const CardImg=styled.img`
width: 100px;
height: 140px;
object-fit: cover;
`
const AllProductsTitle=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #262728;
margin-top: 20px;
`
const DiscountImgDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
position: absolute;
top: 20px;
left: 17px;
`
const RadioBtnDiv=styled.div`
width: 480px;
height: 40px;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(25%,1fr));
border: 1px solid #00C48C;
border-radius: 10px;
margin: 20px 0 20px 0;
`
const Button1=styled.button`
border: none;
border-right: 2px solid #00C48C;
background: #00C48C;
color: #ffff;
border-radius: 10px 0 0 10px;
`
const Button2=styled.button`
border: none;
border-right: 2px solid #00C48C;
color: #00C48C;
background: none;
`
const Button3=styled.button`
border: none;
border-right: 2px solid #00C48C;
color: #00C48C;
background: none;
`
const Button4=styled.button`
:focus{
    border-radius: 0 10px 10px 0;
}
border: none;
color: #00C48C;
background: none;
`
const Natsenka=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
text-align: center;
font-size: 16px;
line-height: 19px;
color: #262728;
`
const Natsenka2=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
text-align: center;
font-size: 16px;
line-height: 22px;
color: #262728;
width: 50%;
`
const ReadMoreDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ReadMore=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.01em;
color: #00C48C;
`
const ReadMoreSymbol=styled.h3`
font-family: 'Open Sans';
font-weight: 600;
font-size: 20px;
line-height: 19px;
letter-spacing: 0.01em;
color: #00C48C;
`
const DiscountTitle=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.3px;
color: #00C48C;
`
const DiscountParentDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const DiscountImgTextDiv=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
const DiscountParentText=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.3px;
color: #262728;
`
const DiscountChildText=styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #BBC2D0;
`
const TrashBtn=styled.button`
:hover{
    background-color: #ffff;
    color: #00C48C;
    border: 2px solid #00C48C;
}
transition: 0.3s all ease;
border: none;
background: #00C48C;
border-radius: 26px;
color: #ffff;
width: 100%;
height: 52px;
`


export {
    UpNavbarDiv,
    LogoText,
    PrivateCabinet,
    PrivateCabinetDiv,
    NotificationImg,
    PrivateCabinetText,
    PrivateCabIcons,
    LeftNavbarDiv,
    NavIcon,
    NavText,
    NavIconText,
    NavTextIconDiv,
    NavTextOf,
    NavIconOf,
    BodyDiv,
    EnterPageLink,
    PageTitle,
    SearchInput,
    SearchInputDiv,
    SearchButton,
    CardsDiv,
    CardDiv,
    ImgDiv,
    CardTitle,
    CardPrice,
    CardLoan,
    CardLoanSpan,
    CardTextDiv,
    MoreParentDiv,
    MoreTitleIconDiv,
    MoreTitle,
    MoreIcon,
    MoreImageTextDiv,
    MoreMainImageDiv,
    MoreMainImage,
    MorePriceOfPhone,
    MorePriceOfPhoneTitle,
    MoreGreyLine,
    MoreLoanPricesDiv,
    CardImg,
    AllProductsTitle,
    DiscountImgDiv,
    RadioBtnDiv,
  Button1,
  Button2,
  Button3,
  Button4,
  Natsenka,
  Natsenka2,
  ReadMoreDiv,
  ReadMore,
  ReadMoreSymbol,
  DiscountTitle,
  DiscountChildText,
  DiscountImgTextDiv,
  DiscountParentDiv,
  DiscountParentText,
  TrashBtn
}