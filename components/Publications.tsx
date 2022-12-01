import React from 'react'
import { motion } from 'framer-motion'
import PublicationCard from './PublicationCard';

type Props = {}

function Publications({}: Props) {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                 max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
            Publications
        </h3>

        <div className='relative w-95% flex overflow-x-scroll overflow-y-hidden snap-x
                        snap-proximity z-20 scrollbar scrollbar-track-gray-400/20 
                        scrollbar-thumb-[#FFE787]/80'>
          <PublicationCard 
            imageURL={'./Technologies/U44_sketch.png'} 
            publicationTitle={
              `PCM-enhanced building envelope for improved thermal comfort 
               and energy efficiency in danish buildings`
            } 
            publicationDesc={
              `In this study, a holistic investigation of integrating phase change materials within the building 
              envelope is presented aiming to improve indoor thermal comfort and reduce energy consumption. A 
              dynamic energy modeling and performance evaluation of building envelope enhanced with phase change 
              materials under Danish conditions are carried out. Four case study pilot buildings are considered, 
              where the corresponding holistic dynamic energy models are developed and calibrated using actual 
              collected data. Using the calibrated energy models, the impact of a PCM-enhanced building envelope 
              in the four cases is simulated and evaluated on both thermal comfort and energy consumption.`
            } 
            currPublications={'1'}
            link={'https://doi.org/10.26868/25222708.2021.30266'}
            authors={'Morten Hagenau, Muhyiddine Jradi'}
          />

          <PublicationCard 
            imageURL={'./Technologies/brew_tanks.png'} 
            publicationTitle={
              `Agent-based Assessment of Energy Flexibility Potential in the Danish Brewery Industry`
            } 
            publicationDesc={
              `To enable industries' benefit and transition towards industry 4.0, intelligent solutions addressing 
              and uncovering energy flexibility in the production processes are required. Breweries are one of the 
              industries that have high energy flexibility potentials, and breweries can utilize substantial amounts 
              of energy for cooling fermentation tanks as a result of the heat generated by the yeast. This paper 
              investigates the energy flexibility potentials of fermentation tanks by using refrigeration based on 
              a case study of a Danish brewery. To optimize the energy flexibility, the multi-agent simulation is 
              applied for modeling the brewery fermentation process. Multi-agent simulation allows defining behavioral 
              logic for each fermentation tank and each tank behaves independently based on the input parameters and 
              environmental factors. The tanks are gathered in an agent population and used for implementing a temperature 
              control strategy based on agent characteristics. An energy flexibility potential using temperature adjustment 
              is uncovered by the adaption of the temperature adjustment strategy, and an electricity cost saving of the 
              0.75 % current operation in a 2-year period is found. With a multi-agent system approach, the finding 
              contributes to the decision making of industries regarding the future optimization of energy flexibility 
              in industrial processes.`
            } 
            currPublications={'2'}
            link={'https://www.researchgate.net/publication/342708821_Optimization_of_Energy_Flexibility_in_Cooling_Process_for_Brewery_Fermentation_with_Multi-Agent_Simulation'}
            authors={'Daniel Anthony Howard, Zheng Grace Ma, Jacob Alstrup Engvang, Morten Hagenau, Kathrine Lau Jorgensen, Jonas Fausing Olesen, Bo Nørregaard Jørgensen'}
          />

          <PublicationCard 
            imageURL={'./Technologies/schedule_office.png'} 
            publicationTitle={
              `Dynamic modeling and performance evaluation of building 
              envelope enhanced with phase change material under Danish conditions`
            } 
            publicationDesc={
              `Alongside active energy improvements dealing with energy supply systems and building devices and services, passive 
              techniques targeting enhancing the building envelope are demonstrated as viable options to improve the overall 
              building performance. In this study, a holistic investigation of integrating phase change materials within the building 
              envelope is presented aiming to improve indoor thermal comfort and reduce energy consumption. Thus, dynamic energy 
              modeling and performance evaluation of building envelope enhanced with phase change materials under Danish conditions 
              is carried out. A standard Danish office is considered as a case study where a systematic screening of 17 PCMs is 
              performed to select the optimal PCM based on EnergyPlus dynamic energy simulations. A PCM with a melting temperature 
              of 24 ∘C, a crystallization temperature of 21 ∘C, and a latent heat of fusion of 219 kJ/kg was identified. In addition, 
              a parametric analysis is carried out to evaluate the impact of the PCM thickness and location within the building envelope 
              on the energy performance and the indoor thermal comfort. It was shown that using a 40 mm PCM layer placed on the interior 
              side of the building components provide the best scenario. Based on the results of the parametric analysis, the 
              implementation of the optimal PCM to enhance the building envelope of four case study buildings is carried out. This 
              includes a standard one-story single-family house, two-story house, apartment building and an office building. Nevertheless, 
              a sensitivity analysis is performed to assess the effect of various factors on the PCM selection under Danish conditions. 
              It is shown that the building insulation level, room cooling and heating set-points, as well as the ambient weather conditions 
              have a large impact on identifying the best performing PCM for Danish buildings.`
            } 
            currPublications={'3'}
            link={'https://doi.org/10.1016/j.est.2020.101536'}
            authors={'Morten Hagenau, Muhyiddine Jradi'}
          />

          <PublicationCard 
            imageURL={'./Technologies/tool_danBERA.png'} 
            publicationTitle={'DanBERA: A tool for Danish buildings energy renovation design and assessment'} 
            publicationDesc={
              `The paper presents the development and implementation of DanBERA tool for Danish buildings energy renovation design and 
              assessment. Unlike the static tools used in the current building renovation market, DanBERA is based on dynamic energy 
              performance simulations of case study buildings considering various building characteristics and specifications and taking 
              into account the dynamic impact of occupancy and weather conditions. The tool uses a systematic and comprehensive renovation 
              assessment methodology considering technical, economic and environmental impacts. A list of standard energy renovation 
              measures is considered, targeting the building physical envelope upgrade in addition to energy systems performance improvement 
              and installation of renewable energy systems. In addition, DanBERA provides a comprehensive assessment of various renovation 
              measures and packages, yet using limited number of inputs including building type, indoor floor area, construction or last 
              renovated year and location. The possibility of having a building ventilation system is also available. Four major building 
              categories are included in the current version, single-story and two-story residential houses, residential apartments and 
              office buildings. The tool implementation is demonstrated in the paper by considering 3 Danish case studies and reporting 
              the renovation design and assessment results regarding energy consumption and indoor air quality.`
            } 
            currPublications={'4'}
            link={'https://doi.org/10.1088/1757-899X/609/7/072057'}
            authors={'Muhyiddine Jradi, Sandra Andersen, Morten Hagenau'}
          />
        </div>

        <div className='w-full absolute top-[30%] bg-[#FFE787]/10 left-0 h-[500px] 
                        -skew-y-12'/>
    </motion.div>
  )
}

export default Publications