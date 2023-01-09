import Link from "next/link"
import { useState } from "react"

export const Header = () => {



return(
<header>
        <nav>
          <Link href='/'>Village Logo
          </Link>
          <input
          type="text"
          placeholder="Search..."
          
        />
          <Link href='/find-programs'>Find Programs
          </Link>
          <Link href='/plan-programs'>Plan Programs
          </Link>
          <Link href='/about'>About
          </Link>
          <Link href='/donate'>Donate
          </Link>
          <button>Log in</button>
        </nav>
        

      </header>
)
};