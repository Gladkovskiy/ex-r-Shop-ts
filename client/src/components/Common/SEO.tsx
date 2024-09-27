import React, {FC} from 'react'
import {Helmet} from 'react-helmet-async'

interface ISEO {
  title: string
  description: string
}

const SEO: FC<ISEO> = ({description, title}) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default SEO
