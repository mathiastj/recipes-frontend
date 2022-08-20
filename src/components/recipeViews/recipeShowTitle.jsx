import { useParams } from 'react-router-dom'
import React from 'react'
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

const RecipeShowTitle = (props) => {
  const { title } = useParams()
  console.log(props)
  // const { title } = props
  return (
    <Root className={classes.root}>
      <span className={classes.text}>{title}</span>
    </Root>
  )
}

export default RecipeShowTitle
