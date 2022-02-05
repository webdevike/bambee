import Link from "next/link";
import { Logo } from "..";

const Footer = (): JSX.Element | null => {
	return (
		<>
			<footer className="footer bg-primary-500" >
				<Link href="/" >
					<a aria-current="page" className="text-primary-500">
						<Logo />
					</a>
				</Link>
			</footer>
		</>
	);
}

export default Footer
