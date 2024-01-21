import { Method as AxiosMethod } from "axios";

export interface RequestFactoryParams {
	url: string;
	method: AxiosMethod;
	configuration: any;
	params?: any;
	data?: any;
	headers?: any;
	baseUrl?: string;
}
