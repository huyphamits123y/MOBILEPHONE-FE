import React from "react";
import { ApplyButton, BenefitItem, BenefitsList, Button, ButtonGroup, CompanyInfo, CompanyName, Container, Header, Icon, InfoGroup, JobContainer, JobDetails, JobHeader, JobInfo, JobItem, JobList, JobSectionTitle, JobStatus, JobTitle, List, ListItem, Location, Logo, MainContent, Section, SectionTitle, Sidebar, SidebarItem, SidebarText, SidebarTitle, Tab, Tabs } from "./style";
import mbbank from '../Assets/mbbank.png';
const JobDetailsComponent = () => {
    const [activeTab, setActiveTab] = React.useState("details");

    return (
        <Container>
            <Header>
                <Logo src={mbbank} alt="Company Logo" />
                <JobInfo>
                    <JobTitle>Hà Nội | Nhân Viên Kinh Doanh</JobTitle>
                    <CompanyName>CÔNG TY TNHH SCBIO</CompanyName>
                    <Location>Địa điểm làm việc: Hà Nội</Location>
                    <JobStatus>Hết hạn: Còn 25 ngày</JobStatus>
                </JobInfo>
                <ButtonGroup>
                    <Button primary>Ứng tuyển</Button>
                    <Button>Lưu việc</Button>
                </ButtonGroup>
            </Header>

            <MainContent>
                <Tabs>
                    <Tab active={activeTab === "details"} onClick={() => setActiveTab("details")}>
                        Chi tiết công việc
                    </Tab>
                    <Tab active={activeTab === "about"} onClick={() => setActiveTab("about")}>
                        Giới thiệu công ty
                    </Tab>
                </Tabs>

                {activeTab === "details" && (
                    <JobDetails>
                        <InfoGroup>
                            <Icon>💼</Icon>Thu nhập: <strong>8 triệu - 15 triệu VND + doanh số + thưởng + hỗ trợ</strong>
                        </InfoGroup>
                        <InfoGroup>
                            <Icon>🕒</Icon>Loại hình: <strong>Toàn thời gian</strong>
                        </InfoGroup>
                        <InfoGroup>
                            <Icon>🏷️</Icon>Chức vụ: <strong>Nhân viên</strong>
                        </InfoGroup>

                        <SectionTitle>Mô tả công việc</SectionTitle>
                        <ul>
                            <li>Tìm hiểu, nghiên cứu về các sản phẩm của công ty để giới thiệu...</li>
                            <li>Đàm phán, thương lượng với khách hàng về giá cả...</li>
                            <li>Chăm sóc khách hàng sau khi bán hàng...</li>
                        </ul>

                        <SectionTitle>Yêu cầu</SectionTitle>
                        <ul>
                            <li>Có kinh nghiệm bán hàng, tư vấn sản phẩm...</li>
                            <li>Ưu tiên có kinh nghiệm trong lĩnh vực mỹ phẩm...</li>
                        </ul>
                        <SectionTitle>Quyền lợi</SectionTitle>
                        <ul>
                            <li>Lương cứng: 8 triệu - 15 triệu + doanh số + thưởng + hỗ trợ (thu nhập không giới hạn).</li>
                            <li>Xét tăng lương định kỳ.</li>
                            <li>Phụ cấp ăn trưa: 30.000 VND/ngày.</li>
                            <li>Hưởng đầy đủ các chế độ BHXH-BHYT-BHTN, phép năm, thưởng Lễ - Tết, lương tháng thứ 13, thưởng hoàn thành công việc xuất sắc trong tháng, sinh nhật, hiếu - hỷ...</li>
                            <li>Du lịch, team building hàng năm.</li>
                            <li>Văn phòng hiện đại, được cung cấp đầy đủ thiết bị làm việc.</li>
                            <li>Có nhiều cơ hội thăng tiến, môi trường làm việc thân thiện, văn minh, chuyên nghiệp.</li>
                            <li>Được hưởng các dịch vụ, mua sản phẩm tại Công ty với mức giá ưu đãi dành cho nhân viên theo quy định của Công ty.</li>
                            <li></li>
                        </ul>
                        <SectionTitle>Thông tin khác</SectionTitle>
                        <ul>
                            <li>Thời gian làm việc:</li>
                            <li>8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy</li>
                            <li>Nghỉ trưa 1 tiếng.</li>
                            <li>Nghỉ chiều Thứ 7 và Chủ nhật hàng tuần.</li>

                        </ul>
                        <SectionTitle>Thông tin chung</SectionTitle>
                        <ul>
                            <li>Thu nhập: 8 triệu - 15 triệu VND</li>

                        </ul>
                        <SectionTitle>Nơi làm việc</SectionTitle>
                        <ul>
                            <li>Trụ sở chính: số 14 Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội.</li>

                        </ul>

                    </JobDetails>
                )}

                {activeTab === "about" && (
                    <JobDetails>
                        <SectionTitle>Giới thiệu công ty</SectionTitle>
                        <p>CÔNG TY TNHH SCBIO chuyên cung cấp các sản phẩm mỹ phẩm...</p>
                    </JobDetails>
                )}
            </MainContent>
        </Container>
    );
};

export default JobDetailsComponent;