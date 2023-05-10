const HomeController = (req, res) => {
	let teste = "Page d'acceuil!!";

	res.json({ response: true, teste });
};

export default HomeController;
