import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box} from  "@mui/material";
import '../../contenedores/Dashboard/Dashboard.css'

const InfluencerTable = ({ data }) => {
  const columns = [
    // { field: 'fecha', headerName: 'Fecha', width: 200 },
    { field: 'influencer', headerName: 'Influencer', width: 200 },
    { field: 'centralidad', headerName: '% Indice Influencia', width: 200 },
  ];

  const rows = Object.keys(data).flatMap(date =>
    data[date].map(item => ({
      id: `${date}-${item.Influencer}`,
      // fecha: date,
      influencer: item.Influencer,
      centralidad: item.Centralidad,
    }))
    
  ).sort((a,b) => b.centralidad - a.centralidad)

  return (
    <div style={{ height: 400, width: '40%' }}>
          <div> influencers alto impacto</div>

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

export default InfluencerTable;
