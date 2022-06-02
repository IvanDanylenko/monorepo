import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const SetMainLenta = () => {
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
        <h2>Напоминания</h2>
        {/* <p class="notice n_yellow">
	Рассылка напоминаний, по техническим причинам, временно приостановлена.
</p>
 */}
        <table>
          <tbody>
            <tr>
              <td style={{ font: '13px Arial', lineHeight: 22, width: '30%' }}>
                <form method="post">
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={1} />
                    &nbsp;Понедельник
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={2} />
                    &nbsp;Вторник
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={3} />
                    &nbsp;Среда
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={4} />
                    &nbsp;Четверг
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={5} />
                    &nbsp;Пятница
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={6} />
                    &nbsp;Суббота
                  </label>
                  <br />
                  <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="days[]" defaultValue={7} />
                    &nbsp;Воскресенье
                  </label>
                  <br />
                  <br />
                  <input
                    type="submit"
                    name="set_days"
                    className="green_button"
                    defaultValue="Изменить"
                  />
                </form>
              </td>
              <td style={{ paddingLeft: 20 }}>
                <p className="notice n_yellow">
                  "Напоминания" — ваш помощник, который в выбранные дни будет отправлять вам на
                  почту <i>список слов</i> (см. пример ниже) которые в данный момент находятся у вас
                  на изучении. <br />
                  <br />
                  <b>Настоятельно рекомендуем</b> добавить почтовый адрес mail@wooordhunt.ru в
                  "белый список" вашего почтового клиента, так как письма такого типа очень часто
                  попадают в папку "Спам".
                </p>
                <br />
                <br />
                {/* <img src="/img/help_02.gif" style="width: 90%"> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default SetMainLenta;
