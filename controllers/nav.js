const NavController = (req, res) => {
	const salonGap = [0, 999999];
	let min = Math.ceil(salonGap[0]);
	let max = Math.floor(salonGap[1]);
	let id = Math.round(Math.random() * (max - min) + min);

	res.json({ response: true, id });
};

export default NavController;
