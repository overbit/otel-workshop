import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuoteModuleBase } from "./base/quote.module.base";
import { QuoteService } from "./quote.service";
import { QuoteController } from "./quote.controller";
import { QuoteResolver } from "./quote.resolver";

@Module({
  imports: [QuoteModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuoteController],
  providers: [QuoteService, QuoteResolver],
  exports: [QuoteService],
})
export class QuoteModule {}
