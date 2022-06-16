import { //bridal
    IreneBridal,
    LuxiaBridal,
    //SteinerBridal,
    //catering
    HarmonyCatering,
    LariskaCatering,
    //YummyCatering,
    //photographer
    CumiCumiStudio, 
    DigiboxStudio, 
    //EpicPhotoboot,
    //venue
    AulaIdamanManado,
    ManadoGrandPlace,
    //NovotelManado,
    //wedding organizer
    BigEnterpriceWeddingOrganizer,
    RandyWeddingOrganizer,
    //TeamWorkWeddingOrganizer,
    //icon vendor
    VendorBridal, 
    VendorCatering, 
    VendorPhotographer, 
    VendorVenue, 
    VendorWO,
    //gambar bridal
    Bridal1,
    Bridal2,
    Bridal3,
    Bridal4,
 } from "../../assets";

export const DummyAllVendor = [
    //Bridal
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
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 10000000,
                description: "1. 2 Set Bride Dress \n2. 2 Set Groom Suit \n3. Make Up  Hair Do \n4. Pre-Wedding Indoor \n5. Accessories",
                available: true,
            },
        ]
    },
    {
        id: 2,
        name: "Luxia Bridal",
        image: LuxiaBridal,
        imagePackage: [Bridal3, Bridal4],
        vendor: {
            id: 1,
            name: "Bridal",
            icon: VendorBridal,
        },
        address: "Kairagi, Manado.",
        phoneNumber: "085255419193",
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 6000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 85000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    
    //Catering
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
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 35000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    {
        id: 4,
        name: "LariskaCatering",
        image: LariskaCatering,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 2,
            name: "Catering",
            icon: VendorCatering,
        },
        address: "Taas Banjer, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 20000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 30000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    
    //Photographer
    {
        id: 5,
        name: "Cumi Cumi Studio",
        image: CumiCumiStudio,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 3,
            name: "Photographer",
            icon: VendorPhotographer,
        },
        address: "Samrat, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 4000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 5500000,
                description: "Description...",
                available: true,
            },
        ]
    },
    {
        id: 6,
        name: "Digibox Studio",
        image: DigiboxStudio,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 3,
            name: "Photographer",
            icon: VendorPhotographer,
        },
        address: "Perkamil, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 4000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 5500000,
                description: "Description...",
                available: true,
            },
        ]
    },
    
    //venue
    {
        id: 7,
        name: "Aula Idaman Manado",
        image: AulaIdamanManado,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 4,
            name: "Venue",
            icon: VendorVenue,
        },
        address: "Sario Tumpaan, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 10000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 15000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    {
        id: 8,
        name: "Manado Grand Place",
        image: ManadoGrandPlace,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 4,
            name: "Venue",
            icon: VendorVenue,
        },
        address: "Kairagi, Manado.",
        phoneNumber: "085255419193",
       
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 10000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 15000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    
    //wedding organizer
    {
        id: 9,
        name: "BigEnter Wedding Organizer",
        image: BigEnterpriceWeddingOrganizer,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 5,
            name: "WO",
            icon: VendorWO,
        },
        address: "Tuminting, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 10000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 15000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    {
        id: 10,
        name: "Randy Wedding Organizer",
        image: RandyWeddingOrganizer,
        imagePackage: [Bridal1, Bridal2],
        vendor: {
            id: 5,
            name: "WO",
            icon: VendorWO,
        },
        address: "Perkamil, Manado.",
        phoneNumber: "085255419193",
        
        packages: [
            {
                id: 1,
                namePackage: "Silver Package",
                packagePrice: 10000000,
                description: "Description...",
                available: true,
            },
            {
                id: 2,
                namePackage: "Gold Package",
                packagePrice: 15000000,
                description: "Description...",
                available: true,
            },
        ]
    },
    
]