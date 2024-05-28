import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box} from  "@mui/material";
import '../../contenedores/Dashboard/Dashboard.css'

const InfluencerKey = ({ keys }) => {
  const columns = [
    { field: 'influencer', headerName: 'Influencer', width: 200 },
    { field: 'centralidad', headerName: 'Enlace %', width: 200 },
  ];

  const rows = Object.keys(keys).flatMap(date =>
    keys[date].map(item => ({
      id: `${date}-${item.Influencer}`,
      influencer: item.Influencer,
      centralidad: item.Centralidad,
    }))
  ).sort((a,b) => b.centralidad - a.centralidad)

  return (
    <div style={{ height: 400, width: '40%' }}>
          <div> influencers claves</div>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        disableSelectionOnClick= {true}
      />
    </div>
  );
};

export default InfluencerKey;
