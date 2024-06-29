import { Logo } from "@/assets"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="max-w-[1024px] w-full mx-auto px-2 flex justify-between items-center py-2">
      <Link href='/'>
        <Image src={Logo} width={200} height={10} objectFit="contain" />
      </Link>

      <div className="flex gap-2">
        <Button variant='link'>
          <Link href='/bookmarks'>My Bookmarks</Link>
        </Button>

        <Button>
          <Link href='https://github.com/ThomasJPrice/cookbooked'>GitHub</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar