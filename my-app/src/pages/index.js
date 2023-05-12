import { Heading } from "../components/Heading";
import styles from '../styles/Home.module.scss';
import Head from "next/head";
import Socials from "../components/Socials";


export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API}/socials`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch socials');
    // }
    const data = await response.json();
    console.log('data',data)
    return { props: { socials: data } };

  } catch (error) {
    console.error(error);
    return { props: { socials: null } };
  }
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text='Hello world' />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;