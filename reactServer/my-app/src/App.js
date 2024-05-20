import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Fixtures from "./fixtures";
import Results from "./results";
import Tables from "./tables";
import InjuryNews from "./injury";
import Transfers from "./transfers";
import Stats from "./stats";
import News from "./news";
import WatchLive from "./watchLive";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />}/>
      <Route path="fixtures" element={<Fixtures />}/>
      <Route path="results" element={<Results />}/>
      <Route path="tables" element={<Tables />}/>
      <Route path="injury_news" element={<InjuryNews />}/>
      <Route path="transfers" element={<Transfers />}/>
      <Route path="stats" element={<Stats />}></Route>
      <Route path="news" element={<News />}></Route>
      <Route path="watch_live" element={<WatchLive />}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
