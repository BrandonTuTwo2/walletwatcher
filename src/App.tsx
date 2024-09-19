import { Topbar } from "./components/topbar";

function App() {
  return (
    <div className="min-h-screen flex justify-center p-5 items-center">
      <Topbar />
      <div className="space-y-5 text-center gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Wallet Watcher
        </h1>
        <p className="max-w-lg text-sm leading-6">
          A Simple and easy to use bugdet and expense tracker
        </p>
        <button className="px-5 py-3 bg-neutral-300 rounded-md text-sm text-stone-800">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
