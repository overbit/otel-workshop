import { Module } from "@nestjs/common";
import { QuoteModuleBase } from "./base/quote.module.base";
import { QuoteService } from "./quote.service";
import { QuoteController } from "./quote.controller";
import { QuoteResolver } from "./quote.resolver";

@Module({
  imports: [QuoteModuleBase],
  controllers: [QuoteController],
  providers: [QuoteService, QuoteResolver],
  exports: [QuoteService],
})
export class QuoteModule {}
