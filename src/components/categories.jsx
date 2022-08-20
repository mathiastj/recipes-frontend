import React from 'react'
import {
  DateField,
  Show,
  SimpleShowLayout,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  List,
  Datagrid,
  TextField,
} from 'react-admin'

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
)

export const CategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
    </Datagrid>
  </List>
)

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
)

export const CategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
)
