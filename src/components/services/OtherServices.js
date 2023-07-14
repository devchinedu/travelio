import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function OtherServices() {
  const data = [
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl  py-24">
        <Typography className="text-center text-4xl font-bold">
          Other Services
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data.map((item, index) => (
            <Card className="mt-6 w-84 text-center">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.title}
                </Typography>
                <Typography className="text-justify">
                  {item.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
