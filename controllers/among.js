const AmongController = (req, res) => {
	let teste = "page du AmongLegends";
	let id = req.params.id;

	res.json({ response: true, teste, id });
};

export default AmongController;
