import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((res) => {
    return res
}, (error) => {
    try{
        const {response} = error;
        // 401 = unauthorized user is trying to make request
        if (response.status === 401){
            localStorage.removeItem('ACCESS_TOKEN')
        }
    } catch (err){
         console.error(err);
    }
 
     throw error;
 })

export default axiosClient;