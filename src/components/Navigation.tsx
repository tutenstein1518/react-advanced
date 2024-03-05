import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Git Search</h3>

      <span>
        <Link className="mr-2" to="/">
          Home
        </Link>
        <Link to="/favorites">favorites</Link>
      </span>
    </nav>
  );
}
