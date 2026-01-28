## e-plantShopping

**e-plantShopping** (Paradise Nursery) is a React-based single-page application that allows users to browse and purchase a curated selection of plants through an intuitive shopping cart experience.

### Overview

This application showcases a fictional online plant nursery called **Paradise Nursery**. Users can discover different types of plants, view details for each plant, and manage a shopping cart from landing to checkout.

### Key Features

- **Landing page**
  - Prominent introduction to Paradise Nursery.
  - Clear call-to-action button that navigates to the product listing page.

- **Navigation bar**
  - Links to the Landing page, Product Listing page, and Shopping Cart page.
  - Provides a consistent way to move between core sections of the app.

- **Product listing**
  - A card for each plant displaying:
    - Plant image
    - Name
    - Description
    - Cost
    - **Add to cart** button

- **Plant sections**
  - At least two themed sections to organize plants, such as:
    - **Aromatic Plants**
    - **Medicinal Plants**
  - Each section highlights plants that fit the theme, improving discoverability.

- **Shopping cart**
  - Dedicated Cart page listing all products currently in the cart.
  - Each cart item is shown as a card with:
    - Thumbnail image
    - Unit cost
    - Quantity controls (increase/decrease)
    - Calculated subtotal for that plant type
    - **Delete** button to remove the plant from the cart
  - Global cart controls:
    - **Continue Shopping** button to return to the product listing
    - **Checkout** button to proceed with the purchase flow (mock/placeholder by default)

### Tech Stack

- **Frontend**: React (Vite-based setup)
- **State Management**: Redux Toolkit (cart slice)
- **Styling**: CSS modules / component-level CSS files

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open the URL printed in your terminal (typically `http://localhost:5173`) to use the **e-plantShopping** application.

### Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build locally.

### Project Structure (high level)

- `src/App.jsx`: Main application component and routing.
- `src/ProductList.jsx`: Displays plant cards and sections.
- `src/CartItem.jsx`: Renders individual items within the cart.
- `src/CartSlice.jsx`: Redux slice managing cart state and actions.
- `src/AboutUs.jsx`: About/landing-related content for Paradise Nursery.

### License

This project is licensed under the terms described in the `LICENSE` file.