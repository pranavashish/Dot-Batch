import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "2000",
    },
    {
      itemName: "Surf Excel",
      itemDate: "2",
      itemMonth: "Juasdne",
      itemYear: "200asd0",
    },
    {
      itemName: "Nirma3",
      itemDate: "2sada0",
      itemMonth: "Ju3213ne",
      itemYear: "202132100",
    },
  ];

  return (
    <div>
      <Card>
        <Item itemName={response[0].itemName}>
          Hello Mein hun first item xD
        </Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item itemName={response[1].itemName}> </Item>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>{" "}
        <Item itemName={response[2].itemName}> </Item>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>
        <div className="App">Hello Ji</div>;
      </Card>
    </div>
  );
}

export default App;
