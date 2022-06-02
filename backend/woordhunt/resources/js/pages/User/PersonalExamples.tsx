import Layout from '@/components/Layout';
import UserMenu from '@/components/UserMenu';

const PersonalExamples = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n                #years {\n                    margin: 10px 0px 10px 0px;\n                    font-family: serif;\n                    background-color: #FFDCA9;\n                    border-radius: 3px;\n                    padding: 7px\n                }\n\n                #user_word {\n                    font-family: serif;\n                    font-size: 13px\n                }\n            ',
        }}
      />
      <UserMenu />
      <div id="admin_content">
        <h2>Примеры которые вы добавили</h2>
        <p className="notice2 n_yellow">
          Пока вы не добавили ни одного примера. Для добавления примера, вам нужно кликнуть по
          ссылке "Добавить пример", которая расположена в нижней части страницы (карточке слова).
          Добавленные вами примеры могут быть использованы в упражнениях.
        </p>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default PersonalExamples;
