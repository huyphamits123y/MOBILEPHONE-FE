import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import MainContentComponent from "../../components/MainContentComponent/MainContentComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import JobFilterComponent from "../../components/JobFilterComponent/JobFilterComponent";
import ButtonFilerComponent from "../../components/ButtonFilterComponent/ButtonFilterComponent";
import JobListDetailsComponent from "../../components/JobListDetailsComponent/JobListDetailsComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import background1 from '../../components/Assets/background1.png';
const SearchJobFieldPage = () => {
    return (
        <div>

            <HeaderComponent></HeaderComponent>
            <div>
                <SearchComponent />
                <ButtonFilerComponent />
            </div>
            <JobListDetailsComponent />
            <div >
                <img style={{ width: '100%', marginTop: '10px' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default SearchJobFieldPage