import { Typography, Button } from "@material-tailwind/react";
import React from "react";

function OurTeam() {
  const data = [
    {
      name: "Dav",
      image:
        "https://img.freepik.com/free-photo/good-looking-curious-dark-skinned-woman-looks-with-interest-smile_273609-40230.jpg?w=1480&t=st=1689970952~exp=1689971552~hmac=103fe54d05dcf5ae82095134fbc2bf9b7b5d2c15193ba03a12edd3c66aae1bf7",
    },
    {
      name: "Mrk",
      image:
        "https://img.freepik.com/free-photo/bored-tiresome-afro-american-woman-keeps-hands-cheeks-focused-wears-headphones-listen-favorite-music-dressed-casual-sweater_273609-50977.jpg?w=1480&t=st=1689971019~exp=1689971619~hmac=cf392f7e5cda8990e6eff60b07af9fff6bc5e7d2db2fe2d184c2c2a70fe22da9",
    },
    {
      name: "James",
      image:
        "https://img.freepik.com/free-photo/young-woman-wearing-yellow-sweater_273609-23405.jpg?w=1480&t=st=1689971033~exp=1689971633~hmac=f293a27de45b8dd50327dcac5f04004028859aab81cf062c0de90044a5381e49",
    },
    {
      name: "Paul",
      image:
        "https://img.freepik.com/free-photo/glad-positive-woman-has-curly-hairstyle-points-both-index-finger-ceiling-shows-copy-space-has-good-mood-as-listens-amusing-songs_273609-39086.jpg?w=1480&t=st=1689971044~exp=1689971644~hmac=9c18fd36dab9215d58b2a5159843d3accc5a4b65324cabbc9c8833dc92fbbbca",
    },
    {
      name: "Matt",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png",
    },
    {
      name: "Dav",
      image:
        "https://img.freepik.com/free-photo/vertical-shot-pleased-good-looking-curly-haired-african-american-teenage-girl-spreads-palms-looks_273609-45752.jpg?w=1480&t=st=1689971062~exp=1689971662~hmac=1cfeb9d852607ed8781a9537ad238a8ca8261b4d0d2ea6eb4a7873fb1db5013e",
    },
    {
      name: "Mrk",
      image:
        "https://img.freepik.com/free-photo/optimistic-african-american-woman-got-new-headphones-from-friend_273609-40243.jpg?w=1480&t=st=1689971074~exp=1689971674~hmac=a813026b0a22d62df0db08b11a8609645f6545dff55bede4edb9d7e2fd3d10b5",
    },
    {
      name: "James",
      image:
        "https://img.freepik.com/free-photo/young-brunette-woman-cozy-winter-clothes_273609-41786.jpg?w=1480&t=st=1689971102~exp=1689971702~hmac=6fd91fbfcbe02654881fb43292f5389e9246648a386903ba9aaf3ae7662a0e52",
    },
    {
      name: "Paul",
      image:
        "https://img.freepik.com/premium-photo/pretty-positive-young-woman-has-natural-curly-hair-points-index-finger-laughs-with-excitement-demonstrates-awesome-promotion-wears-knitted-striped-jumper-isolated-purple-background_747379-6648.jpg?w=1480",
    },
  ];
  return (
    <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between max-w-screen-xl py-6 px-10 mx-auto gap-10 lg:gap-40 items-center justify-center mt-10 lg:mt-24">
      <div className="w-full lg:w-1/2">
        <Typography variant="h3" className="font-bold text-normal lg:text-justify pb-4">
          Meet Our Inspiring Team
        </Typography>

        <Typography variant="p" className="font-normal text-justify mb-8">
          As a dynamic and spirited team, we thrive on pushing the boundaries of
          conventional thinking to craft exceptional products that offer unique
          and effective solutions, ultimately elevating your online presence to
          its fullest potential. <br />
        </Typography>
        <Typography variant="p" className="font-bold text-justify mb-8">
          Want to work for us?
        </Typography>
        <Button variant="filled" className=" rounded-none">
          Apply Now
        </Button>
      </div>
      <div className="lg:w-1/2 w-full grid grid-cols-3">
        {data.map((data, index) => (
          <div
            className="trainsition-all duration-300 hover:scale-105"
            key={index}
          >
            <img src={data.image} alt={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
