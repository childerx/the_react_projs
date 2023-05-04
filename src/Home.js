import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="ALL BLOGS" /> //handleDelete={handleDelete}//
      )}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "nana kwame")}
        title="NANA KWAME'S"
      /> */}
    </div>
  );
};

export default Home;
