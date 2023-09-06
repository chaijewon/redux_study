import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import {Provider} from "react-redux";
import store from './store/store'
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
        <div className={"container"}>
          <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route path={"/food/food_list/:cno"} element={<FoodList/>}/>
              <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
            {/*<Route path={"/food/food_list/:cno"} element={<FoodList/>}/>
            <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
            <Route path={"/seoul/location"} element={<Location/>}/>
            <Route path={"/seoul/shop"} element={<Shop/>}/>
            <Route path={"/seoul/nature"} element={<Nature/>}/>
            <Route path={"/food/find"} element={<Find/>}/>
            <Route path={"/news/news_find"} element={<News/>}/>*/}
          </Routes>
        </div>
      </Router>
      </Provider>
  );
}

export default App;