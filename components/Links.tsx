import { link } from "fs";
import { useEffect } from "react";
import { ILink, ILinks } from "./config/links";
import Link from "next/link";

export interface ILinkProps {
  link: ILink;
}

export function Links({ link }: ILinkProps) {
  return (
    <li>
      <Link href={link.link}>
        <a>{link.label}</a>
      </Link>
      {link.children && link.children.map((l) => <Links link={l} />)}
    </li>
  );
}
