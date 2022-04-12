import React, { useState } from 'react'

import { LOGSEQ_HEAD_HEIGHT } from '../util/constants'

const LogseqHead: React.FC<{}> = () => {
  const onMouseEnter = () => {
    console.log('onMouseEnter')
  }
  const onMouseLeave = () => {
    console.log('onMouseLeave')
  }
  return (
    // <div className="bg-transparent fixed top-0 w-screen" style={{ height: LOGSEQ_HEAD_HEIGHT }}></div>
    <div
      className="bg-transparent w-screen"
      style={{ height: LOGSEQ_HEAD_HEIGHT }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  )
}

export default LogseqHead
