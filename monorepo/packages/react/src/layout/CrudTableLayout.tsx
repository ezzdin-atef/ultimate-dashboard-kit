import Breadcrumb from "@/components/ui/Breadcrumb";
import CustomTable from "@/components/layout/Table";
import { HeadingL3 } from "@/components/typograph/Heading";
import Paragraph from "@/components/typograph/Paragraph";
import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";

export default function CrudTableLayout(props: CrudTableLayoutProps) {
  return (
    <PageContainer bg="white">
      <Breadcrumb currentPageName={props.name || props.title} />
      <div className="flex-row items-center justify-between space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
        <header>
          <HeadingL3>{props.title}</HeadingL3>
          {props.description && <Paragraph>{props.description}</Paragraph>}
        </header>
        <div className="flex gap-2">
          {!props.disableSearch && (
            <>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="block w-64 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </>
          )}
          {!props.disableAddingRecords && (
            <Link
              to={props.newButtonLink ?? "new"}
              className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {props.AddingIconButton ?? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              )}
            </Link>
          )}
        </div>
      </div>
      <CustomTable columns={props.table.columns} data={props.table.data} />
    </PageContainer>
  );
}
