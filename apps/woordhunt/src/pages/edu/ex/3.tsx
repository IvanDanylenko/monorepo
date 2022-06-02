import Layout from '../../../components/Layout';

export function Biathlon() {
  return (
    <Layout>
      <div id="mode3">
        <div id="info_box" />
        <table style={{ minHeight: 80 }}>
          <tbody>
            <tr>
              <td id="manual_box">
                <input type="text" id="manual" />
                <div id="box_transcription">ˈblʌdɪ</div>
                <div id="tips" />
              </td>
              <td id="target">
                <i>прил.</i> окровавленный; кровавый; кровопролитный; кровавый, кровожадный
                <br />
                <i>нар.</i>
                чертовски, очень
                <br />
                <i>гл.</i> окровавить
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="hidden" id="box_word" defaultValue="bloody" />
        <div id="box_sentence">
          <p>That's a . . . . . good idea.</p>
        </div>
        <div id="box_sentence_translation">
          <p>
            <span>Это чертовски хорошая идея.</span>
            &nbsp;
            <a
              href="/sentence/update/12758521246"
              // onclick="javascript: return openWindow(this.href, 660, 860)"
            >
              ≡
            </a>
          </p>
        </div>
        <div id="word_full_translation" />
      </div>
      <div id="controls">
        <span
          className="simple_btn"
          // onclick="runModeEvent(38)"
        >
          ⇑ / 5
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(40)"
        >
          ⇓ / 7 (2 раза)
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(13)"
        >
          Enter
        </span>
      </div>
      <div style={{ position: 'relative', fontSize: 18 }}>
        <div id="stat_w_remain" className="stat_w_remain_view_computer" />
        <div id="roket" className="roket_view_computer">
          <span
          // onclick="hitWordUp();"
          >
            <img src="/img/bin2.gif" />
          </span>
        </div>
        <div style={{ float: 'left' }}>
          <span
            className="fake_link"
            // onclick="javascript:showWordInFrame($('#box_word').val())"
          >
            WH
          </span>
        </div>
        <div style={{ float: 'right' }}>
          <span
            className="fake_link"
            id="settings_link"
            // onclick="slideToggle('settings'); return false;"
          >
            Настройки
          </span>
           
          <a href="/data/help/mode3.html" className="help_link">
            Помощь
          </a>
        </div>
        <div className="clear" />
      </div>
      <div id="settings">
        <label>
          <input
            type="checkbox"
            id="go_next_word_level_3"
            // onchange="go_next_word_level_3 = !go_next_word_level_3; saveState('go_next_word_level_3',$(this).prop('checked')); return false"
          />
          автоматически переводить слово на следующий уровень изучения, если оно напечатано без
          ошибок
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            // defaultChecked="checked"
            id="show_stat_w_remain_3"
            // onchange="slideToggle('stat_w_remain'); saveState('show_stat_w_remain_3',$(this).prop('checked'));"
          />
          отображать количество оставшихся слов
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            // defaultChecked="checked"
            id="show_controls_3"
            // onchange="slideToggle('controls'); saveState('show_controls_3',$(this).prop('checked')); return false"
          />
          отображать кнопки "горячих" клавиш
        </label>
        <br />
        <label>
          <input
            type="text"
            defaultValue={1}
            maxLength={1}
            style={{ width: 15 }}
            id="err_limit"
            // onchange="saveState('err_limit',$(this).val());err_limit=$(this).val();"
          />{' '}
          количество ошибок после которых будет покзана подсказка
        </label>
        <br />
        <span className="snoska">
          * Если вы выполняете упражнение с нескольких компьютеров/устройств то данные настройки
          необходимо сделать на каждом из них.
        </span>
      </div>
    </Layout>
  );
}

export default Biathlon;
