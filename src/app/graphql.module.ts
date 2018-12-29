import {NgModule} from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './core/auth/auth.service';
import { setContext } from 'apollo-link-context';

const uri = 'http://localhost:4000';

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
  constructor( apollo: Apollo, httpLink: HttpLink, private authService: AuthService) {
    const http = httpLink.create({uri});

    const auth = setContext((_, { headers }) => {
      const token = this.authService.authToken;

      if (!token) {
        return {};
      } else {
        return {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
        };
      }
    });

    apollo.create({
      link: auth.concat(http),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
