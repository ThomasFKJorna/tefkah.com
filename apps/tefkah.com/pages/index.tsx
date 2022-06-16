import { motion } from 'framer-motion'
import Link from 'next/link'
import { FooterProps, Hero, Logo } from 'ui'
import { BasicLayout } from '../layouts/BasicLayout'
import { getFooterProps } from '../utils/getFooterProps'

export interface IndexProps {
  footer: FooterProps
}
export const Index = (props: IndexProps) => {
  const { footer } = props
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
    <BasicLayout footer={footer}>
      <div className="relative">
        <Logo />
      </div>
      <motion.div
        className="flex flex-col md:flex-row gap-8 text-lg text-gr items-center font-semibold text-red-50"
        initial={{ opacity: 0, transform: 'translate(0px,20px)' }}
        animate={{ opacity: 1, transform: 'translate(0px,0px)' }}
        transition={{ delay: 3, stiffness: 50, duration: 0.8, easings: 'easeOut' }}
      >
        <Link href="#" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:text-white text-2xl">
            Portfolio
          </motion.a>
        </Link>
        <Link href="https://thesis.tefkah.com" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:text-white text-2xl">
            Thesis
          </motion.a>
        </Link>
        <Link href="/blog" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:text-white text-2xl">
            Blog
          </motion.a>
        </Link>
      </motion.div>
      {/* </main> */}
    </BasicLayout>
  )
}

export const getStaticProps = async () => {
  const footer = getFooterProps()
  console.log(footer)

  return { props: { footer } }
}

export default Index
