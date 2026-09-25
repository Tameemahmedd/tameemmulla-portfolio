import React from 'react';

const Experience = () => (
  <section id="experience" className="container">
    <h2>EXPERIENCE & TIMELINE</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-date">Nov 2025 – Present</div>
        <div className="timeline-content">
          <h3>Software Development Engineer in Test @ BrowserStack</h3>
          <p>Remote · <a className="case-link" href="/browserstack.html" target="_blank" rel="noopener noreferrer">View detailed work →</a></p>
          <ul>
            <li>Automated <strong>~970 test cases</strong> (<strong>~505 Playwright</strong>, <strong>~470 Nightwatch.js</strong>) in Cucumber BDD</li>
            <li>Closed coverage gaps in <strong>11 Growth modules</strong>:
              <ul>
                <li>Contact Sales / Demo form (<strong>form → Salesforce lead → RevenueHero</strong>)</li>
                <li>Checkout, Pricing Page, Webinars (<strong>90% → 100%</strong>)</li>
                <li>Hello Bar (<strong>33% → 100%</strong>), Lifecycle Emailers (<strong>48/52</strong>)</li>
                <li>Speedboat touchpoints (<strong>124/150</strong>), Pipe CTA leads (<strong>11/12</strong>), Abandoned leads</li>
              </ul>
            </li>
            <li>Migrated <strong>~260 tests</strong> from Nightwatch to <strong>Playwright</strong>, running in <strong>Jenkins CI</strong></li>
            <li>Regression cleanup: <strong>52 → 17</strong> feature files, all <strong>7,976 scenarios</strong> kept, <strong>799</strong> hard waits removed</li>
            <li>Fixed <strong>350+ failing test cases</strong>, raising regression stability from <strong>87% to 95%+</strong></li>
            <li>Wrote <strong>Ruby on Rails</strong> test endpoints that made <strong>~14</strong> Sidekiq/cron-only emails testable</li>
            <li>Raised <strong>70+ bugs</strong> (<strong>3 P0</strong>), incl. lost leads and wrong-plan checkout</li>
            <li>QA Owner for <strong>7 P0</strong> and <strong>11 P1</strong> online-sales features (paywall, pricing, Freshchat)</li>
            <li>Deploy SPOC for <strong>17 production deploys</strong>, incl. a build-break revert and a rollback</li>
            <li>Daily AI workflow: <strong>Claude Code</strong> skills for PR review and regression triage, <strong>MCP</strong> to classify <strong>150+ test cases</strong></li>
            <li><strong>189 Jira issues</strong> (160 shipped), <strong>329 PRs</strong>, <strong>153 reviews</strong></li>
            <li><strong>11 Empuls awards</strong>, incl. Extra Miler <strong>×4</strong></li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Aug 2024 – Sept 2025</div>
        <div className="timeline-content">
          <h3>Software Engineer Trainee @ Cisco Systems Inc</h3>
          <p>Bengaluru, India · <a className="case-link" href="/cisco.html" target="_blank" rel="noopener noreferrer">View detailed work →</a></p>
          <ul>
            <li>Developed <strong>125 tests</strong> and refactored <strong>102 legacy tests</strong> to achieve <strong>100% pass rate</strong>.</li>
            <li>Identified and fixed <strong>66 critical bugs</strong> including <strong>21 release blockers</strong> within 8 months.</li>
            <li>Boosted test coverage by <strong>25%</strong> and reduced manual testing with automation.</li>
            <li>Raised test pass percentage from <strong>65% to 96%</strong> by redesigning the framework.</li>
            <li>Spearheaded testing and certification for <strong>full modules</strong>, executing automation.</li>
            <li>Developed reusable, high-quality <strong>utilities</strong> to automate manual tasks.</li>
            <li>Led performance engineering efforts for <strong>AppDynamics Controller 25.7</strong> release.</li>
            <li>Received Connected Recognitions from leadership up to <strong>INR 48,000</strong>.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2019 – 2023</div>
        <div className="timeline-content">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p>Jawaharlal Nehru Technological University | CGPA: 7.52/10</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;