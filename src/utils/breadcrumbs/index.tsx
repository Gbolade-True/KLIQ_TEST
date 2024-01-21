import styled from "styled-components";
import { splitRouteForBreadCrumbs } from "../helpers";
import { Light } from "../../components/Typography";

interface BreadCrumbsProps {
	route: string;
}

const BreadCrumbWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;
const Crumb = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const BreadCrumbs = ({ route }: BreadCrumbsProps) => {
	const pages = splitRouteForBreadCrumbs(route);
	if (!pages.length) return null;

	return (
		<BreadCrumbWrapper>
			{pages.map((page, idx) => {
				return (
					<Crumb key={page}>
						<Light>{page}</Light>
						<div>{idx < pages.length - 1 && "-"}</div>
					</Crumb>
				);
			})}
		</BreadCrumbWrapper>
	);
};
