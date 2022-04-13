import { useState } from 'react'
import { IoSearchOutline, IoJournalOutline } from 'react-icons/io5'
// import { RiArrowUpSLine } from 'react-icons/ri'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import backImg from '../../assets/back2.png'
import avatarImg from '../../assets/avatar.jpg'
import LogseqHead from '../../components/LogseqHead/Index'
import { LOGSEQ_HEAD_HEIGHT } from '../../util/constants'
import s from './index.module.css'
import Tabs from '../../components/Tabs/Index'
import Button from '../../components/Button/Index'
import TabPanel from '../../components/Tabs/TabPanel'
import PageCard from './components/PageCard/Index'
import type { IPageCardData } from './components/PageCard/Index'

const groups = [
  {
    title: 'Favourites',
    id: 'Favourites',
    data: [
      {
        id: 'page-1',
        title: 'Page 1',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-2',
        title: 'Page 2',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-3',
        title: 'Page 3',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-4',
        title: 'Page 4',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-5',
        title: 'Page 5',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-6',
        title: 'Page 6',
        category: 'page',
        emoji: '📖',
      },
      {
        id: 'page-7',
        title: 'Page 7',
        category: 'page',
        emoji: '📖',
      },
    ],
  },
  {
    title: 'Bussiness',
    id: 'Bussiness',
    data: [
      {
        id: 'bussiness-1',
        title: 'bussiness 1',
        category: 'bussiness',
        emoji: '📖',
      },
      {
        id: 'bussiness-2',
        title: 'bussiness 2',
        category: 'bussiness',
        emoji: '📖',
      },
      {
        id: 'bussiness-3',
        title: 'bussiness 3',
        category: 'bussiness',
        emoji: '📖',
      },
      {
        id: 'bussiness-4',
        title: 'bussiness 4',
        category: 'bussiness',
        emoji: '📖',
      },
    ],
  },
]

const Home: React.FC<{ env?: string }> = ({ env }) => {
  const [groupFold, setGroupFold] = useState(true)

  const onClickJournals = () => {
    logseq.App.invokeExternalCommand('logseq.go/journals')
  }
  const onClickSearch = () => {
    logseq.App.invokeExternalCommand('logseq.go/search')
  }

  return (
    <div
      className={`${s.container} w-screen h-screen text-white`}
      style={{ backgroundImage: `url(${backImg})`, paddingTop: LOGSEQ_HEAD_HEIGHT }}
    >
      <LogseqHead />

      <div className="flex flex-col h-full px-12 overflow-hidden justify-between">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-white m-0">Hi, Hayden</h2>
          <div>
            <img src={avatarImg} alt="avatar" className="w-10 h-10 rounded-full shadow-lg" />
          </div>
        </div>

        <div className="relative">
          <Tabs
            defaultActiveKey={groups?.[0]?.id}
            height={groupFold ? '170px' : '60vh'}
            suffix={
              <div className="flex">
                <Button icon={groupFold ? <MdExpandLess /> : <MdExpandMore />} onClick={() => setGroupFold(_fold => !_fold)} title={groupFold ? 'Expand' : 'Fold'} />
                <Button icon={<IoJournalOutline />} onClick={onClickJournals} className="ml-2" title="Navigate To Journals Page" />
                <Button icon={<IoSearchOutline />} onClick={onClickSearch} className="ml-2" title="Search or Create" />
              </div>
            }
          >
            {
              groups.map(group => (
                <TabPanel key={group.id} tab={group.title}>
                  <div className={s.groupContentContainer}>
                    {
                      group.data.map(card => (
                        <PageCard id={card.id} title={card.title} category={card.category} emoji={card.emoji} />
                      ))
                    }
                  </div>
                </TabPanel>
              ))
            }
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Home
