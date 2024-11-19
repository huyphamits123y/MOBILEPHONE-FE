import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"

import ip16s from '../../components/Assets/ip16s.png';
import ip16s1 from '../../components/Assets/ip16s1.png';
import ip16s2 from '../../components/Assets/ip16s2.png';
import ip16s3 from '../../components/Assets/ip16s3.png';
import tgdd from '../../components/Assets/tgdd.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
import { ImageContainer, LeftSection, MenuContainer, MenuItem, OptionButton, Options, Price, ProductPageContainer, RightSection, Thumbnail, ThumbnailGallery, Title, WrapperProducts } from "./style";
import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
const ProductDetailsPage = () => {
    const [selectedStorage, setSelectedStorage] = useState('128GB');
    const [selectedColor, setSelectedColor] = useState('White');

    const storages = ['128GB', '256GB', '512GB', '1TB'];
    const handleAddOrderProduct = () => {
        // if (!user?.id) {
        //     navigate('/sign-in', { state: location?.pathname })
        // } else {
        //     dispatch(addOrderProduct({


        //         orderItem: {
        //             userId: user?.id,
        //             name: productdetails?.name,
        //             amount: numProduct,
        //             image: productdetails?.image,
        //             price: productdetails?.price,
        //             product: productdetails?._id,

        //         },


        //     }))


        // }

    }
    const colors = ['White', 'Gold', 'Gray'];

    const [selectedImage, setSelectedImage] = useState(ip16s); // Replace with actual image URL
    const thumbnails = [ip16s, ip16s1, ip16s2, ip16s3]; // Replace with actual URLs
    return (
        <div style={{ backgroundColor: "#444444" }}>
            <HeaderComponent></HeaderComponent>

            <ProductPageContainer>
                <LeftSection>
                    <>
                        <ImageContainer>
                            <img src={selectedImage} alt="Product" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </ImageContainer>
                        <ThumbnailGallery>
                            {thumbnails.map((thumb, index) => (
                                <Thumbnail
                                    key={index}
                                    src={thumb}
                                    selected={selectedImage === thumb}
                                    onClick={() => setSelectedImage(thumb)}
                                />
                            ))}
                        </ThumbnailGallery>
                    </>
                </LeftSection>
                <RightSection>
                    <div>
                        <Title>iPhone 16 Pro 128GB</Title>
                        <Price>28.990.000₫</Price>

                        <div>
                            <h4>Storage:</h4>
                            <Options>
                                {storages.map((storage) => (
                                    <OptionButton
                                        key={storage}
                                        selected={selectedStorage === storage}
                                        onClick={() => setSelectedStorage(storage)}
                                    >
                                        {storage}
                                    </OptionButton>
                                ))}
                            </Options>
                        </div>

                        <div>
                            <h4>Color:</h4>
                            <Options>
                                {colors.map((color) => (
                                    <OptionButton
                                        key={color}
                                        selected={selectedColor === color}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </OptionButton>
                                ))}
                            </Options>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <ButtonComponent
                                size={40}
                                bordered={false}
                                styleButton={{
                                    background: '#0099FF',
                                    height: '48px',
                                    width: '220px',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                                onClick={handleAddOrderProduct}
                                textButton={'Chọn mua'}
                                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>



                        </div>
                    </div>

                </RightSection>
            </ProductPageContainer>





            <div >
                <img style={{ width: '100%', height: '400px' }} src={tgdd} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ProductDetailsPage