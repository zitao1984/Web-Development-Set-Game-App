import React from "react";

const Rules = () => {
  return (
    <div className="main-container">
      <div className="text-left">
        <div className="text-center">
          <h2>Rules</h2>
        </div>
        <p>
          The object of the game is to identify a 'Set' of three cards from the
          cards laid out on the screen. Each card has a variation of the
          following four features:
        </p>
        <ol>
          <li>COLOR: Each card is red, green, or blue.</li>
          <li>SHAPE: Each card contains ovals, squiggles, or diamonds.</li>
          <li>NUMBER: Each card has one, two, or three symbols.</li>
          <li>SHADING: Each card is solid, open, or striped.</li>
        </ol>
        <p>
          A 'Set' consists of three cards in which each feature is EITHER the
          same on each card OR is different on each card. In other words, any
          feature in the 'Set' of three cards is either common to all three
          cards or is different on each card.
        </p>
        <div>
          An example of a set is 3 cards with:
          <ul>
            <li>color: different on each card,</li>
            <li>symbol: oval (the same on each card),</li>
            <li>number: two (the same on each card),</li>
            <li>shading: solid (the same on each card)</li>
          </ul>
          {/* 1) oval solid blue 2 oval solid blue 2 oval solid red 2 oval solid red
          2 oval solid green 2 oval solid green 2 2) color: different on each
          card, symbol: different on each card, number: different on each card,
          shading: different on each card diamond striped blue 2 diamond striped
          blue 2 squiggle solid red 1 oval open green 3 oval open green 3 oval
          open green 3 3) color: the same on each card (green), symbol: the same
          on each card (diamond), number: different on each card, shading:
          different on each card diamond solid green 2 diamond solid green 2
          diamond striped green 3 diamond striped green 3 diamond striped green
          3 diamond open green 1 */}
        </div>
      </div>
    </div>
  );
};

export default Rules;
