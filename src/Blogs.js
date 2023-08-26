import { Link } from "react-router-dom";

const Blogs = ({ tale, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="row d-flex justify-content-between">
                {tale.map(tale => (
                    <div className="Tale-preview" key={tale.id}>
                        <Link to={`/tale/${tale.id}`}>
                            <h2>{tale.title}</h2>
                            <p>in {tale.city}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
