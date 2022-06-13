import { NextLink } from '@ivan/next';
import Layout from '../../components/Layout';

const Login = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>{' '}
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <br />
      <h2>Вход для зарегистрированных пользователей</h2>
      <br />
      <div className="form">
        <form id="login-form" action="/user/login" method="post">
          <div className="row">
            <label htmlFor="LoginForm_email" className="required">
              Электронная почта (email) <span className="required">*</span>
            </label>
            <input
              // required="required"
              name="LoginForm[email]"
              id="LoginForm_email"
              type="email"
            />
          </div>
          <div className="row">
            <label htmlFor="LoginForm_password" className="required">
              Пароль <span className="required">*</span>
            </label>
            <input
              // required="required"
              name="LoginForm[password]"
              id="LoginForm_password"
              type="password"
            />
          </div>
          <div className="row rememberMe">
            <input
              id="ytLoginForm_rememberMe"
              type="hidden"
              defaultValue={0}
              name="LoginForm[rememberMe]"
            />
            <input
              // defaultChecked="checked"
              name="LoginForm[rememberMe]"
              id="LoginForm_rememberMe"
              defaultValue={1}
              type="checkbox"
            />
            <span>Запомнить меня</span>
          </div>
          <div className="row buttons">
            <input className="green_button" type="submit" name="yt0" defaultValue="Войти" /> или{' '}
            <NextLink href="/user/forgotpass">напомнить пароль</NextLink>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
