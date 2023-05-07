import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './session.store';

export class AuthQuery extends Query<AuthState> {
  constructor(protected override store: AuthStore) {
    super(store);
  }
}
