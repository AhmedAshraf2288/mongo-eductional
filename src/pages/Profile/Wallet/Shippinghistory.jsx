import React from 'react';
import Loading from '../../../components/Loading/Loading';
import styles from './Wallet.module.css';

export default function ShippingHistory({ walletData, isLoading }) {
  return (
    <section className="mb-5">
      {isLoading ? (
        <Loading />
      ) : walletData?.data?.length === 0 ? (
        <p aria-label="لا توجد عمليات شحن أو سحب">لا يوجد أي عمليات شحن أو سحب حتى الآن</p>
      ) : (
        <div className={`${styles.shippingHistory} mx-auto mt-5 p-4`} aria-label="سجل الشحن">
          <span className="f-Cairo-400 f-size-18">سجل الشحن</span>
          {walletData.data.slice(1)?.map((dataWallet) => (
            <div key={dataWallet.id} className="price border-bottom border-2 pb-2 mt-4">
              <span className="d-block f-Cairo-600 f-size-20">{dataWallet.balance_before_charge} جنيه</span>
              <div className="dateOperation d-flex justify-content-between mt-3">
                <span className="f-Cairo-400 f-size-16">{dataWallet.created_at}</span>
                <span style={{ color: dataWallet.is_completed ? '#34C759' : '#D9171A' }}>
                  {dataWallet.is_completed ? 'عملية ناجحة' : 'عملية فاشلة'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
