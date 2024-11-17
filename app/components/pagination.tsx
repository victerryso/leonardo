"use client";

import { Center, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./chakra/pagination";

interface PageChangeDetails {
  page: number;
  pageSize: number;
}

type PaginationProps = {
  count: number;
  onPageChange: (event: PageChangeDetails) => void;
  page: number;
  pageSize: number;
};

const Pagination = ({
  count,
  onPageChange,
  page,
  pageSize,
}: PaginationProps) => (
  <Center>
    <PaginationRoot
      count={count}
      page={page}
      pageSize={pageSize}
      onPageChange={onPageChange}
    >
      <HStack hideBelow="sm">
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
      <HStack hideFrom="sm">
        <PaginationPrevTrigger />
        <PaginationPageText />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  </Center>
);

export default Pagination;
