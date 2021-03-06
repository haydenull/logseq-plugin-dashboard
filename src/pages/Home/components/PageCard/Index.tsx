import React, { useState } from 'react'

import s from './index.module.css'

export type IPageCardData = {
  id: string
  title: string
  category: string
  emoji: string
}
const PageCard: React.FC<IPageCardData> = ({ id, title, category, emoji }) => {
  return (
    <div className={s.container}>
      <div className={s.emoji}>
        <span>{emoji}</span>
        {/* <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f60a/u1f60a_u1f981.png" /> */}
      </div>
      <div>
        <span className={s.title}>{title}</span>
        <span className={s.category}>{category}</span>
      </div>
    </div>
  )
}

export default PageCard
