import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    src: process.env.PUBLIC_URL + `/Images/imag3.jpg`,
  },
  {
    id: uuidv4(),
    src: process.env.PUBLIC_URL + `/Images/image11.jpg`,
  },
  {
    id: uuidv4(),
    src: process.env.PUBLIC_URL + `/Images/imag1.jpg`,
  },
];

export default dataSlider;
