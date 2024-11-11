import React, { useState } from "react";
import { Container, CustomDatePicker, CustomDatePickerContainer, Description, FormField, FormFieldd, Header, LabelDate, SaveButton, SelectedDate, SubTitle, SupportButton, SupportContainer, SupportOptions, Title, TitleOptions, WrapperUploadFile } from "./style";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import background1 from '../../components/Assets/background1.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import Select from 'react-select';
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";
import { getBase64, renderOptions } from '../../utils';
import { UploadOutlined } from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Upload, Button, message, Modal } from "antd";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const RecruitmentPage = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [activeTab, setActiveTab] = useState('desires');
    const [showModal, setShowModal] = useState(false);
    // const [industry, setIndustry] = useState(null);
    // const [title, setTitle] = useState(null);
    // const [location, setLocation] = useState(null);
    const [type, setType] = useState(null);
    const [stateRecruitment, setStateRecruitment] = useState({
        industry: '',
        title: '',
        location: '',
        type: '',
        image: '',
        company: '',
        date: '',
        salary: '',
        rank: '',
        description: '',
        recommendProduct: '',
        jobDetails: '',
        require: '',
        benefit: '',
        worktime: '',
        workplace: '',
        recommendCompany: '',
        vision: '',
        mission: '',
        value: '',
        scale: ''



    })
    // const handleOnchange = (e) => {
    //     setStateRecruitment({
    //         ...stateRecruitment,
    //         [e.target.name]: e.target.value
    //     })
    //     console.log('e.target.name', e.target.name, e.target.value)

    // }
    const handleOnchange = (selectedOption, { name }) => {
        setStateRecruitment({
            ...stateRecruitment,
            [name]: selectedOption
        });
    };
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleOnChangePdf = (info) => {
        const isPDF = info.file.type === "application/pdf";
        if (!isPDF) {
            message.error("Bạn chỉ có thể tải lên file PDF!");
            return;
        }
        const fileObj = info.file.originFileObj;
        setFile(fileObj);
    };
    const handleOnchangePdff = async (info) => {
        const { file } = info; // Lấy đối tượng file từ thông tin của upload
        if (!file.url && !file.preview) {
            // Đọc file và tạo bản preview dưới dạng base64
            file.preview = await getBase64(file.originFileObj);
        }

        // Cập nhật state với preview của file PDF
        setStateRecruitment({
            ...stateRecruitment,
            description: file.preview // Lưu base64 của file PDF trong state
        });
    };



    const handleOnchangeAvatar = async (info) => {
        const { file } = info; // Lấy đối tượng file từ thông tin của upload
        if (!file.url && !file.preview) {
            // Nếu không có url và preview, thực hiện chuyển đổi và gán preview
            file.preview = await getBase64(file.originFileObj);
        }
        setStateRecruitment({
            ...stateRecruitment,
            image: file.preview
        })
    }
    const handleViewPDF = () => {
        setShowModal(true);
    };

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
    const typeJob = [
        { value: 'fulltime', label: 'Toàn thời gian' },
        { value: 'parttime', label: 'Bán thời gian' },
        { value: 'tt', label: 'Thực tập sinh' },
        // Add more options here
    ];

    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <Container style={{ marginTop: '10px' }}>
                <Header>
                    <h2>Đăng tin tuyển dụng</h2>

                </Header>

                {/* <Title>THÔNG TIN CƠ BẢN</Title>
                <SubTitle>Bạn vui lòng hoàn thiện các thông tin dưới đây (*) Các thông tin bắt buộc</SubTitle> */}

                {/* Form Fields */}

                <FormField style={{ marginTop: '20px' }}>
                    <label>Vị trí ứng tuyển</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Công ty</label>
                    <textarea rows="2" />
                </FormField>
                <FormFieldd >
                    <label>Ngành nghề</label>
                    <Select
                        name="industry"
                        options={industries}
                        value={stateRecruitment.industry}
                        onChange={handleOnchange}
                        placeholder="Chọn ngành nghề"
                    />
                    {/* <input type="text" placeholder="IT / Phần mềm / IOT / Điện tử viễn thông" /> */}
                </FormFieldd>

                <FormFieldd>
                    <label>Chức danh</label>
                    <Select
                        name="title"
                        options={jobTitles}
                        value={stateRecruitment.title}
                        onChange={handleOnchange}
                        placeholder="Chọn chức danh"
                    />
                </FormFieldd>
                <FormFieldd>
                    <label>Loại hình</label>
                    <Select
                        name="type"
                        options={typeJob}
                        value={stateRecruitment.type}
                        onChange={handleOnchange}
                        placeholder="Chọn loại hình"
                    />
                </FormFieldd>

                <FormFieldd>
                    <label>Địa điểm làm việc</label>
                    <Select
                        name="location"
                        options={locations}
                        value={stateRecruitment.location}
                        onChange={handleOnchange}
                        placeholder="Chọn địa điểm làm việc"
                    />
                </FormFieldd>
                <FormField>
                    <label>Mô tả công việc</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Giới thiệu sản phẩm kinh doanh</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Chi tiết công việc</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Yêu cầu công việc</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Quyền lợi</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Thời gian làm việc</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Nơi làm việc</label>
                    <textarea rows="2" />
                </FormField>

                <FormFieldd>
                    <label>Mức lương (VND)</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="number" placeholder="Từ" />
                        <input type="number" placeholder="Đến" />
                    </div>
                </FormFieldd>
                <FormField>
                    <label>Giới thiệu công ty</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Tầm nhìn</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Sứ mệnh</label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Giá trị cốt lỗi </label>
                    <textarea rows="2" />
                </FormField>
                <FormField>
                    <label>Quy mô công ty</label>
                    <textarea rows="1" />
                </FormField>

                <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                    <Button>Chọn hình ảnh công ty</Button>
                    {stateRecruitment?.image && (
                        <img src={stateRecruitment?.image} style={{
                            height: '60px',
                            width: '60px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginLeft: '10px'
                        }} alt="avatar" />
                    )}
                </WrapperUploadFile>
                <CustomDatePickerContainer>
                    <LabelDate>Hạn nộp tuyển dụng</LabelDate>
                    <CustomDatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                    />
                    {selectedDate && (
                        <SelectedDate>
                            Ngày bạn đã chọn: {selectedDate.toLocaleDateString('vi-VN')}
                        </SelectedDate>
                    )}
                </CustomDatePickerContainer>
                <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
                    <h3>DANH SÁCH CV ĐÃ TẢI LÊN</h3>

                    <Upload
                        showUploadList={false} // Không hiển thị danh sách file
                        beforeUpload={() => false} // Ngăn upload tự động
                        onChange={handleOnChangePdf} // Gọi hàm khi chọn file
                        accept=".pdf" // Chỉ cho phép file PDF
                    >
                        <Button icon={<UploadOutlined />}>Tải CV Lên</Button>
                    </Upload>

                    {/* Hiển thị file PDF nếu đã được chọn */}
                    {file && (
                        <div style={{ marginTop: "20px" }}>
                            <h4>TÀI LIỆU CHỨNG CHỈ ĐÃ TẢI LÊN</h4>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {/* Xem trước trang đầu của file PDF */}
                                <Document
                                    file={file}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading={<div>Đang tải file PDF...</div>}
                                >
                                    <Page pageNumber={1} width={150} />
                                </Document>
                                <Button
                                    style={{ marginLeft: "20px" }}
                                    icon={<UploadOutlined />}
                                    onClick={handleViewPDF}
                                >
                                    Xem chi tiết
                                </Button>
                            </div>

                            {/* Thêm các button để xóa và phóng to file (tạm thời chỉ để hiển thị giao diện) */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                <Button danger icon={<UploadOutlined />}>
                                    Xóa
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Modal để xem PDF toàn màn hình */}
                    <Modal
                        title="Chi tiết xem trước"
                        visible={showModal}
                        onCancel={() => setShowModal(false)}
                        footer={null}
                        width={800}
                    >
                        {file && (
                            <Document
                                file={file}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={<div>Đang tải file PDF...</div>}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={700} // Cài đặt kích thước trang PDF
                                    />
                                ))}
                            </Document>
                        )}
                    </Modal>
                </div>
                <WrapperUploadFile onChange={handleOnchangePdff} maxCount={1} accept=".pdf">
                    <Button>Chọn file PDF</Button>
                    {stateRecruitment?.description && (
                        <div style={{ position: 'relative' }}>
                            {/* Hiển thị trang đầu tiên của PDF như một thumbnail */}
                            <Document
                                file={stateRecruitment?.description}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={<div>Đang tải PDF...</div>}
                            >
                                <Page
                                    pageNumber={1}
                                    width={60} // Kích thước thumbnail
                                    height={60}
                                />
                            </Document>

                            {/* Nút để phóng to file PDF */}
                            <Button
                                // icon={<ZoomInOutlined />}
                                style={{ position: 'absolute', top: '0', right: '0' }}
                                onClick={handleViewPDF}
                            >
                                Phóng to
                            </Button>
                        </div>
                    )}
                </WrapperUploadFile>

                {/* Modal để xem PDF chi tiết */}
                <Modal
                    title="Chi tiết file PDF"
                    visible={showModal}
                    onCancel={() => setShowModal(false)}
                    footer={null}
                    width={800}
                >
                    {stateRecruitment?.pdf && (
                        <Document
                            file={stateRecruitment?.description}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={<div>Đang tải PDF...</div>}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    width={700}
                                />
                            ))}
                        </Document>
                    )}
                </Modal>


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
export default RecruitmentPage