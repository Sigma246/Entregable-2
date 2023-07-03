import { findservice } from '../../app/service/listado_service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getListado = ( req: any ,res: any ) => findservice()
	.then((list: unknown) => 
		res.header().io({
			code: 200,
			message: "success.find_list",
			data: { list }
		})
	)
	.catch((error: unknown) =>
		res.io({
			code: 500,
			message: "error.find_list",
			data: { error }
		})
	);
