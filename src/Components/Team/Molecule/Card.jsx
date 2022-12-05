import React from 'react'

import rully from "../../../Assets/Images/Team/p1.jpg"
import { Roles } from '../Dot/Roles'
import { SocialMedia } from '../Dot/SocialMedia'
import { Team } from '../Team'

export const Card = () => {

    let colorRoles = [
        { FrontEndWeb: "#0008C1" },
        { FrontEndMobile: "#CFFDE1" },
        { UIUX: "#FF6D28" },
        { BackEnd: "#6D67E4" },
        { DevOps: "#EFF5F5" }
    ]
    let teams = [
        {
            name: 'Kevin Adiwiguna',
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[0].FrontEndMobile, name: "FrontEnd Mobile Developer" },
                { color: colorRoles[0].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "htts://instagram.com/kevin.adiwiguna" },
                { linkedin: "https://www.linkedin.com/in/ida-bagus-kevin-adiwiguna-0b9107256/" },
                { youtube: "https://www.youtube.com/channel/UCpc77q4G_-Q-IQriqbWyNMQ" },
                { github: "https://github.com/KevinAdiwiguna" },
            ]
        },
        {
            name: "Tenvy",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[0].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ]
        },
        {
            name: "Raya",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[0].BackEnd, name: "Backend Developer" },
            ],
            socialMedia: [
                { instagram: "https://www.instagram.com/rayramd/" },
                { linkedin: "" },
                { youtube: "" },
                { github: "https://github.com/rayakeren" },
            ]
        },
        {
            name: "Bdoeh",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[0].BackEnd, name: "Backend Developer" },
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ]
        },
        {
            name: "Jamharir",
            Roles: [
                { color: colorRoles[0].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ]
        },


    ]

    return (
        <div className='text-primary my-6 m-auto text-center grid justify-center items-center md:grid-cols-2 lg:grid-cols-3'>
                {teams.map((res, key) => {
                    return (
                        <div key={key} className='bg-primary max-w-xs text-black m-5'>
                            <img src={rully} alt="" className='w-full' />
                            <div className='py-5 my-1'>
                                <p className='text-xl'>{res.name}</p>
                                <div id='job' className='m-2 text-xxs'>
                                    <Roles teams={teams} />
                                </div>
                                <SocialMedia teams={teams} />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
