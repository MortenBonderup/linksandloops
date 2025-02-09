import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import ProductPage from './views/ProductPage';
import DetailPage from './views/DetailPage';

const router = createBrowserRouter([
  {
    path: "/linksandloops/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "product/:productId",
        element: <DetailPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
