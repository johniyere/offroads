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
  points: LinePointInput[];
}

export interface LinePointInput {
  coordinates: CoordinatesInput;

  elevation: number;
}

export type DateTime = any;

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

    name: string;

    points: Points[];

    lines: Lines[];

    creator: Creator;
  };

  export type Points = {
    __typename?: "Point";

    coordinates: Coordinates;

    elevation: number;

    distanceFromPreviousPoint: number | null;
  };

  export type Coordinates = CoordinatesFields.Fragment;

  export type Lines = {
    __typename?: "Line";

    points: _Points[];
  };

  export type _Points = {
    __typename?: "Point";

    coordinates: _Coordinates;

    elevation: number;
  };

  export type _Coordinates = CoordinatesFields.Fragment;

  export type Creator = {
    __typename?: "User";

    id: string;

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

export namespace UploadRun {
  export type Variables = {
    title?: string | null;
    comment?: string | null;
    routeId: string;
    time?: number | null;
  };

  export type Mutation = {
    __typename?: "Mutation";

    uploadRun: UploadRun;
  };

  export type UploadRun = {
    __typename?: "Run";

    id: string;

    uploader: Uploader;

    time: number | null;
  };

  export type Uploader = {
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

    id: string;

    name: string;
  };
}

export namespace ExploreRoutes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    routes: Routes[];
  };

  export type Routes = {
    __typename?: "Route";

    id: string;

    name: string;

    creator: Creator;

    createdAt: DateTime;

    avgRating: number | null;
  };

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace PopularRoutes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    popularRoutes: PopularRoutes[];
  };

  export type PopularRoutes = {
    __typename?: "Route";

    id: string;

    name: string;

    creator: Creator;

    createdAt: DateTime;

    avgRating: number | null;
  };

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace RecommendedUserRoutes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    recommendedUserRoutes: RecommendedUserRoutes[];
  };

  export type RecommendedUserRoutes = {
    __typename?: "Route";

    id: string;

    name: string;

    creator: Creator;

    createdAt: DateTime;

    avgRating: number | null;
  };

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace RouteDetails {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    route: Route;
  };

  export type Route = {
    __typename?: "Route";

    id: string;

    name: string;

    creator: Creator;

    points: Points[];

    lines: Lines[];

    createdAt: DateTime;

    avgRating: number | null;
  };

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;

    email: string;
  };

  export type Points = {
    __typename?: "Point";

    coordinates: Coordinates;

    elevation: number;

    distanceFromPreviousPoint: number | null;
  };

  export type Coordinates = CoordinatesFields.Fragment;

  export type Lines = {
    __typename?: "Line";

    points: _Points[];
  };

  export type _Points = {
    __typename?: "Point";

    coordinates: _Coordinates;

    elevation: number;
  };

  export type _Coordinates = CoordinatesFields.Fragment;
}

export namespace TopRatedRoutes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    topRatedRoutes: TopRatedRoutes[];
  };

  export type TopRatedRoutes = {
    __typename?: "Route";

    id: string;

    name: string;

    creator: Creator;

    createdAt: DateTime;

    avgRating: number | null;
  };

  export type Creator = {
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
        name
        points {
          coordinates {
            ...coordinatesFields
          }
          elevation
          distanceFromPreviousPoint
        }
        lines {
          points {
            coordinates {
              ...coordinatesFields
            }
            elevation
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
@Injectable({
  providedIn: "root"
})
export class UploadRunGQL extends Apollo.Mutation<
  UploadRun.Mutation,
  UploadRun.Variables
> {
  document: any = gql`
    mutation uploadRun(
      $title: String
      $comment: String
      $routeId: ID!
      $time: Int
    ) {
      uploadRun(
        title: $title
        comment: $comment
        routeId: $routeId
        time: $time
      ) {
        id
        uploader {
          id
          name
        }
        time
      }
    }
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
          id
          name
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class ExploreRoutesGQL extends Apollo.Query<
  ExploreRoutes.Query,
  ExploreRoutes.Variables
> {
  document: any = gql`
    query exploreRoutes {
      routes {
        id
        name
        creator {
          id
          name
        }
        createdAt
        avgRating
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class PopularRoutesGQL extends Apollo.Query<
  PopularRoutes.Query,
  PopularRoutes.Variables
> {
  document: any = gql`
    query popularRoutes {
      popularRoutes {
        id
        name
        creator {
          id
          name
        }
        createdAt
        avgRating
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class RecommendedUserRoutesGQL extends Apollo.Query<
  RecommendedUserRoutes.Query,
  RecommendedUserRoutes.Variables
> {
  document: any = gql`
    query recommendedUserRoutes {
      recommendedUserRoutes {
        id
        name
        creator {
          id
          name
        }
        createdAt
        avgRating
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class RouteDetailsGQL extends Apollo.Query<
  RouteDetails.Query,
  RouteDetails.Variables
> {
  document: any = gql`
    query RouteDetails($id: ID!) {
      route(id: $id) {
        id
        name
        creator {
          id
          name
          email
        }
        points {
          coordinates {
            ...coordinatesFields
          }
          elevation
          distanceFromPreviousPoint
        }
        lines {
          points {
            coordinates {
              ...coordinatesFields
            }
            elevation
          }
        }
        createdAt
        avgRating
      }
    }

    ${CoordinatesFieldsFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class TopRatedRoutesGQL extends Apollo.Query<
  TopRatedRoutes.Query,
  TopRatedRoutes.Variables
> {
  document: any = gql`
    query topRatedRoutes {
      topRatedRoutes {
        id
        name
        creator {
          id
          name
        }
        createdAt
        avgRating
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
