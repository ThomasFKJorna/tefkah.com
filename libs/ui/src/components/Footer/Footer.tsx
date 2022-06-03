import React from 'react'
import { format } from 'date-fns'
import { FooterIcon } from '../FooterIcon'
import { LicenseIcon } from '../LicenseIcon'

/* eslint-disable-next-line */
export interface FooterProps {
  socials: { name: string; href: string; icon?: React.ReactElement }[]
  license: string
  name: string
}

export const Footer = (props: FooterProps) => {
  const { socials, license, name } = props
  return (
    <footer>
      <div className="flex flex-col-reverse mb-4 md:mb-0 max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex-row items-center md:items-center md:justify-between lg:px-8">
        <div className="my-8 md:my-0 md:order-1">
          <p className="flex items-center text-center text-base  gap-2">
            &copy; {format(new Date(), 'yyyy')} {name}.{' '}
            {license ? (
              <LicenseIcon license={license} className="h-4 w-4" />
            ) : (
              'All rights reserved.'
            )}
          </p>
        </div>
        <div className="flex justify-center gap-4 md:order-2 sm:pb-2">
          {socials.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <span className="h-6 w-6" aria-hidden="true">
                <FooterIcon className="h-6 w-6" name={item.name} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
