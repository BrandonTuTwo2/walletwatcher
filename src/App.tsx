import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="space-y-5 text-center gap-5">
        <div className="min-h-screen flex justify-center p-5 items-center">
          <div className="space-y-5 text-center gap-5">
            <h1 className="lg:text-4xl text-2xl font-bold text-black">
              Wallet Watcher
            </h1>
            <p className="max-w-lg text-sm leading-6 text-black">
              A Simple and easy to use bugdet and expense tracker and defintely a work in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
