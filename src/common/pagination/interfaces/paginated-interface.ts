export interface Paginated<T> {
  data: T[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  link: {
    first: string;
    last: string;
    current: string;
    previous: string;
    next: string;
  };
}
