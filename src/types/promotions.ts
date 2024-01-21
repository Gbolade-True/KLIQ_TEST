export type DiscountType = "Premium" | "Basic" | "Free";
export type StatusType = "Active" | "Inactive";
export type ProductType = "Meal Plan" | "Course" | "Exercise" | "Lifting";
export type Product = {
	colorTag: string;
	productType: ProductType;
};

export type PromotionsData = {
	name: string;
	discountType: DiscountType;
	discountOff: string;
	endDate: string;
	products: Product;
	status: StatusType;
};
