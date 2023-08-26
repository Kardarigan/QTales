import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, changeTile] = useState('');
    const [story, changeStory] = useState('');
    const [name, changeAurhor] = useState('');
    const [date, changeDate] = useState('');
    const [city, changeCity] = useState('');
    const [Loading, changeLoading] = useState(false);
    const history = useHistory();


    const submitKey = (e) => {
        e.preventDefault();
        const fullTale = {title, story, name, date, city};
        
        changeLoading(true)
        fetch("http://localhost:7088/tale/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fullTale)
        }).then(() => {
            changeLoading(false);
            console.log('Your story add');
            history.push('/');
        })
    }

    return(
        <div className="create">
            <h2>Add new Personal Tale</h2>
            <form onSubmit={submitKey}>
                <label>Tale title</label>
                <input type="text" required value={title} onChange={(e) => changeTile(e.target.value)} />
                <label>Your story</label>
                <textarea required rows={12} value={story} onChange={(e) => changeStory(e.target.value)} ></textarea>
                <label>Author name</label>
                <input type="text" value={name} onChange={(e) => changeAurhor(e.target.value)} />
                <label>Happen date</label>
                <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} />
                <label>Happen city</label>
                <input type="text" value={city} onChange={(e) => changeCity(e.target.value)} />
                {!Loading && <button>add this new Tale</button>}
                {Loading && <button disabled>add Tale . . .</button>}
            </form>
        </div>
        )
}
 
export default Create;