import { FC } from 'react';
import { Create } from '@ivan/ra-bridge';
import { WordForm } from './WordForm';

export const WordCreate: FC = () => {
  return (
    <Create>
      <WordForm />
    </Create>
  );
};
