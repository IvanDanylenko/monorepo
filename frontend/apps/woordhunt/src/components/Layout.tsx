import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainMenu from './MainMenu';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
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
