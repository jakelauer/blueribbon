import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { GatsbyNode } from 'gatsby';
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
