import React, { useState } from 'react'

import { LOGSEQ_HEAD_HEIGHT } from '../../util/constants'
import s from './index.module.less'

const LogseqHead: React.FC<{}> = () => {
  return (
    <div
      className={`${s.container} fixed top-0 w-screen flex items-center justify-center`}
      style={{ height: LOGSEQ_HEAD_HEIGHT }}
      onClick={() => logseq.hideMainUI()}
    >
      <span>Click to close the plugin(or press Esc)</span>
    </div>
  )
}

export default LogseqHead
