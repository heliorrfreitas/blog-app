import React from "react"
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import {about} from '../../about-me-data/aboutmeData'

export default function About() {
    const navLanguage = navigator.language

    return (
        <Layout>
            <div className={utilStyles.aboutMe}>
                <p>
                    
                    { 
                        navLanguage === "pt-BR" 
                            ?
                                about.introBR
                            :   about.intro
                    }
                </p>
            </div>
            
        </Layout>
    )
}