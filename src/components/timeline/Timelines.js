import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import {
    CloudArrowUpIcon,
    BellAlertIcon,
    BellIcon,
  } from "@heroicons/react/24/solid";
   
  export default function Timelines() {
    return (
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:pb-12 lg:pt-12">
        <div className="">
          <Typography variant="h3" color="blue-gray" className="pb-10 text-center">
            How our service works
          </Typography>
        </div>
      <div className="w-2/3 mx-auto">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <CloudArrowUpIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Register/Login
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
               Register or Login to your account, if you don&apos;t have an account, you can register for free.
               This will give you access to our dashboard where you can request for any of our services and track the status of your request.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Upload Documents
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
              Follow the guidline and fill in the required information for the service you want.
             Once you have filled in the required information, a reference number will be generated for you. You can use this reference number to make payment and track the status of your request.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellAlertIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Payment and Updates
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600">
                Make payment using the provided reference number.Once payment is confirmed, your request will be processed and you will normally recieve and updates within 4hrs. You can also check the status of your application on your dashboard.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      </div>
    );
  }