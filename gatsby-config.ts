import { mongoAtlasPassword, mongoAtlasUsername } from "./keys";

import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const mongoDbConnectionString = `mongodb+srv://${encodeURIComponent(mongoAtlasUsername)}:${encodeURIComponent(
	mongoAtlasPassword,
)}@showribbon-test.gwiyu.mongodb.net`;

const config: GatsbyConfig = {
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-material-ui`,
		"gatsby-plugin-styled-components",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-image`,
		{
			resolve: "gatsby-plugin-graphql-codegen",
			options: {
				documentPaths: ["./src/**/*.{ts,tsx}"],
			},
		},
		{
			resolve: "gatsby-source-mongodb",
			options: {
				typePrefix: "ribbon",
				dbName: "showribbon",
				collection: "accounts",
				connectionString: mongoDbConnectionString,
				extraParams: {
					w: "majority",
					retryWrites: true,
				},
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
				host: `preview.contentful.com`,
			},
		},
	],
	jsxRuntime: `automatic`,
};

export default config;
