import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box} from  "@mui/material";
import '../../contenedores/Dashboard/Dashboard.css'

const InfluencerFeatured = ({ featured }) => {
  const columns = [
    { field: 'influencer', headerName: 'Influencer', width: 200 },
    { field: 'centralidad', headerName: '% Popularidad', width: 200 },
    { field: 'Seguidores', headerName: 'Seguidores', width: 200 },

  ];
  const rows = Object.keys(featured).flatMap(date =>
    featured[date].map(item => ({
      id: `${date}-${item.Influencer}`,
      influencer: item.Influencer,
      centralidad: item.Centralidad,
      Seguidores: item.Seguidores,

    }))
  ).sort((a,b) => b.centralidad - a.centralidad)

  return (
    <div style={{ height: 400, width: '40%'  }}>
          <div> influencers Destacados </div>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </div>
  );
};

export default InfluencerFeatured;
