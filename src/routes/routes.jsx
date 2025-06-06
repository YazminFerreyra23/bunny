import { createBrowserRouter } from "react-router"
import App from "../App"
import { SobreNosotros } from '../components/SobreNosotros';

export const routes = ()=>{
    const router = createBrowserRouter([
        {
           path:"/",
           element:< App/>,
           
        },
        {
            path:"/nosotros",
            element:<SobreNosotros/>
        }

    ]);
    return router
    
}
export default routes();
