/* eslint-disable no-unused-vars */
import { RouterProvider } from "react-router";
import { ApiUrl } from "./components/context/api";
import { router } from "./components/routes/Routes";

function App() {
  const api = "http://localhost:3000/api";

  return (
    <>
      <ApiUrl.Provider value={api}>
        <RouterProvider router={router} />
      </ApiUrl.Provider>
    </>
  );
}

export default App;
