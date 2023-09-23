import React from 'react'

const Article = ({title,date,preview}) => {
    const defaultDate = date || 'January 1, 1970';
    return (
    <Article>
      <h3>{title}</h3>
      <small>{defaultDate}</small>
      <p>{preview}</p>
    </Article>
  )
}

export default Article
