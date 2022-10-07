import { useEffect } from 'react'
import { SidebarExtensionSDK } from '@contentful/app-sdk'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-quality-levels'
import videojsqualityselector from 'videojs-hls-quality-selector'

type Props = {
  sdk: SidebarExtensionSDK
}

const VideoPreview = (props: Props) => {
  const { sdk } = props

  useEffect(() => {
    const player = videojs('video-preview', {
      controls: true,
      controlBar: {
        subsCapsButton: false
      }
    })
    const videoUrls = sdk.entry.fields.videoUrls.getValue()
    player.src({
      src: videoUrls['application/x-mpegURL'] ? videoUrls['application/x-mpegURL'] : videoUrls['video/mp4'],
      type: videoUrls['application/x-mpegURL'] ? 'application/x-mpegURL' : 'video/mp4'
    })
    player.hlsQualitySelector = videojsqualityselector
    player.hlsQualitySelector()
    sdk.window.startAutoResizer()
  }, [sdk])

  return <video id='video-preview' className='video-js vjs-big-play-centered vjs-fluid' />
}

export default VideoPreview
