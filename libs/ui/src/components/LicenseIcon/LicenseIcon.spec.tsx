import { render } from '@testing-library/react'

import LicenseIcon from './LicenseIcon'

describe('LicenseIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LicenseIcon />)
    expect(baseElement).toBeTruthy()
  })
})
