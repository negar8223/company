import { gql } from "@apollo/client";

export const CAPSULES = gql`
query Query {
  capsules {
    id
    dragon {
      active
      crew_capacity
    }
    status
    type
  }
}
`