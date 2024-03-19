
import {useState, useEffect } from "react";
import MedicalInfoList from "./MedicalnfoList";
import useFetch from "../customHooks/useGetFetch";

const Home = () => {
    const {data: medicaldata, isPending, error} = useFetch("http://localhost:8000/medicalInfo")
    return (
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <p> Loading...</p>}
            {medicaldata && <MedicalInfoList medicaldata={medicaldata}/>}
        </div>
    );
}
 
export default Home;
