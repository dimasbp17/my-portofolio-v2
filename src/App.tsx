import { MotionConfig } from "framer-motion";
import MyHome from "./pages/MyHome";

const App = () => {
  return (
    <>
      {/* animasi dimatikan kalau user set "reduce motion" di OS */}
      <MotionConfig reducedMotion="user">
        <div>
          <MyHome />
        </div>
      </MotionConfig>
    </>
  );
};

export default App;
