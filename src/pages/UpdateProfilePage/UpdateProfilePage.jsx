import React from "react";
import { Container, Description, FormField, Header, SaveButton, SubTitle, SupportButton, SupportContainer, SupportOptions, Title, TitleOptions } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { GoMail } from "react-icons/go";
import { TiPhoneOutline } from "react-icons/ti";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
const UpdateProfilePage = () => {
    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container style={{ marginTop: '10px' }}>
                <Header>
                    <h2>TẠI SAO NÊN CẬP NHẬT HỒ SƠ CÁ NHÂN?</h2>
                    <ul>
                        <li>Được nhà tuyển dụng chủ động săn đón.</li>
                        <li>Được gọi ý các cơ hội việc làm phù hợp.</li>
                    </ul>
                </Header>

                <Title>THÔNG TIN CƠ BẢN</Title>
                <SubTitle>Bạn vui lòng hoàn thiện các thông tin dưới đây (*) Các thông tin bắt buộc</SubTitle>

                {/* Form Fields */}
                <FormField>
                    <label>Họ và tên *</label>
                    <input type="text" placeholder="Phạm Gia Huy" />
                </FormField>

                <FormField>
                    <label>Email *</label>
                    <input type="email" placeholder="huyzxv123@gmail.com" />
                </FormField>

                <FormField>
                    <label>Điện thoại *</label>
                    <input type="text" placeholder="0349369139" />
                </FormField>

                <FormField>
                    <label>Địa chỉ *</label>
                    <textarea placeholder="1124-2A Le Duc Tho Street, Ward 13, Go Vap District, Ho Chi Minh City" rows="3"></textarea>
                </FormField>

                <FormField className="inline">
                    <div>
                        <label>Ngày sinh *</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Giới tính *</label>
                        <select>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>
                </FormField>

                <FormField>
                    <label>Tình trạng hôn nhân</label>
                    <select>
                        <option value="single">Độc thân</option>
                        <option value="married">Đã kết hôn</option>
                    </select>
                </FormField>

                {/* Save Button */}
                <SaveButton>LƯU THÔNG TIN</SaveButton>
            </Container>
            <SupportContainer>
                <TitleOptions>HỖ TRỢ ỨNG VIÊN</TitleOptions>
                <Description>
                    Nếu gặp bất cứ vấn đề gì cần hỗ trợ, hãy gọi tới HOTLINE hoặc gửi thư về địa chỉ email bên dưới để được hỗ trợ.
                </Description>
                <SupportOptions>
                    <SupportButton href="tel:0349369139">
                        <TiPhoneOutline style={{ width: '50px', height: '50px' }} />
                        0349369139
                    </SupportButton>
                    <SupportButton href="mailto:hotro@joboko.com">
                        <GoMail style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        huyzxv123@gmail.com
                    </SupportButton>
                </SupportOptions>
            </SupportContainer>
            <div >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default UpdateProfilePage