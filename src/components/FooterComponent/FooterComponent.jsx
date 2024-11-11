import React from 'react';
import styled from 'styled-components';
import { AppStore, CompanyInfo, ContactInfo, FooterBottom, FooterContainer, FooterHeading, FooterLink, FooterSection, FooterTop, Icon, Logo, MobileApps, PlayStore, SocialIcons, Tagline } from './style';
import logo from '../Assets/logo.png';
import apple from '../Assets/apple.png';
import google from '../Assets/google.png';
const FooterComponent = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <FooterSection>
                    <Logo src={logo} alt="JobOko Logo" />
                    <Tagline>CV Độc đáo, Job OK</Tagline>
                    <ContactInfo>
                        <p>LIÊN HỆ</p>
                        <p>Điện thoại: 0349.369.139</p>
                        <p>Email: huyzxv123@gmail.com</p>
                        <SocialIcons>
                            <Icon>📞</Icon>
                            <Icon>🌐</Icon>
                            <Icon>✉️</Icon>
                        </SocialIcons>
                    </ContactInfo>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>VỀ TìmViệc.com.vn</FooterHeading>
                    <FooterLink>Giới thiệu</FooterLink>
                    <FooterLink>Góc báo chí</FooterLink>
                    <FooterLink>Liên hệ</FooterLink>
                    <FooterLink>Điều khoản dịch vụ</FooterLink>
                    <FooterLink>Chính sách bảo mật</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>TIỆN ÍCH</FooterHeading>
                    <FooterLink>Tính bảo hiểm thất nghiệp</FooterLink>
                    <FooterLink>Trắc nghiệm đa trí thông minh</FooterLink>
                    <FooterLink>Tính lương Gross - Net</FooterLink>
                    <FooterLink>Trắc nghiệm MBTI</FooterLink>
                    <FooterLink>Trắc nghiệm DISC</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>NHÀ TUYỂN DỤNG</FooterHeading>
                    <FooterLink>Đăng tin tuyển dụng</FooterLink>
                    <FooterLink>Tìm hồ sơ</FooterLink>
                    <FooterLink>Sản phẩm dịch vụ</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>XÂY DỰNG SỰ NGHIỆP</FooterHeading>
                    <FooterLink>Tư vấn / Chăm sóc khách hàng</FooterLink>
                    <FooterLink>IT phần mềm</FooterLink>
                    <FooterLink>Marketing - PR</FooterLink>
                    <FooterLink>Biên tập / Báo chí / Truyền hình</FooterLink>
                    <FooterLink>Ngân hàng / Tài chính</FooterLink>
                </FooterSection>
            </FooterTop>
            <FooterBottom>
                <CompanyInfo>
                    <p>CÔNG TY CỔ PHẦN TìmViệc.com.vn</p>
                    <p>
                        Địa chỉ: Tầng 23 tòa nhà Viwaseen, Số 48 Tố Hữu, Phường Trung Văn, Quận Nam Từ Liêm, Thành phố Hà Nội
                    </p>

                </CompanyInfo>
                <MobileApps>
                    <AppStore src={apple} alt="App Store" />
                    <PlayStore src={google} alt="Google Play" />
                </MobileApps>
            </FooterBottom>
        </FooterContainer>
    );
};

export default FooterComponent;
