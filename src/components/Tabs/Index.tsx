import React, { useEffect, useState } from 'react'

import s from './index.module.css'

const Tabs: React.FC<{
  defaultActiveKey?: string
  height?: string
  suffix?: React.ReactNode
}> = ({ defaultActiveKey, height, suffix, children }) => {
  const [value, setValue] = useState(defaultActiveKey)
  const [glider, setGlider] = useState<{
    width: number
    left: number
  }>({ left: 0, width: 0 })

  // @ts-ignore
  const tabs = children?.map(tabPanel => ({
    value: tabPanel?.key,
    title: tabPanel?.props?.tab,
  }))

  const onTabClick = (e, value) => {
    setValue(value)
    const tabEl: HTMLElement = e.target
    const tabWidth = tabEl.offsetWidth
    const tabLeft = tabEl.offsetLeft
    setGlider({ width: tabWidth, left: tabLeft })
  }

  useEffect(() => {
    const tabEl: HTMLElement | null = document.querySelector(`.${s.tab}`)
    if (tabEl) {
      const tabWidth = tabEl.offsetWidth
      const tabLeft = tabEl.offsetLeft
      setGlider({ width: tabWidth, left: tabLeft })
    }
  }, [])

  const renderTabPanel = () => {
    // @ts-ignore
    const _children = children?.map(tabPanel => {
      return React.cloneElement(tabPanel, {
        key: tabPanel?.key,
        active: value === tabPanel?.key ? 'true' : undefined,
      })
    })
    console.log('[faiz:] === renderTabPanel', _children)
    return _children
  }

  return (
    <div>
      <div className={s.header}>
        <div className={s.tabs}>
          <span className={s.glider} style={{ width: glider.width, left: glider.left }}></span>
          {
            tabs.map(tab => (
              <div
                key={tab.value}
                className={`${s.tab} ${value === tab.value ? s.active : ''}`}
                onClick={e => onTabClick(e, tab.value)}
              >
                {tab.title}
              </div>
            ))
          }
        </div>
        { suffix }
      </div>
      <div className={s.tabPanelContainer} style={{ height }}>
        { renderTabPanel() }
      </div>
    </div>
  )
}

export default Tabs
