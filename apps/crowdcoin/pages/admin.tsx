import type { NextPage, GetStaticProps } from 'next';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { ethers } from 'ethers';
import provider from '../ethereum/provider';
import { MainLayout } from '../src/components/organisms/layouts';
import Typography from '../src/components/atoms/Typography';
import { Button } from '../src/components/atoms/buttons';

import compiledFactory from '../ethereum/build/CampaignFactory.json';

const AdminPage: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [factoryAddress, setFactoryAddress] = useState('');

  const handleDeployFactory = async () => {
    if (provider) {
      try {
        await provider.switchToDefaultChain();

        await provider.requestAccounts();

        const signer = provider.getSigner();

        const campaignFactory = await new ethers.ContractFactory(
          compiledFactory.abi,
          compiledFactory.evm.bytecode,
          signer,
        ).deploy();

        setLoading(true);

        await campaignFactory.deployed();

        setFactoryAddress(campaignFactory.address);
        setLoading(false);
      } catch (err) {
        console.error(err);
        // TODO: display error with snackbar
      }
    } else {
      // TODO: add error notification to install metamask (snackbar)
    }
  };

  return (
    <MainLayout>
      <Typography variant="h4">Admin panel</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography>
            Deploy Campaign Factory to the Rinkeby network. Save received address in environment
          </Typography>
        </Grid>
        <Grid item>
          <Button loading={isLoading} onClick={handleDeployFactory}>
            Deploy
          </Button>
        </Grid>
      </Grid>
      {isLoading && (
        <Typography>Your transaction is processing... It can take to 30 seconds</Typography>
      )}
      {factoryAddress && <Typography>Campaign Factory deployed to {factoryAddress}</Typography>}
    </MainLayout>
  );
};

export default AdminPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const table = (await import(`../src/i18n/locales/${locale}`)).default;
  return { props: { table } };
};
