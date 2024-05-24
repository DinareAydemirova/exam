import Layout from "../components/layout/Index";
import Admin from "../components/pages/admin/Index";
import Detail from "../components/pages/admin/detail/Index";
import Post from "../components/pages/admin/post/Index";
import Basket from "../components/pages/basket/Index";
import Home from "../components/pages/home/Index";
import Wishlist from "../components/pages/wishlist/Index";

const routes=[
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      }
    ]
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/post",
    element:<Post/>
  },
  {
    path:"/:id",
    element:<Detail/>
  }
]

export default routes