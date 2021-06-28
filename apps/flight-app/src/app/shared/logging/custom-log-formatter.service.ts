import { Injectable } from '@angular/core';
import { LogFormatterService } from '@flight-workspace/logger-lib';

@Injectable({
  providedIn: 'root',
})
export class CustomLogFormatterService implements LogFormatterService {
  format(message: string): string {
    return `Using Custom Formatter: ${message}`;
  }
}
