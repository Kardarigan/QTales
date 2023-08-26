import Blogs from "./Blogs";
import useFetch from "./useFetch";


const Home = () => {
  const {data: tale, isLoading, error} = useFetch("http://localhost:7088/tale")


  return (
    <div className="home">
        {error && <div>{ error }</div>}
      {isLoading && <div>Loading Page . . .</div>}
      {tale && (
        <Blogs
          tale={tale}
          title="Tales List :"
        />
      )}
    </div>
  );
};

export default Home;
