import { Admin, Resource, queryClient } from '@ivan/ra-bridge';
import { providersCreator } from './providers';
import words from './resources/words';

const providers = providersCreator();

export const App = () => {
  return (
    <Admin {...providers} queryClient={queryClient} disableTelemetry>
      <Resource name="words" {...words} />
    </Admin>
  );
};
