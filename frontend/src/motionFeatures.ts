// Split out so LazyMotion can fetch the animation feature bundle as its own
// chunk instead of shipping it in the initial JS payload.
import { domAnimation } from 'framer-motion'

export default domAnimation
