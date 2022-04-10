import React, { useState } from 'react'

import s from './index.module.css'

const Button: React.FC<{
  title?: string
  icon?: React.ReactNode
  [props: string]: any
}> = ({ title, icon, children, ...props }) => {
  const { className } = props
  return (
    <div className={`${s.container} ${className}`} title={title}>
      <div>
        { icon ? icon : null }
        { children }
      </div>
    </div>
  )
}

export default Button
