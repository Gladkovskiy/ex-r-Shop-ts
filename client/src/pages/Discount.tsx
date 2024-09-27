import React, {FC} from 'react'
import {useParams} from 'react-router-dom'

const Discount: FC = () => {
  const {id} = useParams<'id'>()
  return <div>Discount: {id}</div>
}

export default Discount
