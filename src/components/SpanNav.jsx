// 1Q)아ㅠㅠ... 클릭할 수 있는 영역이란 걸 유저에게
// 사전에 표시 하고싶어서 hovering하면 손가락의
// 커서로 변하게 하고 싶은데 ㅠㅠ...

export default function SpanNav(props) {
  return (
    <span onClick={props.setContents}>{props.children}</span>
    // 아... 손자에게 메소드를 pass하고싶은데 성공 결과보다도
    // 자꾸 에러났던 이유가,
    // locating bad setState, setContents is not a function(<=The error message, "props.setContents is not a function," suggests that setContents is either not defined or not passed as a prop into the SpanNav component when you expect it to be),
    // the error occurred in props.setContents in SpanNav.jsx
    // 등등의 DevTools of Edge의 Console에서 나온 메세지들과
    // 관련성이 멀었고,
    // 함수참조를 안하고 대신 html렌더링시 바로 호출되는
    // 함수실행코드를 쓴지라, 원하던 목표인 손자에게 메소드
    // pass를 코드결함없이 잘 썼더라도 다른 문제로 인해
    // 증명이 안돼서 헤매고 있었던 거네...
    // !!!function-reference vs call/execution은 파일 최하단에
    // 기록함.
  );
}
// The behavior occurs due to how JavaScript handles function execution versus function references in event handlers.

// First Version (onClick={() => props.setContents("갱신된 값")}):

// What happens: This uses an arrow function, which is a function expression that creates a new function that will be called only when the onClick event is triggered.
// Why it works: The code inside the onClick is not executed immediately because it's wrapped inside a function. When the click event happens, this function is executed, and within it, props.setContents("갱신된 값") is called.
// Reason: Wrapping the call inside a function ensures that it is deferred until the event actually occurs (the click).
// Second Version (onClick={props.setContents("갱신된 값")}):

// What happens: Here, props.setContents("갱신된 값") is executed immediately during the component's render phase, not when the click event happens.
// Why it happens: In JavaScript, when you use parentheses (()), you're calling the function immediately. In this case, you're telling JavaScript to immediately run props.setContents("갱신된 값") and then assign its result (likely undefined unless setContents returns something) to the onClick handler.
// Reason: Since there is no function wrapper, the function is evaluated right away, which is why the update happens during render instead of on click.
// Key Concept:
// Function reference vs. Function call:
// When you pass a function reference (like onClick={someFunction}), the function is not executed immediately; it's just a reference that will be called later when the event occurs.
// When you use a function call (like onClick={someFunction()}), the function is called immediately, and the result of that call is assigned to onClick, which is not what you want in most cases.
// Solution:
// To ensure the function is called only when the event happens, you need to pass a function reference (or wrap the function call inside another function, such as an arrow function).
