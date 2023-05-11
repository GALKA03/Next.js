import PostsInfo from "components/PostsInfo/@";
import Head from "next/head"
import PostInfo from "components/PostsInfo/@";
export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();
    const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }

}
export const getStaticProps = async (context) => {
   const { id } = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log('data', data)
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { post: data } };
};

const Posts = () => {
    return (
        <>   
            <Head>
            <title>Posts</title>
            </Head>    
      <PostInfo/>
    
    </>)
}
export default Posts