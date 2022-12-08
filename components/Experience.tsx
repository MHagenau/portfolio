import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                           max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
                      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE787]/80'>
        <ExperienceCard imageURL={'./Miscellaneous/frb.svg'}
                      featureTitle={'Frederiksberg Forsyning A/S'}
                      featureSubTitle={'Data Scientist'}
                      featureDescription={
                        `I primarily develop and maintain business intelligence platform of the corporation. This consists of dashboards made in Grafana monitoring
                        consumption data of district heating, district cooling, water and sewage. The sensor data is remotely collected several times a minute and
                        saved in a PostgreSQL database with TimescaleDB extsension. This includes automatic alarms and forecasting using machine learning on historical data.
                        Furthermore, there is a separate PowerBi platform containing reporting not related to live sensor data. Upcoming tasks consists of migrating
                        the entire IT infrastructure from an on premise solution to the could using Azure.`
                      }
                      avatars={['./Technologies/postgresql.svg',
                                './Technologies/azure.svg',
                                './Technologies/grafana.svg',
                                './Technologies/powerbi.svg',
                                './Technologies/python.svg',
                                './Technologies/pandas.svg']}/>
        <ExperienceCard imageURL={'./Miscellaneous/ens.svg'}
                      featureTitle={'Danish Energy Agency'}
                      featureSubTitle={'Advicor'}
                      featureDescription={
                        `I assisted in optimization and digitalization of internal workflows in a department developing and managing support schemes,
                        with an objective to provide financial enticement to enhance the energy efficiency of residential buildings as well as 
                        governmental buildings. This includes a substantial chunk of reporting and evaluation of the performance of the support 
                        schemes to the ministry. This was streamlined using a Mongo database, an intraside containing live reporting and internal 
                        applications made in Python using the Flask framework. The solution was hosted as Docker container deployed in a Kubernetes cluster.`
                      }
                      avatars={['./Technologies/docker.svg',
                                './Technologies/kubernetes.svg',
                                './Technologies/flask.svg',
                                './Technologies/mongodb.svg',
                                './Technologies/python.svg',
                                './Technologies/pandas.svg']}/>
      </div>
    </motion.div>
  )
}

export default Experience