import { gql } from '@apollo/client';

// Requête pour récupérer toutes les personnes
export const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

// Mutation pour créer une nouvelle personne
export const CREATE_PERSON = gql`
  mutation AddPerson($name: String!, $phone: String, $street: String!, $city: String!) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

// Mutation pour modifier un numéro de téléphone
export const EDIT_NUMBER = gql`
  mutation EditNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      id
    }
  }
`;
