export default function getImages(path) {
	function importAll(r) {
		return r.keys().map(r);
	}

	const img = importAll(require.context(`./` + path), false, /\.(png|jpe?g|svg)$/);
	return img.map(val => val.default)
}