import React from 'react'
import styles from './Wallet.module.css'
import { useProfileInfoData } from '../../../queries/queries';
export default function CardWallet({ indexPriceCard, walletData }) {
    const { data: profileData } = useProfileInfoData();
    console.log(profileData);

    return <>
        <section>
            <div className="wallet d-flex justify-content-center">
                <div className={`${styles.cardWallet}`}>
                    <img className={`${styles.imgSimCard}`} src="/assets/images/Wallet/Group.png" alt="" />
                    <img className={`${styles.imgCard1}`} src="/assets/images/Wallet/Vector.png" alt="" />
                    <img className={`${styles.imgCard2}`} src="/assets/images/Wallet/Vector-1.png" alt="" />
                    <img className={`${styles.imgCard3}`} src="/assets/images/Wallet/Vector-2.png" alt="" />
                    <img className={`${styles.imgCard4}`} src="/assets/images/Wallet/Vector-3.png" alt="" />
                    <img className={`${styles.imgCard5}`} src="/assets/images/Wallet/Vector-4.png" alt="" />
                    <img className={`${styles.imgMangoCard}`} src="/assets/images/Wallet/profile 4.png" alt="" />
                    <div className={`${styles.textCard} text-light position-absolute ps-3  `}>
                        <h6 className="f-size-18 f-Cairo-600 mb-4">{profileData?.student_info
                            .name} </h6>
                        <h6 className="f-size-20 f-Cairo-600">رصيدك الحالي <span className="f-size-28">{walletData?.data[indexPriceCard].balance_after_charge} جنيه</span></h6>
                    </div>

                </div>

            </div>
        </section>
    </>
}
