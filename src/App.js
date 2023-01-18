import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Input from "./component/Input";
import Input2 from "./component/Input2";
import Create from "./component/Create";
import Theme from "./component/Theme";
import Notes from "./component/Notes";
import Layout from "./component/Layout";


function App() {
  return (
    <div>
        <BrowserRouter>
        
      {/* <Input />
      <Input2 /> */}
        <Layout>
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Theme />}/>
          <Route exact path="/notes" element={<Notes />}/>
          <Route path="/create" element={<Create />}/>
          </Routes>
        </Layout>
          </BrowserRouter>
          </div>
  );       
}

export default App;
