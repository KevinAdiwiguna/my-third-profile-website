import React from 'react'
import { Card } from './Molecule/Card'
import { Title } from './Molecule/Title'

export const Team = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <Title />
                    <Card />
                </div>
            </div>
        </div>
    )
}
