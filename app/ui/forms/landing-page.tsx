'use client';

import InputForm from '@/app/ui/forms/input-form'
import OutputForm from '@/app/ui/forms/output-form'
import { useState } from 'react';

export default function Dashboard() {
    const [propertyListingData, setpropertyListingData] = useState({});
    const [formData, setFormData] = useState(0);

    return (
        <div className="flex flex-col flex-row justify-between md:flex-row gap-3">
            <div className="flex-1 border-b-2 border-dashed md:border-r-2 lg:border-b-0 p-6">
                <InputForm setpropertyData={setpropertyListingData} setFormData={setFormData} />
            </div>

            <div className="flex-1 p-6">
                <OutputForm propertyListingData={propertyListingData} formData={formData} />
            </div>
        </div>
    );
}