import { getPropertyData } from "@/app/lib/utils";

export default async function handler(req, res) {
	try {
		const body = JSON.parse(req.body);

		const propertyInfo = await getPropertyData(body.url).then((data) => {
			return data;
		});

		if (!propertyInfo.status == "error") {
			res.status(404).json(propertyInfo);
			return;
		}

		res.status(200).json(propertyInfo);
	}
	catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
}
