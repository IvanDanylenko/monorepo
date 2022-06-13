import { FC } from 'react';
import { Edit } from '@ivan/ra-bridge';
import { WordForm } from './WordForm';

export const WordEdit: FC = () => {
  return (
    <Edit>
      <WordForm />
    </Edit>
  );
};
