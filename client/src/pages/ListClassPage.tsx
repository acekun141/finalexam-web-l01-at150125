import React, { useState, useCallback } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getListClassAction } from "../redux/reducer/listClass/actions";

import BaseLayout from "../components/BaseLayout";
import ListClass from "../components/ListClass";
import Modal from "../container/components/Modal";
import CreateClassForm from "../container/forms/CreateClass";


const ListAccountPage = () => {
	const [isShowCreateClass, setIsShowCreateClass] = useState<boolean>(false);

	const dispatch = useDispatch();

	const handleOpenModal = useCallback(() => {
		setIsShowCreateClass(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsShowCreateClass(false);
	}, []);

	const createCallback = () => {
		handleCloseModal();
		dispatch(getListClassAction());
	};

  return (
    <BaseLayout>
      <div className="page list-account-page">
				<Modal isOpen={isShowCreateClass} title="Create Class" closeModal={handleCloseModal}>
					<CreateClassForm callback={createCallback} />	
				</Modal>
        <div className="page__title">
					<h4>Danh sách lớp</h4>
					<button onClick={handleOpenModal}>
						<BiPlus />
					</button>
				</div>
        <div className="page__content">
          <ListClass />
        </div>
      </div>
    </BaseLayout>
  );
}

export default ListAccountPage;
