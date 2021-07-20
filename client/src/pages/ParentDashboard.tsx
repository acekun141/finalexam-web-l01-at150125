import React, { FormEvent, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import { useDispatch, useSelector } from "react-redux";
import ListChildren from "../components/ListChildren";
import { BiPlus } from "react-icons/bi";
import Modal from "../container/components/Modal";
import { Select, Button } from "../container/components";
import { useEffect } from "react";
import { getListClassAction } from "../redux/reducer/listClass/actions";
import { createRequestService } from "../utils/request";

const ParentDashboard = () => {
  const listStudent = useSelector((state: any) => state.listStudent);
  const user = useSelector((state: any) => state.user);
  const listClass = useSelector((state: any) => state.listClass);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListClassAction());
  }, []);

  const [isShowModalAddRq, setIsShowModalAddRq] = useState<boolean>(false);
  const [studentOptions, setStudentOption] = useState<any[]>(listStudent.map((item: any) => ({ text: `${item.first_name} ${item.last_name}`, value: item._id, checked: false })))
  const [classOptions, setClassOptions] = useState<any[]>(listClass.map((item: any) => ({ text: item.name, value: item._id, checked: false })));

  const handleStudentChange = (value: string) => {
    setStudentOption(prevState => prevState.map((item: any) => ({...item, checked: item.value === value})));
  };

  const handleClassChange = (value: string) => {
    setClassOptions(prevState => prevState.map((item: any) => ({...item, checked: item.value === value})));
  };
  
  const handleCreateRequest = async (event: FormEvent) => {
    event.preventDefault();
    if (!studentOptions.length || !classOptions.length) {
      return;
    }
    console.log(studentOptions, classOptions);
    const selectedStudent = studentOptions.filter(item => item.checked);
    const selectedClass = classOptions.filter(item => item.checked);
    await createRequestService(user._id, selectedStudent.length ? selectedStudent[0]._id : studentOptions[0]._id,
      selectedClass.length ? selectedClass[0]._id : classOptions[0]._id);
    setIsShowModalAddRq(false);
  };

  return (
		<BaseLayout>
      <div className="page">
        {/* <p className="page__title">Trang chủ</p> */}
        <Modal isOpen={isShowModalAddRq} title="Add Request" closeModal={() => setIsShowModalAddRq(false)}>
          <form onSubmit={handleCreateRequest}>
            <Select option={studentOptions} outline={true} label="Student" onChange={handleStudentChange} />
            <Select option={classOptions} outline={true} label="Student" onChange={handleClassChange} />
            <Button size="lg" style={{ marginLeft: 'auto' }}>Submit</Button>
          </form>
        </Modal>
        <div className="page__content">
					<ListChildren />
        </div>
        <div className="section">
          <div className="section__header">
            <h1>Requests</h1>
            <button onClick={() => setIsShowModalAddRq(true)}><BiPlus/></button>
          </div>
          <div className="section__content">
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default ParentDashboard;
