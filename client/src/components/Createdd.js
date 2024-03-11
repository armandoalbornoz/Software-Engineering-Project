import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSumbit = (e) =>
    {
        e.preventDefault();  // prevent page refresh
        const data = {height, weight}
        setIsPending(true);

        fetch("http://localhost:8000/medicalInfo", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (!res.ok)
            {
                console.log(res);
                throw Error("Could not send the data to the server.")
            } 
            setIsPending(false);
            navigate("/")

        })
        .catch((err) =>{
            setError(err.message)
        })

    }

    return ( 
        <div className="create">
            <h2>Add Medical Record</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSumbit}>
                <label>Height  in feet: </label>
                <input 
                type="number" 
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
                <label>Weight in Pounds: </label>
                <input 
                type="number" 
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
                  <label>Message: </label>
                <textarea  
                type="text" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                {!isPending && <button>Add Information</button>}
                {isPending && <button disabled>Adding Information</button>}

            </form>

        </div>
     );
}
 
export default Create;