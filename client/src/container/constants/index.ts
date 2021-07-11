export const MONTH = [
  { text: "Tháng 1", value: 1 },
  { text: "Tháng 2", value: 2 },
  { text: "Tháng 3", value: 3 },
  { text: "Tháng 4", value: 4 },
  { text: "Tháng 5", value: 5 },
  { text: "Tháng 6", value: 6 },
  { text: "Tháng 7", value: 7 },
  { text: "Tháng 8", value: 8 },
  { text: "Tháng 9", value: 9 },
  { text: "Tháng 10", value: 10 },
  { text: "Tháng 11", value: 11 },
  { text: "Tháng 12", value: 12 },
];

export const ROLE = [
  { text: "Quản trị viên", value: "admin" },
  { text: "Giáo viên", value: "teacher" },
  { text: "Phụ huynh", value: "parents" },
  { text: "Học sinh", value: "student" },
];

export const CLASS = [
  { text: "Khoi 1", value: 1 },
  { text: "Khoi 2", value: 2 },
  { text: "Khoi 3", value: 3 },
  { text: "Khoi 4", value: 4 }
];

export const convertRole = {
  "student": "Học sinh",
  "admin": "Quản trị viên",
  "teacher": "Giáo viên",
  "parent": "Phụ huynh"
}