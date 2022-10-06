import { render } from '@testing-library/react'
import VideoPreview from './VideoPreview'

jest.mock('video.js', () => () => ({ src: () => jest.fn() }))

const props: any = {
  sdk: {
    entry: {
      fields: {
        videoUrls: {
          getValue: () => ({
            'application/x-mpegURL': 'url'
          })
        }
      }
    },
    locales: {},
    window: {
      startAutoResizer: jest.fn()
    }
  }
}

describe('VideoPreview component', () => {
  describe('on render', () => {
    describe('when component render', () => {
      it('should call startAutoResizer', () => {
        render(<VideoPreview {...props} />)
        expect(props.sdk.window.startAutoResizer).toHaveBeenCalled()
      })
    })
  })
})
