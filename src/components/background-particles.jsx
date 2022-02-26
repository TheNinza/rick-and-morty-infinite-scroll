import Particles from "react-tsparticles";
import particleJsConfig from "../config/particlesjs-config.json";

const BackgroundParticles = () => {
  return <Particles id="tsparticles" options={particleJsConfig} />;
};

export default BackgroundParticles;
