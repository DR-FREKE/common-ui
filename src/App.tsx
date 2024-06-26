import { TimestampComp } from "common-ui";

function App() {
  return (
    <>
      <div>Baby are you working?</div>
      <TimestampComp
        icon="icon"
        tldr={"The begining of everything"}
        start_time={40}
      />
    </>
  );
}

export default App;
