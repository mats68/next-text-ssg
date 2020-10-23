import { useEffect } from "react";
import { AppLinks, ILink, ILinks } from "./config/links";
import { Links } from "./Links";

const traverseLinks = (links: ILinks, pLink?: ILink) => {
  links.forEach((l) => {
    if (pLink) {
      if (!l.link) l.link = pLink.link;
      l.numbering = pLink.numbering + "." + l.id.toString().split("").pop();
    } else {
      l.numbering = l.id.toString();
    }
    if (l.children) traverseLinks(l.children, l);
  });
};

export default function Layout() {
  useEffect(() => {
    traverseLinks(AppLinks);
    console.log(AppLinks);
  }, []);
  return (
    <ul>
      {AppLinks.map((l) => (
        <Links link={l} />
      ))}
    </ul>
  );
}
