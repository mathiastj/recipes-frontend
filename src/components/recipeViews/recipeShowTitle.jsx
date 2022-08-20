import { useRecordContext } from 'ra-core'
import React, { memo } from 'react'
import { styled } from '@mui/material/styles'

const PREFIX = 'RecipeShowTitle'

const classes = {
  text: `${PREFIX}-text`,
  root: `${PREFIX}-root`,
}

const Root = styled('div')({
  [`& .${classes.text}`]: {
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: '2rem',
  },
  [`&.${classes.root}`]: {
    'text-align': 'center',
  },
})

export const RecipeShowTitle = memo((props) => {
  const record = useRecordContext(props)
  const { title } = record
  return (
    <Root className={classes.root}>
      <span className={classes.text}>{title}</span>
    </Root>
  )
})

RecipeShowTitle.displayName = 'RecipeShowTitle'
