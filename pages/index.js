import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import LatestCode from "@components/LatestCode";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Maxime Baudin - Developpeur"
      description="Ce site est réalisé comme site vitrine"
    >
      <Hero />
      <LatestCode></LatestCode>
    </ContainerBlock>
  );

}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};


// export async function getStaticProps() {
  
//   return {
//     props: { skills },
//   };
// }