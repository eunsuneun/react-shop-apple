import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ data, v, i }) => {
  return(
    <Link to={`/detail/${i}`} className="col-md-4 mb-3">
      <img src={v.imgSrc} alt={data[i].title} />
      <p className='title'>{data[i].title}</p>
      <p className='content'>{v.content}</p>
      <p className='price'>{v.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</p>
    </Link>
  )
}

export default Card;