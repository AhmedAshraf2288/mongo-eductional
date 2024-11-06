import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import TextInput from '../../../components/Inputs/TextInput';
import Button from '../../../components/Button/Button';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../queries/queryClient';
import { toast } from 'react-toastify';
import useAxios from '../../../hooks/useAxios';
import { useStore } from '../../../zustand/store';
import styles from './CodeShipping.module.css';
import Shippinghistory from '../Wallet/Shippinghistory';
import { useProfileWalletData } from '../../../queries/queries';
import { Link } from 'react-router-dom';

export default function CodeShipping() {
  const { data: walletData, isLoading } = useProfileWalletData();
  const [authData, setAuthData] = useStore((state) => [
    state.authData,
    state.setAuthData,
  ]);
  const axios = useAxios();
  const formRef = useRef();

  const chargeWalletMutation = useMutation({
    mutationFn: (data) => axios.post('/student/wallet-recharge', data),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries('wallet');
      formRef?.current?.resetForm();
      setAuthData({
        ...authData,
        wallet_balance: data.data.data.wallet_balance,
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error?.message);
    },
  });

  return (
    <div className="container">
      <div className="mb-5">
        <p className={`${styles.headText} text-center f-Cairo-500 f-size-22 mb-4`} aria-label="تعليمات شحن الكود">
          اكتب الكود المكون من ١١ رقم على الكارت بتاعك هنا عشان تشحنه على الأكونت بتاعك
        </p>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={(values) => {
            chargeWalletMutation.mutate(values);
          }}
          innerRef={formRef}
        >
          <Form>
            <TextInput
              as="field"
              name="code"
              placeholder="الكود الخاص بك..."
              className={`mx-auto ${styles.code_shipping__input}`}
              aria-label="أدخل الكود الخاص بك"
            />
            <div className="d-flex gap-3 align-items-center justify-content-center fs-5">
              <Link
                className={`${styles.code_shipping__btn} f-Almarai-400 f-size-16 w-50`}
                type="submit"
                isLoading={chargeWalletMutation.isPending}
                aria-label="شحن الكود"
              >
                شحن الكود
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="shipping-history pt-5">
        <Shippinghistory walletData={walletData} isLoading={isLoading} />
      </div>
    </div>
  );
}
