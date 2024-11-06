import { CgProfile } from 'react-icons/cg'
import { FaHome } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { TbLogout } from "react-icons/tb";
import styles from './NavProfile.module.css'
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useStore } from '../../../../zustand/store';
import useAxios from '../../../../hooks/useAxios';
import Confirm from '../../../../components/Confirm/Confirm';
import { useState } from 'react';
import { FiUser } from "react-icons/fi";

export default function NavProfile({ studentCode, studentPoints }) {
  const axios = useAxios();
  const setAuthData = useStore(state => state.setAuthData);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("/logout", data);
      return response.data;
    },
    onSuccess: () => {
      setAuthData("");
      setLogoutOpen(false)
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <div className={`${styles.profile__icon} position-relative d-flex`}>
        <div className={`${styles.profile__icon__image}`}><FiUser/></div>
        <div className={`${styles.profile__drop}`}>
          <ul className={`${styles.profile__drop__list} px-0 m-0 list-unstyled`}>
            <li className={`${styles.profile__home} ${styles.profile__drop__list__item}`}>
              <Link className='d-flex flex-column gap-2 text--dark ' to="/profile">
                <div className='d-flex align-items-center gap-2'>
                  <span className={`${styles.profile__drop__list__item__icon}`}><FaHome /></span>
                  <span>الملف الشخصي</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <span>كود الطالب: </span>
                  <span>{studentCode}</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <span>نقاط الطالب: </span>
                  <span>{studentPoints}</span>
                </div>
              </Link>
            </li>
            <li className={`${styles.profile__drop__list__item} d-flex align-items-center gap-2`}>
              <Link className='d-flex align-items-center gap-2 text--dark' to="/dashboard/personalInformation">
                <span className={`${styles.profile__drop__list__item__icon}`}><CgProfile /></span> <span>حسابي</span>
              </Link>
            </li>
            <li className={`${styles.profile__drop__list__item} d-flex align-items-center gap-2`}>
              <Link className='d-flex align-items-center gap-2 text--dark' to="/dashboard/wallet">
                <span className={`${styles.profile__drop__list__item__icon} `}><BiWallet /></span> <span>محفظتي</span>
              </Link>
            </li>
            <li className={`${styles.profile__drop__list__item} d-flex align-items-center gap-2`}>
              <Link className='d-flex align-items-center gap-2 text--dark' to="/dashboard/myCourses">
                <span className={`${styles.profile__drop__list__item__icon}`}><SlBookOpen /></span> <span>كورساتي</span>
              </Link>
            </li>
            <li className={`${styles.profile__drop__list__item} d-flex align-items-center gap-2`}>
              <div className='d-flex align-items-center gap-2 text--dark' onClick={() => setLogoutOpen(true)}>
                <span className={`${styles.profile__drop__list__item__icon}`}><TbLogout /></span> <span>تسجيل الخروج</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Confirm
        isOpen={logoutOpen}
        setIsOpen={setLogoutOpen}
        type="warning"
        message='هل انت متأكد من تسجيل الخروج؟'
        confirmFunc={() => logoutMutation.mutate()}
        loading={logoutMutation.isLoading}
      />
    </div>
  )
}
