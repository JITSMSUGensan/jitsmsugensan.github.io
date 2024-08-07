import { useEffect } from "preact/hooks";
import Parallax from "parallax-js";
import Floater from ".";

export default function FloaterParallaxScene() {
  useEffect(() => {
    const scene = document.getElementById("scene");
    if (!scene) {
      alert("Scene not found!");
      return;
    }
    const parallaxInstance = new Parallax(scene);
    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div
      id="scene"
      className="absolute -top-[200px] left-0 h-[100svh] w-[100svw]"
    >
      <Floater
        variation={1}
        depth="0.48"
        className="absolute left-[10%] top-[20px]"
      />
      <Floater
        variation={2}
        depth="0.37"
        className="absolute left-[100px] top-[400px]"
      />
      <Floater
        variation={3}
        depth="0.25"
        className="absolute right-[100px] top-[20px]"
      />
      <Floater
        variation={4}
        depth="0.19"
        className="absolute -bottom-[100px] left-[100px]"
      />
      <Floater
        variation={5}
        depth="0.1"
        className="absolute -bottom-[200px] -right-[90px]"
      />
    </div>
  );
}
