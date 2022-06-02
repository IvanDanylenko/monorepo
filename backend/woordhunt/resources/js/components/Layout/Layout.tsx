// @ts-nocheck
import { FC } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainMenu from '@/components/MainMenu';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div id="container">
        <MainMenu />
        <div id="content" className="cs_main">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
