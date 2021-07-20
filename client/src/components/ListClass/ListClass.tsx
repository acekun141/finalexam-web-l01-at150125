import React, { useEffect, useState } from "react";
import { Select } from "../../container/components";
import { CLASS } from "../../container/constants";
import Class from "../Class";
import { getListClassAction } from "../../redux/reducer/listClass/actions";
import { useDispatch, useSelector } from "react-redux";
import "./list-class.scss";

interface IProps {
  haveFilter?: boolean;
}

const ListClass: React.FC<IProps> = ({ haveFilter = true }) => {
	const [error, setError] = useState<string>("");

	const dispatch = useDispatch();
	const listClass = useSelector((state: any) => state.listClass);

	useEffect(() => {
		dispatch(getListClassAction());	
	}, []);

  return (
    <div className="list-class">
      <div className="list-class__filter" hidden={!haveFilter}>
        <Select onChange={() => {}} label="Lớp" option={CLASS} />
      </div>
      <div className="list-class__content">
				{listClass.map((item: any) => (
					<Class key={item.id} data={item} />
				))}
      </div>
    </div>
  )
}

export default ListClass;
