type EnvironmentsTypes = 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';

class EnvironmentSettings {
  constructor(private readonly mode: EnvironmentsTypes) {}

  getMode(): EnvironmentsTypes {
    return this.mode;
  }

  isProduction(): boolean {
    return this.getMode() === 'PRODUCTION';
  }

  isStaging(): boolean {
    return this.getMode() === 'STAGING';
  }

  isDevelopment(): boolean {
    return this.getMode() === 'DEVELOPMENT';
  }
}

class AppConfig {
  private environment: any;
  constructor(public mode: EnvironmentSettings) {
    this.environment = process.env;
  }

  get corsOptions() {
    return {
      origin: this.environment.FRONTEND_DOMAIN ?? 'http//localhost:3000/',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
    };
  }

  get port(): number {
    return this.environment.PORT ?? 8080;
  }

  get environmentsType(): EnvironmentsTypes {
    return this.mode.getMode();
  }
}

export const appConfig = new AppConfig(
  new EnvironmentSettings(<EnvironmentsTypes>process.env.MODE ?? 'DEVELOPMENT'),
);
