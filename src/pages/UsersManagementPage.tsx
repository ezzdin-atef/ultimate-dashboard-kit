import React from "react";
import ASideLayout from "@/layout/ASideLayout";
import CrudTableLayout from "@/layout/CrudTableLayout";
import { usersData } from "@/data/faker";

export default function UsersManagementPage() {
  return (
    <ASideLayout>
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
              <div className="inline-flex gap-1 items-center">
                <button type="button" className="focus:outline-none text-xs text-blue-600 font-medium hover:underline">
                  Edit
                </button>
                |
                <button type="button" className="focus:outline-none text-xs text-red-600 font-medium hover:underline">
                  Delete
                </button>
              </div>
            ),
          })),
        }}
      />
    </ASideLayout>
  );
}
