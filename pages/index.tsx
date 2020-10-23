import { useEffect } from "react";
import Layout from "../components/Layout";
import {
  AppLinks,
  traverseLinks,
  ILink,
  ILinks,
} from "../components/config/links";

export default function Home() {
  traverseLinks(AppLinks);

  return <Layout>Hello</Layout>;
}
