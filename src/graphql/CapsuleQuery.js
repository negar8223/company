import { gql } from "@apollo/client";

export const CAPSULE = gql`
query Capsule($capsuleId: ID!) {
    capsule(id: $capsuleId) {
      dragon {
        active
        crew_capacity
        id
      }
      status
      type
    }
  }
  `