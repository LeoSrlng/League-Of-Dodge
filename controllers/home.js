const HomeController = (req, res) => {
	let teste = "on passe par le back et c'est cool";

	res.json({ response: true, teste });
};

export default HomeController;
