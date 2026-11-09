# InkSpace — Blog & Content Management System

A polished, responsive editorial workspace built for the Full Stack Internship Task 06.

## Run locally

No database, backend server, package installation or build step is required.

1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open `index.html` in your browser (or use the VS Code Live Server extension).

## Features

- Editorial dashboard with sample analytics and traffic visualization
- Create, edit, save and publish articles
- Draft, published and archived status management
- Search, category filtering and article table
- Reader comment moderation (approve / delete)
- Category overview
- Responsive layout for desktop, tablet and mobile
- Dark / light theme preference
- Browser `localStorage` persistence
- Reference-only Express API sample under `backend-sample/`

## Important architecture note

The **frontend is the runnable application**. Article and comment changes are stored in the current browser using `localStorage`. No external database or API is connected.

The `backend-sample/` directory is included to demonstrate a possible backend structure for the internship submission. It is deliberately not started by the frontend and is not required for local use or GitHub Pages deployment. The API uses in-memory placeholder data only; it is not production persistence.

## Publish on GitHub Pages

1. Create a repository, for example `Task-06-Blog-Content-Management-System`.
2. Upload all files and folders from this project to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then Save.
6. Wait for the GitHub Actions deployment workflow to finish. Your site will be available at the Pages URL.

The included workflow deploys the static frontend. Backend sample files are uploaded as source code but are not deployed or executed by GitHub Pages.

## Suggested repository description

Professional responsive Blog & Content Management System with article editor, publishing workflow, analytics dashboard, comment moderation, localStorage persistence and reference Express API.
