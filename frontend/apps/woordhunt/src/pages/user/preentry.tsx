import { NextLink } from '@ivan/next';
import Layout from '../../components/Layout';

const Preentry = () => {
  return (
    <Layout>
      <div id="column_left" style={{ display: 'block' }}>
        {/*{ADV_LEFT_BLOCK}*/}
      </div>{' '}
      <div id="column_right" style={{ display: 'block' }}>
        {/*{ADV_RIGHT_BLOCK}*/}
        <a id="toTop" className="no_mobile" style={{ display: 'none' }}>
          •
        </a>
      </div>
      <div
        className="notice n_yellow"
        style={{ margin: '45px 10px 0px 10px', borderRadius: 5, fontSize: 18, padding: 20 }}
      >
        {/* 	Вы регистрировались ранее на сайте WooordHunt.ru?
	<br/>
	<br/>
	<a href="/user/login" style="text-decoration: none"><span class="base_button green_button" style="width:30px; display: inline-block;">да</span></a>
	&nbsp;&nbsp;
	<a href="/user/registration" style="text-decoration: none"><span class="base_button orange_button"  style="width:30px; display: inline-block;">нет</span></a>
 */}
        <br />
        <NextLink href="/user/registration" style={{ color: '#0f95ff' }}>
          Зарегистрируйтесь на сайте
        </NextLink>
        , если вы новый пользователь.
        <br />
        <br />
        <NextLink href="/user/login" style={{ color: '#0f95ff' }}>
          Войдите на сайт
        </NextLink>
        , если у вас уже есть логин и пароль.
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Preentry;
