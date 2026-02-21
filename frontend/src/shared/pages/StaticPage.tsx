import { useMemo } from "react";
import { useLocation } from "react-router-dom";


import PageLayout from "../ui/layout/PageLayout";
import { PAGES } from "../../content/footerPages";
import Sections from "../ui/sections/Sections";

function slugFromPathname(pathname: string) {
  const s = pathname.replace(/^\/+|\/+$/g, "");
  return s || "about";
}

export default function StaticPage() {
  const { pathname } = useLocation();
  const slug = useMemo(() => slugFromPathname(pathname), [pathname]);
  const page = PAGES[slug] ?? PAGES["about"];

  return (
    <PageLayout seoTitle={page.seoTitle}>
      <Sections sections={page.sections} />
    </PageLayout>
  );
}