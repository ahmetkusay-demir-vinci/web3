import { OpinionsProviderWrapper } from "contexts/OpinionsContext";
import App from "components/App/App";

const AppLoader = () => {
  return (
    <OpinionsProviderWrapper>
      <App />
    </OpinionsProviderWrapper>
  );
};

export default AppLoader;
