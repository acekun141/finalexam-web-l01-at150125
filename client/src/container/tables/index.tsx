import React from "react";
import moment from "moment/moment";
import { BiTrash, BiEdit } from "react-icons/bi";

export const STUDENT_TABLE = (onDelete: any) => [
	{
		name: "Name",
		cell: (row: any) => (
			<p>{row.first_name} {row.last_name}</p>
		)
	},
	{
		name: "Sex",
		cell: (row: any) => (
			<p>{row.sex ? "Nam" : "Nu"}</p>
		)
	},
	{
		name: "Date of Birth",
		cell: (row: any) => (
			<p>{moment(row.date_of_birth).format("MM/DD/YYYY")}</p>
		)
	},
	{
		name: "",
		cell: (row: any) => (
			<div>
				<button className="edit-button">
					<BiEdit size="1.1rem" />
				</button>
				<button className="delete-button" onClick={() => onDelete(row)}>
					<BiTrash size="1.1rem" />
				</button>
			</div>
		),
		right: true
	}
]
