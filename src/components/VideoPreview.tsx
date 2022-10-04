import React, { useEffect } from 'react'
import { SidebarExtensionSDK } from '@contentful/app-sdk'

export type Props = {
  sdk: SidebarExtensionSDK
}

const VideoPreview = (props: Props) => {
  const { sdk } = props

  useEffect(() => {
    sdk.window.startAutoResizer()
  }, [sdk])

  return (
   <div>Preview video</div>
  )
}

export default VideoPreview
