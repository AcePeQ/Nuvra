import { useParams } from "react-router-dom";

import PageLayout from "../ui/layout/PageLayout";
import { PAGES } from "../../content/footerPages";
import Sections from "../ui/sections/Sections";



export default function StaticPage() {
  const { page: slug } = useParams();
  const page = PAGES[slug as string];

  return (
    <PageLayout seoTitle={page.seoTitle}>
      <Sections sections={page.sections} />
    </PageLayout>
  );
}