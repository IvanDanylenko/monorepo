import Layout from '@/components/Layout';
// import { Link } from '@inertiajs/inertia-react';

const Extensions = () => {
  return (
    <Layout>
      <div>
        <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>
        <div id="column_right">
          {/*{ADV_RIGHT_BLOCK}*/}
          <a href="#" id="toTop" className="no_mobile">
            •
          </a>
        </div>
        <div className="help_page">
          <h1>Дополнения</h1>
          <h4>Сканер</h4>
          <p>
            <a href="/tester/list">Сканер</a> — это инструмент, позволяющий определить, насколько
            хорошо вы знаете наиболее часто используемые английские слова. Если вы давно изучаете
            язык, то вы можете использовать его для того, чтобы определить свои пробелы в знании
            слов. Новичкам инструмент будет полезен как помощник, позволяющий приступить к изучению
            самых часто используемых слов, что позволит быстрее научиться читать тексты.
          </p>
          <h4>Англо-русский словарь</h4>
          <p>
            <a href="/dic/content/en_ru">Англо-русский словарь</a> содержит порядка 125 000 слов,
            сотни тысяч примеров и словосочетаний. У всех самых употребляемых слов можно посмотреть
            транскрипцию (американский и английский вариант), прослушать произношение и узнать формы
            слова.
          </p>
          <h4>Русско-английский словарь</h4>
          <p>
            <a href="/dic/content/ru_en">Русско-английский словарь</a> содержит около 120 000 слов.
            Варианты перевода слов на английский язык отсортированы в порядке частоты их
            использования для данного значения. Многие варианты перевода содержат примеры
            использования в виде словосочетаний.
          </p>
          <h4>Адаптированная литература и книги с параллельным переводом</h4>
          <p>
            На сайте{' '}
            <a href="https://paragraph77.net" target="_blank">
              paragraph77.net
            </a>{' '}
            представлена учебная литература, которая поможет вам в изучении языка. Читая эти книги,
            вы сможете автоматически добавлять незнакомые вам слова в упражнения на wooordhunt.ru.
          </p>
          <h4>Мобильное приложение</h4>
          <p>
            Приложение{' '}
            <a
              href="https://play.google.com/store/apps/details?id=onedict.wordhunt.pwa"
              target="_blank"
            >
              WordHunt на GooglePlay
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=onedict.wordhunt.pwa"
              target="_blank"
            >
              <img src="/img/google-play-badge.png" width="140px" alt="google_play" />
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Extensions;
