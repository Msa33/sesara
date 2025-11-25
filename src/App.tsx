import { BrowserRouter as Router } from "react-router-dom";
import MesRoutes from "./routes/MesRoutes";
import { CartProvider } from "./context/CarteContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <MesRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
