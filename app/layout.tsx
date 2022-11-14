import '../styles/globals.css'
// import 'katex/dist/katex.css'
import localFont from '@next/font/local'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { EmailButton } from './EmailButton'

// export const BlackoutTwoAM = localFont({
//   src: '../assets/fonts/Blackout-TwoAm-Mod.ttf',
//   weight: '100',
// });
// export const BlackoutMidnight = localFont({
//   src: '../assets/fonts/Blackout Midnight.ttf',
//   weight: '100',
//   variable: '--midnight',
// });

const humane = localFont({
  src: '../assets/fonts/Humane-VF.ttf',
  variable: '--humane',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${humane.variable} `}>
      <head />
      <body className="w-screen">
        {/* <AuthContext> */}
        {/* <Nav /> */}

        {children}
        {/* <Footer /> */}
        {/* </AuthContext> */}
        <footer className="bg-secondary text-primary h-52">
          <div className="flex gap-10 items-center h-full justify-center">
            <a href="https://github.com/tefkah">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-8 w-8" />
            </a>
            <a href="https://twitter.com/tefkah">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/thomasfkjorna/">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-8 w-8" />
            </a>
            <EmailButton email="hello@tefkah.com" />
          </div>
        </footer>
      </body>
    </html>
  )
}
