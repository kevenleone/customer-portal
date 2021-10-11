import Pages from "./pages";
import customerPortalStyles from '~/apps/customer-portal/styles/app.scss';
import WebComponent from '~/shared/WebComponent';

const App = () => {
	return (
		<Pages />
	);
};

class CustomerPortal extends WebComponent {
	constructor() {
		super(App, customerPortalStyles);
	}
}

export default CustomerPortal;
