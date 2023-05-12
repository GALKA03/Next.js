import Link from "next/link";
import { Heading } from "../../components/Heading"
import Head from "next/head"

export const getStaticProps = async () => {
  try {const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log('data', data)
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { posts: data } }; } catch (error) {
   console.log(error)
 } 
};

const Posts = ({ posts }) => {
  return (
    <>   
      <Head>
        <title>Posts</title>
      </Head>    
      <Heading tag='h3' text='Posts list:' />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;

// import Head from "next/head";
// import Link from "next/link";
// import Heading from "../../components/Heading";

// export const getStaticProps = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { posts: data },
//   }
// };

// const Posts = ({ posts }) => { 
//   return (
//     <>
//       <Head>
//         <title>Posts</title>
//       </Head>
//       <Heading text="Posts list:" />
//       <ul>
//         {posts && posts.map(({ id, title }) => (
//           <li key={id}>
//             <Link href={`/posts/${id}`}>{title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Posts;