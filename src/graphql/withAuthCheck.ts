import * as jwt from 'jsonwebtoken';
import { isEmpty, get } from 'lodash/fp';
import GraphqlResolver from './resolver';
import { IncomingMessage } from 'http';

const withAuthCheck = (resolver: GraphqlResolver): GraphqlResolver => {
  const resolverWithAuthCheck = async (parent: any, args: any, context: IncomingMessage): Promise<any> => {
    // Verify Auth
    const token: string = context.headers['authorization'];
    jwt.verify(token, "secret key", (err: jwt.VerifyErrors, decoded: object | string) => {
      if (!isEmpty(err)) {
        // Permission handling
      }

      // Extract userId from jwt
      const userID = get('userId')(decoded);
    })

    return resolver(parent, args, context);
  }

  return resolverWithAuthCheck;
}

export default withAuthCheck;