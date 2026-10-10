# Viraj's portfolio

A static portfolio for AI/ML engineering, full-stack development, and visual design. Open `index.html` through a local static web server. There is no build step or package installation.

## Deployment

The production repository is https://github.com/virajkvk18/Portfolio, branch `main`. The existing website is https://portfolio-virajvishwakarma.netlify.app/. Keep the existing Netlify repository integration and publish the repository root.

## Contact form inbox delivery

The `portfolio-enquiry` form uses Netlify Forms. Email links and Gmail drafts are addressed to **virajvishwakarma672@gmail.com**. Gmail drafts are opened for the visitor to review and send; they do not automatically send email.

To receive website submissions in that inbox:

1. In the existing Netlify project, enable form detection if it is disabled, then deploy the updated `main` branch.
2. Open **Forms → Submission notifications** and add an email notification for `portfolio-enquiry` addressed to **virajvishwakarma672@gmail.com**.
3. Submit a clearly labeled test enquiry on the deployed website. Confirm it appears in Netlify Forms and in the Gmail inbox (also check spam).

This setting requires access to the Netlify account and is not configured by an HTML email field or a Gmail connection in Codex. Do not put Gmail passwords or email service credentials in the frontend. A successful form response means the hosting service accepted the submission; it does not verify inbox delivery.

Reference: https://docs.netlify.com/manage/forms/notifications/

## Content and motion

- Existing projects and achievements are retained.
- Growth Square's logo was supplied by Viraj; the role is Creative & Visual Design Intern. Community context comes from https://www.growthsq.in/.
- After Hours and Shape Shift are explicitly labeled portfolio concepts, not commissioned client work.
- `studio.css` extends the existing palette. `script.js` handles navigation, project browsing, reveals, color directions, motion controls, and form submission.
- Reduced-motion preferences are respected. The studio pause control pauses decorative animation across the page.

## Verification

Run `node --check script.js` and `git diff --check`. Browser checks cover desktop and mobile layouts, local assets, section anchors, keyboard menu operation, project controls, palette selection, pause/resume, and failed-submission draft preservation. Local preview cannot deliver Netlify Forms submissions.
