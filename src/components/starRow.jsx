import { useRecordContext } from 'ra-core'
import React, { memo } from 'react'
import Stars from './stars'

export const StarRow = memo((props) => {
  const record = useRecordContext(props)
  const { rating } = record
  return <Stars rating={rating} />
})

StarRow.displayName = 'NumberField'
