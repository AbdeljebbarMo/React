// import Contact from './component/Contact';
import Contacts from './component/Contact/Contacts';
import Navbar from './component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Provider} from './component/Context';
import AddContact from './component/Contact/AddContact';
import About from "./component/page/About"
import Test from './component/page/Test'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
// import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import PageErro from './component/page/PageErro';
function App(){
  return(
    <Provider>
      {/* <Router> */}
      <BrowserRouter>
       <div>
      <Navbar tilte = "hi react" />
      {/* <Contact name="abdeljabar"  tele= "878564564" email="abdo@gmail.com"  />
      <Contact /> */}
      <Routes>
      {/* <Switch>   */}
      {/* <AddContact/> */}
      <Route exact path='/contact' element={<Contacts/>} />
      <Route exact path='/a' element={<AddContact/>} />
      <Route exact path='/About/:id/:name' element={<About/>} />
      <Route exact path='/Test' element={<Test/>} />
      {/* <Route path="/Contacts" exact component={Contacts} />
      <Route path="/about" exact component={About} />
      <Route path="/add" exact component={AddContact} /> */}
      <Route path='/' element={<PageErro/>} />
      {/* <Route path=''  /> */}
      {/* <Contacts/> */}
      {/* </Switch> */}
      </Routes>
      </div>
      </BrowserRouter>
        {/* </Router> */}
      </Provider>
  );
}

export default App;
