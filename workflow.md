## Architecture Summary

This is a **Next.js 13+ application** using the App Router architecture, built with React 19, and styled with Tailwind CSS. The app implements a user authentication system with both traditional credentials and OAuth (Google) login.

### Key Architectural Patterns:
- **MVC-like Structure**: Separates concerns with repositories (data access), services (business logic), and validators (input validation)
- **API Routes**: Uses Next.js API routes for backend functionality
- **Client-Side Authentication**: NextAuth.js handles session management with JWT strategy
- **Database**: MongoDB with Mongoose ODM for data persistence
- **Component-Based UI**: Reusable React components with Tailwind styling

### Folder Structure:
- app: Next.js App Router pages and API routes
- components: Reusable UI components (auth forms, basic layout)
- lib: Utility libraries (database connection)
- models: Mongoose schemas
- repositories: Data access layer
- services: Business logic layer
- validators: Input validation schemas

## Dataflow

### User Registration Flow:
1. User fills RegisterForm → POST to `/api/users`
2. API validates input with Zod schema
3. Service checks for existing email/username
4. Password hashed with bcryptjs
5. User created in MongoDB via repository
6. Redirect to login page

### User Login Flow:
1. User fills LoginForm → NextAuth credentials provider
2. Service validates email/password against database
3. NextAuth creates JWT session
4. User redirected to home page with session data

### Google OAuth Flow:
1. User clicks Google login → NextAuth Google provider
2. OAuth callback handled by NextAuth
3. Service creates/updates user in database
4. Session created and user redirected

### Protected Routes:
- SessionProvider wraps the app
- Pages check `useSession()` for authentication
- Unauthenticated users redirected to login

### Core Configuration:
- **package.json**: Dependencies (Next.js, NextAuth, MongoDB, Zod, Tailwind)
- **layout.js**: Root layout with SessionProvider, Nav, Footer
- **mongodb.js**: Database connection with caching