import React, { useState } from 'react'

import s from './index.module.css'

const Tabs: React.FC<{}> = () => {
  return (
    // <div className={s.container}>
      <div className={s.tabs}>
        <input className={s.input} type="radio" id="radio-1" name="tabs" checked />
        <label className={s.tab} htmlFor="radio-1">Upcoming</label>

        <input className={s.input} type="radio" id="radio-2" name="tabs" />
        <label className={s.tab} htmlFor="radio-2">Development</label>

        <input className={s.input} type="radio" id="radio-3" name="tabs" />
        <label className={s.tab} htmlFor="radio-3">Completed</label>
        <span className={s.glider}></span>
      </div>
    // </div>
  )
}

export default Tabs
