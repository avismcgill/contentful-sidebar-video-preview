import React, { useEffect, useState } from 'react'
import { SidebarExtensionSDK } from '@contentful/app-sdk'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import { Note } from '@contentful/f36-components'

export type Props = {
  sdk: SidebarExtensionSDK
}

const VideoPreview = (props: Props) => {
  const { sdk } = props
  const [isVideoAvailable, setVideoAvailable] = useState(false)

  useEffect(() => {
    sdk.window.startAutoResizer()
    const videoId = sdk.entry.fields.videoFile.getValue()?.sys?.id
    if (!videoId) {
      return
    }
    setVideoAvailable(true)
    sdk.space.getEntry(videoId).then((data: any) => {
      const player = videojs('video-preview')
      const videoUrls = data.fields.videoUrls['en-US']
      player.src({
        src: videoUrls['application/x-mpegURL'] ? videoUrls['application/x-mpegURL'] : videoUrls['video/mp4'],
        type: videoUrls['application/x-mpegURL'] ? 'application/x-mpegURL' : 'video/mp4'
      })
    })
  }, [sdk])

  return (
    <>
      {isVideoAvailable ? (
        <video id='video-preview' width='310' height='250' className='video-js' controls />
      ) : (
        <Note variant='neutral'>Video is not attached to this story</Note>
      )}
    </>
  )
}

export default VideoPreview
