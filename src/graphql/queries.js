import { gql } from '@apollo/client';

export const GQL_PRODUCTS = gql`
  query GetProducts($currency: Currency!) {
    products {
      id
      title
      price(currency: $currency)
      image_url
    }
  }
`;

export const GQL_CURRENCIES = gql`
  query GetCurrencies {
    currency
  }
`;
