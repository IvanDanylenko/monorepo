import Layout from '../../components/Layout';

export function List() {
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
        <b>Непаханое поле</b>&ensp;<a href="/tester/known">Знакомые слова</a>&ensp;
        <a href="/tester/unknown">Незнакомые слова</a>&ensp;
        <a href="/tester/clear">Обнуление данных</a>&ensp;
      </div>
      <div id="tester">
        <img src="/img/status2.png" style={{ display: 'none' }} />
        <div style={{ margin: '0px 0px 20px 0px' }} id="link_set" className="notice n_grey">
          <a href="/data/help/status0.html" className="help_link">
            Помощь
          </a>
          &ensp;<span id="total_status">Отметить все как:</span>{' '}
          <img id="total_status_1" src="/img/status1.png" />
          &ensp;или&ensp;
          <img id="total_status_2" src="/img/status2.png" />
        </div>
        <form method="post" id="tester_form" onSubmit={(e) => e.preventDefault()}>
          <div className="words_col">
            <input name="words[36996]" id="36996" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">shower</a>
            <sub>1306</sub>
            <br />
            <input name="words[20350]" id="20350" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">joke</a>
            <br />
            <input name="words[22709]" id="22709" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">lunch</a>
            <br />
            <input name="words[2265]" id="2265" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">caller</a>
            <br />
            <input name="words[27813]" id="27813" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">pack</a>
            <br />
            <input name="words[37088]" id="37088" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">sick</a>
            <br />
            <input name="words[12753]" id="12753" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">finance</a>
            <br />
            <input name="words[5809]" id="5809" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">correspondent</a>
            <br />
            <input name="words[540351]" id="540351" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">hopefully</a>
            <br />
            <input name="words[42074]" id="42074" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">tire</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[31688]" id="31688" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">protest</a>
            <br />
            <input name="words[38858]" id="38858" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">square</a>
            <br />
            <input name="words[42685]" id="42685" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">translator</a>
            <br />
            <input name="words[22119]" id="22119" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">album</a>
            <br />
            <input name="words[40293]" id="40293" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">supporter</a>
            <br />
            <input name="words[10511]" id="10511" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">eleven</a>
            <br />
            <input name="words[45240]" id="45240" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">vice</a>
            <br />
            <input name="words[26646]" id="26646" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">odd</a>
            <br />
            <input name="words[17352]" id="17352" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">honest</a>
            <br />
            <input name="words[20714]" id="20714" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">kick</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[45822]" id="45822" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">wash</a>
            <br />
            <input name="words[13081]" id="13081" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">flat</a>
            <br />
            <input name="words[2821]" id="2821" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">cat</a>
            <br />
            <input name="words[4432]" id="4432" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">coffee</a>
            <br />
            <input name="words[540401]" id="540401" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">blog</a>
            <br />
            <input name="words[32386]" id="32386" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">quiet</a>
            <br />
            <input name="words[36859]" id="36859" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">shock</a>
            <br />
            <input name="words[20935]" id="20935" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">knock</a>
            <br />
            <input name="words[34172]" id="34172" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">rid</a>
            <br />
            <input name="words[29190]" id="29190" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">personally</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[33969]" id="33969" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">retire</a>
            <br />
            <input name="words[15462]" id="15462" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">advertise</a>
            <br />
            <input name="words[41089]" id="41089" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">tea</a>
            <br />
            <input name="words[6530]" id="6530" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">cry</a>
            <br />
            <input name="words[39589]" id="39589" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">strange</a>
            <br />
            <input name="words[439]" id="439" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">birthday</a>
            <br />
            <input name="words[43208]" id="43208" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">tune</a>
            <br />
            <input name="words[1585]" id="1585" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">broadcast</a>
            <br />
            <input name="words[1432]" id="1432" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">breathe</a>
            <br />
            <input name="words[11446]" id="11446" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">everywhere</a>
            <br />
          </div>
          <div className="words_col">
            <input name="words[30511]" id="30511" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">pop</a>
            <br />
            <input name="words[23556]" id="23556" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">mayor</a>
            <br />
            <input name="words[37321]" id="37321" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">sir</a>
            <br />
            <input name="words[44686]" id="44686" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">upset</a>
            <br />
            <input name="words[37754]" id="37754" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">smart</a>
            <br />
            <input name="words[45668]" id="45668" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">wake</a>
            <br />
            <input name="words[20085]" id="20085" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">jail</a>
            <br />
            <input name="words[36868]" id="36868" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">shoe</a>
            <br />
            <input name="words[18292]" id="18292" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">impeachment</a>
            <br />
            <input name="words[6232]" id="6232" type="hidden" defaultValue={0} />
            <img src="/img/status0.png" />
            <a href="#">crazy</a>
            <sub>1487</sub>
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

export default List;
