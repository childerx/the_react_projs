import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1
        style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
          padding: ".5rem",
        }}
      >
        The_Zig_Blog
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
