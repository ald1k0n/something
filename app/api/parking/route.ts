import { db } from '@/db';
import { parkingPlaces } from '@/db/models';
import { eq } from 'drizzle-orm';

interface IPayload {
	id: number;
	userId: number | null;
}

export async function PATCH(req: Request, res: any) {
	const body: IPayload = await req.json();

	const { id, userId } = body;

	const update = await db
		.update(parkingPlaces)
		.set({ owned_by: userId })
		.where(eq(parkingPlaces.id, id));
	return Response.json(update);
}
