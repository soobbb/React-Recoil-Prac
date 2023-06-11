import React from "react";
import { RecoilRoot } from "recoil";
// recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다. 루트 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.
import { CharacterCounter } from "./Components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
