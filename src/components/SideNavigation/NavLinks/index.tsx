import styled from "styled-components";
import { NAV_LINKS } from "./links";
import { CustomImage } from "../../../utils/image";
import { KLIQ_COLORS } from "../../../utils/colors";

const NavLinksWrapper = styled.div`
	margin-top: 8px;
`;
export const NavLink = styled.div<{ bottom?: boolean }>`
	padding: 16px;
	font-feature-settings: "calt" off;
	font-family: Sora;
	font-size: 14px;
	font-style: normal;
	font-weight: ${({ bottom }) => (bottom ? 600 : 400)};
	line-height: 24px;
	letter-spacing: -0.14px;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	border-radius: 50px;

	&:hover {
		opacity: 0.8;
		background: ${KLIQ_COLORS.grey10};
	}
	&:active {
		opacity: 0.8;
		background: ${KLIQ_COLORS.grey10};
	}
`;
export const NavLinks = () => {
	return (
		<NavLinksWrapper>
			{NAV_LINKS.map(({ id, iconUrl, label }) => {
				return (
					<NavLink key={id}>
						<CustomImage src={iconUrl} height="24px" width="24px" />
						{label}
					</NavLink>
				);
			})}
		</NavLinksWrapper>
	);
};
