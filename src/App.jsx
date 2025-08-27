import Navbar from './Navbar.jsx';
import CartContainer from './CartContainer.jsx';
import { useGlobalContext } from './Context.jsx';

const App = () => {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<main>
				<div className="loading" style={{ marginTop: '6rem' }}></div>
			</main>
		);
	}

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
};

export default App;
