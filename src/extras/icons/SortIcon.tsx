import { SortDirection } from "@tanstack/react-table";
import { SVGProps } from "react";

interface SortIconProps extends SVGProps<SVGSVGElement> {
	sortDirection: SortDirection;
}

const SortIcon = ({ sortDirection, ...props }: SortIconProps) => {
	const getPathData = () => {
		if (sortDirection === "asc") {
			return "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5";
		} else if (sortDirection === "desc") {
			return "M3 16.5L7.5 21m0 0L12 16.5M7.5 21V7.5";
		} else {
			// Default or no sorting
			return "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5";
		}
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d={getPathData()}
			/>
		</svg>
	);
};

export default SortIcon;
