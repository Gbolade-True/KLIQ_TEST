import styled from "styled-components";
import { KLIQ_COLORS } from "../../utils/colors";

export const PromotionsWrapper = styled.div`
	position: relative;
	box-sizing: border-box;
`;

export const ButtonsWrapper = styled.div`
	margin-bottom: 55px;
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const TableWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 24px;
	flex-direction: column;
	align-items: flex-end;
	border-radius: 13px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background: ${KLIQ_COLORS.primaryWhite};
	box-sizing: border-box;
	margin: 18px 0 30px 0;
`;

export const ActionButtonsWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 16px;
`;

export const SwitchButton = styled.button`
	display: flex;
	height: 36px;
	padding: 8px;
	align-items: center;
	border-radius: 8px;
	border-radius: 10px;
	border: 1px solid ${KLIQ_COLORS.grey20};
	background: ${KLIQ_COLORS.grey10};
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

export const FilterButton = styled.button`
	display: flex;
	height: 36px;
	padding: 8px;
	align-items: center;
	border-radius: 22px;
	border: 1px solid ${KLIQ_COLORS.grey20};
	background: ${KLIQ_COLORS.grey10};
	cursor: pointer;
	gap: 8px;
	&:hover {
		opacity: 0.8;
	}
`;

export const SectionDivider = styled.div`
	margin: 24px 0;
	height: 2px;
	width: 100%;
	background-color: ${KLIQ_COLORS.borderOpaque};
`;
