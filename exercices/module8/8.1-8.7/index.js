const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { v1: uuid } = require('uuid');

// Données initiales
let authors = [
  { name: 'Robert Martin', id: uuid(), born: null },
  { name: 'Martin Fowler', id: uuid(), born: null },
  { name: 'Fyodor Dostoevsky', id: uuid(), born: null },
  { name: 'Joshua Kerievsky', id: uuid(), born: null },
  { name: 'Sandi Metz', id: uuid(), born: null },
];

let books = [
  {
    title: 'Clean Code',
    author: 'Robert Martin',
    published: 2008,
    genres: ['programming'],
    id: uuid(),
  },
  {
    title: 'Agile software development',
    author: 'Robert Martin',
    published: 2002,
    genres: ['programming'],
    id: uuid(),
  },
  {
    title: 'Refactoring, edition 2',
    author: 'Martin Fowler',
    published: 2018,
    genres: ['programming', 'refactoring'],
    id: uuid(),
  },
  {
    title: 'Refactoring to patterns',
    author: 'Joshua Kerievsky',
    published: 2004,
    genres: ['programming', 'refactoring'],
    id: uuid(),
  },
  {
    title:
        'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    author: 'Sandi Metz',
    published: 2012,
    genres: ['programming', 'design'],
    id: uuid(),
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    published: 1866,
    genres: ['classic', 'crime'],
    id: uuid(),
  },
  {
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    published: 1869,
    genres: ['classic'],
    id: uuid(),
  },
];

// Schema GraphQL
const typeDefs = `
  type Book {
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
    id: ID!
  }

  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
  }
`;

// Résolveurs
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (root, args) => {
      let filteredBooks = books;
      if (args.author) {
        filteredBooks = filteredBooks.filter(
            (book) => book.author === args.author
        );
      }
      if (args.genre) {
        filteredBooks = filteredBooks.filter((book) =>
            book.genres.includes(args.genre)
        );
      }
      return filteredBooks;
    },
    allAuthors: () => {
      return authors.map((author) => ({
        ...author,
        bookCount: books.filter((book) => book.author === author.name)
            .length,
      }));
    },
  },
  Mutation: {
    addBook: (root, args) => {
      // Si l'auteur n'existe pas, on l'ajoute à la liste
      let author = authors.find((a) => a.name === args.author);
      if (!author) {
        author = { name: args.author, id: uuid(), born: null };
        authors = authors.concat(author);
      }

      const newBook = { ...args, id: uuid() };
      books = books.concat(newBook);
      return newBook;
    },
    editAuthor: (root, args) => {
      const author = authors.find((a) => a.name === args.name);
      if (!author) {
        return null;
      }
      const updatedAuthor = { ...author, born: args.setBornTo };
      authors = authors.map((a) =>
          a.name === args.name ? updatedAuthor : a
      );
      return updatedAuthor;
    },
  },
};

// Création et démarrage du serveur Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});