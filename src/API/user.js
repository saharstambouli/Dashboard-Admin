import axios from 'axios';

export async function login(email, password) {
    try {
        const response = await axios.post(`http://localhost:5000/dashboard/login`, { email, password });
        if (response.status == 200) {
            return response.data;
        }

    } catch (error) {
        if (error.status == 404) {

            return { email: 'User With this email does not exist' };
        }
        else if (error.status == 401) {
            return { password: "Invalid Password" };
        }
    }
}
export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        else {
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            const response = await axios.get(`http://localhost:5000/user/getuser`, { headers })
            if (response.status == 200) {
                return response.data;
            }
        }
    } catch (error) {
        return false;
    }
}