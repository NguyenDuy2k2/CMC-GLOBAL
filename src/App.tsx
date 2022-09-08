import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { listCategory } from './api/Categories';
import { list } from './api/Product';
import AdminLayout from './layouts/AdminLayout';
import WebLayout from './layouts/webLayout';
import { ICategori } from './models/Categories';
import { IProduct } from './models/Products';
import ErrorsWeb from './pages/404/errorsWeb';
import Categories from './pages/admin/Categories/Categories';
import CategoriesAdd from './pages/admin/Categories/CategoriesAdd';
import CategoriesEdit from './pages/admin/Categories/CategoriesEdit';
import Dashbroad from './pages/admin/dashbroad';
import Producs from './pages/admin/Products/Producs';
import ProductAdd from './pages/admin/Products/ProductAdd';
import Login from './pages/login/login';

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategori[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data)
    }
    getCategories();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route index element={<WebLayout />} />
        <Route path='login' element={<Login />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashbroad />} />
          <Route path="products">
            <Route index element={<Producs product={products} />} />
            <Route path="add" element={<ProductAdd />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories categories={categories} />} />
            <Route path="add" element={<CategoriesAdd />} />
            <Route path=":id/edit" element={<CategoriesEdit />} />
          </Route>
          <Route path="*" element={<ErrorsWeb />} />
        </Route>

      </Routes>
    </div>
  );
}          

export default App;
