import '@logseq/libs'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import '@picocss/pico'
import './index.css'

const isDevelopment = import.meta.env.DEV

if (isDevelopment) {
  renderApp('browser')
} else {
  console.log('=== logseq-plugin-dashboard loaded ===')
  logseq.ready(() => {

    logseq.provideModel({
      show() {
        console.log('[faiz:] === showMainUI', logseq.showMainUI)
        renderApp('logseq')
        logseq.showMainUI()
      },
    })

    logseq.App.registerUIItem('toolbar', {
      key: 'logseq-plugin-dashboard',
      template: '<a data-on-click="show" class="button"><i class="ti ti-window"></i></a>',
    })

    // logseq.App.onRouteChanged((e) => {
    //   console.log('[faiz:] === onRouteChanged', e, e?.path === '/page/dashboard')
    //   if (e?.path === '/page/Dashboard') {
    //     console.log('[faiz:] === showMainUI')
    //     renderApp('logseq')
    //     logseq.showMainUI()
    //   } else if (e?.path !== '/') {
    //     logseq.hideMainUI()
    //   }
    // })

  })
}

function renderApp(env: string) {
  ReactDOM.render(
    <BrowserRouter>
      <App env={env} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
