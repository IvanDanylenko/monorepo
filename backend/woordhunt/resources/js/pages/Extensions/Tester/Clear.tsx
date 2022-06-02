import Layout from '@/components/Layout';
// import { Link } from '@inertiajs/inertia-react';

const TesterClear = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <div className="simplemenu">
        <a href="/tester/list">Непаханое поле</a> <a href="/tester/known">Знакомые слова</a> 
        <a href="/tester/unknown">Незнакомые слова</a> <b>Обнуление данных</b> 
      </div>
      <p className="notice2 n_yellow">
        На этой странице вы можете привести "Сканер" в тоже самое состояние, как если бы вы им ещё
        не пользовались и не сортировали слова на знакомые и незнакомые.
      </p>
      <form method="post">
        <div style={{ marginTop: 30, float: 'left' }}>
          <input
            className="green_button"
            style={{ width: 200 }}
            type="submit"
            name="clear_scaner"
            defaultValue="Обнулить данные"
          />
        </div>
        <div
          style={{ margin: '35px 0px 0px 20px', float: 'left', font: '11px Arial', maxWidth: 550 }}
        >
          После нажатия на кнопку, "Сканер" будет обнулён. Восстановить данные будет нельзя.
        </div>
      </form>
    </Layout>
  );
};

export default TesterClear;
