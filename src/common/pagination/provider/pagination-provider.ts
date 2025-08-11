import { Inject, Injectable } from "@nestjs/common";
import { ObjectLiteral, Repository } from "typeorm";
import { PaginationQueryDto } from "../dtos/pagination-query.dto";
import { Request } from "express";
import { REQUEST } from "@nestjs/core";
import { Paginated } from "../interfaces/paginated-interface";

@Injectable()
export class PaginationProvider {
  constructor(
    /**
     * injecting request
     */
    @Inject(REQUEST)
    private readonly request: Request
  ) {}
  public async paginateQuery<T extends ObjectLiteral>(
    paginatedQuery: PaginationQueryDto,
    repository: Repository<T>
  ): Promise<Paginated<T>> {
    let results = await repository.find({
      skip: (paginatedQuery.page! - 1) * paginatedQuery.limit!,
      take: paginatedQuery.limit,
    });
    /**
     * Create the request Url
     */
    const baseUrl =
      this.request.protocol + "://" + this.request.headers.host + "/";
    const newUrl = new URL(this.request.url, baseUrl);

    console.log(newUrl);

    /**
     *  Calculating page numbers
     */
    const totalItems = await repository.count();
    const totalPages = Math.ceil(totalItems / paginatedQuery.limit!);
    const nextPage =
      paginatedQuery.page === totalPages
        ? paginatedQuery.page
        : paginatedQuery.page! + 1;
    const previousPage =
      paginatedQuery.page === 1
        ? paginatedQuery.page
        : paginatedQuery.page! - 1;

    const finalResponse: Paginated<T> = {
      data: results,
      meta: {
        itemsPerPage: paginatedQuery.limit!,
        totalItems: totalItems,
        currentPage: paginatedQuery.page!,
        totalPages: totalPages,
      },
      link: {
        first: `${newUrl.origin}${newUrl.pathname}?limit=${paginatedQuery.limit}&page=1`,
        last: `${newUrl.origin}${newUrl.pathname}?limit=${paginatedQuery.limit}&page=${totalPages}`,
        current: `${newUrl.origin}${newUrl.pathname}?limit=${paginatedQuery.limit}&page=${paginatedQuery.page}`,
        next: `${newUrl.origin}${newUrl.pathname}?limit=${paginatedQuery.limit}&page=${nextPage}`,
        previous: `${newUrl.origin}${newUrl.pathname}?limit=${paginatedQuery.limit}&page=${previousPage}`,
      },
    };
    return finalResponse;
  }
}
