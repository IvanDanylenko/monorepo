import Layout from '@/components/Layout';
// import { Link } from '@inertiajs/inertia-react';

const Exercises = () => {
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
        dangerouslySetInnerHTML={{
          __html:
            '\n                .ex-buttom {\n                    width: 165px;\n                    padding: 10px;\n                    text-align: center;\n                    color: #fff;\n                    font-weight: bold;\n                    display: inline-block;\n                    font-size: 13px;\n                    margin: 0px 33px 0px 33px\n                }\n\n                .exs {\n                    background-color: #84B600;\n                    background-image: -webkit-linear-gradient(top, #9FD200, #84B600);\n                    text-shadow: #76A000 1px 1px 1px;\n                    border-color: #E9EAB3;\n                }\n\n                .pause_off {\n                    background-color: #2196F3;\n                    background-image: -webkit-linear-gradient(top, #00BCD4, #2196F3);\n                    text-shadow: #0b7dd8 1px 1px 1px;\n                    border-color: #5fb8ff;\n                    margin-bottom: 25px\n                }\n\n                .pause_on {\n                    background-color: #d63c0c;\n                    background-image: -webkit-linear-gradient(top, #FF9800, #FF5722);\n                    text-shadow: #d63c0c 1px 1px 1px;\n                    border-color: #ffc107;\n                    margin-bottom: 25px\n                }\n\n                .wait {\n                    background-color: #797877;\n                    background-image: -webkit-linear-gradient(top, #c3c3c3, #888888);\n                    text-shadow: #797877 1px 1px 1px;\n                    border-color: #cccccc;\n                    margin-bottom: 25px\n                }\n\n                .pause_info {\n                    font: 13px arial !important;\n                    line-height: 150%;\n                    border: dashed 1px #FF5722;\n                    border-bottom: dashed 1px #FF5722;\n                    margin-left: 33px;\n                    padding: 10px 10px 10px 10px;\n                }\n\n                .help_page .examples {\n                    font: 13px Arial;\n                    line-height: 170%;\n                    margin: 10px 0px 10px 15px;\n                    color: green;\n                }\n\n                .help_page .examples span {\n                    color: #1A1A1A;\n                }\n            ',
        }}
      />
      <div className="help_page">
        <h1>Упражнения для запоминания английских слов</h1>
        <div style={{ margin: '30px 0px 30px 0px' }}>
          <a href="/edu/ex/1" style={{ textDecoration: 'none' }}>
            <span className="simple_btn ex-buttom exs">
              Упражнение
              <br />
              "Вспомнить всё"
            </span>
          </a>
          <a href="/edu/ex/3" style={{ textDecoration: 'none' }}>
            <span className="simple_btn ex-buttom exs">
              Упражнение
              <br />
              "Биатлон"
            </span>
          </a>
          <a href="/edu/ex/2" style={{ textDecoration: 'none' }}>
            <span className="simple_btn ex-buttom exs">
              Упражнение
              <br />
              "Лента"
            </span>
          </a>
        </div>
        <div style={{ margin: '30px 0px 30px 0px' }}>
          <span
            id="start_button"
            style={{ display: 'none' }}
            className="simple_btn ex-buttom pause_off"
            // onclick="EduStartStop('start')"
            data-action="start"
          >
            Возобновить
            <br /> упражнения
          </span>
          <span
            id="stop_button"
            className="simple_btn ex-buttom pause_on"
            // onclick="EduStartStop('stop')"
            data-action="stop"
          >
            Поставить
            <br /> на паузу
          </span>
          <span id="wait_button" style={{ display: 'none' }} className="simple_btn ex-buttom wait">
            &nbsp;
            <br />
            ...
          </span>
          <p className="pause_info">
            Если вы планируете сделать перерыв в работе с упражнениями, на несколько дней или
            недель, то вы можете нажать кнопку "Поставить на паузу". Это позволит вам избежать
            ситуации, когда после возвращения к упражнениям после длительного перерыва, вы
            обнаружите слишком большое количество слов в ваших упражнениях, которые скопились там с
            разных уровней изучения.
          </p>
        </div>
        <div className="info_block">
          <h2>Ваша текущая статистика</h2>
          <div id="today_words_stat" className="left_border arial" style={{ float: 'left' }}>
            Кол-во слов по уровням: <br />
            <div style={{ margin: '8px 0px 10px 0px' }}>
              <img src="/img/lvl_0.gif" />
              <span className="figure">
                : <a href="/user/wordinprogress">50</a>
                <br />
                <span>
                  <img src="/img/lvl_1.gif" />
                  <span className="figure">
                    : <a href="/user/wordinprogress">0</a>
                    <br />
                    <span>
                      <img src="/img/lvl_2.gif" />
                      <span className="figure">
                        : <a href="/user/wordinprogress">0</a>
                        <br />
                        <span>
                          <img src="/img/lvl_3.gif" />
                          <span className="figure">
                            : <a href="/user/wordinprogress">0</a>
                            <br />
                            <span>
                              <img src="/img/lvl_4.gif" />
                              <span className="figure">
                                : <a href="/user/wordinprogress">0</a>
                                <br />
                                <span>
                                  <img src="/img/lvl_5.gif" />
                                  <span className="figure">
                                    : <a href="/user/wordinprogress">0</a>
                                    <br />
                                    <span></span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            Выученных : <a href="/user/worddone">2700</a>
          </div>
          <div
            id="today_words_done"
            className="left_border arial"
            style={{ float: 'left', margin: '0px 0px 0px 100px' }}
          >
            Сегодня переведены на след. уровень 0 слов(а): <br />
            <div style={{ maxHeight: 137, overflow: 'auto', margin: '10px 0px 0px 0px' }}></div>
          </div>
          <div className="clear" />
          <br />
        </div>
        <h4>Повторение + примеры использования = хороший результат</h4>
        <p>
          В основе упражнений лежат два метода запоминания новых слов. Метод интервальных
          повторений, который позволяет реализовать известную многим пословицу: "Повторение - мать
          учения". И метод, в котором используют примеры употребления изучаемого слова. Всего на
          сайте представлены три упражнения: <a href="/edu/ex/1">Вспомнить всё</a>,{' '}
          <a href="/edu/ex/3">Биатлон</a> и <a href="/edu/ex/2">Лента</a>.
        </p>
        <h4>Гибкость в обучении</h4>
        <p>Для получения результата вам достаточно выбрать 1-2 упражнения и заниматься с ними.</p>
        <p>
          Вы можете сделать перерыв на несколько дней без большого ущерба учебному процессу. Но при
          этом не забывайте, что ежедневные занятия дадут наилучший результат.
        </p>
        <h4>Уровни изучения / интервальные повторения</h4>
        <p>
          Уровни изучения помогают реализовать метод интервальных повторений, который применяется
          для запоминания информации. В упражнениях он реализован следующим образом: когда вы
          начинаете учить слово, ему присваивается нулевой уровень. После того как вы переводите
          слово на первый уровень, оно "исчезнет" из ваших упражнений и появится в них снова через 3
          календарных дня. При переводе слова на 2 уровень оно вновь появится в упражнениях через 6
          дней. Интервал, через который слово появится вновь, будет все время увеличиваться. Всего 6
          уровней изучения слова, после прохождения которых слово будет считаться выученным.
          <br />
          <br />
          Ниже представлен полный список уровней и дней, на которые слово "исчезает":
          <br />
          &nbsp; 1-й уровень — исчезнет на 3 дня;
          <br />
          &nbsp; 2-й уровень — исчезнет на 6 дней;
          <br />
          &nbsp; 3-й уровень — на 12 дней;
          <br />
          &nbsp; 4-й уровень — на 24 дня;
          <br />
          &nbsp; 5-й уровень — на 48 дней.
          <br />
          После перевода слова на 6-й уровень слово будет отмечено как выученное и больше не будет
          появляться в упражнениях.
        </p>
        <h4>Примеры использования слов</h4>
        <p>
          Более 190 000 примеров использования слов, которые вы будете видеть в каждом из
          предлагаемых упражнений, помогут вам в изучении новых слов. Большинство слов вам даже не
          придётся "зубрить". Достаточно будет просто читать (про себя или вслух) примеры, и очень
          скоро вы будете помнить несколько вариантов использования слова. Например, для того что бы
          выучить слово "fright", вы можете использовать следующие примеры:
        </p>
        <p className="examples">
          I got an awful <b>fright</b> when I realised how much money I owed.{' '}
          <span>— Я ужасно испугался, когда я понял, сколько денег я должен.</span>
          <br /> He was shaking with <b>fright</b>. <span>— Он дрожал от страха.</span>
          <br /> Her eyes were wide with <b>fright</b>.{' '}
          <span>— Ее глаза расширились от испуга.</span>
          <br />
        </p>
        <p>
          Использование примеров делает процесс запоминания слов намного естественней, что
          сказывается на качестве и скорости изучения слова.
        </p>
        <br />
        <br />
        <h2>Частые вопросы</h2>
        <h4>Как добавлять слова в упражнения?</h4>
        <p>
          Для добавления слова в упражнения вы можете использовать следующие способы:
          <br /> 1. На странице слова вы можете увидеть знак{' '}
          <img width="12px" src="/img/svg/pi0_v3.svg" />, кликнув по которому, можно добавить слово
          в упражнение вместе с одним случайным примером.
          <br /> <br /> 2. Вы также можете самостоятельно выбирать примеры/словосочетания (это можно
          сделать в любой момент). Для этого на странице слова перейдите в раздел "Примеры" /
          "Словосочетания" и напротив понравившегося вам примера нажмите знак{' '}
          <img width="12px" src="/img/svg/pi0_v3.svg" />
          (в этом случае кликать по <img width="12px" src="/img/svg/pi0_v3.svg" /> в верхней части
          страницы необязательно, т.к. при добавлении примера слово добавляется автоматически). Вы
          можете выбрать несколько примеров.
        </p>
        <h4>Как удалить слово, если я больше не хочу его учить?</h4>
        <p>
          Как такового удаления слов нет, но вы можете присвоить ему статус "выученное" и оно больше
          не будет появляться в ваших упражнениях. Сделать это можно следующими способами:
          <br /> - в упражнении "Вспомнить всё" и "Биатлон" кликните по иконке с крестиком (в правом
          нижнем углу), когда в упражнении появится слово, которое вы хотите удалить;
          <br /> - в упражнении "Лента" сначала кликните по слову, которое хотите удалить, а затем
          по появившемуся рядом с этим словом крестик.
          <br /> В будущем удалённые слова вы снова сможете добавить в упражнения.
        </p>
        <h4>Как перевести слово на новый уровень изучения?</h4>
        <p>
          - В упражнении "Вспомнить всё": нужно выбрать вариант "Хорошо помню" в то время, когда
          слово появится в упражнении.
          <br /> - В упражнении "Биатлон": в настройках поставить галочку "Переводить слова на
          следующий уровень" (при этом слово должно быть напечатано без ошибок и подсказок).
          <br /> - В упражнении "Лента": кликнуть по нужному слову, а затем на иконку со стрелочкой
          вверх.
        </p>
        <h4>
          Куда пропадает слово, после того как я нажимаю кнопку "Хорошо помню" (перевожу на новый
          уровень изучения)?
        </h4>
        <p>
          Не переживайте, оно не исчезает совсем. Оно переходит на следующий уровень изучения и
          появится у вас в упражнении снова, через несколько дней, в зависимости от того на каком
          уровне изучения это слово находится.
        </p>
        <h4>Как можно добавить собственный пример использования слова?</h4>
        <p>
          Для этого вам необходимо воспользоваться ссылкой "Добавить пример", которая находится в
          нижней части страницы (карточке слова). Также вы можете добавить пример непосредственно из
          упражнения, для этого вам нужно сначала нажать на ссылку "WH", а в появившейся карточке на
          ссылку "Добавить пример". Обращаем ваше внимание, что добавить свой пример можно только к
          тому слову, которое ранее вы добавили в упражнение стандартным способом (т.е к тому
          которое уже находится у вас в упражнениях). Удалить добавленные вами примеры вы можете в
          личном кабинете.
        </p>
        <h4>Как лучше выбирать слова для изучения?</h4>
        <p>
          - В соответствии с вашим учебным планом.
          <br /> - Можно воспользоваться нашим сервисом <a href="/tester/list">Сканер</a> и учить
          слова начиная с самых часто используемых.
          <br /> - Любым другим удобным для вас способом.
        </p>
        <h4>Каким образом слова получают статус выученные?</h4>
        <p>
          Слово получает статус "выученное" после того, как вы пройдёте все уровни изучения слова.
          Но если по каким-либо причинам вы хотите ускорить этот процесс, то всегда можете присвоить
          ему статус "выученное" вне зависимости от того, на каком уровне изучения оно находится.
          Как это сделать, читайте в разделе "
          <a href="#how_to_del_word">Как удалить слово, если я больше не хочу его учить?</a>"
        </p>
        <h4>Есть ли ограничения на количество изучаемых слов?</h4>
        <p>Никаких ограничений нет.</p>
        <h4>Есть ли у вас мобильное приложение или мобильная версия сайта?</h4>
        <p>
          В настоящий момент есть только мобильная версия сайта. Она хорошо работает на всех
          платформах, практически во всех браузерах. Если мобильная версия сайта не работает у вас в
          каком либо браузере, пожалуйста, сообщите нам, постараемся помочь.
        </p>
        <br />
        <p>
          Напоминаем вам, что в каждом упражнении есть раздел "Помощь", где вы также можете получить
          ответы на свои вопросы. A для упражнений "Вспомнить всё" и "Биатлон" всегда доступны
          демонстрационные версии с подсказками.
          <br />
          <a href="/edu/ex/1?demo">демо-версия для упражнения "Вспомнить всё"</a> <br />
          <a href="/edu/ex/3?demo">демо-версия для упражнения "Биатлон"</a>
        </p>
      </div>
    </Layout>
  );
};

export default Exercises;