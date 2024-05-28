import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs'; 
import { Box } from "@mui/material";
import '../../contenedores/Dashboard/Dashboard.css';
// dayjs.locale('es');
const EfficientTable = ({ efficient }) => {
  const columns = [
    // { field: 'fecha', headerName: 'Fecha', width: 200 },

    { field: 'influencer', headerName: 'Influencer', width: 200 },
    { field: 'centralidad', headerName: '% Eficiencia', width: 200 },
  ];
 

  const formatDate = (dateString) => {
    const formattedDate = dayjs(dateString.split('-')[0]).format('YYYY-MMM-DD'); 
    return formattedDate;
  };

  const rows = Object.keys(efficient).flatMap(date =>
    efficient[date].map(item => ({
      id: `${date}-${item.Influencer}`,
      // fecha: formatDate(date), // Formatear la fecha
      influencer: item.Influencer,
      centralidad: item.Centralidad,
      
    }))
  ).sort((a,b) => b.centralidad - a.centralidad);

  return (
    <div style={{ height: 400, width: '25%' }}>
      <div> Influencers eficientes</div>
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

export default EfficientTable;
