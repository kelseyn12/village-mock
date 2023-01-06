import Link from "next/link"

export const Header = () => (
<header>
        <nav>
          <Link href='/'>Village Logo
          </Link>
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