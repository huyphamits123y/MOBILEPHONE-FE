import React from 'react';
import logo from '../Assets/logo.png';
import camera1 from '../Assets/camera1.png';
import { WrapperDropdownContent, WrapperDropdownJob, WrapperHeader, WrapperNav } from './style';
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { CiCamera } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { PiPackageDuotone } from "react-icons/pi";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { resetUser } from '../../redux/slides/userSlide';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () => {
    const user = useSelector((state) => state?.user);
    console.log('user', user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(resetUser())
        window.location.reload();

    }
    return (
        // <WrapperHeader>

        <WrapperNav>
            <div className="logo">
                <img style={{ width: '150px' }} src={logo} alt="logo" />
            </div>
            <div className="menu-item">
                <a href="#">Việc làm</a>
                <WrapperDropdownJob className="dropdown-job">
                    <div>
                        <h4>Tiện ích cho bạn</h4>
                        <a href="#"><span className="icon">🔍</span>Tìm việc làm</a>
                        <a href="#"><span className="icon">📊</span>Việc làm của tôi</a>
                        <a href="#"><span className="icon">💼</span>Việc làm theo ngành nghề</a>
                        <a href="#"><span className="icon">💰</span>Việc làm bán thời gian/thực tập</a>

                    </div>
                </WrapperDropdownJob>
            </div>
            <div className="menu-item">
                <a href="#">CV & cover letter</a>
            </div>
            <div className="menu-item">
                <a href="#">Tiện ích/Cẩm nang</a>
                <WrapperDropdownContent className="dropdown-content">
                    <div>
                        <h4>Tiện ích cho bạn</h4>
                        <a href="#"><span className="icon">🧠</span>Trắc nghiệm tính cách MBTI</a>
                        <a href="#"><span className="icon">📊</span>Trắc nghiệm DISC</a>
                        <a href="#"><span className="icon">🔢</span>Trắc nghiệm đa trí thông minh</a>
                        <a href="#"><span className="icon">💰</span>Tính lương Gross - Net</a>
                        <a href="#"><span className="icon">🛡️</span>Tính bảo hiểm thất nghiệp</a>
                        <a href="#"><span className="icon">🚫</span>Tool check chống lừa đảo</a>
                    </div>
                    <hr />
                    <div>
                        <h4>Cẩm nang</h4>
                        <a href="#"><span className="icon">📚</span>Cẩm nang nghề nghiệp</a>
                        <a href="#"><span className="icon">🔍</span>Cách tìm việc & ứng tuyển</a>
                        <a href="#"><span className="icon">💡</span>Câu hỏi cho phỏng vấn</a>
                        <a href="#"><span className="icon">📄</span>CV xin việc/Cover letter</a>
                        <a href="#"><span className="icon">💼</span>Kỹ năng trong phỏng vấn</a>
                        <a href="#"><span className="icon highlight">🔥</span>Mẹo & kinh nghiệm</a>
                    </div>
                </WrapperDropdownContent>
            </div>
            <div className="menu-item">
                <a href="#">Trang nhà tuyển dụng</a>

            </div>
            {user?.access_token ? (

                // <div className="auth-links" style={{ display: 'flex' }}>
                //     <CgProfile style={{ marginTop: '23px' }} />
                //     <a href="#login">  {user?.name}</a>

                // </div>
                <div className="menu-item">
                    <div className="auth-links" style={{ display: 'flex' }}>
                        <CgProfile style={{ marginTop: '23px' }} />
                        <a href="#login">  {user?.name}</a>

                    </div>
                    <WrapperDropdownJob className="dropdown-job">
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <CiCamera style={{ width: '50px', height: '50px' }} />
                            <div style={{ marginLeft: '5px' }}>

                                <h4 style={{ fontWeight: 'bold' }}>{user.name}</h4>
                                <h4 >{user.email}</h4>

                            </div>

                        </div>
                        <hr />
                        <div style={{ display: 'flex' }}>
                            <CgProfile style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }} onClick={() => navigate("/profile")}><span ></span>Trang cá nhân</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <SlNote style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }} onClick={() => navigate("/updateprofile")}><span ></span>Cập nhật thông tin</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <IoPersonAddSharp style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }} onClick={() => navigate("/updaterequirejob")}><span ></span>Cập nhật yêu cầu tìm việc</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <PiPackageDuotone style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }} onClick={() => navigate("/manager")}><span ></span>Quản lí ứng tuyển</a>
                        </div>
                        <hr />
                        <div style={{ display: 'flex' }}>
                            <ImProfile style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }}><span ></span>Đăng tuyển và tìm hồ sơ</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <LuLogOut style={{ marginTop: '10px', width: '20px', height: '20px' }} />
                            <a href="#" style={{ marginLeft: '10px' }} onClick={handleLogout}><span ></span>Đăng xuất</a>
                        </div>

                    </WrapperDropdownJob>
                </div>




            ) : (
                <div className="auth-links">
                    <a href="#" onClick={() => navigate("/signin")}>Đăng nhập</a>
                    <a href="#" onClick={() => navigate("/signup")}>Đăng ký</a>
                </div>
            )}
        </WrapperNav>
    );
};

export default HeaderComponent;