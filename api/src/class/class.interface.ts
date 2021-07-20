export interface IClass {
	name: String;
	id: String;
	open: Number;
	close: Number;
	date: Number;
	teacher: String;
	type: "A" | "B" | "C" | "D";
	students: String[];
}
