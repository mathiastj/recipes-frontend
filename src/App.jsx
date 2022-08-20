import MenuBookIcon from '@mui/icons-material/MenuBook'
import CategoryIcon from '@mui/icons-material/Category'
import React from 'react'
// import buildHasuraProvider from 'ra-data-hasura'
import { Admin, Resource } from 'react-admin'
// import ApolloClient from 'apollo-boost'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { domainMessages, danishMsgs } from './i18n'
import { dataProvider } from './dataProvider'
import { authProvider } from './supabaseAuthProvider'
import { authRoutes, LoginPage } from './broken-deps/ra-supabase'
import { RecipeList, RecipeEdit, RecipeCreate, RecipeShow } from './components/recipes'
import { CategoryCreate, CategoryList, CategoryEdit, CategoryShow } from './components/categories'
// import authProvider from './authProvider'

const messages = { ...danishMsgs, ...domainMessages }
const i18nProvider = polyglotI18nProvider(() => messages)

// const preAuthDataProvider = {
//   getList: () => Promise.resolve({ data: [] }),
//   getOne: () => Promise.resolve(null),
//   getMany: () => Promise.resolve(null),
//   getManyReference: () => Promise.resolve(null),
//   create: () => Promise.resolve(null),
//   update: () => Promise.resolve(null),
//   updateMany: () => Promise.resolve(null),
//   delete: () => Promise.resolve(null),
//   deleteMany: () => Promise.resolve(null),
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = { dataProvider: null }
//   }

// async componentDidMount() {
//   const key = localStorage.getItem('key')
//   if (!key) {
//     this.setState({ dataProvider: preAuthDataProvider })
//     return
//   }
//   const headers = {
//     'content-type': 'application/json',
//     'x-hasura-admin-secret': key,
//   }
//   const client = new ApolloClient({
//     uri: 'https://floating-meadow-53258.herokuapp.com/v1/graphql',
//     headers,
//   })

//   const dataProvider = await buildHasuraProvider({ client })
//   this.setState({ dataProvider })
// }

// async componentDidUpdate() {
//   const key = localStorage.getItem('key')
//   const { dataProvider } = this.state
//   if (dataProvider === null && key) {
//     const headers = {
//       'content-type': 'application/json',
//       'x-hasura-admin-secret': key,
//     }
//     const client = new ApolloClient({
//       uri: 'https://floating-meadow-53258.herokuapp.com/v1/graphql',
//       headers,
//     })

//     const newDataProvider = await buildHasuraProvider({ client })
//     // eslint-disable-next-line react/no-did-update-set-state
//     this.setState({ dataProvider: newDataProvider })
//   }
// }

//   render() {
//     // const { dataProvider } = this.state

//     // if (!dataProvider) {
//     //   return <div>Loading</div>
//     // }

//     return (
//       <Admin
//         dataProvider={dataProvider}
//         authProvider={authProvider}
//         i18nProvider={i18nProvider}
//         loginPage={LoginPage}
//         customRoutes={authRoutes}
//       >
//         <Resource
//           name="recipes"
//           show={RecipeShow}
//           list={RecipeList}
//           edit={RecipeEdit}
//           create={RecipeCreate}
//           icon={MenuBookIcon}
//         />
//         <Resource
//           name="categories"
//           show={CategoryShow}
//           list={CategoryList}
//           edit={CategoryEdit}
//           create={CategoryCreate}
//           icon={CategoryIcon}
//         />
//       </Admin>
//     )
//   }
// }

// export default App

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={authRoutes}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
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
