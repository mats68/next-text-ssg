import { ILink } from "./config/links";
import Link from "next/link";
import styles from "../styles/Links.module.css";
import { useRouter } from 'next/router'

export interface ILinkProps {
  link: ILink;
}

export function Links({ link }: ILinkProps) {
  const style = {
     marginLeft: ((link.indent + 1)  * 5).toString() + 'px' 
  }

  const activeLink = (): boolean => {
    const router = useRouter()
    const pfad = router.asPath.split('#')
    const lk = (pfad && pfad.length > 0) ? pfad[0] : '/'
    const fragment = (pfad && pfad.length > 1) ? pfad[1] : undefined
    return (lk === link.link) && (fragment === link.fragment) 

  }

  const strLink = link.link + (link.fragment ? '#' + link.fragment : '')

  return (
    <div>
      <Link href={strLink}>
        <a className={activeLink() ? styles.linkselected : styles.link} style={style}>
          {link.numbering} {link.label}
        </a>
      </Link>
      {link.children && link.children.map((l) => <Links key={l.id} link={l} />)}
    </div>
  );
}
