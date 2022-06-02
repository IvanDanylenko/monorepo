import { FC } from 'react';
import { Link } from '@inertiajs/inertia-react';

const Footer: FC = () => {
  return (
    <>
      <div id="menu_box_mobile">
        <Link href="/">Главная</Link>
        &ensp;
        <Link href="/user/preentry">Личный кабинет</Link>
        &ensp;
        <Link href="/page/view/ex">Упражнения</Link>
        &ensp;
        <b
          // onclick="openPrjDialog('change_font_dialog_pc');"
          style={{ color: '#4caf50', cursor: 'pointer' }}
        >
          Размер шрифта
        </b>
      </div>
      <div id="footer">
        <table>
          <tbody>
            <tr>
              <td>
                <a href="/page/view/help" style={{ backgroundColor: '#ffeea9' }}>
                  Справка
                </a>
                &ensp;
                <a href="/page/view/feedback" id="feedback_link">
                  Oтзывы, предложения, вопросы
                </a>
                <br /> WooordHunt — ваш помощник в мире английского языка
              </td>
              <td>
                {/* <div id="share">
                <div
                  className="ya-share2"
                  data-services="vkontakte,odnoklassniki,moimir,twitter,telegram,gplus,lj,viber,whatsapp,skype"
                  data-limit={5}
                  data-title="WooordHunt — ваш помощник в мире английского языка."
                  data-description="Удобные словари, упражнения для запоминаяния слов, редактор для текстов на английском."
                  data-popup-direction="top"
                  data-size="m"
                  data-url="https://wooordhunt.ru"
                />
              </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Footer;
