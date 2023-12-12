export default function Page() {

    return (
        <div className="md:px-10">
            {/* Received Data */}
            <div className="mb-16">
                <p className="text-2xl mb-10 font-bold">Data Received</p>
                <div className="flex flex-col gap-10 md:gap-15">
                    <div className="flex justify-between items-center">
                        <span>Listing Price:</span>
                        <span>£1,000,000</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span>Post code:</span>
                        <span>CB6 S21</span>
                    </div>
                </div>
            </div>

            {/* Outputs */}
            <div>
                <p className="text-2xl  mb-10 font-bold">Outputs</p>
                <div className="flex flex-col gap-10 md:gap-15">
                    <div className="flex justify-between items-center">
                        <span>Target Price:</span>
                        <span>£9,00,000</span>
                    </div>

                    <div className="flex justify-between items-center">
                       <div className="flex flex-col gap-5">
                            <div>Total monthly rental</div>
                            <div className="ml-auto">Rent</div>
                            <div className="ml-auto">Converted rent</div>
                       </div>

                        <div className="flex flex-col gap-5">
                            <div>£75,000</div>
                            <div>£75,000</div>
                            <div>£75,000</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span> Future buy-back price:</span>
                        <span>£2,000,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}