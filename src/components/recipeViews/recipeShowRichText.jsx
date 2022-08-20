import React from 'react'
import { styled } from '@mui/material/styles'
import { RichTextField, useTranslate } from 'react-admin'

const PREFIX = 'RecipeShowRichText'

const classes = {
  label: `${PREFIX}-label`,
  root: `${PREFIX}-root`,
}

const Root = styled('div')({
  [`& .${classes.label}`]: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    display: 'block',
    marginBottom: '0.75rem',
  },
  [`&.${classes.root}`]: {
    paddingBlock: '1rem',
  },
})

const RecipeShowRichText = (props) => {
  const translate = useTranslate()
  const getLabel = (source) =>
    source === 'ingredients'
      ? translate('resources.recipes.fields.ingredients')
      : translate('resources.recipes.fields.directions')

  const { source } = props
  return (
    <Root className={classes.root}>
      <span className={classes.label}>{getLabel(source)}</span>
      <RichTextField source />
    </Root>
  )
}

export default RecipeShowRichText
