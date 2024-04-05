import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import useFetch from '../customHooks/useGetFetch'
import {useAuthContext} from '../customHooks/useAuthContext'
import { useState } from 'react';


export default function Records() {
  const {data: medicaldata, isPending, error} = useFetch("http://localhost:3001/records")
  const {user} = useAuthContext()
  const [ recordPage, setRecordPage ] = useState(1)

  const recordPageNext = () => {
    const maxPageNumber = Math.ceil(medicaldata.length / 10)
    if (recordPage === maxPageNumber){return}
    setRecordPage(recordPage + 1)
  }

  const recordPagePrev = () => {
    const minPageNumber = 1
    if (recordPage === minPageNumber){return}
    setRecordPage(recordPage - 1)
  }

  return (

    <Container
      id="Records"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
         {error && <div>{error}</div> }
         {isPending && <p> Loading...</p>}
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Records
        </Typography>
 
      </Box>
      <Box
        sx={{
          fontSize: 55, 
          width: 60, 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          alignSelf: 'start',
        }}
      >
        <Box style={{cursor: 'pointer'}} onClick={recordPagePrev}>&#8249;</Box>
        <Box style={{cursor: 'pointer'}} onClick={recordPageNext}>&#8250;</Box>
      </Box>
      {medicaldata && 
      <Grid container spacing={2}>
        {medicaldata.slice((recordPage - 1) * 10, (recordPage - 1) * 10 + 10).map((record, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }} >
            <Link to={`/records/${record._id}`} style={{width:'100%', height:'100%', textDecoration: "none"}}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {record.message}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={`${user.name} ${user.lastName}`}
                />
              </Box>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      }
    </Container>
  );
}