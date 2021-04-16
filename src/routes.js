import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/publish/tables/Tables'));

const Mode = React.lazy(() => import('./views/publish/mode/Mode'));
const Cards = React.lazy(() => import('./views/publish/cards/Cards'));
const Carousels = React.lazy(() => import('./views/publish/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/publish/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/publish/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/publish/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/publish/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/publish/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/publish/navs/Navs'));
const Paginations = React.lazy(() => import('./views/publish/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/publish/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/publish/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/publish/switches/Switches'));
const Language = React.lazy(() => import('./views/publish/language/Language'));
const Status = React.lazy(() => import('./views/publish/status/Status'));
const Genre = React.lazy(() => import('./views/publish/genre/Genre'));

const Tabs = React.lazy(() => import('./views/publish/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/publish/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/publish', name: 'Publish', component: Cards, exact: true },
  { path: '/publish/genre', name: 'Genre', component: Genre },
  { path: '/publish/cards', name: 'Cards', component: Cards },
  { path: '/publish/language', name: 'Language', component: Language },
  { path: '/publish/status', name: 'Status', component: Status },
  { path: '/publish/mode', name: 'Mode', component: Mode },
  { path: '/publish/carousels', name: 'Carousel', component: Carousels },
  { path: '/publish/collapses', name: 'Collapse', component: Collapses },
  { path: '/publish/forms', name: 'Forms', component: BasicForms },
  { path: '/publish/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/publish/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/publish/navbars', name: 'Navbars', component: Navbars },
  { path: '/publish/navs', name: 'Navs', component: Navs },
  { path: '/publish/paginations', name: 'Paginations', component: Paginations },
  { path: '/publish/popovers', name: 'Popovers', component: Popovers },
  { path: '/publish/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/publish/switches', name: 'Switches', component: Switches },
  { path: '/publish/tables', name: 'Tables', component: Tables },
  { path: '/publish/tabs', name: 'Tabs', component: Tabs },
  { path: '/publish/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
