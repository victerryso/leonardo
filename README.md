# Leonardo.Ai Web Team Technical Challenge V3.4.1

## Getting Started

Follow these steps to set up and run the application locally:

1. Clone the repository

```bash
git clone https://github.com/victerryso/leonardo.git
```

2. Install dependencies

```bash
npm ci
```

3. Run the application

```bash
npm run dev
```

4. Open the application

```bash
open http://localhost:3000
```

## Deployment

The app is deployed onto [Vercel](https://vercel.com/) and can be accessed by going to [leonardo-tau.vercel.app](https://leonardo-tau.vercel.app)

## Checklist

- [ ] Please document your code appropriately.
- [ ] Set up a NextJS project using the App router with TypeScript.
- [ ] Ensure your project is set up with git.
- [ ] Use the ChakraUI component library for UI elements and styling.
- [ ] Ensure your product is responsive for mobile and desktop.
- [ ] Have a blocking element (page / modal / etc) that prevents access to all other pages and data:
  - [ ] On this blocking element, get from the user a username and job title.
  - [ ] Save the user’s username and job title information, in a way you best see fit, so the data persists between reloads.
    - [ ] A user must be able to view this information somewhere in full, once the username and job title information has been entered.
    - [ ] A user must be able to change this information after it has been submitted.
- [ ] Use Apollo client to query a public GraphQL API.
  - [ ] Ensure that you pick a GraphQL API and data structure that provides images.
  - [ ] Ensure the data and images are displayed.
  - [ ] Ensure this data is not retrieved until the user has entered their username and job title information.
- [ ] Display the GraphQL API data as a paginated list of items on an “Information Page”.
- [ ] A user must be able to directly link (via URL) to a specific page of the paginated data.
- [ ] When an item is clicked on the “Information Page”, it must open a modal that displays the information about that item.
- [ ] Deploy on Vercel free tier.
