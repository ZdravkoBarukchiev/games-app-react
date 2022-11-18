import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import { LastGames } from "./lastGames/LastGames";

export const HomePage = () => {
  const { games } = useContext(GameContext);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>
        {games.map((x) => (
          <LastGames key={x._id} name={x.title} img={x.imageUrl} />
        ))}

        <LastGames />

        {/* Display paragraph: If there is no games  */}
        <p className="no-articles">No games yet</p>
      </div>
    </section>
  );
};
