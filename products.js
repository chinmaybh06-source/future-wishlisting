const COLLECTION = {
  "apple": [
    {
      "name": "MacBook Air 13-inch (M5)",
      "tag": "THE EVERYDAY CREATIVE",
      "price": "₹1,49,900",
      "priceType": "Starting price",
      "features": [
        "Apple M5 chip",
        "13.6-inch Liquid Retina display",
        "Up to 18 hours battery life"
      ],
      "source": "https://www.apple.com/in/macbook-air/",
      "image": "images/apple/macbook-air.svg",
      "note": "Starting price shown on Apple India product comparison page; verify configuration before purchase."
    },
    {
      "name": "iPhone 18 Pro",
      "tag": "POCKET POWERHOUSE",
      "price": "₹1,64,900",
      "priceType": "From (retailer listing)",
      "features": [
        "Pro camera system",
        "Premium display",
        "Current-generation iPhone"
      ],
      "source": "https://www.apple.com/in/iphone/",
      "image": "images/apple/iphone.svg",
      "note": "Price seen on an Apple Premium Reseller listing; confirm directly before purchase."
    },
    {
      "name": "AirPods Pro 3",
      "tag": "FOCUS, IN YOUR EARS",
      "price": "₹25,900",
      "priceType": "Starting price (retailer listing)",
      "features": [
        "Active Noise Cancellation",
        "Wireless listening",
        "Apple ecosystem integration"
      ],
      "source": "https://www.apple.com/in/airpods-pro/",
      "image": "images/apple/airpods.svg",
      "note": "Price seen on an Apple Premium Reseller listing; confirm directly before purchase."
    }
  ],
  "ikea": [
    {
      "name": "ÅRSTID Table Lamp",
      "tag": "SOFT LIGHT, QUIET SPACE",
      "price": "₹2,990",
      "priceType": "Listed price",
      "features": [
        "Brass/white finish",
        "Classic Scandinavian look",
        "Warm ambient lighting"
      ],
      "source": "https://www.ikea.com/in/en/cat/lamps-li002/",
      "image": "images/ikea/lamp.svg",
      "note": "Listed price on IKEA India; price and availability may vary."
    },
    {
      "name": "SANDSBERG Chair",
      "tag": "SIMPLE BY DESIGN",
      "price": "₹850",
      "priceType": "Listed price",
      "features": [
        "Minimal design",
        "Multiple colour options",
        "Compact everyday seating"
      ],
      "source": "https://www.ikea.com/in/en/cat/chairs-700676/",
      "image": "images/ikea/chair.svg",
      "note": "Listed price on IKEA India; check selected colour and availability."
    },
    {
      "name": "NÄVLINGE LED Desk Lamp",
      "tag": "MADE FOR LATE-NIGHT IDEAS",
      "price": "₹1,790",
      "priceType": "Listed price",
      "features": [
        "Focused task lighting",
        "Minimal footprint",
        "Designed for workspaces"
      ],
      "source": "https://www.ikea.com/in/en/cat/lighting-li001/",
      "image": "images/ikea/desk-lamp.svg",
      "note": "Listed price on IKEA India; verify the exact variant before purchase."
    }
  ],
  "nothing": [
    {
      "name": "Nothing Phone (4a) Pro",
      "tag": "DIFFERENT BY DESIGN",
      "price": "Verify current price",
      "priceType": "Price not independently verified",
      "features": [
        "Distinctive transparent-inspired design language",
        "Nothing OS experience",
        "5G smartphone"
      ],
      "source": "https://in.nothing.tech/",
      "image": "images/nothing/phone.svg",
      "note": "Check the official India store or authorised seller for current India pricing."
    },
    {
      "name": "Nothing Phone (4a)",
      "tag": "THE EVERYDAY ORIGINAL",
      "price": "Verify current price",
      "priceType": "Price not independently verified",
      "features": [
        "Clean software experience",
        "Distinctive hardware design",
        "5G smartphone"
      ],
      "source": "https://in.nothing.tech/",
      "image": "images/nothing/phone-a.svg",
      "note": "Check the official India store or authorised seller for current India pricing."
    },
    {
      "name": "Nothing Ear",
      "tag": "SOUND, SIMPLIFIED",
      "price": "Verify current price",
      "priceType": "Price not independently verified",
      "features": [
        "Wireless audio",
        "Minimal transparent design",
        "Companion app support"
      ],
      "source": "https://in.nothing.tech/",
      "image": "images/nothing/earbuds.svg",
      "note": "Check the official India store or authorised seller for current India pricing."
    }
  ],
  "rolex": [
    {
      "name": "Oyster Perpetual 36",
      "tag": "THE PURE ESSENTIAL",
      "price": "₹6,54,100",
      "priceType": "Official listed retail price",
      "features": [
        "36 mm Oyster case",
        "Oystersteel",
        "Classic three-hand design"
      ],
      "source": "https://www.rolex.com/en-in/watches/find-rolex",
      "image": "images/rolex/oyster-perpetual.svg",
      "note": "Official Rolex India listing observed 20 Oct 2026. Availability may vary."
    },
    {
      "name": "Explorer 40",
      "tag": "BUILT FOR CLARITY",
      "price": "₹8,14,500",
      "priceType": "Official listed retail price",
      "features": [
        "40 mm Oyster case",
        "Oystersteel",
        "Black dial"
      ],
      "source": "https://www.rolex.com/en-in/watches/find-rolex",
      "image": "images/rolex/explorer.svg",
      "note": "Official Rolex India listing observed 20 Oct 2026. Availability may vary."
    },
    {
      "name": "Submariner",
      "tag": "AN ICON OF FUNCTION",
      "price": "₹9,81,000",
      "priceType": "Official listed retail price",
      "features": [
        "41 mm Oyster case",
        "Oystersteel",
        "Black dial"
      ],
      "source": "https://www.rolex.com/en-in/watches/find-rolex",
      "image": "images/rolex/submariner.svg",
      "note": "Official Rolex India listing observed 20 Oct 2026. Availability may vary."
    }
  ],
  "royal-enfield": [
    {
      "name": "Classic 350",
      "tag": "TIMELESS CHARACTER",
      "price": "From ₹1,87,434",
      "priceType": "Starting ex-showroom price (Chennai listing)",
      "features": [
        "349 cc single-cylinder engine",
        "20.2 bhp",
        "27 Nm torque"
      ],
      "source": "https://www.royalenfield.com/in/en/motorcycles/classic-350/",
      "image": "images/royal-enfield/classic-350.svg",
      "note": "Official city-specific price pages vary. Chennai price listing observed recently; check Pune ex-showroom and on-road pricing."
    },
    {
      "name": "Interceptor 650",
      "tag": "THE OPEN-ROAD CLASSIC",
      "price": "From ₹3,37,000",
      "priceType": "Starting price shown by Royal Enfield",
      "features": [
        "648 cc parallel-twin engine",
        "Classic roadster styling",
        "Twin-cylinder character"
      ],
      "source": "https://www.royalenfield.com/in/en/support/owners-manual/",
      "image": "images/royal-enfield/interceptor-650.svg",
      "note": "Starting price shown on Royal Enfield India site; confirm local variant and on-road costs."
    },
    {
      "name": "Continental GT 650",
      "tag": "CAFE-RACER SPIRIT",
      "price": "From ₹3,58,000",
      "priceType": "Starting price shown by Royal Enfield",
      "features": [
        "648 cc parallel-twin engine",
        "Cafe-racer silhouette",
        "Sporty riding position"
      ],
      "source": "https://www.royalenfield.com/in/en/support/owners-manual/",
      "image": "images/royal-enfield/continental-gt-650.svg",
      "note": "Starting price shown on Royal Enfield India site; confirm local variant and on-road costs."
    }
  ]
};
