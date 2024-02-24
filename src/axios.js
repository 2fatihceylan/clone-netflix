import axios from 'axios';

const axiosrequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default axiosrequest;  
//axios cagırdıgımız heryerden baseurl olarak yukardaki urli kullanmamızı sağlar
//biz sadece route ve parametre kısmını ekleriz