import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  token: string;
}

export function createInitialState(): AuthState {
  return {
    token: '',
  };
}

@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
