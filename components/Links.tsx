import { ILink } from "./config/links";
import Link from "next/link";
import styles from "../styles/Links.module.css";

export interface ILinkProps {
  link: ILink;
}

export function Links({ link }: ILinkProps) {
  const style = {
     marginLeft: ((link.indent + 1)  * 5).toString() + 'px' 
  }
  return (
    <div>
      <Link href={link.link || ""}>
        <a className={styles.link} style={style}>
          {link.numbering} {link.label}
        </a>
      </Link>
      {link.children && link.children.map((l) => <Links key={l.id} link={l} />)}
    </div>
  );
}
