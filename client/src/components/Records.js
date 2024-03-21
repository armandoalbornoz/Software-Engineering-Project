import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import {Link} from 'react-router-dom'
import useFetch from '../customHooks/useGetFetch'

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];


export default function Records() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : darkLogos;
  const {data: medicaldata, isPending, error} = useFetch("http://localhost:8000/medicalInfo")

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
      {medicaldata && 
      <Grid container spacing={2}>
        {medicaldata.map((record, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }} >
            <Link to={`/records/${record.id}`} style={{width:'100%', height:'100%', textDecoration: "none"}}>
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
                  title={`${record.firstName} ${record.lastName}`}
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