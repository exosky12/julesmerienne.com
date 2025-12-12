# JulesMerienne.com

This is the source code for the personal portfolio and website of Jules Merienne.
It is built using **AdonisJS**, **Inertia.js**, **React**, and **Tailwind CSS**.

## detailed Tech Stack

- **Framework:** [AdonisJS v6](https://adonisjs.com/)
- **Frontend Integration:** [Inertia.js](https://inertiajs.com/)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** PostgreSQL (using [Lucid ORM](https://lucid.adonisjs.com/))
- **Deployment:** [Koyeb](https://www.koyeb.com/) / Docker
- **Analytics:** [PostHog](https://posthog.com/)

## Getting Started

### Prerequisites

- Node.js (v20+)
- pnpm
- PostgreSQL

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/exosky12/julesmerienne.com.git
    cd julesmerienne.com
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Environment Setup:**
    Copy the example environment file and configure it:

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your database credentials and other secrets.

    **Analytics (PostHog):**
    Add the following to your `.env` file:

    ```
    VITE_POSTHOG_API_KEY=your_key_here
    VITE_POSTHOG_HOST=https://eu.i.posthog.com
    ```

4.  **Database Migration:**
    Run the migrations to set up the database schema:

    ```bash
    node ace migration:run
    ```

5.  **Start the Development Server:**
    ```bash
    pnpm run dev
    ```
    The application will be available at `http://localhost:3333`.

## Scripts

- `pnpm run dev`: Start the development server with HMR.
- `pnpm run build`: Build the application for production.
- `pnpm run test`: Run the test suite.
- `pnpm run lint`: Lint the codebase.

## Directory Structure

- `app/`: AdonisJS application code (Controllers, Models, etc.)
- `database/`: Migrations and seeders.
- `inertia/`: React frontend application (Pages, Components).
- `resources/`: Views (Edge templates) and other resources.
- `start/`: Application boot and routes.
