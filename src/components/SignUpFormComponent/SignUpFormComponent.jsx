import React, { useEffect, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { WrapperBody, WrapperButton, WrapperInputBox, WrapperLogin, WrapperRegister, WrapperRemember } from "./style";
import InputForm from "../InputFormComponent/InputFormComponent";
import { WrapperTextLight } from "./style";
import { useLocation, useNavigate } from "react-router";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { Modal, Button } from "antd";
import login from '../../components/Assets/login.png';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as UserService from '../../services/UserService';
const SignUpFormComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('')

    const [errorMessage, setErrorMessage] = useState('');
    const onChangeHandleEmail = (value) => {
        setEmail(value)
    }
    const onChangeHandlePassword = (value) => {
        setPassword(value)
    }
    const onChangeHandleName = (value) => {
        setName(value)
    }

    const navigate = useNavigate();
    const handleNavigateSignIn = () => {
        navigate('/signin')

    }
    const mutation = useMutationHooks(
        async (data) => {
            const res = UserService.SignUpUser(data);
            return res
        }
    )
    const { data, isSuccess, isError, error } = mutation
    console.log('data', data)
    useEffect(() => {
        if (isSuccess && data) {
            handleNavigateSignIn()

        }
        if (isError && error) {
            const backendErrorMessage = error.response?.data?.message || 'Registration failed.';
            setErrorMessage(backendErrorMessage);
            setIsModalVisible(true);
        }
    }, [isSuccess, isError, data, error])
    const handleSignUp = () => {
        mutation.mutate({
            name,
            email,
            password,
        })



    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    return (
        <WrapperBody>
            <img style={{ width: '280px', height: '433px' }} src={login} alt="login"></img>
            <WrapperLogin>
                <form action="">
                    <h1>Đăng Ký</h1>
                    <WrapperInputBox>
                        <InputForm placeholder="Name" style={{ marginBottom: '10px', width: '400px', height: '10px' }} value={name} onChange={onChangeHandleName} />


                    </WrapperInputBox>
                    <WrapperInputBox>
                        <InputForm style={{ marginBottom: '10px', width: '400px', height: '10px' }} placeholder="Email" value={email} onChange={onChangeHandleEmail} />
                        <FaUserAlt className="icon" />

                    </WrapperInputBox>

                    <WrapperInputBox>
                        <InputForm placeholder="Password" style={{ marginBottom: '10px', width: '400px', height: '10px' }} value={password} type="password" onChange={onChangeHandlePassword} />

                        <FaLock className="icon" />
                    </WrapperInputBox>
                    <WrapperRemember>
                        <label>
                            <input type="checkbox" />Remember me
                        </label>

                    </WrapperRemember>
                    <ButtonComponent
                        disable={!email.length || !password.length || !name.length}
                        onClick={handleSignUp}
                        size={40}



                        textButton={'Đăng Ký'}

                    ></ButtonComponent>
                    <Modal
                        title="Registration Failed"
                        visible={isModalVisible}
                        onOk={handleOk}
                    >
                        <p>{errorMessage}</p> {/* Hiển thị lỗi từ backend */}
                    </Modal>

                </form>
            </WrapperLogin>

        </WrapperBody>
    )
}
export default SignUpFormComponent