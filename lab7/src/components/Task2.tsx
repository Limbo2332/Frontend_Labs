import "bootstrap/dist/css/bootstrap.css";

import AppleImage from "../images/apple.png";
import GrapeImage from "../images/grape.png";
import KiwiImage from "../images/kiwi.png";
import LemonImage from "../images/lemon.png";
import PeachImage from "../images/peach.png";
import PearImage from "../images/pear.png";
import GoodsCard from "./GoodsCard";

export interface ICard {
  imagePath: string;
  name: string;
  price: number;
}

const cards: ICard[] = [
  {
    imagePath: AppleImage,
    name: "Apple",
    price: 20,
  },
  {
    imagePath: PeachImage,
    name: "Peach",
    price: 30,
  },
  {
    imagePath: GrapeImage,
    name: "Grape",
    price: 70,
  },
  {
    imagePath: KiwiImage,
    name: "Kiwi",
    price: 120,
  },
  {
    imagePath: PearImage,
    name: "Pear",
    price: 30,
  },
  {
    imagePath: LemonImage,
    name: "Lemon",
    price: 65,
  },
];

const Task2 = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center max-width">
      {cards.map((card) => (
        <GoodsCard {...card} />
      ))}
    </div>
  );
};

export default Task2;
