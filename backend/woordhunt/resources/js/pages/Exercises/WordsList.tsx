import Layout from '@/components/Layout';
// import { Link } from '@inertiajs/inertia-react';

const WordsList = () => {
  return (
    <Layout>
      <div style={{ margin: '0px 0px 15px 0px', textAlign: 'right', fontSize: 18 }}>
        <span className="fake_link" id="play_word_all">
          Play all
        </span>
        &ensp;&ensp;
        <span className="fake_link" id="show_word_data_all">
          Show all
        </span>
        &ensp;&ensp;
        <span
          className="fake_link"
          id="settings_link"
          // onclick="slideToggle('settings');"
        >
          Settings
        </span>
        &ensp;&ensp;
        <a href="/data/help/mode2.html" className="help_link">
          Help
        </a>
      </div>
      <div id="settings" style={{ lineHeight: '200%' }}>
        <label>
          <input
            type="text"
            defaultValue={2}
            maxLength={1}
            style={{ width: 15 }}
            id="play_all_pause"
            // onchange="saveState('play_all_pause',$(this).val()); play_all_pause=$(this).val();"
          />
          продолжительность паузы (в секундах) для режима "Play all"
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            id="sort_word_2"
            // onchange="saveState('sort_word_2',$(this).prop('checked')); return false"
          />
          сортировать слова по дате их добавления в упражнения (изменения вступят в силу после
          перезагрузки страницы)
        </label>
        <br />
        <span className="snoska">
          * Если вы выполняете упражнение с нескольких компьютеров/устройств то данные настройки
          необходимо сделать на каждом из них.
        </span>
      </div>
      <div id="mode2">
        <div id="word_box_737">
          <div className="box_word">
            <span className="word marker" id="word_737">
              blow
            </span>
            <span className="transcription_us">|bləʊ|</span>
            <span
              id="rocket_737"
              className="cross_del"
              style={{ display: 'inline-block' }}
              // onclick="hitWordUp(5);"
            >
              x
            </span>
            <span
              id="hit_up_737"
              className="cross_del"
              style={{ display: 'inline-block' }}
              // onclick="hitWordUp(0)"
            >
              ∧
            </span>
            <span
              id="wh_up_737"
              className="fake_link cross_del"
              style={{ color: '#898989', marginRight: 0, display: 'inline-block' }}
              // onclick="javascript:showWordInFrame('blow')"
            >
              wh
            </span>
          </div>
          <div className="box_word_translation" id="wt_737">
            <i>сущ.</i> удар; несчастье, удар судьбы; горный удар; дуновение, порыв ветра
            <br />
            <i>гл.</i>
            дуть, веять (о ветре); гнать (ветром); нестись; играть ; издавать звук <br />
          </div>
          <div className="box_original" id="original_737">
            <p>A cold breeze was blowing hard.</p>
            <p></p>
          </div>
          <div className="box_translation" id="translation_737">
            <p>
              <span> Дул сильный, холодный ветер. </span>
            </p>
          </div>
        </div>
        <div id="word_box_737">
          <div className="box_word">
            <span className="word" id="word_737">
              blow
            </span>
            <span className="transcription_us">|bləʊ|</span>
            <span
              id="rocket_737"
              className="cross_del"
              // onclick="hitWordUp(5);"
            >
              x
            </span>
            <span
              id="hit_up_737"
              className="cross_del"
              // onclick="hitWordUp(0)"
            >
              ∧
            </span>
            <span
              id="wh_up_737"
              className="fake_link cross_del"
              style={{ color: '#898989', marginRight: 0 }}
              // onclick="javascript:showWordInFrame('blow')"
            >
              wh
            </span>
          </div>
          <div className="box_word_translation" id="wt_737">
            <i>сущ.</i> удар; несчастье, удар судьбы; горный удар; дуновение, порыв ветра
            <br />
            <i>гл.</i>
            дуть, веять (о ветре); гнать (ветром); нестись; играть ; издавать звук <br />
          </div>
          <div className="box_original" id="original_737">
            <p>A cold breeze was blowing hard.</p>
            <p></p>
          </div>
          <div className="box_translation" id="translation_737">
            <p>
              <span> Дул сильный, холодный ветер. </span>
            </p>
          </div>
        </div>
        <div id="word_box_737">
          <div className="box_word">
            <span className="word" id="word_737">
              blow
            </span>
            <span className="transcription_us">|bləʊ|</span>
            <span
              id="rocket_737"
              className="cross_del"
              // onclick="hitWordUp(5);"
            >
              x
            </span>
            <span
              id="hit_up_737"
              className="cross_del"
              // onclick="hitWordUp(0)"
            >
              ∧
            </span>
            <span
              id="wh_up_737"
              className="fake_link cross_del"
              style={{ color: '#898989', marginRight: 0 }}
              // onclick="javascript:showWordInFrame('blow')"
            >
              wh
            </span>
          </div>
          <div className="box_word_translation" id="wt_737">
            <i>сущ.</i> удар; несчастье, удар судьбы; горный удар; дуновение, порыв ветра
            <br />
            <i>гл.</i>
            дуть, веять (о ветре); гнать (ветром); нестись; играть ; издавать звук <br />
          </div>
          <div className="box_original" id="original_737">
            <p>A cold breeze was blowing hard.</p>
            <p></p>
          </div>
          <div className="box_translation" id="translation_737">
            <p>
              <span> Дул сильный, холодный ветер. </span>
            </p>
          </div>
        </div>
        <div id="word_box_737">
          <div className="box_word">
            <span className="word" id="word_737">
              blow
            </span>
            <span className="transcription_us">|bləʊ|</span>
            <span
              id="rocket_737"
              className="cross_del"
              // onclick="hitWordUp(5);"
            >
              x
            </span>
            <span
              id="hit_up_737"
              className="cross_del"
              // onclick="hitWordUp(0)"
            >
              ∧
            </span>
            <span
              id="wh_up_737"
              className="fake_link cross_del"
              style={{ color: '#898989', marginRight: 0 }}
              // onclick="javascript:showWordInFrame('blow')"
            >
              wh
            </span>
          </div>
          <div className="box_word_translation" id="wt_737">
            <i>сущ.</i> удар; несчастье, удар судьбы; горный удар; дуновение, порыв ветра
            <br />
            <i>гл.</i>
            дуть, веять (о ветре); гнать (ветром); нестись; играть ; издавать звук <br />
          </div>
          <div className="box_original" id="original_737">
            <p>A cold breeze was blowing hard.</p>
            <p></p>
          </div>
          <div className="box_translation" id="translation_737">
            <p>
              <span> Дул сильный, холодный ветер. </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WordsList;
