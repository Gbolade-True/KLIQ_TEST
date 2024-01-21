import styled from "styled-components";
import { KLIQ_COLORS } from "../colors";

export const StyledTable = styled.div`
	width: 100%;

	table {
		font-family: "Sora", sans-serif;
		border-collapse: collapse;
		border-spacing: 0;
		margin-bottom: 20px;
		width: 100%;
	}

	tr {
		padding: 8px;

		&:hover {
			background-color: ${KLIQ_COLORS.grey10};
		}
	}

	th,
	td {
		padding: 8px;
		margin: 8px;
		text-align: left;
	}

	th {
		background-color: ${KLIQ_COLORS.grey60};
		color: ${KLIQ_COLORS.primaryWhite};
		padding-left: 16px;
	}

	th:first-child {
		border-top-left-radius: 8px;
		padding-left: 24px;
	}

	th:last-child {
		border-top-right-radius: 8px;
	}
`;
