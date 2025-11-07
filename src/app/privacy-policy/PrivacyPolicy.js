'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import { safeBodyClass } from '../../utils/safeBodyClass';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    initNavigation();
    initMouseCursor();
    initSmoothScroll();
    
    // Hide preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        safeBodyClass.add('loaded');
      }, 1000);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .privacy-wrapper {
          background-color: #000;
          min-height: 100vh;
        }
        .privacy-header {
          text-align: center;
          background-color: #000;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }
        .privacy-header-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .privacy-header-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .privacy-title {
          color: #fff;
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .privacy-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .privacy-title {
            font-size: 3.75rem;
          }
        }
        .privacy-subtitle {
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }
        .last-updated {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 1rem;
        }
        .breadcrumb-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          margin-top: 2rem;
        }
        .breadcrumb-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-link:hover {
          color: #22d3ee;
        }
        .breadcrumb-separator {
          color: #4b5563;
        }
        .breadcrumb-active {
          color: #22d3ee;
        }
        .privacy-content {
          background-color: #000;
          padding-top: 2rem;
          padding-bottom: 5rem;
        }
        .content-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .content-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .section {
          margin-bottom: 3rem;
        }
        .section-number {
          color: #22d3ee;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }
        .section-title {
          color: #fff;
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 2.25rem;
          }
        }
        .section-text {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        @media (min-width: 768px) {
          .section-text {
            font-size: 1.125rem;
          }
        }
        .subsection-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .subsection-title {
            font-size: 1.5rem;
          }
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }
        .list-item {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .list-item::before {
          content: '•';
          color: #22d3ee;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .use-case-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        @media (min-width: 768px) {
          .use-case-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .use-case-card {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .use-case-card:hover {
          border-color: #06b6d4;
        }
        .use-case-number {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .use-case-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .use-case-text {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        .security-measures {
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05));
          border-left: 4px solid #06b6d4;
          border-radius: 0 0.5rem 0.5rem 0;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .security-item {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .security-item::before {
          content: '✓';
          color: #22d3ee;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .retention-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        @media (min-width: 768px) {
          .retention-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .retention-item {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1rem;
        }
        .retention-label {
          color: #22d3ee;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        .retention-value {
          color: #d1d5db;
          font-size: 0.875rem;
        }
        .contact-box {
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        .contact-info {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .contact-email {
          color: #22d3ee;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        .contact-email:hover {
          color: #67e8f9;
        }
        .compliance-box {
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), rgba(6, 182, 212, 0.05));
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 3rem 0;
        }
        .compliance-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .compliance-text {
          color: #d1d5db;
          line-height: 1.75;
        }
      `}</style>
      <div className="privacy-wrapper">
        <Header />
        
        {/* Header Section */}
        <div className="privacy-header">
          <div className="privacy-header-container">
            <div className="privacy-header-inner">
              <h1 className="privacy-title">Privacy Policy</h1>
              <p className="privacy-subtitle">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <p className="last-updated">Last updated: July 16, 2025</p>
              <nav className="breadcrumb-nav">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">Privacy Policy</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="privacy-content">
          <div className="content-container">
            <div className="content-inner">
              
              {/* Section 1 */}
              <section className="section">
                <div className="section-number">1. Introduction</div>
                <p className="section-text">
                  InstaBiz Web ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              {/* Section 2 */}
              <section className="section">
                <div className="section-number">2. Information We Collect</div>
                <h3 className="subsection-title">Personal Information</h3>
                <ul className="list">
                  <li className="list-item">Contact Information: Name, email address, phone number, business address</li>
                  <li className="list-item">Business Information: Company name, industry, project requirements</li>
                  <li className="list-item">Payment Information: Billing address, payment method details (processed securely)</li>
                  <li className="list-item">Communication Records: Messages, emails, and call logs related to our services</li>
                </ul>
                <h3 className="subsection-title">Technical Information</h3>
                <ul className="list">
                  <li className="list-item">Website Usage: IP address, browser type, device information, pages visited</li>
                  <li className="list-item">Cookies: Preferences, session data, analytics information</li>
                  <li className="list-item">Performance Data: Website speed, user interactions, error logs</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="section">
                <div className="section-number">3. How We Use Your Information</div>
                <div className="use-case-grid">
                  <div className="use-case-card">
                    <div className="use-case-number">1</div>
                    <div className="use-case-title">Service Delivery</div>
                    <div className="use-case-text">To provide, maintain, and improve our digital solutions and services</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-number">2</div>
                    <div className="use-case-title">Communication</div>
                    <div className="use-case-text">To respond to inquiries, provide support, and send project updates</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-number">3</div>
                    <div className="use-case-title">Payment Processing</div>
                    <div className="use-case-text">To process payments and maintain billing records</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-number">4</div>
                    <div className="use-case-title">Website Improvement</div>
                    <div className="use-case-text">To analyze usage patterns and improve user experience</div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="section">
                <div className="section-number">4. Information Sharing and Disclosure</div>
                <p className="section-text">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list">
                  <li className="list-item">Service Providers: With trusted partners who assist in service delivery (hosting, payment processing, analytics)</li>
                  <li className="list-item">Legal Requirements: When required by law, court order, or government regulations</li>
                  <li className="list-item">Business Protection: To protect our rights, property, or safety, or that of our users</li>
                  <li className="list-item">Business Transfers: In connection with any merger, sale, or acquisition of our business</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="section">
                <div className="section-number">5. Data Security</div>
                <h3 className="subsection-title">Security Measures</h3>
                <div className="security-measures">
                  <div className="security-item">SSL encryption for all data transmissions</div>
                  <div className="security-item">Secure payment processing through authorized gateways</div>
                  <div className="security-item">Regular security audits and updates</div>
                  <div className="security-item">Access controls and authentication protocols</div>
                  <div className="security-item">Data backup and recovery procedures</div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="section">
                <div className="section-number">6. Cookies and Tracking Technologies</div>
                <p className="section-text">
                  We use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
                <h3 className="subsection-title">Essential Cookies</h3>
                <p className="section-text">Required for website functionality and security</p>
                <h3 className="subsection-title">Analytics Cookies</h3>
                <p className="section-text">Help us understand website usage and improve performance</p>
              </section>

              {/* Section 7 */}
              <section className="section">
                <div className="section-number">7. Your Privacy Rights</div>
                <div className="use-case-grid">
                  <div className="use-case-card">
                    <div className="use-case-title">Access</div>
                    <div className="use-case-text">Request access to your personal information we hold</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-title">Correction</div>
                    <div className="use-case-text">Request correction of inaccurate information</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-title">Deletion</div>
                    <div className="use-case-text">Request deletion of your personal information</div>
                  </div>
                  <div className="use-case-card">
                    <div className="use-case-title">Portability</div>
                    <div className="use-case-text">Request transfer of your data to another service</div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="section">
                <div className="section-number">8. Data Retention</div>
                <p className="section-text">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <div className="retention-grid">
                  <div className="retention-item">
                    <div className="retention-label">Project Data</div>
                    <div className="retention-value">Retained for the duration of the project plus 3 years for support purposes</div>
                  </div>
                  <div className="retention-item">
                    <div className="retention-label">Payment Records</div>
                    <div className="retention-value">Retained for 7 years as required by tax and accounting regulations</div>
                  </div>
                  <div className="retention-item">
                    <div className="retention-label">Communication Records</div>
                    <div className="retention-value">Retained for 2 years for customer service purposes</div>
                  </div>
                  <div className="retention-item">
                    <div className="retention-label">Website Analytics</div>
                    <div className="retention-value">Anonymized data retained for 2 years for improvement purposes</div>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="section">
                <div className="section-number">9. Third-Party Services</div>
                <p className="section-text">
                  Our website and services may integrate with third-party services. These services have their own privacy policies:
                </p>
                <ul className="list">
                  <li className="list-item">Payment Processors: Secure payment gateways for transaction processing</li>
                  <li className="list-item">Analytics Services: Google Analytics for website performance monitoring</li>
                  <li className="list-item">Cloud Services: Hosting and storage providers with data protection agreements</li>
                  <li className="list-item">Communication Tools: Email and messaging platforms for client communication</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section className="section">
                <div className="section-number">10. International Data Transfers</div>
                <p className="section-text">
                  Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
                </p>
              </section>

              {/* Section 11 */}
              <section className="section">
                <div className="section-number">11. Contact Us</div>
                <p className="section-text">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="contact-box">
                  <div className="contact-info">
                    <strong>Email:</strong> <a href="mailto:info@instabizweb.com" className="contact-email">info@instabizweb.com</a>
                  </div>
                  <div className="contact-info">
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </div>
                  <div className="contact-info">
                    <strong>Data Protection Officer</strong><br />
                    InstaBiz Web, Ahmedabad, Gujarat, India
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section className="section">
                <div className="section-number">12. Changes to This Privacy Policy</div>
                <p className="section-text">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              {/* Compliance Section */}
              <section className="section">
                <div className="compliance-box">
                  <h3 className="compliance-title">Compliance Commitment</h3>
                  <p className="compliance-text">
                    InstaBiz Web is committed to complying with applicable data protection laws including the Information Technology Act, 2000 (India) and international standards such as GDPR where applicable. We regularly review and update our privacy practices to ensure continued compliance.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

