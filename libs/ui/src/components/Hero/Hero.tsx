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

export const Hero = () => (
  <div
    className="font-extrabold text-9xl text-white flex justify-around"
    // variants={container}
    // // whileHover={{ scale: 1.2 }}
    // initial="hidden"
    // animate="show"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 400 100"
      // variants={item}
      // transition={{ opacity: [0, 1, 1], scale: [0, 0, 1], duration: 0.2 }}
      // style={{
      //   originX: 0.5,
      //   textShadow: '2px 2px 0px #fff',
      // }}
      style={{
        width: 'clamp(350px, 20rem, 80vw)',
      }}
    >
      <text
        className="stroke-white fill-onyx stroke-[0.2rem]"
        fontSize="6.8rem"
        x="45%"
        y="60%"
        textAnchor="end"
        dominantBaseline="middle"
        fontFamily="Open Sans"
      >
        tef
      </text>
      <text
        className="fill-white"
        fontSize="7rem"
        x="45%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="start"
      >
        kah.
      </text>
    </svg>
  </div>
)

export default Hero
