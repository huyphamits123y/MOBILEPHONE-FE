import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import InputForm from "../../components/InputFormComponent/InputFormComponent"
import MainContentComponent from "../../components/MainContentComponent/MainContentComponent"
import slider1 from '../../components/Assets/slider1.png';
import slider2 from '../../components/Assets/slider2.png';
import background1 from '../../components/Assets/background1.png';

import slider3 from '../../components/Assets/slider3.png';
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import { CgEnter } from "react-icons/cg";
import JobListing from "../../components/JobComponent/JobComponent";
import JobComponent from "../../components/JobComponent/JobComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
const HomePage = () => {
    const arrImages = [
        { src: slider1 },
        { src: slider2 },
        { src: slider3 }
    ];
    const items = [
        { name: 'FPT Telecom', jobs: '409 việc làm', arrImages: slider1 },
        { name: 'VUS', jobs: '12 việc làm', arrImages: slider1 },
        { name: 'Shopee Việt Nam', jobs: '8 việc làm', arrImages: slider1 },
        { name: 'MSB', jobs: '111 việc làm', arrImages: slider1 },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: slider1 },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: slider1 },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: slider1 },
    ];
    const user = useSelector((state) => state?.user);
    console.log('user', user)
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <MainContentComponent></MainContentComponent>
            <SliderComponent arrImages={arrImages}></SliderComponent>
            <h1 style={{ marginLeft: '70px', color: '#1E90FF', padding: '10px' }}>Doanh nghiệp Top đầu</h1>
            <CarouselComponent items={items} />
            {/* <div>
                <h1 style={{ textAlign: 'center', color: '#1E90FF', padding: '10px' }}>Việc làm HOT</h1>
            </div> */}\
            <JobComponent />
            <div >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default HomePage