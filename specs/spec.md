# Portfolio Specification Document

**Status:** Source of truth for implementation
**Target:** One-page professional portfolio for a Python software engineer
**Hosting:** GitHub Pages
**Primary objective:** Help establish professional online presence, through a website with minimal overhead.

---

## 1. Technology Stack

### Global directives

- Take note that the system will enforce minimum-release-age=10080 for pnpm packages.
- Use pnpm as package manager.
- Prefer typescript.

### Frameworks

**Astro.js**

Astro is selected because the portfolio is fundamentally a static content-driven website. It provides:

- Static HTML generation by default.
- Component-based development.
- Excellent performance.
- Markdown/content support.
- Simple GitHub Pages deployment.

### Styling

- tailwindcss @tailwindcss/vite (tailwind 4).

### Content

Use **Astro Content Collections** with Markdown/MDX where appropriate for repeatable content such as:

- Professional experience
- Selected technical work/projects

Simple site-wide information can remain in a typed configuration/data file.

### Icons

Use a lightweight icon solution only if necessary. Prefer accessible text links and simple inline SVGs over a large icon library.

### Build

Astro's static build output will be used for deployment.

---

# 2. One-Page Section Structure

The page will consist of the following sections, in this order:

1. **Hero**
2. **About**
3. **Professional Experience**
4. **Selected Technical Work**
5. **Technical Skills**
6. **Contact**

A compact navigation header may provide anchor links to these sections.

The page should remain a single URL/page rather than becoming a collection of separate portfolio pages.

---

# 3. Section Specifications

## 3.1 Hero / Introduction

### Purpose

Immediately communicate:

- Who the person is.
- Their professional role.
- Their primary technical area.
- Their experience level.
- What type of engineering work they do.

The hero should establish professional credibility without becoming a personal-branding exercise.

### Required content

- Professional title.
- Short professional introduction.
- Primary technical specialization.
- Years of professional experience.
- Optional location/remote-work statement.
- Primary contact action.
- Optional LinkedIn/GitHub links.

### Recommended structure

```text
[NAME]

[PROFESSIONAL TITLE]

[SHORT PROFESSIONAL INTRODUCTION]

[CONTACT] [GITHUB] [LINKEDIN]
```

The introduction should generally be no more than 2–3 sentences.

Avoid generic claims such as:

- "Passionate developer"
- "Code ninja"
- "10x engineer"
- "Technology enthusiast"

---

## 3.2 About

### Purpose

Provide enough context to make the person more than a job title while keeping the section concise.

This section should explain the engineer's professional background, preferred type of problems, and general approach to engineering.

### Required content

- Short professional background.
- Areas of engineering experience.
- Types of problems worked on.
- Engineering principles or working style, if useful.
- Relevant career context that strengthens credibility.

### Content target

Approximately **100–180 words**.

This should complement the hero rather than repeat it.

---

## 3.3 Professional Experience

### Purpose

This is the primary credibility section.

Because the portfolio is not intended to pretend to contain dozens of impressive side projects, professional experience should carry significant visual and informational weight.

### Required content per experience entry

Each entry should contain:

- Company name.
- Job title.
- Employment dates.
- Employment type, if relevant.
- Short description of the organization/context, if useful.
- 2–5 responsibility/achievement points.
- Relevant technologies.
- Quantifiable outcomes where they can be truthfully provided.

### Preferred content hierarchy

```text
COMPANY
ROLE · DATES

Short context statement.

• Responsibility / accomplishment
• Responsibility / accomplishment
• Technical problem solved
• Result or measurable impact

Technologies: Python · Django · ...
```

### Writing requirements

Experience descriptions should emphasize:

**Problem → technical work → outcome**

rather than simply listing responsibilities.

For example, prefer the conceptual structure:

> Built X to solve Y, resulting in Z.

over:

> Responsible for developing X.

No achievements, metrics, technologies, or responsibilities should be invented.

---

# 4. Selected Technical Work

## Purpose

Demonstrate technical problem-solving without requiring a large project portfolio.

This section should contain only a small number of genuinely useful examples.

Professional technical work may be included here when it provides a better demonstration of engineering ability than a conventional personal project.

### Recommended number

**2–4 entries maximum.**

The section should not become a project catalog.

### Required content per entry

- Project/work title.
- Short description.
- Problem being solved.
- Technical approach.
- Relevant technologies.
- Outcome/result, when available.
- Repository/demo link, if publicly available.

### Preferred structure

```text
PROJECT / TECHNICAL WORK TITLE

Problem:
[What problem existed?]

Solution:
[What was built and how?]

Result:
[What changed or what was achieved?]

Technologies:
[Technologies]

[Repository] [Demo]
```

The rendered website does not necessarily need literal `Problem`, `Solution`, and `Result` labels. The underlying content should nevertheless communicate those three elements.

