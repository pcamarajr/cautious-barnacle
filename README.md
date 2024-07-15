Proposal for Frontend Case Study: a `page` that displays a list
of `Products/Services` with a `AddNew` button for adding new `Records`.

## Requirements

This Case Study will focus on the implementation of the Dialog to add a new
item - _the list of items was intentionally ignored_.

- ~~It should have a page to list products/services.~~
- It should have a button to add a new product/service.
- It should display a dialog to add a new product/service.
- The dialog should have a form with the following fields:
    - Name
    - Type (Product/Service)
    - Unit
    - Price
    - VAT
- The Unit Field should fetch the data from an API.
- The Unit Field should allow the user to add a new unit.
- A Toast should display a message when the user adds a new unit.
- The dialog should have a button to submit the form.

## Implementation

For this implementation I:

- used Next.js to create a simple page with a button (_note that no project
  cleanup was made_)
- used [React Hook Form](https://react-hook-form.com/) to handle the form
- used [React Query](https://tanstack.com/query/v3) to fetch the units from an
  API (mocked)
- used [Headless UI](https://headlessui.dev/) to create the Dialog, Select and
  ComboBox components
- used [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
  to display the toast message
- **haven't implemented any styling, feedback, error handling or validations**
    - on the other hand, the code was implemented in a way to make it an
      easy-peasy
      task

### The folder structure

Based on the provided context and the characteristics of your project, here's a
proposed folder structure description:

```
project-root/
│
├── app/                        # Main application source code
│   ├── components/             # Reusable components
│   │   └── Providers/          # Context providers
│   │
│   ├── pages/                  # Pages of the application
│   │   ├── page.tsx            # Home page
│   │   └── products/           # Products section
│   │       └── page.tsx        # Products listing page
│   │
│   ├── services/               # Services for API calls and state management
│   │   ├── products/           # Product-related services
│   │   └── units/              # Unit-related services
│   │
│   └── layout.tsx              # Root layout component
│
├── docs/                       # Documentation and diagrams
│   └── AppComponentDiagram.puml    # UML diagram of app components
│
├── public/                     # Static files like images and favicon
│
├── styles/                     # Global styles
│
├── README.md                   # Project documentation
│
└── package.json                # NPM package configuration
```

### Components

For this, I thought that the reusability of Form components would
provide greater value to the project, we can consider two types of Form
components:

#### UI Components

- `InputText`, `InputNumber` and `InputCheckbox` implements `HTMLInputElement`
- `ComboBox` and `Select` implements `@headlessui/react` components
- `Combobox` also has an optional `onAddNew` prop to handle the creation of new
  items

#### Controlled Components

- `ControlledText`, `ControlledNumber`, `ControlledCheckbox`, `ControlledSelect`
  and `ControlledCombobox` implements `React Hook Form` components.
    - They require `Control` from `react-hook-form` and they use `Typescript` to
      ensure the correct `name` is being used.`

#### Components Diagram

The Components Diagram at `docs/AppComponentDiagram.puml`, is a PlantUML file
that can
be rendered using the PlantUML extension
for [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
or [IntelliJ IDEA](https://plugins.jetbrains.com/plugin/7017-plantuml-integration).

### Services

The services are and abstraction to handle the API calls and state management
built on top of `@tanstack/react-query`. Please note that the API Endpoints
weren't implemented, so it simply calls a function that returns a mocked data.

- `useFetchUnits` fetches the units from the API
- `useMutateUnit` adds a new unit to the API
- `useMutateProduct` adds a new product to the API

## Final notes

I've implemented the solution based purely on my understanding of the given
requirements, but there are open questions that could change the implementation.

Practicing with the provided requirements was very constructive to me, I've
acquired knowledge of the basics of Components UML Diagram, something I've never
done before, I do expect that some issues are present in the diagram, but I'm
willing to learn and improve.

To wrap up, I'll leave below my open questions, and hope to receive feedback on
my implementation.🤞👋

### Open questions

#### Products list

1. Should I care for the Products List page?
2. Should I care about the Edit and Delete options?
3. What about the Action menu in the table row?

#### Add product dialog

1. Clicking on the Close should prevent closing when the form state is dirty?
2. Product and Service are Checkboxes, which semantically should allow users to
   select both. Is this the expected behavior?
3. Which Fields are required to enable saving?
4. Should the Add button be disabled when form state is invalid?
    1. Or, should we display validation messages for every field?
7. The Cancel button (there’s a typo on the specs) should have the same behavior
   as the close button?
8. The VAT values are a list fetched from the REST API?
9. When successful add a new product, should we close the dialog?
    1. Or, should we clean the state and display a toast?

## Running

First, run the development server:

  ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project
uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check
out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
