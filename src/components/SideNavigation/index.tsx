import { CustomImage } from "../../utils/image";
import {
	BottomProfileNavLink,
	Divider,
	LogoLevel,
	SectionWrapper,
	SideNavigationWrapper,
	WhiteBox,
} from "./styled";
import kliq_logo from "../../extras/images/kliq_logo.svg";
import icon_sidebar from "../../extras/icons/icon-sidebar.svg";
import user_circle from "../../extras/icons/user-circle.svg";
import setting from "../../extras/icons/setting.svg";
import dots_horizontal from "../../extras/icons/dots-horizontal.svg";
import { SearchInput } from "../../utils/search";
import { NavLink, NavLinks } from "./NavLinks";

const SideNavigation = () => {
	return (
		<SideNavigationWrapper>
			<SectionWrapper>
				<LogoLevel>
					<CustomImage src={kliq_logo} width="143px" height="49px" />
					<CustomImage
						src={icon_sidebar}
						width="24px"
						height="24px"
					/>
				</LogoLevel>
				<SearchInput />
				<NavLinks />
			</SectionWrapper>

			<Divider />

			<SectionWrapper>
				<WhiteBox />
				<NavLink>
					<CustomImage src={setting} height="24px" width="24px" />
					Setting
				</NavLink>
			</SectionWrapper>
			<BottomProfileNavLink>
				<NavLink bottom>
					<CustomImage src={user_circle} height="24px" width="24px" />
					User Name
				</NavLink>
				<CustomImage src={dots_horizontal} height="24px" width="24px" />
			</BottomProfileNavLink>
		</SideNavigationWrapper>
	);
};

export default SideNavigation;
