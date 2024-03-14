import { useNavigate, useParams } from "react-router-dom";
import useFetchGet from "../customHooks/useGetFetch";
import { useState } from "react";
import { Grid } from "@mui/material";


const UserMedInfo = () => {
    const {id} = useParams() //Grabs the url param
    const {data, error, isPending} = useFetchGet(`http://localhost:8000/medicalInfo/${id}`)
    const  [deleteErr, setDeleteErr]  = useState("");
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/medicalInfo/' + id,{
            method: 'DELETE'
        })
        .then((res) => {
            if (!res.ok)
            {
                console.log(res);
                throw Error("Could not delete the data for that resource.")
            }
            navigate('/')
        })
        .catch((err) => {
            setDeleteErr(err.message)
        })
    }

    return ( 
        <div className="medical-info-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { deleteErr && <div>{deleteErr}</div> }


            { data && (
                <Grid item xs={12} md={6}>
                    <h2>Medical Information of {data.firstName} {data.lastName} </h2>
                    <div>
                       <p> Message: {data.message}</p>
                       <p> Height: {data.height}</p>
                       <p> Weight: {data.weight}</p>  
                       <p> BMI: {data.BMI}</p>    
  
                    </div>
                   
                    <button onClick={handleDelete}> delete </button>
                </Grid>
            )}


        </div>
     );
}
 
export default UserMedInfo;