import React, { useState, useEffect } from 'react';
import {Button, Select, Tooltip } from 'antd';
import jsonFechas from './../../datos/rango_fechas.json'
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOpenInNew } from 'react-icons/md'
import json from './../../datos/datos_globales_grafo_trigramas_freq.json'
import './Graficos.css'

export default function GrafoTrigramas() {
  const [fechas, setFechas] = useState(jsonFechas.fechas);
  const [filtroFecha, setFiltroFecha] = useState(fechas[0]);

  const opcionesFechas = fechas.map((fecha, index) => (
    <Select.Option key={index} value={fecha}>
      {fecha.slice(0, 10)}
    </Select.Option>
  ));


  useEffect(() => {
    const drawGraph = () => {
      const container = document.getElementById('trigramas');

      // parsing and collecting nodes and edges from the python
      const nodes = new DataSet(json[filtroFecha][0])
      const edges = new DataSet(json[filtroFecha][1])


      const data = {
        nodes: nodes,
        edges: edges
      };

      const options = {
        height: '300px',
        backgroundColor: '#000000',
        
        position: 'relative',
        float: 'left'
      };

      // create a network
      const network= new Network(container, data, options);
    };

    drawGraph();
  },[filtroFecha])


 
  const handleFiltroFechaChange = (valor) => {
    setFiltroFecha(valor);
  };

  
  return <div>
    <div className='titulo-carta'>Grafo trigramas frecuentes</div>
 
  <div className='subtitulo-carta'>
        <div>Generado con los términos más mencionados</div>
        <div className='boton-abrir-externo'>
    <Tooltip title='Abrir en otro navegador'>
    <a href={`https://qsngrafos.vercel.app/palabras/39761017-L/grafo_palabras-frecuentes-${filtroFecha}.html`} target="_blank"><Button  shape="circle">
        <MdOpenInNew/>
    </Button>
     </a>
  </Tooltip>
  </div>
        {/* <Tooltip title='Descargar Excel'>
          <Button onClick={handleDownloadExcel} type='primary' shape='circle' className='subtitulo-boton'>
            <HiDocumentDownload />
          </Button>
        </Tooltip> */}
      </div>
      <div className='carta nubepalabras'>
        <div className='fechas'>
          <Select placeholder
    ="Fechas" onChange={handleFiltroFechaChange} defaultValue={filtroFecha.slice(0, 10)}>
    {opcionesFechas}
  </Select>

  </div>
 <div id="trigramas" style={{backgroundColor:"#000041", height:"300px", borderRadius:"10px"}}></div>

</div>
</div>
};