// Import necessary dependencies
import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, useParams } from "react-router-dom";
import useFetchGet from "../customHooks/useGetFetch";
import { useState } from "react";

// Styled components
const StyledContainer = styled(Container)({
  paddingTop: (theme) => theme.spacing(4),
  paddingBottom: (theme) => theme.spacing(4),
});

const StyledPaper = styled(Paper)({
  padding: (theme) => theme.spacing(3),
});

// BlogPost component
const MedInfo = () => {
  const {id} = useParams() //Grabs the url param
  const {data: record, error, isPending} = useFetchGet(`http://localhost:8000/medicalInfo/${id}`)
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
 
    <StyledContainer  sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>
    { isPending && <div>Loading...</div> }
    { error && <div>{error}</div> }
    { deleteErr && <div>{deleteErr}</div> }


    { record && 
    
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          {`${record.firstName} ${record.lastName}`}
        </Typography>
        <Typography variant="h6" paragraph>
          {`Sex: ${record.sex}`}
        </Typography>
        <Typography variant="h6" paragraph>
          {`Height: ${record.height/ 100}m `}
        </Typography>
        <Typography variant="h6" paragraph>
          {`Weight: ${record.weight}kg`}
        </Typography>
        <Typography variant="h6" paragraph>
          {`BMI: ${record.BMI}`}
        </Typography>
        <Typography variant="h6" paragraph>
          {`Provided Message: ${record.message}`}
        </Typography>
   

      </StyledPaper>
}
    </StyledContainer>
  );
};

export default MedInfo;