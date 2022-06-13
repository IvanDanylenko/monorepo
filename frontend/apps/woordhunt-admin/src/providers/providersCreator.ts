import { dataProviderCreator } from '@ivan/ra-bridge';

export const providersCreator = () => {
  return {
    dataProvider: dataProviderCreator(),
  };
};
