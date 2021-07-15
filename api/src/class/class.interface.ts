export interface IClass {
	name: String;
	id: String;
	open: Number;
	close: Number;
	date: Number;
	teacher_id: String;
	type: "A" | "B" | "C" | "D";
	students: String[];
}