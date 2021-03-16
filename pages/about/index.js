import React from "react"
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import {about} from '../../about-me-data/aboutmeData'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'

export default function About() {
    
    return (
        <Layout>
            <div className={utilStyles.aboutMe}>
                <p>             
                    { 
                        about.intro
                    }
                </p>
            </div>
            <div> 
                <a 
                    href="https://github.com/heliorrfreitas" 
                    target="_blank" 
                    title="Github"
                    alt="click on this button to go to the my github profile"
                >
                    <FaGithub className={utilStyles.socialIcons} />
                </a>               
                <a 
                    href="https://www.linkedin.com/in/helioruiramosfreitas/" 
                    target="_blank" 
                    title="Linkedin" 
                    alt="click on this button to go to the my linkedin profile"
                >
                    <FaLinkedin className={utilStyles.socialIcons} />
                </a>
            </div>
            
        </Layout>
    )
}