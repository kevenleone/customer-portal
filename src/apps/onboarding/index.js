import { AppProvider } from "./context";
import Pages from "./pages";

function Onboarding() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  );
}

export default Onboarding;
