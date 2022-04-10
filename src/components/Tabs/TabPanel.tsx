import React, { useState } from 'react'

import s from './index.module.css'

const TabPanel: React.FC<{
  key: string
  tab: string
  [prop: string]: any
}> = ({ children, ...props }) => {
  return (
    <div className={`${s.tabPanel}`} {...props}>
      { children }
    </div>
  )
}

export default TabPanel
