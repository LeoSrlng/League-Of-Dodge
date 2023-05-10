import Home from "../composents/Home.jsx";
import Shuffle from "../composents/Shuffle.jsx";
import Among from "../composents/Among.jsx";

// import Erreur from "../Erreur.jsx";

export const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/Shuffle", element: <Shuffle /> },
	{ path: "/Among/:postId", element: <Among /> },
	// { path:'/suggestionRecettes', element:<SuggestionRecettes /> },
	// { path:'/loggin', element:<Loggin /> },
	// { path:'/deco', element:<Deco /> },
	// { path:'/admin', element:<Admin /> },
	// { path:'/addRecette', element:<AddRecette /> },
	// { path:'/showEditRecette/:postId', element:<ShowEditRecette /> },
	// { path:'/showSuggestions', element:<ShowSuggestions /> },
	// { path:'/showDetailSuggestions/:postId', element:<ShowDetailSuggestions /> },
	// { path:'/*', element:<Erreur /> }
];

// // route reservé aux personnes connecter
// export const userPath = [
//     "/deco", '/suggestionRecettes'
// ]

// // route resservé aux personnes connecter en admin
// export const adminPath = [
//     "/admin", '/addRecette', "/showEditRecette/:postId"
// ]
