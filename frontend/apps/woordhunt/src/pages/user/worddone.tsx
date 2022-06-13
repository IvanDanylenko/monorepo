import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const WordDone = () => {
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
            '\n                #years {\n                    margin: 10px 0px 10px 0px;\n                    font-family: serif;\n                    background-color: #FFDCA9;\n                    border-radius: 3px;\n                    padding: 7px\n                }\n\n                #user_word {\n                    font-family: serif;\n                    font-size: 14px;\n                    line-height: 180%;\n                }\n\n                #user_word a {\n                    text-decoration: none;\n                    border-bottom: dotted 1px #4f4f4f;\n                }\n\n                #user_word input[type=checkbox] {\n                    margin: 0px 1px 5px 0px;\n                    vertical-align: bottom\n                }\n            ',
        }}
      />
      <UserMenu />
      <div id="admin_content">
        <h2>Выученные слова</h2>
        <div id="years">
          Год: 
          <a href="?year=2018">2018</a> <a href="?year=2019">2019</a> <a href="?year=2020">2020</a> 
          <b>2021</b> 
        </div>
        <div id="user_word">
          <form method="post">
            <h3>2021-03 (50)</h3>
            <input type="checkbox" name="words_for_del[]" defaultValue={42251} />
            &nbsp;<a href="#">tonight</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={25955} />
            &nbsp;<a href="#">nobody</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={47212} />
            &nbsp;<a href="#">yeah</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={46884} />
            &nbsp;<a href="#">wonderful</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={129253} />
            &nbsp;<a href="#">definitely</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={8618} />
            &nbsp;<a href="#">absolutely</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={46196} />
            &nbsp;<a href="#">welcome</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={6885} />
            &nbsp;<a href="#">dad</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={13715} />
            &nbsp;<a href="#">forty</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={25764} />
            &nbsp;<a href="#">nice</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={25879} />
            &nbsp;<a href="#">nineteen</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={47258} />
            &nbsp;<a href="#">yesterday</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={59670} />
            &nbsp;<a href="#">unclear</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={48126} />
            &nbsp;<a href="#">basically</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={11441} />
            &nbsp;<a href="#">everybody</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={12656} />
            &nbsp;<a href="#">fifty</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={42233} />
            &nbsp;<a href="#">tomorrow</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={954} />
            &nbsp;<a href="#">bomb</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={1427} />
            &nbsp;<a href="#">breath</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={10377} />
            &nbsp;<a href="#">accord</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={41658} />
            &nbsp;<a href="#">thirty</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={52285} />
            &nbsp;<a href="#">weekend</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={4119} />
            &nbsp;<a href="#">clock</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={5627} />
            &nbsp;<a href="#">cool</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={26806} />
            &nbsp;<a href="#">okay</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={28604} />
            &nbsp;<a href="#">pause</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={14219} />
            &nbsp;<a href="#">further</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={15811} />
            &nbsp;<a href="#">guess</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={16464} />
            &nbsp;<a href="#">hate</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={16969} />
            &nbsp;<a href="#">hi</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={40970} />
            &nbsp;<a href="#">tape</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={17260} />
            &nbsp;<a href="#">holiday</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={17810} />
            &nbsp;<a href="#">hurt</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={18005} />
            &nbsp;<a href="#">afternoon</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={21412} />
            &nbsp;<a href="#">laugh</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={21423} />
            &nbsp;<a href="#">laughter</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={14181} />
            &nbsp;<a href="#">funny</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={14157} />
            &nbsp;<a href="#">fun</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={40296} />
            &nbsp;<a href="#">suppose</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={38226} />
            &nbsp;<a href="#">sorry</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={30084} />
            &nbsp;<a href="#">please</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={38146} />
            &nbsp;<a href="#">somewhere</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={30373} />
            &nbsp;<a href="#">Poll</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={38134} />
            &nbsp;<a href="#">somebody</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={34625} />
            &nbsp;<a href="#">round</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={34167} />
            &nbsp;<a href="#">anyway</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={33726} />
            &nbsp;<a href="#">reporter</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={39561} />
            &nbsp;<a href="#">straight</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={24206} />
            &nbsp;<a href="#">mine</a> 
            <input type="checkbox" name="words_for_del[]" defaultValue={34098} />
            &nbsp;<a href="#">anybody</a> 
            <br />
            <br />
            <input
              type="submit"
              className="green_button"
              name="del_words"
              defaultValue="Удалить выбранные"
            />
          </form>
        </div>
      </div>
      <div className="clear" />
    </Layout>
  );
};

export default WordDone;
