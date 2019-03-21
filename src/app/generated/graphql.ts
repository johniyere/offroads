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

export enum RouteOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  AvgRatingAsc = "avgRating_ASC",
  AvgRatingDesc = "avgRating_DESC"
}

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace AddAReview {
  export type Variables = {
    routeId: string;
    rating: number;
    comment?: string | null;
  };

  export type Mutation = {
    __typename?: "Mutation";

    addAReview: AddAReview;
  };

  export type AddAReview = {
    __typename?: "Review";

    id: string;
  };
}

export namespace BookmarkTrail {
  export type Variables = {
    routeIdToBookmark: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    bookmarkTrail: BookmarkTrail;
  };

  export type BookmarkTrail = {
    __typename?: "User";

    bookmarkedTrails: BookmarkedTrails[];
  };

  export type BookmarkedTrails = {
    __typename?: "Route";

    id: string;

    name: string;
  };
}

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

export namespace Follow {
  export type Variables = {
    userToFollowId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    follow: Follow;
  };

  export type Follow = {
    __typename?: "User";

    id: string;

    following: Following[];
  };

  export type Following = {
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

export namespace Activities {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    activities: Activities[];
  };

  export type Activities = {
    __typename?: "Run";

    id: string;

    title: string | null;

    comment: string | null;

    route: Route;

    uploader: Uploader;

    time: number | null;
  };

  export type Route = {
    __typename?: "Route";

    id: string;

    name: string;
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

export namespace Dashboard {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    me: Me | null;
  };

  export type Me = {
    __typename?: "User";

    id: string;

    name: string;

    createdRoutes: CreatedRoutes[];

    followers: Followers[];

    following: Following[];

    bookmarkedTrails: BookmarkedTrails[];

    runs: Runs[];
  };

  export type CreatedRoutes = {
    __typename?: "Route";

    id: string;

    name: string;

    createdAt: DateTime;

    creator: Creator;

    avgRating: number | null;
  };

  export type Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };

  export type Followers = {
    __typename?: "User";

    id: string;

    name: string;
  };

  export type Following = {
    __typename?: "User";

    id: string;

    name: string;
  };

  export type BookmarkedTrails = {
    __typename?: "Route";

    id: string;

    name: string;

    createdAt: DateTime;

    creator: _Creator;

    avgRating: number | null;
  };

  export type _Creator = {
    __typename?: "User";

    id: string;

    name: string;
  };

  export type Runs = {
    __typename?: "Run";

    id: string;

    title: string | null;

    comment: string | null;

    route: Route;

    time: number | null;

    createdAt: DateTime;
  };

  export type Route = {
    __typename?: "Route";

    id: string;

    name: string;
  };
}

export namespace Feed {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    me: Me | null;
  };

  export type Me = {
    __typename?: "User";

    id: string;

    following: Following[];
  };

  export type Following = {
    __typename?: "User";

    id: string;

    name: string;

    runs: Runs[];

    createdRoutes: CreatedRoutes[];
  };

  export type Runs = {
    __typename?: "Run";

    id: string;

    title: string | null;

    comment: string | null;

    createdAt: DateTime;

    route: Route;

    time: number | null;
  };

  export type Route = {
    __typename?: "Route";

    id: string;

    name: string;
  };

  export type CreatedRoutes = {
    __typename?: "Route";

    id: string;

    name: string;

    createdAt: DateTime;

    description: string | null;
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

    reviews: Reviews[];

    runs: Runs[];
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

  export type Reviews = {
    __typename?: "Review";

    id: string;

    createdAt: DateTime;

    rating: number;

    reviewer: Reviewer;

    comment: string | null;
  };

  export type Reviewer = {
    __typename?: "User";

    id: string;

    name: string;
  };

  export type Runs = {
    __typename?: "Run";

    id: string;

    createdAt: DateTime;

    time: number | null;

    uploader: Uploader;

    comment: string | null;
  };

  export type Uploader = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

export namespace Routes {
  export type Variables = {
    orderBy?: RouteOrderByInput | null;
  };

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

export namespace Search {
  export type Variables = {
    filter: string;
  };

  export type Query = {
    __typename?: "Query";

    search: Search;
  };

  export type Search = {
    __typename?: "SearchPayload";

    routes: Routes[];

    users: Users[];
  };

  export type Routes = {
    __typename?: "Route";

    id: string;

    name: string;
  };

  export type Users = {
    __typename?: "User";

    id: string;

    name: string;
  };
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

export namespace Users {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    users: Users[];
  };

  export type Users = {
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
export class AddAReviewGQL extends Apollo.Mutation<
  AddAReview.Mutation,
  AddAReview.Variables
> {
  document: any = gql`
    mutation addAReview($routeId: ID!, $rating: Float!, $comment: String) {
      addAReview(routeId: $routeId, comment: $comment, rating: $rating) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class BookmarkTrailGQL extends Apollo.Mutation<
  BookmarkTrail.Mutation,
  BookmarkTrail.Variables
> {
  document: any = gql`
    mutation bookmarkTrail($routeIdToBookmark: ID!) {
      bookmarkTrail(routeIdToBookmark: $routeIdToBookmark) {
        bookmarkedTrails {
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
export class FollowGQL extends Apollo.Mutation<
  Follow.Mutation,
  Follow.Variables
> {
  document: any = gql`
    mutation follow($userToFollowId: ID!) {
      follow(userToFollowId: $userToFollowId) {
        id
        following {
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
export class ActivitiesGQL extends Apollo.Query<
  Activities.Query,
  Activities.Variables
> {
  document: any = gql`
    query activities {
      activities {
        id
        title
        comment
        route {
          id
          name
        }
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
export class DashboardGQL extends Apollo.Query<
  Dashboard.Query,
  Dashboard.Variables
> {
  document: any = gql`
    query dashboard {
      me {
        id
        name
        createdRoutes {
          id
          name
          createdAt
          creator {
            id
            name
          }
          avgRating
        }
        followers {
          id
          name
        }
        following {
          id
          name
        }
        bookmarkedTrails {
          id
          name
          createdAt
          creator {
            id
            name
          }
          avgRating
        }
        runs {
          id
          title
          comment
          route {
            id
            name
          }
          time
          createdAt
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class FeedGQL extends Apollo.Query<Feed.Query, Feed.Variables> {
  document: any = gql`
    query feed {
      me {
        id
        following {
          id
          name
          runs {
            id
            title
            comment
            createdAt
            route {
              id
              name
            }
            time
          }
          createdRoutes {
            id
            name
            createdAt
            description
          }
        }
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
        reviews {
          id
          createdAt
          rating
          reviewer {
            id
            name
          }
          comment
        }
        runs {
          id
          createdAt
          time
          uploader {
            id
            name
          }
          comment
        }
      }
    }

    ${CoordinatesFieldsFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class RoutesGQL extends Apollo.Query<Routes.Query, Routes.Variables> {
  document: any = gql`
    query routes($orderBy: RouteOrderByInput) {
      routes(orderBy: $orderBy) {
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
export class SearchGQL extends Apollo.Query<Search.Query, Search.Variables> {
  document: any = gql`
    query search($filter: String!) {
      search(filter: $filter) {
        routes {
          id
          name
        }
        users {
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
@Injectable({
  providedIn: "root"
})
export class UsersGQL extends Apollo.Query<Users.Query, Users.Variables> {
  document: any = gql`
    query users {
      users {
        id
        name
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
