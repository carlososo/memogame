import React from "react";
import Board from "./Board";
import ScoreComponent from "./ScoreComponent";

import "../Styles.scss";

const MemoApp = () => {
  return (
    <div className="__general_container">
    <header className="__genaral_title_container container">
      <h1 className=""> Memo Game</h1>
    </header>
    <aside className="__scoreComponent_container container">
      <ScoreComponent />
    </aside>
    <main className="__board_container container">
      <Board />
    </main>
    </div>
  );
};

export default MemoApp;
