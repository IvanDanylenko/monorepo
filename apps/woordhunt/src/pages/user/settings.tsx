import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const Settings = () => {
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
        <h2>Настройки</h2>
        <div className="form">
          <form id="user-form" action="/user/settings" method="post">
            <div className="row radio">
              <p>
                Произношение и транскрипция которые будут использованы в упражнениях и личном
                словаре:
              </p>
              <span id="ex_lng">
                <input
                  defaultValue="us"
                  id="ex_lng_0"
                  // defaultChecked="checked"
                  type="radio"
                  name="ex_lng"
                />{' '}
                <label htmlFor="ex_lng_0">Американское</label>&nbsp;&nbsp;&nbsp;
                <input defaultValue="uk" id="ex_lng_1" type="radio" name="ex_lng" />{' '}
                <label htmlFor="ex_lng_1">Британское</label>
              </span>{' '}
            </div>
            <br />
            <div className="row buttons">
              <input type="submit" name="yt0" defaultValue="Сохранить" />{' '}
            </div>
          </form>
        </div>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default Settings;
