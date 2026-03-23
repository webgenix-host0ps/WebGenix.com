import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
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

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
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
      <Footer />
    </div>
  );
}

export default App;
