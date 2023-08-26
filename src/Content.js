import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Content() {
    const { id } = useParams();
    const history = useHistory();
    const { data: tale, isLoading, error } = useFetch("http://localhost:7088/tale/" + id);

    const handleDel = () => {
        fetch("http://localhost:7088/tale/" + tale.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <div className="tale-content">
            {isLoading && <div>Loading Page . . .</div>}
            {error && <div>{error}</div>}
            {tale && (
                <article>
                    <h1>{tale.title}</h1>
                    <h4>by {tale.name}</h4>
                    <p>
                        Happens in {tale.city} at {tale.date}
                    </p>
                    <br />
                    <p>{tale.story}</p>
                    <button onClick={handleDel}>Delete</button>
                    <Link to={`/Update/${tale.id}`}>
                        <button>Edit</button>
                    </Link>
                </article>
            )}
        </div>
    );
}
