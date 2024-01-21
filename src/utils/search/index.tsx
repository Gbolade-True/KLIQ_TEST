import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { KLIQ_COLORS } from "../colors";
import { CustomImage } from "../image";
import search from "../../extras/icons/search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 16px;
	align-items: center;
	gap: 16px;
	border-radius: 50px;
	background: ${KLIQ_COLORS.primaryWhite};
	box-sizing: border-box;
`;

const InputField = styled.input`
	flex: 1;
	border: none;
	outline: none;
	background: transparent;
	font-size: 16px;
	color: ${KLIQ_COLORS.grey80};
	font-family: Sora;
`;

export const SearchInput = (props: InputProps) => {
	return (
		<InputWrapper>
			<CustomImage src={search} width="24px" height="24px" />
			<InputField type="text" placeholder="Search" {...props} />
		</InputWrapper>
	);
};
