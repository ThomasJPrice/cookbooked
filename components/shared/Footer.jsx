import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-border w-full max-w-[1024px] mx-auto flex py-2 justify-between text-primary font-semibold">
      <p>Made by <Link href="https://thomasprice.me">Thomas Price</Link></p>

      <Link href='https://github.com/ThomasJPrice/cookbooked'>GitHub</Link>
    </footer>
  )
}

export default Footer