import React from 'react'
import { LinkedIn } from '../SocialMedia/LinkedIn'
import { Github } from '../SocialMedia/Github'
import { Instagram } from '../SocialMedia/Instagram'
import { Youtube } from '../SocialMedia/Youtube'


export const SocialMedia = ({ team }) => {
    let socialMedia = team.socialMedia
    return (
        <span id='social-media'>
            <Instagram res={socialMedia}/>
            <Github res={socialMedia}/>
            <LinkedIn res={socialMedia}/>
            <Youtube res={socialMedia}/>
        </span>
    )
}
