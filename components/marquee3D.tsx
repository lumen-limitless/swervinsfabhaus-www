import { Marquee } from "@/components/magicui/marquee"
import { cn } from "@/lib/utils"

const reviews = [
  {
    name: "Zach Donals",
    username: "@zachdonals",
    body: "Not only does my guy do immaculate work, but communication is on point. I was very thrilled with the work i had done on my dirtbike exhaust, couldnt have made a better decision on where to go. Absolutely check this spot out for any welding you need from exhaust work to a sick bumper on your drift car !🔥",
    img: "https://avatar.vercel.sh/zachdonals",
  },
  {
    name: "Holly Goodrich",
    username: "@hollygoodrich",
    body: "I communicated with Swervin's through facebook messenger, he was always really polite, concise, and excited in the messages. He was upfront about hourly cost and what all would he included (prep, clean up etc). I had some unusual work for him.",
    img: "https://avatar.vercel.sh/hollygoodrich",
  },
  {
    name: "Cole Palumbo",
    username: "@colepalumbo",
    body: "One of the best people I've had the pleasure to do business with. He was very patient with me while gathering parts. Got me right into the shop. Super friendly. Extremely talented. Absolutely zero complaints. He earned himself a long time customer.",
    img: "https://avatar.vercel.sh/colepalumbo",
  },
  {
    name: "Alex Kohl",
    username: "@alexkohl",
    body: "I sought out Ervin at Swervin's Fab Haüs for some custom, aftermarket exhaust work on my vehicle. He came up with the perfect solution I was looking for, taking all of my requests into account and went above and beyond to make sure I was happy with the work.",
    img: "https://avatar.vercel.sh/alexkohl",
  },

  {
    name: "Jason Paladino",
    username: "@jasonpaladino",
    body: "Swervin's Fab Haüs installed my electric cutouts on my CTS-V and did a fantastic job with the install! He listened to my ideas and came up with the perfect setup for my car. The fabrication is top notch and I wouldn't hesitate to come back for any future modifications!",
    img: "https://avatar.vercel.sh/jasonpaladino",
  },
  {
    name: "Adam Rene",
    username: "@adamrene",
    body: "I have known Ervin for a long time and he is truly passionate about his work. He is obsessive about learning new things and perfecting his craft. He is on top of all the latest trends and techniques in fabrication. A true professional.",
    img: "https://avatar.vercel.sh/adamrene",
  },
  {
    name: "Lisa Svengsouk",
    username: "@lisasvengsouk",
    body: "Ervin is probably the coolest guy I know! He did some custom work for me and my husband and we couldn't be happier. Amazing quality work and customer service. He treats you like family. I highly recommend.",
    img: "https://avatar.vercel.sh/lisasvengsouk",
  },
  {
    name: "Carlos Garcia Tapia",
    username: "@carlosgarciat",
    body: "Very professional, as soon as I arrived to the shop he gave a run down and explained very detailed my issues with the set up. Took care of what I requested and made sure everything went well afterwards. Really cares about his customers!",
    img: "https://avatar.vercel.sh/carlosgarciat",
  },
  {
    name: "Noah Corbett",
    username: "@noahcorbett",
    body: "Erv gave me such a great experience. Hands down the best work around and just a great guy overall, I'd recommend anyone looking for custom fab work, exhausts, intakes etc to hit him up!",
    img: "https://avatar.vercel.sh/noahcorbett",
  },
  {
    name: "Michael Audino",
    username: "@michaelaudino",
    body: "Best welder and fabricator in the state. Most enthusiastic and hard working guy Ive met. Always gets the job done",
    img: "https://avatar.vercel.sh/michaelaudino",
  },
  {
    name: "CHIINO TV",
    username: "@chiinotv",
    body: "Honestly one of the best fabricators in the city. Knows what he's doing and is backed by tones of knowledge. Great work, highly recommended.",
    img: "https://avatar.vercel.sh/chiinotv",
  },
  {
    name: "Bobby",
    username: "@bobby",
    body: "Best quality welds and fabrication around. If you've got an idea Swerv can make it real",
    img: "https://avatar.vercel.sh/bobby",
  },
  {
    name: "Lisa Svengsouk",
    username: "@lisasvengsouk2",
    body: "Excellent workmanship and amazing customer service! Ervin did an amazing job.",
    img: "https://avatar.vercel.sh/lisasvengsouk2",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-42 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}
