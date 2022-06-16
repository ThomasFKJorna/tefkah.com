import { motion, Variants } from 'framer-motion'

/* eslint-disable-next-line */
export interface HeroProps {}

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

export const Logo = () => (
  <motion.div
    className="relative font-extrabold text-9xl  dark:text-white flex "
    variants={container}
    // whileHover={{ scale: 1.2 }}
    initial="hidden"
    animate="show"
  >
    <motion.h1
      // className="bg-clip-text bg-gradient-to-tr from-cool to-cool text-transparent"
      variants={item}
      className="text-transparent"
      transition={{ opacity: [0, 1, 1], scale: [0, 0, 1], duration: 0.2 }}
      // @ts-expect-error webkit-text-stroke is fine
      style={{ originX: 0.5, '-webkit-text-stroke': '4px white', '-mox-text-stroke': '4px white' }}
    >
      <span>tef</span>
    </motion.h1>
    <motion.h1
      // className="text-transparent bg-clip-text bg-gradient-to-br from-cool  to-moon"
      variants={item}
      className="text-slate-50"
      transition={{ opacity: [0, 1, 1], scale: [0, 0, 1], duration: 0.2 }}
      style={{ originX: -0.5 }}
    >
      <span>kah.</span>
    </motion.h1>
  </motion.div>
)

export default Logo
