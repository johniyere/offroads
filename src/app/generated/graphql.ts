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
  export interface Variables {
    name: string;
    points: PointInput[];
    lines: LineInput[];
  }

  export interface Mutation {
    __typename?: 'Mutation';

    createRoute: CreateRoute;
  }

  // tslint:disable-next-line:no-shadowed-variable
  export interface CreateRoute {
    __typename?: 'Route';

    id: string;

    points: Points[];

    lines: Lines[];

    creator: Creator;
  }

  export interface Points {
    __typename?: 'Point';

    coordinates: Coordinates;

    elevation: number;

    distanceFromPreviousPoint: number;
  }

  export type Coordinates = CoordinatesFields.Fragment;

  export interface Lines {
    __typename?: 'Line';

    coordinates: _Coordinates[];
  }

  export type _Coordinates = CoordinatesFields.Fragment;

  export interface Creator {
    __typename?: 'User';

    id: string;

    name: string;
  }
}

export namespace CurrentUserRoutes {
  // tslint:disable-next-line:no-empty-interface
  export interface Variables {}

  export interface Query {
    __typename?: 'Query';

    me: Me | null;
  }

  export interface Me {
    __typename?: 'User';

    createdRoutes: CreatedRoutes[];
  }

  export interface CreatedRoutes {
    __typename?: 'Route';

    name: string;
  }
}

export namespace Login {
  export interface Variables {
    email: string;
  }

  export interface Mutation {
    __typename?: 'Mutation';

    login: Login;
  }

  // tslint:disable-next-line:no-shadowed-variable
  export interface Login {
    __typename?: 'AuthPayload';

    token: string;

    user: User;
  }

  export interface User {
    __typename?: 'User';

    id: string;

    name: string;
  }
}

export namespace CoordinatesFields {
  export interface Fragment {
    __typename?: 'Coordinates';

    lat: number;

    lng: number;
  }
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

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
  providedIn: 'root'
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
  providedIn: 'root'
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
  providedIn: 'root'
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
