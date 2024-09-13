import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import SpanNav from "../SpanNav";
import { postData } from "../../DUMMY_DATA";

const { trending, latest, feed } = postData;

export default function Header(props) {
  // console.log("프롭스:", props);

  return (
    <header>
      <span>velog</span>
      <button
        onClick={() => {
          props.setIsShowingToWrite(!props.isShowingToWrite);
        }}
      >
        {props.isShowingToWrite ? "홈으로" : "새 글 작성하기"}
      </button>
      <nav>
        {/* <span onClick={() => props.setContents("트렌딩")}>트렌딩</span>
        <span onClick={() => props.setContents("최신")}>최신</span>
        <span onClick={() => props.setContents("피드")}>피드</span> */}
        <SpanNav
          setContents={() => {
            props.setContents(trending);
          }}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} />
          트렌딩
        </SpanNav>
        <SpanNav
          setContents={() => {
            props.setContents(latest);
          }}
        >
          <FontAwesomeIcon icon={faClock} />
          최신
        </SpanNav>
        <SpanNav
          setContents={() => {
            props.setContents(feed);
          }}
        >
          <FontAwesomeIcon icon={faRss} />
          피드
        </SpanNav>
      </nav>
    </header>
  );
}
