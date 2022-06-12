import { FC } from 'react';
import { SimpleForm, TextInput } from '@ivan/ra-bridge';

export const WordForm: FC = () => {
  return (
    <SimpleForm>
      <TextInput source="word" />
      <TextInput source="pinin" />
      <TextInput source="translation" />
      <TextInput source="position" />
    </SimpleForm>
  );
};