### Important constraint

Do not create artificial projects solely to fill this section.

If there are only one or two strong examples, the section should remain small.

If a piece of professional work cannot be publicly described because of confidentiality, describe the technical problem at an appropriately non-confidential level or omit it.

---

# 5. Technical Skills

## Purpose

Provide recruiters and engineers with a fast overview of the technical areas covered by the portfolio.

This is an index, not a proficiency-ranking system.

### Required categories

Categories should be determined from the actual information supplied during implementation.

Potential categories include:

- Languages
- Frameworks
- Databases
- Cloud / Infrastructure
- Data / Messaging
- Testing
- Development Tools

Only categories containing meaningful information should be displayed.

### Presentation

Use simple grouped lists or tags.

Example structure:

```text
Languages
Python · TypeScript · ...

Backend
Django · FastAPI · ...

Databases
...

Infrastructure
Docker · ...
```

### Explicitly avoid

- Percentage proficiency bars.
- Star ratings.
- "Beginner / Intermediate / Expert" labels.
- Artificial skill scores.
- Large walls of technology logos.

The section should communicate breadth without making unsupported claims about proficiency.

---

# 6. Contact

## Purpose

Provide an obvious way for a recruiter, hiring manager, client, or engineer to initiate contact.

### Required content

At minimum:

- Professional email.
- LinkedIn profile, if applicable.
- GitHub profile, if applicable.

Optional:

- Short closing statement.
- Other relevant professional profile.

### No contact form

A contact form is unnecessary for this portfolio.

Using a direct email link avoids:

- Backend infrastructure.
- Form services.
- Spam-handling complexity.
- Additional maintenance.

### Structure

```text
Interested in working together?

[EMAIL]
[LINKEDIN]
[GITHUB]
```

---

# 7. Repository / File Structure

The implementation should use a small, conventional Astro project.

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   │
│   ├── content/
│   │   ├── experience/
│   │   │   └── ...
│   │   └── projects/
│   │       └── ...
│   │
│   ├── data/
│   │   └── site.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── astro.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

The exact number of components may be reduced during implementation if a component would contain trivial markup. The structure should remain simple rather than creating abstractions for their own sake.

---

# 8. Content / Data Structure

## 8.1 Site-wide information

Information that is unique to the portfolio as a whole should be stored in a typed file such as:

```text
src/data/site.ts
```

Conceptually:

```ts
export const site = {
  name: '...',
  title: '...',
  introduction: '...',
  about: '...',
  email: '...',
  github: '...',
  linkedin: '...',
};
```

The actual implementation should define an appropriate TypeScript type rather than relying on unstructured objects where useful.

---

## 8.2 Experience

Professional experience should use a structured content collection.

Each entry should contain fields conceptually equivalent to:

```yaml
company:
role:
startDate:
endDate:
location:
summary:
technologies:
  - ...
highlights:
  - ...
```

The schema should validate required fields.

Experience entries should be ordered by relevance/recentness, normally with the most recent experience first.

---

## 8.3 Projects / Technical Work

Technical work should use a separate structured content collection.

Conceptually:

```yaml
title:
summary:
problem:
solution:
result:
technologies:
  - ...
repository:
demo:
featured:
```

Optional fields should be genuinely optional.

For example, a project without a public repository should not require a fake or empty repository URL.

---

## 8.4 Skills

Skills can remain in the site configuration because they are primarily a compact taxonomy rather than long-form content.

Conceptually:

```ts
skills: {
  languages: [],
  backend: [],
  databases: [],
  infrastructure: [],
  tools: [],
}
```

Only categories and technologies supported by the supplied information should be included.

---

# 9. Visual and UX Direction

## Overall aesthetic

The design should communicate:

- Experienced.
- Technical.
- Calm.
- Precise.
- Professional.
- Modern without being trendy.

The visual design should feel like an engineer's professional site rather than a startup landing page.

### Layout

Use a centered content container with a constrained reading width.

Recommended characteristics:

- Generous vertical spacing.
- Clear section boundaries.
- Strong typographic hierarchy.
- Comfortable line height.
- Consistent horizontal alignment.
- Responsive layout from mobile through desktop.

Avoid unnecessarily wide text blocks.

---

## Typography

Typography is one of the primary visual elements.

Use:

- A highly readable sans-serif for normal content.
- A distinct but restrained treatment for headings.
- Monospace only where it has semantic value, such as technology names or small technical metadata.

Do not make the site look like a terminal or IDE.

Font loading should be minimized to preserve performance.

---

## Color

Use a restrained palette consisting of:

- Primary background.
- Primary text.
- Secondary/muted text.
- One restrained accent color.
- Borders/dividers where useful.

The accent should be used primarily for links and important interactive elements.

Avoid:

