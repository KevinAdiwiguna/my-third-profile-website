import React from 'react'
import { Card } from './Molecule/Card'
import { Title } from './Molecule/Title'

export const Team = () => {

    let colorRoles = [
        { FrontEndWeb: "0008C1" }, 
        { FrontEndMobile: "CFFDE1" }, 
        { UIUX: "FF6D28" }, 
        { BackEnd: "6D67E4" }, 
        { DevOps: "EFF5F5" }
    ]
    let teams = [
        {
            name: 'Kevin Adiwiguna',
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[1].FrontEndMobile, name: "FrontEnd Mobile Developer" },
                { color: colorRoles[2].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "https://instagram.com/kevin.adiwiguna" },
                { linkedin: "https://www.linkedin.com/in/ida-bagus-kevin-adiwiguna-0b9107256/" },
                { youtube: "https://www.youtube.com/channel/UCpc77q4G_-Q-IQriqbWyNMQ" },
                { github: "https://github.com/KevinAdiwiguna" },
            ],
            img:'https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/kevin.jpg'
        },
        {
            name: "Tenvy",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[2].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ],
            img:'https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/tenvy.png'

        },
        {
            name: "Raya",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[3].BackEnd, name: "Backend Developer" },
            ],
            socialMedia: [
                { instagram: "https://www.instagram.com/rayramd/" },
                { linkedin: "" },
                { youtube: "" },
                { github: "https://github.com/rayakeren" },
            ],
            img:'https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/raya.png'

        },
        {
            name: "Bdoeh",
            Roles: [
                { color: colorRoles[0].FrontEndWeb, name: "FrontEnd Web Developer" },
                { color: colorRoles[3].BackEnd, name: "Backend Developer" },
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ],
            img:'https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/176.png'

        },
        {
            name: "Jamharir",
            Roles: [
                { color: colorRoles[2].UIUX, name: "UI/UX Designer" }
            ],
            socialMedia: [
                { instagram: "" },
                { linkedin: "" },
                { youtube: "" },
                { github: "" },
            ],
            img:'https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/harir.jpg'
        },


    ]


    return (
        <div>
            <div className='min-h-screen flex justify-center items-center mt-40'>
                <div>
                    <Title/>
                    <Card teams={teams} />
                </div>
            </div>
        </div>
    )
}
