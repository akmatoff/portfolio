import { motion } from "framer-motion";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function Cursor() {
  const { mouseState, variants } = useMouseAnimate();

  return (
    <motion.div
      variants={variants}
      animate={mouseState.variant}
      transition={{
        type: "tween",
      }}
      className="w-6 h-6 fixed left-0 top-0 z-10 border border-accent rounded-full pointer-events-none"
    ></motion.div>
  );
}

export default Cursor;
