import { useEffect } from "react";
import { Links } from "./Links";
import { AppLinks } from "./config/links";

export default function Layout() {
  return (
    <div>
      {AppLinks.map((l) => (
        <Links key={l.id} link={l} />
      ))}
    </div>
  );
}
