import { render } from '@testing-library/react'

import FooterIcon from './FooterIcon'

describe('FooterIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterIcon />)
    expect(baseElement).toBeTruthy()
  })
})
