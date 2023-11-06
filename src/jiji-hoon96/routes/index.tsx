import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:storeId" element={<Store />} />
        <Route path="/store/:storeId/menu/:menuId" element={<Option />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
