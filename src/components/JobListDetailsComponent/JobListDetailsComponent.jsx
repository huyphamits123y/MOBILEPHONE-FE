import React, { useState } from 'react';
import styled from 'styled-components';
import { Actions, Badge, Buttonzz, CardContainer, Company, Container, Deadline, Details, Footer, HeaderImage, JobDescription, JobDetails, JobFooter, JobHeader, JobInfo, JobItem, JobList, JobTitle, Location, Salary, SalaryInfo, SectionTitle, Tag, WrapperButton } from './styled';
import slider1 from '../Assets/slider1.png';
import { Button } from 'antd';
import br from '../Assets/br.png';
const jobs = [
    {
        id: 1,
        title: "Giáo viên IELTS Thu nhập cao upto 30tr/tháng",
        company: "Công Ty Cổ Phần Tư Vấn Đánh Giá Và Phát Triển Giáo Dục Edutalk",
        location: "Hà Nội, Ninh Bình",
        salary: "15.000.000 - 30.000.000đ/tháng",
        description: ["Với ứng viên tại Ninh Bình: có chứng chỉ IELTS từ 7.0 trở lên. Với ứng viên tại Hà Nội: có chứng chỉ IELTS từ 7.5 trở lên.", "Đàm phán, thương lượng với khách hàng về giá cả, hợp đồng, tiến hành chốt đơn và hỗ trợ khách hàng ký hợp đồng.", "Chăm sóc khách hàng sau khi bán hàng, duy trì mối quan hệ với khách hàng hiện tại.", "Tìm kiếm nguồn khách hàng mới, có nhu cầu xây dựng data, mở rộng phát triển quan hệ.", "Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/ Đại lý để NPP/ Đại lý tiếp tục nhập hàng."],
        require: ["Có kinh nghiệm làm việc và tệp khách hàng là các NPP, cửa hàng/hệ thống bán buôn, bán lẻ,...", "Ưu tiên có kinh nghiệm lĩnh vực mỹ phẩm, thẩm mỹ, spa, làm đẹp, hoặc kinh doanh hệ thống...", "Giao tiếp tốt, nhanh nhẹn.", "Kỹ năng tư vấn, đàm phán linh hoạt", "Yêu thích lĩnh vực mỹ phẩm là lợi thế."],
        benifit: ["Lương cứng: 8 triệu - 15 triệu + doanh số + thưởng + hỗ trợ (thu nhập không giới hạn).", "Xét tăng lương định kỳ.", "Phụ cấp ăn trưa: 30.000 VND/ngày.", "Du lịch, team building hàng năm.", "Văn phòng hiện đại, được cung cấp đầy đủ thiết bị làm việc."],
        workingtime: ["8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy", "Nghỉ trưa 1 tiếng.", "Nghỉ chiều Thứ 7 và Chủ nhật hàng tuần."],
        workplace: "Trụ sở chính: số 14 Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội",
        deadline: "Còn 12 ngày",
        details: ["Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/Đại lý để NPP/Đại lý tiếp tục nhập hàng.", "8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy."],
        type: "Part/Full time",
        images: "images",
        imagesbackground: "imagesbackground",
        rank: 'Nhân viên',
        experience: "Từ 0.5 năm",
        tag: "HOT"
    },
    {
        id: 2,
        title: "Giáo Viên Ielts PartTime Tại Thái Nguyên",
        company: "Công Ty Cổ Phần Tư Vấn Đánh Giá Và Phát Triển Giáo Dục Edutalk",
        location: "Thái Nguyên",
        salary: "12 - 25 triệu",
        description: ["Với ứng viên tại Ninh Bình: có chứng chỉ IELTS từ 7.0 trở lên. Với ứng viên tại Hà Nội: có chứng chỉ IELTS từ 7.5 trở lên.", "Đàm phán, thương lượng với khách hàng về giá cả, hợp đồng, tiến hành chốt đơn và hỗ trợ khách hàng ký hợp đồng.", "Chăm sóc khách hàng sau khi bán hàng, duy trì mối quan hệ với khách hàng hiện tại.", "Tìm kiếm nguồn khách hàng mới, có nhu cầu xây dựng data, mở rộng phát triển quan hệ.", "Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/ Đại lý để NPP/ Đại lý tiếp tục nhập hàng."],
        require: ["Có kinh nghiệm làm việc và tệp khách hàng là các NPP, cửa hàng/hệ thống bán buôn, bán lẻ,...", "Ưu tiên có kinh nghiệm lĩnh vực mỹ phẩm, thẩm mỹ, spa, làm đẹp, hoặc kinh doanh hệ thống...", "Giao tiếp tốt, nhanh nhẹn.", "Kỹ năng tư vấn, đàm phán linh hoạt", "Yêu thích lĩnh vực mỹ phẩm là lợi thế."],
        benifit: ["Lương cứng: 8 triệu - 15 triệu + doanh số + thưởng + hỗ trợ (thu nhập không giới hạn).", "Xét tăng lương định kỳ.", "Phụ cấp ăn trưa: 30.000 VND/ngày.", "Du lịch, team building hàng năm.", "Văn phòng hiện đại, được cung cấp đầy đủ thiết bị làm việc."],
        workingtime: ["8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy", "Nghỉ trưa 1 tiếng.", "Nghỉ chiều Thứ 7 và Chủ nhật hàng tuần."],
        workplace: "Trụ sở chính: số 14 Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội",
        deadline: "Còn 52 ngày",
        details: ["Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/Đại lý để NPP/Đại lý tiếp tục nhập hàng.", "8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy."],
        type: "Part/Full time",
        images: "images",
        imagesbackground: "imagesbackground",
        rank: 'Nhân viên',
        experience: "Từ 0.5 năm",
        tag: "UP"
    },
    {
        id: 3,
        title: "Thực Tập Sinh Kỹ Sư Dự Án M&E",
        company: "Công Ty Cổ Phần Tập Đoàn Đầu Tư - Thương Mại Và Xây Dựng Vân Khánh",
        location: "Hồ Chí Minh",
        salary: "8 triệu - 16 triệu",
        description: ["Với ứng viên tại Ninh Bình: có chứng chỉ IELTS từ 7.0 trở lên. Với ứng viên tại Hà Nội: có chứng chỉ IELTS từ 7.5 trở lên.", "Đàm phán, thương lượng với khách hàng về giá cả, hợp đồng, tiến hành chốt đơn và hỗ trợ khách hàng ký hợp đồng.", "Chăm sóc khách hàng sau khi bán hàng, duy trì mối quan hệ với khách hàng hiện tại.", "Tìm kiếm nguồn khách hàng mới, có nhu cầu xây dựng data, mở rộng phát triển quan hệ.", "Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/ Đại lý để NPP/ Đại lý tiếp tục nhập hàng."],
        require: ["Có kinh nghiệm làm việc và tệp khách hàng là các NPP, cửa hàng/hệ thống bán buôn, bán lẻ,...", "Ưu tiên có kinh nghiệm lĩnh vực mỹ phẩm, thẩm mỹ, spa, làm đẹp, hoặc kinh doanh hệ thống...", "Giao tiếp tốt, nhanh nhẹn.", "Kỹ năng tư vấn, đàm phán linh hoạt", "Yêu thích lĩnh vực mỹ phẩm là lợi thế."],
        benifit: ["Lương cứng: 8 triệu - 15 triệu + doanh số + thưởng + hỗ trợ (thu nhập không giới hạn).", "Xét tăng lương định kỳ.", "Phụ cấp ăn trưa: 30.000 VND/ngày.", "Du lịch, team building hàng năm.", "Văn phòng hiện đại, được cung cấp đầy đủ thiết bị làm việc."],
        workingtime: ["8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy", "Nghỉ trưa 1 tiếng.", "Nghỉ chiều Thứ 7 và Chủ nhật hàng tuần."],
        workplace: "Trụ sở chính: số 14 Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội",
        deadline: "Còn 59 ngày",
        details: ["Đề xuất các chương trình nhằm thúc đẩy doanh thu cho NPP/Đại lý để NPP/Đại lý tiếp tục nhập hàng.", "8h30 - 17h30 từ thứ Hai đến Sáng thứ Bảy."],
        type: "Thực tập",
        images: "images",
        imagesbackground: "imagesbackground",
        rank: 'Nhân viên',
        experience: "Không yêu cầu",
        tag: "UP"
    },
];

