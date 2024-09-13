// 리액트 hooks
// 1. useState(초기값)
// 2. useRef(초기값)
// useState-> component를 리빌드해서 UI를 변경
// useRef-> 리빌드X하므로 UI유지, banila JS에서 하던대로 eventhandler를 달지 않고도 유저의 인풋값을 가져오는 함수

import { useRef } from "react";

export default function FormWriting() {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const textareaInputRef = useRef();
  const userImageInputRef = useRef();
  const imageInputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const titleInput = titleInputRef.current.value;
    const authorInput = authorInputRef.current.value;
    const textareaInput = textareaInputRef.current.value;
    const userImageInput = userImageInput.current.value;
    const imageInput = imageInput.current.value;

    console.log("titleInput::", titleInput);
    console.log("authorInput::", authorInput);
    console.log("textareaInput::", textareaInput);

    const newData = {
      id: "끝id +1",
      title: titleInput,
      content: textareaInput,
      author: authorInput,
      createdAt: Date.now(),
      image: `"${imageInput}"`,
      likes: 0,
      userImage: `"${userImageInput}"`,
      comments: 0,
    };
  }

  return (
    <form onSubmit={onSubmit} action="#">
      <input
        id="titleInput"
        type="text"
        placeholder="제목을 입력하세요."
        ref={titleInputRef}
      />
      <label htmlFor="authorInput">-----------------------</label>
      <input
        type="text"
        id="authorInput"
        placeholder="작성자"
        ref={authorInputRef}
      />
      <input
        type="text"
        id="userImageInput"
        placeholder="프로필사진의 URL을 넣어주세요."
        ref={userImageInputRef}
      />
      <input
        type="text"
        id="imageInput"
        placeholder="글에 넣을 사진의 URL을 넣어주세요."
        ref={imageInputRef}
      />
      {/* <input type="text" placeholder="당신의 이야기를 적어보세요..." /> */}
      <label htmlFor="textarea">=======================</label>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="당신의 이야기를 적어보세요..."
        ref={textareaInputRef}
      ></textarea>
      <select name="selectedCategory" defaultValue="">
        <option value="" disabled>
          카테고리를 선택해주세요
        </option>
        <option value="trending">트렌딩</option>
        <option value="latest">최신</option>
        <option value="feed">피드</option>
      </select>
      <a href="#">← 나가기</a>
      <input type="submit" value={"출간하기"} />
    </form>
  );
}
