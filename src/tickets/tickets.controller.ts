import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController 
{
  @Get()
  GetAllTickets(): string {
    return 'tickets 1 - 2 - 3 - 4 - 5 - 6'
  }
}
