import { mongo_atlas_password, mongo_atlas_username } from './keys';

import type { GatsbyConfig } from 'gatsby';
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const mongoDbConnectionString = `mongodb+srv://${encodeURIComponent(mongo_atlas_username)}:${encodeURIComponent(mongo_atlas_password)}@showribbon-test.gwiyu.mongodb.net`;

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
	`gatsby-plugin-material-ui`,
	'gatsby-plugin-styled-components',
	"gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        documentPaths: [
          "./src/**/*.{ts,tsx}"
        ]
      }
    },
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
        typePrefix: "ribbon",
        // Name of the database and collection where are books reside
        dbName: 'showribbon',
        collection: 'accounts',
        connectionString: mongoDbConnectionString,
        extraParams: {
          w: "majority",
          retryWrites: true
        }
      }
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;


