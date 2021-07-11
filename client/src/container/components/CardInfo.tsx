import React from "react";

interface IProps {
  icon: React.ElementType | any;
  number: number;
  name: string;
}

export const CardInfo: React.FC<IProps> = ({ icon: Icon, number, name }) => {
  return (
    <div className="card-info">
      <div className="card-info__icon-wrapper">
        <Icon size="1.5em" />
      </div>
      <div className="card-info__detail">
        <p className="card-info__number">{number}</p>
        <p className="card-info__name">{name}</p>
      </div>
    </div>
  );
}