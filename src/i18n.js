import danishMessages from 'ra-language-danish'

// Add missing translations to the Danish standard
danishMessages.ra.navigation.page_rows_per_page = 'Rækker per side'
danishMessages.ra.navigation.skip_nav = 'Skip nav' // not sure what this is
danishMessages.ra.auth.user_menu = 'Profil'

export const danishMsgs = danishMessages

export const domainMessages = {
  resources: {
    recipes: {
      name: 'Opskrift |||| Opskrifter',
      fields: {
        title: 'Titel',
        rating: 'Bedømmelse',
        servings: 'Antal personer',
        category_id: 'Kategori',
        duration_free: 'Tid',
        ingredients: 'Ingredienser',
        directions: 'Fremgangsmåde',
        season: 'Sæson',
        source: 'Kilde',
      },
    },
    categories: {
      name: 'Kategori |||| Kategorier',
      fields: {
        name: 'Navn',
        created_at: 'Oprettet d.',
        updated_at: 'Opdateret d.',
      },
    },
  },
  myroot: {
    servings: 'personer',
    search: 'Søg',
  },
}
