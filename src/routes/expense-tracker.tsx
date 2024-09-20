import { NavBar } from "../components/navbar"
import { FloatingLabel, Select } from "flowbite-react";
import { Table } from "flowbite-react";

export const ExpenseTracker = () => {
    return (
        <div className="">
            <NavBar />
            <h1 className="lg:text-4xl text-2xl font-bold text-center pb-10">
                Expense Tracker
            </h1>
            <div className="grid grid-flow-col justify-stretch space-x-4">

                <FloatingLabel className="bg-slate-900 text-neutral-300 " variant="outlined" label="Name" />
                <FloatingLabel className="bg-slate-900 text-neutral-300" variant="outlined" label="Est. Cost" />
                <Select id="expenseType" required>
                    <option>Expense Type</option>
                    <option>Food</option>
                    <option>Entertainment</option>
                    <option value="">Transportation</option>
                    <option value="">Emergency</option>
                </Select>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
        </div>
    )
}