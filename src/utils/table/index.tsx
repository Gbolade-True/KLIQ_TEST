import { useMemo } from "react";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	ColumnDef,
	SortDirection,
} from "@tanstack/react-table";
import { CustomImage } from "../image";
import chevron_selector from "../../extras/icons/chevron-selector-vertical.svg";
import dots_horizontal from "../../extras/icons/dots-horizontal.svg";
import { Light } from "../../components/Typography";
import { Loader } from "../loader";
import SortIcon from "../../extras/icons/SortIcon";
import { StyledTable } from "./styled";

// Used Typescript Generics
interface TableProps<T> {
	data: T[];
	columns: ColumnDef<T>[];
	loading?: boolean;
}

export const KliqTable = <T,>({ data, columns, loading }: TableProps<T>) => {
	const memoizedColumns = useMemo(() => columns, [columns]);

	const table = useReactTable({
		columns: memoizedColumns,
		data,
		pageCount: 4,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		columnResizeMode: "onChange",
	});

	return (
		<StyledTable>
			<table style={{ minWidth: table.getTotalSize() }}>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									style={{ width: header.getSize() }}
								>
									{header.column.columnDef.header?.toString()}
									{header.column.getCanSort() && (
										<SortIcon
											height="10px"
											onClick={header.column.getToggleSortingHandler()}
											style={{
												marginLeft: "8px",
												cursor: "pointer",
											}}
											sortDirection={
												header.column.getIsSorted() as SortDirection
											}
										/>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				{loading ? <Loader size="medium" /> : null}
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell, idx) => (
									<td
										key={cell.id}
										style={{ width: cell.column.getSize() }}
									>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "8px",
												cursor: "pointer",
											}}
										>
											{idx === 0 && (
												<CustomImage
													src={chevron_selector}
													height="16px"
													width="16px"
												/>
											)}
											<Light>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</Light>
											{idx ===
												row.getVisibleCells().length -
													1 && (
												<div
													style={{
														marginLeft: "auto",
													}}
												>
													<CustomImage
														src={dots_horizontal}
														height="24px"
														width="24px"
														style={{
															marginLeft: "auto",
														}}
													/>
												</div>
											)}
										</div>
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</StyledTable>
	);
};

export default KliqTable;
