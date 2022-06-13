import { FC } from 'react';

const MainMenu: FC = () => {
  return (
    <div id="admin_menu">
      <b>Слова на изучении</b>
      <br />
      <a href="/user/worddone" style={{}}>
        Выученные слова
      </a>
      <br />
      <a href="/user/setmaillenta" style={{}}>
        Напоминания
      </a>
      <br />
      <a href="/user/profile" style={{}}>
        Личные данные
      </a>
      <br />
      <a href="/user/changepass" style={{}}>
        Изменение пароля
      </a>
      <br />
      <a href="/user/settings" style={{}}>
        Настройки
      </a>
      <br />
      <a href="/user/personalexamples" style={{}}>
        Примеры
      </a>
      <br />
      <br />
      <a href="/user/prelogout" style={{}}>
        Выйти из аккаунта
      </a>
      <br />
    </div>
  );
};

export default MainMenu;
