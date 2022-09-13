import MenuBookIcon from '@material-ui/icons/MenuBook'
import CategoryIcon from '@material-ui/icons/Category'
import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { authRoutes, LoginPage } from 'ra-supabase'
import { dataProvider } from './dataProvider'
import { domainMessages, danishMsgs } from './i18n'
import { RecipeList, RecipeEdit, RecipeCreate, RecipeShow } from './components/recipes'
import { CategoryCreate, CategoryList, CategoryEdit, CategoryShow } from './components/categories'
import { authProvider } from './supabaseAuthProvider'

const messages = { ...danishMsgs, ...domainMessages }
const i18nProvider = polyglotI18nProvider(() => messages)

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        customRoutes={authRoutes}
        loginPage={LoginPage}
      >
        <Resource
          name="recipes"
          show={RecipeShow}
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          icon={MenuBookIcon}
        />
        <Resource
          name="categories"
          show={CategoryShow}
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          icon={CategoryIcon}
        />
      </Admin>
    )
  }
}

export default App
