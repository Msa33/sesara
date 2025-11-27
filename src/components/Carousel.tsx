import { Carousel } from "@material-tailwind/react";
import sésaNoir from "../assets/sésaNoir.png"
import Arachide from '../assets/Arachide.png'
import SBlanc from '../assets/SBlanc.png'
import Sdoré from "../assets/Sdoré.png"
 
 
export function SlideShow() {
  return (
    <Carousel 
        transition={{ type: "tween", duration: 2 }}
        className="rounded-xl"
        autoplay={false}
        loop={true}
              >
      <img
        src={sésaNoir}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={SBlanc}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Arachide}
        alt="image 3"
        className="h-full w-full object-cover"
      />
       <img
        src={Sdoré}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
 