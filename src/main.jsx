import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './routes/Home.jsx'
import './style/index.css'

const router = createBrowserRouter([ // Aqui eu crio as rotas a serem usadas
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/login',
        element: <div>Ola, aqui vc faz o seu login</div>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} /> // aqui eu passo as totas definidas como argumento para Router provider
)