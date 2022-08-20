import danishMessages from 'ra-language-danish'

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
    extra_ingredient: 'Ekstra ingrediens',
  },
}
