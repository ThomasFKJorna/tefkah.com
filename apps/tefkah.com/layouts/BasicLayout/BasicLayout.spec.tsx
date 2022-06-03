import { render } from '@testing-library/react'

import { BasicLayout } from './BasicLayout'

describe('BasicLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicLayout />)
    expect(baseElement).toBeTruthy()
  })
})
