import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import AddOns from "./pages/AddOns";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

import ThankYou from "./pages/ThankYou";
import Submit from "./pages/Submit";
import Education from "./pages/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white sm:w-[60rem] h-[50rem]   mt-[20%] sm:mt-26 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/education" element={<Education />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
