import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:8000/api/auth/login/';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(API_URL, { email, password });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
            throw axiosError.response.data; // Return the error response data
        }
        throw "Login failed"; // Generic message if error structure is unexpected
    }
};
