import React, { useState, useEffect  } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { BiUserPlus } from "react-icons/bi";


import { deleteStudentService, getListChildrenService } from "../../utils/student";
import { STUDENT_TABLE } from "../../container/tables";
import { Button } from "../../container/components";
import UserInfo from "../../container/forms/UserInfo";
import Modal from "../../container/components/Modal";
import { useCallback } from "react";
import RegisterStudent from "../../container/forms/RegisterStudent";
import ConfirmModal from "../../container/components/ConfirmModal";

const ListChildren = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [listChilren, setListChildren] = useState<any[]>([]);
	const [error, setError] = useState<string>("");
	const [isAddStudent, setIsAddStudent] = useState<boolean>(false);
	const [isShowDelete, setIsShowDelete] = useState<boolean>(false);
	const [selectedStudent, setSelectedStudent] = useState<any>({});

	const user = useSelector((state: any) => state.user);

	useEffect(() => {
		handleGetListChildren(user.id);
	}, [user.id]);

	const handleGetListChildren = async (id: string) => {
		const { data, error } = await getListChildrenService(id);
		if (error) {
			setLoading(false);
			return setError(error);
		}
		setLoading(false);
		return setListChildren(data);
	};

	const openAddStudentModal = useCallback(() => {
		setIsAddStudent(true);
	}, [])

	const closeAddStudentModal = useCallback(() => {
		setIsAddStudent(false);
	}, []);

	const openDeleteModal = useCallback(() => {
		setIsShowDelete(true);
	}, []);

	const closeDeleteModal = useCallback(() => {
		setIsShowDelete(false);
	}, []);

	const onDeleteClick = useCallback((data) => {
		setSelectedStudent(data);
		openDeleteModal();
	}, []);

	const addCallback = useCallback(() => {
		handleGetListChildren(user.id);
		closeAddStudentModal();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.id]);

	const handleDeleteStudent = useCallback(async () => {
		const { error } = await deleteStudentService(selectedStudent.id);
		if (error) {
			return setError(error);
		}
		setSelectedStudent({});
		closeDeleteModal();
		handleGetListChildren(user.id)
	}, [selectedStudent.id, user.id]);

	if (loading) return <p>Loading</p>;

	return (
    <div className="section list-children">
      <Modal
        isOpen={isAddStudent}
        title="Add Student"
        closeModal={closeAddStudentModal}
      >
        <RegisterStudent successCallback={addCallback} />
      </Modal>
			<ConfirmModal
        isOpen={isShowDelete}
        title="Are you sure?"
        closeModal={closeDeleteModal}
				actionName="Delete"
				action={handleDeleteStudent}
			>
				<p>You want to delete {selectedStudent.first_name} {selectedStudent.last_name}?</p>
			</ConfirmModal>
      <div className="section__header">
        <h1>Children</h1>
        <button className="header-button" onClick={openAddStudentModal}>
          <BiUserPlus />
        </button>
      </div>
      <DataTable
				pagination={true}
        className="table"
        data={listChilren}
        columns={STUDENT_TABLE(onDeleteClick)}
        noHeader={true}
      />
    </div>
  );
}

export default ListChildren;