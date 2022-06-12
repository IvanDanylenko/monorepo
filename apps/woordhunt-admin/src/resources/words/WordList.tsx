import { FC } from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from '@ivan/ra-bridge';

export const WordList: FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="word" />
        <TextField source="pinin" />
        <TextField source="translation" />
        <TextField source="position" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
