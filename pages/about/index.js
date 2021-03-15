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
                <a href="https://github.com/heliorrfreitas" target="_blank">
                    <FaGithub className={utilStyles.socialIcons} />
                </a>               
                <a href="https://www.linkedin.com/in/helioruiramosfreitas/" target="_blank" >
                    <FaLinkedin className={utilStyles.socialIcons} />
                </a>
            </div>
            
        </Layout>
    )
}