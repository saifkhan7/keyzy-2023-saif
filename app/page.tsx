import Image from 'next/image'
import InputForm from '@/app/ui/forms/input-form'
import OutputForm from '@/app/ui/forms/output-form'

export default function Home() {
	async function retrieveDataFromUrl() {
		let url = 'https://www.rightmove.co.uk/properties/141596597#'

		let response = await fetch(url);
		let data = await response.text();
			
		//get content within <script> tags
		let script = data.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);

		//get content within <script> tags that contain "window.PAGE_MODEL
		let pageModel = script?.filter((script) => script.includes('window.PAGE_MODEL'));

		//get primary price from pageModel
		let price = pageModel?.[0].match(/"price":(\d+)/)?.[1];

		if (! (price === undefined || price === null)) {
			//get incode from pageModel
			let incode = pageModel?.[0].match(/"incode":"(.*?)"/)?.[1];

			//get outcode from pageModel
			let outcode = pageModel?.[0].match(/"outcode":"(.*?)"/)?.[1];

			console.log(`Pincode: ${outcode} ${incode}, Price: ${price}`);

			return {outcode, incode, price};
		}

		console.log('No price found on page');
	}
		
	// retrieveDataFromUrl();

	return (
		<main className="min-h-screen p-6">
			<div className="block sm:block md:hidden lg:block xl:block">
				<div className="flex flex-col flex-row justify-between md:flex-row gap-3">
					<div className="flex-1 border-b-2 border-dashed md:border-r-2 lg:border-b-0 p-6">
						<InputForm />
					</div>

					<div className="flex-1 p-6">
						<OutputForm />
					</div>
				</div>
			</div>
	
			<div className="hidden sm:hidden md:block lg:hidden xl:hidden">
				<div className="flex text-magenta text-2xl justify-center items-center h-screen">
					Not tablet friendly - please use mobile or desktop device.
				</div>
			</div>
		</main>
	)
}
