import '@logseq/libs'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const isDevelopment = import.meta.env.DEV

if (isDevelopment) {
  renderApp('browser')
} else {
  console.log('=== logseq-plugin-dashboard loaded ===')
  logseq.ready(() => {

    logseq.provideModel({
      show() {
        renderApp('logseq')
        logseq.showMainUI()
      },
    })

    logseq.App.registerUIItem('toolbar', {
      key: 'logseq-plugin-dashboard',
      template: '<a data-on-click="show" class="button"><i class="ti ti-window"></i></a>',
    })

    logseq.App.onRouteChanged((e) => {
      console.log('[faiz:] === onRouteChanged', e, e?.path === '/page/dashboard')
      if (e?.path === '/page/Dashboard') {
        console.log('[faiz:] === showMainUI')
        renderApp('logseq')
        logseq.showMainUI()
      } else if (e?.path !== '/') {
        logseq.hideMainUI()
      }
    })

  })
}

function renderApp(env: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App env={env} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
