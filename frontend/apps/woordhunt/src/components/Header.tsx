import { FC } from 'react';
import Image from 'next/image';
import { NextLink } from '@ivan/next';

const Header: FC = () => {
  return (
    <div id="header">
      <div id="header_container">
        <div id="logo">
          <a href="/">
            <Image src="/img/logo.png" alt="logo" objectFit="contain" width={200} height={100} />
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
          <NextLink href="/user/preentry">Личный кабинет</NextLink>
          <br />
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Header;
