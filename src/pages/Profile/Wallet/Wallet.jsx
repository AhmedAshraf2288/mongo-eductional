import profileStyles from "../ProfileDetails/ProfileDetails.module.css";
import { useProfileWalletData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading.jsx";
import CardWallet from "./cardWallet.jsx";
import Shippinghistory from "./Shippinghistory.jsx";

export default function Wallet() {
  const { data: walletData, isLoading } = useProfileWalletData();
  const indexPriceCard = walletData?.data.length - 1;

  return (
    <div aria-label="محفظة المستخدم" className={profileStyles.walletContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CardWallet indexPriceCard={indexPriceCard} walletData={walletData} />
          <Shippinghistory walletData={walletData} isLoading={isLoading} />
        </>
      )}
    </div>
  );
}