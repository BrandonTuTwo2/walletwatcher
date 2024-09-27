import { NavBar } from "../components/navbar"
import { FloatingLabel, Select, Button, Table, FloatingLabelColor } from "flowbite-react";
import { useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';

export const ExpenseTracker = () => {
  //const [curExpenseName, setCurExpenseName] = useState("");
  //const [curExpenseCost, setCurExpenseCost] = useState(0);
  const [limit, setLimit] = useState(0.0)
  const [foodCost, setFoodCost] = useState(0.0)
  const [entCost, setEntCost] = useState(0.0)
  const [transCost, setTransCost] = useState(0.0)
  const [emergCost, setEmergCost] = useState(0.0)
  const [limitLable, setLimitLabel] = useState("Limit")
  const [limitColour, setLimitColour] = useState<FloatingLabelColor>("default")
  const graphData = [
    { id: 0, value: limit, label: 'Budget Left' },
    { id: 1, value: foodCost, label: 'Food' },
    { id: 3, value: entCost, label: 'Entertainment'},
    { id: 4, value: transCost, label: 'Transportaion'},
    { id: 5, value: emergCost, label: 'Emergency'},
  ]

  function isPostativenumber(value: string) {
    return /^\d*\.?\d+$/.test(value);
  }

  return (
    <div className="">
      <NavBar />
      <h1 className="text-slate-900 lg:text-4xl text-2xl font-bold text-center pb-10">
        Expense Tracker
      </h1>
      <form className="justify-center flex gap-2" onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          limit: { value: string };
        }
        const moneyLimit = target.limit.value;

        if (isPostativenumber(moneyLimit)) {
          setLimit(parseFloat(moneyLimit))
          graphData[0].value = parseFloat(moneyLimit)
          setLimitLabel("Limit");
          setLimitColour("default");
        } else {
          console.log("WOMP WOMP");
          setLimitLabel("Invalid Input");
          setLimitColour("error");
        }
      }}>
        <FloatingLabel id="limit" className="" variant="outlined" label={limitLable} name="limit" color={limitColour} />
        <Button gradientMonochrome="cyan" className="self-center" type="submit">Set</Button>
      </form>

      <form className="justify-center flex flex-row gap-2 py-2"onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          name: { value: string };
          cost: { value: string};
          type: { value: string};
        }

        console.log(target.name.value);
        console.log(target.cost.value);
        console.log(target.type.value);

        if (target.type.value === "Food") {
          const temp = foodCost + parseFloat(target.cost.value);
          setFoodCost(temp);
        }
      }}>
        <Select id="expenseType" required name="type">
          <option>Expense Type</option>
          <option>Food</option>
          <option>Entertainment</option>
          <option value="">Transportation</option>
          <option value="">Emergency</option>
        </Select>
        <FloatingLabel className="" variant="outlined" label="Name" name="name" />
        <FloatingLabel className="" variant="outlined" label="Est. Cost"  name="cost"/>

        <Button gradientMonochrome="cyan" type="submit" className="py-1.5 px-8 self-center">Add</Button>
      </form>
      <div className="justify-center flex">
      <PieChart
        series={[
          {
            data: graphData,
            innerRadius: 75,
            outerRadius: 100
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
            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
            </Table.Row>
            <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
            </Table.Row>
            <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}