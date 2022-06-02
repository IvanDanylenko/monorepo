import Layout from '../../components/Layout';

export function Known() {
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
        <a href="/tester/list">Непаханое поле</a> <b>Знакомые слова</b> 
        <a href="/tester/unknown">Незнакомые слова</a> <a href="/tester/clear">Обнуление данных</a> 
      </div>
      <div id="tester">
        <img src="/img/status2.png" style={{ display: 'none' }} />
        <div style={{ margin: '0px 0px 30px 0px' }}>
          Ниже представлен список слов, которые вы отметили как "знакомые". Этот список отображает
          последние 75 слов и большой практической пользы не несёт. Если вы случайно добавили в этот
          список незнакомое вам слово, то вы можете поменять его статус и нажать кнопку "Сохранить
          статусы".
          <br />
          <br /> Всего знакомых слов: 2704
        </div>
        <form method="post" id="tester_form">
          <div className="words_col">
            <input name="words[14181]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">funny</a>
            <br />
            <input name="words[30084]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">please</a>
            <br />
            <input name="words[47258]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">yesterday</a>
            <br />
            <input name="words[15811]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">guess</a>
            <br />
            <input name="words[34625]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">round</a>
            <br />
            <input name="words[16464]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">hate</a>
            <br />
            <input name="words[26806]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">okay</a>
            <br />
            <input name="words[5627]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">cool</a>
            <br />
            <input name="words[18005]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">afternoon</a>
            <br />
            <input name="words[4119]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">clock</a>
            <br />
            <input name="words[47212]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">yeah</a>
            <br />
            <input name="words[14219]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">further</a>
            <br />
            <input name="words[42251]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">tonight</a>
            <br />
            <input name="words[954]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">bomb</a>
            <br />
            <input name="words[48126]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">basically</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[12656]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">fifty</a>
            <br />
            <input name="words[14157]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">fun</a>
            <br />
            <input name="words[16969]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">hi</a>
            <br />
            <input name="words[25955]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">nobody</a>
            <br />
            <input name="words[39561]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">straight</a>
            <br />
            <input name="words[59670]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">unclear</a>
            <br />
            <input name="words[8618]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">absolutely</a>
            <br />
            <input name="words[34098]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">anybody</a>
            <br />
            <input name="words[28604]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">pause</a>
            <br />
            <input name="words[24206]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">mine</a>
            <br />
            <input name="words[38226]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">sorry</a>
            <br />
            <input name="words[21423]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">laughter</a>
            <br />
            <input name="words[30373]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">Poll</a>
            <br />
            <input name="words[11441]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">everybody</a>
            <br />
            <input name="words[21412]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">laugh</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[46196]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">welcome</a>
            <br />
            <input name="words[38134]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">somebody</a>
            <br />
            <input name="words[40970]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">tape</a>
            <br />
            <input name="words[52285]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">weekend</a>
            <br />
            <input name="words[10377]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">accord</a>
            <br />
            <input name="words[1427]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">breath</a>
            <br />
            <input name="words[13715]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">forty</a>
            <br />
            <input name="words[34167]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">anyway</a>
            <br />
            <input name="words[129253]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">definitely</a>
            <br />
            <input name="words[46884]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">wonderful</a>
            <br />
            <input name="words[6885]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">dad</a>
            <br />
            <input name="words[41658]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">thirty</a>
            <br />
            <input name="words[38146]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">somewhere</a>
            <br />
            <input name="words[17810]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">hurt</a>
            <br />
            <input name="words[33726]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">reporter</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[25879]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">nineteen</a>
            <br />
            <input name="words[25764]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">nice</a>
            <br />
            <input name="words[42233]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">tomorrow</a>
            <br />
            <input name="words[40296]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">suppose</a>
            <br />
            <input name="words[17260]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">holiday</a>
            <br />
            <input name="words[42451]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">tourist</a>
            <br />
            <input name="words[40358]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">surprisingly</a>
            <br />
            <input name="words[4545]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">collapse</a>
            <br />
            <input name="words[39947]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">substantially</a>
            <br />
            <input name="words[18177]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">imagery</a>
            <br />
            <input name="words[17145]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">historic</a>
            <br />
            <input name="words[71]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">beneficial</a>
            <br />
            <input name="words[91198]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">flexibility</a>
            <br />
            <input name="words[38752]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">spouse</a>
            <br />
            <input name="words[19989]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">Italian</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[11156]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">equity</a>
            <br />
            <input name="words[42746]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">trauma</a>
            <br />
            <input name="words[558]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">blame</a>
            <br />
            <input name="words[10289]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">edition</a>
            <br />
            <input name="words[33829]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">residential</a>
            <br />
            <input name="words[30324]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">pole</a>
            <br />
            <input name="words[11285]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">essence</a>
            <br />
            <input name="words[10155]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">accommodate</a>
            <br />
            <input name="words[8122]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">deviation</a>
            <br />
            <input name="words[37252]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">simulation</a>
            <br />
            <input name="words[40563]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">switch</a>
            <br />
            <input name="words[41470]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">textbook</a>
            <br />
            <input name="words[4729]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">comet</a>
            <br />
            <input name="words[5004]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">conceive</a>
            <br />
            <input name="words[12663]" type="hidden" defaultValue={1} />
            <img src="/img/status1.png" />
            <a href="#">ad</a>
            <br />
          </div>
          <div className="words_col"></div>
          <div className="clear" />
          <input
            className="green_button"
            type="submit"
            defaultValue="Сохранить статусы"
            style={{ marginTop: 25 }}
          />
        </form>
      </div>
    </Layout>
  );
}

export default Known;
