import loader from "./loader.svg";

type LoaderSize = "small" | "medium" | "large";

interface LoaderProps {
	size: LoaderSize;
}

export const Loader = ({ size }: LoaderProps) => {
	const getSize = () => {
		if (size === "small") return "20";
		if (size === "medium") return "40";
		return 50;
	};
	return (
		<img
			src={loader}
			style={{
				width: `${getSize()}px`,
				height: `${getSize()}px`,
			}}
			alt="loader"
		/>
	);
};
