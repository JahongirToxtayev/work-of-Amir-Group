import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BodyDiv,
  EnterPageLink,
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
  CardLoan,
  CardLoanSpan,
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
  DiscountImgDiv,
  DiscountChildText,
  DiscountImgTextDiv,
  DiscountParentDiv,
  DiscountParentText,
  TrashBtn

} from "../Home/style";
import UpNavbar from "./../UpNavbar/UpNavbar";
import LeftNavbar from "./../LeftNavbar/LeftNavbar";
import Ellipse from "../../assets/Ellipse 59.png";
import Discount1 from "../../assets/Акция-trade in.png"
import Discount2 from "../../assets/Акция-bundle.png"
import Discount3 from "../../assets/Акция-скидка.png"
import Discount4 from "../../assets/Акция-IMEI.png"
import { Checkbox } from '@nextui-org/react';



const More = () => {
  const params = useParams().id;
  console.log(params, "papappr");

  const [products, setProducts] = useState("");
  const [Button, setButton] = useState('0')

  async function GetData() {
    const response = axios.get("http://myjson.dit.upm.es/api/bins/cszm", {
      headers: {
        Accept: "application/json",
      },
    });
    setProducts((await response).data);
    console.log(products, "pORo");
  }
  useEffect(() => {
    GetData();
  }, [5]);

  const [filterApi, setFilterApi] = useState('')

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      const element = products[i]
      if (element.id==params) {
        setFilterApi(element)
      }
    }  
    console.log(filterApi,"DALALALAL");
  }, [products])
  

  return (
    <>
      <UpNavbar />
      <LeftNavbar />
      <BodyDiv>
        <EnterPageLink>
          Заявки &#62; Оформить заказ &#62;<span style={{ color: "#00C48C" }}> {filterApi.name}</span>
        </EnterPageLink>
        
        
            <MoreParentDiv>
          <MoreTitleIconDiv>
            <MoreTitle>{filterApi.name}</MoreTitle>
            <MoreIcon src={Ellipse}></MoreIcon>
          </MoreTitleIconDiv>
          <MoreImageTextDiv>
            <MoreMainImageDiv>
            <DiscountImgDiv>
            <img src={Discount1} alt="" />
                <img src={Discount2} style={{marginTop:"5px"}} alt="" />
                <img src={Discount3} style={{marginTop:"5px"}} alt="" />
                <img src={Discount4} style={{marginTop:"5px"}} alt="" />

            </DiscountImgDiv>
              <MoreMainImage src={`${filterApi.objSrc}`}></MoreMainImage>
            </MoreMainImageDiv>
            <div>
              <MorePriceOfPhoneTitle>Цена телефона</MorePriceOfPhoneTitle>
              <MorePriceOfPhone>6 000 000 сум</MorePriceOfPhone>
              <MoreGreyLine></MoreGreyLine>
              <MorePriceOfPhoneTitle>Общая цена (с наценкой)</MorePriceOfPhoneTitle>
              <MoreLoanPricesDiv>
                <div>
                  <MorePriceOfPhone>7 300 000 сум</MorePriceOfPhone>
                </div>
                <div>
                  <CardLoan>от 2 433 333 сум</CardLoan>
                  <CardLoanSpan>х3</CardLoanSpan>
                </div>
              </MoreLoanPricesDiv>
              <RadioBtnDiv>
                <Button1 onClick={e=>setButton("1")} style={(Button=="1"||Button=="0")?{background:"#00C48C",color:"#ffff"} :{background:"none",color:"#00C48C"}}>3 мес</Button1>
                <Button2 onClick={e=>setButton("2")} style={(Button=="2")?{background:"#00C48C",color:"#ffff"} :{background:"none",color:"#00C48C"}}>6 мес</Button2>
                <Button3 onClick={e=>setButton("3")} style={(Button=="3")?{background:"#00C48C",color:"#ffff"} :{background:"none",color:"#00C48C"}}>12 мес</Button3>
                <Button4 onClick={e=>setButton("4")} style={(Button=="4")?{background:"#00C48C",color:"#ffff"} :{background:"none",color:"#00C48C"}}>24 мес</Button4>
              </RadioBtnDiv>
              <Natsenka>
              Наценка: <span style={{fontWeight:"500"}}>5%</span>
              </Natsenka>
              <MoreGreyLine></MoreGreyLine>
              <MorePriceOfPhoneTitle>
              Общие характеристики
              </MorePriceOfPhoneTitle>
              <Natsenka2>
              Тип: моноблок (классический)

Стандарт: 2G, 3G, 4G (LTE), 5G
Операционная система: iOS 14

              </Natsenka2>
              <ReadMoreDiv>
                <ReadMore>
                Показать все
                </ReadMore>
                <ReadMoreSymbol>
                &#62;
                </ReadMoreSymbol>
              </ReadMoreDiv>
            </div>

          </MoreImageTextDiv>
          <DiscountTitle>
          Акции
          </DiscountTitle>
          <DiscountParentDiv>
            <DiscountImgTextDiv>
                <div>
                  <img src={Discount1} alt="" style={{marginRight:"20px"}}/>
                </div>
                <div>
                  <DiscountParentText>
                  Обменяй свой старый айфон и получи скидку на новый
                  </DiscountParentText>
                  <DiscountChildText>
                  - 400 000 сум
                  </DiscountChildText>
                </div>
            </DiscountImgTextDiv>
            <div>
            <Checkbox color="success" labelColor="success" defaultSelected={false} size="xl"/>
            </div>
          </DiscountParentDiv>
          <MoreGreyLine/>

          <DiscountParentDiv>
            <DiscountImgTextDiv>
                <div>
                  <img src={Discount2} alt="" style={{marginRight:"20px"}}/>
                </div>
                <div>
                  <DiscountParentText>
                  Наушники в подарок
                  </DiscountParentText>
                  <DiscountChildText>
                  Apple EarPods
                  </DiscountChildText>
                </div>
            </DiscountImgTextDiv>
            <div>
            <Checkbox color="success" labelColor="success" defaultSelected={true} size="xl"/>
            </div>
          </DiscountParentDiv>
          <MoreGreyLine/>

          <DiscountParentDiv>
            <DiscountImgTextDiv>
                <div>
                  <img src={Discount3} alt="" style={{marginRight:"20px"}}/>
                </div>
                <div>
                  <DiscountParentText>
                  Скидка 20% на смартфоны
                  </DiscountParentText>
                  <DiscountChildText>
                   - 10 000 сум
                  </DiscountChildText>
                </div>
            </DiscountImgTextDiv>
            <div>
            <Checkbox color="success" labelColor="success" defaultSelected={true} size="xl"/>
            </div>
          </DiscountParentDiv>
          <MoreGreyLine/>

          <DiscountParentDiv>
            <DiscountImgTextDiv>
                <div>
                  <img src={Discount4} alt="" style={{marginRight:"20px"}}/>
                </div>
                <div>
                  <DiscountParentText>
                  Скидка на айфоны
                  </DiscountParentText>
                  <Natsenka>
                  IMEI 012345678901234
                  </Natsenka>
                  <DiscountChildText>
                  - 10 000 сум
                  </DiscountChildText>
                </div>
            </DiscountImgTextDiv>
            <div>
            <Checkbox color="success" labelColor="success" defaultSelected={true} size="xl"/>
            </div>
          </DiscountParentDiv>
          <TrashBtn>
            Добавить в корзину
            </TrashBtn>
        </MoreParentDiv>
        
      </BodyDiv>
    </>
  );
};

export default More;
