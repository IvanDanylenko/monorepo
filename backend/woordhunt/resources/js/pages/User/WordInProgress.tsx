import Layout from '@/components/Layout';
import UserMenu from '@/components/UserMenu';

const WordInProgress = () => {
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
            '\n                #user_word {\n                    font-family: serif;\n                    font-size: 14px;\n                    line-height: 180%;\n                }\n\n                #user_word a {\n                    text-decoration: none;\n                    border-bottom: dotted 1px #4f4f4f;\n                }\n\n                #user_word input[type=checkbox] {\n                    margin: 0px 1px 5px 0px;\n                    vertical-align: bottom\n                }\n            ',
        }}
      />
      <UserMenu />
      <div id="admin_content">
        <h2>Слова на изучении</h2>
        <div id="user_word">
          <form method="post">
            <h3>Уровень 0 (50)</h3>
            <input type="checkbox" name="words_for_del[]" defaultValue={171} />
            &nbsp;<a href="#">bet</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={717} />
            &nbsp;<a href="#">bloody</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={737} />
            &nbsp;<a href="#">blow</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={1155} />
            &nbsp;<a href="#">bother</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={5612} />
            &nbsp;<a href="#">cook</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={5941} />
            &nbsp;<a href="#">cough</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={6457} />
            &nbsp;<a href="#">crowd</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={7188} />
            &nbsp;<a href="#">dear</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={9685} />
            &nbsp;<a href="#">dress</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={10397} />
            &nbsp;<a href="#">eighty</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={11008} />
            &nbsp;<a href="#">accuse</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={11555} />
            &nbsp;<a href="#">excite</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={11597} />
            &nbsp;<a href="#">excuse</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={12650} />
            &nbsp;<a href="#">fifteen</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={13482} />
            &nbsp;<a href="#">football</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={13556} />
            &nbsp;<a href="#">forecast</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={14936} />
            &nbsp;<a href="#">glad</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={17562} />
            &nbsp;<a href="#">afraid</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={20473} />
            &nbsp;<a href="#">jump</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={20537} />
            &nbsp;<a href="#">jury</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={21109} />
            &nbsp;<a href="#">lady</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={22586} />
            &nbsp;<a href="#">lovely</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={24839} />
            &nbsp;<a href="#">mortgage</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={25094} />
            &nbsp;<a href="#">mum</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={25123} />
            &nbsp;<a href="#">murder</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={26488} />
            &nbsp;<a href="#">amaze</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={34178} />
            &nbsp;<a href="#">ride</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={34184} />
            &nbsp;<a href="#">anywhere</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={34433} />
            &nbsp;<a href="#">roll</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={35930} />
            &nbsp;<a href="#">secret</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={36536} />
            &nbsp;<a href="#">seventy</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={37055} />
            &nbsp;<a href="#">shut</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={37377} />
            &nbsp;<a href="#">sixty</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={37918} />
            &nbsp;<a href="#">snow</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={38135} />
            &nbsp;<a href="#">somehow</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={39775} />
            &nbsp;<a href="#">studio</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41075} />
            &nbsp;<a href="#">taxi</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41147} />
            &nbsp;<a href="#">arrest</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41396} />
            &nbsp;<a href="#">terrible</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41408} />
            &nbsp;<a href="#">terrorist</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41877} />
            &nbsp;<a href="#">ticket</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={41943} />
            &nbsp;<a href="#">till</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={43364} />
            &nbsp;<a href="#">twelve</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={47049} />
            &nbsp;<a href="#">wow</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={47552} />
            &nbsp;<a href="#">awful</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={47872} />
            &nbsp;<a href="#">ban</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={48111} />
            &nbsp;<a href="#">baseball</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={56522} />
            &nbsp;<a href="#">totally</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={246571} />
            &nbsp;<a href="#">mom</a>
            <input type="checkbox" name="words_for_del[]" defaultValue={540128} />
            &nbsp;<a href="#">anymore</a>
            <br />
            <br />
            <input
              type="submit"
              className="green_button"
              name="del_words"
              defaultValue="Удалить выбранные"
            />
            {/* <div class="clear"></div> */}
          </form>
        </div>
        <div style={{ float: 'right', marginTop: '-30px' }}>
          <a href="/user/clearedulist">Удалить все слова</a>
        </div>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default WordInProgress;
