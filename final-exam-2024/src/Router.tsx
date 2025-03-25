import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { FinalExam } from './route/final-exam';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"></Route>
      <Route path="final-exam" element={<FinalExam />}></Route>
    </>
  )
);

export default router;
