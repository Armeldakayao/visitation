import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "#/components/ui/card";

export default function HowWork() {
  // Reusable array for the cards data
  const cardData = [
    {
      imageSrc: "/images/home/a.svg",
      title: "Create the Visitation Book",
      description: "Create an account on Visitation book and select create.",
    },
    // You can add more objects for different card content
    {
      imageSrc: "/images/home/b.svg",
      title: "Select the Visitation Book Cover",
      description: "Choose the cover of you visitation book.",
    },
    {
      imageSrc: "/images/home/c.svg",
      title: "Upload the picture of the deceased.",
      description:
        "Upload a picture  of the deceased to the cover of the chosen book.",
    },
    {
      imageSrc: "/images/home/d.svg",
      title: "Select the info you want to capture",
      description: "Choose what infomation you want your guests to fill out",
    },
    {
      imageSrc: "/images/home/e.svg",
      title: "Print out the Visitation book cover with the QR Code",
      description:
        "Print or place the image with the QR code on a screen for your guests to scan.",
    },
    {
      imageSrc: "/images/home/f.svg",
      title: "Your guests scan the code and add their info via their device",
      description: "Your guest scan the code and fill out their information.",
    },
    {
      imageSrc: "/images/home/g.svg",
      title: "Send a copy of the visitation book to designated family",
      description:
        "The visitation book can be sent to family and or friends to view.",
    },
    {
      imageSrc: "/images/home/h.svg",
      title: "Automated thank you for attending funeral is sent to gusts",
      description:
        "Once your guest sign the book  your thank you card is sent to their email.",
    },
  ];

  return (
    <div>
      <p className="text-center text-[54px] mt-10 text-[#161010] font-bold">
        How It Works
      </p>
      <div className="p-20 space-y-6">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} className="border-none outline-none">
              <CardHeader>
                <img src={card.imageSrc} className="w-full" alt={card.title} />
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">{card.title}</p>
              </CardContent>
              <CardFooter>
                <p>{card.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
