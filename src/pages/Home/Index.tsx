import { Button } from 'antd'

import backImg from '../../assets/back1.png'
import avatarImg from '../../assets/avatar.jpg'
import LogseqHead from '../../components/LogseqHead'
import { LOGSEQ_HEAD_HEIGHT } from '../../util/constants'
import s from './index.module.css'
import Tabs from '../../components/Tabs/Index'

const Home: React.FC<{ env?: string }> = ({ env }) => {
  return (
    <div
      className={`${s.container} w-screen h-screen text-white`}
      style={{ backgroundImage: `url(${backImg})`, paddingTop: LOGSEQ_HEAD_HEIGHT }}
    >
      <LogseqHead />

      <div className="px-12 h-full">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-white m-0">Hi, Hayden</h2>
          <div>
            <img src={avatarImg} alt="avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        <div>
          <div>
            <Tabs />
          </div>
        </div>
      </div>

      {/* <button>test button pico</button> */}

      {/* <Button onClick={() => {
        logseq.App.invokeExternalCommand('logseq.go/search')
      }}>Search</Button>
      <Button onClick={() => {
        logseq.App.invokeExternalCommand('logseq.command-palette/toggle')
      }}>command palette</Button>
      <Button onClick={() => {
        logseq.App.invokeExternalCommand('logseq.go/journals')
      }}>journals</Button> */}
    </div>
  )
}

export default Home
