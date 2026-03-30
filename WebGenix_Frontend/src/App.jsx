// src/App.jsx
// -------------------------------------------------------------
// App Routing Configuration
// - Handles public routes
// - Protects dashboard routes based on user roles
// - Redirects users to appropriate dashboards
// -------------------------------------------------------------

import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Public Pages
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import HelpCenterPage from './pages/HelpCenterPage';
import DocsPage from './pages/DocsPage';
import StatusPage from './pages/StatusPage';
import CommunityPage from './pages/CommunityPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import GdprPage from './pages/GdprPage';

// Dashboard Redirect Handler
import RedirectDashboard from './pages/RedirectDashboard';

// Role-Based Dashboards
import AdminDashboard from './pages/Admin_Dashboard_Pages/AdminDashboard';
import SupportDashboard from './pages/Support_Dashboard_Pages/SupportDashboard';
import ClientDashboard from './pages/Client_Dashboard_Pages/ClientDashboard';

// ----------------------
// Admin Dashboard Pages
// ----------------------
import AdminLayout from './pages/Admin_Dashboard_Pages/layout/AdminLayout';
import Overview from './pages/Admin_Dashboard_Pages/pages/Overview';
import Users from './pages/Admin_Dashboard_Pages/pages/Users';
import UserDetails from './pages/Admin_Dashboard_Pages/pages/UserDetails';
import Services from './pages/Admin_Dashboard_Pages/pages/Services';
import Profile from './pages/Admin_Dashboard_Pages/pages/Profile';
import Settings from './pages/Admin_Dashboard_Pages/pages/Settings';
// import Tickets from './pages/Admin_Dashboard_Pages/pages/Tickets';

// ----------------------
// Service Pages
// ----------------------
import StaticHostingPage from './pages/StaticHostingPage';
import DynamicHostingPage from './pages/DynamicHostingPage';
import WebsiteBuilderPage from './pages/WebsiteBuilderPage';
import EcommerceBuilderPage from './pages/EcommerceBuilderPage';
import WebsiteMigrationPage from './pages/WebsiteMigrationPage';
import DomainSearchPage from './pages/DomainSearchPage';
import DomainTransferPage from './pages/DomainTransferPage';
import BusinessEmailPage from './pages/BusinessEmailPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import GoogleWorkspacePage from './pages/GoogleWorkspacePage';
import SslCertificatePage from './pages/SslCertificatePage';
import WildcardSslPage from './pages/WildcardSslPage';
import RapidSslPage from './pages/RapidSslPage';
import BareMetalPage from './pages/BareMetalPage';
import BackupSolutionsPage from './pages/BackupSolutionsPage';
import SharedHostingPage from './pages/SharedHostingPage';
import VpsPage from './pages/VpsPage';

// Auth حماية (Route Guard)
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Global Header */}
      <Header />

      <Routes>
        {/* =====================================================
            PUBLIC ROUTES
        ===================================================== */}
        <Route path="/" element={<HomePage />} />

        {/* Redirects user to role-based dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RedirectDashboard />
            </ProtectedRoute>
          }
        />

        {/* =====================================================
            ADMIN DASHBOARD (ROLE: admin)
        ===================================================== */}
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Nested Admin Routes */}
          <Route path="overview" element={<Overview />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="tickets" element={<Tickets />} /> */}
        </Route>

        {/* =====================================================
            SUPPORT DASHBOARD (ROLE: support, admin)
        ===================================================== */}
        <Route
          path="/support/dashboard"
          element={
            <ProtectedRoute allowedRoles={['support', 'admin']}>
              <SupportDashboard />
            </ProtectedRoute>
          }
        />

        {/* =====================================================
            CLIENT DASHBOARD (ROLE: client)
        ===================================================== */}
        <Route
          path="/client/dashboard"
          element={
            <ProtectedRoute allowedRoles={['client']}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/* =====================================================
            SERVICE PAGES
        ===================================================== */}
        <Route path="/services/static-site-hosting" element={<StaticHostingPage />} />
        <Route path="/services/dynamic-site-hosting" element={<DynamicHostingPage />} />
        <Route path="/services/website-builder" element={<WebsiteBuilderPage />} />
        <Route path="/services/ecommerce-builder" element={<EcommerceBuilderPage />} />
        <Route path="/services/website-migration" element={<WebsiteMigrationPage />} />
        <Route path="/services/domain-search" element={<DomainSearchPage />} />
        <Route path="/services/domain-transfer" element={<DomainTransferPage />} />
        <Route path="/services/business-email" element={<BusinessEmailPage />} />
        <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/services/google-workspace" element={<GoogleWorkspacePage />} />
        <Route path="/services/ssl-certificates" element={<SslCertificatePage />} />
        <Route path="/services/wildcard-ssl" element={<WildcardSslPage />} />
        <Route path="/services/rapidssl" element={<RapidSslPage />} />
        <Route path="/services/bare-metal" element={<BareMetalPage />} />
        <Route path="/services/backup-server" element={<BackupSolutionsPage />} />
        <Route path="/services/vps" element={<VpsPage />} />
        <Route path="/services/shared-hosting" element={<SharedHostingPage />} />

        {/* =====================================================
            GENERAL PAGES
        ===================================================== */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/gdpr" element={<GdprPage />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;