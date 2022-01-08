import { gql } from "@apollo/client";

export const DASHBOARDQuery = gql`
query Company {
    company {
      employees
      founder
      valuation
      ceo
    }
  }
  `