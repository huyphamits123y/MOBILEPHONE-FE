import axios from 'axios';
export const axiosJWT = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true, // Đảm bảo rằng cookie được gửi kèm với yêu cầu
});
// export const loginUser = async (data) => {
//     try {
//         const res = await axiosJWT.post('/api/v1/users/signin', data);
//         return res.data;
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         throw error; // Hoặc xử lý lỗi theo cách khác tùy thuộc vào yêu cầu của bạn
//     }
// };
export const loginUser = async (data) => {
    try {
        const res = await axiosJWT.post('/api/user/sign-in', data);
        return res.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // Hoặc xử lý lỗi theo cách khác tùy thuộc vào yêu cầu của bạn
    }
};
export const SignUpUser = async (data) => {
    try {
        const res = await axiosJWT.post('/api/v1/users/signup', data);
        return res.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // Hoặc xử lý lỗi theo cách khác tùy thuộc vào yêu cầu của bạn
    }
};
export const FindOneUser = async (id) => {
    try {
        const res = await axiosJWT.post(`/api/v1/users/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}
export const getDetailsUser = async (access_token) => {
    try {
        const res = await axiosJWT.get('/api/v1/users/profile', {
            headers: {
                Authorization: `Bearer ${access_token}`,

            }

        })
        return res.data;
    } catch (error) {
        // console.error('Error logging in user:', error);
        throw error; // Hoặc xử lý lỗi theo cách khác tùy thuộc vào yêu cầu của bạn
    }
};

