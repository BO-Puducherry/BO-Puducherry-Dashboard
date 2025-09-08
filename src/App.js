import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Magnet from './Magnet';
import GradientText from './GradientText';

const quotes = [
  "Integrity is doing the right thing, even when no one is watching.",
  "Trust is built on integrity, maintained by consistency.",
  "Let honesty and ethics be your permanent badge at work.",
  "Excellence is not an act, but a habit.",
  "Good enough is never enough when excellence is possible.",
  "Pursue progress, aim for excellence.",
  "There is no substitute for hard work.",
  "Effort is the engine of achievement.",
  "Success starts with showing up and working hard, every day.",
  "Creativity is intelligence having fun.",
  "Don’t just work harder—work smarter and think differently.",
  "Innovation begins where routines end.",
  "Discipline is the bridge between goals and accomplishment.",
  "Stay committed to consistency—it creates momentum.",
  "Small daily improvements through discipline lead to big achievements."
];

const Header = ({ toggleTheme, theme }) => (
  <header className="header d-flex flex-column align-items-center p-3">
    <div className="d-flex justify-content-end w-100">
        <button onClick={toggleTheme} className="btn btn-outline-secondary theme-switcher">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    </div>
    <img src={'./assets/logo.jpg'} alt="Logo" className="header-logo mb-3" />
    <h1 className="header-title">BO Puducherry • Register Dashboard</h1>
    <div class='mt-3'>
      <a href="https://cag.gov.in/en" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">CAG Website</a>
      <a href="https://cag.gov.in/ag2/tamil-nadu/en/page-ag2-tamil-nadu-page-ersa-tamil-nadu-bo-puduvai" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">PAG (Audit II)</a>
      <a href="https://cag.gov.in/ag2/tamil-nadu/en/page-ag2-tamil-nadu-page-ersa-tamil-nadu-bo-puduvai" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">About Branch Office</a>
    </div>
  </header>
);

const QuoteOfTheDay = () => {
  const day = new Date().getDate();
  const quoteIndex = day % 15;
  return (
    <div className="quote-banner">
      <div className="quote-content">
        <p className="mb-0">Quote of the Day:</p>
        <GradientText>
          {quotes[quoteIndex]}
        </GradientText>
      </div>
    </div>
  );
};

const MainContent = () => (
  <div className="main-content container-fluid">
    <div className="row">
      <div className="col-md-8 mb-4">
        <div className="highlights-card">
          <h2>Branch Office Highlights</h2>
          <ul>
            <li>Digital Register Automation successfully implemented using Microsoft Forms, Excel, Power Automate, and Power BI.</li>
            <li>Key registers such as Dispatch, Purport, and Monday Register are now auto-generated and interlinked.</li>
            <li>Monthly submission to Headquarters streamlined via e-Office integration.</li>
            <li>Interactive dashboards developed in Power BI for real-time insights and monitoring.</li>
            <li>Media Clippings Portal launched to support Audit Leads with contextual references and trends.</li>
            <li>Auditee selection enhanced through risk-based sampling model built using Tableau.</li>
            <li>Performance Audit taken up on the "Implementation of Smart City Mission".</li>
            <li>Compliance Audit taken up on the "Implementation of Coastal Regulation Zone (CRZ) norms in the UT of Puducherry".</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="action-buttons d-grid gap-3">
          <a href="https://forms.office.com/r/KfSy0YHYKf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Data Entry Form</a>
          <a href="https://cagiaad-my.sharepoint.com/:x:/g/personal/braupuducherry_cag_gov_in/EQwU6KzOwalOhwrv_vNZe5cB67GUdhcpguFuQG97BSlX6g?e=HyTBUJ&wdLOR=c008747AB-2CFD-4AF5-96D7-2370E6CC1B36" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Excel Registers</a>
          <a href="https://cagiaad.sharepoint.com/:u:/s/BOnewspaperclippings/EYVwEBg1GylBghIgh_-22xcBdWnDHTIQ2kuvP041LWgG9w?e=VEj4li" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Media Clippings</a>
          <Magnet>
            <a href="https://app.powerbi.com/reportEmbed?reportId=8867068b-e052-4c19-8467-ab9b6fe45610&autoAuth=true&ctid=11f913f7-47f1-492f-8558-237196821266" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Analytics</a>
          </Magnet>
          <button className="btn btn-outline-secondary" disabled>Innovation Ahead</button>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-12">
        <div className="highlights-card">
          <h2>Register Analytics</h2>
          <div className="iframe-container">
            <iframe title="Purport Dashboard" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=8867068b-e052-4c19-8467-ab9b6fe45610&autoAuth=true&ctid=11f913f7-47f1-492f-8558-237196821266" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>Powered by <strong>Branch Office, Puducherry</strong> • Digital Registers 2025</p>
  </footer>
);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme + '-mode';
  };

  useEffect(() => {
    document.body.className = theme + '-mode';
  }, [theme]);

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <QuoteOfTheDay />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
