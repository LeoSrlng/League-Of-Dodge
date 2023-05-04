import { Routes, Route } from "react-router-dom";
// import Middleware from "./MidleWare.jsx";
import { routes } from "./path.jsx";

const Routeur = () => {
	return (
		<Routes>
			{routes.map((e, i) => {
				return <Route key={i} path={e.path} element={e.element} />;
			})}
		</Routes>
	);
};

export default Routeur;
