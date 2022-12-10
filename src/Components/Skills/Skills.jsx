import React from 'react'
import { SkillsBar } from './Molecule/SkillsBar'
import { Title } from './Molecule/Title'

export const Skills = () => {

  let dataBar = [
    {
      name: "HTML/CSS",
      barProgres: "90%",
      barColor: ""
    },
    {
      name: "TailwindCSS",
      barProgres: "85%",
      barColor: ""
    },
    {
      name: "Bootstrap",
      barProgres: "70%",
      barColor: ""
    },
    {
      name: "ReactJS",
      barProgres: "60%",
      barColor: ""
    },
    {
      name: "Exspress",
      barProgres: "20%",
      barColor: ""
    },
    {
      name: "Git",
      barProgres: "60%",
      barColor: ""
    },
  ]

  return (
    <div className='mx-5 mt-10  min-h-screen grid justify-center items-center'>
      <Title />
      <SkillsBar data={dataBar}/>
    </div>
  )
}
