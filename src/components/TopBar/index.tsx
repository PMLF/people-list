import logo from "../../assets/logo.png";
import { Logo, TopSection } from "./styled";

const TopBar: React.FC = () => {
	return (
		<TopSection>
			<Logo alt="logo" src={logo} />
		</TopSection>
	);
};

export default TopBar;