- Multiple competing accent colors.
- Large gradient backgrounds.
- Neon effects.
- Excessive shadows.
- Glassmorphism.

---

## Hero

The hero should have the strongest visual hierarchy.

It should not consume most of the viewport simply to create a dramatic landing page.

The visitor should be able to understand the professional identity quickly.

---

## Navigation

A simple sticky or static header may contain:

```text
Name        About  Experience  Work  Skills  Contact
```

On smaller screens, the navigation should remain usable without introducing a complicated mobile menu unless the number of navigation items makes it necessary.

Anchor links should navigate to the corresponding section.

---

## Experience presentation

Experience should receive more visual emphasis than decorative project cards.

A timeline or vertically structured list may be used, but it should remain simple.

Avoid visually heavy timelines with unnecessary graphics.

---

## Project presentation

Projects should use compact cards or vertically separated entries.

Each project should make the technical problem and solution easy to scan.

Do not use large stock imagery or decorative project thumbnails unless a project genuinely requires visual demonstration.

---

## Responsive behavior

The site must work comfortably at:

- Mobile phone widths.
- Tablet widths.
- Desktop widths.
- Large desktop displays.

Desktop layouts should collapse naturally rather than simply shrinking.

Touch targets should be sufficiently large for mobile use.

---

## Accessibility

The implementation should include:

- Semantic HTML.
- Correct heading hierarchy.
- Accessible navigation.
- Descriptive link text.
- Keyboard-accessible interactive elements.
- Visible focus states.
- Sufficient color contrast.
- Appropriate `alt` text for meaningful images.
- Decorative images marked appropriately.
- No information conveyed through color alone.
- Respect for `prefers-reduced-motion`.

Animations, if any, should be subtle and nonessential.

---

## Performance

The portfolio should prioritize fast initial rendering.

Requirements:

- Static HTML generation.
- Minimal JavaScript.
- No client-side framework required for static sections.
- No unnecessary third-party scripts.
- No analytics unless explicitly added later.
- No large images unless genuinely necessary.
- Avoid loading resources that are not visible or required.

The page should remain functional if JavaScript is unavailable.

---

# 10. SEO and Metadata

The base layout should provide appropriate document metadata.

At minimum:

- `<title>`
- Meta description
- Canonical URL where appropriate
- Open Graph metadata
- Appropriate language declaration
- Favicon
- Semantic headings

The title and description should be generated from the supplied professional information rather than generic template text.

A simple `robots.txt` and sitemap may be generated if appropriate for the GitHub Pages deployment.

No elaborate SEO system is required.

---

# 11. GitHub Pages Deployment

The portfolio will be deployed as a static Astro site through **GitHub Pages**.

## Repository

The source code should live in a GitHub repository dedicated to the portfolio.

The repository can use either:

- A user-site repository, if the desired public URL is the GitHub Pages root domain.
- A normal repository with GitHub Pages enabled, if a project-specific URL is acceptable.

The implementation must use the actual repository/site URL supplied during implementation when configuring Astro.

---

## Deployment mechanism

Use **GitHub Actions**.

The workflow should:

1. Trigger when changes are pushed to the production branch.
2. Install dependencies.
3. Build the Astro project.
4. Deploy the generated static output to GitHub Pages.

The deployment process should not require manually uploading the generated files.

Conceptually:

```text
Git push
   ↓
GitHub Actions
   ↓
npm install
   ↓
Astro build
   ↓
GitHub Pages deployment
```

---

## Astro configuration

The final `astro.config.ts` must contain the correct GitHub Pages configuration for the chosen repository structure.

The `site` and, where necessary, `base` values must correspond to the actual GitHub Pages URL.

These values must not be invented before the repository information is known.

---

## Production branch

Use one clearly defined production branch, normally:

```text
main
```

A push to that branch should deploy the current portfolio.

---

# 12. Updating the Portfolio After Implementation

The portfolio should be designed so that normal content updates do not require changing the visual components.

## Updating personal information

Edit:

```text
src/data/site.ts
```

Use this for:

- Name.
- Professional title.
- Introduction.
- About text.
- Contact information.
- Social profiles.
- Skills.

---

## Adding or updating experience

Experience entries should be maintained in:

```text
src/content/experience/
```

To add an experience:

1. Create a new content file.
2. Add the required metadata.
3. Write the experience description.
4. Commit the change.
5. Push to GitHub.

The website should automatically include the new entry.

The existing Astro components should not need to be modified.

---

## Adding or updating technical work

Technical work should be maintained in:

```text
src/content/projects/
```

To add a project:

1. Create a new content file.
2. Provide its title and required metadata.
3. Describe the technical problem and solution.
4. Add technologies and links where applicable.
5. Commit and push.

The project component should automatically render the new entry.

---

## Updating skills

Edit the skills data in:

```text
src/data/site.ts
```

Adding a technology should not require modifying the visual component.

