import GoogleMap from '../components/GoogleMap'

const Findagym = () => {
	return (
		<div className="text-center text-white p-5">
			<h1 className="text-3xl font-bold ">Find a Crossfit box nearby</h1>
			<br />
			<p>✨ Crossfit gyms (aka box) in a beautiful city of Berlin ✨</p>
			<div className="flex justify-center">
				<GoogleMap />
			</div>
		</div>
	)
}

export default Findagym
