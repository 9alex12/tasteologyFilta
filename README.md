# Tasteology Project

A web application built with Remix.js that showcases products with an elegant UI and smooth transitions. The project integrates with Contentful CMS for content management.

## 🚀 Features

- Modern, responsive design
- View Transitions API integration for smooth animations
- Dynamic product showcase with modal views
- Content management through Contentful CMS
- TypeScript support for better type safety

## 🛠️ Tech Stack

- **Framework:** Remix.js
- **Styling:** Tailwind CSS
- **CMS:** Contentful
- **Language:** TypeScript

## 🏗️ Project Structure

```plaintext
app/
├── api/
│   └── contentful/          # Contentful API integration
├── components/
│   ├── ComplementInfo/      # Product showcase component
│   └── HeroSection/         # Hero section component
└── routes/
    └── _index.tsx           # Main page route
```

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
   `npm install`
3. Set up your Contentful environment variables:
   `CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
VITE_CONTENTFUL_HOST="preview.contentful.com
`
Note: environment variables are uploaded to the repository although this is not ideal for ease of test review.

4. Run the development server:
`npm run dev`

## 💻 Development
The application uses Remix.js with TypeScript for type safety. Key features include:

- View Transitions: Implemented using the View Transitions API for smooth animations between product cards and modals
- Responsive Design: Mobile-first approach using Tailwind CSS
- Content Management: Dynamic content fetching from Contentful CMS

## Development analysis
- It is done using tailwind as a framework of styles to facilitate the styles which is oriented first mobile and stylized to a web design, this framework is chosen because it gives us freedom to style each element and its respective responsive.
- Remix is used to improve SEO, make use of SSR and improve performance, besides allowing the use of useLoaderData and loader to make the asynchronous call of the contentful api without having to use useState and useEffect, also the loader runs on the server and we can access the data on the client with the hook useLoaderData.
- Typescript is used to detect errors at development time, to achieve a static typing, more secure and to generate the autocompletion when developing.
## 📝 Content Model
### Product
The main content type in Contentful with the following fields:

- title : Product title
- text : Product description
- image : Product image asset

## 🎨 UI Components
- HeroSection: Main landing section
- ComplementInfo: Product showcase with interactive cards and modal views

## 🔧 Configuration
The project uses Contentful as its CMS. Make sure to:

1. Set up your Contentful space
2. Create the required content model
3. Add your environment variables

