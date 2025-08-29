import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import GradientDivider from './components/GradientDivider';
import ErrorPage from './components/ErrorPage';

const MainPage = () => (
	<>
		<ContactUs/>
		<GradientDivider/>
		<Testimonial/>
	</>
);

const App = () => {
	return (
		<Router>
			<Routes>
				{/* The Layout component now wraps all your pages */ }
				<Route path="/" element={ <Layout/> }>
					<Route index element={ <MainPage/> }/>
					<Route path="*" element={ <ErrorPage/> }/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;