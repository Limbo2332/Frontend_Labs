import React from "react";

class Content extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div>
          <p>Хобі:</p>
          <ul>
            <li>Баскетбол</li>
            <li>Футбол</li>
            <li>Комп'ютерні ігри</li>
            <li>Програмування</li>
          </ul>
        </div>
        <div>
          <p>Улюблені фільми:</p>
          <ol>
            <li>Гарі Потер</li>
            <li>Марсіанин</li>
            <li>Інтерстелар</li>
          </ol>
        </div>
      </>
    );
  }
}

export default Content;
