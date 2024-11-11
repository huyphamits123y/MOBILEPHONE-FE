import styled from 'styled-components';
import Slider from "react-slick"; // Import Slider ở đây

export const WrapperSliderStyle = styled.div` // Thay đổi từ Slider sang div
    position: relative;
    width:90%;
    
    margin:10px auto;
   

    
    & .slick-arrow.slick-prev {
        left: 12px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }

    & .slick-arrow.slick-next {
        right: 28px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }

    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            button {
                &::before {
                    color: rgba(255, 255, 255, 0.5);
                }
            }
        }
        li.slick-active {
            button {
                &::before {
                    color: #fff;
                }
            }
        }
    }
`;
export const ItemCard = styled.div`
   width: 100%;
  border-radius: 15px;
  border:1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor:pointer;
  background-color: #fff;
  &:hover
  {
  border: 1px solid #1E90FF;
  }

`;
