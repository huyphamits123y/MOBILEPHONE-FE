import React from 'react';
import logo from '../Assets/logo.png';
import topzone from '../Assets/topzone.png';
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
                <img style={{ width: '150px', height: '50px', marginLeft: '250px' }} src={topzone} alt="logo" />
            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>Iphone</a>

            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>Mac</a>
            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>iPad</a>

            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>Watch</a>

            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>Tai nghe, Loa</a>

            </div>
            <div className="menu-item">
                <a href="#" style={{ color: "#fff" }}>Phụ Kiện</a>

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
                    <a href="#" style={{ color: "#fff" }} onClick={() => navigate("/signin")}>Đăng nhập</a>
                    <a href="#" style={{ color: "#fff" }} onClick={() => navigate("/signup")}>Đăng ký</a>
                </div>
            )}
        </WrapperNav>
    );
};

export default HeaderComponent;