import FormWriting from "./FormWriting/FormWriting";

export default function Main(props) {
  return (
    <div>
      {props.isShowingToWrite ? <FormWriting /> : <ul>{props.children}</ul>}
    </div>
  );
}
