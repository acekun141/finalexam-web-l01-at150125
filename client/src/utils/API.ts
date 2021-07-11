import axios from "axios";

const service = axios.create({
  baseURL: "/api",
});

service.interceptors.request.use(config => {
	const token = localStorage.getItem("access_token");
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
}, error => {
	Promise.reject(error);
});

service.interceptors.response.use(function (response) {
	return response
}, function(error) {
	const originalRequest = error.config;
	if (error.response.status === 401 && !originalRequest._retry) {
		originalRequest._retry = true;
		return service.post('/auth/token', {
			username: localStorage.getItem("username"),
			refresh_token: localStorage.getItem("refresh_token")
		}).then(res => {
			if (res.status === 201) {
				localStorage.setItem("access_token", res.data.access_token);
				service.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
				return service(originalRequest);
			}
		});
	}
	return Promise.reject(error);
})

export const handleError = (error: any) => {
	if (error.response && error.response?.data?.message) {
		return { error: error.response.data.message, data: null };
	}
	return { error: "Something went wrong. Try it later", data: null };
}

export default service;