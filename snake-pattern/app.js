import "./styles.css";

const boxObj = [];
for (let i = 100; i >= 1; i--) {
  boxObj.push(i);
  if (boxObj.length % 10 === 0) { // When every time the pushed integer's index will be a multiple of 10, it will print next 10 values in reverse order when started from 100.
    i = boxObj[boxObj.length - 1] - 10;
    for (let j = i; j <= i + 9; j++) {
      boxObj.push(j);
    }
  }
}

export default function App() {
  const boxes = boxObj.map((boxCount) => (
    <div className="snakebox">{boxCount}</div>
  ));
  return (
    <div className="App">
      <div className="snakebox-wrapper">{boxes}</div>
    </div>
  );
}
