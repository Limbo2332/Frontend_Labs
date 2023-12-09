import React, { useState } from "react";

const Header = () => {
  const [isSecondItemClicked, setIsSecondItemClicked] = useState(false);
  const [isItemAfterSecondClicked, setisItemAfterSecondClicked] =
    useState(false);

  return (
    <div>
      <h2>Воробйов Олексій Олександрович</h2>
      <p
        className={isSecondItemClicked ? "click" : ""}
        onClick={() => setIsSecondItemClicked(!isSecondItemClicked)}
      >
        Місце народження: 1 квітня, 2004 року, смт.Романів, Житомирська область
      </p>
      <p
        className={`next-after-second ${
          isItemAfterSecondClicked ? "second-element" : ""
        }`}
        onClick={() => setisItemAfterSecondClicked(!isItemAfterSecondClicked)}
      >
        Освіта: <br />
        "Романівська гімназія", смт. Романів, Житомирська область;
        <br />
        НТУУ "КПІ", м. Київ
      </p>
    </div>
  );
};

export default Header;
