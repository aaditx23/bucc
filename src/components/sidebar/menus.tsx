import {
  BookKey,
  BookUser,
  Calendar,
  CalendarClock,
  FileDown,
  LayoutDashboard,
  Newspaper,
  Settings,
  SquarePen,
  UserSearch,
  UsersRound,
  Vault,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    variant: "default",
    access_department: [
      "Advisors Body",
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "Advisor",
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
      "Senior Executive",
      "Executive",
      "General Member",
    ],
  },
  {
    title: "All Members",
    path: "/dashboard/all-members",
    icon: BookUser,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Human Resources",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Department Members",
    path: "/dashboard/members",
    icon: UsersRound,
    variant: "ghost",
    access_department: [
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: ["Director", "Assistant Director"],
  },
  {
    title: "Manage Data",
    path: "/dashboard/manage-data",
    icon: FileDown,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Human Resources",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Recruitment",
    path: "/dashboard/recruitment",
    icon: UserSearch,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Ongoing Events",
    path: "/dashboard/ongoing-events",
    icon: CalendarClock,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Resources",
    path: "/dashboard/resources",
    icon: Vault,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "My Resources",
    path: "/dashboard/my-resources",
    icon: BookKey,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
      "Senior Executive",
      "Executive",
      "General Member",
    ],
  },
  {
    title: "Create Event",
    path: "/dashboard/create-event",
    icon: Calendar,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Event Management",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Press Resleases",
    path: "/dashboard/presss-resleases",
    icon: Newspaper,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
    ],
  },
  {
    title: "Blogs",
    path: "/dashboard/blogs",
    icon: SquarePen,
    variant: "ghost",
    access_department: [
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
      "Senior Executive",
      "Executive",
      "General Member",
    ],
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
    variant: "ghost",
    access_department: [
      "Advisors Body",
      "Governing Body",
      "Communication and Marketing",
      "Creative",
      "Event Management",
      "Finance",
      "Human Resources",
      "Press Release and Publications",
      "Research and Development",
    ],
    access_designation: [
      "Advisor",
      "President",
      "Vice President",
      "General Secretary",
      "Treasurer",
      "Director",
      "Assistant Director",
      "Senior Executive",
      "Executive",
      "General Member",
    ],
  },
];

export default menus;
