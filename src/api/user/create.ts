import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

import { Syncable } from '../../contracts/base/Syncable';

export default function handler (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse)
{
	const {
		data,
		sync
	} = req.body as Syncable<any>;

	// Send to Mongo

	res.setHeader('Access-Control-Allow-Origin', '*');

	res.status(200).json({
		data,
		sync
	});
}
