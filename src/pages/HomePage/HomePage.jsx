import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import InputForm from "../../components/InputFormComponent/InputFormComponent"
import MainContentComponent from "../../components/MainContentComponent/MainContentComponent"
import slider1 from '../../components/Assets/slider1.png';
import slider4 from '../../components/Assets/slider4.png';
import slider5 from '../../components/Assets/slider5.png';
import slider6 from '../../components/Assets/slider6.png';
import listip from '../../components/Assets/listip.png';
import listmac from '../../components/Assets/listmac.png';
import listipad from '../../components/Assets/listipad.png';
import listwatch from '../../components/Assets/listwatch.png';
import listtn from '../../components/Assets/listtn.png';
import listpk from '../../components/Assets/listpk.png';
import tgdd from '../../components/Assets/tgdd.png';
import slider2 from '../../components/Assets/slider2.png';
import ip16s from '../../components/Assets/ip16s.png';
import mac from '../../components/Assets/mac.png';
import background1 from '../../components/Assets/background1.png';
import ReactDOM from 'react-dom'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import slider3 from '../../components/Assets/slider3.png';
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import { CgEnter } from "react-icons/cg";
import CardComponent from '../../components/CardComponent/CardComponent';
import JobListing from "../../components/JobComponent/JobComponent";
import JobComponent from "../../components/JobComponent/JobComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
import { WrapperProducts } from "./style";
import CarouselProductComponent from "../../components/CarouselProductComponent/CarouselProductComponent";
const HomePage = () => {
    const arrImages = [
        { src: slider4 },
        { src: slider5 },
        { src: slider6 }
    ];
    const items = [
        { name: 'FPT Telecom', jobs: '409 việc làm', arrImages: listip },
        { name: 'VUS', jobs: '12 việc làm', arrImages: listmac },
        { name: 'Shopee Việt Nam', jobs: '8 việc làm', arrImages: listipad },
        { name: 'MSB', jobs: '111 việc làm', arrImages: listwatch },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listtn },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listpk },

    ];
    const user = useSelector((state) => state?.user);
    console.log('user', user)
    return (
        <div style={{ backgroundColor: "#444444" }}>
            <HeaderComponent></HeaderComponent>
            {/* <MainContentComponent></MainContentComponent> */}

            <div style={{ marginTop: "30px" }}>
                <SliderComponent arrImages={arrImages} ></SliderComponent>

            </div>


            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Danh mục</h1>
            <CarouselComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>iPhone</h1>
            <CarouselProductComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Mac</h1>
            <CarouselProductComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>iPad</h1>
            <CarouselProductComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Watch</h1>
            <CarouselProductComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Tai nghe, Loa</h1>
            <CarouselProductComponent items={items} />
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Phụ kiện</h1>
            <CarouselProductComponent items={items} />

            {/* <div id="container" style={{ width: '1270px', margin: '0 auto', paddingBottom: '20px' }}>
                <WrapperProducts>
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />

                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                </WrapperProducts>
            </div> */}

            <div >
                <img style={{ width: '100%', height: '400px' }} src={tgdd} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default HomePage