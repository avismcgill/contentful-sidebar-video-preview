import { useEffect } from 'react'
import { SidebarExtensionSDK } from '@contentful/app-sdk'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

type Props = {
  sdk: SidebarExtensionSDK
}

const VideoPreview = (props: Props) => {
  const { sdk } = props

  useEffect(() => {
    const player = videojs('video-preview')
    const videoUrls = sdk.entry.fields.videoUrls.getValue()
    player.src({
      src: videoUrls['application/x-mpegURL'] ? videoUrls['application/x-mpegURL'] : videoUrls['video/mp4'],
      type: videoUrls['application/x-mpegURL'] ? 'application/x-mpegURL' : 'video/mp4'
    })
    sdk.window.startAutoResizer()
  }, [sdk])

  return <video id='video-preview' className='video-js vjs-default-skin vjs-big-play-centered vjs-16-9' controls />
}

export default VideoPreview
