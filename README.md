# Ultimate Dashboard

Ultimate Dashboard is project aims to help building dashboards for multiple purposes faster and more flexible to move the headache of building Pages and UI components for dashboards to move focus into more important areas.

## Technologies built with

- NextJs
- TypeScript
- Tailwind CSS

## How to start developing

First, we clone this project

```bash
git clone URL
```

Next, we install dependencies

```bash
npm install
```

Now, we run it

```bash
npm run dev
```

Let's go to `http://localhost:3000` to view the dashboard

## Features

- Login Page
- Form UI Components
- Users Management Page
- Loading Page
- 404 Page

## Upcoming Features

- Statistics Page
- Settings Page
- Register Page
- Easy way for adding standard new pages (Standard Table with CRUD Operations)
- Esay way for building forms with simple inputs
- Esay way for building forms with complex UI form inputs
- RTL Support
- Suport mulitple languages

## Adding New Pages

You will need to follow these steps to establish your needs.

### Adding The Page File `.jsx`

1. Create new Page with First letter to be Capitalized, and ends with `Page` word as other existing pages.
1. Type your blueprint component.

This our blueprint component which you can use.

```jsx
import React from "react";
import ASideLayout from "@/layout/ASideLayout";

export default function ExamplePage() {
  return <ASideLayout>ExamplePage</ASideLayout>;
}
```

The `ASideLayout` Layout component used appove, is to add the sidebar and top nav layout, but if you want complete white screen to work with or other kind of layouts, then don't add it. (it's optional)

### Updating The Routes

We used in route management [React Router](https://reactrouter.com/en/main) so it's widly know and easy to use.

Go to `/src/router/index.tsx` file to add your route as needed.

### Updating The Sidebar

This optional, as you may want this page to be private or the link will be in another place.

Go to `/src/constant/SIDEBAR.tsx` to add your page link by adding new object in the array or add it as child for any of the parent links.

#### Add new item.

```jsx
{
    name: "Example Page",
    link: "/example/page",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
```

in previous example, we will append this object to `SIDEBAR_ITEMS` array and with your page name, link, and icon.

You can get svg icon from [heroicons.com](https://heroicons.com) and copy the JSX code

## Layouts Components

### Crud Table Layout

It's component layout used to make it easy to create pages with crud operations. view in table, delete, update actions can be inside table row, and add new record in the header section.

```jsx
// importing
import CrudTableLayout from "@/layout/CrudTableLayout";

// usage
<CrudTableLayout
  title="Users"
  description="Manage all your existing users or add a new one"
  table={{
    columns: [
      { accessor: "id", name: "ID" },
      { accessor: "name", name: "Name" },
      { accessor: "email", name: "Email" },
      { accessor: "role", name: "Role" },
      { accessor: "actions", name: "Actions", enableSorting: false },
    ],
    data: usersData.map((el) => ({
      id: el.id,
      name: el.name,
      email: el.email,
      role: el.role,
      actions: (
        <div className="flex gap-1 items-center">
          <button type="button" className="focus:outline-none text-xs text-blue-600 font-medium hover:underline">
            Edit
          </button>
          |<button type="button" className="focus:outline-none text-xs text-red-600 font-medium hover:underline">
            Delete
          </button>
        </div>
      ),
    })),
  }}
/>;
```

as previous example, we used imported the component and used it. we passed some props like title which represent the page title, description (optional) which represent the page description, and table data (columns, data).

#### Props

#### Table Object

In previous example, we seen that we sent this object

```jsx
{
  columns: [
    { accessor: "id", name: "ID" },
    { accessor: "name", name: "Name" },
    { accessor: "email", name: "Email" },
    { accessor: "role", name: "Role" },
    { accessor: "actions", name: "Actions", enableSorting: false },
  ],
  data: usersData.map((el) => ({
    id: el.id,
    name: el.name,
    email: el.email,
    role: el.role,
    actions: (
      <div className="flex gap-1 items-center">
        <button type="button" className="focus:outline-none text-xs text-blue-600 font-medium hover:underline">
          Edit
        </button>
        |<button type="button" className="focus:outline-none text-xs text-red-600 font-medium hover:underline">
          Delete
        </button>
      </div>
    ),
  })),
}
```

which contains 2 attributes:

- columns: it's type should be array of object of 2 attributes (accessor, name). accessor is the unique name of the column, and name is the column name to be shown. also there's an optional attribute is enableSorting which can be used to enable or disable sorting but it's enabled by default.
- data: it's an array of objects with attributes of the `accessors` that we made in `columns`

Stay tuned for new updates
