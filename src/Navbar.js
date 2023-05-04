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
        The Zig Blog
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
