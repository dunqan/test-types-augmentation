import '@angular/router';

declare module '@angular/router' {
  interface ExtraOptions {
    sla: string;
  }
}

