import { Injectable } from '@angular/core';
import { LogFormatterService } from './log-formatter.service';

@Injectable({
  providedIn: 'root',
})
export class DefaulLogFormatterService implements LogFormatterService {
  format(message: string): string {
    return `Using Default Formatter: ${message}`;
  }
}
