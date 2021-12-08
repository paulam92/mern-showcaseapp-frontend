import { useContext } from "react";
import AppContext from "../AppContext";

const PageWelcome = () => {
  const { siteStatus, toggleStatus } = useContext(AppContext);

  return (
    <div>
      <p> This is the welcome page
        The current status is: <span className="highlight">{siteStatus}</span>
      </p>
      <p>
        <button onClick={toggleStatus}>Toggle Status</button>
      </p>
    </div>
  );
};

export default PageWelcome;
