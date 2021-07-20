import React from "react";

const url = "https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png";

interface IProps {
	data: any;
}

const Class: React.FC<IProps> = ({ data }) => {
  return (
    <div className="class">
      <div className="class__name">
				<a href={`/class/${data.id}`} style={{ textDecoration: 'none' }} >{data.name}</a>
			</div>
      <div className="class__detail">
        <p>{data.students.length} Hoc sinh</p>
      </div>
			{data.teacher ? 
        <div className="class__teacher">
          <div className="class__avatar">
            {/* <img alt="avatar" src={url} /> */}
            <p>{data.teacher.first_name[0]}{data.teacher.last_name[0]}</p>
          </div>
          <div className="class__teacher-detail">
            <p className="class__teacher-name">{data.teacher.first_name} {data.teacher.last_name}</p>
            <div className="class__teacher-role">Giao vien</div>
          </div>
        </div>
			:
				<p>Chua co giao vien giang day</p>
			}
    </div>
  )
}

export default Class;
