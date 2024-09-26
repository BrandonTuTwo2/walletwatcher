import { NavBar } from "../components/navbar"
import { FloatingLabel, Select,Button, Table, Alert} from "flowbite-react";
import { useState } from "react";

export const ExpenseTracker = () => {
    const [curExpenseName,setCurExpenseName] = useState("");
    const [curExpenseCost,setCurExpenseCost] = useState(0);
    const [limit,setLimit] = useState(0.0)

    function isPostativenumber(value: string) {
      return /^\d*\.?\d+$/.test(value);
    }

    return (
        <div className="">
            <NavBar />
            <h1 className="text-slate-900 lg:text-4xl text-2xl font-bold text-center pb-10">
                Expense Tracker
            </h1>
            <form className="justify-center flex gap-2" onSubmit={(e) =>{
              e.preventDefault();
              const target = e.target as typeof e.target & {
                limit: {value: string};
              }
              const moneyLimit = target.limit.value;

              if(isPostativenumber(moneyLimit)) {
                setLimit(parseFloat(moneyLimit))
              } else {
                console.log("WOMP WOMP");
              }
            }}>
              <FloatingLabel id="limit"className="" variant="outlined" label="Limit" name="limit" />
              <Button gradientMonochrome="cyan" className="self-center" type="submit">Set</Button>
            </form>

            <form className="justify-center flex flex-row gap-2 py-2">
            <Select id="expenseType" required>
                      <option>Expense Type</option>
                      <option>Food</option>
                      <option>Entertainment</option>
                      <option value="">Transportation</option>
                      <option value="">Emergency</option>
                  </Select>
              <FloatingLabel className="" variant="outlined" label="Name" />
                  <FloatingLabel className="" variant="outlined" label="Est. Cost" />

                <Button gradientMonochrome="cyan" type="submit" className="py-1.5 px-8 self-center">Add</Button>
            </form>
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