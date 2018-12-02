// ====================================================
// Documents
// ====================================================

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

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

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
