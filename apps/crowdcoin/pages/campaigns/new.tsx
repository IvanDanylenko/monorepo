import type { NextPage, GetStaticProps } from 'next';
import CampaignCreateTemplate from '../../src/components/templates/CampaignCreateTemplate';

const NewCampaignPage: NextPage = () => {
  return <CampaignCreateTemplate />;
};

export default NewCampaignPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const table = (await import(`../../src/i18n/locales/${locale}`)).default;
  return { props: { table } };
};
