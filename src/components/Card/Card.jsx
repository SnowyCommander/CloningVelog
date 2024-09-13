// When you import with curly braces, it means you are importing a named export from a module.
// A module can have multiple named exports, and you use the curly braces to specify exactly which export(s) you want to import.
// The name inside the curly braces must match the name of the export in the module.
// Summary:
// Without curly braces: You are importing the default export (only one per module).
// With curly braces: You are importing a named export (the module can have multiple named exports).
// import styleCard from "./Card.module.css"; // className={styleCard.className}

export default function Card(props) {
  // 매개변수를 선언하는(?) 함수의 소괄호 안에서 객체를 구조분해하여 변수에다가 값을 할당하고,
  //남은 속성들을 ...props라고 적고, 그 props란 1개의 객체 안엔 나머지 속성들(rest props)이 할당된다.
  //이는 컴포넌트 속에서 속성값을 전달하는 방법과는 겉보기엔 비슷하나 뜻은 전혀 다른 경우이다.
  // 헷갈리기 쉬운 예시
  // let writtenCard = array.map((e) => (
  //     <Card
  //       // map은 배열을 반환한다.
  //       key={e.id} //map이란 method땜에 의무적으로 "추가"해줘야 하는 속성이 key이다. 그래서 Card component는 총 11개의 속성을 가지고 있는 듯 하다. 객체로부터 온 9개의 속성, map땜에 의무적으로 추가하게 된 key 1개, 그리고 children이란 1개의 default property.
  //       {...e} //:: spread operator여서 e의 속성들 9개 모두를 담고 있다.
  //     />
  //   ))

  return (
    <li id={props.id}>
      {/* id={props.key}로 쓰면 안된다.  */}
      <img src={props.image} alt="the image of the card" />
      <h2>{props.title}</h2>
      <article>{props.content}</article>
      <p>{`${props.createdAt} 전 · ${props.comments}개의 댓글`}</p>
      <div className="container">
        <img src={props.userImage} alt="필자의 프로필 사진" />
        <p>by</p>
        <h6>{props.author}</h6>
        <p>♥ {props.likes}</p>
      </div>
    </li>
  );
}
