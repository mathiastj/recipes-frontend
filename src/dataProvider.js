import { supabaseDataProvider } from './fixed-data-provider'
import { supabase } from './supabase'

const resources = {
  categories: ['id', 'name', 'created_at', 'updated_at'],
  recipes: {
    fullTextSearchFields: ['title', 'ingredients', 'season'],
    fields: [
      'id',
      'title',
      'ingredients',
      'directions',
      'rating',
      'created_at',
      'updated_at',
      'servings',
      'category_id',
      'duration',
      'duration_free',
      'source',
      'season',
    ],
  },
}

export const dataProvider = supabaseDataProvider(supabase, resources)
