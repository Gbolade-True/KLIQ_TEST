import { ReactNode } from "react";
import dashboard from "../../../extras/icons/dasboard.svg";
import sessions from "../../../extras/icons/sessions.svg";
import programs from "../../../extras/icons/programs.svg";
import content_library from "../../../extras/icons/content_library.svg";
import collections from "../../../extras/icons/collections.svg";
import community from "../../../extras/icons/community.svg";
import nutrition from "../../../extras/icons/nutrition.svg";
import blog from "../../../extras/icons/blog.svg";
import help_center from "../../../extras/icons/help_center.svg";

interface NavLink {
	id: string;
	label: ReactNode;
	url: string;
	iconUrl: string;
}

export const NAV_LINKS: NavLink[] = [
	{
		id: "1",
		label: "Dashboard",
		url: "",
		iconUrl: dashboard,
	},
	{
		id: "2",
		label: "Sessions",
		url: "",
		iconUrl: sessions,
	},
	{
		id: "3",
		label: "Programs",
		url: "",
		iconUrl: programs,
	},
	{
		id: "4",
		label: "Content Library",
		url: "",
		iconUrl: content_library,
	},
	{
		id: "5",
		label: "Collections",
		url: "",
		iconUrl: collections,
	},
	{
		id: "6",
		label: "Community",
		url: "",
		iconUrl: community,
	},
	{
		id: "7",
		label: "Nutrition",
		url: "",
		iconUrl: nutrition,
	},
	{
		id: "8",
		label: "Blog",
		url: "",
		iconUrl: blog,
	},
	{
		id: "1",
		label: "Help Center",
		url: "",
		iconUrl: help_center,
	},
];
