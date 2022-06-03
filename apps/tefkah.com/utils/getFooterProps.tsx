import { FooterProps } from 'ui'

export const getFooterProps = () => {
  const license = process.env.LICENSE ?? 'none'

  const socs = {
    github: process.env.GITHUB_PROFILE,
    twitter: process.env.TWITTER_PROFILE,
    email: process.env.EMAIL,
    instagram: process.env.INSTAGRAM_PROFILE,
    orcid: process.env.ORCID_PROFILE,
  }

  const socials = Object.entries(socs).reduce((acc, [soc, link]) => {
    if (!link) return acc
    acc.push({ name: soc, href: link })
    return acc
  }, [] as FooterProps['socials'])

  // console.log(process.env.COPYRIGHT_HOLDER)
  return { socials, license, name: process.env.COPYRIGHT_HOLDER }
}
