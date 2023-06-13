interface BreadcrumbProps {
  currentPageName: string;
  prevPages?: Array<{ name: string; link: string }>;
  hideHome?: boolean;
}
