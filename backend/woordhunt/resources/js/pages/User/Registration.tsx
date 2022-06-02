import Layout from '@/components/Layout';

const Registration = () => {
  return (
    <Layout>
      <div id="column_left">{/*{ADV_LEFT_BLOCK}*/}</div>{' '}
      <div id="column_right">
        {/*{ADV_RIGHT_BLOCK}*/}
        <a href="#" id="toTop" className="no_mobile">
          •
        </a>
      </div>
      <br />
      <h2>Регистрация на сайте</h2>
      <br />
      <br />
      {/* <div class="notice n_yellow">
	Зарегистрировавшись на сайте вы сможете:
	<ul style="margin: 5px 0px 5px 0px; line-height: 150%">
		<li>&ensp;- пополнять свой словарный запас с помощью <a href="/page/view/ex">упражнений</a></li>
		<li>&ensp;- делать закладки в книгах на <a href="https://paragraph77.net" target="_blank">Paragraph77.net</a></li>
		<li>&ensp;- сохранять текст в <a href="/editor/fx">WooordHunt-редакторе</a></li>
	</ul>
</div>
 */}
      <div className="form" style={{ marginTop: 25, textAlign: 'center' }}>
        <form id="user-form" action="/user/registration" method="post">
          {/* <p class="note">Fields with <span class="required">*</span> are required.</p> */}
          <div className="row">
            Напишите адрес своей электронной почты (e-mail)
            <br />
            <br />
            <input
              // required="required"
              name="User[email]"
              id="User_email"
              type="email"
            />{' '}
            <input type="hidden" defaultValue="IFt92GN" name="ccode" id="ccode" />{' '}
          </div>
          <div className="row buttons" style={{ marginTop: 20 }}>
            <input
              className="green_button"
              type="submit"
              name="yt0"
              defaultValue="Зарегистрироваться"
            />{' '}
          </div>
        </form>
        <br />
        <div style={{ textAlign: 'left', fontSize: 11, marginLeft: 15 }}>
          На указанный вами адрес будет отправлено письмо с данными, необходимыми для входа на сайт.
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
