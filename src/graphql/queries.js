import { gql } from '@apollo/client';

export const GQL_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      price(currency: USD)
      image_url
    }
  }
`;

export const GQL_CURRENCIES = gql`
  query GetCurrencies {
    currency
  }
`;
