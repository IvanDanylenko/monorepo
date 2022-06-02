import Layout from '@/components/Layout';
import UserMenu from '@/components/UserMenu';

const ChangePassword = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <UserMenu />
      <div id="admin_content">
        <h2>Изменение пароля</h2>
        <div className="form">
          <form id="user-form" action="/user/changepass" method="post">
            {/* <p class="note">Fields with <span class="required">*</span> are required.</p> */}
            <div className="row">
              <label htmlFor="User_password">Новый пароль</label>
              <input
                size={60}
                maxLength={100}
                // required="required"
                name="User[password]"
                id="User_password"
                type="password"
              />
            </div>
            <div className="row buttons">
              <input type="submit" name="yt0" defaultValue="Изменить пароль" />{' '}
            </div>
          </form>
          <p style={{ textAlign: 'left', fontSize: 11, marginTop: 17 }}>
            *Ваш пароль будет сохранён в зашифрованном виде. Администрация сайта не будет его знать.
          </p>
        </div>
        {/* form */}
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default ChangePassword;
