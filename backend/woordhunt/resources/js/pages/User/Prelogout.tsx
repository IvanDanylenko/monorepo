import Layout from '@/components/Layout';
import UserMenu from '@/components/UserMenu';

const Prelogout = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>{' '}
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <UserMenu />
      <div id="admin_content">
        <div
          className="notice n_yellow"
          style={{
            margin: '40px 10px 0px 10px',
            borderRadius: 5,
            fontSize: 18,
            textAlign: 'center',
            paddingBottom: 20,
          }}
        >
          Выйти из аккаунта?
          <br />
          <br />
          <a href="/user/logout" style={{ textDecoration: 'none' }}>
            <span
              className="base_button green_button"
              style={{ width: 30, display: 'inline-block' }}
            >
              да
            </span>
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default Prelogout;
