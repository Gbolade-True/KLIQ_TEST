import axios, { AxiosResponse } from "axios";
import { API } from "./api";
import { RequestFactoryParams } from "./interface";

const requestFactory = async (requestFactory: RequestFactoryParams) => {
	const { url, method, params, data, headers, baseUrl } = requestFactory;

	const response = await axios.request<any, any>({
		url,
		method: method,
		params,
		data,
		headers,
		baseURL: baseUrl,
	});

	return response as AxiosResponse<any>;
};

const api = new API({}, requestFactory);

export default api;
