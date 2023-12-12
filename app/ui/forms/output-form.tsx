export default function OutputForm({propertyListingData, formData}: {propertyListingData?: any, formData?: any}) {
    
    const discountAskingPrice = formData?.discountAskingPrice ?? 0
    const desiredYield = formData?.desiredYield ?? 0
    const convertedRentRate = formData?.convertedRentRate ?? 0
    const duration = formData?.duration ?? 0

    const price = propertyListingData?.price ?? 0
    const postcode = propertyListingData?.postcode ?? 'N/A'

    const targetPrice = price * (1 - (discountAskingPrice / 100)) ?? 0
    const rent = (targetPrice / 12) * (desiredYield / 100) ?? 0
    const convertedRent = (targetPrice / 12) * (desiredYield / 100) * (convertedRentRate / 100)  ?? 0
    const totalMonthlyRental = rent + convertedRent
    const futureBuyBackPrice = targetPrice - (convertedRent * duration * 12) ?? 0

    function formatNumber(num: number) {
        if (num === 0) {
            return 0
        }

        return num.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }

    return (
        <div className="md:px-10">
            {/* Received Data */}
            <div className="mb-16">
                <p className="text-2xl mb-10 font-bold">Data Received</p>
                <div className="flex flex-col gap-10 md:gap-15">
                    <div className="flex justify-between items-center">
                        <span>Listing Price:</span>
                        <span>£{formatNumber(price)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span>Post code:</span>
                        <span>{postcode}</span>
                    </div>
                </div>
            </div>

            {/* Outputs */}
            <div>
                <p className="text-2xl  mb-10 font-bold">Outputs</p>
                <div className="flex flex-col gap-10 md:gap-15">
                    <div className="flex justify-between items-center">
                        <span>Target Price:</span>
                        <span>£{formatNumber(targetPrice)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                       <div className="flex flex-col gap-5">
                            <div>Total monthly rental</div>
                            <div className="ml-auto">Rent</div>
                            <div className="ml-auto">Converted rent</div>
                       </div>

                        <div className="flex flex-col gap-5">
                            <div>£{formatNumber(totalMonthlyRental)}</div>
                            <div>£{formatNumber(rent)}</div>
                            <div>£{formatNumber(convertedRent)}</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span> Future buy-back price:</span>
                        <span>£{formatNumber(futureBuyBackPrice)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}