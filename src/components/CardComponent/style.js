import styled from "styled-components"
import { Card } from "antd"
export const StyleNameProduct = styled.div`
       font-weight:400;
       font-size: 12px;
       line-height:16px;
       color: #fff;
       margin-bottom:0px;
`
export const WrapperReporText = styled.div`
       font-size: 11px;
       color:rgb(128,128,137);
       display:flex;
       align-items:center;
       margin: 6px 0 4px;
 
`
export const WrapperPriceText = styled.div`
       color: rgb(255,66,78);
       font-size:16px;
       font-weight:500;
      
`
export const WrapperDiscountText = styled.span`
       color: rgb(255,66,78);
       font-size:12px;
       font-weight:500;
       
`
export const WrapperCardStyle = styled(Card)`

       border-radius:20px;
       
       background-color:#333333;
       width:200px;
       & img{
              height:200px;
              width:200px;
       },
       
       position:relative;
`
export const WrapperStyleTextSell = styled.span`
      font-size:15px;
     line-height:24px;
     color:rgb(120,120,120); 
`