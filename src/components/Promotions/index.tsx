import KliqTable from "../../utils/table";
import { ColumnDef } from "@tanstack/react-table";
import { Product, PromotionsData, StatusType } from "../../types/promotions";
import { Title } from "../Typography";
import {
	ActionButtonsWrapper,
	ButtonsWrapper,
	FilterButton,
	PromotionsWrapper,
	SectionDivider,
	SwitchButton,
	TableWrapper,
} from "./styled";
import { BreadCrumbs } from "../../utils/breadcrumbs";
import KliqButton from "../../utils/button";
import { KLIQ_COLORS } from "../../utils/colors";
import web_app from "../../extras/icons/web-app.svg";
import chevron_down from "../../extras/icons/chevron-down.svg";
import switch_vertical from "../../extras/icons/switch-vertical.svg";
import filter_lines from "../../extras/icons/filter-lines.svg";
import pill_ellipse from "../../extras/icons/pill-ellipse.svg";
import search from "../../extras/icons/search.svg";
import { CustomImage } from "../../utils/image";
import { Pill } from "../../utils/pill";
import { usePromotionsData } from "../../hooks/api";

const Promotions = () => {
	const { promotionsData, isFetching } = usePromotionsData();

	const columns: ColumnDef<PromotionsData>[] = [
		{
			accessorKey: "name",
			header: "Name",
			cell: (props) => <span>{props.getValue<string>()}</span>,
			enableSorting: true,
			enableColumnFilter: true,
			filterFn: "includesString",
		},
		{
			accessorKey: "discountType",
			header: "Discount Type",
			cell: (props) => <span>{props.getValue<string>()}</span>,
			enableSorting: false,
			enableColumnFilter: false,
		},
		{
			accessorKey: "discountOff",
			header: "Discount Off",
			cell: (props) => <span>{props.getValue<string>()}</span>,
			enableSorting: false,
			enableColumnFilter: false,
		},
		{
			accessorKey: "endDate",
			header: "End Date",
			cell: (props) => <span>{props.getValue<string>()}</span>,
			enableSorting: false,
			enableColumnFilter: false,
		},
		{
			accessorKey: "products",
			header: "Products",
			cell: (props) => (
				<Pill bgColor={props.getValue<Product>().colorTag}>
					{props.getValue<Product>().productType}
				</Pill>
			),
			enableSorting: false,
			enableColumnFilter: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: (props) => (
				<Pill
					bgColor={
						props.getValue<StatusType>() === "Active"
							? KLIQ_COLORS.secondaryLime
							: KLIQ_COLORS.grey10
					}
				>
					<CustomImage
						src={pill_ellipse}
						height="10px"
						width="10px"
					/>
					{props.getValue<StatusType>()}
				</Pill>
			),
			enableSorting: false,
			enableColumnFilter: false,
		},
	];

	return (
		<PromotionsWrapper>
			<ButtonsWrapper>
				<KliqButton
					variant="contained"
					bgColor={KLIQ_COLORS.primaryGreen}
					iconSrc={web_app}
				>
					Web app
				</KliqButton>
				<KliqButton
					variant="outlined"
					textColor={KLIQ_COLORS.grey80}
					iconSrc={chevron_down}
				>
					Application Validation
				</KliqButton>
			</ButtonsWrapper>
			<Title style={{ marginBottom: "8px" }}>Promotions</Title>
			<BreadCrumbs route="Home/App Settings/Promotions" />
			<TableWrapper>
				<ActionButtonsWrapper>
					<FilterButton>
						<CustomImage src={search} height="16px" />
						<CustomImage src={filter_lines} height="16px" />
					</FilterButton>
					<SwitchButton>
						<CustomImage src={switch_vertical} />
					</SwitchButton>
				</ActionButtonsWrapper>
				<SectionDivider />
				<KliqTable<PromotionsData>
					columns={columns}
					data={promotionsData}
					loading={isFetching}
				/>
			</TableWrapper>
			<KliqButton variant="contained" bgColor={KLIQ_COLORS.primaryGreen}>
				Add a subscription
			</KliqButton>
		</PromotionsWrapper>
	);
};

export default Promotions;
