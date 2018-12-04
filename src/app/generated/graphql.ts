export interface PointInput {
  coordinates: CoordinatesInput;

  elevation: number;

  distanceFromPreviousPoint: number;
}

export interface CoordinatesInput {
  lng: number;

  lat: number;
}

export interface LineInput {
  coordinates: CoordinatesInput[];
}

// ====================================================
// Documents
// ====================================================

export namespace CreateRoute {
  export type Variables = {
    name: string;
    points: PointInput[];
    lines: LineInput[];
  };

  export type Mutation = {
    __typename?: "Mutation";

    createRoute: CreateRoute;
  };

  export type CreateRoute = {
    __typename?: "Route";

    id: string;

    points: Points[];

    lines: Lines[];

    creator: Creator;
  };

  export type Points = {
    __typename?: "Point";

    coordinates: Coordinates;

    elevation: number;

    distanceFromPreviousPoint: number;
  };

  export type Coordinates = CoordinatesFields.Fragment;

  export type Lines = {
    __typename?: "Line";

    coordinates: _Coordinates[];
  };

  export type _Coordinates = CoordinatesFields.Fragment;

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace CurrentUserRoutes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    me: Me | null;
  };

  export type Me = {
    __typename?: "User";

    createdRoutes: CreatedRoutes[];
  };

  export type CreatedRoutes = {
    __typename?: "Route";

    name: string;
  };
}

export namespace Login {
  export type Variables = {
    email: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    login: Login;
  };

  export type Login = {
    __typename?: "AuthPayload";

    token: string;

    user: User;
  };

  export type User = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace CoordinatesFields {
  export type Fragment = {
    __typename?: "Coordinates";

    lat: number;

    lng: number;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// GraphQL Fragments
// ====================================================

export const CoordinatesFieldsFragment = gql`
  fragment coordinatesFields on Coordinates {
    lat
    lng
  }
`;

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class CreateRouteGQL extends Apollo.Mutation<
  CreateRoute.Mutation,
  CreateRoute.Variables
> {
  document: any = gql`
    mutation createRoute(
      $name: String!
      $points: [PointInput!]!
      $lines: [LineInput!]!
    ) {
      createRoute(name: $name, points: $points, lines: $lines) {
        id
        points {
          coordinates {
            ...coordinatesFields
          }
          elevation
          distanceFromPreviousPoint
        }
        lines {
          coordinates {
            ...coordinatesFields
          }
        }
        creator {
          id
          name
        }
      }
    }

    ${CoordinatesFieldsFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class CurrentUserRoutesGQL extends Apollo.Query<
  CurrentUserRoutes.Query,
  CurrentUserRoutes.Variables
> {
  document: any = gql`
    query CurrentUserRoutes {
      me {
        createdRoutes {
          name
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class LoginGQL extends Apollo.Mutation<Login.Mutation, Login.Variables> {
  document: any = gql`
    mutation login($email: String!) {
      login(email: $email) {
        token
        user {
          id
          name
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
