import React, { useState } from 'react'

import { LOGSEQ_HEAD_HEIGHT } from '../util/constants'

const LogseqHead: React.FC<{}> = () => {
  return (
    <div className="bg-transparent fixed top-0 w-screen" style={{ height: LOGSEQ_HEAD_HEIGHT }}></div>
  )
}

export default LogseqHead
