export const supabaseDataProvider = (client, resources) => ({
  getList: async (resource, params) => {
    const resourceOptions = getResourceOptions(resource, resources)
    return getList({ client, resource, resourceOptions, params })
  },
  getOne: async (resource, { id }) => {
    const resourceOptions = getResourceOptions(resource, resources)

    const { data, error } = await client
      .from(resourceOptions.table)
      .select(resourceOptions.fields.join(', '))
      .match({ id })
      .single()

    if (error) {
      throw error
    }

    if (resourceOptions.primaryKey === 'id') {
      return { data }
    }

    return { ...data, id: data[resourceOptions.primaryKey] }
  },
  getMany: async (resource, { ids }) => {
    const resourceOptions = getResourceOptions(resource, resources)

    const { data, error } = await client
      .from(resourceOptions.table)
      .select(resourceOptions.fields.join(', '))
      .in('id', ids)

    if (error) {
      throw error
    }
    return { data: data ?? [] }
  },
  getManyReference: async (resource, originalParams) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { target, id } = originalParams
    const params = {
      ...originalParams,
      filter: { ...originalParams.filter, [target]: id },
    }
    return getList({ client, resource, resourceOptions, params })
  },
  create: async (resource, { data }) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { data: record, error } = await client.from(resourceOptions.table).insert(data).single()

    if (error) {
      throw error
    }

    if (resourceOptions.primaryKey === 'id') {
      return { data: record }
    }

    return { ...record, id: record[resourceOptions.primaryKey] }
  },
  update: async (resource, { id, data }) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { data: record, error } = await client.from(resourceOptions.table).update(data).match({ id }).single()

    if (error) {
      throw error
    }

    if (resourceOptions.primaryKey === 'id') {
      return { data: record }
    }

    return { ...record, id: record[resourceOptions.primaryKey] }
  },
  updateMany: async (resource, { ids, data }) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { data: records, error } = await client.from(resourceOptions.table).update(data).in('id', ids)

    if (error) {
      throw error
    }
    return {
      data: records?.map((record) => record[resourceOptions.primaryKey]),
    }
  },
  delete: async (resource, { id }) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { data: record, error } = await client.from(resourceOptions.table).delete().match({ id }).single()

    if (error) {
      throw error
    }

    if (resourceOptions.primaryKey === 'id') {
      return { data: record }
    }

    return { ...record, id: record[resourceOptions.primaryKey] }
  },
  deleteMany: async (resource, { ids }) => {
    const resourceOptions = getResourceOptions(resource, resources)
    const { data: records, error } = await client.from(resourceOptions.table).delete().in('id', ids)

    if (error) {
      throw error
    }
    return {
      data: records?.map((record) => record[resourceOptions.primaryKey]),
    }
  },
})

const getList = async (
  { client, resource, resourceOptions, params } = {
    client,
    resource,
    resourceOptions,
    params,
  }
) => {
  const {
    pagination,
    sort,
    filter: { q, ingredients, ...filter },
  } = params

  const rangeFrom = (pagination.page - 1) * pagination.perPage
  const rangeTo = rangeFrom + pagination.perPage

  let query = client
    .from(resourceOptions.table)
    .select(resourceOptions.fields.join(', '), { count: 'exact' })
    .order(sort.field, { ascending: sort.order === 'ASC' })
    .match(filter)
    .range(rangeFrom, rangeTo)

  console.log(q)
  console.log(ingredients)
  if (q) {
    let queryString = '' //create a query string to put into an or( ) selector
    const fullTextSearchFields = Array.isArray(resourceOptions) ? resourceOptions : resourceOptions.fullTextSearchFields

    fullTextSearchFields.forEach((field, index, array) => {
      /* query = query.ilike(field, `%${q}%`); */ // existing method - add on successive ilike selectors

      // Hackish multi search
      // If there's commas in the search string, split on the commas, and search for all of them
      let filters = q
      if (filters.includes(',')) {
        filters = q.split(',')
      } else {
        filters = [q]
      }

      for (const filter of filters) {
        queryString += `${field}.ilike.%${filter}%` // new method - concatenate the ilike queries into one string

        if (index < array.length - 1) {
          queryString += ',' //add commas between the selectors, but not at the end
        }
      }
    })
    query.or(queryString) //add an or( ) selector using the built query string
  }
  if (ingredients) {
  }

  const { data, error, count } = await query

  if (error) {
    throw error
  }
  return {
    data:
      resourceOptions.primaryKey === 'id'
        ? data
        : data.map((item) => ({
            ...item,
            id: item[resourceOptions.primaryKey],
          })) ?? [],
    total: count ?? 0,
  }
}

const getResourceOptions = (resource, options) => {
  const resourceOptions = options[resource]

  if (Array.isArray(resourceOptions)) {
    return {
      table: resource,
      primaryKey: 'id',
      fields: resourceOptions,
      fullTextSearchFields: resourceOptions,
    }
  }

  return {
    table: resourceOptions.table ?? resource,
    primaryKey: resourceOptions.primaryKey ?? 'id',
    fields: resourceOptions.fields,
    fullTextSearchFields: resourceOptions.fullTextSearchFields ?? resourceOptions.fields,
  }
}
