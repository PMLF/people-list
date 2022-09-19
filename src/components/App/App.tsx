// Styles
import { SectionStyled } from "./styled";

// Components
import TopBar from "../TopBar";
import Footer from "../Footer";
import PageContent from "../PageContent";

const App: React.FC = () => {
	return (
		<SectionStyled data-testid="app">
			<TopBar />
			<PageContent />
			<Footer />
		</SectionStyled>
	);
};

export default App;
