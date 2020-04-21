import axios from 'axios';
import { Message } from 'element-ui';

const baseURL = process.env.VUE_APP_BASEURL;
const http = axios.create({
	baseURL,
	timeout: 50000
});

http.interceptors.request.use(
	(req) => {
		return req;
	},
	(err) => {
		console.log(err);
		return Promise.reject(err);
	}
);

http.interceptors.response.use((res) => {
	if (res.status === 200) {
		const data = res.data;
		if (data.code === 0) {
			return data.data;
		} else {
			Message({
				message: data.message,
				type: 'error'
			});
		}
	} else {
		Message({
			message: '网络错误',
			type: 'error'
		});
		return Promise.reject(new Error(err) || 'Error');
	}
});

export default http;