---

## Publishing changes

The normal workflow should be:

```text
Edit content
    ↓
Run local development server
    ↓
Review changes
    ↓
Commit
    ↓
Push to GitHub
    ↓
GitHub Actions builds and deploys
```

The README should contain the exact commands required to run the project locally and build it for production.

---

# 13. Implementation Constraints

The implementation must remain within the original scope.

Do **not** add:

- Database.
- Backend.
- Authentication.
- CMS.
- Contact-form backend.
- Server-side rendering.
- User accounts.
- Complex state management.
- Heavy JavaScript framework.
- Animation framework unless genuinely necessary.
- Analytics by default.
- Image-management infrastructure.
- Blog system.
- Search system.
- Comments.
- Artificial project generators.
- Skill proficiency scoring.

The portfolio should be possible to understand and maintain by opening the repository and reading the content files.

---

# 14. Definition of Done

The portfolio implementation will be considered complete when:

- It is a single-page Astro website.
- It builds successfully as a static site.
- It is hosted on GitHub Pages.
- It is responsive.
- It is accessible using semantic HTML and keyboard navigation.
- The primary professional information is immediately visible.
- Professional experience is the principal credibility mechanism.
- Selected technical work demonstrates problem-solving without creating artificial breadth.
- Skills are presented without misleading proficiency scores.
- Contact information is immediately accessible.
- Content is separated sufficiently from presentation.
- Adding an experience or project does not require modifying the section component.
- No personal information has been invented.
- The site contains no unnecessary infrastructure.
- The repository includes clear instructions for local development and content updates.

---

# 15. Information required

The following information will be the **single source of factual input** for implementing the portfolio.

## Personal / Professional Identity

**Name displayed on portfolio**

MANUEL FERREIRA

**Professional title**

SENIOR SOFTWARE ENGINEER

**Years of professional experience**

5 YEARS

**Location**

Bogota, Colombia

**Socials**

https://www.linkedin.com/in/ferreiradevs/
https://github.com/jmferreirab
serious.owl551@passinbox.com

PROFESSIONAL SUMMARY
Skilled software developer and data engineer with over 5 years of experience designing, developing, and maintaining SaaS solutions and automation projects for data pipelines. Proven ability to manage the complete life cycle of software development and deliver independently or within a team. Passionate about artificial intelligence, cybersecurity, open-source, automation, problem-solving and optimization. Fluent in English (C2 level).
RELEVANT WORK EXPERIENCE
Teleperformance Nov 2019 – Present – 5 years
Lead software developer | Mar 2021 – Present – 3 years and 10 months Bogota, Colombia (Remote)
 Developed and maintained a distributed orchestration platform using Python, Javascript, Django, SQL Server, Microsoft Graph and Entra ID, to support over 2000 ETL pipelines for +3 years.
 Led 6 company-wide projects to automatically deliver KPI reports over email with Python and SSIS.
 Built chatbot prototypes for Teams with Microsoft Azure AI services (Hybrid Cloud, C#).
 Collaborated with senior management to advise on project direction, scope, and protocols.
 Conducted technical interviews for more than 20 candidates to hire for senior developer roles.

Data Analyst | Nov 2019 – Feb 2021 – 1 year and 4 months
 Built +10 data viz and automation projects using SQL Server, SSIS, Power BI, Excel, Python, and VBA.

EDUCATION & CERTIFICATIONS
Microsoft Certified Online
Azure Fundamentals (AZ-900) Feb 2025
Google Career Certificates on Coursera Online
Google Cybersecurity Specialization Nov 2024
SENA Bogota, Colombia
Cloud services and application development, Technician Degree Mar 2023 – Sep 2024
MinTic Colombia Bogota, Colombia
Cloud Architecture – TalentoTech Bootcamp Mar 2024 – Jun 2024
Universidad Distrital Francisco Jose de Caldas Bogota, Colombia
Systems Engineering Jan 2016 – Sep 2018

SKILLS
Languages and libraries: Python, Django, FastAPI, Pytest, Node.JS, Bootstrap, Airflow, Selenium, Pandas.
Databases: SQL Server, sqlite, MariaDB, MongoDB, CosmosDB.
Tools: Linux, WSL, Git, Gitlab, GitHub, Docker, SSIS, Power BI, Postman, Microsoft IIS, Windows Server, Sonarqube, Chrome DevTools, Jira, Monday.com, Notion, Prompt Engineering, VS Code, Snyk, Splunk.
Cloud services: AWS Lambda, Azure Functions, AWS Lambda, Google Collab, Microsoft AAD, IAM, AWS S3, Blob Storage, AWS Secrets Manager, AWS and AZ CLI.
Soft skills: Attention to detail, Problem solving, Enthusiasm, Leadership, Communication, Decision Making, Organization, Analytical thinking, Positivity.
