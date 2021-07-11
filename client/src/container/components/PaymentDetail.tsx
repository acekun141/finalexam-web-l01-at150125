import React from "react";
import { Button } from "./Button";

const url = "https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png";

const PaymentDetail = () => {
  return (
    <div className="payment-detail">
      <div className="payment-detail__status success">
        <p>Đã thanh toán</p>
      </div>
      <p className="payment-detail__amount">3.000.000 VND</p>
      <div className="payment-detail__info">
        <p className="payment-detail__month">Học phí tháng 6</p>
      </div>
      <div className="payment-detail__user">
        <img src={url} alt="avatar" />
        <p>Le Viet Hung</p>
      </div>
      <div className="payment-detail__button-wrapper">
        <Button disabled={true}>Thanh toán</Button>
      </div>
    </div>
  );
}

export default PaymentDetail;