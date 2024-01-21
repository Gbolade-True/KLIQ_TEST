import styled from "styled-components";
import { KLIQ_COLORS } from "../../utils/colors";

export const SideNavigationWrapper = styled.div`
	height: 100vh;
	background-color: #e7e7e7;
	position: relative;
	box-sizing: border-box;
	overflow-y: auto;
`;

export const SectionWrapper = styled.div`
	padding: 32px;
	background-color: #e7e7e7;
	position: relative;
	box-sizing: border-box;
`;

export const LogoLevel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;

export const Divider = styled.div`
	margin: 24px 0;
	height: 2px;
	width: 100%;
	background-color: ${KLIQ_COLORS.grey100};
	margin: 128px 0 60px 0;
	align-self: stretch;
`;

export const WhiteBox = styled.div`
	height: 210px;
	border-radius: 20px;
	background-color: ${KLIQ_COLORS.primaryWhite};
	margin-bottom: 42px;
`;

export const BottomProfileNavLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #dcdcdc;
	padding: 16px 32px;
`;
