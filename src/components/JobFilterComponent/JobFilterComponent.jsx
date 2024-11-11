import React, { useState } from 'react';
import styled from 'styled-components';
import { ApplyButton, Company, Container, JobCard, JobList, JobTitle, Location, PageButton, PageInfo, Pagination, Salary, Title } from './style';

import slider1 from '../Assets/slider1.png';
import mbbank from '../Assets/mbbank.png';
import { FaChevronDown } from "react-icons/fa";


const JobFilterComponent = () => {
    const ITEMS_PER_PAGE = 6;
    const data = [
        // Danh sách các công việc (thay thế bằng dữ liệu thực tế)
        { id: 1, title: "Academic Coordinator / Nhân Viên Học Vụ", company: "EMG EDUCATION", location: "Hồ Chí Minh", salary: "Thỏa thuận" },
        { id: 2, title: "Chuyên viên Phát triển Kinh doanh", company: "CÔNG TY CỔ PHẦN JOBOKO TOÀN CẦU", location: "Hà Nội", salary: "13 - 20 triệu VND/tháng" },
        { id: 3, title: "[AEON Xuân Thủy] Nhân Viên Siêu Thị", company: "CÔNG TY TNHH AEON VIỆT NAM", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 4, title: "Telesale / Chăm sóc Khách hàng", company: "TỔNG CÔNG TY CỔ PHẦN BẢO HIỂM", location: "Hà Nội", salary: "8 - 12 triệu VND/tháng" },
        { id: 5, title: "Kỹ Sư Shopdrawing", company: "CÔNG TY CỔ PHẦN XÂY DỰNG ALPHACO HÀ NỘI", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 6, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 7, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 8, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        { id: 9, title: "Quản Lý Bán Hàng Khu Vực", company: "CÔNG TY CỔ PHẦN LIÊN DOANH KANGAROO QUỐC TẾ", location: "Hà Nội", salary: "Thỏa thuận" },
        // Thêm các item khác
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    };

    return (
        <Container>

            <JobList>
                {getCurrentPageData().map((job) => (
                    <JobCard key={job.id} style={{ display: 'flex' }}>
                        <div style={{ marginTop: '20px' }}>
                            <img key={mbbank} src={mbbank} alt="slider" width="120px" height="120px" />
                        </div>
                        <div>
                            <div style={{ height: '150px' }}>
                                <JobTitle>{job.title}</JobTitle>
                                <Company>{job.company}</Company>
                                <Location>{job.location}</Location>
                                <Salary>{job.salary}</Salary>
                            </div>
                            <div>
                                <ApplyButton style={{ marginLeft: '680px' }}>Full time</ApplyButton>
                            </div>

                            {/* <JobTitle>{job.title}</JobTitle>
                            <Company>{job.company}</Company>
                            <Location>{job.location}</Location>
                            <Salary>{job.salary}</Salary>
                            <ApplyButton style={{ marginTop: 'auto', marginBottom: '10px' }}>Nộp đơn</ApplyButton> */}


                        </div>
                    </JobCard>
                ))}
            </JobList>
            <Pagination>
                <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
                    Trang Trước
                </PageButton>
                <PageInfo>Trang {currentPage} / {totalPages}</PageInfo>
                <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Trang Sau
                </PageButton>
            </Pagination>
        </Container>
    );
};
export default JobFilterComponent