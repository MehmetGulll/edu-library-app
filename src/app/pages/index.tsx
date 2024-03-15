import { gql, ApolloClient, NormalizedCacheObject } from '@apollo/client';
import createApolloClient from '../lib/apolloClient';

interface Book {
  author: string;
  category: string;
  date: string;
  id: string;
  language: string;
  name: string;
  shelf_number: string;
}

interface GetBooksProps {
 books:Book[];
}

export async function getStaticProps(): Promise<{ props: GetBooksProps }> {
  const client: ApolloClient<NormalizedCacheObject> = createApolloClient();
  const { data } = await client.query({
    query: gql`
      {
        borrow {
          author
          category
          date
          id
          language
          name
          shelf_number
        }
      }
    `,
  });

  return {
    props: {
      books: data.borrow
    },
  };
}

interface BooksProps {
  books: Book[];
}

export default function Books({ books }: BooksProps): JSX.Element {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
          <p>{book.date}</p>
        </div>
      ))}
    </div>
  );
}
