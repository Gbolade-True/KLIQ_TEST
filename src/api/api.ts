import { RequestFactoryParams } from "./interface";
import { AxiosResponse } from "axios";

export type RequestFactoryType = (
	requestFactory: RequestFactoryParams
) => Promise<AxiosResponse<any>>;

export class API<T extends NonNullable<unknown>> {
	protected configuration: T;

	protected requestFactory: RequestFactoryType;

	constructor(configuration: T, requestFactory: RequestFactoryType) {
		this.configuration = configuration;
		this.requestFactory = requestFactory;
	}

	GetPromotions(): Promise<AxiosResponse<any[]>> {
		const url = "data.json";
		return this.requestFactory({
			url,
			method: "GET",
			configuration: this.configuration,
			baseUrl: "",
		});
	}
}
