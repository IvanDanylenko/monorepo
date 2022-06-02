import Layout from '@/components/Layout';

const ForgotPassword = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>{' '}
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <h2>Восстановление пароля</h2>
      <br />
      <div className="form">
        <form id="user-form" action="/user/forgotpass" method="post">
          {/* <p class="note">Fields with <span class="required">*</span> are required.</p> */}
          <div className="row">
            <label htmlFor="User_email" className="required">
              Электронная почта (email) <span className="required">*</span>
            </label>
            <input size={60} maxLength={100} name="User[email]" id="User_email" type="email" />
          </div>
          <div className="row buttons">
            <input
              className="green_button"
              type="submit"
              name="yt0"
              defaultValue="Напомнить пароль"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