const JobListDetailsComponent = () => {
    const [selectedJob, setSelectedJob] = useState(jobs[0]);

    return (
        <Container>
            <JobList>
                {jobs.map((job) => (

                    <CardContainer key={job.id} onClick={() => setSelectedJob(job)} selected={selectedJob.id === job.id}>
                        <Badge>{job.tag}</Badge>
                        <JobTitle>{job.title}</JobTitle>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <img key={slider1} src={slider1} alt="slider" width="100px" height="100px" />
                            </div>
                            <div style={{ margin: 'auto 0px' }}>
                                <Company>
                                    {job.company}<span role="img" aria-label="trophy">🏆</span>
                                </Company>
                                <Location>{job.location}</Location>
                                <Salary>{job.salary}</Salary>
                            </div>
                        </div>
                        {job.details.map((detail) => (
                            <Details> • {detail}</Details>

                        ))}

                        <Footer>
                            <div className="time-remaining">{job.deadline}</div>
                            <div className="more-info">Xem chi tiết</div>
                        </Footer>
                    </CardContainer>
                ))}
            </JobList>
            <JobDetails>

                <HeaderImage src={br} alt="Header" />
                <div style={{ display: 'flex', marginTop: '10px' }}>
                    <div>
                        <img key={slider1} src={slider1} alt="slider" width="100px" height="100px" />
                    </div>
                    <div style={{ margin: 'auto 0px' }}>
                        <JobTitle>{selectedJob.title}</JobTitle>
                        <Company>{selectedJob.company}</Company>
                        <Location>{selectedJob.location}</Location>

                    </div>
                </div>

                <Actions>
                    <WrapperButton>Ứng tuyển</WrapperButton>

                </Actions>

                {/* <SalaryInfo>
                    {selectedJob.benifit.map((benifit) => (
                        <div key={benifit}>💰 {benifit}</div>
                    ))}
                  
                </SalaryInfo> */}

                <JobInfo>
                    <div>⏰ Loại hình: {selectedJob.type}</div>
                    <div>📋 Chức vụ: {selectedJob.rank}</div>
                    <div>📅 Hạn nộp:  {selectedJob.deadline}</div>
                </JobInfo>



                <JobDetails>
                    <SectionTitle>Mô tả công việc</SectionTitle>
                    <JobDescription>
                        {selectedJob.description.map((description) => (
                            <li key={description}>{description}</li>
                        ))}
                    </JobDescription>
                </JobDetails>

                <JobDetails>
                    <SectionTitle>Yêu cầu</SectionTitle>
                    <JobDescription>
                        {selectedJob.require.map((require) => (
                            <li key={require}>{require}</li>
                        ))}
                    </JobDescription>
                </JobDetails>
                <JobDetails>
                    <SectionTitle>Quyền lợi</SectionTitle>
                    <JobDescription>
                        {selectedJob.benifit.map((benifit) => (
                            <li key={benifit}>{benifit}</li>
                        ))}
                    </JobDescription>
                </JobDetails>
                <JobDetails>
                    <SectionTitle>Thời gian làm việc</SectionTitle>
                    <JobDescription>
                        {selectedJob.workingtime.map((work) => (
                            <li key={work}>{work}</li>
                        ))}
                    </JobDescription>
                </JobDetails>
                <JobDetails>
                    <SectionTitle>Nơi làm việc</SectionTitle>
                    <JobDescription>
                        {selectedJob.workplace}


                    </JobDescription>
                </JobDetails>
            </JobDetails>
        </Container>
    );
};
export default JobListDetailsComponent
