import { useMemo, useState } from "react";
import { rooms, getRoomById } from "./data/rooms";
import WelcomeScene from "./components/WelcomeScene";
import WorldMap from "./components/WorldMap";
import RoomDetail from "./components/RoomDetail";

export default function App() {
  const [scene, setScene] = useState("welcome");
  const [activeRoomId, setActiveRoomId] = useState(null);
  const [transitionName, setTransitionName] = useState("idle");

  const activeRoom = useMemo(
    () => (activeRoomId ? getRoomById(activeRoomId) : null),
    [activeRoomId],
  );

  const startGame = () => {
    setTransitionName("start");
    window.setTimeout(() => {
      setScene("map");
      setTransitionName("map-enter");
    }, 460);
  };

  const enterRoom = (roomId) => {
    setActiveRoomId(roomId);
    setTransitionName("zoom-in");
    window.setTimeout(() => {
      setScene("room");
      setTransitionName("room-enter");
    }, 360);
  };

  const returnToMap = () => {
    setTransitionName("zoom-out");
    window.setTimeout(() => {
      setScene("map");
      setTransitionName("map-return");
      setActiveRoomId(null);
    }, 300);
  };

  return (
    <main className={`app-shell transition-${transitionName}`}>
      {scene === "welcome" && <WelcomeScene onStart={startGame} />}
      {scene === "map" && <WorldMap rooms={rooms} onEnterRoom={enterRoom} />}
      {scene === "room" && activeRoom && (
        <RoomDetail room={activeRoom} onBack={returnToMap} />
      )}
      <div className="transition-vignette" aria-hidden="true" />
    </main>
  );
}
