export default function WelcomeScene({ onStart }) {
  return (
    <section className="scene welcome-scene" aria-labelledby="welcome-title">
      <h1 id="welcome-title" className="sr-only">
        进入我的小世界
      </h1>
      <img
        className="welcome-art"
        src="/assets/welcome/final-start-background.png"
        alt=""
        aria-hidden="true"
      />
      <div className="welcome-title-wrap" aria-hidden="true">
        <span className="welcome-title-small">Welcome to</span>
        <span className="welcome-title-main">My Little World</span>
      </div>
      <button className="start-journey-button" type="button" onClick={onStart}>
        <img
          src="/assets/welcome/enter-island-board.png"
          alt=""
          aria-hidden="true"
        />
        <span className="sr-only">开始游戏</span>
      </button>
    </section>
  );
}
