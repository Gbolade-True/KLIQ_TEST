export const splitRouteForBreadCrumbs = (route: string): string[] => {
	if (!route || !route.length) return [];
	return route.split("/");
};
