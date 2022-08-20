/* eslint-disable camelcase */
import React from 'react'
import { styled } from '@mui/material/styles'
import { useTranslate } from 'react-admin'
import Stars from '../stars'

const PREFIX = 'RecipeShowHeader'
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
}
const Root = styled('div')(({}) => ({
  [`&.${classes.root}`]: {
    paddingBlock: '3rem',
  },
  [`& .${classes.content}`]: {
    'text-left': {
      float: 'left',
      'text-align': 'left',
      width: '33%',
    },
    'text-center': {
      float: 'left',
      'text-align': 'center',
      width: '34%',
    },
    'text-right': {
      float: 'left',
      'text-align': 'right',
      width: '33%',
    },
  },
}))

const RecipeShowHeader = (props) => {
  const translate = useTranslate()
  // const classes = useStyles()
  const { rating, servings, duration_free } = props
  return (
    <Root className={classes.root}>
      <span className={classes['text-left']}>
        <Stars rating={rating} />
      </span>
      {servings && (
        <span className={classes['text-center']}>
          {servings} {translate('myroot.servings')}
        </span>
      )}
      {duration_free && <span className={classes['text-right']}>{duration_free}</span>}
    </Root>
  )
}

export default RecipeShowHeader
