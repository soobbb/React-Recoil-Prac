// 컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 아래와 같이 사용하면 된다.
import { useRecoilState, useRecoilValue, selector } from "recoil";
import { textState } from "../../Atom/Atom";

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
// Selector는 파생된 상태(derived state)의 일부를 나타낸다. 파생된 상태는 상태의 변화다.
//  파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수 함수에 전달된 상태의 결과물로 생각할 수 있다.
export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
//  useRecoilValue() 훅을 사용해서 charCountState 값을 읽을 수 있다.
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
