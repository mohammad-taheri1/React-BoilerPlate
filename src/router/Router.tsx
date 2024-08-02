import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import UsersListPage from '../pages/dashboard/UsersListPage';
import DashboardIndexPage from '../pages/dashboard/DashboardIndexPage';
import PATHS from './paths';

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomePage />} />
      <Route path={PATHS.aboutUs} element={<AboutUsPage />} />
      <Route path={PATHS.contactUs} element={<ContactUsPage />} />
      <Route path={PATHS.dashboard.index} element={<DashboardIndexPage />} />
      <Route path={PATHS.dashboard.usersList} element={<UsersListPage />} />
    </Routes>
  );
};

export default Router;
