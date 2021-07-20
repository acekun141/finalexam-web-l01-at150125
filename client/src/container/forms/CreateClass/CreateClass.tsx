import React, { useState } from "react";
import { Input, Button, Select } from "../../components";
import { createClassService } from "../../../utils/class";

const classType = [
	{ text: "A", value: "A", checked: false },
	{ text: "B", value: "B", checked: false },
	{ text: "C", value: "C", checked: false },
	{ text: "D", value: "D", checked: false },
];

const dateSelect = [
	{ text: "Thu hai", value: 0, checked: false },
	{ text: "Thu ba", value: 1, checked: false },
	{ text: "Thu tu", value: 2, checked: false },
	{ text: "Thu name", value: 3, checked: false },
	{ text: "Thu sau", value: 4, checked: false },
	{ text: "Thu bay", value: 5, checked: false },
	{ text: "Chu nhat", value: 6, checked: false },
]

export interface IProps {
	callback?: () => {};
}

const CreateClass: React.FC<IProps> = (props) => {
	const [classOption, setClassOption] = useState([...classType]);
	const [dateOption, setDateOption] = useState([...dateSelect]);
	const [name, setName] = useState<string>("");
	const [open, setOpen] = useState<string>("");
	const [close, setClose] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		switch (event.target.name) {
			case "name": {
				return setName(event.target.value);
			} case "open": {
				return setOpen(event.target.value);
			} case "close": {
				return setClose(event.target.value);
			} default:
				return;
		}
	};

	const clearForm = () => {
		setName("");
		setOpen("");
		setClose("");
		setDateOption(prevState => prevState.map(item => ({...item, checked: false})));
		setClassOption(prevState => prevState.map(item => ({...item, checked: false})));
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const body = {
			name,
			type: (classOption.filter(item => item.checked)[0] || {}).value || "A",
			date: (dateOption.filter(item => item.checked)[0] || {}).value || 0,
			open: Number.parseInt(open),
			close: Number.parseInt(close)
		}
		const { error } = await createClassService(body);
		if (error) {
			return setError(error);
		}
		clearForm();
		if (typeof(props.callback) === "function") {
			return props.callback();
		}
	};

	const handleTypeChange = (value: any) => {
		setClassOption(prevState => {
			return prevState.map(item => ({...item, checked: item.value === value}));
		});	
	};

	const handleDateChange = (value: any) => {
		setDateOption(prevState => {
			return prevState.map(item => ({...item, checked: Number.parseInt(value) === item.value}));
		});	
	};

	const isValidForm = () => {
		return name && open && close;
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Input value={name} onChange={handleTextChange} block={true} inputSize="lg" type="text" name="name" label="Name" />
			<Select label="Type" size="lg" outline={true} option={classOption} onChange={handleTypeChange} />
			<Select style={{ marginBottom: 0 }} label="Date" size="lg" outline={true} option={dateOption} onChange={handleDateChange} />
			<div className="form-row">
				<div className="col">
					<Input value={open} onChange={handleTextChange} block={true} inputSize="lg" type="number" name="open" label="Open" />
				</div>
				<div className="col">
					<Input value={close} onChange={handleTextChange} block={true} inputSize="lg" type="number" name="close" label="Close" />
				</div>
			</div>
			{!!error && <p className="error-message">{error}</p>}
			<Button disabled={!isValidForm()} style={{ marginLeft: 'auto' }}>Submit</Button>
		</form>
	);
}

export default CreateClass;
