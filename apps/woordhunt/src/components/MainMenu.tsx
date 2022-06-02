import { FC } from 'react';
import { NextLink } from '@ivan/next';
import { useRouter } from 'next/router';

const menu = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Упражнения',
    href: '/page/view/ex',
  },
  {
    label: 'Редактор',
    href: '/editor/fx',
  },
  {
    label: 'Перевод примеров',
    href: '/extranslation/list/1',
  },
  {
    label: 'Дополнения',
    href: '/page/view/extensions',
  },
];

const MainMenu: FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div id="menu_box">
        <div id="menu">
          <ul>
            {menu.map(({ href, label }) => (
              <li key={href}>
                {pathname === href ? <b>{label}</b> : <NextLink href={href}>{label}</NextLink>}
              </li>
            ))}
            <li>
              <b
                // onclick="openPrjDialog('change_font_dialog_pc');"
                style={{ color: '#4caf50', cursor: 'pointer' }}
              >
                Размер шрифта
              </b>
            </li>
          </ul>
        </div>
      </div>
      <div id="dialog_win_bar">
        <div id="dialog_win_box">
          <div id="dialog_win_close">
            <span
            // onclick="closePrjDialog()"
            >
              <img src="/img/svg/cross_01.svg" width={22} />
            </span>
          </div>
          <div id="dialog_win_data" />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
