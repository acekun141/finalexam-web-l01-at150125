import React from "react";
import BaseLayout from "../components/BaseLayout";
import CreditCardInfo from "../components/CreditCardInfo";
import PaymentDetail from "../container/components/PaymentDetail";

const PaymentPage = () => {
  return (
    <BaseLayout>
      <div className="page payment-page">
        <p className="page__title">Thanh toán</p>
        <div className="page__content">
          <div className="payment-info">
            <PaymentDetail />
            <CreditCardInfo />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default PaymentPage;