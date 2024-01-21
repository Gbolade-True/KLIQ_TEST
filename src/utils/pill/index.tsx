import { ReactNode } from "react";
import styled from "styled-components";

interface PillProps {
	children: ReactNode;
	bgColor: string;
}

const PillWrapper = styled.div<{
	bgColor?: string;
}>`
	display: flex;
	padding: 2px 12px;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	background: ${({ bgColor }) => bgColor};
`;

export const Pill = ({ children, bgColor }: PillProps) => {
	return <PillWrapper bgColor={bgColor}>{children}</PillWrapper>;
};
