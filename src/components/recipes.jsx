import React from 'react'
import {
  minValue,
  maxValue,
  number,
  ReferenceField,
  Filter,
  SelectInput,
  ReferenceInput,
  Show,
  NumberInput,
  SimpleShowLayout,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  NumberField,
  List,
  Datagrid,
  TextField,
  Pagination,
  useTranslate,
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import RecipeShowTitle from './recipeViews/recipeShowTitle'
import RecipeShowHeader from './recipeViews/recipeShowHeader'
import RecipeShowRichText from './recipeViews/recipeShowRichText'
import StarRow from './starRow'

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>
}
const validateRating = [number(), minValue(1), maxValue(5)]

const RecipeFilter = (props) => {
  const translate = useTranslate()
  const searchLabel = translate('myroot.search')
  // const extraIngredient = translate('myroot.extra_ingredient')
  // The data provider:
  // https://github.com/Steams/ra-data-hasura-graphql/blob/d65d6326b8d74d7acb85d60f5c60733470c78eba/src/buildVariables.js#L33
  // Transforms filters with multiple items (comma separated) into 'or' queries, while single items are transformed into 'and' queries
  // Using the extra ingredient search therefore forces that ingredient to be present since it is added as a single 'and' query and not just added to the main 'or' query
  // The main search field still needs to match one of title, ingredient and season
  // It's not possible to add multiple search filters with the same source
  // It's not possible to add multiple search filters with the same source in a list, they would be overwritten by the last entry, in the 'or' query
  return (
    <Filter {...props}>
      <TextInput label={searchLabel} source="q" alwaysOn />
      {/* <TextInput label={extraIngredient} source="ingredients" /> */}
      <ReferenceInput source="category_id" reference="categories" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  )
}

const PostPagination = (props) => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

export const RecipeList = (props) => (
  <List {...props} filters={<RecipeFilter />} bulkActionButtons={false} perPage={100} pagination={<PostPagination />}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <StarRow source="rating" />
      <NumberField source="servings" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const RecipeShow = (props) => (
  <Show {...props} title={<PostTitle />}>
    <SimpleShowLayout>
      <RecipeShowTitle source="title" />
      <RecipeShowHeader />
      <RecipeShowRichText source="ingredients" {...props} />
      <RecipeShowRichText source="directions" {...props} />
      <TextField source="season" />
      <TextField source="source" />
    </SimpleShowLayout>
  </Show>
)

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ['clean'],
]

const RecipeForm = () => (
  <SimpleForm>
    <TextInput source="title" />
    <NumberInput source="rating" validate={validateRating} />
    <NumberInput source="servings" />
    <TextInput source="duration_free" />
    <ReferenceInput source="category_id" reference="categories">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <RichTextInput source="ingredients" toolbar={toolbarOptions} />
    <RichTextInput source="directions" toolbar={toolbarOptions} />
    <TextInput source="season" />
    <TextInput source="source" />
  </SimpleForm>
)

export const RecipeEdit = (props) => (
  <Edit {...props} title={<PostTitle />}>
    {RecipeForm()}
  </Edit>
)

export const RecipeCreate = (props) => (
  <Create {...props} title={<PostTitle />}>
    {RecipeForm()}
  </Create>
)
