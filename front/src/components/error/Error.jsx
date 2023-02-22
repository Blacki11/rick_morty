import { Link } from "react-router-dom";
export default function error() {
  return (
    <div>
      <Link to="/home">
        <h1>ERROR 404</h1>
      </Link>
      <p>Click en "ERROR 404" para volver a home</p>
    </div>
  );
}
