import React from "react"
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

function Header(){
    return(
        <div className={utilStyles.headerMenu}>
            <Link href="/">
            <a >{"Home"}</a>
            </Link>
            <Link href="/">
            <a >{"About me"}</a>
            </Link>
            <Link href="/">
            <a >{"Portfolio"}</a>
            </Link>
            <Link href="/">
            <a >{"Blog"}</a>
            </Link>
        </div>
    )
}

export default Header