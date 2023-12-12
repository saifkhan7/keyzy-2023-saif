import Image from 'next/image'
import LandingPage from '@/app/ui/forms/landing-page'

import React, { useState } from 'react'

export default function Home() {
	return (
		<main className="min-h-screen p-6">
			<div className="block sm:block md:hidden lg:block xl:block">
				<LandingPage />
			</div>
	
			<div className="hidden sm:hidden md:block lg:hidden xl:hidden">
				<div className="flex text-magenta text-2xl justify-center items-center h-screen">
					Not tablet friendly - please use mobile or desktop device.
				</div>
			</div>
		</main>
	)
}
