import { Heading } from "components/Heading/@"
import Head from "next/head"
import Link from "next/link";


export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // console.log('data', data)
   if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: { contacts: data } }
   } catch (error) {
    console.log(error)
  }
    
}

const Contacts = ({contacts}) => {



  return (
    <>
       <Head>
            <title>Contacts</title>
            </Head>   
      <Heading text='Contacts list:' />
      <ul>
        {contacts && contacts.map(({ id, name, email, website }) => (
           <li key={id}>
           <Link href={`/contacts/${id}`}>{name}</Link>
            <p>{ website}</p>
          </li>
        )
          
        )
}

      </ul>
    </> 
    )
}
export default Contacts