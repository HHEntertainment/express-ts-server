import * as jwt from 'jsonwebtoken';
import { isEmpty } from 'lodash/fp';
import { IncomingMessage } from 'http';
import { GraphqlResolver } from './resolver';
import { GraphQLError } from 'graphql';

const withAuthCheck = (resolver: GraphqlResolver): GraphqlResolver => {
  const resolverWithAuthCheck = async (parent: any, args: any, context: IncomingMessage): Promise<any> => {
    // Verify Auth
    const token: string = context.headers['authorization'];
    jwt.verify(token, process.env.JWT_ENCRYPT_KEY, (err: jwt.VerifyErrors, decoded: object | string) => {
      if (!isEmpty(err)) {
        // Permission handling
        throw new GraphQLError('UNAUTHORIZED');
      }
    });

    return resolver(parent, args, context);
  };

  return resolverWithAuthCheck;
};

export default withAuthCheck;
