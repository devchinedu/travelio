import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon, PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import {
  Avatar, Card, List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import DocTable from "../DocTable";
import Inbox from "../Inbox";
import Profile from "../Profile";
import Settings from "../Settings";
import Upload from "../Upload";

export default function Sidebar() {
  const routes = [
    {
      path: "/Dashboard/docs",
      name: "Dashboard",
      element: <DocTable />,
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
    },
    {
      path: "/Dashboard/upload",
      name: "Upload",
      element: <Upload />,
      icon: <ShoppingBagIcon className="h-5 w-5" />,
    },
    {
      path: "/Dashboard/inbox",
      name: "Inbox",
      element: <Inbox />,
      icon: <InboxIcon className="h-5 w-5" />,
    },
    {
      path: "/Dashboard/profile",
      name: "Profile",
      element: <Profile />,
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      path: "/Dashboard/settings",
      name: "Settings",
      element: <Settings />,
      icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
    {
      path: "/Dashboard/logout",
      name: "Logout",
      element: <Settings />,
      icon: <PowerIcon className="h-5 w-5" />,
    },
  ];
  return (
    <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-800 z-40">
      <div className="mb-4 p-4">
        <Avatar
          src="https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg"
          alt="avatar"
        />
        ;
      </div>
      {routes.map((route, index) => (
        <List className="text-white">
          <NavLink to={route.path} key={index}>
            <ListItem>
              <ListItemPrefix>{route.icon}</ListItemPrefix>
              {route.name}
            </ListItem>
          </NavLink>
        </List>
      ))}
    </Card>
  );
}
