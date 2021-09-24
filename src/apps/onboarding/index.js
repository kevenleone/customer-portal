import { AppProvider } from "./context";
import Pages from "./pages";
import onboardingStyles from '~/apps/onboarding/styles/app.scss';
import WebComponent from '~/shared/WebComponent';

const App = () => {
	return (
		<AppProvider>
			<Pages />
		</AppProvider>
	);
};

class Onboarding extends WebComponent {
	constructor() {
		super(App,onboardingStyles);
	}
}

export default Onboarding;
