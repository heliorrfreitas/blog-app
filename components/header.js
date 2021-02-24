import React from "react"
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

function Header(){
    return(
        <div className={utilStyles.headerMenu}>
            <Link href="/">
            <a >{"Blog"}</a>
            </Link>            
            <Link href="/about">
            <a >{"About me"}</a>
            </Link>
            <Link href="/portfolio">
            <a >{"Portfolio"}</a>
            </Link>

        </div>
    )
}

export default Header