import { useMemo } from "react";
import api from "../api";
import { useQuery } from "@tanstack/react-query";
import { PromotionsData } from "../types/promotions";

export const usePromotionsData = () => {
	const {
		data: promotionsSearchResponse,
		isFetching,
		isFetched,
		refetch,
	} = useQuery(
		["PromotionsSearch"],
		async () => {
			const response = await api.GetPromotions();
			return response;
		},
		{
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			retry: 3,
		}
	);
	const promotionsData = useMemo(
		() => promotionsSearchResponse?.data || ({} as PromotionsData[]),
		[promotionsSearchResponse?.data]
	);

	return { promotionsData, isFetching, isFetched, refetch };
};
