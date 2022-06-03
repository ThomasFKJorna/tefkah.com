import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FooterProps } from 'ui'
import { BasicLayout } from '../layouts/BasicLayout'
import { getFooterProps } from '../utils/getFooterProps'

export interface IndexProps {
  footer: FooterProps
}
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.8,
      staggerDirection: 1,
    },
  },
}
const item: Variants = {
  hidden: { opacity: 0, scale: 2 },
  show: { opacity: 1, scale: 1 },
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
      {/* <main className="dark:bg-slate-800 bg-red-500 w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10"> */}
      <div className="relative">
        {/* <h1 className="absolute top-2 left-6 font-extrabold text-9xl text-slate-800 dark:text-white backdrop-blur-sm">
          tefkah.
        </h1> */}
        <motion.div
          className="relative font-extrabold text-9xl  dark:text-white flex "
          variants={container}
          // whileHover={{ scale: 1.2 }}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="bg-clip-text bg-gradient-to-tr from-cool to-cool text-transparent"
            variants={item}
            transition={{ opacity: [0, 1, 1], scale: [0, 0, 1], duration: 0.2 }}
            style={{ originX: 0.5 }}
            // transition={{ delay: 0.5 }}
          >
            <span>tef</span>
          </motion.h1>
          <motion.h1
            className="text-transparent bg-clip-text bg-gradient-to-br from-cool  to-moon"
            variants={item}
            transition={{ opacity: [0, 1, 1], scale: [0, 0, 1], duration: 0.2 }}
            style={{ originX: -0.5 }}
            // transition={{ delay: 1 }}
          >
            <span>kah.</span>
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col md:flex-row gap-8 text-lg text-gr items-center font-semibold text-cool"
        initial={{ opacity: 0, transform: 'translate(0px,20px)' }}
        animate={{ opacity: 1, transform: 'translate(0px,0px)' }}
        transition={{ delay: 3, stiffness: 50, duration: 0.8, easings: 'easeOut' }}
      >
        <Link href="#" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:white text-2xl">
            Portfolio
          </motion.a>
        </Link>
        <Link href="https://thesis.tefkah.com" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:white text-2xl">
            Thesis
          </motion.a>
        </Link>
        <Link href="/blog" passHref>
          <motion.a whileHover={{ y: -4 }} className="dark:white text-2xl">
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
