import * as graphql from "@nestjs/graphql";
import { QuoteResolverBase } from "./base/quote.resolver.base";
import { Quote } from "./base/Quote";
import { QuoteService } from "./quote.service";

@graphql.Resolver(() => Quote)
export class QuoteResolver extends QuoteResolverBase {
  constructor(protected readonly service: QuoteService) {
    super(service);
  }
}
