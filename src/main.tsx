import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import ErrorPage from './error-page.tsx';
import './index.css'
import { BudgetPlanner } from './routes/budget-planner.tsx';
import { ExpenseTracker } from './routes/expense-tracker.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />

  },
  {
    path: "expense",
    element: <ExpenseTracker/>
  },
  {
    path: "budget",
    element: <BudgetPlanner/>
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
