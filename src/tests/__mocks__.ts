import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PromotionsData } from "../types/promotions";
import { KLIQ_COLORS } from "../utils/colors";

export const SAMPLE_PROMOTIONS_DATA: PromotionsData[] = [
	{
		name: "Elite Fitness",
		discountType: "Premium",
		discountOff: "20 %",
		endDate: "2024/03/01",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Healthy Choices",
		discountType: "Free",
		discountOff: "15 - £GDP",
		endDate: "2024/02/15",
		products: {
			colorTag: KLIQ_COLORS.secondaryAlpine,
			productType: "Course",
		},
		status: "Inactive",
	},
	{
		name: "NutriBoost",
		discountType: "Basic",
		discountOff: "30 - £GDP",
		endDate: "2024/04/10",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Fit Academy",
		discountType: "Basic",
		discountOff: "25 - $USD",
		endDate: "2024/05/20",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Wellness Hub",
		discountType: "Free",
		discountOff: "10 - £GDP",
		endDate: "2024/03/05",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Inactive",
	},

	{
		name: "WellFit Solutions",
		discountType: "Premium",
		discountOff: "15 %",
		endDate: "2024/02/28",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Active Living",
		discountType: "Free",
		discountOff: "10 - $USD",
		endDate: "2024/03/15",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Inactive",
	},
	{
		name: "Healthy Habits",
		discountType: "Basic",
		discountOff: "40 - £GDP",
		endDate: "2024/04/30",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "FitFlex Club",
		discountType: "Premium",
		discountOff: "25 - £GDP",
		endDate: "2024/05/10",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "NutriLife",
		discountType: "Free",
		discountOff: "20 %",
		endDate: "2024/02/25",
		products: {
			colorTag: KLIQ_COLORS.secondaryAlpine,
			productType: "Course",
		},
		status: "Inactive",
	},
	{
		name: "Active Trends",
		discountType: "Basic",
		discountOff: "30 - £GDP",
		endDate: "2024/03/20",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Body Boost",
		discountType: "Basic",
		discountOff: "15 - £GDP",
		endDate: "2024/04/15",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Wellness Pro",
		discountType: "Free",
		discountOff: "10 - £GDP",
		endDate: "2024/05/05",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Inactive",
	},
	{
		name: "FitFlair",
		discountType: "Premium",
		discountOff: "20 - £GDP",
		endDate: "2024/02/20",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Active Living Plus",
		discountType: "Free",
		discountOff: "15 - £GDP",
		endDate: "2024/03/25",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Inactive",
	},
	{
		name: "Wellness Edge",
		discountType: "Basic",
		discountOff: "35 - £GDP",
		endDate: "2024/04/05",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "FitVibe",
		discountType: "Basic",
		discountOff: "25 - £GDP",
		endDate: "2024/05/15",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "NutriBlend",
		discountType: "Free",
		discountOff: "10 - $USD",
		endDate: "2024/02/23",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Inactive",
	},
	{
		name: "Active Harmony",
		discountType: "Basic",
		discountOff: "30 %",
		endDate: "2024/03/10",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
	{
		name: "Healthy Living",
		discountType: "Premium",
		discountOff: "22 - £GDP",
		endDate: "2024/04/20",
		products: {
			colorTag: KLIQ_COLORS.secondaryTangerine,
			productType: "Meal Plan",
		},
		status: "Active",
	},
];

export const MOCKED_MULTIPLE_RESPONSE = new Promise((resolve) => {
	resolve({
		data: SAMPLE_PROMOTIONS_DATA,
		status: 200,
		statusText: "Success",
		headers: {},
		config: {} as InternalAxiosRequestConfig,
	});
}) as Promise<AxiosResponse<PromotionsData[], any>>;
