import { FC } from 'react';
import { Link } from '@inertiajs/inertia-react';

const Header: FC = () => {
  return (
    <div id="header">
      <div id="header_container">
        <div id="logo">
          <a href="/">
            <img src="/img/logo.png" alt="logo" />
          </a>
        </div>
        <div id="search_box">
          <form action="/word/postsearch" method="post" id="hunted_word_form">
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="hunted_word"
                      required
                      placeholder="Слово или словосочетание"
                      // defaultValue=''
                      name="word"
                      autoComplete="off"
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      className="submit"
                      defaultValue="Найти"
                      id="hunted_word_submit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div id="word_tips" />
        </div>
        <div id="profile">
          <Link href="/user/preentry">Личный кабинет</Link>
          <br />
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Header;
