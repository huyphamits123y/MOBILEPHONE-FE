import React from "react";
import { Button, ButtonGroup, CancelButton, Company, Container, Description, JobRow, JobTitle, Status, SupportButton, SupportContainer, SupportOptions, Table, Tbody, Td, Th, Thead, Title, TitleOptions, ViewButton } from "./styled";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
const ManagerPage = () => {
    const jobs = [
        {
            title: "Thực Tập Sinh ReactJS và NodeJS",
            company: "Công Ty TNHH ĐT&PT CÔNG NGHỆ ĐẤT VIỆT",
            salary: "Thỏa thuận",
            deadline: "Còn 7 ngày",
            status: "Đã gửi tới NTD",
            date: "19/08/2024",
            cv: "CV Thực Tập Sinh"
        },
        {
            title: "INTERN FRONTEND DEVELOPER",
            company: "XTECH GROUP",
            salary: "Thỏa thuận",
            deadline: "Hết hạn",
            status: "Đã gửi tới NTD",
            date: "16/08/2024",
            cv: "CV FRONTEND DEVELOPER"
        },
        {
            title: "INTERN FRONTEND DEVELOPER",
            company: "XTECH GROUP",
            salary: "Thỏa thuận",
            deadline: "Hết hạn",
            status: "Đã gửi tới NTD",
            date: "16/08/2024",
            cv: "CV FRONTEND DEVELOPER"
        },
        {
            title: "INTERN FRONTEND DEVELOPER",
            company: "XTECH GROUP",
            salary: "Thỏa thuận",
            deadline: "Hết hạn",
            status: "Đã gửi tới NTD",
            date: "16/08/2024",
            cv: "CV FRONTEND DEVELOPER"
        },
        // Add more jobs here...
    ];
    return (



        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container>
                <Title>DANH SÁCH VIỆC LÀM <span>BẠN ĐÃ ỨNG TUYỂN</span></Title>
                <Table>
                    <Thead>
                        <tr>
                            <Th>VIỆC LÀM</Th>
                            <Th>CV ĐÃ GỬI</Th>
                            <Th>Trạng thái</Th>
                            <Th>Thời gian</Th>
                            <Th></Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {jobs.map((job, index) => (
                            <JobRow key={index}>
                                <Td>
                                    <JobTitle>{job.title}</JobTitle>
                                    <Company>{job.company}</Company>
                                    <div>{job.salary} · {job.deadline}</div>
                                </Td>
                                <Td>
                                    <div>
                                        <h4 style={{ marginLeft: '10px' }}>{job.cv}</h4>
                                        <ButtonGroup>
                                            <Button>Xem</Button>
                                            <Button>Đổi CV</Button>
                                        </ButtonGroup>
                                    </div>
                                </Td>
                                <Td>
                                    <Status>{job.status}</Status>
                                </Td>
                                <Td>{job.date}</Td>
                                <Td>
                                    <Button cancel>Hủy apply</Button>
                                </Td>
                            </JobRow>
                        ))}
                    </Tbody>
                </Table>
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
export default ManagerPage