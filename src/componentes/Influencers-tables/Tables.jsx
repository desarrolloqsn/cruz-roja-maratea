 import React from 'react'

 import InfluencersKeys from '../../componentes/Influencers-tables/Keys'
import InfluencersFeatured from '../../componentes/Influencers-tables/Featured'
import Influencers from '../Influencers-tables/Influencers'
import InfluencersEfficient from '../../componentes/Influencers-tables/Efficient'

 
 //JSON 

 import keys from '../../datos/datos_globales_influencers_claves.json'
import featured from '../../datos/datos_globales_influencers_destacados.json'
import data from '../../datos/datos_globales_influencers_alto_impacto.json'
import efficient from '../../datos/datos_globales_influencers_eficientes.json'
import '../Graficos/Graficos.css'


 const Tables = () => {
   return (
    <div className='Tablas'> 
    
    {/* <div > */}
    <InfluencersFeatured featured={featured} />
    {/* </div> */}
    {/* <div > */}
    <InfluencersKeys keys={keys} className='row' />
    {/* </div> */}
     {/* <div> */}
     <InfluencersEfficient efficient={efficient} />
     {/* </div> */}
     {/* <div> */}
     <Influencers data={data} className='row' />

     {/* </div> */}

        
    </div>
    
     
   )
 }
 
 export default Tables