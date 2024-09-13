import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Card from "./components/Card/Card";

export default function App() {
  const [contents, setContents] = useState("빈 콘텐츠");
  const [isShowingToWrite, setIsShowingToWrite] = useState(false);

  // console.log("넘어오는값 확인:", contents);
  // setContents(Card);
  // const array = [1, 2, 3];
  // array = [1,2,3,4];
  // const 배열/객체/함수에 대하여 값을 변경하는 것은 가능하나,
  // 뭐가 안되냐, 완전히 뒤집어 씌워 변경하는 것은 불가능하다.
  // 만약 array 앞에 let이었다면, 현재의 array의 값은
  // [1,2,3,4]이다.

  // 3가지 데이터타입 undefined, null, empty string(공백)은
  // falsy한 값이지 Boolean type의 false가 아니다.
  // 숫자 0의 data-type은 Boolean type의 false가 아니라 number type이다.
  // undefined의 data-type은 undefined지 false가 아니다.
  // 1Q)null은...??
  // 공백은 false가 아니라 string타입의 공백이다.

  // <div>
  //   {galleryItems.map((item) => {
  //     return (
  //       <PhotoCard //컴포넌트에서 데이터를 전달해준다.
  //         key={item.id}
  //         {...item}
  //         //1
  //         onSelect={() => handlePhotoClick(item.description)}
  //         isClicked={description === item.description}
  //       />
  //     );
  //   })}
  //   {/* 여기선 galleryItems를 감싸는 중괄호, JSX에서
  //   JSexpression을 적기 위해 써줘야하는 그 중괄호,
  //   JSX의 syntax로서의 중괄호가 바로 map이란 메소드가
  //   반환하는 값을 할당받는 그릇(변수)가 된다. */}
  // </div>;

  const inputContent = (array) => {
    // 파라미터e는 객체

    let writtenCard = array.map((e) => (
      <Card
        // map은 배열을 반환한다.
        key={e.id} //map이란 method땜에 의무적으로 "추가"해줘야 하는 속성이 key이다. 그래서 Card component는 총 11개의 속성을 가지고 있는 듯 하다. 객체로부터 온 9개의 속성, map땜에 의무적으로 추가하게 된 key 1개, 그리고 children이란 1개의 default property.
        {...e} //:: spread operator여서 e의 속성들 9개 모두를 담고 있다.
      />
    ));

    return setContents(writtenCard);
  };

  return (
    <>
      <Header
        setContents={inputContent}
        setIsShowingToWrite={setIsShowingToWrite}
        isShowingToWrite={isShowingToWrite}
      />
      <Main isShowingToWrite={isShowingToWrite}>{contents}</Main>
    </>
  );
}
