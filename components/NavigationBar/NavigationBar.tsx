import Link from "next/link";
import Router from "next/router";
import { Button, Logo } from "..";
import useUser from "../../hooks/use-user";

const Navigationbar = (): JSX.Element | null => {
  const { user, setUser } = useUser()

  const logoff = (): void => {
    localStorage.removeItem("token");
    setUser(null);
    Router.push('/login')
  }

  return (
    <>
      <nav className="navbar relative flex flex-wrap items-center justify-between px-2 py-3">
        <Link href="/" >
          <a aria-current="page" className="text-primary-500">
            <Logo />
          </a>
        </Link>
        {user && <Button onClick={logoff}>Logoff</Button>}
      </nav>
    </>
  );
}

export default Navigationbar
