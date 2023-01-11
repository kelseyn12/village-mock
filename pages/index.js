import { Inter } from "@next/font/google";
import { AllPrograms } from "../src/components/home/all-programs";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <AllPrograms data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { programs } = await import("/data/data.json");
  return {
    props: {
      data: programs,
    },
  };
}
