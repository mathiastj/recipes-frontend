/* eslint-disable camelcase */
import { useRecordContext } from 'ra-core'
import React, { memo } from 'react'
import { styled } from '@mui/material/styles'
import { useTranslate } from 'react-admin'
import Stars from '../stars'

const PREFIX = 'RecipeShowHeader'
const classes = {
  root: `${PREFIX}-root`,
  left: `${PREFIX}-left`,
  center: `${PREFIX}-center`,
  right: `${PREFIX}-right`,
}
const Root = styled('div')(({}) => ({
  [`&.${classes.root}`]: {
    paddingBlock: '3rem',
  },
  [`& .${classes.left}`]: {
    float: 'left',
    textAlign: 'left',
    width: '33%',
  },
  [`& .${classes.center}`]: {
    float: 'left',
    textAlign: 'center',
    width: '34%',
  },
  [`& .${classes.right}`]: {
    float: 'left',
    textAlign: 'right',
    width: '33%',
  },
}))
export const RecipeShowHeader = memo((props) => {
  const translate = useTranslate()
  const record = useRecordContext(props)
  const { rating, servings, duration_free } = record
  return (
    <Root className={classes.root}>
      <span className={classes.left}>
        <Stars rating={rating} />
      </span>
      {servings && (
        <span className={classes.center}>
          {servings} {translate('myroot.servings')}
        </span>
      )}
      {duration_free && <span className={classes.right}>{duration_free}</span>}
    </Root>
  )
})

RecipeShowHeader.displayName = 'RecipeShowHeader'
