import React, { useState } from 'react'

import s from './index.module.css'

const Button: React.FC<{
  title?: string
  icon?: React.ReactNode
  onClick?: () => void
  [props: string]: any
}> = ({ title, icon, children, onClick = () => {}, ...props }) => {
  const { className } = props
  return (
    <div className={`${s.container} ${className}`} title={title} onClick={onClick}>
      <div>
        { icon ? icon : null }
        { children }
      </div>
    </div>
  )
}

export default Button
