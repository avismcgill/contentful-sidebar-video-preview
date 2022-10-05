import { render, screen } from '@testing-library/react'
import VideoPreview from './VideoPreview'

const props: any = {
  sdk: {
    entry: {
      fields: {
        videoFile: {
          getValue: () => null
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
      describe('when videoFile is not attached to story', () => {
        it('should render title', () => {
          render(<VideoPreview {...props} />)
          expect(screen.getByText(/Video is not attached to this story/i)).toBeTruthy()
        })
      })
    })
  })
})
