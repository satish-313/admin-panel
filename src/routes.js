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
  { path: '/admin/', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/admin/theme/colors', name: 'Colors', component: Colors },
  { path: '/admin/theme/typography', name: 'Typography', component: Typography },
  { path: '/admin/publish', name: 'Publish', component: Cards, exact: true },
  { path: '/admin/publish/genre', name: 'Genre', component: Genre },
  { path: '/admin/publish/cards', name: 'Cards', component: Cards },
  { path: '/admin/publish/language', name: 'Language', component: Language },
  { path: '/admin/publish/status', name: 'Status', component: Status },
  { path: '/admin/publish/mode', name: 'Mode', component: Mode },
  { path: '/admin/publish/carousels', name: 'Carousel', component: Carousels },
  { path: '/admin/publish/collapses', name: 'Collapse', component: Collapses },
  { path: '/admin/publish/forms', name: 'Forms', component: BasicForms },
  { path: '/admin/publish/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/admin/publish/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/admin/publish/navbars', name: 'Navbars', component: Navbars },
  { path: '/admin/publish/navs', name: 'Navs', component: Navs },
  { path: '/admin/publish/paginations', name: 'Paginations', component: Paginations },
  { path: '/admin/publish/popovers', name: 'Popovers', component: Popovers },
  { path: '/admin/publish/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/admin/publish/switches', name: 'Switches', component: Switches },
  { path: '/admin/publish/tables', name: 'Tables', component: Tables },
  { path: '/admin/publish/tabs', name: 'Tabs', component: Tabs },
  { path: '/admin/publish/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/admin/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/admin/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/admin/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/admin/charts', name: 'Charts', component: Charts },
  { path: '/admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/admin/icons/flags', name: 'Flags', component: Flags },
  { path: '/admin/icons/brands', name: 'Brands', component: Brands },
  { path: '/admin/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/admin/notifications/badges', name: 'Badges', component: Badges },
  { path: '/admin/notifications/modals', name: 'Modals', component: Modals },
  { path: '/admin/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/admin/widgets', name: 'Widgets', component: Widgets },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
