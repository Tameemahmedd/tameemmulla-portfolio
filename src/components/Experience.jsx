import React from 'react';

const Experience = () => (
  <section id="experience" className="container">
    <h2>EXPERIENCE & TIMELINE</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-date">Nov 2025 – Present</div>
        <div className="timeline-content">
          <h3>Software Development Engineer in Test @ BrowserStack</h3>
          <p>Remote ·<a className="case-link" href="/browserstack.html" target="_blank" rel="noopener noreferrer">View detailed work →</a></p>
          <ul>
            <li>Wrote ~970 automated test cases (~505 Playwright, ~470 Nightwatch.js) in Cucumber BDD, with 734 step definitions and 29 page objects, for revenue-critical checkout, pricing, lead-capture and lifecycle-email flows.</li>
            <li>Closed automation coverage gaps across 11 Growth modules, all merged: Contact Sales / Book-a-Demo form (form → Salesforce lead → RevenueHero booking), Checkout, Pricing Page, Webinars (90% → 100%), Pipe CTA leads (11/12), Abandoned-lead capture, Lifecycle Emailers (48/52), Speedboat touchpoints & intro modals (124/150), Hello Bar (33% → 100%) and Free Product Access.</li>
            <li>Migrated ~160+ test cases from Nightwatch to Playwright (V3 checkout flows, redirection, V4.2 switch-to-annual across all products, App Live intro modal) with 26 new page objects, and wired the new suites into Jenkins CI.</li>
            <li>Drove "Regression Under 30 Mins": consolidated 52 feature files into 17 with all 7,976 scenarios preserved, replaced 799 hard waits with polling and cookie-based auth, and fixed 64 failing scenarios from a single regression run.</li>
            <li>Shipped product code in Ruby on Rails (2 merged PRs): production-guarded test endpoints that made ~14 Sidekiq/cron-only lifecycle emails automatable.</li>
            <li>Raised 70+ bugs (40 in Jira incl. 3 P0s; 32 via Slack help channels → 24 tickets), including a contact-sales form silently dropping leads, staging traffic creating real production leads, and a paywall downgrade firing after the 5th failed payment instead of the 2nd.</li>
            <li>QA Owner for 7 P0 and 11 P1 online-sales features: paywall unlock rules, pricing-page experiments, contact-lead drop mitigation, Freshchat corporate-email validation and Test Management pricing updates.</li>
            <li>Deploy SPOC for 17 production deploy queues: caught and reverted a PR that broke a production build, called a pricing-page rollback, and blocked 5 unready PRs.</li>
            <li>Owned 189 Jira issues (160 shipped, 356 story points), authored 329 code PRs and reviewed 153.</li>
            <li>Use AI (Claude Code, Copilot, Cursor) daily: built Claude Code skills for PR-quality review (flags 10 test anti-patterns, contributed to the team's AI harness) and nightly regression triage (failures grouped by stack trace → Slack), and used MCP integrations with Jira, Slack, GitHub and BrowserStack Test Management to run gap analysis and classify 150+ test cases in bulk.</li>
            <li>Received 11 Empuls recognitions, including Extra Miler ×4, Round of Applause ×3 and Unsung Warriors ×2.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Aug 2024 – Sept 2025</div>
        <div className="timeline-content">
          <h3>Software Engineer Trainee @ Cisco Systems Inc</h3>
          <p>Bengaluru, India · <a className="case-link" href="/cisco.html" target="_blank" rel="noopener noreferrer">View detailed work →</a></p>
          <ul>
            <li>Developed 125 tests and refactored 102 legacy tests to achieve 100% pass rate.</li>
            <li>Identified and fixed 66 critical bugs including 21 release blockers within 8 months.</li>
            <li>Boosted test coverage by 25% and reduced manual testing with automation.</li>
            <li>Raised test pass percentage from 65% to 96% by redesigning the framework.</li>
            <li>Spearheaded testing and certification for full modules, executing automation.</li>
            <li>Developed reusable, high-quality utilities to automate manual tasks.</li>
            <li>Led performance engineering efforts for AppDynamics Controller 25.7 release.</li>
            <li>Received Connected Recognitions from leadership up to INR 48,000.</li>
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