import { useContext } from "react";
import AppContext from "../AppContext";

const PageLogin = () => {
    const { siteStatus, toggleStatus } = useContext(AppContext);
    return (
      <div>
        <p> This is the register page
          The current status is: <span className="highlight">{siteStatus}</span>
        </p>
        <p>
          <button onClick={toggleStatus}>Toggle Status</button>
        </p>
      </div>
    );
  };

export default PageLogin;