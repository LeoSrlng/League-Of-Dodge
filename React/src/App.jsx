import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./composents/Navbar.jsx";
import Routeur from "./routes/router.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routeur />
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
