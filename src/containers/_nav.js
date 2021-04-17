import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Theme"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Colors",
    to: "/admin/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Typography",
    to: "/admin/theme/typography",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Publish",
    route: "/admin/publish",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Genre",
        to: "/admin/publish/genre",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Language",
        to: "/admin/publish/language",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Status",
        to: "/admin/publish/status",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mode",
        to: "/admin/publish/mode",
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Card',
      //   to: '/publish/cards',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Carousels',
      //   to: '/publish/carousels',
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Collapses",
      //   to: "/publish/collapses",
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Forms",
      //   to: "/publish/forms",
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Jumbotron',
      //   to: '/base/jumbotrons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navs',
      //   to: '/base/navs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navbars',
      //   to: '/base/navbars',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Progress',
      //   to: '/base/progress-bar',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Switches',
      //   to: '/base/switches',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tables',
      //   to: '/publish/tables',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tabs',
      //   to: '/base/tabs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Buttons",
    route: "/admin/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Buttons",
        to: "/admin/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Brand buttons",
        to: "/admin/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Buttons groups",
        to: "/admin/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dropdowns",
        to: "/admin/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/admin/charts",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Icons",
    route: "/admin/icons",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Free",
        to: "/admin/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Flags",
        to: "/admin/icons/flags",
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Brands",
        to: "/admin/icons/brands",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Notifications",
    route: "/admin/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/admin/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Badges",
        to: "/admin/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modal",
        to: "/admin/notifications/modals",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Toaster",
        to: "/admin/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Widgets",
    to: "/admin/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/admin/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/admin/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/admin/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/admin/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/admin/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "/admin/",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "/admin/",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "/admin/",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
