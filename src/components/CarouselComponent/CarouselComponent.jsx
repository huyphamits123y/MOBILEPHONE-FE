import React from "react"
import { ItemCard, WrapperSliderStyle } from "./style";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
const CarouselComponent = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    const navigate = useNavigate();
    return (
        <WrapperSliderStyle>
            <Slider {...settings}>
                {/* <ItemCard> */}
                {items.map((item, index) => (
                    <ItemCard onClick={() => navigate("/companydetails")}>
                        <h3>{item.name}</h3>
                        <img key={item.arrImages} src={item.arrImages} alt="slider" width="100%" height="274px" />

                        <p style={{ padding: '10px', border: '1px solid #ccc', background: '#DCDCDC', width: '200px', margin: '10px auto' }}>{item.jobs}</p>
                    </ItemCard>
                ))}

            </Slider>
        </WrapperSliderStyle>
    );
}
export default CarouselComponent