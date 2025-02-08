import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/header.css';
import { useTranslation } from 'react-i18next';
import NavBar from "src/shared/components/NavBar";
import {RootState} from "src/app/providers/StoreProvider";
import Button from "src/shared/components/Button";
import {Modal} from "src/shared/components/Modal";
import LoginForm from "src/shared/components/LoginForm";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const handleOpenLoginModal = () => setIsModalLoginOpen(true);
  const handleCloseLoginModal = () => setIsModalLoginOpen(false);
  const role = localStorage.getItem('role');

  const links = [
    { label: t('home'), href: '/' },
    { label: t('cart'), href: '/cart' },
  ];

  if(token){
    links.push({ label: t('profile'), href: '/profile' });
    if(role == 'admin'){
      links.push({ label: t('admin'), href: '/admin' });
    }
  }else{
    links.push({ label: t('register'), href: '/register' });
  }

  useEffect(() => {
    if (token) {
      setIsModalLoginOpen(false);
    }
  }, [token]);

  return (
    <header className="header">
      <div className="header-item">
        <div className="logo"><img src={'https://brandwiki.ru/up/brands/product/190507_55.webp'} width={50} height={50}/></div>
        <NavBar links={links} />
        {!token ? (
            <Button label={t('login')} onClick={handleOpenLoginModal} />
        ) : null}
      </div>

      {isModalLoginOpen && (
          <Modal visible={isModalLoginOpen} onClose={handleCloseLoginModal}>
            <LoginForm />
          </Modal>
      )}
    </header>
  );
};
