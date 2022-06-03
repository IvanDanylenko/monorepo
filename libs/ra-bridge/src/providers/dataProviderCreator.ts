import { dataProviderCreator as raDataProviderCreator, DataProvider } from 'react-admin';
import { fetchClient } from './fetchClient';

export const dataProviderCreator = (): DataProvider => {
  return raDataProviderCreator({ fetchClient });
};
