import { NavBar } from "../components/navbar";
import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  FloatingLabel,
  Select,
  Button,
  Table,
  FloatingLabelColor,
} from "flowbite-react";

type tableData = {
  id?: number;
  name?: string;
  price?: number;
  type?: "Food" | "Entertainment" | "Transportation" | "Emergency";
};

export const ExpenseTracker = () => {
  const [tableDisplay, setTableDisplay] = useState<tableData[]>([]);
  const [limit, setLimit] = useState(0.0);
  const [budget, setBudget] = useState(0.0);
  const [foodCost, setFoodCost] = useState(0.0);
  const [entCost, setEntCost] = useState(0.0);
  const [transCost, setTransCost] = useState(0.0);
  const [emergCost, setEmergCost] = useState(0.0);
  const [limitLable, setLimitLabel] = useState("Limit");
  const [limitColour, setLimitColour] = useState<FloatingLabelColor>("default");
  const graphData = [
    { id: 0, value: budget, label: "Budget Left" },
    { id: 1, value: foodCost, label: "Food" },
    { id: 3, value: entCost, label: "Entertainment" },
    { id: 4, value: transCost, label: "Transportation" },
    { id: 5, value: emergCost, label: "Emergency" },
  ];

  function isPostativenumber(value: string) {
    return /^\d*\.?\d+$/.test(value);
  }

  return (
    <div className="">
      <NavBar />
      <h1 className="text-slate-900 lg:text-4xl text-2xl font-bold text-center pb-10">
        Expense Tracker
      </h1>
      <form
        className="justify-center flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            limit: { value: string };
          };
          const moneyLimit = target.limit.value;

          if (isPostativenumber(moneyLimit)) {
            setLimit(parseFloat(moneyLimit));
            setBudget(parseFloat(moneyLimit));
            graphData[0].value = parseFloat(moneyLimit);
            setLimitLabel("Limit");
            setLimitColour("default");
          } else {
            setLimitLabel("Invalid Input");
            setLimitColour("error");
          }
        }}
      >
        <FloatingLabel
          id="limit"
          className=""
          variant="outlined"
          label={limitLable}
          name="limit"
          color={limitColour}
        />
        <Button gradientMonochrome="cyan" className="self-center" type="submit">
          Set
        </Button>
      </form>

      <form
        className="justify-center flex flex-row gap-2 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          const tempy: tableData = {};
          const target = e.target as typeof e.target & {
            name: { value: string };
            cost: { value: string };
            type: { value: string };
          };
          const total =
            foodCost +
            entCost +
            transCost +
            emergCost +
            parseFloat(target.cost.value);

          if (total <= limit) {
            setBudget(budget - parseFloat(target.cost.value));
            tempy["name"] = target.name.value;
            tempy["price"] = parseFloat(target.cost.value);
            tempy["id"] = Math.floor(Math.random() * 1000)
            if (target.type.value === "Food") {
              tempy["type"] = "Food";
              const temp = foodCost + parseFloat(target.cost.value);
              setFoodCost(temp);
              const tempTableDisplay = tableDisplay;
              tempTableDisplay.push(tempy);
              setTableDisplay(tempTableDisplay);
            } else if (target.type.value === "Entertainment") {
              tempy["type"] = "Entertainment";
              const temp = entCost + parseFloat(target.cost.value);
              setEntCost(temp);
              const tempTableDisplay = tableDisplay;
              tempTableDisplay.push(tempy);
              setTableDisplay(tempTableDisplay);
            } else if (target.type.value === "Transportation") {
              tempy["type"] = "Transportation";
              const temp = transCost + parseFloat(target.cost.value);
              setTransCost(temp);
              const tempTableDisplay = tableDisplay;
              tempTableDisplay.push(tempy);
              setTableDisplay(tempTableDisplay);
            } else if (target.type.value === "Emergency") {
              tempy["type"] = "Emergency";
              const temp = emergCost + parseFloat(target.cost.value);
              setEmergCost(temp);
              const tempTableDisplay = tableDisplay;
              tempTableDisplay.push(tempy);
              setTableDisplay(tempTableDisplay);
            }
          }
        }}
      >
        <Select id="expenseType" required name="type">
          <option>Expense Type</option>
          <option>Food</option>
          <option>Entertainment</option>
          <option>Transportation</option>
          <option>Emergency</option>
        </Select>
        <FloatingLabel
          className=""
          variant="outlined"
          label="Name"
          name="name"
        />
        <FloatingLabel
          className=""
          variant="outlined"
          label="Est. Cost"
          name="cost"
        />

        <Button
          gradientMonochrome="cyan"
          type="submit"
          className="py-1.5 px-8 self-center"
        >
          Add
        </Button>
      </form>
      <div className="justify-center flex">
        <PieChart
          series={[
            {
              data: graphData,
              innerRadius: 75,
              outerRadius: 100,
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">remove</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {tableDisplay.map((element) => (
              <Table.Row id={element.id?.toString()} className=" dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {element.name}
                </Table.Cell>
                <Table.Cell>{element.price}</Table.Cell>
                <Table.Cell>{element.type}</Table.Cell>
                <Table.Cell>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      const eleIndex = tableDisplay.map(function (x) { return x.id; }).indexOf(element.id);
                      const tempy = tableDisplay
                      tempy.splice(eleIndex, 1)
                      setTableDisplay(tempy);
                      if (element.id) {
                        document.getElementById(element.id.toString())!.style.display = "none";
                      }

                    }}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    remove
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
