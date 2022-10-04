import React from 'react'
import { render } from 'react-dom'
import { SidebarExtensionSDK, init } from '@contentful/app-sdk'
import VideoPreview from './components/VideoPreview'

init((sdk: SidebarExtensionSDK) => render(<VideoPreview sdk={sdk as SidebarExtensionSDK} />, document.getElementById('root')))
