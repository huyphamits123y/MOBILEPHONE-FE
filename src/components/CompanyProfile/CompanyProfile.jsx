import React from 'react';
import styled from 'styled-components';
import { BenefitItem, BenefitsSection, BenefitText, CompanyDetails, CompanyHeader, CompanyInfo, CompanyLocation, CompanyName, DescriptionSection, Icon, Image, ImagesSection, InfoHeading, InfoText, JobButton, Logo, ProfileContainer, SectionHeading } from './style';
import mbbank from '../Assets/mbbank.png';
import mbbank1 from '../Assets/mbbank1.png';
import mbbank2 from '../Assets/mbbank2.png';
import mbbank3 from '../Assets/mbbank3.png';
import mbbank4 from '../Assets/mbbank4.png';
const CompanyProfile = () => {
    return (
        <ProfileContainer>
            <CompanyHeader>
                <Logo src={mbbank} alt="Company Logo" />
                <CompanyDetails>
                    <CompanyName>NGÂN HÀNG TMCP QUÂN ĐỘI - MB BANK - MB</CompanyName>
                    <CompanyLocation>Địa điểm: Số 21 - Cát Linh - Đống Đa - Hà Nội</CompanyLocation>
                    <JobButton>Nhận thông báo việc làm</JobButton>
                </CompanyDetails>
            </CompanyHeader>

            <ImagesSection>
                <Image src={mbbank1} alt="Image 1" />
                <Image src={mbbank2} alt="Image 2" />
                <Image src={mbbank3} alt="Image 3" />
                <Image src={mbbank4} alt="Image 4" />
            </ImagesSection>

            <BenefitsSection>
                <BenefitItem>
                    <Icon>🌴</Icon>
                    <BenefitText>Du lịch</BenefitText>
                </BenefitItem>
                <BenefitItem>
                    <Icon>📚</Icon>
                    <BenefitText>Đào tạo</BenefitText>
                </BenefitItem>
                <BenefitItem>
                    <Icon>💰</Icon>
                    <BenefitText>Thưởng</BenefitText>
                </BenefitItem>
                <BenefitItem>
                    <Icon>🏖️</Icon>
                    <BenefitText>Nghỉ phép</BenefitText>
                </BenefitItem>
            </BenefitsSection>

            <DescriptionSection>
                <SectionHeading>GIỚI THIỆU CÔNG TY</SectionHeading>
                <CompanyInfo>
                    <InfoHeading>Thông tin giới thiệu Ngân hàng TMCP Quân đội - MB Bank - MB</InfoHeading>
                    <InfoText>
                        Ngân hàng Thương mại Cổ phần Quân đội (tên giao dịch tiếng Anh là Military Commercial Joint Stock Bank), gọi tắt là Ngân hàng Quân đội, viết tắt là MBBank, là một ngân hàng thương mại cổ phần của Việt Nam, một doanh nghiệp trực thuộc Bộ Quốc phòng.
                    </InfoText>
                </CompanyInfo>
                <CompanyInfo>
                    <InfoHeading>Thông điệp từ Ngân hàng TMCP Quân đội - MB Bank - MB</InfoHeading>
                    <InfoText>
                        Thông điệp từ ban lãnh đạo, sứ mệnh của ngân hàng và những giá trị cốt lõi được thể hiện tại đây...
                    </InfoText>
                    <InfoHeading>Xem thêm việc làm Ngân hàng TMCP Quân đội - MB Bank - MB đang tuyển dụng.</InfoHeading>
                </CompanyInfo>
            </DescriptionSection>
        </ProfileContainer>
    );
};

export default CompanyProfile;
