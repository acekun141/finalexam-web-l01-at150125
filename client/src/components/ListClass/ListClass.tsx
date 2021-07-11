import React from "react";
import { Select } from "../../container/components";
import { CLASS } from "../../container/constants";
import Class from "../Class";
import "./list-class.scss";

interface IProps {
  haveFilter?: boolean;
}

const ListClass: React.FC<IProps> = ({ haveFilter = true }) => {
  return (
    <div className="list-class">
      <div className="list-class__filter" hidden={!haveFilter}>
        <Select onChange={() => {}} label="Lớp" option={CLASS} />
      </div>
      <div className="list-class__content">
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
      </div>
    </div>
  )
}

export default ListClass;