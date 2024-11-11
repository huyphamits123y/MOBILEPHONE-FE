import React, { useState } from "react";
import Select from 'react-select';
import { Container, FormContainer, FormField, FormFieldd, FormGroup, Input, InputGroup, Label, RadioGroup, RadioInput, RadioLabel, SaveButton, Section, Tab, Textarea, TextArea, Title, ToggleContainer, ToggleLabel } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
const ProfilePage = () => {
    // return (
    //     <div>
    //         <HeaderComponent></HeaderComponent>
    //         <Container>
    //             <Title>Mong muốn của bạn</Title>
    //             <FormGroup>
    //                 <Label>Ngành nghề</Label>
    //                 <Select multiple>
    //                     <option>IT / Phần mềm / IOT / Điện tử viễn thông</option>
    //                     <option>Ngành khác</option>
    //                 </Select>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Chức danh</Label>
    //                 <Select multiple>
    //                     <option>Thực tập sinh lập trình</option>
    //                     <option>Vị trí khác</option>
    //                 </Select>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Địa điểm làm việc</Label>
    //                 <Select multiple>
    //                     <option>Hồ Chí Minh</option>
    //                     <option>Hà Nội</option>
    //                 </Select>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Mức lương (VNĐ)</Label>
    //                 <Input type="number" placeholder="0" /> Đến <Input type="number" placeholder="0" />
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Mong muốn của bạn</Label>
    //                 <TextArea placeholder="Thông tin thêm về công việc bạn mong muốn tìm và ứng tuyển..." />
    //             </FormGroup>
    //             <ToggleContainer>
    //                 <input type="checkbox" id="notify" />
    //                 <ToggleLabel htmlFor="notify">Nhận thông báo</ToggleLabel>
    //             </ToggleContainer>
    //             <RadioGroup>
    //                 <RadioLabel>
    //                     <RadioInput type="radio" name="frequency" value="always" />
    //                     Luôn luôn
    //                 </RadioLabel>
    //                 <RadioLabel>
    //                     <RadioInput type="radio" name="frequency" value="daily" />
    //                     Hàng ngày
    //                 </RadioLabel>
    //                 <RadioLabel>
    //                     <RadioInput type="radio" name="frequency" value="weekly" />
    //                     Hàng tuần
    //                 </RadioLabel>
    //             </RadioGroup>
    //             <SaveButton>Lưu</SaveButton>
    //         </Container>
    //     </div>

    // )



    // const [industry, setIndustry] = useState(null);
    // const [title, setTitle] = useState(null);
    // const [location, setLocation] = useState(null);

    // const industries = [
    //     { value: 'it', label: 'IT / Phần mềm / IOT / Điện tử viễn thông' },
    //     // Add more options here
    // ];

    // const jobTitles = [
    //     { value: 'intern', label: 'Thực tập sinh lập trình' },
    //     // Add more options here
    // ];

    // const locations = [
    //     { value: 'hcm', label: 'Hồ Chí Minh' },
    //     // Add more options here
    // ];

    // return (
    //     <FormContainer>
    //         {/* Left section for 'Mong muốn của bạn' */}
    //         <Section>
    //             <Title>Mong muốn của bạn</Title>
    //             <InputGroup>
    //                 <Label>Ngành nghề</Label>
    //                 <Select
    //                     options={industries}
    //                     value={industry}
    //                     onChange={setIndustry}
    //                     placeholder="Chọn ngành nghề"
    //                 />
    //             </InputGroup>
    //             <InputGroup>
    //                 <Label>Chức danh</Label>
    //                 <Select
    //                     options={jobTitles}
    //                     value={title}
    //                     onChange={setTitle}
    //                     placeholder="Chọn chức danh"
    //                 />
    //             </InputGroup>
    //             <InputGroup>
    //                 <Label>Địa điểm làm việc</Label>
    //                 <Select
    //                     options={locations}
    //                     value={location}
    //                     onChange={setLocation}
    //                     placeholder="Chọn địa điểm làm việc"
    //                 />
    //             </InputGroup>
    //             <InputGroup>
    //                 <Label>Mức lương (VND)</Label>
    //                 <div style={{ display: 'flex', gap: '10px' }}>
    //                     <Input type="number" placeholder="Từ" />
    //                     <Input type="number" placeholder="Đến" />
    //                 </div>
    //             </InputGroup>
    //             <InputGroup>
    //                 <Label>Mong muốn của bạn</Label>
    //                 <Textarea placeholder="Thông tin thêm về công việc..." rows="4" />
    //             </InputGroup>
    //         </Section>

    //         {/* Right section for 'Cập nhật thông tin cá nhân' */}
    //         <Section>
    //             <Title>Cập nhật thông tin cá nhân</Title>
    //             {/* Add your personal information form fields here */}
    //             {/* You can copy the above input groups and modify them as necessary */}
    //         </Section>
    //     </FormContainer>
    // );




    const [activeTab, setActiveTab] = useState('desires');
    const [industry, setIndustry] = useState(null);
    const [title, setTitle] = useState(null);
    const [location, setLocation] = useState(null);

    const industries = [
        { label: 'IT / Phần mềm / IOT / Điện tử viễn thông' },
        { value: 'as', label: 'coder' },
        { value: 'am', label: 'marketing' },
        // Add more options here
    ];

    const jobTitles = [
        { value: 'intern', label: 'Thực tập sinh lập trình' },
        { value: 'senior', label: ' senior NodeJS' },
        { value: 'junior', label: 'junior Angular' },
        // Add more options here
    ];

    const locations = [
        { value: 'hcm', label: 'Hồ Chí Minh' },
        { value: 'hn', label: 'Hà Nội' },
        { value: 'hp', label: 'Hải Phòng' },
        // Add more options here
    ];

    return (
        <div>
            <HeaderComponent />
            <Container>

                <Tab>
                    <button className={activeTab === 'desires' ? 'active' : ''} onClick={() => setActiveTab('desires')}>
                        Mong muốn của bạn
                    </button>
                    <button className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
                        Cập nhật thông tin cá nhân
                    </button>
                </Tab>

                {/* Mong muốn của bạn Section */}
                <Section isActive={activeTab === 'desires'}>
                    <FormFieldd>
                        <label>Ngành nghề</label>
                        <Select
                            options={industries}
                            value={industry}
                            onChange={setIndustry}
                            placeholder="Chọn ngành nghề"
                        />
                        {/* <input type="text" placeholder="IT / Phần mềm / IOT / Điện tử viễn thông" /> */}
                    </FormFieldd>

                    <FormFieldd>
                        <label>Chức danh</label>
                        <Select
                            options={jobTitles}
                            value={title}
                            onChange={setTitle}
                            placeholder="Chọn chức danh"
                        />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Địa điểm làm việc</label>
                        <Select
                            options={locations}
                            value={location}
                            onChange={setLocation}
                            placeholder="Chọn địa điểm làm việc"
                        />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Mức lương (VND)</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input type="number" placeholder="Từ" />
                            <input type="number" placeholder="Đến" />
                        </div>
                    </FormFieldd>

                    <FormFieldd>
                        <label>Mong muốn của bạn</label>
                        <textarea placeholder="Thông tin thêm về công việc bạn mong muốn tìm và ứng tuyển..." rows="4" />
                    </FormFieldd>

                    <SaveButton>Lưu</SaveButton>
                </Section>

                {/* Cập nhật thông tin cá nhân Section */}
                <Section isActive={activeTab === 'personal'}>
                    <FormFieldd>
                        <label>Họ và tên *</label>
                        <input type="text" placeholder="Phạm Gia Huy" />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Email *</label>
                        <input type="email" placeholder="huyzxv123@gmail.com" />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Điện thoại *</label>
                        <input type="text" placeholder="0349369139" />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Địa chỉ *</label>
                        <textarea placeholder="1124-2A Le Duc Tho Street, Ward 13, Go Vap District, Ho Chi Minh City" rows="3" />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Ngày sinh *</label>
                        <input type="date" />
                    </FormFieldd>

                    <FormFieldd>
                        <label>Giới tính *</label>
                        <select>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </FormFieldd>

                    <FormFieldd>
                        <label>Tình trạng hôn nhân</label>
                        <select>
                            <option value="single">Độc thân</option>
                            <option value="married">Đã kết hôn</option>
                        </select>
                    </FormFieldd>

                    <SaveButton>Lưu</SaveButton>
                </Section>
            </Container>
            <div style={{ marginTop: '20px' }} >
                <img style={{ width: '100%' }} src={background1} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    );
}
export default ProfilePage