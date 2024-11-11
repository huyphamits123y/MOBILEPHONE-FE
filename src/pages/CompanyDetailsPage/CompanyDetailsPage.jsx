import React from "react"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import MainContentComponent from "../../components/MainContentComponent/MainContentComponent"
import CompanyProfile from "../../components/CompanyProfile/CompanyProfile"
import SearchComponent from "../../components/SearchComponent/SearchComponent"
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import JobFilterComponent from "../../components/JobFilterComponent/JobFilterComponent"
const CompanyDetailsPage = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <MainContentComponent></MainContentComponent>
            <CompanyProfile />
            <SearchComponent />
            <JobFilterComponent />
            <div >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )

}
export default CompanyDetailsPage