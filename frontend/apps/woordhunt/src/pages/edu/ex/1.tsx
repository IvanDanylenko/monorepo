import Layout from '../../../components/Layout';

export function RememberAll() {
  return (
    <Layout>
      <div id="mode1">
        <span id="box_word_hit">
          <img src="/img/lvl_0.gif" alt="Уровень изученности слова" />
        </span>
        <div id="box_word">lady </div>
        <div id="box_transcription">ˈleɪdɪ </div>
        <div id="box_sentence">
          <p>A lady dressed in red</p>
        </div>
        <div id="box_sentence_translation">
          <p>
            <span>Дама, одетая в красное</span>  
            <a
              href="/sentence/update/4348028467"
              // onclick="javascript: return openWindow(this.href, 660, 860)"
            >
              ≡
            </a>
          </p>
        </div>
        <div id="word_full_translation" />
      </div>
      <div id="go_next_level">
        <span
          id="w_no"
          className="simple_btn off"
          // onclick="know_position=1;runModeEvent(13)"
        >
          Совсем не помню
        </span>
        <span
          id="w_middle"
          className="simple_btn"
          // onclick="know_position=2;runModeEvent(13)"
        >
          Ещё подучить
        </span>
        <span
          id="w_yes"
          className="simple_btn off"
          // onclick="know_position=3;runModeEvent(13)"
        >
          Хорошо помню
        </span>
      </div>
      <div id="controls">
        <span
          className="simple_btn"
          // onclick="runModeEvent(38)"
        >
          ⇑
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(40)"
        >
          ⇓ (3 раза)
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(37)"
        >
          ⇐
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(13)"
        >
          Enter
        </span>
        <span
          className="simple_btn"
          // onclick="runModeEvent(39)"
        >
          ⇒
        </span>
      </div>
      <div style={{ position: 'relative', fontSize: 18 }}>
        <div id="stat_w_remain" className="stat_w_remain_view_computer" />
        <div id="roket" className="roket_view_computer">
          <span
          // onclick="hitWordUp();
          >
            <img src="/img/bin2.gif" />
          </span>
        </div>
        <div style={{ float: 'left' }}>
          <span
            className="fake_link"
            // onclick="javascript:showWordInFrame($('#box_word').text())"
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
           
          <a href="/data/help/mode1.html" className="help_link">
            Помощь
          </a>
        </div>
        <div className="clear" />
      </div>
      <div id="settings">
        <label>
          <input
            type="checkbox"
            // defaultChecked="checked"
            id="show_stat_w_remain_1"
            // onchange="slideToggle('stat_w_remain'); saveState('show_stat_w_remain_1',$(this).prop('checked')); return false"
          />
          отображать количество оставшихся слов
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            // defaultChecked="checked"
            id="show_controls_1"
            // onchange="slideToggle('controls'); saveState('show_controls_1',$(this).prop('checked')); return false"
          />
          отображать кнопки "горячих" клавиш
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

export default RememberAll;
