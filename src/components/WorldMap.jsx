import { useMemo, useRef, useState } from "react";

const parsePercent = (value) => Number.parseFloat(String(value).replace("%", ""));
const formatPercent = (value) => `${value.toFixed(1)}%`;

export default function WorldMap({ rooms, onEnterRoom }) {
  const boardRef = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [positions, setPositions] = useState(() =>
    Object.fromEntries(rooms.map((room) => [room.id, { ...room.position }])),
  );

  const selectedPositionsText = useMemo(
    () =>
      rooms
        .map((room) => {
          const position = positions[room.id] ?? room.position;
          return `${room.label}: left ${position.left}, top ${position.top}, width ${position.width}, zIndex ${position.zIndex}`;
        })
        .join("\n"),
    [positions, rooms],
  );

  const updateRoomPosition = (roomId, nextPosition) => {
    setPositions((current) => ({
      ...current,
      [roomId]: {
        ...current[roomId],
        ...nextPosition,
      },
    }));
  };

  const startDrag = (event, room) => {
    if (!isEditMode || !boardRef.current) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const boardRect = boardRef.current.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const startPosition = positions[room.id] ?? room.position;
    const startLeft = parsePercent(startPosition.left);
    const startTop = parsePercent(startPosition.top);

    const handlePointerMove = (moveEvent) => {
      const deltaLeft = ((moveEvent.clientX - startX) / boardRect.width) * 100;
      const deltaTop = ((moveEvent.clientY - startY) / boardRect.height) * 100;
      updateRoomPosition(room.id, {
        left: formatPercent(startLeft + deltaLeft),
        top: formatPercent(startTop + deltaTop),
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  };

  return (
    <section className={`scene map-scene ${isEditMode ? "map-edit-mode" : ""}`} aria-label="Personal world map">
      <div className="map-atmosphere" aria-hidden="true">
        <span className="map-cloud map-cloud-left" />
        <span className="map-cloud map-cloud-right" />
        <span className="map-spark map-spark-one" />
        <span className="map-spark map-spark-two" />
        <span className="map-spark map-spark-three" />
      </div>
      <div className="map-hud">
        <div>
          <p className="scene-kicker">World Map</p>
          <h1>我的小世界地图</h1>
        </div>
        <p>选择一栋建筑，进入对应的故事房间。</p>
      </div>

      <div className="map-edit-panel">
        <button
          className="map-edit-toggle"
          type="button"
          onClick={() => setIsEditMode((value) => !value)}
        >
          {isEditMode ? "退出摆位" : "摆位"}
        </button>
        {isEditMode && (
          <pre className="map-position-readout">{selectedPositionsText}</pre>
        )}
      </div>

      <div className="world-frame">
        <div className="water-layer" aria-hidden="true" />
        <div className="world-board" ref={boardRef}>
          <img
            className="map-base-image"
            src="/assets/world/second-map-base.png"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <div className="building-layer" aria-label="可探索建筑">
            {rooms.map((room) => {
              const position = positions[room.id] ?? room.position;
              return (
                <button
                  className={`building-hotspot ${room.id}`}
                  key={room.id}
                  type="button"
                  style={{
                    left: position.left,
                    top: position.top,
                    width: position.width,
                    zIndex: position.zIndex,
                    "--accent": room.accentColor,
                    "--secondary": room.secondaryColor,
                  }}
                  onClick={() => {
                    if (!isEditMode) onEnterRoom(room.id);
                  }}
                  onPointerDown={(event) => startDrag(event, room)}
                  aria-label={`进入${room.label}：${room.subtitle}`}
                >
                  <span className="selection-ring" aria-hidden="true" />
                  <img
                    className="building-art"
                    src={room.asset}
                    alt=""
                    aria-hidden="true"
                    draggable="false"
                  />
                  <span className="map-label">
                    <strong>{room.label}</strong>
                    <small>{room.mapHint}</small>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="map-compass" aria-hidden="true">
            <span>N</span>
          </div>
        </div>
      </div>
    </section>
  );
}
