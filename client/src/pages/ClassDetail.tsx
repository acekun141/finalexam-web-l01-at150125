import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

import { Button, Input } from "../container/components";
import Modal from "../container/components/Modal";
import { STUDENT_TABLE } from "../container/tables";
import { getClassInfoService, updateClassTeacherService } from "../utils/class";
import BaseLayout from "../components/BaseLayout";

const ClassDetail = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [classDetail, setClassDetail] = useState<any>({});
	const [teacherId, setTeacherId] = useState<string>("");
	const [isShowAddTeacher, setIsShowAddTeacher] = useState<boolean>(false);
	const { class_id }: any = useParams();
	const history = useHistory();

	useEffect(() => {
		handleGetInfo();
	}, [class_id]);

	const handleGetInfo = async () => {
		const { error, data } = await getClassInfoService(class_id);
		if (error) {
			return history.replace('/');
		}
		setClassDetail(data);
		setLoading(false);
	};

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTeacherId(event.target.value);
	};

	const handleAddTeacherSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const { error } = await updateClassTeacherService(teacherId, classDetail.id);
		if (!error) {
			setIsShowAddTeacher(false);
			handleGetInfo();
		}
	};

	if (loading) return (
		<BaseLayout>
			<p>Loading...</p>
		</BaseLayout>
	)

	return (
		<BaseLayout>
			<div className="page">
				<Modal isOpen={isShowAddTeacher} title="Add Teacher" closeModal={() => setIsShowAddTeacher(false)}>
					<form onSubmit={handleAddTeacherSubmit}>
						<Input inputSize="lg" value={teacherId} onChange={handleTextChange} block={true} type="text" label="Teacher ID" />
						<Button style={{ marginLeft: 'auto' }}>Submit</Button>
					</form>
				</Modal>
				<p className="page__title">{classDetail.name}</p>
				<div className="page__content">
					<div className="section">
						<div className="section__title">
							<h3>Teacher</h3>
						</div>
						<br />
						<div className="section__content">
							{classDetail.teacher
								? (
									<div className="user card">
										<div className="user__avatar">{classDetail.teacher.first_name[0]}{classDetail.teacher.last_name[0]}</div>
										<p className="user__name">{classDetail.teacher.first_name} {classDetail.teacher.last_name}</p>
                    <Button style={{ marginLeft: 'auto' }} onClick={() => setIsShowAddTeacher(true)} outline={true}>Edit</Button>
									</div>
								)
								: (
									<div>
										<Button onClick={() => setIsShowAddTeacher(true)}>Them giao vien</Button>
									</div>
								)
							}
						</div>
					</div>
					<br />
					<br />
					<div className="section">
						<div className="section__title">
							<h3>Students</h3>
						</div>
						<br />
						<div className="section__content">
							<DataTable noHeader={true} pagination={classDetail.students.length > 5} data={classDetail.students} columns={STUDENT_TABLE(null, null)} />
						</div>
					</div>
				</div>
			</div>
		</BaseLayout>
	);
}

export default ClassDetail;
