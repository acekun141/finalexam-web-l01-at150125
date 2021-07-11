import React from "react";
import { Button } from "../../container/components";
import CreditCard from "./components/CreditCard";

const CreditCardInfo = () => {
  return (
    <div className="credit-card-info">
      <p className="credit-card-info__title">Thông tin thẻ</p>
      <div className="credit-card-info__card-wrapper">
        <CreditCard type="visa" last4digit="3472" date="03/26" />
        <CreditCard type="master" last4digit="2321" date="09/28" />
      </div>
      <div className="credit-card-info__button-wrapper">
        <Button>Thêm thẻ</Button>
      </div>
    </div>
  );
}

export default CreditCardInfo;