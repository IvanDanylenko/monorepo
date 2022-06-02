import Layout from '@/components/Layout';
// import { Link } from '@inertiajs/inertia-react';

const TesterUnknown = () => {
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
        <b>Незнакомые слова</b> <a href="/tester/clear">Обнуление данных</a> 
      </div>
      <div id="tester">
        <img src="/img/status1.png" style={{ display: 'none' }} />
        <div style={{ margin: '0px 0px 30px 0px' }}>
          Ниже представлен список слов, которые вы отметили как "незнакомые". Обращаем ваше
          внимание, что в этот список не включены слова, которые уже добавлены вами в упражнения.
          Используя этот список, вы можете быстро добавить новые для вас слова в упражнения. Для
          этого используйте кнопку "Добавить в упражнения".
          <br />
          <br /> Всего незнакомых слов: 1{' '}
        </div>
        <form method="post" id="tester_form">
          <div className="words_col">
            <input name="words[1975]" type="hidden" defaultValue={2} />
            <img src="/img/status2.png" />
            <a href="#">busy</a>
            <br />
          </div>
          <div className="words_col"></div>
          <div className="clear" />
          <div style={{ marginTop: 30, float: 'left' }}>
            <input
              className="green_button"
              type="submit"
              name="add_to_ex"
              defaultValue="Добавить в упражнения"
            />
          </div>
          <div
            style={{
              margin: '35px 0px 0px 20px',
              float: 'left',
              font: '11px Arial',
              maxWidth: 550,
            }}
          >
            После нажатия на кнопку все слова будут добавлены в упражнения с одним примером
            использования данного слова. В дальнейшем вы всегда сможете добавить дополнительные
            примеры.
          </div>
          <div className="clear" />
          <div style={{ marginTop: 30, float: 'left' }}>
            <input
              className="green_button"
              style={{ width: 200 }}
              type="submit"
              name="save_status"
              defaultValue="Сохранить статусы"
            />
          </div>
          <div
            style={{
              margin: '35px 0px 0px 20px',
              float: 'left',
              font: '11px Arial',
              maxWidth: 550,
            }}
          >
            Использование этой кнопки имеет смысл только в том случае, если слово, которое вам
            хорошо известно, вы случайно пометили как "незнакомое". В этом случае вы можете изменить
            статус этого слова и нажать эту кнопку.
          </div>
          <div className="clear" />
        </form>
      </div>
    </Layout>
  );
};

export default TesterUnknown;
