import React, { Children } from 'react'

function Button({children}) {
  return <button className="btn-square">{children}</button>;
}

export default Button