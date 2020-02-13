import React from 'react'

const Hello = () => {
  return <h1>This is the title of my first component</h1>
}

ReactDOM.render(
  <Hello />,
  document.querySelector('#root')
)