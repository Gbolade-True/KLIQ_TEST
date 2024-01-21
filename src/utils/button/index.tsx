import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type ButtonVariant = "contained" | "outlined";

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
	children: ReactNode;
	iconSrc?: string;
}

interface ContainedButtonProps extends BaseProps {
	variant: "contained";
	bgColor: string;
}

interface OutlinedButtonProps extends BaseProps {
	variant: "outlined";
	textColor: string;
}

// Applied discriminated unions to control props based on variant type
type ButtonProps = ContainedButtonProps | OutlinedButtonProps;

const StyledButton = styled.button<{
	variant: ButtonVariant;
	bgColor?: string;
	textColor?: string;
}>`
	font-family: Sora;
	padding: 10px 20px;
	border-radius: 8px;
	font-size: 16px;
	border: ${({ variant, textColor }) =>
		variant === "outlined" ? `1px solid ${textColor}` : "none"};
	background-color: ${({ variant, bgColor }) =>
		variant === "contained" ? bgColor : "transparent"};
	color: ${({ variant, textColor }) =>
		variant === "outlined" ? textColor : "#fff"};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.8;
	}

	img {
		margin-left: 8px;
	}
`;

const KliqButton = (props: ButtonProps) => {
	const { children, iconSrc } = props;
	return (
		<StyledButton
			{...props}
			bgColor={props.variant === "contained" ? props.bgColor : ""}
			textColor={props.variant === "outlined" ? props.textColor : ""}
		>
			{children}
			{iconSrc && (
				<img
					src={iconSrc}
					alt={"button_icon"}
					height="24px"
					width="24px"
				/>
			)}
		</StyledButton>
	);
};

export default KliqButton;
