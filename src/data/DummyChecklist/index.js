import {
    IreneBridal,
    Bridal1,
    Bridal2,
    VendorBridal,
    HarmonyCatering,
    VendorCatering,
} 
from '../../assets'

export const DummyChecklist = [
    {
        id: 1,
        checklistDate: 'Minggu, 29 Mei 2022',
        status: 'Checklist',
        totalPrice: 7500000,
        checklists: [
            {
                id: 1,
                name: "Irene Bridal",
                image: IreneBridal,
                imagePackage: [Bridal1, Bridal2],
                vendor: {
                    id: 1,
                    name: "Bridal",
                    icon: VendorBridal,
                },
                address: "Malalayang, Manado.",
                phoneNumber: "085255419193",
                packages: [
                    {
                        id: 1,
                        namePackage: "Silver Package",
                        packagePrice: 7500000,
                        description: "1. 2 Set Bride Dress \n2. 2 Set Groom Suit \n3. Make Up  Hair Do \n4. Pre-Wedding Indoor \n5. Accessories",
                        available: true,
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        checklistDate: 'Sabtu, 28 Mei 2022',
        status: 'Done',
        totalPrice: 7500000,
        checklists: [
            {
                id: 3,
                name: "Harmony Catering",
                image: HarmonyCatering,
                imagePackage: [Bridal1, Bridal2],
                vendor: {
                    id: 2,
                    name: "Catering",
                    icon: VendorCatering,
                },
                address: "Teling, Manado.",
                phoneNumber: "085255419193",
                packages: [
                    {
                        id: 1,
                        namePackage: "Silver Package",
                        packagePrice: 30000000,
                        description: "Description...",
                        available: true,
                    },
                ]
            }
        ]
    }
]