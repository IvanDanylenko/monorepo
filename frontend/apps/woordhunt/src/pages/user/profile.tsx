import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const Profile = () => {
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
        <h2>Личные данные</h2>
        <div className="form">
          <form id="user-form" action="/user/profile" method="post">
            <div className="row">
              <label htmlFor="User_email" className="required">
                Электронная почта (email) <span className="required">*</span>
              </label>{' '}
              <input
                size={60}
                maxLength={100}
                name="User[email]"
                id="User_email"
                type="email"
                defaultValue="danylenko.ivan11@gmail.com"
              />{' '}
            </div>
            <div className="row">
              <label htmlFor="User_login">Ваше имя в системе</label>{' '}
              <input
                size={60}
                maxLength={100}
                name="User[login]"
                id="User_login"
                type="text"
                defaultValue="Umnik3420"
              />{' '}
            </div>
            <div className="row buttons">
              <input type="submit" name="yt0" defaultValue="Сохранить" />{' '}
            </div>
          </form>
          <div style={{ textAlign: 'right' }}>
            <a href="/user/delprofile">Удалить аккаунт</a>
          </div>
        </div>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default Profile;
