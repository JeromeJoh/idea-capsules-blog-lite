import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry,</h2>
      <p>this page is lost</p>
      <Link to="/">Go Back To Homepage</Link>
    </div>
  );
}

export default NotFound;