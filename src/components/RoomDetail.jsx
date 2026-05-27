function RoomInterior({ room }) {
  return (
    <div className={`room-interior ${room.id}`} style={{ "--accent": room.accentColor, "--secondary": room.secondaryColor }}>
      <div className="room-back-wall" />
      <div className="room-floor-grid" />
      <div className="room-feature">
        <img
          className="room-feature-art"
          src={room.asset}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
      </div>
      <div className="room-props" aria-hidden="true">
        <span className="prop prop-one" />
        <span className="prop prop-two" />
        <span className="prop prop-three" />
        <span className="prop prop-four" />
      </div>
      <div className="room-glow" />
    </div>
  );
}

export default function RoomDetail({ room, onBack }) {
  return (
    <section className="scene room-scene" aria-labelledby={`${room.id}-title`}>
      <div className="room-shell" style={{ "--accent": room.accentColor, "--secondary": room.secondaryColor }}>
        <button
          className="back-button"
          type="button"
          onClick={onBack}
          aria-label="返回地图"
        >
          <span aria-hidden="true">←</span>
          返回地图
        </button>

        <div className="room-stage">
          <RoomInterior room={room} />
        </div>

        <div className="room-content">
          <p className="scene-kicker">Room Detail</p>
          <h1 id={`${room.id}-title`}>{room.title}</h1>
          <p className="room-subtitle">{room.subtitle}</p>

          <div className="quest-list">
            {room.items.map((item) => (
              <article className="quest-card" key={item.title}>
                <div>
                  <span>{item.meta}</span>
                  <h2>{item.title}</h2>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
