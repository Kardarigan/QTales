import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Update() {
    const { id } = useParams();

    const [Updates, changeUpdates] = useState({
        title: "",
        story: "",
        name: "",
        date: "",
        city: "",
        id: id
    });

    useEffect(() => {
        axios
            .get("http://localhost:7088/tale/" + id)
            .then(res => {
                const data = res.data;
                changeUpdates(prevUpdates => ({
                    ...prevUpdates,
                    title: data.title,
                    story: data.story,
                    name: data.name,
                    date: data.date,
                    city: data.city
                }));
            })
            .catch(err => console.log(err));
    }, [id]);

    const history = useHistory();

    const submitKey = e => {
        e.preventDefault();
        axios
            .put("http://localhost:7088/tale/" + id, Updates)
            .then(res => {
                history.push("/");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create">
            <h2>Edit Tale</h2>
            <form onSubmit={submitKey}>
                <label>Tale title</label>
                <input type="text" required value={Updates.title} onChange={e => changeUpdates({ ...Updates, title: e.target.value })} />
                <label>Your story</label>
                <textarea
                    required
                    rows={12}
                    value={Updates.story}
                    onChange={e => changeUpdates({ ...Updates, story: e.target.value })}
                ></textarea>
                <label>Author name</label>
                <input type="text" value={Updates.name} onChange={e => changeUpdates({ ...Updates, name: e.target.value })} />
                <label>Happen date</label>
                <input type="date" value={Updates.date} onChange={e => changeUpdates({ ...Updates, date: e.target.value })} />
                <label>Happen city</label>
                <input type="text" value={Updates.city} onChange={e => changeUpdates({ ...Updates, city: e.target.value })} />
                <button>Update</button>
            </form>
        </div>
    );
}

export default Update;
