import { Link } from "react-router-dom";
import "./error.scss";

export default function Error() {
  return (
    <div className="container">
      <h2>404 Error - Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
