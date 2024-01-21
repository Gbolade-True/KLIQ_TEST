import { ReactNode } from "react";
import styled from "styled-components";
import SideNavigation from "../SideNavigation";

interface LayoutProps {
	children: ReactNode;
}

const LayoutContainer = styled.div`
	display: grid;
	grid-template-columns: 24% 76%;
	position: relative;
	box-sizing: border-box;
`;

const ContentWrapper = styled.div`
	padding: 32px;
	box-sizing: border-box;
`;

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutContainer>
			<SideNavigation />
			<ContentWrapper>{children}</ContentWrapper>
		</LayoutContainer>
	);
};

export default Layout;
