import React, { useCallback, useRef, useState } from "react";
import image_placeholder from "../../extras/images/image_placeholder.jpeg";
import N_A from "../../extras/images/N_A.jpg";
import "./index.css";

interface CustomImageProps {
	src: string;
	defaultImg?: string;
	alt?: string;
	style?: React.CSSProperties;
	width?: string | number;
	height?: string | number;
	onClick?: () => void;
	loading?: boolean;
}

export const CustomImage = ({
	src,
	style,
	width,
	height,
	onClick = () => {},
	loading,
}: CustomImageProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [errorImage, setErrorImage] = useState("");
	const imageRef = useRef<HTMLImageElement>(null);

	const getSrc = useCallback(
		(src: string) => {
			if (!src) return N_A;
			if (loading) return image_placeholder;
			if (errorImage) return N_A;
			if (imageLoaded) return src;

			return image_placeholder;
		},
		[loading, imageLoaded, errorImage]
	);

	return (
		<div
			className="custom-image"
			style={{ width: width || "100%", height: height || "100%" }}
		>
			<img
				src={getSrc(src)}
				alt=""
				onLoad={() => setImageLoaded(true)}
				onError={() => setErrorImage(N_A)}
				style={style}
				width={width}
				height={height}
				className={imageLoaded ? `main-image` : "img-small"}
				onClick={onClick}
				ref={imageRef}
			/>
		</div>
	);
};
